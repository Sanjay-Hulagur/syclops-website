import type { Metadata } from "next";
import { StartForm } from "@/components/start-form";
import { StartLayout } from "@/components/start-layout";
import { getBillingConfig } from "@/lib/billing";
import { startFormIndustries } from "@/lib/industries";
import { pageSeo } from "@/lib/seo";

const ctaLocations = new Set(["hero", "product", "pricing", "final", "mobile"]);

type Props = {
  searchParams: Promise<{ industry?: string; cta?: string }>;
};

export const metadata: Metadata = pageSeo({
  title: "Create a Syclops workspace",
  description:
    "Start Syclops for free: pick an industry, invite field seats later, share a referral portal, and connect billing in Settings. No sales call.",
  path: "/start",
  keywords: ["Syclops signup", "create workspace", "self-serve field tracking"],
});

export default async function StartPage({ searchParams }: Props) {
  const params = await searchParams;
  const industry =
    params.industry && startFormIndustries.some((item) => item.id === params.industry)
      ? params.industry
      : "gyms";
  const ctaLocation =
    params.cta && ctaLocations.has(params.cta) ? params.cta : undefined;
  const billing = await getBillingConfig();
  return (
    <StartLayout
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Start", path: "/start" },
      ]}
      panel={
        <StartForm
          trialDays={billing.trial.days}
          trialTerms={billing.trial.terms}
          initialIndustry={industry}
          ctaLocation={ctaLocation}
        />
      }
    />
  );
}
