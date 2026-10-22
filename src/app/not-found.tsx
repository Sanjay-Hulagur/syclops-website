import type { Metadata } from "next";
import Link from "next/link";
import { SvgScene } from "@/components/svg-scene";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 text-center">
      <SvgScene kind="missing" />
      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-iris">404</p>
      <h1 className="display mt-4 text-4xl font-semibold">This page is off the loop.</h1>
      <p className="mt-4 text-sm text-muted">
        Try{" "}
        <Link href="/product" className="text-iris">
          product
        </Link>
        ,{" "}
        <Link href="/guides" className="text-iris">
          guides
        </Link>
        , or home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/start"
          className="inline-flex rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
        >
          Start free trial
        </Link>
        <Link
          href="/"
          className="inline-flex rounded-full border border-line px-5 py-2.5 text-sm"
        >
          Back to syclops.in
        </Link>
      </div>
      <p className="mt-3 text-xs text-muted">No card. No sales call.</p>
    </div>
  );
}
