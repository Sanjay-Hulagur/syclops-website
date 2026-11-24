import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

const title = "Gym referral software";
const description =
  "Gym referral software for member-get-member programmes in India. Track who sent each new member, give members their own login to refer friends, and see which memberships have a payment due — without replacing your gym ERP.";

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
    a: "Software that records which member sent a friend and whether that friend joined. Syclops also tracks memberships and payments, so you can see who has paid and who has a payment due.",
  },
  {
    q: "Does this replace gym management software?",
    a: "No. Keep class booking, door access, and GST invoices where they are. Syclops covers who referred each member, trainer visits, and whether the membership is paid.",
  },
  {
    q: "Can members refer without downloading an app?",
    a: "Yes. Members log in at app.syclops.in in any phone browser with a one-time code, and see the friends they referred. Members are not paid field seats.",
  },
  {
    q: "Can Syclops pay member rewards?",
    a: "Not today. Each referral shows which member sent the friend and whether the friend came in, so your desk knows whom to reward. Giving the reward happens outside the app. The same mobile number cannot be referred twice.",
  },
  {
    q: "What about multi-centre chains?",
    a: "Set up each centre as a region. Trainers are field seats and check in at their visits. Members refer from their own login and are not billed.",
  },
  {
    q: "Does Syclops do biometric gym attendance?",
    a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and memberships with their payments.",
  },
  {
    q: "Will the app use gym words?",
    a: "Partly. The phone screens say referrers and referred users. Some forms and the admin dashboard still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. The steps are the same.",
  },
];

const jobs = [
  {
    title: "Member-get-member that knows who sent them",
    body: "Each referral keeps the name of the member who sent it, and shows whether the friend came in or why they did not.",
  },
  {
    title: "A login for members",
    body: "Members refer friends from their own login, and see the status of each friend they referred.",
  },
  {
    title: "Trainer field days",
    body: "Check-in at the club, PT intros as visits, and TA/DA if trainers travel between centres.",
  },
  {
    title: "Payments you can see",
    body: "Memberships record cash, UPI, or Razorpay payments, and a payment due is visible to the trainer who sold it.",
  },
];

export default function GymReferralSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Gym referral software"
        title="Gym referral software that knows who sent each member."
        body="Syclops tracks which member sent each new join, gives members their own login to refer friends, and shows which memberships have a payment due. Your floor ERP can keep classes and the door."
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
              body: "Trainer visits, member referrals, and memberships.",
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
        title="Start tracking member referrals this week."
        body="Create a gym workspace, add your trainers and members, and log your first referral the same day."
      />
    </>
  );
}
