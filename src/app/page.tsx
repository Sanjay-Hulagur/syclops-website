import type { Metadata } from "next";
import Link from "next/link";
import { HeroLoop } from "@/components/hero-loop";
import { FaqList, JsonLd } from "@/components/interior";
import { CtaBand } from "@/components/page-hero";
import { getBillingConfig } from "@/lib/billing";
import { formatInr, publicPlans } from "@/lib/plans";
import { jsonLdGraph, pageSeo, softwareNode } from "@/lib/seo";
import { androidApp } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Syclops — Field Tracking, Referral Management & Subscription Software",
  description:
    "Track field visits, partner referrals and subscription renewals in one app. See where your team visited, who sent each referral and which plans are about to lapse. 14 days free, no card.",
  path: "/",
  keywords: [
    "field tracking software India",
    "referral management software",
    "referral tracking software",
    "partner referral software",
    "doctor referral tracking",
    "GPS field check-in",
    "subscription renewals",
  ],
});

const workflows = [
  {
    href: "/product/referrals",
    title: "Track partner referrals",
    body: "Doctors, members, alumni or channel partners send people your way. See who sent each one and what happened next.",
  },
  {
    href: "/product/field",
    title: "Manage field visits",
    body: "Your team checks in with GPS and a photo at every visit, so you see where they went and when.",
  },
  {
    href: "/product/subscriptions",
    title: "Manage subscriptions",
    body: "Keep plans, renewals and failed payments next to the person who referred the customer.",
  },
];

const startingPrice = Math.min(...publicPlans.map((plan) => plan.priceInr));

const buyingQuestions = (days: number) => [
  {
    q: "How much does Syclops cost?",
    a: `From ${formatInr(startingPrice)} per field seat a month. People who refer to you, such as doctors or members, are never billed as seats. Every plan is on the pricing page.`,
  },
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
  {
    q: "Is our data kept apart from other companies’ data?",
    a: "Yes. Each workspace gets its own database, and personal details such as names and phone numbers are encrypted in it.",
  },
];

export default async function HomePage() {
  const days = (await getBillingConfig()).trial.days;
  return (
    <>
      <JsonLd data={jsonLdGraph([softwareNode])} />
      <section className="border-b border-line lg:flex lg:min-h-[calc(100svh-65px)] lg:items-center">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-8 sm:px-5 sm:py-16 lg:w-full lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-20">
          <div>
            <h1 className="display max-w-3xl text-pretty text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Track field visits, referrals and renewals in one app.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              See where your team visited, who sent each referral and which plans
              are about to lapse. {days} days free, no card.
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
          <div className="hidden lg:block">
            <HeroLoop />
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-20 border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            Three things Syclops does
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {workflows.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition hover:border-ink/40"
              >
                <h3 className="display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.body}</p>
                <p className="mt-4 text-sm font-medium text-iris-dark group-hover:underline">
                  How it works
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            Built inside a hospital, then opened up
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Syclops began as the in-house system of a hospital network in
            India, where field staff used it every day to log doctor visits
            and the patients those doctors referred. We turned it into a product
            any team that grows through visits and referrals can set up on its
            own.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-16">
        <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
          Questions before you start
        </h2>
        <div className="mt-6">
          <FaqList items={buyingQuestions(days)} />
        </div>
        <p className="mt-4 text-sm text-muted">
          See{" "}
          <Link href="/pricing" className="font-medium text-ink underline underline-offset-2">
            pricing
          </Link>{" "}
          or{" "}
          <Link href="/faq" className="font-medium text-ink underline underline-offset-2">
            more answers
          </Link>
          .
        </p>
      </section>

      <CtaBand />
    </>
  );
}
