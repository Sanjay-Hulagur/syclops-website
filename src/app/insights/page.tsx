import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { InsightsBoard } from "@/components/insights-board";
import { InsightsLogin } from "@/app/insights/login-form";
import { INSIGHTS_COOKIE, insightsReady, insightsSessionValid } from "@/lib/insights-auth";
import { loadInsights, rangeFromParam } from "@/lib/insights-data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Site insights",
  robots: { index: false, follow: false },
};

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  if (!insightsReady()) notFound();

  const jar = await cookies();
  if (!insightsSessionValid(jar.get(INSIGHTS_COOKIE)?.value)) {
    return (
      <div className="px-5 py-16">
        <InsightsLogin />
      </div>
    );
  }

  const params = await searchParams;
  const range = rangeFromParam(params.range);
  const report = await loadInsights(range.id);
  return <InsightsBoard report={report} />;
}
