"use client";

import { useActionState } from "react";
import { loginInsights } from "@/app/insights/actions";

export function InsightsLogin() {
  const [state, action, pending] = useActionState(loginInsights, null);

  return (
    <form
      action={action}
      data-analytics-ignore
      className="mx-auto grid max-w-md gap-4 rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-iris">Syclops</p>
        <h1 className="display mt-2 text-3xl font-semibold">Site insights</h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          Page views, sources, clicks, location, and errors for syclops.in.
        </p>
      </div>
      <label className="grid gap-1.5 text-sm">
        Password
        <input
          required
          type="password"
          name="password"
          autoComplete="current-password"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      {state?.error ? (
        <p className="text-sm text-leak">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-iris px-5 py-3 text-sm font-medium text-cream hover:bg-iris-dark disabled:opacity-60"
      >
        {pending ? "Checking…" : "Open insights"}
      </button>
    </form>
  );
}
