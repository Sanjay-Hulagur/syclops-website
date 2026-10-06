import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Prose, Section } from "@/components/interior";
import { guides } from "@/lib/guides";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Self-serve setup guides",
  description:
    "Go live on Syclops without an onboarding call: create a workspace, invite field seats, import a beat list from CSV, run a field day, turn on the referral portal, connect billing, export reports.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Go live without a person on the other end."
        body="Create a workspace, invite seats, connect billing, share the portal. Each guide is a page. Docs also live in the product."
        scene="start"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />
      <Section>
        <Prose>
          <p>
            Most teams turn on field and referrals the same day, then
            subscriptions from Settings in the same week. There is no
            implementation calendar.
          </p>
        </Prose>
      </Section>
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
