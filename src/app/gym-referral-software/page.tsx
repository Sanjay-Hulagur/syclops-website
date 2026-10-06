import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, JsonLd, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";

const title = "Gym referral software";
const description =
  "Gym referral software for member-get-member programmes in India. Track who sent the join, pay rewards after a qualification window, and send trainers on field visits when a membership is at risk — without replacing your gym ERP.";

export const metadata: Metadata = {
  ...pageSeo({
    title,
    description,
    path: "/gym-referral-software",
    keywords: [
      "gym referral software",
      "gym membership referral",
      "member get member gym",
      "gym referral programme",
      "membership referral software India",
    ],
  }),
  title: { absolute: "Gym Referral Software | Member-Get-Member | Syclops" },
};

const faqs = [
  {
    q: "What is gym referral software?",
    a: "Software that records which member sent a friend, whether that friend joined a membership, and whether they still pay. Rewards wait until a qualification window. Syclops also lets a failed debit become a trainer visit.",
  },
  {
    q: "Does this replace gym management software?",
    a: "No. Keep class booking, door access, and GST invoices where they are. Syclops owns referral origin, trainer field proof, and whether the membership still pays.",
  },
  {
    q: "Can members refer without downloading an app?",
    a: "Yes. A portal link or QR at reception is enough. Members are not paid field seats.",
  },
  {
    q: "How do member-get-member rewards work?",
    a: "Credit, extra days, or a percent of the invoice. You set a qualification window and a cap in Settings → Referrals. Nothing pays until the referred member stays past that window. Duplicate phone or email cannot be referred twice into the same plan.",
  },
  {
    q: "What about multi-centre chains?",
    a: "Clubs as regions on Team and Growth. Multi-brand or multi-city on Scale. Trainers are field seats; members use the portal.",
  },
  {
    q: "Does Syclops do biometric gym attendance?",
    a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and paying memberships.",
  },
];

const jobs = [
  {
    title: "Member-get-member that still knows who sent them",
    body: "The friend’s membership keeps origin. Status is sent, joined, paying, or churned — not a whiteboard at reception.",
  },
  {
    title: "Rewards on the next invoice",
    body: "Credit or extra days after your qualification window. Caps stop paying for joins that bounce.",
  },
  {
    title: "Trainer field days",
    body: "Check-in at the club, PT intros as visits, TADA if trainers travel between centres.",
  },
  {
    title: "Churn as a beat",
    body: "Unused visits or a failed UPI mandate write a trainer task before the member ghosts.",
  },
];

export default function GymReferralSoftwarePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gym referral software", path: "/gym-referral-software" },
        ])}
      />
      <PageHero
        eyebrow="Gym referral software"
        title="Gym referral software for member-get-member that still pays."
        body="Syclops tracks which member sent the join, holds the reward until they stay, and writes a trainer visit when the membership is at risk. Your floor ERP can keep classes and the door."
        scene="referral"
      />

      <Section eyebrow="The problem" title="Referral whiteboards do not survive a failed debit.">
        <p className="max-w-2xl text-base leading-7 text-ink/90">
          Indian gym software is strong at door attendance, GST invoices, and
          class booking. Member referrals still live on a whiteboard, and a
          failed mandate rarely becomes a trainer visit. Gym referral software
          has to keep origin on the membership — then give the field team a
          reason to walk the floor or the next centre.
        </p>
      </Section>

      <Section eyebrow="What it does" title="Same loop as every Syclops industry. Gym nouns.">
        <FeatureGrid items={jobs} />
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          The industry page is{" "}
          <Link href="/industries/gyms" className="font-medium text-iris">
            Syclops for gyms
          </Link>
          . Category language for any vertical lives on{" "}
          <Link href="/referral-management-software" className="font-medium text-iris">
            referral management software
          </Link>
          . This URL is for teams searching gym referral and member-get-member.
        </p>
      </Section>

      <Section eyebrow="Who it is not for">
        <div className="max-w-3xl space-y-6 text-base leading-7 text-ink/90">
          <p>
            If you need class schedules, lockers, or biometric door attendance,
            keep gym management software. Syclops does not replace that stack.
          </p>
          <p>
            If you only need a live GPS tracker for trainers and never attach a
            referred membership, a GPS-only tool is enough. See{" "}
            <Link href="/compare/vertical-software" className="text-iris">
              vs vertical software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section eyebrow="Read next">
        <Related
          items={[
            {
              href: "/industries/gyms",
              label: "Gyms industry",
              body: "Trainer visits, member portal, freeze rules.",
            },
            {
              href: "/compare/gym-software",
              label: "vs gym management software",
              body: "Keep classes and the door. Put origin on the membership.",
            },
            {
              href: "/blog/gym-referral-programme-without-replacing-erp",
              label: "Run MGM beside your gym ERP",
              body: "What to keep in floor software, what to move here.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="Gym referral software, plainly.">
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        title="Turn on a member portal this week."
        body="Create a gym workspace, set the reward and the qualification window, and print a QR at reception."
      />
    </>
  );
}
