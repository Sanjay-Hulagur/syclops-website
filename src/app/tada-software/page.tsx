import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

const title = "TADA software";
const description =
  "TADA software for Indian field teams: TA/DA worked out from the distance travelled during the working day, using the allowance you set for each distance range. Tied to visits, not a live map.";

export const metadata: Metadata = {
  ...pageSeo({
    title,
    description,
    path: "/tada-software",
    keywords: [
      "TADA software",
      "TADA software India",
      "field force TADA",
      "TA DA software",
      "field expense mileage",
      "GPS TADA",
    ],
  }),
  title: { absolute: "TADA Software | TA/DA from Distance Travelled | Syclops" },
};

const faqs = [
  {
    q: "What is TADA software?",
    a: "Software that works out travelling allowance and daily allowance from a field day. Syclops records the working day in the app and turns the distance travelled into TA/DA, using the amounts you set.",
  },
  {
    q: "How is Syclops TADA different from a GPS tracker?",
    a: "Trackers prove a pin. Syclops also keeps each visit tied to the partner and the referrals that followed, on the same working day as the TA/DA.",
  },
  {
    q: "Does TADA replace payroll or HR attendance?",
    a: "No. Syclops works out the amount. Pay it through payroll or accounts as you do today.",
  },
  {
    q: "Can we set our own allowance amounts?",
    a: "Yes. Set the allowance for each distance range in the admin console. Staff see their daily and monthly TA/DA in the app.",
  },
  {
    q: "Is GPS always on for TADA?",
    a: "No. Location is recorded only during the working day. Referrers never share their location.",
  },
  {
    q: "Can we export TA/DA?",
    a: "Yes. TA/DA comes with the staff reports, as Excel or PDF.",
  },
];

const jobs = [
  {
    title: "Distance, not a guess",
    body: "The distance travelled during the working day becomes TA/DA. Nobody adds it up in Excel at the end of the month.",
  },
  {
    title: "Amounts you set",
    body: "Set the allowance for each distance range. Staff do not invent a claim in WhatsApp after the fact.",
  },
  {
    title: "Same day as the visit",
    body: "TA/DA sits on the working day that opened a referral. Expense is evidence of the work, not a second app.",
  },
  {
    title: "Not a CCTV feed",
    body: "Managers see visits and routes for the working day only.",
  },
];

export default function TadaSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="TADA software"
        title="TADA software that works out TA/DA from the day’s distance."
        body="Syclops records the working day in the app and turns the distance travelled into TA/DA, using the amounts you set. Each visit still belongs to a partner and the referrals that followed."
        scene="field"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "TADA software", path: "/tada-software" },
        ]}
      />

      <Section eyebrow="The problem" title="Hand-written TADA is a guess.">
        <p className="max-w-2xl text-base leading-7 text-ink/90">
          Most field force TADA still lives in a sheet: someone types the
          kilometres at the end of the month and multiplies by a rate. That
          misses the extra visit, the detour and the day someone forgot. TADA
          software should take the distance from the working day itself, next
          to that day’s visits.
        </p>
      </Section>

      <Section eyebrow="What it does" title="Expense as evidence of a working day.">
        <FeatureGrid items={jobs} />
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          The product page for visits and check-in is{" "}
          <Link href="/product/field" className="font-medium text-iris">
            field tracking
          </Link>
          . This page is TADA: distance, allowance amounts and reports.
        </p>
      </Section>

      <Section eyebrow="Who it is not for">
        <div className="max-w-3xl space-y-6 text-base leading-7 text-ink/90">
          <p>
            If you only need office punch-in or biometric door attendance, keep
            HR or gym software. Syclops does not replace that.
          </p>
          <p>
            If you only need a live GPS tracker and never attach a visit to a
            named intro or a plan, a GPS-only product is enough. See{" "}
            <Link href="/compare/gps-trackers" className="text-iris">
              Syclops vs GPS-only trackers
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section eyebrow="Read next">
        <Related
          items={[
            {
              href: "/product/field",
              label: "Field tracking",
              body: "Check-in, photos and visit plans: the day TADA sits on.",
            },
            {
              href: "/guides/field-day",
              label: "Run a field day",
              body: "Start the day, visit, and see TA/DA add up.",
            },
            {
              href: "/blog/tada-is-the-path-not-the-pin",
              label: "TADA is the path",
              body: "Why hand-written claims leak money and coverage.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="TADA software, plainly.">
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        title="Set your allowance amounts this week."
        body="Create a workspace, add your field staff, and let TA/DA add itself up from each working day."
      />
    </>
  );
}
