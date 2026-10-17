export type PaidPlanInterval = "monthly" | "quarterly" | "yearly";

export type BillingConfig = {
  trial: {
    days: number;
    terms: string;
    planName: string;
  };
  plans: Array<{
    planId: string;
    name: string;
    interval: PaidPlanInterval;
    priceAmount: number | null;
    currency: string;
    description: string | null;
  }>;
};

const DEFAULT_TERMS =
  "Workspaces may use Syclops without a card for 14 days from the day the workspace is created. When that period ends, access stops until a paid plan is applied. Referrer logins are not billed as field seats. A change to the trial length applies to new workspaces only.";

export const fallbackBillingConfig: BillingConfig = {
  trial: {
    days: 14,
    terms: DEFAULT_TERMS,
    planName: "Trial",
  },
  plans: [],
};

function isBillingConfig(value: unknown): value is BillingConfig {
  if (!value || typeof value !== "object") return false;
  const trial = (value as BillingConfig).trial;
  return (
    !!trial &&
    typeof trial.days === "number" &&
    trial.days > 0 &&
    typeof trial.terms === "string" &&
    trial.terms.trim().length > 0
  );
}

export async function getBillingConfig(): Promise<BillingConfig> {
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  if (!base) return fallbackBillingConfig;

  try {
    const response = await fetch(`${base}/api/v1/public/billing-config`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return fallbackBillingConfig;
    const payload = (await response.json()) as { data?: unknown };
    return isBillingConfig(payload.data) ? payload.data : fallbackBillingConfig;
  } catch {
    return fallbackBillingConfig;
  }
}
