import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/signup-form";
import { getBillingConfig } from "@/lib/billing";
import { pageSeo } from "@/lib/seo";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Start your free trial",
  description:
    "Create a Syclops workspace with your email address and business name. 14 days free, no credit card and no sales call. We email you a link to set your password.",
  path: "/start",
  keywords: ["Syclops free trial", "create workspace", "referral tracking software trial"],
});

export default async function StartPage() {
  const billing = await getBillingConfig();
  const days = billing.trial.days;

  return (
    <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 pt-6 sm:px-5 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-x-14 lg:gap-y-8 lg:pt-16">
      <div>
        <h1 className="display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Start your {days}-day free trial
        </h1>
        <p className="mt-2 hidden max-w-xl text-base leading-7 text-muted sm:block">
          Create your workspace with an email address and your business name.
        </p>
      </div>

      <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <SignupForm location="start" trialDays={days} readUrl />
      </div>

      <div className="max-w-xl">
        <h2 className="text-base font-semibold">What happens next</h2>
        <ol className="mt-3 space-y-3 text-sm leading-6 text-muted">
          <li className="flex gap-3">
            <span className="display font-semibold text-ink">1</span>
            <span>
              We email you a link to set your admin password. It usually arrives
              within a minute.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="display font-semibold text-ink">2</span>
            <span>Set your password and sign in to the admin console.</span>
          </li>
          <li className="flex gap-3">
            <span className="display font-semibold text-ink">3</span>
            <span>
              Add the people who refer to you, invite your field team, and record
              your first referral or visit.
            </span>
          </li>
        </ol>
        <p className="mt-6 text-sm leading-6 text-muted">{billing.trial.terms}</p>
        <p className="mt-4 text-sm leading-6 text-muted">
          Compare plans on the{" "}
          <Link href="/pricing" className="font-medium text-ink underline underline-offset-2">
            pricing page
          </Link>
          . Questions first? Email{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="font-medium text-ink underline underline-offset-2"
          >
            {supportEmail}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
