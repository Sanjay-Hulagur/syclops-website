import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Prose, Section } from "@/components/interior";
import { industries } from "@/lib/industries";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Industries — gyms, education, healthcare, sales, fintech, medtech",
  description:
    "Syclops for gyms, campuses, clinics, field sales, fintech, and medtech. Same growth loop — field visit, referral, subscription — with industry nouns.",
  path: "/industries",
  keywords: [
    "gym referral software",
    "clinic referral software",
    "education counselor tracking",
    "medtech KOL visits",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Horizontal on purpose."
        body="The nouns change. The loop does not. Pick the industry when you create the workspace — visit, referrer, and plan labels follow."
        scene="industry"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <Section>
        <Prose>
          <p>
            Horizontal on purpose: gym member-get-member, alumni intros, partner
            clinics, channel leads, family policy referrals, and KOL evaluations
            are the same objects. Vertical ERPs stay for classes, marks, or
            charts.
          </p>
        </Prose>
      </Section>
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
