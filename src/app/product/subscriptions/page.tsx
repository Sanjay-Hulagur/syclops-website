import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Subscription management with dunning that creates field visits",
  description:
    "Syclops subscription software for memberships, fees, retainers, and policies. Razorpay or Stripe retries, then at-risk plans become a beat — not only a dunning email.",
  path: "/product/subscriptions",
  keywords: [
    "subscription management software",
    "membership dunning",
    "Razorpay subscriptions",
    "failed payment field visit",
    "at-risk members",
  ],
});

export default function SubscriptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Subscription management"
        title="The page a field tracker cannot have."
        body="Plans remember who referred them and which visit closed. Failed payments become field work, not another dunning email."
        scene="subscription"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Subscriptions", path: "/product/subscriptions" },
        ]}
      />
      <Section eyebrow="Dunning in the real world" title="Retry the mandate. Then send a person.">
        <Prose>
          <p>
            Billing platforms recover involuntary churn with retries, emails,
            and a link to update the card. That is correct when the customer
            lives in a browser. Gym members, semester fees, care plans,
            retainers, and policies often fail for reasons a retry cannot see.
          </p>
          <p>
            Syclops keeps origin on the plan: referrer and last visit. After
            your retry schedule, quiet usage or a bounce can write a visit
            automatically. Cash and UPI marked by staff still attach to the
            same record.
          </p>
        </Prose>
      </Section>
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
            { q: "Does this replace gym or school billing?", a: "Not the operational ERP. Syclops is the plan tied to visits and referrers, with dunning that can create field work." },
            { q: "Which payment gateways?", a: "Razorpay and Stripe. Test keys first in Settings → Integrations." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/blog/razorpay-memberships-field-dunning", label: "Razorpay then a visit", body: "Retries first. Then the beat." },
            { href: "/product/referrals", label: "Referral management", body: "Origin stays on the plan." },
            { href: "/product/analytics", label: "Analytics", body: "Which plans still pay." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
