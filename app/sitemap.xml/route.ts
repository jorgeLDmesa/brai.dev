// app/sitemap.xml/route.ts
import { createClient } from "@/lib/supabase";

export const revalidate = 21600; // 6h

export async function GET() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("slug, updated_at, type")
    .eq("status", "published")
    .order("updated_at", { ascending: false })
    .limit(500);

  const baseUrl = "https://www.brai.dev";
  const now = new Date().toISOString();

  const staticUrls = [
    { loc: `${baseUrl}/`, lastmod: now, changefreq: "weekly", priority: 1.0 },
    { loc: `${baseUrl}/blog`, lastmod: now, changefreq: "daily", priority: 0.9 },
    { loc: `${baseUrl}/blog/guias`, lastmod: now, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/blog/novedades`, lastmod: now, changefreq: "weekly", priority: 0.8 },
  ];

  const postUrls = posts?.map((p) => ({
    loc: `${baseUrl}/blog/${p.slug}`,
    lastmod: new Date(p.updated_at).toISOString(),
    changefreq: p.type === "novedad" ? "weekly" : "monthly",
    priority: p.type === "novedad" ? 0.6 : 0.8,
  })) || [];

  const allUrls = [...staticUrls, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
