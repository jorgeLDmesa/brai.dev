// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Clave secreta para asegurar que solo tú llames este endpoint
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verificar token de seguridad
    const token = req.nextUrl.searchParams.get("secret");
    if (!token || token !== REVALIDATE_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const slug = body.slug as string;
    const type = body.type as "novedad" | "guia";

    // Rutas que vamos a refrescar
    const paths = [
      "/", // home (si muestras últimos posts)
      "/blog",
      `/blog/${type === "guia" ? "guias" : "novedades"}`,
      `/blog/${slug}`,
      "/sitemap.xml",
    ];

    // Usar el API interno de Next.js para revalidar cada ruta
    const revalidated: string[] = [];

    for (const path of paths) {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate-path?path=${encodeURIComponent(path)}&secret=${REVALIDATE_SECRET}`
        );
        revalidated.push(path);
      } catch (err) {
        console.error(`❌ Error revalidando ${path}`, err);
      }
    }

    return NextResponse.json({ revalidated });
  } catch (err) {
    console.error("❌ Error en revalidación", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
