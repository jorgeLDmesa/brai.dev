// =============================
// File: app/blog/[slug]/page.tsx
// Detalle del post con metadata dinámica y JSON-LD
// =============================
import { createClient } from "@/lib/supabase";
import type { Post } from "@/types";
import { notFound } from "next/navigation";
import { marked } from "marked"; // convierte Markdown a HTML en el servidor

export const dynamicParams = true; // permitimos fallback incremental
export const revalidate = 43200; // 12h; evergreen puede vivir más con ISR + revalidate on-demand

async function getPost(slug: string): Promise<Post | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  if (error) return null;
  return data as Post;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || undefined,
    alternates: {
      canonical: post.canonical_url || `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || undefined,
      type: "article",
      url: `https://www.brai.dev/blog/${post.slug}`,
      images: post.cover_image_url ? [{ url: post.cover_image_url }] : undefined,
    },
    robots: post.noindex ? { index: false, follow: true } : undefined,
  };
}

function ArticleJsonLd({ post }: { post: Post }) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      datePublished: post.published_at,
      dateModified: post.updated_at,
      image: post.cover_image_url || undefined,
      author: { "@type": "Organization", name: "BRAI", url: "https://www.brai.dev" },
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.brai.dev/blog/${post.slug}` },
    };
  
    return (
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }
  

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const html = await marked.parse(post.content_md || "");

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 prose prose-neutral dark:prose-invert">
      <ArticleJsonLd post={post} />

      <nav className="mb-6 text-sm">
        <a href="/blog" className="opacity-70 hover:opacity-100">← Volver al blog</a>
      </nav>

      <p className="text-xs uppercase tracking-wide opacity-70">
        {post.type === "guia" ? "Guía" : "Novedad"}
      </p>
      <h1 className="!mb-2">{post.title}</h1>
      {post.excerpt ? (
        <p className="mt-0 text-muted-foreground">{post.excerpt}</p>
      ) : null}

      {post.cover_image_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover_image_url}
          alt={post.title}
          className="w-full h-auto rounded-2xl my-6"
        />
      ) : null}

      <article
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-10 border-t pt-6 text-sm text-muted-foreground">
        Publicado {post.published_at
          ? new Date(post.published_at).toLocaleDateString("es-CO", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })
          : ""}
      </div>

      {/* CTA SEO → conversión */}
      <div className="mt-10 p-6 rounded-2xl border bg-muted/30">
        <h2 className="text-xl font-semibold mb-2">¿Quieres aplicar esto en tu empresa?</h2>
        <p className="mb-4">Agenda una auditoría gratuita y te mostramos oportunidades de automatización con IA para tu caso.</p>
        <a href="/auditoria" className="inline-block px-4 py-2 rounded-xl border hover:shadow">
          Agendar auditoría gratis
        </a>
      </div>
    </main>
  );
}