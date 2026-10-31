"use client";

import { useEffect } from "react";
import { collectError } from "@/lib/collect";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error.digest) return;
    collectError({
      status: 500,
      kind: "render",
      message: error.message || "Page failed",
    });
  }, [error]);

  return (
    <div
      data-analytics-page="error"
      className="mx-auto max-w-xl px-5 py-24 text-center"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-leak">Error</p>
      <h1 className="display mt-4 text-4xl font-semibold">This page failed to load.</h1>
      <p className="mt-4 text-sm text-muted">
        The miss is recorded. You can try the page again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream"
      >
        Try again
      </button>
    </div>
  );
}
