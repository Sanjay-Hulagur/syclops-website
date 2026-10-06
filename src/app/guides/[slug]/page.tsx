import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { FaqList, Prose, Related, Section } from "@/components/interior";
import { getGuide, guides } from "@/lib/guides";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageSeo({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    keywords: ["Syclops setup", "self-serve", guide.title],
  });
}

const guideProductLinks: Record<
  string,
  { href: string; label: string; body: string }[]
> = {
  "create-workspace": [
    { href: "/start", label: "Create a workspace", body: "The form this guide describes." },
    { href: "/industries", label: "Industries", body: "Nouns follow the industry you pick." },
  ],
  "invite-team": [
    { href: "/product/mobile", label: "Mobile app", body: "How field seats install." },
    { href: "/pricing", label: "Pricing", body: "What a field seat costs." },
  ],
  "field-day": [
    { href: "/product/field", label: "Field tracking", body: "Check-in, beat, checkout." },
    { href: "/tada-software", label: "TADA software", body: "Mileage from the path." },
  ],
  "referral-portal": [
    { href: "/product/referrals", label: "Referral management", body: "Portal, status, rewards." },
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "What the category covers.",
    },
  ],
  "plans-billing": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Plans, dunning, field tasks." },
    { href: "/integrations", label: "Integrations", body: "Razorpay, Stripe, WhatsApp, Maps." },
  ],
  reports: [
    { href: "/product/analytics", label: "Analytics", body: "Loop health and people." },
    { href: "/product/field", label: "Field tracking", body: "The visits behind the report." },
  ],
  "import-beat-list": [
    { href: "/product/field", label: "Field tracking", body: "The beat those rows become." },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "Stop dual-running the sheet." },
  ],
  "qualification-window": [
    { href: "/product/referrals", label: "Referral management", body: "Rewards and duplicate guard." },
    { href: "/guides/referral-portal", label: "Referral portal guide", body: "Turn the link on first." },
  ],
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const productLinks = guideProductLinks[guide.slug] ?? [];
  const others = guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3 - productLinks.length)
    .map((item) => ({
      href: `/guides/${item.slug}`,
      label: item.title,
      body: item.summary,
    }));

  return (
    <>
      <PageHero
        eyebrow="Guide"
        title={guide.title}
        body={guide.summary}
        scene={guide.scene}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ]}
      />
      <Section eyebrow="Before you start">
        <Prose>
          {guide.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </Section>
      <Section eyebrow="Steps" title="Do this in the product. There is no specialist on the call.">
        <Steps items={guide.steps} />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList items={guide.faqs} />
      </Section>
      <Section eyebrow="Related">
        <Related items={[...productLinks, ...others]} />
      </Section>
      <CtaBand />
    </>
  );
}
