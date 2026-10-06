import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import { SvgScene } from "@/components/svg-scene";
import { getPost, postRelated, posts } from "@/lib/blog";
import { pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const meta = pageSeo({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          dateModified: post.date,
          description: post.excerpt,
          author: { "@type": "Organization", name: "Syclops", url: site.url },
          publisher: { "@type": "Organization", name: "Syclops", url: site.url },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          image: `${site.url}/blog/${post.slug}/opengraph-image`,
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
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
        <Related items={postRelated(post.slug)} />
      </section>
      <CtaBand />
    </>
  );
}
