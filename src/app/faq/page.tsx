import type { Metadata } from "next";
import { FaqList, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/guides";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "FAQ — seats, GPS, CRM, hosting, cancel",
  description:
    "Answers about Syclops: who it is for, field seats vs the referral page, GPS vs CRM vs gym software, data, and how to cancel.",
  path: "/faq",
  keywords: [
    "Syclops FAQ",
    "field tracking vs CRM",
    "GPS field tracking India",
  ],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers without a person attached."
        body="If it is not here, it is in Guides, or write to our team."
        scene="blog"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
      <Section>
        <FaqList items={faqs} />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides", label: "Guides", body: "Step-by-step setup." },
            { href: "/pricing", label: "Pricing", body: "Seats, not quotes." },
            { href: "/security", label: "Security", body: "GPS, DPDP, and RBAC." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
