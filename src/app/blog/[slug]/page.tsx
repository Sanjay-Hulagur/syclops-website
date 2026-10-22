import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogProse } from "@/components/blog-prose";
import { Breadcrumbs, FaqList, JsonLd, Related } from "@/components/interior";
import { CtaBand } from "@/components/page-hero";
import { sceneForPost, SvgScene } from "@/components/svg-scene";
import {
  formatPostDate,
  getPost,
  postRelated,
  posts,
  postWordCount,
} from "@/lib/blog";
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
    openGraph: {
      title: meta.openGraph?.title,
      description: meta.openGraph?.description,
      url: `${site.url}/blog/${post.slug}`,
      siteName: site.name,
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      section: post.category,
      images: [
        {
          url: `/blog/${post.slug}/opengraph-image`,
          alt: post.title,
        },
      ],
    },
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
          "@type": "BlogPosting",
          "@id": `${site.url}/blog/${post.slug}#post`,
          headline: post.title,
          datePublished: post.date,
          dateModified: post.updated,
          description: post.excerpt,
          articleSection: post.category,
          wordCount: postWordCount(post),
          inLanguage: "en-IN",
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
      <header className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs tracking-[0.14em] text-iris">
              <span className="uppercase">{post.category}</span>
              {" · "}
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h1 className="display mt-4 text-4xl font-semibold tracking-tight">
              {post.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/start"
                className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-paper"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted">No card. No sales call.</p>
          </div>
          <SvgScene kind={sceneForPost(post.slug)} />
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <BlogProse blocks={post.body} />
        <h2 className="display mt-12 text-2xl font-semibold tracking-tight">
          Questions
        </h2>
        <div className="mt-6">
          <FaqList items={post.faqs} />
        </div>
      </article>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <Related items={postRelated(post.slug)} />
      </section>
      <CtaBand />
    </>
  );
}
