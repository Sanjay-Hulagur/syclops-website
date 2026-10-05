import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Field tracking",
  description:
    "Geo check-in, visit photos, routes, and TADA — proof of work tied to referrals and plans.",
};

export default function FieldPage() {
  return (
    <>
      <PageHero
        eyebrow="Field"
        title="Prove the visit. Then attach it to revenue."
        body="Syclops is not a live-map product. Location is evidence inside the loop: this visit opened a referral, sold a plan, or was sent because a subscription is at risk."
        scene="field"
      />
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
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Is GPS always on?", a: "Only between check-in and check-out on a working day." },
            { q: "Can staff fake a pin?", a: "Mock locations are flagged. Photo EXIF can be required. The product still cares more about the referral that followed." },
            { q: "Who sees live location?", a: "Managers, for the working day. History is the route, not a forever trail unless you extend retention." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/product/referrals", label: "Referrals", body: "Turn a visit into a named intro." },
            { href: "/guides/field-day", label: "Field day guide", body: "The four taps of a working day." },
            { href: "/product/analytics", label: "Analytics", body: "Rank staff by paying outcomes." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
