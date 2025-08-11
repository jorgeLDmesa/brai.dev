// =============================
// File: app/blog/rss/route.ts
// RSS básico (útil para descubrimiento y frescura)
// =============================
import { createClient } from "@/lib/supabase";

export const revalidate = 21600;

export async function GET() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select("title, slug, excerpt, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(30);

  const items = (data || [])
    .map(
      (p) => `\n  <item>\n    <title>${escapeXml(p.title)}</title>\n    <link>https://www.brai.dev/blog/${p.slug}</link>\n    <guid>https://www.brai.dev/blog/${p.slug}</guid>\n    <pubDate>${new Date(p.published_at || Date.now()).toUTCString()}</pubDate>\n    <description>${escapeXml(p.excerpt || "")}</description>\n  </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n  <title>BRAI – Blog</title>\n  <link>https://www.brai.dev/blog</link>\n  <description>Guías y novedades sobre automatización con IA</description>${items}\n</channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(s?: string | null) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
