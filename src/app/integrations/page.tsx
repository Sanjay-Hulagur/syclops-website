import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";
import { integrations } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Integrations — WhatsApp, Razorpay, Maps",
  description:
    "Syclops works with WhatsApp Business, Razorpay, Google Maps and hospital systems (HIS). Our team connects them with you during setup.",
  path: "/integrations",
  keywords: [
    "Razorpay gym software",
    "WhatsApp Business API field",
    "Google Maps field routes",
  ],
});

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="The tools you already use, connected for you."
        body="WhatsApp, Razorpay, Google Maps and hospital systems (HIS). Our team connects them with you during setup, so there are no keys to paste."
        scene="integrations"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Integrations", path: "/integrations" },
        ]}
      />
      <Section eyebrow="What they do" title="Tell us what you use. We connect it.">
        <Prose>
          <p>
            WhatsApp Business sends template messages, follow-up reminders and
            campaigns, and keeps replies in a shared inbox. Razorpay takes online
            payments for membership plans. Google Maps finds locations and routes
            for the field day. On Scale, we connect your hospital system (HIS) so
            admissions can be matched to referrals.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="How you connect">
        <Steps
          items={[
            { title: "Tell us what you use", body: "Email us the tools you want connected, or bring them up on your setup call." },
            { title: "We connect them", body: "Our team sets up each connection for your workspace." },
            { title: "Start using them", body: "Messages, payments and routes then work from the app and the web." },
          ]}
        />
      </Section>
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {integrations.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-line bg-cream p-6"
            >
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="mt-2 text-sm text-muted">{item.use}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "WhatsApp Business", body: "Templates, follow-up reminders, campaigns and a shared inbox for replies." },
            { title: "Razorpay", body: "Online payments for membership plans." },
            { title: "Google Maps", body: "Locations and routes for the field day." },
            { title: "Hospital system (HIS)", body: "Scale. Admissions come in from the hospital system and are matched to referrals." },
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can we connect these ourselves?", a: "Not yet. Our team connects each one with you during setup." },
            { q: "Can we use our own WhatsApp number?", a: "Ask us before you sign up, and we will tell you what is possible for your account." },
            { q: "On-prem?", a: "No. Syclops runs in the cloud, and each workspace has its own database." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/plans-billing", label: "Plans and payments guide", body: "Set up membership plans." },
            { href: "/security", label: "Security", body: "How each workspace is kept apart." },
            { href: "/start", label: "Start", body: "Create your workspace first." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
