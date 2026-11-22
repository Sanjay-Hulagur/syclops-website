import type { Metadata } from "next";
import Link from "next/link";
import { pageSeo } from "@/lib/seo";
import { ADMIN_SIGN_IN_URL, FIELD_APP_URL } from "@/lib/signup";
import { androidApp, supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Log in",
    description:
      "Owners and managers sign in to the Syclops admin console. Field staff use the Android app or app.syclops.in.",
    path: "/login",
  }),
  robots: { index: false, follow: false },
};

const primary =
  "flex h-12 w-full items-center justify-center rounded-full bg-iris-dark px-5 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const secondary =
  "flex h-12 w-full items-center justify-center rounded-full border border-line bg-paper px-5 text-base font-medium text-ink transition hover:border-ink";

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-5 sm:pt-14">
      <h1 className="display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        Log in to Syclops
      </h1>
      <p className="mt-2 text-base leading-7 text-muted">
        Pick the one that fits you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-line bg-cream p-5">
          <h2 className="text-lg font-semibold">Owners and managers</h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">
            Set up your workspace, add the people who refer to you, invite your
            team and see every referral.
          </p>
          <a href={ADMIN_SIGN_IN_URL} className={`${primary} mt-5`}>
            Log in to the admin console
          </a>
        </div>

        <div className="flex flex-col rounded-2xl border border-line bg-cream p-5">
          <h2 className="text-lg font-semibold">Field staff</h2>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">
            Log visits and referrals with the login your manager gave you.
          </p>
          <div className="mt-5 grid gap-3">
            <a href={FIELD_APP_URL} className={secondary}>
              Open the field app
            </a>
            <a href={androidApp.href} download={androidApp.filename} className={secondary}>
              Download the Android app
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-2 text-sm leading-6 text-muted">
        <p>
          Forgot your password? Email{" "}
          <a
            href={`mailto:${supportEmail}?subject=${encodeURIComponent("Reset my Syclops password")}`}
            className="font-medium text-ink underline underline-offset-2"
          >
            {supportEmail}
          </a>{" "}
          from the address you signed up with, and we’ll reset it.
        </p>
        <p>
          New to Syclops?{" "}
          <Link href="/start?cta=login" className="font-medium text-ink underline underline-offset-2">
            Start free trial
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
