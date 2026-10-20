"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { startFormIndustries } from "@/lib/industries";

export function InterestForm() {
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [industry, setIndustry] = useState("gyms");
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
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          industry: industryValue,
          businessName: data.get("businessName"),
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!response.ok) {
        setError(payload?.error || "Could not save that. Try again.");
        track("form_error", { form_name: "interest", industry });
        return;
      }
      track("generate_lead", {
        form_name: "interest",
        industry,
        lead_source: "website",
      });
      setSent(true);
    } catch {
      setError("Could not save that. Try again.");
      track("form_error", { form_name: "interest", industry });
    } finally {
      setSaving(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-quiet p-8">
        <p className="display text-2xl font-semibold">Saved.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          We have your name, email, phone, industry, and business name. We will
          reach you about using Syclops.
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
        Name
        <input
          required
          name="name"
          autoComplete="name"
          maxLength={120}
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          maxLength={320}
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Phone
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          maxLength={32}
          placeholder="+91 98765 43210"
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
      <label className="grid gap-1.5 text-sm">
        Business name
        <input
          required
          name="businessName"
          autoComplete="organization"
          maxLength={200}
          placeholder="Acme Gyms"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
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
        {saving ? "Saving…" : "I'm interested"}
      </button>
      <p className="text-xs leading-5 text-muted">
        Used only to contact you about Syclops. See the{" "}
        <Link href="/privacy" className="text-iris">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
