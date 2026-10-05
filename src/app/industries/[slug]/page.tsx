import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryMorph } from "@/components/industry-morph";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, Related, Section } from "@/components/interior";
import { getIndustry, industries, type IndustryId } from "@/lib/industries";
import { industryPages } from "@/lib/industry-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.label,
    description: industry.headline,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const extra = industryPages[industry.id];

  return (
    <>
      <PageHero
        eyebrow={industry.eyebrow}
        title={industry.headline}
        body={industry.body}
        scene="industry"
      />
      <Section eyebrow="The three objects">
        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-line bg-cream p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Field</p>
            <p className="mt-2 font-medium">{industry.visit}</p>
            <p className="mt-2 text-sm text-muted">{industry.staff}</p>
          </article>
          <article className="rounded-2xl border border-line bg-cream p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">
              Referrer
            </p>
            <p className="mt-2 font-medium">{industry.referrer}</p>
          </article>
          <article className="rounded-2xl border border-line bg-cream p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">Plan</p>
            <p className="mt-2 font-medium">{industry.plan}</p>
          </article>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          Pain: {industry.pain} Outcome: {industry.outcome}
        </p>
      </Section>
      <Section eyebrow="A typical day" title="Same loop as every other industry.">
        <Steps items={extra.day} />
      </Section>
      <Section eyebrow="You configure">
        <Checklist items={extra.configure} />
      </Section>
      <Section eyebrow="The loop in this industry">
        <IndustryMorph initial={industry.id as IndustryId} />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList items={extra.faqs} />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/start", label: "Start", body: `Create a ${industry.label.toLowerCase()} workspace.` },
            { href: "/product", label: "Product", body: "Field, referrals, subscriptions." },
            { href: "/guides", label: "Guides", body: "Go live the same day." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
