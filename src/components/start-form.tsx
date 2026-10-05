"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { industries } from "@/lib/industries";

export function StartForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-quiet p-8">
        <p className="display text-2xl font-semibold">Workspace created.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Open the dashboard with the email you used. Invite field seats from
          Settings → Team. No one will call you.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream"
        >
          Go to log in
        </Link>
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
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Workspace name
        <input
          required
          name="workspace"
          placeholder="Acme Gyms"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        Industry
        <select
          name="industry"
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
          defaultValue="gyms"
        >
          {industries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        Password
        <input
          required
          type="password"
          name="password"
          minLength={8}
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-iris px-5 py-3 text-sm font-medium text-cream hover:bg-iris-dark"
      >
        Create workspace
      </button>
      <p className="text-xs text-muted">
        Free for 14 days. Add a card only when you invite paid field seats.
      </p>
    </form>
  );
}
