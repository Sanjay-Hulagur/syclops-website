import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field tracking software with GPS check-in, visit photos, and TADA",
  description:
    "Syclops field tracking for Indian teams: start the working day in the app, check in at each visit with GPS and photos, plan visits, and get TA/DA worked out from the distance travelled.",
  path: "/product/field",
  keywords: [
    "field tracking software India",
    "GPS check-in",
    "TADA software",
    "field force tracking",
    "visit plan app",
  ],
});

export default function FieldPage() {
  return (
    <>
      <PageHero
        eyebrow="Field tracking"
        title="Prove the visit. Then see what it led to."
        body="Syclops is field tracking software for Indian teams, not a live-map product. Each visit is checked in with GPS and photos, and stays tied to the partner and the referrals that followed."
        scene="field"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Field tracking", path: "/product/field" },
        ]}
      />
      <Section eyebrow="Not attendance software" title="GPS trackers stop at the pin.">
        <Prose>
          <p>
            Geo-tagged selfie apps and live maps answer where someone was. A
            team that grows through visits and referrals also needs to know
            whom they met, and whether that partner ever sent anyone.
          </p>
          <p>
            In Syclops, staff start their working day in the app, and location
            is recorded only during the working day. Each visit is checked in
            with GPS and photos, and the distance travelled becomes the day’s
            TA/DA.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="How a day runs" title="Start the day. Visit. See the report.">
        <Steps
          items={[
            { title: "Start the working day", body: "One tap in the app. Location is recorded from here until the day ends." },
            { title: "Check in at each visit", body: "GPS and photos, with a note on whom they met and why." },
            { title: "TA/DA adds itself up", body: "The day’s distance becomes TA/DA. Daily and monthly totals show in the app." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product" title="What field staff and managers get.">
        <FeatureGrid
          items={[
            { title: "Visit plans", body: "Plan the week’s visits and see the day’s route in the app." },
            { title: "Visit proof", body: "GPS check-in, photos and notes on every visit. Not a gallery dump in WhatsApp." },
            { title: "TA/DA", body: "Worked out from the distance travelled each day, with daily and monthly totals." },
            { title: "New partners from the phone", body: "Staff add a partner they met for the first time, right after the visit." },
            { title: "Coverage", body: "See which partners have never been visited, and which are visited but never refer." },
            { title: "Leave and shifts", body: "Leave requests and shift plans sit in the same workspace." },
          ]}
        />
      </Section>
      <Section eyebrow="You set" title="No implementation project.">
        <Checklist
          items={[
            "Regions and areas, or upload them from Excel",
            "Who is on the field team",
            "Visit reasons staff can pick from",
            "Visit plans for each person",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ" title="Field tracking questions teams actually search.">
        <FaqList
          items={[
            { q: "What is field tracking software in India?", a: "Software that records a field day: when it starts, each visit with GPS and photos, and the distance travelled for TA/DA. In Syclops, each visit also stays tied to the partner and the referrals that followed." },
            { q: "Is GPS always on?", a: "No. Location is recorded only during the working day, from the moment staff start their day in the app." },
            { q: "Who sees where staff went?", a: "Managers see each person’s visits and route for the working day." },
            { q: "Does TA/DA replace payroll?", a: "No. Syclops works out TA/DA from the distance travelled. Pay it through your payroll or accounts as you do today." },
            { q: "How is this different from GPS-only trackers?", a: "Those prove presence. Syclops keeps each visit tied to the partner, so you can see which visits led to referrals." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/tada-software", label: "TADA software", body: "TA/DA from the distance travelled." },
            { href: "/product/referrals", label: "Referral management", body: "The referral a visit can lead to." },
            { href: "/security", label: "Security and working-day GPS", body: "When location is recorded, and who sees it." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
