import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/interior";
import { InterestForm } from "@/components/interest-form";
import { SvgScene } from "@/components/svg-scene";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Interested in using Syclops",
  description:
    "Tell Syclops your name, email, phone, industry, and business name. We will reach you about field visits, referrals, and subscriptions.",
  path: "/interested",
  keywords: ["Syclops interest", "Syclops demo", "field tracking software India"],
});

export default function InterestedPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Interested", path: "/interested" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Interested
          </p>
          <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tell us you want to use Syclops.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            Name, email, phone, industry, and business name. We use this to
            reach you about the field app, referrals, and plans.
          </p>
          <ul className="mt-6 max-w-xl space-y-2 text-sm leading-6 text-muted">
            <li>Gyms, campuses, clinics, sales teams, fintech, and medtech.</li>
            <li>The same loop: visit, referral, subscription.</li>
            <li>
              Ready to go yourself?{" "}
              <Link href="/start" className="text-iris">
                Create a workspace
              </Link>
              .
            </li>
          </ul>
          <div className="mt-10 max-w-sm">
            <SvgScene kind="start" />
          </div>
        </div>
        <InterestForm />
      </section>
    </>
  );
}
