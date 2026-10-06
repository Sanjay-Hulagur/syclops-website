import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { posts } from "@/lib/blog";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Blog — TADA, gym referrals, leakage, and churn",
  description:
    "Notes on TADA as a path not a pin, gym member-get-member beside ERP, referral leakage, why GPS is not a growth system, and why subscriptions still need a field team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="The loop, in writing."
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
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              {post.category} · {post.date}
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
