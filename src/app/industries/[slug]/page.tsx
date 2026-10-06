import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryMorph } from "@/components/industry-morph";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { getIndustry, industries, type IndustryId } from "@/lib/industries";
import { industryPages } from "@/lib/industry-pages";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const industryMeta: Record<
  IndustryId,
  { title: string; keywords: string[] }
> = {
  gyms: {
    title: "Gym referral software and membership field tracking",
    keywords: [
      "gym referral software",
      "gym membership software India",
      "member get member",
      "trainer field tracking",
    ],
  },
  education: {
    title: "Counselor visit tracking and alumni referral software",
    keywords: [
      "education field tracking",
      "alumni referral software",
      "campus counselor CRM",
      "semester fee plans",
    ],
  },
  healthcare: {
    title: "Clinic referral management and care plan field tracking",
    keywords: [
      "healthcare referral management software",
      "clinic referral software",
      "care plan management",
      "healthcare field tracking",
      "partner clinic portal",
    ],
  },
  sales: {
    title: "Field sales beat tracking and partner referral software",
    keywords: [
      "field sales tracking India",
      "channel partner portal",
      "beat visit software",
      "retainer CRM",
    ],
  },
  fintech: {
    title: "Insurance agent field tracking and policy referral software",
    keywords: [
      "insurance field tracking",
      "NBFC agent visits",
      "policy referral software",
      "premium lapse tasks",
    ],
  },
  medtech: {
    title: "Medtech KOL visit tracking and device contract software",
    keywords: [
      "medtech field tracking",
      "KOL visit software",
      "device contract management",
      "hospital referral portal",
    ],
  },
};

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const meta = industryMeta[industry.id];
  return pageSeo({
    title: meta.title,
    description: `${industry.headline} ${industry.body}`,
    path: `/industries/${industry.id}`,
    keywords: meta.keywords,
  });
}

function industryNext(id: IndustryId, label: string) {
  const start = {
    href: "/start",
    label: "Start",
    body: `Create a ${label.toLowerCase()} workspace.`,
  };
  if (id === "gyms") {
    return [
      {
        href: "/gym-referral-software",
        label: "Gym referral software",
        body: "Member-get-member: origin, rewards, trainer visits.",
      },
      {
        href: "/compare/gym-software",
        label: "vs gym management software",
        body: "Keep the floor ERP. Put origin on the membership.",
      },
      {
        href: "/blog/gym-referral-programme-without-replacing-erp",
        label: "Keep your gym ERP",
        body: "What stays on the floor, what moves to the loop.",
      },
    ];
  }
  if (id === "healthcare") {
    return [
      {
        href: "/blog/clinic-referral-portal-vs-whatsapp",
        label: "Clinic portal vs WhatsApp",
        body: "Status the partner can see without calling the desk.",
      },
      start,
      { href: "/product/referrals", label: "Referrals", body: "Portal, window, leakage." },
    ];
  }
  if (id === "education") {
    return [
      {
        href: "/blog/counselor-beat-unpaid-fee-installment",
        label: "Unpaid fees as a visit",
        body: "Counselor beat plus alumni origin on the fee plan.",
      },
      start,
      { href: "/product/field", label: "Field tracking", body: "Campus check-in and last-visit dates." },
    ];
  }
  if (id === "sales") {
    return [
      {
        href: "/blog/channel-partner-portal-not-crm-source-field",
        label: "Portal vs CRM source field",
        body: "Partners need status. A picklist is not a portal.",
      },
      start,
      { href: "/compare/crm", label: "vs CRM", body: "Deals vs beat, referrer, and plan." },
    ];
  }
  if (id === "fintech" || id === "medtech") {
    return [
      {
        href: "/blog/kol-dsa-referral-loops",
        label: "KOL and DSA loops",
        body: "Same record. Different nouns.",
      },
      start,
      { href: "/product", label: "Product", body: "Field, referrals, subscriptions." },
    ];
  }
  return [
    start,
    { href: "/product", label: "Product", body: "Field, referrals, subscriptions." },
    { href: "/guides", label: "Guides", body: "Go live the same day." },
  ];
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
      <Section eyebrow="Why this loop" title={`Syclops for ${industry.label.toLowerCase()}.`}>
        <Prose>
          <p>{extra.why}</p>
          <p>
            Pain: {industry.pain} Outcome: {industry.outcome}
          </p>
        </Prose>
      </Section>
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
      </Section>
      <Section eyebrow="What you run" title="Field, referrals, and the plan — named for this industry.">
        <FeatureGrid items={extra.jobs} />
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
        <Related items={industryNext(industry.id, industry.label)} />
      </Section>
      <CtaBand />
    </>
  );
}
