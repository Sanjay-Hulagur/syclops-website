import type { Metadata } from "next";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Referral management",
  description:
    "Referral management software for partner and member referrals. Referrers sign in to send people and follow their status, each lost referral records why, and payouts are approved before they are paid.",
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
        title="Every referral keeps the name of who sent it."
        body="Doctors, members, alumni and channel partners send people through their own login. They can see what happened next without calling your desk."
        scene="referral"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Referral management", path: "/product/referrals" },
        ]}
      />
      <Section eyebrow="How it works" title="From sent to converted, or why not.">
        <Steps
          items={[
            { title: "Share your referral page", body: "We set it up with your business name. Referrers sign in with a one-time code sent to their email, or use their own login in the app." },
            { title: "Track each referral", body: "Your team moves it from awaiting arrival to arrived to converted, or records why it did not go ahead." },
            { title: "Pay referrers", body: "Record a reward for a referral, or work out payouts from your bills. Each payout is approved before it is paid." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product">
        <FeatureGrid
          items={[
            { title: "Referrer login", body: "Referrers see the people they sent and where each one is." },
            { title: "Duplicate check", body: "Your referral page blocks a second open referral for the same mobile number." },
            { title: "Reasons, not just outcomes", body: "Could not be reached, did not visit, went elsewhere. Every lost referral says why." },
            { title: "Payout rules", body: "Set payouts as a share of each bill, by bill category, with the deductions you choose." },
            { title: "Name matching", body: "Link different spellings of a referrer’s name, so their referrals and payouts stay together." },
            { title: "Announcements", body: "Post updates that your referrers see in their app." },
          ]}
        />
      </Section>
      <Section eyebrow="You set">
        <Checklist
          items={[
            "Who can send referrals",
            "Reward amounts for each referral",
            "Payout rules by bill category",
            "Approval before a payout is marked paid",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Do referrers need a paid seat?", a: "No. People who only send you referrals are never billed." },
            { q: "What if a referrer’s name is spelled differently?", a: "Link the spellings to one referrer, so their referrals and payouts stay together." },
            { q: "Can the same person be referred twice?", a: "Not through your referral page while a referral for that mobile number is still open." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/referral-management-software", label: "Referral management software", body: "What teams search for, and what this covers." },
            { href: "/gym-referral-software", label: "Gym referral software", body: "Member-get-member beside your gym software." },
            { href: "/guides/referral-portal", label: "Referral page guide", body: "Set it up and share it." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
