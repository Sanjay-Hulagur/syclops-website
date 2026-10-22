import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { LegalBody } from "@/components/legal-body";
import { legalDocs } from "@/lib/legal";
import { pageSeo } from "@/lib/seo";

const doc = legalDocs.terms;

export const metadata: Metadata = pageSeo({
  title: "Terms and conditions",
  description: doc.summary,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and conditions"
        body="Creating a workspace accepts these terms. Seats may not be shared."
        scene="terms"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <LegalBody id="terms" />
      <CtaBand
        title="Accept the terms by creating a workspace."
        body="The free trial does not need a card. Seats bill when you add them."
      />
    </>
  );
}
