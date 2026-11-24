import type { Metadata } from "next";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Referral management",
  description:
    "Referral management software for partner and member referrals. Referrers log in to send people and follow their status, the same mobile number cannot be referred twice, and every lost referral records why.",
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
        body="Partners, members, alumni and doctors send people through their own login. They can see what happened next without calling your desk."
        scene="referral"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Referral management", path: "/product/referrals" },
        ]}
      />
      <Section eyebrow="How it works" title="From the first intro to the outcome, or why not.">
        <Steps
          items={[
            { title: "Add your referrers", body: "One by one, or upload a spreadsheet. Each referrer can have their own login to the Syclops app." },
            { title: "Referrers send people", body: "From their phone, with the person’s name, mobile number and notes, plus a photo or a voice note if they want." },
            { title: "Track each referral", body: "Your team moves it from pending to arrived, or records why it stopped. A sale is recorded as a conversion." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product">
        <FeatureGrid
          items={[
            { title: "Referrer login", body: "Referrers see the people they sent and where each one is." },
            { title: "Duplicate check", body: "A mobile number that is already on a referral cannot be sent again, so two referrers cannot claim one person." },
            { title: "Reasons, not just outcomes", body: "Not able to contact, did not visit, went elsewhere. Every stopped referral says why." },
            { title: "Name matching", body: "Merge two spellings of a referrer’s name, so all their referrals stay together." },
            { title: "Announcements", body: "Post updates that your referrers see in their app." },
            { title: "Referral page for clinics", body: "Hospitals can also share a referral page with their name on it. Clinics sign in with a one-time code sent to their email." },
          ]}
        />
      </Section>
      <Section eyebrow="You set">
        <Checklist
          items={[
            "Who can send referrals",
            "Which referrers each person on your team covers",
            "Who on your team can see which referrals",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Do referrers need a paid seat?", a: "No. People who only send you referrals are never billed." },
            { q: "What if a referrer’s name is spelled differently?", a: "Merge the spellings into one referrer, so their referrals stay together." },
            { q: "Can the same person be referred twice?", a: "No. Syclops stops a second referral for a mobile number that is already on file and asks the sender to check the existing one." },
            { q: "Can we pay referrers through Syclops?", a: "Not today. Syclops shows who sent each referral and what it became, so you can work out what you owe. Paying referrers happens outside the app." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/referral-management-software", label: "Referral management software", body: "What teams search for, and what this covers." },
            { href: "/gym-referral-software", label: "Gym referral software", body: "Member-get-member beside your gym software." },
            { href: "/guides/referral-portal", label: "Referrers guide", body: "Add referrers and give them a login." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
