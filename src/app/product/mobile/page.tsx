import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field force mobile app for visits, referrals, and plans",
  description:
    "Syclops mobile app for iOS and Android: field check-in and TADA, sales conversion, and a partner portal. Offline-tolerant for rural routes and clinic basements.",
  path: "/product/mobile",
  keywords: [
    "field force mobile app",
    "offline field tracking",
    "iOS Android field app",
    "partner referral app",
  ],
});

export default function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile app"
        title="The day lives on the phone. The loop lives in Syclops."
        body="One tenant, three surfaces: field, sales, partner. The invite you send from Settings is how the app knows which workspace to open."
        scene="mobile"
      />
      <Section eyebrow="Three phones" title="Staff log the visit. Partners send the person. The plan stays visible.">
        <Prose>
          <p>
            Field seats check in, walk a beat, and queue photos when the signal
            drops. Sales seats convert a visit to a plan. Partners never get
            GPS — they send, they see status, they get paid.
          </p>
          <p>
            iOS and Android. Partners can also use the mobile web portal. BYOD
            is expected: device GPS is used only on a checked-in working day.
            Languages follow the labels you set for visit, referrer, and plan.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Install">
        <Steps
          items={[
            { title: "Create the workspace", body: "On the web. Then invite." },
            { title: "Open the invite", body: "Store listing + tenant. No typing a company code." },
            { title: "Work offline", body: "Queue visits and photos. Sync when the radio returns." },
          ]}
        />
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "Field", body: "Check-in, beat, visit photo, TADA, at-risk overlay." },
            { title: "Sales", body: "Queue, notes, follow-ups, conversion to a plan." },
            { title: "Partners", body: "Send, status, rewards. No beat, no GPS." },
            { title: "Managers", body: "Approve TADA, see loop health, ping a seat." },
            { title: "Low signal", body: "Designed for rural routes and clinic basements." },
            { title: "Languages", body: "English plus the labels you set for visit / referrer / plan." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Which roles get the field app",
            "Photo required",
            "Background GPS on working day only",
            "Partner portal as PWA or native",
            "Announcement push",
            "App timeout",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "iOS and Android?", a: "Yes. Partners can also use the mobile web portal." },
            { q: "BYOD?", a: "Yes. Device GPS is used only on a checked-in day." },
            { q: "Does the partner app track location?", a: "No. Partners send referrals and see payouts. They never consume a field seat." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/invite-team", label: "Invite guide", body: "Seats vs portal." },
            { href: "/product/field", label: "Field", body: "What the day looks like." },
            { href: "/start", label: "Start", body: "Create the workspace first." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
