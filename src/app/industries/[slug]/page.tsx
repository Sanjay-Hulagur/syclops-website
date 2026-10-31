import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EducationLanding } from "@/components/education/landing";
import { FintechLanding } from "@/components/fintech/landing";
import { GymLanding } from "@/components/gym/landing";
import { SalesLanding } from "@/components/sales/landing";
import { HealthcareLanding } from "@/components/healthcare/landing";
import { MedtechLanding } from "@/components/medtech/landing";
import { getBillingConfig } from "@/lib/billing";
import { getIndustry, industries, type IndustryId } from "@/lib/industries";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const industryMeta: Record<
  IndustryId,
  { title: string; keywords: string[] }
> = {
  gyms: {
    title: "Gym referral software for referrals, trainer visits, and renewals",
    keywords: [
      "gym referral software",
      "gym membership referral",
      "member get member",
      "trainer field tracking",
      "gym subscription follow-up",
    ],
  },
  education: {
    title: "Turn student enquiries into admissions and collected fees",
    keywords: [
      "education field tracking",
      "student referral software",
      "counselor visit tracking",
      "alumni referral software",
      "school admission follow-up",
      "coaching institute admissions",
    ],
  },
  healthcare: {
    title: "Turn doctor referrals into measurable hospital growth",
    keywords: [
      "healthcare referral management software",
      "hospital referral software",
      "doctor referral tracking",
      "PRO visit tracking",
      "diagnostic centre referral software",
    ],
  },
  sales: {
    title: "Turn field visits and partner referrals into revenue",
    keywords: [
      "field sales tracking India",
      "channel partner portal",
      "beat visit software",
      "partner referral software",
      "field visit tracking",
      "recurring contract follow-up",
    ],
  },
  fintech: {
    title: "Turn agent visits into policies that keep paying",
    keywords: [
      "insurance field tracking",
      "NBFC agent visits",
      "DSA referral software",
      "policy referral software",
      "premium lapse follow-up",
    ],
  },
  medtech: {
    title: "Turn KOL visits into device contracts that stay in service",
    keywords: [
      "medtech field tracking",
      "KOL visit software",
      "device contract follow-up",
      "hospital referral portal",
      "diagnostics field tracking",
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
  if (industry.id === "gyms") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Gym referral software for Indian gyms and studio chains. Track member referrals, trainer visits, and membership renewals without replacing your gym management software. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/gyms",
      keywords: meta.keywords,
    });
  }
  if (industry.id === "education") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Syclops for schools, colleges, and coaching institutes. Track counselor visits, parent and alumni referrals, admissions, and pending fee installments without replacing your academic ERP. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/education",
      keywords: meta.keywords,
    });
  }
  if (industry.id === "healthcare") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Referral management and field operations for hospitals and diagnostic centres. Track referral doctors, PRO visits, and patient referrals without replacing your HIS. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/healthcare",
      keywords: meta.keywords,
    });
  }
  if (industry.id === "sales") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Plan sales visits, manage channel partners, track referred leads, and follow opportunities through conversion and renewal. Syclops complements your CRM. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/sales",
      keywords: meta.keywords,
    });
  }
  if (industry.id === "fintech") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Syclops for insurance, NBFC, and wealth teams. Track agent visits, customer and DSA referrals, and lapsed premiums without replacing your core policy or loan system. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/fintech",
      keywords: meta.keywords,
    });
  }
  if (industry.id === "medtech") {
    const billing = await getBillingConfig();
    return pageSeo({
      title: meta.title,
      description: `Syclops for device and diagnostics teams. Track KOL visits, hospital referrals, evaluations, and service-plan follow-ups without replacing your ERP or the hospital HIS. ${billing.trial.days}-day free trial, no credit card.`,
      path: "/industries/medtech",
      keywords: meta.keywords,
    });
  }
  return pageSeo({
    title: meta.title,
    description: `${industry.headline} ${industry.body}`,
    path: `/industries/${industry.id}`,
    keywords: meta.keywords,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  if (industry.id === "gyms") {
    const billing = await getBillingConfig();
    return <GymLanding trialDays={billing.trial.days} />;
  }
  if (industry.id === "education") {
    const billing = await getBillingConfig();
    return <EducationLanding trialDays={billing.trial.days} />;
  }
  if (industry.id === "healthcare") {
    const billing = await getBillingConfig();
    return <HealthcareLanding trialDays={billing.trial.days} />;
  }
  if (industry.id === "sales") {
    const billing = await getBillingConfig();
    return <SalesLanding trialDays={billing.trial.days} />;
  }
  if (industry.id === "fintech") {
    const billing = await getBillingConfig();
    return <FintechLanding trialDays={billing.trial.days} />;
  }
  if (industry.id === "medtech") {
    const billing = await getBillingConfig();
    return <MedtechLanding trialDays={billing.trial.days} />;
  }

  notFound();
}
