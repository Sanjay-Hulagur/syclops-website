import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Section } from "@/components/interior";
import { comparisons } from "@/lib/compare";

export const metadata: Metadata = {
  title: "Compare",
  description: "Syclops versus spreadsheets, GPS trackers, CRMs, and vertical software.",
};

export default function CompareIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Different category. Same honesty."
        body="Syclops is not a selfie-attendance app, not a hospital product, and not a gym membership widget."
        scene="compare"
      />
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
