import type { Metadata } from "next";
import Link from "next/link";
import { SvgScene } from "@/components/svg-scene";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <div className="mx-auto max-w-xs">
        <SvgScene kind="loop" />
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-iris">404</p>
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
          href="/"
          className="inline-flex rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream"
        >
          Back to syclops.in
        </Link>
        <Link
          href="/faq"
          className="inline-flex rounded-full border border-line px-5 py-2.5 text-sm"
        >
          FAQ
        </Link>
      </div>
    </div>
  );
}
