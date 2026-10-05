import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { integrations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integrations",
  description: "WhatsApp, Razorpay, Stripe, Maps, billing, and ERPs.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Named connections. Keys in Settings."
        body="No partner engineer. Paste keys, map fields, test in sandbox, switch live. The loop stays in Syclops."
        scene="integrations"
      />
      <Section eyebrow="How you connect">
        <Steps
          items={[
            { title: "Open Settings", body: "Integrations is a list, not a sales form." },
            { title: "Paste keys", body: "Test mode first. A green ping means the tenant can talk." },
            { title: "Map objects", body: "Plan ↔ invoice, visit ↔ location, referrer ↔ customer id." },
          ]}
        />
      </Section>
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-line bg-cream p-6"
            >
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="mt-2 text-sm text-muted">{item.use}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "WhatsApp Business", body: "Templates for referral status and failed payments. You own the WABA." },
            { title: "Razorpay & Stripe", body: "Plans, retries, referral credits on the next invoice." },
            { title: "Maps", body: "Geocode accounts, draw routes, export visit map PDFs." },
            { title: "HIS / ERP", body: "Scale. Invoices and admissions in, origin stays here." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Which events send a WhatsApp template",
            "Sandbox vs live keys",
            "Who can rotate secrets",
            "Field mapping for CSV import",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Webhook docs?", a: "In the product after you create a workspace. Public API on Scale." },
            { q: "On-prem?", a: "No. Multi-tenant cloud. India region on Scale." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/plans-billing", label: "Billing guide", body: "Razorpay / Stripe first." },
            { href: "/security", label: "Security", body: "Where keys and GPS live." },
            { href: "/start", label: "Start", body: "You need a workspace before keys." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
