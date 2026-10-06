import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Terms of use",
  description:
    "Creating a Syclops workspace accepts these terms. Seats may not be shared. Website metrics are product UI, not a promise of your results.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        body="Creating a workspace accepts these terms. Seats may not be shared."
        scene="legal"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>
            Access is granted to the organization that created the workspace.
            You are responsible for the accuracy of field logs, referrals, and
            subscription records entered by your users. Field seats and manager
            seats may not be shared across people.
          </p>
          <h2 className="display text-xl font-semibold text-ink">
            The product
          </h2>
          <p>
            Syclops provides field tracking, referral management, and
            subscription tooling as a multi-tenant cloud service. Features
            depend on the plan you select in{" "}
            <Link href="/pricing" className="text-iris">
              pricing
            </Link>
            . Guides and in-app Settings are the support surface; there is no
            implementation manager.
          </p>
          <h2 className="display text-xl font-semibold text-ink">
            Metrics on this site
          </h2>
          <p>
            Numbers in product UI mockups are illustrations, not a promise of
            your results. Customer stories on the site are patterns of how teams
            run the loop, not a logo wall of named accounts.
          </p>
          <h2 className="display text-xl font-semibold text-ink">
            Billing and cancellation
          </h2>
          <p>
            Billing, cancellation, and data export are in Settings. Credits
            follow the{" "}
            <Link href="/refund" className="text-iris">
              refund policy
            </Link>
            . There is no billing desk to email.
          </p>
        </div>
      </article>
    </>
  );
}
