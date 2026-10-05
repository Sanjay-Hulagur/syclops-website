import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/login-form";
import { SvgScene } from "@/components/svg-scene";

export const metadata: Metadata = {
  title: "Log in",
  description: "Sign in to your Syclops workspace.",
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
