import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Related, Section } from "@/components/interior";

export const metadata: Metadata = {
  title: "Security",
  description: "Multi-tenant isolation, RBAC, encryption, and DPDP-minded operations.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="A lens, not a leak."
        body="Retention, roles, and exports are in Settings. You do not file a ticket to turn them on."
        scene="security"
      />
      <Section>
        <FeatureGrid
          items={[
            { title: "Multi-tenant isolation", body: "Each organization is a hard boundary. GPS, plans, and billing do not leak across tenants." },
            { title: "Role-based access", body: "Field, sales, partners, managers. Partners never see another partner’s book." },
            { title: "Encryption", body: "TLS in transit. Sensitive fields at rest. Least-privilege keys for object storage." },
            { title: "India and DPDP", body: "India hosting on Scale. Purpose-limited GPS. Retention you set." },
            { title: "SSO and audit", body: "Scale. Sign-in logs and exports in Settings → Security." },
            { title: "Device GPS", body: "Working day only. Check-out ends the trail." },
          ]}
        />
      </Section>
      <Section eyebrow="You configure">
        <Checklist
          items={[
            "Retention days for GPS points",
            "Who can export personal data",
            "Invite expiry",
            "Session length",
            "Region of data (Scale)",
            "SSO (Scale)",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can staff see each other’s routes?", a: "Only if you grant the manager role. Field seats see their own day." },
            { q: "Data subject request?", a: "Settings → Data. Access and deletion without a mailbox." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/privacy", label: "Privacy", body: "What we process." },
            { href: "/pricing", label: "Scale", body: "SSO and India region." },
            { href: "/start", label: "Start", body: "Your tenant starts empty." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
