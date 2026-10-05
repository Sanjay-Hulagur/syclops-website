import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/page-hero";
import { Related } from "@/components/interior";
import { SvgScene } from "@/components/svg-scene";
import { getPost, posts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <div className="mb-10 max-w-sm">
          <SvgScene kind="blog" />
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-iris">
          {post.category} · {post.date}
        </p>
        <h1 className="display mt-4 text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>
        <div className="mt-10 space-y-5 text-base leading-8 text-ink/90">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <Related
          items={posts
            .filter((item) => item.slug !== post.slug)
            .map((item) => ({
              href: `/blog/${item.slug}`,
              label: item.title,
              body: item.excerpt,
            }))}
        />
      </section>
      <CtaBand />
    </>
  );
}
