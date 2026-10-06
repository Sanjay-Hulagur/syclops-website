import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Security — DPDP, GPS retention, RBAC",
  description:
    "Syclops security: multi-tenant isolation, role-based access, encryption, working-day GPS, India hosting on Scale, and data export from Settings.",
  path: "/security",
  keywords: ["DPDP field tracking", "employee GPS privacy", "Syclops security"],
});

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
        <Prose>
          <p>
            Location is evidence for a working day, not a forever trail.
            Partners never see GPS. You set retention, invite expiry, session
            length, and who can export personal data. SSO and an India region
            picker are on Scale.
          </p>
        </Prose>
      </Section>
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
            { q: "SOC 2 or ISO certificates?", a: "We do not publish audit badges on this site. Encryption, RBAC, and tenant isolation are in the product; ask after you create a workspace if you need a questionnaire." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/blog/dpdp-employee-gps-retention", label: "DPDP and GPS retention", body: "Working-day evidence, not a forever trail." },
            { href: "/pricing", label: "Scale", body: "SSO and India region." },
            { href: "/start", label: "Start", body: "Your tenant starts empty." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
