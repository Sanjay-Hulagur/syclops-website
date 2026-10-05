import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Per-seat field users, referrer portal, and subscription module.",
};

const plans = [
  {
    name: "Team",
    price: "₹1,499",
    cadence: "per field seat / month",
    items: [
      "Field tracking, TADA, routes",
      "Referral workspace",
      "Up to 3 managers",
      "WhatsApp + Maps",
      "In-app help and guides",
    ],
  },
  {
    name: "Growth",
    price: "₹2,499",
    cadence: "per field seat / month",
    featured: true,
    items: [
      "Everything in Team",
      "Partner / member portal",
      "Subscription plans & dunning",
      "Referral rewards on invoices",
      "Analytics by referrer and region",
    ],
  },
  {
    name: "Scale",
    price: "₹4,499",
    cadence: "per field seat / month",
    items: [
      "Everything in Growth",
      "Multi-brand / multi-city",
      "SSO and audit logs in Settings",
      "HIS / ERP connectors",
      "India hosting region picker",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Start with seats. Add the loop you need."
        body="India-first, billed in rupees. Annual terms discount 15% at checkout. Referrer logins are not billed as field seats. No quote, no call."
        scene="pricing"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-3xl border p-6 ${
              plan.featured
                ? "border-iris bg-cream"
                : "border-line bg-paper"
            }`}
          >
            <h2 className="display text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
            <p className="mt-1 text-sm text-muted">{plan.cadence}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/start"
              className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${
                plan.featured
                  ? "bg-iris text-cream hover:bg-iris-dark"
                  : "border border-line hover:bg-quiet"
              }`}
            >
              Start {plan.name}
            </Link>
          </article>
        ))}
      </section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "What is billed?", a: "Field and manager seats. Referrers are free. 14 days without a card." },
            { q: "Annual discount?", a: "15% at checkout. Cancel in Settings → Billing." },
            { q: "Can I start on Team and add subscriptions later?", a: "Yes. Upgrade to Growth in Settings. History stays." },
          ]}
        />
      </Section>
      <CtaBand
        title="Not sure which loop to start with?"
        body="Most teams turn on field and referrals first, then subscriptions from Settings in the same week."
      />
    </>
  );
}
