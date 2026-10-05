import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Subscription management",
  description: "Plans, renewals, dunning, and at-risk lists that create field tasks.",
};

export default function SubscriptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Subscriptions"
        title="The page a field tracker cannot have."
        body="Plans remember who referred them and which visit closed. Failed payments become field work, not another dunning email."
        scene="subscription"
      />
      <Section eyebrow="How a plan lives">
        <Steps
          items={[
            { title: "Define plans", body: "Price, interval, trial, freeze, failed-payment behaviour." },
            { title: "Attach origin", body: "Referrer and last visit stay on the record." },
            { title: "At-risk becomes a beat", body: "Quiet usage or a bounce writes a visit automatically." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product">
        <FeatureGrid
          items={[
            { title: "Plan catalogue", body: "Memberships, terms, retainers, policies, device contracts — one object." },
            { title: "Trials and freezes", body: "Rules you set. No spreadsheet of exceptions." },
            { title: "Dunning", body: "Retry schedule, then a field task if it still fails." },
            { title: "Rewards", body: "Referrer credit on the next successful invoice." },
            { title: "Cash and UPI", body: "Razorpay, Stripe, or a desk collection marked by staff." },
            { title: "Export", body: "For accounts. Tally-friendly CSV on Scale." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Gateway keys in Integrations",
            "Plan prices and intervals",
            "Qualification window for rewards",
            "When at-risk creates a visit",
            "Who can void or refund in-app",
            "Tax labels on invoices",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can we collect cash?", a: "Yes. Staff mark the collection. It still attaches to the plan and the referrer." },
            { q: "What if we already bill in another tool?", a: "Connect the gateway or import invoices. Origin still lives in Syclops." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/plans-billing", label: "Billing guide", body: "Keys, plans, at-risk." },
            { href: "/product/analytics", label: "Analytics", body: "Which plans still pay." },
            { href: "/pricing", label: "Pricing", body: "Growth includes subscriptions." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
