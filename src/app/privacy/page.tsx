import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Privacy policy — GPS, referrals, and workspace data",
  description:
    "How Syclops processes organization, staff, referrer, and subscriber data for field visits, referral status, and subscription billing. Location retention is a setting.",
  path: "/privacy",
  keywords: ["Syclops privacy", "DPDP field GPS", "employee location data"],
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        body="Your workspace data stays in your tenant. You control retention and exports from Settings."
        scene="legal"
        cta={false}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>
            Syclops processes organization, staff, referrer, and subscriber data
            to run field visits, referral status, and subscription billing. We
            do not sell this data. The product is multi-tenant: GPS, plans, and
            billing do not leak across organizations.
          </p>
          <h2 className="display text-xl font-semibold text-ink">
            What we process
          </h2>
          <p>
            Workspace identity, role-based accounts, visit proof (geo, optional
            photo, notes, routes), referrer portal activity, plan and invoice
            metadata, TADA sheets, and the keys you paste for WhatsApp,
            Razorpay, Stripe, or Maps. Purpose is operating the loop you turned
            on — not advertising.
          </p>
          <h2 className="display text-xl font-semibold text-ink">Location</h2>
          <p>
            Location is collected for check-in, routes, and TADA while staff are
            on a working day, between check-in and check-out. Partners never see
            GPS. Field seats see their own day unless you grant a manager role.
            Retention is a setting. Access and deletion run from Settings →
            Data, without filing a ticket.
          </p>
          <h2 className="display text-xl font-semibold text-ink">
            India and DPDP
          </h2>
          <p>
            India hosting is available on Scale. You pick the region in Settings
            → Security after you upgrade. Purpose-limited GPS and export
            controls are there so you can answer a data-subject request from the
            product.
          </p>
          <h2 className="display text-xl font-semibold text-ink">Cookies</h2>
          <p>
            This marketing site uses only essential cookies. Product permissions
            are listed in-app when a device first signs in.
          </p>
          <h2 className="display text-xl font-semibold text-ink">Processors</h2>
          <p>
            Payments, maps, and WhatsApp run through the providers you connect.
            Their processing is under your keys, inside your tenant’s
            configuration. See{" "}
            <Link href="/integrations" className="text-iris">
              integrations
            </Link>{" "}
            and{" "}
            <Link href="/security" className="text-iris">
              security
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
