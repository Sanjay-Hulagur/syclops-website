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
          Sign in to the workspace you already created. Need the field app
          invite? See{" "}
          <Link href="/guides/invite-team" className="text-iris">
            invite seats
          </Link>
          .
        </p>
        <div className="mt-8">
          <Link
            href="/start"
            className="inline-flex rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
          >
            Start free trial
          </Link>
          <p className="mt-3 text-xs text-muted">No workspace yet. No card. No sales call.</p>
        </div>
        <div className="mt-10">
          <SvgScene kind="login" />
        </div>
      </div>
      <LoginForm />
    </section>
  );
}
