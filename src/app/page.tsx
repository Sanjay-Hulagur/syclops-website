import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, JsonLd } from "@/components/interior";
import { CtaBand } from "@/components/page-hero";
import { ReferralPreview } from "@/components/referral-preview";
import { getBillingConfig } from "@/lib/billing";
import { formatInr, publicPlans } from "@/lib/plans";
import { jsonLdGraph, pageSeo, softwareNode } from "@/lib/seo";
import { androidApp } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Syclops — Field Tracking, Referral Management & Subscription Software",
  description:
    "Track field visits, partner referrals and membership payments in one app. See where your team visited, who sent each referral and who has paid for their plan. 14 days free, no card.",
  path: "/",
  keywords: [
    "field tracking software India",
    "referral management software",
    "referral tracking software",
    "partner referral software",
    "GPS field check-in",
    "membership payments",
  ],
});

const steps = [
  {
    title: "Add your team and your referrers",
    body: "Invite field staff to the Android app, then add the partners, members or teachers who send people your way. A long list can be uploaded from a spreadsheet.",
  },
  {
    title: "Log visits and referrals on the phone",
    body: "Staff check in with GPS and a photo stamped with the place and time. Referrers can send people through their own login.",
  },
  {
    title: "See what each referral became",
    body: "Every referral shows where it stands, such as pending or arrived, or why it stopped, such as did not visit. When the person buys, your team records a conversion.",
  },
];

const workflows = [
  {
    href: "/product/referrals",
    title: "Track partner referrals",
    body: "Partners, members, alumni or teachers send people your way. See who sent each one and what happened next.",
  },
  {
    href: "/product/field",
    title: "Manage field visits",
    body: "Your team checks in with GPS and a photo at every visit, so you see where they went and when.",
  },
  {
    href: "/product/subscriptions",
    title: "Sell membership plans",
    body: "Take payments online through Razorpay, or record cash and UPI payments, including part payments in cash.",
  },
];

const extras = [
  "TA/DA from GPS distance",
  "WhatsApp campaigns",
  "PDF daily reports",
  "Android app and web",
  "Razorpay payments",
];

const audiences = [
  {
    id: "gyms",
    title: "Gyms and fitness",
    body: "Members bring friends. See who joined through whom, and who has paid for their membership.",
  },
  {
    id: "education",
    title: "Schools and colleges",
    body: "Counselors visit schools and partners, and every enquiry keeps the name of whoever sent it.",
  },
  {
    id: "sales",
    title: "Sales and channel teams",
    body: "Reps check in at dealers and partners, and every lead keeps the partner who sent it.",
  },
  {
    id: "healthcare",
    title: "Hospitals and clinics",
    body: "Field staff log doctor visits, and each referred patient stays tied to the doctor who sent them.",
  },
];

const origin = [
  "Field visits checked in with GPS and a photo stamped with the place and time",
  "Every referral tied to whoever sent it",
  "Referrers log in to send people and see what happened to them",
];

const safeguards = [
  "Each workspace has its own database",
  "Names and phone numbers are encrypted",
  "Each role sees only its own work",
  "Made in India",
];

const startingPrice = Math.min(...publicPlans.map((plan) => plan.priceInr));

const buyingQuestions = (days: number) => [
  {
    q: "Do I have to talk to sales first?",
    a: `No. Create a workspace with your email address and business name, and we email you a link to set your password. ${days} days free, no card.`,
  },
  {
    q: "What happens when the free trial ends?",
    a: "Access stops until you choose a plan. There is no card on file, so nothing is charged automatically. We send an invoice or a payment link for the seats you need.",
  },
  {
    q: "Does it work on my team’s phones?",
    a: "Yes. Your team installs the Syclops Android app from this site, or opens app.syclops.in in any phone’s browser.",
  },
];

const heading = "display text-2xl font-semibold tracking-tight sm:text-3xl";

