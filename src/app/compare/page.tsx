import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Prose, Section } from "@/components/interior";
import { comparisons } from "@/lib/compare";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Compare Syclops to Excel, GPS trackers, CRM, and gym software",
  description:
    "Honest comparisons: Syclops versus WhatsApp + Excel, GPS-only field trackers, traditional CRM, gym management software, and other vertical tools.",
  path: "/compare",
  keywords: [
    "GPS tracker vs CRM",
    "field tracking vs Excel",
    "gym software vs referral software",
  ],
});

export default function CompareIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Different category. Same honesty."
        body="Syclops is not a selfie-attendance app, not a hospital HIS, and not a gym membership widget. It is the visit, the referral, and the plan."
        scene="compare"
      />
      <Section>
        <Prose>
          <p>
            Category leaders in India sell GPS attendance, CRM pipelines, or
            vertical billing. Use those pages to pick the honest split — then
            keep what still earns its keep.
          </p>
        </Prose>
      </Section>
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {comparisons.map((item) => (
            <Link
              key={item.slug}
              href={`/compare/${item.slug}`}
              className="rounded-3xl border border-line bg-cream p-6 hover:border-ink/30"
            >
              <h2 className="display text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can I keep Excel for a month?", a: "Import CSV, then stop. Dual running is how leakage returns." },
            { q: "We already bought a GPS app.", a: "Use it until the contract ends if you must. Syclops replaces the pin-as-product story." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
