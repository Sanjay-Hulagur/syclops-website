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
    keywords: ["Syclops setup", "setup guide", guide.title],
  });
}

const guideProductLinks: Record<
  string,
  { href: string; label: string; body: string }[]
> = {
  "create-workspace": [
    { href: "/start", label: "Create a workspace", body: "The form this guide describes." },
    { href: "/industries", label: "Industries", body: "How Syclops fits your kind of business." },
  ],
  "invite-team": [
    { href: "/product/mobile", label: "Mobile app", body: "How field staff install it." },
    { href: "/pricing", label: "Pricing", body: "What a field seat costs." },
  ],
  "field-day": [
    { href: "/product/field", label: "Field tracking", body: "Check-in, photos, and visit plans." },
    { href: "/tada-software", label: "TADA software", body: "TA/DA from the distance travelled." },
  ],
  "referral-portal": [
    { href: "/product/referrals", label: "Referral management", body: "Referrer login, status, and payouts." },
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "What the category covers.",
    },
  ],
  "plans-billing": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Plans, EMI, and payment status." },
    { href: "/integrations", label: "Integrations", body: "Razorpay, WhatsApp, Maps." },
  ],
  reports: [
    { href: "/product/analytics", label: "Analytics", body: "Coverage, people, and referrers." },
    { href: "/product/field", label: "Field tracking", body: "The visits behind the report." },
  ],
  "import-from-excel": [
    { href: "/product/field", label: "Field tracking", body: "What staff do after the upload." },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "Stop running the team from a sheet." },
  ],
  "referral-payouts": [
    { href: "/product/referrals", label: "Referral management", body: "Rewards, payouts, and the duplicate check." },
    { href: "/guides/referral-portal", label: "Referral page guide", body: "Set up the referral page first." },
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
      <Section eyebrow="Steps" title="What to do, in order.">
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