export default async function HomePage() {
  const days = (await getBillingConfig()).trial.days;
  return (
    <>
      <JsonLd data={jsonLdGraph([softwareNode])} />
      <section className="border-b border-line lg:flex lg:min-h-[calc(100svh-65px)] lg:items-center">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-8 sm:px-5 sm:py-16 lg:w-full lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-20">
          <div>
            <h1 className="display max-w-3xl text-pretty text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Track field visits, referrals and memberships in one app.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              See where your team visited, who sent each referral and who has
              paid for their plan. {days} days free, no card.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/start?cta=home_hero"
                data-cta-id="home_hero_trial"
                data-cta-location="home_hero"
                className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Start free trial
              </Link>
              <a
                href="#how"
                data-cta-id="home_hero_how"
                data-cta-location="home_hero"
                className="inline-flex min-h-11 items-center justify-center text-base font-medium text-ink underline underline-offset-4"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              Invited by your team?{" "}
              <a
                href={androidApp.href}
                download={androidApp.filename}
                className="font-medium text-ink underline underline-offset-2"
              >
                Get the Android app
              </a>
            </p>
          </div>
          <ReferralPreview />
        </div>
      </section>

      <section id="how" className="scroll-mt-20 border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
          <h2 className={heading}>How it works</h2>
          <ol className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink text-base font-semibold"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
          <h2 className={heading}>Three things Syclops does</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {workflows.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cta-id={`home_workflow_${item.href.split("/").pop()}`}
                data-cta-location="home_workflows"
                className="group flex flex-col rounded-2xl border border-line bg-cream p-5 transition hover:border-ink/40"
              >
                <h3 className="display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.body}</p>
                <p className="mt-4 text-sm font-medium text-iris-dark group-hover:underline">
                  How it works
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <p className="mr-1 text-sm text-muted">Also in every workspace:</p>
            {extras.map((item) => (
              <span key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
          <h2 className={heading}>Built for teams that grow through referrals</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {audiences.map((item) => (
              <Link
                key={item.id}
                href={`/industries/${item.id}`}
                data-cta-id={`home_industry_${item.id}`}
                data-cta-location="home_industries"
                className="group rounded-2xl border border-line bg-paper p-5 transition hover:border-ink/40"
              >
                <h3 className="font-semibold group-hover:underline">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Also used in{" "}
            <Link href="/industries/fintech" className="font-medium text-ink underline underline-offset-2">
              fintech
            </Link>{" "}
            and{" "}
            <Link href="/industries/medtech" className="font-medium text-ink underline underline-offset-2">
              medtech
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-5 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 className={heading}>Built inside a hospital, then opened up</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Syclops began as the in-house system of a hospital network in
              India, used every day by its field staff.
            </p>
            <ul className="mt-5 grid gap-3">
              {origin.map((item) => (
                <li key={item} className="flex gap-3 text-base">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iris" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We turned it into a product any team that grows through visits and
              referrals can start on its own.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-5 sm:p-6">
            <h3 className="font-semibold">How your data is kept</h3>
            <ul className="mt-4 grid gap-3 text-sm">
              {safeguards.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-money">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/security"
              className="mt-5 inline-block text-sm font-medium text-ink underline underline-offset-2"
            >
              Security details
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-5 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className={heading}>From {formatInr(startingPrice)} per field seat a month</h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-muted">
              People who only send you referrals are never billed. {days} days
              free, no card.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/start?cta=home_pricing"
              data-cta-id="home_pricing_trial"
              data-cta-location="home_pricing"
              className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              data-cta-id="home_pricing_plans"
              data-cta-location="home_pricing"
              className="inline-flex min-h-11 items-center justify-center text-base font-medium text-ink underline underline-offset-4"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
        <h2 className={heading}>Questions before you start</h2>
        <div className="mt-6">
          <FaqList items={buyingQuestions(days)} />
        </div>
        <p className="mt-4 text-sm text-muted">
          More in the{" "}
          <Link href="/faq" className="font-medium text-ink underline underline-offset-2">
            FAQ
          </Link>
          .
        </p>
      </section>

      <CtaBand />
    </>
  );
}
