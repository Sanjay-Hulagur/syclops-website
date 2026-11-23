import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Prose, Section } from "@/components/interior";
import { guides } from "@/lib/guides";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Setup guides",
  description:
    "Set up Syclops step by step: create a workspace, add your team, upload staff and areas from Excel, run a field day, set up your referral page and membership plans, and export reports.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Set up most of it yourself."
        body="Create a workspace, add your team, upload your lists from Excel, and run a field day. Our team sets up the referral page and online payments with you."
        scene="start"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />
      <Section>
        <Prose>
          <p>
            Start with field visits and referrals, then add membership plans
            once those are running. There is no implementation calendar.
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
