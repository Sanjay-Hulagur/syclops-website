import type { Metadata } from "next";
import { FaqList, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/guides";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "FAQ — seats, GPS, CRM, hosting, cancel",
  description:
    "Self-serve answers for Syclops: who it is for, field seats vs partner portal, GPS vs CRM vs gym software, offline use, India hosting, and how to cancel.",
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
        body="If it is not here, it is in Guides or in Settings after you create a workspace."
        scene="blog"
      />
      <Section>
        <FaqList items={faqs} />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides", label: "Guides", body: "Hour-by-hour setup." },
            { href: "/pricing", label: "Pricing", body: "Seats, not quotes." },
            { href: "/security", label: "Security", body: "GPS and DPDP." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
