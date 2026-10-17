import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/interior";
import { formatPostDate, posts } from "@/lib/blog";
import { organizationId, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Notes on TADA as a path not a pin, gym member-get-member beside ERP, referral leakage, why GPS is not a growth system, and why subscriptions still need a field team.";

export const metadata: Metadata = pageSeo({
  title: "Blog — TADA, gym referrals, leakage, and churn",
  description,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${site.url}/blog#blog`,
              name: "Syclops blog",
              url: `${site.url}/blog`,
              description,
              inLanguage: "en-IN",
              publisher: { "@id": organizationId },
              blogPost: posts.map((post) => ({
                "@id": `${site.url}/blog/${post.slug}#post`,
              })),
            },
            {
              "@type": "ItemList",
              itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: post.title,
                url: `${site.url}/blog/${post.slug}`,
              })),
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="TADA, gym referrals, leakage, and churn"
        body="Referral leakage, why GPS is not a growth system, and why subscriptions still need a field team."
        scene="blog"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-3xl border border-line bg-cream p-6 hover:border-ink/30"
          >
            <p className="text-xs tracking-[0.14em] text-muted">
              <span className="uppercase">{post.category}</span>
              {" · "}
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </p>
            <h2 className="display mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
