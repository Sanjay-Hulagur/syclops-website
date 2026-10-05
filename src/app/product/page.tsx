import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { FaqList, Related, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Syclops connects field visits, referral partners, and subscriptions in one growth loop.",
};

const pillars = [
  {
    href: "/product/field",
    title: "Field tracking",
    body: "Check-in, photos, routes, TADA. Built for Indian field conditions.",
  },
  {
    href: "/product/referrals",
    title: "Referral management",
    body: "One referrer object with a portal and a reward on the invoice.",
  },
  {
    href: "/product/subscriptions",
    title: "Subscription management",
    body: "Plans, dunning, and at-risk lists that create field work.",
  },
  {
    href: "/product/analytics",
    title: "Analytics",
    body: "Attribute MRR to the visit and the referrer.",
  },
  {
    href: "/product/mobile",
    title: "Mobile app",
    body: "Field, sales, and partner. Offline-tolerant.",
  },
  {
    href: "/integrations",
    title: "Integrations",
    body: "WhatsApp, Razorpay, Stripe, Maps, billing. Keys in Settings.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="The operating system for a paying loop."
        body="GPS tools stop at the pin. CRMs stop at the deal. Vertical software stops at the invoice. Syclops holds the visit, the referral, and the plan together — and you turn it on yourself."
        scene="loop"
      />
      <Section eyebrow="The loop">
        <Steps
          items={[
            { title: "Visit lands", body: "A field seat checks in. Photo and route attach to an account." },
            { title: "Referral named", body: "A partner or member sends someone. Status is a first-class object." },
            { title: "Plan pays", body: "The referred person is on a subscription. Churn writes the next visit." },
          ]}
        />
      </Section>
      <Section eyebrow="Modules">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-line bg-cream p-6 hover:border-ink/30"
            >
              <h2 className="display text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Do I need every module?", a: "No. Field and referrals are enough on Team. Subscriptions unlock on Growth." },
            { q: "How long to go live?", a: "A workspace in minutes. A first beat the same day if you import a CSV." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides", label: "Guides", body: "Self-serve setup, hour by hour." },
            { href: "/industries", label: "Industries", body: "Same loop, different nouns." },
            { href: "/compare", label: "Compare", body: "GPS, CRM, Excel, vertical tools." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
