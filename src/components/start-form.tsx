"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { startFormIndustries } from "@/lib/industries";

const ctaLocations = new Set(["hero", "product", "pricing", "final", "mobile"]);

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
    const detail = otherIndustry.trim();
    const industryValue =
      industry === "others"
        ? detail
          ? `others: ${detail}`.slice(0, 50)
          : "others"
        : industry;
    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
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
      setSent(true);
    } catch {
      setError("Could not save that request. Try again.");
      track("form_error", { form_name: "start", industry });
    } finally {
      setSaving(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-quiet p-8">
        <p className="display text-2xl font-semibold">Request saved.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          We stored your work email, workspace name, and industry. No one will
          call you.
        </p>
      </div>
    );
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
        {saving ? "Saving…" : "Create workspace"}
      </button>
      <p className="text-xs leading-5 text-muted">
        Free for {trialDays} days. {trialTerms}
      </p>
    </form>
  );
}
