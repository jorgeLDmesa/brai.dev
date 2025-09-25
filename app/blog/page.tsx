import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { Post } from "@/types";

export const revalidate = 21600; // 6h – suficiente para novedades de los viernes

export const metadata = {
  title: "Blog BRAI - Automatización IA Colombia | Guías y Casos de Éxito",
  description:
    "Guías completas sobre automatización con IA para empresas en Colombia. Casos de éxito, precios, implementación RPA y consultoría en inteligencia artificial empresarial.",
  keywords: [
    "automatización IA Colombia",
    "agencia automatización Colombia", 
    "RPA Colombia",
    "inteligencia artificial empresas Colombia",
    "consultoría IA Colombia",
    "automatización procesos empresariales",
    "transformación digital Colombia"
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog BRAI - Automatización IA en Colombia",
    description: "Las mejores guías y casos de éxito en automatización empresarial con IA en Colombia.",
    url: "https://www.brai.dev/blog",
    type: "website",
    locale: "es_CO"
  }
};

async function getPosts(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select(
      "id, type, status, title, slug, excerpt, cover_image_url, published_at"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(24);

  if (error) throw error;
  return data as Post[];
}

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          className="font-montserrat font-bold"
        >
          BLOG BRAI<span className="text-[#9ACA3C]">*</span> AUTOMATIZACIÓN IA COLOMBIA
        </h1>
        <p className="mt-3 text-muted-foreground max-w-3xl mx-auto text-lg">
          Guías completas sobre <strong>automatización con IA para empresas en Colombia</strong>. 
          Casos de éxito reales, precios, implementación RPA y consultoría en inteligencia artificial empresarial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="bg-[#9ACA3C] text-black px-4 py-2 rounded-full font-semibold text-sm">
            Automatización IA Colombia
          </span>
          <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
            RPA Colombia
          </span>
          <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm">
            Consultoría IA
          </span>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl border p-5 hover:shadow-sm transition-all"
          >
            {post.cover_image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
                loading="lazy"
              />
            ) : null}
            <div className="text-xs uppercase tracking-wide mb-2 opacity-70">
              {post.type === "guia" ? "Guía" : "Novedad"}
            </div>
            <h2 className="text-lg font-semibold leading-snug group-hover:underline">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.excerpt ? (
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
            ) : null}
            <div className="mt-4 text-xs text-muted-foreground">
              {post.published_at
                ? new Date(post.published_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })
                : null}
            </div>
          </article>
        ))}
      </div>

      {/* SEO Content Section */}
      <section className="mt-16 bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}>
          AUTOMATIZACIÓN CON IA EN COLOMBIA<span className="text-[#9ACA3C]">*</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D6F050]">¿Por qué elegir BRAI como tu agencia de automatización en Colombia?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como <strong>agencia de automatización</strong> líder en Colombia, BRAI ha transformado más de 50 empresas 
              con <strong>inteligencia artificial</strong> y <strong>automatización de procesos empresariales</strong>. 
              Nuestros clientes han logrado ahorrar un promedio del 70% del tiempo en sus operaciones diarias.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Especializados en <strong>automatización RPA</strong>, desarrollo de <strong>chatbots inteligentes</strong> y 
              <strong>consultoría en IA</strong> para empresas colombianas de todos los sectores y tamaños.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D6F050]">Servicios de Automatización IA en Colombia</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>✓ <strong>Automatización de procesos empresariales</strong> con IA avanzada</li>
              <li>✓ <strong>Implementación RPA</strong> para empresas colombianas</li>
              <li>✓ <strong>Desarrollo de chatbots</strong> y asistentes virtuales inteligentes</li>
              <li>✓ <strong>Consultoría en transformación digital</strong> y modernización</li>
              <li>✓ <strong>Integración de IA</strong> en sistemas ERP y CRM existentes</li>
              <li>✓ <strong>Capacitación especializada</strong> en automatización para equipos</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            <strong>Automatización IA Colombia</strong> | <strong>RPA Colombia</strong> | <strong>Inteligencia Artificial Empresarial</strong> | <strong>Consultoría IA</strong>
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#9ACA3C] to-[#D6F050] text-black px-8 py-3 rounded-full font-bold hover:from-[#D6F050] hover:to-[#9ACA3C] transition-all"
          >
            Consulta Gratuita de Automatización →
          </Link>
        </div>
      </section>
    </main>
  );
}