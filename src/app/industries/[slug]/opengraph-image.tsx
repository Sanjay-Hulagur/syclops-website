import { getIndustry, industries } from "@/lib/industries";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops industry";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (slug === "gyms") {
    return ogImage({
      eyebrow: "Gyms",
      title: "Turn gym referrals into paying, renewing members.",
      kicker:
        "Track member referrals, trainer visits, and renewals. Keep your gym software.",
    });
  }
  if (slug === "education") {
    return ogImage({
      eyebrow: "Education",
      title: "Turn student enquiries into admissions and collected fees.",
      kicker:
        "Counselor visits, referrals, and fee follow-ups. Keep your academic ERP.",
    });
  }
  if (slug === "healthcare") {
    return ogImage({
      eyebrow: "Healthcare",
      title: "Turn doctor referrals into measurable hospital growth.",
      kicker: "Referral doctors, PRO visits, and patient referrals. Keep your HIS.",
    });
  }
  if (slug === "sales") {
    return ogImage({
      eyebrow: "Sales",
      title: "Turn field visits and partner referrals into revenue.",
      kicker: "Field visits, partner leads, and renewals. Keep your CRM.",
    });
  }
  if (slug === "fintech") {
    return ogImage({
      eyebrow: "Fintech",
      title: "Turn agent visits into policies that keep paying.",
      kicker: "Agent visits, DSA referrals, and premium follow-ups. Keep your core.",
    });
  }
  if (slug === "medtech") {
    return ogImage({
      eyebrow: "Medtech",
      title: "Turn KOL visits into device contracts that stay in service.",
      kicker: "Department visits, referrals, and service plans. Keep your ERP.",
    });
  }
  return ogImage({
    eyebrow: industry?.label ?? "Industry",
    title: industry?.headline ?? "Syclops",
    kicker: industry?.body,
  });
}
