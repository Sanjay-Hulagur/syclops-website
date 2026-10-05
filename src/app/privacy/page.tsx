import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        body="Your workspace data stays in your tenant. You control retention and exports from Settings."
        scene="legal"
        cta={false}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        <div className="space-y-4 text-sm leading-7 text-muted">
          <p>
            Syclops processes organization, staff, referrer, and subscriber data
            to run field visits, referral status, and subscription billing. We
            do not sell this data.
          </p>
          <h2 className="display text-xl font-semibold text-ink">Location</h2>
          <p>
            Location is collected for check-in, routes, and TADA while staff are
            on a working day. Retention is a setting. Access and deletion run
            from Settings → Data.
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
            configuration.
          </p>
        </div>
      </article>
    </>
  );
}
