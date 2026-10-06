import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field and referral analytics — visits that still pay",
  description:
    "Syclops analytics for loop health: visits that created referrals, referrals that became plans, and plans that renewed. Rank staff by paying outcome, not kilometres.",
  path: "/product/analytics",
  keywords: [
    "field analytics",
    "referral ROI",
    "MRR attribution",
    "TADA reports",
    "loop health dashboard",
  ],
});

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics"
        title="Know which visits still pay."
        body="Loop health, people, and regions. Export from the same screen. No analyst, no month-end paste."
        scene="analytics"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Analytics", path: "/product/analytics" },
        ]}
      />
      <Section eyebrow="The scoreboard" title="Attendance % is not loop health.">
        <Prose>
          <p>
            GPS dashboards celebrate coverage. CRM dashboards celebrate
            pipeline. Syclops reports the joins: visits that created referrals,
            referrals that became plans, plans that renewed. Rank people by
            paying outcome, not kilometres.
          </p>
          <p>
            Campaign tags are optional labels so camps and ads are not a
            separate Excel. Region drill uses the hierarchy you set — city,
            cluster, campus, club. CSV and PDF from the same screen. API on
            Scale.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Three lenses">
        <Steps
          items={[
            { title: "Loop health", body: "Visits that created referrals, referrals that became plans, plans that renewed." },
            { title: "People", body: "Staff and referrers ranked by paying outcome, not kilometres." },
            { title: "Export", body: "CSV and PDF. TADA sheets for accounts." },
          ]}
        />
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "Today strip", body: "Visits, intros, new plans, failed payments — the same nouns as the field app." },
            { title: "Date range", body: "Day, week, month, custom. Compare to last period." },
            { title: "Region drill", body: "The hierarchy you set: city, cluster, campus, club." },
            { title: "Campaign tag", body: "Optional label on visits and referrals so camps and ads are not a separate Excel." },
            { title: "At-risk list", body: "Click through to the account and the next suggested visit." },
            { title: "Saved views", body: "Managers keep their own filters. No shared-password dashboard." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Default date range",
            "Who can export",
            "Currency",
            "Region hierarchy",
            "Campaign tags",
            "TADA visibility",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can I embed this in another BI tool?", a: "CSV export is on all plans. API on Scale." },
            { q: "Do referrers see analytics?", a: "They see their own sends and payouts. Not the company loop." },
            { q: "Is this a live GPS map?", a: "No. Location history informs the route. The report is paying outcomes." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/reports", label: "Reports guide", body: "What to look at on Monday." },
            { href: "/product/field", label: "Field", body: "The visits behind the bars." },
            { href: "/compare/gps-trackers", label: "vs GPS-only", body: "Why attendance % is not enough." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
