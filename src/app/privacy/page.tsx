import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
        scene="legal"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <LegalBody id="privacy" />
    </>
  );
}
