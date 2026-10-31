import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/interior";
import { StartForm } from "@/components/start-form";
import { SvgScene } from "@/components/svg-scene";
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
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Start", path: "/start" },
        ]}
      />
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          Self-serve
        </p>
        <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Create a workspace in a few minutes.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          Pick an industry. Invite field staff later. Partners get a portal
          link. Plans and billing stay in Settings. There is no sales call and
          no implementation manager.
        </p>
        <ul className="mt-6 max-w-xl space-y-2 text-sm leading-6 text-muted">
          <li>Field tracking and TADA on Team.</li>
          <li>Partner and member portal on Growth, with subscriptions.</li>
          <li>
            Follow the{" "}
            <Link href="/guides/create-workspace" className="text-iris">
              create-workspace guide
            </Link>{" "}
            or{" "}
            <Link href="/pricing" className="text-iris">
              compare plans
            </Link>
            .
          </li>
        </ul>
        <div className="mt-10 max-w-sm">
          <SvgScene kind="start" />
        </div>
      </div>
      <StartForm
        trialDays={billing.trial.days}
        trialTerms={billing.trial.terms}
        initialIndustry={industry}
        ctaLocation={ctaLocation}
      />
    </section>
    </>
  );
}
