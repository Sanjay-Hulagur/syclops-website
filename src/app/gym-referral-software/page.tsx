import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

const title = "Gym referral software";
const description =
  "Gym referral software for member-get-member programmes in India. Track who sent each new member, approve rewards before they are paid, and see which memberships have a payment due — without replacing your gym ERP.";

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
    a: "Software that records which member sent a friend, whether that friend joined, and what the member is owed for it. Syclops also tracks memberships and payments, so you can see who has paid and who has a payment due.",
  },
  {
    q: "Does this replace gym management software?",
    a: "No. Keep class booking, door access, and GST invoices where they are. Syclops covers who referred each member, trainer visits, and whether the membership is paid.",
  },
  {
    q: "Can members refer without downloading an app?",
    a: "Yes. Members open your referral page in a browser and sign in with a one-time code sent to their email. Our team sets the page up with you. Members are not paid field seats.",
  },
  {
    q: "How do member-get-member rewards work?",
    a: "Record the reward on the referral when the friend joins. Payouts move from pending to approved to paid, so nothing is paid before someone approves it. The referral page blocks a second open referral for the same mobile number.",
  },
  {
    q: "What about multi-centre chains?",
    a: "Set up each centre as a region. Trainers are field seats and check in at their visits. Members use the referral page and are not billed.",
  },
  {
    q: "Does Syclops do biometric gym attendance?",
    a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and memberships with their payments.",
  },
  {
    q: "Will the app use gym words?",
    a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say trainers and members. The steps are the same.",
  },
];

const jobs = [
  {
    title: "Member-get-member that knows who sent them",
    body: "Each referral keeps the name of the member who sent it, and shows whether the friend joined or why they did not.",
  },
  {
    title: "Rewards you approve",
    body: "Record the reward on the referral. Payouts move from pending to approved to paid.",
  },
  {
    title: "Trainer field days",
    body: "Check-in at the club, PT intros as visits, and TA/DA if trainers travel between centres.",
  },
  {
    title: "Payments you can see",
    body: "Memberships record cash, UPI, EMI, or Razorpay payments, so a payment due is visible to the trainer who sold it.",
  },
];

export default function GymReferralSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Gym referral software"
        title="Gym referral software for member-get-member that pays."
        body="Syclops tracks which member sent each new join, records the reward you approve, and shows which memberships have a payment due. Your floor ERP can keep classes and the door."
        scene="referral"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Gym referral software", path: "/gym-referral-software" },
        ]}
      />

      <Section eyebrow="The problem" title="Referral whiteboards do not survive a busy month.">
        <p className="max-w-2xl text-base leading-7 text-ink/90">
          Indian gym software is strong at door attendance, GST invoices, and
          class booking. Member referrals still live on a whiteboard, and nobody
          is sure which rewards were promised. Gym referral software has to keep
          the name of who sent each member, and show the team which memberships
          still have a payment due.
        </p>
      </Section>

      <Section eyebrow="What it does" title="Same steps as every Syclops industry.">
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
            If you only need a live GPS tracker for trainers and never track
            referrals or memberships, a GPS-only tool is enough. See{" "}
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
              body: "Trainer visits, the member referral page, and memberships.",
            },
            {
              href: "/compare/gym-software",
              label: "vs gym management software",
              body: "Keep classes and the door. Track referrals and payments here.",
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
        title="Start your member referral page this week."
        body="Create a gym workspace, add your trainers, and we set up your referral page with you."
      />
    </>
  );
}
