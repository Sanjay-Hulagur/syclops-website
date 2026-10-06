import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field tracking software with GPS check-in, routes, and TADA",
  description:
    "Syclops field tracking for Indian teams: geo check-in, visit photos, beat lists, offline queue, and TADA — proof of work tied to referrals and paying plans.",
  path: "/product/field",
  keywords: [
    "field tracking software India",
    "GPS check-in",
    "TADA software",
    "field force tracking",
    "beat list",
  ],
});

export default function FieldPage() {
  return (
    <>
      <PageHero
        eyebrow="Field tracking"
        title="Prove the visit. Then attach it to revenue."
        body="Syclops is field tracking software for Indian teams — not a live-map product. Location is evidence inside the loop: this visit opened a referral, sold a plan, or was sent because a subscription is at risk."
        scene="field"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Field tracking", path: "/product/field" },
        ]}
      />
      <Section eyebrow="Not attendance software" title="GPS trackers stop at the pin. Growth does not.">
        <Prose>
          <p>
            Geo-fenced selfie apps and live maps answer where someone was.
            Field tracking software for gyms, campuses, clinics, and sales
            teams in India has to answer who they moved, and whether that person still
            pays. Search “field tracking software India” and you will find live maps.
            This page is the other job: the pin as evidence on a referral and a plan.
          </p>
          <p>
            Check-in starts the working day. Visits attach to accounts. Checkout
            closes the route so mileage is the path you walked. Mock locations
            are flagged. Photo EXIF can be required. The scoreboard is still
            paying outcomes — not attendance %.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="How a day runs" title="Check in. Cover the beat. Check out.">
        <Steps
          items={[
            { title: "Check in", body: "Geo + optional photo. The day clock starts. Mock locations are flagged." },
            { title: "Log the account", body: "Visit notes attach to the partner or member. Skip is a status, not silence." },
            { title: "TADA writes itself", body: "Mileage is the path. You approve the sheet in the web app." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product" title="What field seats actually get.">
        <FeatureGrid
          items={[
            { title: "Beat list", body: "Accounts in range, last-visit date, and whether they still pay." },
            { title: "Visit proof", body: "Photo, duration, notes. Not a gallery dump in WhatsApp." },
            { title: "Routes", body: "Suggested order for the day. Map PDF for managers." },
            { title: "Offline queue", body: "Rural and basement visits sync when the radio returns." },
            { title: "New accounts", body: "Add a partner from the phone. Geo stamps the door." },
            { title: "At-risk overlay", body: "Churned or failed plans sit on top of the beat so the day is not random." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure" title="No implementation manager.">
        <Checklist
          items={[
            "Regions and beat lists in Settings",
            "Check-in geofence radius",
            "TADA rate card (per km, daily cap)",
            "Photo required or optional",
            "Working hours for GPS",
            "Who can approve TADA",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ" title="Field tracking questions teams actually search.">
        <FaqList
          items={[
            { q: "What is field tracking software in India?", a: "Software that proves a field day — check-in, beat, checkout, TADA — and, in Syclops, attaches that day to a referral and a paying plan. Live GPS alone is attendance software." },
            { q: "Is GPS always on?", a: "Only between check-in and check-out on a working day. Retention is a setting. The security page covers DPDP and GPS retention." },
            { q: "Can staff fake a pin?", a: "Mock locations are flagged. Photo EXIF can be required. The product still cares more about the referral that followed." },
            { q: "Who sees live location?", a: "Managers, for the working day. History is the route, not a forever trail unless you extend retention." },
            { q: "Does TADA replace payroll?", a: "Mileage writes from the route. You approve the sheet. Statutory attendance can stay in HR software." },
            { q: "How is this different from GeoProof-style trackers?", a: "Those products prove presence. Syclops uses the pin as evidence that a referral opened or a plan was saved." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/tada-software", label: "TADA software", body: "Mileage from the path, rate cards, approval." },
            { href: "/product/referrals", label: "Referral management", body: "The intro the visit can open." },
            { href: "/security", label: "Security and GPS retention", body: "Working-day evidence, DPDP, RBAC." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
