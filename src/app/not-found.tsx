import Link from "next/link";
import { SvgScene } from "@/components/svg-scene";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <div className="mx-auto max-w-xs">
        <SvgScene kind="loop" />
      </div>
      <p className="text-xs uppercase tracking-[0.18em] text-iris">404</p>
      <h1 className="display mt-4 text-4xl font-semibold">This page is off the loop.</h1>
      <p className="mt-4 text-sm text-muted">Try the product overview, or go home.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream"
      >
        Back to syclops.in
      </Link>
    </div>
  );
}
