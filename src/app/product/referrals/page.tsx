import type { Metadata } from "next";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Referral management",
  description:
    "Referral management software for partner and member programs. Status from sent to paying, a portal the sender can open, and rewards on the invoice.",
  path: "/product/referrals",
  keywords: [
    "referral management software",
    "partner referral portal",
    "member referral program",
    "referral tracking",
  ],
});

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="One referrer object. Many kinds of people."
        body="Members, alumni, clinics, KOLs, channel partners. They send. They see status. They get paid on the next invoice — without calling your desk."
        scene="referral"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Referral management", path: "/product/referrals" },
        ]}
      />
      <Section eyebrow="Statuses" title="Sent → accepted → converted → paying → churned.">
        <Steps
          items={[
            { title: "Share the portal", body: "One URL or QR per workspace. Phone or email sign-in." },
            { title: "Status updates itself", body: "Converted when a plan is created. Paying when the first invoice clears." },
            { title: "Reward on the invoice", body: "Qualification window and cap in Settings → Referrals." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product">
        <FeatureGrid
          items={[
            { title: "Portal", body: "Read-only for the sender: who they sent, where they are, when they pay." },
            { title: "Member-get-member", body: "Same object as a B2B partner. Different reward rules if you want." },
            { title: "Leakage view", body: "Intros that never converted. Conversions that never paid." },
            { title: "Rewards ledger", body: "Credit, extra days, or percent. Nothing pays until they stay past the window." },
            { title: "Duplicate guard", body: "Same phone or email cannot be referred twice into the same plan." },
            { title: "Announcements", body: "PDF or image to the portal. No separate WhatsApp blast required." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Portal on or off",
            "Member vs partner vs both",
            "Reward type and cap",
            "Qualification days",
            "Who can approve a pending name match",
            "QR poster download",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Do referrers need a paid seat?", a: "No. The portal is included on Growth and Scale." },
            { q: "What if the name does not match?", a: "It sits in Pending. A manager assigns it. No phone call to the sender." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/referral-management-software", label: "Referral management software", body: "What teams search for, and what this covers." },
            { href: "/gym-referral-software", label: "Gym referral software", body: "Member-get-member beside gym ERP." },
            { href: "/guides/qualification-window", label: "Qualification window", body: "Rewards after they stay. Duplicate phones blocked." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
