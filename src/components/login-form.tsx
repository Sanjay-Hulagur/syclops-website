"use client";

import { useState, type FormEvent } from "react";

export function LoginForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-quiet p-8">
        <p className="display text-2xl font-semibold">Check your inbox.</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          If that email has a workspace, a sign-in link is on the way. Magic
          links expire in 20 minutes.
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
          className="rounded-xl border border-line bg-paper px-3 py-2.5 outline-none focus:ring-iris"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-iris px-5 py-3 text-sm font-medium text-cream hover:bg-iris-dark"
      >
        Email me a link
      </button>
    </form>
  );
}
