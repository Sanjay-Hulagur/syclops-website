import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { SvgScene } from "@/components/svg-scene";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Log in",
    description: "Sign in to your Syclops workspace.",
    path: "/login",
  }),
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          Account
        </p>
        <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Log in to your workspace.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          No new workspace?{" "}
          <Link href="/start" className="text-iris">
            Start for free
          </Link>
          . Need the field app invite? See{" "}
          <Link href="/guides/invite-team" className="text-iris">
            invite seats
          </Link>
          .
        </p>
        <div className="mt-10 max-w-sm">
          <SvgScene kind="security" />
        </div>
      </div>
      <LoginForm />
    </section>
  );
}
