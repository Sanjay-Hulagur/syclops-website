import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { LegalBody } from "@/components/legal-body";
import { legalDocs } from "@/lib/legal";
import { pageSeo } from "@/lib/seo";

const doc = legalDocs.cookies;

export const metadata: Metadata = pageSeo({
  title: "Cookie policy",
  description: doc.summary,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie policy"
        body="Essential cookies only. No advertising cookies."
        scene="cookies"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cookies", path: "/cookies" },
        ]}
      />
      <LegalBody id="cookies" />
      <CtaBand
        title="Essential cookies only. The trial is still free."
        body="No advertising cookies. No card to open a workspace."
      />
    </>
  );
}
