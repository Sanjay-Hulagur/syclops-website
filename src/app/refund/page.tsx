import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Refund" };

export default function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refunds"
        body="Cancel in Settings → Billing. Credits apply automatically."
        scene="legal"
        cta={false}
      />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm leading-7 text-muted">
          Annual prepay is credited pro-rata if you cancel within 14 days of the
          first workspace and have not added paid seats. Monthly seats billed in
          arrears are not refunded for unused days. There is no billing desk.
        </p>
      </article>
    </>
  );
}
