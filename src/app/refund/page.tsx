import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Refund policy",
  description:
    "Cancel Syclops in Settings → Billing. Annual prepay is credited pro-rata if you cancel within 14 days of the first workspace and have not added paid seats.",
  path: "/refund",
});

export default function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refunds"
        body="Cancel in Settings → Billing. Credits apply automatically."
        scene="legal"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Refund", path: "/refund" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 py-16">
        <p className="text-sm leading-7 text-muted">
          Annual prepay is credited pro-rata if you cancel within 14 days of the
          first workspace and have not added paid seats. Monthly seats billed in
          arrears are not refunded for unused days. There is no billing desk.
        </p>
        <h2 className="display text-xl font-semibold text-ink">Trials</h2>
        <p className="text-sm leading-7 text-muted">
          Workspaces can start without a card for 14 days. Referrer portal
          logins are never billed as field seats. See{" "}
          <Link href="/pricing" className="text-iris">
            pricing
          </Link>{" "}
          for Team, Growth, and Scale.
        </p>
        <h2 className="display text-xl font-semibold text-ink">How to cancel</h2>
        <p className="text-sm leading-7 text-muted">
          Settings → Billing. The same screen shows seats, annual discount, and
          remaining credit.{" "}
          <Link href="/faq" className="text-iris">
            FAQ
          </Link>{" "}
          covers hosting region and data export after you leave.
        </p>
      </article>
    </>
  );
}
