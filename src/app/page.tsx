import Link from "next/link";
import { IndustryMorph } from "@/components/industry-morph";
import { LoopDiagram } from "@/components/loop-diagram";
import { CtaBand } from "@/components/page-hero";
import { SvgScene } from "@/components/svg-scene";
import { integrations, roles } from "@/lib/site";
import { industries } from "@/lib/industries";

const leaks = [
  { from: "Referrals in WhatsApp", to: "No status" },
  { from: "Field updates on calls", to: "No proof" },
  { from: "Members in Excel", to: "Stale tomorrow" },
  { from: "Renewals in billing", to: "No field task" },
];

const products = [
  {
    href: "/product/field",
    title: "Field",
    body: "Geo check-in, visit photos, routes, daily reports, TADA. Evidence, not surveillance.",
  },
  {
    href: "/product/referrals",
    title: "Referrals",
    body: "Partners, members, alumni, KOLs. One referrer object from intro to payout.",
  },
  {
    href: "/product/subscriptions",
    title: "Subscriptions",
    body: "Plans, trials, renewals, failed payments. Churn becomes a visit, not an email.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute -right-10 top-6 hidden w-72 opacity-80 lg:block">
          <SvgScene kind="loop" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Field · Referrals · Subscriptions
          </p>
          <h1 className="display mt-5 max-w-3xl text-pretty text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]">
            See the visit.
            <br />
            Trace the referral.
            <br />
            Keep the subscription.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Syclops is for gyms, campuses, clinics, sales teams, fintech and
            medtech — anyone who grows through field staff and referred
            customers on a plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
            >
              Start for free
            </Link>
            <a
              href="#loop"
              className="rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet"
            >
              Watch the loop
            </a>
          </div>
          <div className="mt-14">
            <IndustryMorph />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            The broken loop
          </p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Four tools. One leak.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {leaks.map((item) => (
              <article
                key={item.from}
                className="rounded-2xl border border-line bg-paper p-5"
              >
                <p className="text-sm font-medium">{item.from}</p>
                <p className="mt-2 text-sm text-leak">→ {item.to}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="loop" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            The loop
          </p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Visit → Referral → Subscription → Revenue
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Not a hospital funnel. A cycle. When a plan lapses, the field team
            goes back out.
          </p>
          <div className="mt-12">
            <LoopDiagram />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Three products, one system
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {products.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-line bg-paper p-6 hover:border-ink/30"
              >
                <h3 className="display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
                <p className="mt-6 text-sm font-medium text-iris">Explore →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Roles
          </p>
          <h2 className="display mt-3 text-3xl font-semibold tracking-tight">
            One platform for the people who move revenue.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="rounded-3xl border border-line bg-cream p-6"
              >
                <h3 className="text-lg font-medium">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{role.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Industries
          </p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            Same loop. Different nouns.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Link
                key={item.id}
                href={`/industries/${item.id}`}
                className="rounded-2xl border border-line bg-paper p-5 hover:border-ink/30"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-muted">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-medium">{item.label}</h3>
                <p className="mt-2 text-sm text-muted">
                  {item.visit} · {item.referrer} · {item.plan}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Mobile
          </p>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
                Field day, partner refer, member plan.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Three phones, one loop. Staff log the visit. Partners send the
                person. The plan stays visible without a follow-up call.
              </p>
              <Link
                href="/product/mobile"
                className="mt-6 inline-flex text-sm font-medium text-iris"
              >
                See the app →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Visit", "Refer", "Plan"].map((label, index) => (
                <div
                  key={label}
                  className="rounded-[1.6rem] border border-line bg-cream p-3"
                >
                  <div className="mx-auto mb-3 h-2 w-10 rounded-full bg-line" />
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                    {label}
                  </p>
                  <div className="mt-3 space-y-2">
                    <div className="h-16 rounded-xl bg-quiet" />
                    <div className="h-8 rounded-lg bg-quiet/80" />
                    <div
                      className={`h-8 rounded-lg ${index === 1 ? "bg-iris/20" : "bg-quiet"}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
                Integrations
              </p>
              <h2 className="display mt-3 text-3xl font-semibold tracking-tight">
                Named, not “integration ready.”
              </h2>
            </div>
            <Link href="/integrations" className="text-sm font-medium text-iris">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-line bg-paper p-5"
              >
                <h3 className="font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            Still comparing?
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/compare/whatsapp-excel"
              className="rounded-full border border-line px-4 py-2 text-sm hover:bg-quiet"
            >
              vs WhatsApp + Excel
            </Link>
            <Link
              href="/compare/gps-trackers"
              className="rounded-full border border-line px-4 py-2 text-sm hover:bg-quiet"
            >
              vs GPS-only
            </Link>
            <Link
              href="/compare/crm"
              className="rounded-full border border-line px-4 py-2 text-sm hover:bg-quiet"
            >
              vs CRM
            </Link>
          </div>
          <p className="mt-10 text-sm text-muted">
            Create a workspace today. Invite seats when you are ready. There is
            no implementation calendar.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
