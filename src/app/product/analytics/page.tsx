import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field and referral analytics — which visits lead to referrals",
  description:
    "Syclops analytics show which partners your team never visits, which are visited but never refer, each person’s visits and attendance, and referrals by referrer and region. Export to Excel or PDF.",
  path: "/product/analytics",
  keywords: [
    "field analytics",
    "referral analytics",
    "TADA reports",
    "field visit reports",
    "partner coverage report",
  ],
});

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics"
        title="Know which visits lead to referrals."
        body="Coverage, people and referrers on one set of numbers. Export to Excel or PDF. No month-end copy and paste."
        scene="analytics"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Analytics", path: "/product/analytics" },
        ]}
      />
      <Section eyebrow="The scoreboard" title="Attendance % is not the whole story.">
        <Prose>
          <p>
            GPS dashboards celebrate coverage. CRM dashboards celebrate
            pipeline. Syclops puts visits and referrals side by side: which
            partners your team never visits, which ones get visits but never
            refer, and which referrers send the most.
          </p>
          <p>
            Filter by date and by region. Download staff, sales and visit
            reports as Excel, and daily reports as PDF.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Three lenses">
        <Steps
          items={[
            { title: "Coverage", body: "Partners never visited, and partners visited but never referring." },
            { title: "People", body: "Each person’s visits, attendance, calendar and distance." },
            { title: "Referrers", body: "Referrals by referrer and by region, and what became of them." },
          ]}
        />
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "Date range", body: "Pick the days, weeks or months you want to look at." },
            { title: "Region view", body: "See visits and referrals by region and area." },
            { title: "Staff calendar", body: "Each person’s visits, day by day." },
            { title: "Visit campaigns", body: "Group visits into a campaign and see its report." },
            { title: "WhatsApp report", body: "Delivery and read status for the messages you send." },
            { title: "Exports", body: "Excel for staff, sales and visit reports. PDF for daily reports." },
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can I get the data into Excel?", a: "Yes. Staff, sales and visit reports download as Excel, and daily reports as PDF." },
            { q: "Do referrers see your analytics?", a: "No. Referrers see only the people they sent." },
            { q: "Is this a live GPS map?", a: "No. Location shows where the working day went. The reports are about visits and referrals." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/reports", label: "Reports guide", body: "What to look at on Monday." },
            { href: "/product/field", label: "Field", body: "The visits behind the numbers." },
            { href: "/compare/gps-trackers", label: "vs GPS-only", body: "Why attendance % is not enough." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
