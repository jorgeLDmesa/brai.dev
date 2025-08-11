import Link from "next/link";
import { createClient } from "@/lib/supabase";
import type { Post } from "@/types";

export const revalidate = 21600; // 6h – suficiente para novedades de los viernes

export const metadata = {
  title: "Blog de Automatización con IA | BRAI",
  description:
    "Guías y novedades sobre automatización con IA para empresas. Consejos prácticos, casos de uso y análisis semanal.",
  alternates: { canonical: "/blog" },
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
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Blog de Automatización con IA
        </h1>
        <p className="mt-3 text-muted-foreground">
          Publicamos guías profundas cada miércoles y un resumen con lo más
          importante de IA cada viernes.
        </p>
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
    </main>
  );
}