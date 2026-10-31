import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/interior";
import { formatPostDate, posts } from "@/lib/blog";
import type { Post } from "@/lib/blog";
import { organizationId, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

const fallbackHero = {
  src: "/blog/field-work-hero.png",
  width: 928,
  height: 803,
};

function cardHero(post: Post) {
  return post.hero ?? fallbackHero;
}

const title = "The field day is the revenue system.";
const description =
  "TADA, partner portals, gym and clinic referrals, and the visit after a failed debit. Syclops puts the visit, the intro, and the subscription on one record.";

export const metadata: Metadata = pageSeo({
  title,
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
              name: title,
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
        title={title}
        body={description}
        cta={false}
        image={{
          src: "/blog/field-work-hero.png",
          alt: "A field officer riding a motorcycle toward a clinic and houses",
          width: 928,
          height: 803,
        }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16">
        {posts.map((post) => {
          const hero = cardHero(post);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="grid overflow-hidden rounded-3xl border border-line bg-cream hover:border-ink/30 sm:grid-cols-[17rem_1fr]"
            >
              <div className="relative min-h-44 bg-paper sm:min-h-48">
                <Image
                  src={hero.src}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 272px, 100vw"
                  className={`object-cover ${post.hero ? "object-right" : "object-center"}`}
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.14em] text-muted">
                  <span className="uppercase">{post.category}</span>
                  {" · "}
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
                <h2 className="display mt-2 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
