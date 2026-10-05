import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Mobile app",
  description: "Syclops mobile for field staff, sales, and referral partners.",
};

export default function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile"
        title="The day lives on the phone. The loop lives in Syclops."
        body="One tenant, three surfaces: field, sales, partner. The invite you send from Settings is how the app knows which workspace to open."
        scene="mobile"
      />
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
