import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Section } from "@/components/interior";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Syclops for gyms, education, healthcare, sales, fintech, and medtech.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Horizontal on purpose."
        body="The nouns change. The loop does not. Pick the industry when you create the workspace — visit, referrer, and plan labels follow."
        scene="industry"
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {industries.map((item) => (
            <Link
              key={item.id}
              href={`/industries/${item.id}`}
              className="rounded-3xl border border-line bg-cream p-7 hover:border-ink/30"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-iris">
                {item.eyebrow}
              </p>
              <h2 className="display mt-3 text-2xl font-semibold">
                {item.headline}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              <p className="mt-4 text-xs text-muted">
                {item.visit} · {item.referrer} · {item.plan}
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Wrong industry at signup?", a: "Change labels in Settings. History stays on the same records." },
            { q: "Multiple brands?", a: "Separate workspaces, or Scale multi-city in one tenant." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
