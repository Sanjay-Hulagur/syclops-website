import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        body="Creating a workspace accepts these terms. Seats may not be shared."
        scene="legal"
        cta={false}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>
            Access is granted to the organization that created the workspace.
            You are responsible for the accuracy of field logs, referrals, and
            subscription records entered by your users.
          </p>
          <p>
            Metrics on this website are product UI, not a promise of your
            results. Billing, cancellation, and data export are in Settings.
          </p>
        </div>
      </article>
    </>
  );
}
