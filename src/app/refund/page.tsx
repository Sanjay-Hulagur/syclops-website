import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalBody } from "@/components/legal-body";
import { legalDocs } from "@/lib/legal";
import { pageSeo } from "@/lib/seo";

const doc = legalDocs.refund;

export const metadata: Metadata = pageSeo({
  title: "Refund policy",
  description: doc.summary,
  path: "/refund",
});

export default function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund policy"
        body="Cancellations are considered within 7 days of the order. Approved refunds take 14 days."
        scene="legal"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Refund", path: "/refund" },
        ]}
      />
      <LegalBody id="refund" />
    </>
  );
}
