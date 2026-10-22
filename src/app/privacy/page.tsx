import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { LegalBody } from "@/components/legal-body";
import { legalDocs } from "@/lib/legal";
import { pageSeo } from "@/lib/seo";

const doc = legalDocs.privacy;

export const metadata: Metadata = pageSeo({
  title: "Privacy policy",
  description: doc.summary,
  path: "/privacy",
  keywords: ["Syclops privacy", "DPDP field GPS", "employee location data"],
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        body={doc.summary}
        scene="privacy"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <LegalBody id="privacy" />
      <CtaBand
        title="Read the policy. Start the trial when you are ready."
        body="No card. The workspace is the same product the policy describes."
      />
    </>
  );
}
