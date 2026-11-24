import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Security — DPDP, working-day GPS, RBAC",
  description:
    "Syclops security: multi-tenant isolation, role-based access, encryption, sign-in and change logs, and working-day GPS.",
  path: "/security",
  keywords: ["DPDP field tracking", "employee GPS privacy", "Syclops security"],
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="A lens, not a leak."
        body="Each workspace is kept apart, every role sees only its own work, and GPS is recorded for the working day."
        scene="security"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Security", path: "/security" },
        ]}
      />
      <Section>
        <Prose>
          <p>
            Location is evidence for a working day, not a 24-hour trail.
            Partners never see GPS, and field staff see only their own day.
            If your IT team needs hosting or retention details in writing,
            write to {supportEmail}.
          </p>
        </Prose>
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "Multi-tenant isolation", body: "Each organization is a hard boundary. GPS, plans, and billing do not leak across tenants." },
            { title: "Role-based access", body: "Field, sales, partners, managers. Partners never see another partner’s book." },
            { title: "Encryption", body: "TLS in transit. Names and phone numbers encrypted at rest. Photos and files served through signed links." },
            { title: "DPDP", body: "Purpose-limited GPS: recorded for the working day and used as visit proof." },
            { title: "Sign-in and change logs", body: "Sign-ins are recorded for each user, and changes to records such as referrers are logged with who made them. Ask us if you need an extract." },
            { title: "Device GPS", body: "Working day only. Check-out ends the trail." },
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can staff see each other’s routes?", a: "Only if you grant the manager role. Field seats see their own day." },
            { q: "Data subject request?", a: `Write to ${supportEmail} with the request and we will help you find, export or delete that person’s records.` },
            { q: "SOC 2 or ISO certificates?", a: "We do not publish audit badges on this site. Encryption, RBAC, and tenant isolation are in the product; ask after you create a workspace if you need a questionnaire." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/blog/dpdp-employee-gps-retention", label: "DPDP and GPS retention", body: "Working-day evidence, not a 24-hour trail." },
            { href: "/privacy", label: "Privacy policy", body: "What is processed, and how to request an export." },
            { href: "/product/field", label: "Field tracking", body: "GPS as visit proof, not CCTV." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
