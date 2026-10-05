import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Related, Section } from "@/components/interior";
import { faqs } from "@/lib/guides";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Self-serve answers for Syclops — seats, GPS, CRM, cancel, hosting.",
};

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
