import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Section } from "@/components/interior";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description: "Self-serve setup for a Syclops workspace — no onboarding call.",
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Go live without a person on the other end."
        body="Create a workspace, invite seats, connect billing, share the portal. Each guide is a page. Docs also live in the product."
        scene="start"
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-3xl border border-line bg-cream p-6 hover:border-ink/30"
            >
              <p className="text-xs text-iris">0{index + 1}</p>
              <h2 className="display mt-2 text-2xl font-semibold">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
