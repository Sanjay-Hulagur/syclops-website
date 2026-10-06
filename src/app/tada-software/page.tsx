import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

const title = "TADA software";
const description =
  "TADA software for Indian field teams: mileage from the path you walked, not pin-to-pin guesses. GPS check-in, checkout, rate cards, and manager approval — tied to visits, not a live map.";

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
  title: { absolute: "TADA Software | Field Mileage from the Path | Syclops" },
};

const faqs = [
  {
    q: "What is TADA software?",
    a: "Software that writes travelling allowance and daily allowance from a field day: check-in, the route, checkout, then a sheet a manager can approve. Syclops uses the path you walked, not a straight line between two pins.",
  },
  {
    q: "How is Syclops TADA different from a GPS tracker?",
    a: "Trackers prove a pin. TADA software has to prove a working day. Mileage starts at check-in and closes at checkout. The visit still attaches to an account, a referral, or an at-risk plan.",
  },
  {
    q: "Does TADA replace payroll or HR attendance?",
    a: "No. You approve the mileage sheet in the web app. Statutory attendance and salary can stay in HR software. TADA is the field expense, not the punch-in at the office door.",
  },
  {
    q: "Can we set a per-km rate and a daily cap?",
    a: "Yes. The rate card is a setting: per kilometre, daily cap, who can approve. Field seats see their own day. Managers see the sheet.",
  },
  {
    q: "Is GPS always on for TADA?",
    a: "Only between check-in and check-out on a working day. Retention is a setting. Partners never see GPS. This is not an always-on live map product.",
  },
  {
    q: "Does offline travel still count?",
    a: "Visits, photos, and check-in queue on the phone. When the signal returns, the path syncs. Rural routes and clinic basements are the point of the queue, not an exception.",
  },
];

const jobs = [
  {
    title: "Path, not pin-to-pin",
    body: "Checkout closes the route. Mileage is the line you actually walked, so a detour between two accounts is not a guess in Excel.",
  },
  {
    title: "Rate card you own",
    body: "Per kilometre, daily cap, who approves. Staff do not invent a claim in WhatsApp after the fact.",
  },
  {
    title: "Same day as the visit",
    body: "TADA sits on the working day that opened a referral or saved a plan. Expense is evidence of the loop, not a second app.",
  },
  {
    title: "Not a CCTV feed",
    body: "Managers can see location on a working day. History is the route. Rank staff by paying outcomes, not kilometres.",
  },
];

export default function TadaSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="TADA software"
        title="TADA software that writes mileage from the path, not the pin."
        body="Syclops TADA starts at GPS check-in and closes at checkout. Managers approve a sheet. The visit still belongs to a referral or a paying plan — not a live map."
        scene="field"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "TADA software", path: "/tada-software" },
        ]}
      />

      <Section eyebrow="The problem" title="Pin-to-pin TADA is a guess. Field days are not straight lines.">
        <p className="max-w-2xl text-base leading-7 text-ink/90">
          Most field force TADA still lives in a sheet: morning pin, evening pin,
          multiply by a rate. That ignores the beat, the skip, the extra campus,
          and the member who needed a second visit. TADA software has to be the
          route you walked, approved against a rate card, on the same record as
          the account.
        </p>
      </Section>

      <Section eyebrow="What it does" title="Expense as evidence of a working day.">
        <FeatureGrid items={jobs} />
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          The product page for visits, beats, and check-in is{" "}
          <Link href="/product/field" className="font-medium text-iris">
            field tracking
          </Link>
          . This page is TADA: mileage, rate cards, approval — so the two URLs
          do not say the same thing.
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
              body: "Check-in, beat list, offline queue — the day TADA sits on.",
            },
            {
              href: "/guides/import-beat-list",
              label: "Import a beat list",
              body: "CSV of accounts so TADA has a route, not a blank map.",
            },
            {
              href: "/blog/tada-is-the-path-not-the-pin",
              label: "TADA is the path",
              body: "Why pin-to-pin claims leak money and coverage.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="TADA software, plainly.">
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        title="Set a rate card this week."
        body="Create a workspace, invite field seats, and let mileage write itself from check-in to checkout."
      />
    </>
  );
}
