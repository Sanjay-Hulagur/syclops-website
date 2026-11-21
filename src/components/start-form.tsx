"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { track, trackWorkspaceConversion } from "@/lib/analytics";
import { startFormIndustries } from "@/lib/industries";

const ctaLocations = new Set(["hero", "product", "pricing", "final", "mobile"]);

export const START_CREATED_PATH = "/start/created";
const START_CREATED_KEY = "syclops-start-created";

function WorkspaceCreatedMessage() {
  return (
    <div className="rounded-3xl border border-line bg-quiet p-8">
      <p className="display text-2xl font-semibold">Thank you.</p>
      <p className="mt-3 text-sm leading-6 text-muted">
        Your workspace is ready. We emailed you a link to set your admin
        password. After you set it, you can sign in and start using Syclops.
      </p>
    </div>
  );
}

export function WorkspaceCreatedPanel() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(START_CREATED_KEY) === "1") {
      setAllowed(true);
      return;
    }
    router.replace("/start");
  }, [router]);

  if (!allowed) return null;

  return <WorkspaceCreatedMessage />;
}

export function StartForm({
  trialDays,
  trialTerms,
  initialIndustry = "gyms",
  ctaLocation,
}: {
  trialDays: number;
  trialTerms: string;
  initialIndustry?: string;
  ctaLocation?: string;
}) {
  const router = useRouter();
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [industry, setIndustry] = useState(
    startFormIndustries.some((item) => item.id === initialIndustry)
      ? initialIndustry
      : "gyms",
  );
  const [otherIndustry, setOtherIndustry] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "");
    const detail = otherIndustry.trim();
    const industryValue =
      industry === "others"
        ? detail
          ? `others: ${detail}`.slice(0, 50)
          : "others"
        : industry;
    setSaving(true);
    setError("");
    let created = false;

    try {
      const response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          workspace: data.get("workspace"),
          industry: industryValue,
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!response.ok) {
        setError(payload?.error || "Could not save that request. Try again.");
        track("form_error", { form_name: "start", industry });
        return;
      }
      track("sign_up", {
        method: "workspace",
        form_name: "start",
        industry,
      });
      if (industry === "education") {
        track("education_trial_signup", {
          form_name: "start",
          cta_location: ctaLocations.has(ctaLocation ?? "") ? ctaLocation : undefined,
        });
      }
      if (industry === "healthcare") {
        track("healthcare_trial_signup", {
          form_name: "start",
          cta_location: ctaLocations.has(ctaLocation ?? "") ? ctaLocation : undefined,
        });
      }
      if (industry === "sales") {
        track("sales_trial_signup", {
          form_name: "start",
          cta_location: ctaLocations.has(ctaLocation ?? "") ? ctaLocation : undefined,
        });
      }
      if (industry === "fintech") {
        track("fintech_trial_signup", {
          form_name: "start",
          cta_location: ctaLocations.has(ctaLocation ?? "") ? ctaLocation : undefined,
        });
      }
      if (industry === "medtech") {
        track("medtech_trial_signup", {
          form_name: "start",
          cta_location: ctaLocations.has(ctaLocation ?? "") ? ctaLocation : undefined,
        });
      }
      trackWorkspaceConversion({ email, industry });
      created = true;
      sessionStorage.setItem(START_CREATED_KEY, "1");
      setSent(true);
      router.replace(START_CREATED_PATH);
    } catch {
      setError("Could not save that request. Try again.");
      track("form_error", { form_name: "start", industry });
    } finally {
      if (!created) setSaving(false);
    }
  }

  if (sent) {
    return <WorkspaceCreatedMessage />;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      <label className="grid gap-1.5 text-sm">
        Work email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Workspace name
        <input
          required
          name="workspace"
          maxLength={200}
          placeholder="Acme Gyms"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Industry
        <select
          name="industry"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
        >
          {startFormIndustries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {industry === "others" ? (
        <label className="grid gap-1.5 text-sm">
          Your industry
          <input
            name="otherIndustry"
            maxLength={42}
            value={otherIndustry}
            onChange={(event) => setOtherIndustry(event.target.value)}
            placeholder="Optional"
            className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
          />
        </label>
      ) : null}
      {error ? (
        <p className="text-sm text-leak" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={saving}
        className="rounded-full bg-iris px-5 py-3 text-sm font-medium text-cream hover:bg-iris-dark disabled:opacity-60"
      >
        {saving ? "Creating your workspace…" : "Create workspace"}
      </button>
      <p className="text-xs leading-5 text-muted">
        Free for {trialDays} days. {trialTerms}
      </p>
    </form>
  );
}
