import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, JsonLd, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { getBillingConfig } from "@/lib/billing";
import { formatInr, publicPlans } from "@/lib/plans";
import { jsonLdGraph, pageSeo, pricingOfferNodes, softwareNode } from "@/lib/seo";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Pricing — field seats, referrals, subscriptions",
  description:
    "Syclops pricing in rupees per field seat a month. Team includes field tracking and referrals. Growth adds subscriptions, leads with call outcomes, and analytics. Referrer logins are not billed.",
  path: "/pricing",
  keywords: [
    "field tracking software pricing India",
    "referral software pricing",
    "Syclops plans",
  ],
});

const EXAMPLE_SEATS = 3;

const talkToUs = `mailto:${supportEmail}?subject=${encodeURIComponent("Syclops Scale plan")}`;

export default async function PricingPage() {
  const billing = await getBillingConfig();
  const days = billing.trial.days;

  return (
    <>
      <JsonLd
        data={jsonLdGraph([
          {
            ...softwareNode,
            offers: pricingOfferNodes,
          },
        ])}
      />
      <PageHero
        eyebrow="Pricing"
        title="Pay per field seat. Referrers are free."
        body={`Prices in rupees, per field seat, per month. People who only send referrals are not billed as seats. ${days} days free, no card.`}
        scene="pricing"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-3">
        {publicPlans.map((plan) => {
          const id = plan.name.toLowerCase();
          const isScale = plan.name === "Scale";
          return (
            <article
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-6 ${
                plan.featured ? "border-iris-dark bg-cream" : "border-line bg-paper"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="display text-2xl font-semibold">{plan.name}</h2>
                {plan.featured ? (
                  <span className="rounded-full bg-iris-dark px-2.5 py-1 text-xs font-medium text-cream">
                    Most teams
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-3xl font-semibold">{formatInr(plan.priceInr)}</p>
              <p className="mt-1 text-sm text-muted">per field seat a month</p>
              <p className="mt-3 rounded-lg bg-quiet px-3 py-2 text-sm">
                {EXAMPLE_SEATS} field seats:{" "}
                <span className="font-semibold">
                  {formatInr(plan.priceInr * EXAMPLE_SEATS)} a month
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {isScale ? (
                <a
                  href={talkToUs}
                  className="mt-8 flex h-12 items-center justify-center rounded-full border border-line px-4 text-base font-medium hover:bg-quiet"
                >
                  Talk to us
                </a>
              ) : (
                <Link
                  href={`/start?plan=${id}&cta=pricing`}
                  data-cta-id={`pricing_${id}`}
                  data-cta-location="pricing"
                  className={`mt-8 flex h-12 items-center justify-center rounded-full px-4 text-base font-medium ${
                    plan.featured
                      ? "bg-iris-dark text-cream hover:bg-iris-deep"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start free trial
                </Link>
              )}
            </article>
          );
        })}
      </section>
      <Section eyebrow="Paying" title="How paying works today">
        <ol className="grid max-w-3xl gap-3 text-sm leading-7 text-muted">
          <li>
            <span className="font-medium text-ink">1. Try it free.</span> Use
            Syclops for {days} days. We never ask for a card.
          </li>
          <li>
            <span className="font-medium text-ink">2. Pick your seats.</span>{" "}
            Tell us which plan and how many field seats you need.
          </li>
          <li>
            <span className="font-medium text-ink">3. Pay the invoice.</span> We
            send an invoice or a payment link. In-app billing is not built yet.
          </li>
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">{billing.trial.terms}</p>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            {
              q: "What is billed?",
              a: "Field seats, such as PROs, trainers or sales staff, each month. People who only send referrals, such as doctors or members, are not billed as seats.",
            },
            {
              q: "What happens when the free trial ends?",
              a: "Access stops until a paid plan is applied. There is no card on file, so nothing is charged automatically.",
            },
            {
              q: "How do we pay?",
              a: "We send an invoice or a payment link for the plan and seats you choose.",
            },
            {
              q: "Can I start on Team and add subscriptions later?",
              a: "Yes. Tell us when you want Growth and we move your workspace to it. Your history stays.",
            },
          ]}
        />
      </Section>
      <CtaBand
        title="Not sure which plan fits?"
        body={`The ${days}-day trial is the same whichever plan you pick. Email us your team size and we’ll suggest one.`}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/start?cta=pricing_band"
              data-cta-id="pricing_band_trial"
              data-cta-location="cta_band"
              className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Start free trial
            </Link>
            <a
              href={`mailto:${supportEmail}`}
              className="flex h-12 items-center justify-center rounded-full border border-cream/30 px-6 text-base text-cream hover:bg-cream/5"
            >
              Email us
            </a>
          </div>
        }
      />
    </>
  );
}
