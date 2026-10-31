import Link from "next/link";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import {
  FintechAnalytics,
  FintechFaq,
  FintechLink,
  FintechStickyCta,
  fintechFocus,
} from "@/components/fintech/client";
import {
  AnalyticsSample,
  HeroBoard,
  PortalPhone,
  PremiumList,
  PremiumRecord,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/fintech/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems = [
  {
    title: "Agent beats",
    body: "Agents visit homes and branches, but managers cannot easily see which patches were covered and which were skipped.",
  },
  {
    title: "Customer and DSA introductions",
    body: "Family and DSA referrals arrive on calls and WhatsApp. The person who sent the customer is often gone by the time a policy or plan is created.",
  },
  {
    title: "Issued policies and SIPs",
    body: "The core system knows a policy or loan exists. The field team cannot see whether that record still knows who opened it.",
  },
  {
    title: "Lapsed premiums",
    body: "Accounts can see a missed debit. The agent who owns that customer often finds out on a call, after the relationship has gone quiet.",
  },
];

const journey = [
  {
    title: "Agent visit",
    body: "An agent checks in at a home or branch. The visit has an owner, notes, and a date.",
  },
  {
    title: "Customer enquiry",
    body: "The conversation stays on that account, so the next person does not rebuild it from a call report.",
  },
  {
    title: "Customer or DSA referral",
    body: "The person who made the introduction stays attached as the plan moves forward.",
  },
  {
    title: "Policy or plan",
    body: "Issued means a plan exists in Syclops, with a status the team can see.",
  },
  {
    title: "Premium due",
    body: "The plan shows the amount, the next date, and whether it is paid, failed, or due soon.",
  },
  {
    title: "Follow-up",
    body: "After the retry schedule you set, a lapse can become a task for the agent who owns that customer.",
  },
];

const audiences = [
  {
    title: "Insurance teams",
    problem:
      "Home visits, family introductions, and premium dates usually sit in three different places.",
    items: [
      "Agent home visits",
      "Family referrals",
      "Policy status",
      "Premium due dates",
      "Lapse follow-ups",
    ],
  },
  {
    title: "NBFC and DSA networks",
    problem:
      "A DSA introduction is easy to lose once the plan sits in the core, and a missed debit may never return to the branch that owns it.",
    items: [
      "Branch beats",
      "DSA referrals",
      "Customer introductions",
      "EMI or loan plan visibility",
      "Missed-debit follow-ups",
    ],
  },
  {
    title: "Wealth and SIP teams",
    problem:
      "A family referral and a failed SIP debit are rarely on the same record as the last client visit.",
    items: [
      "Client visits",
      "Family referrals",
      "SIP plans",
      "Failed debit visibility",
      "Advisor follow-ups",
    ],
  },
];

const coreItems = [
  "Policy admin or loan origination",
  "Underwriting and the KYC of record",
  "Premium and EMI accounting",
  "Regulatory reporting",
  "Existing core workflows",
];

const syclopsItems = [
  "Agent field visits",
  "Branch and territory coverage",
  "Customer and DSA referrals",
  "Referral tracking",
  "Field follow-ups",
  "Plan visibility and supported subscription workflows",
];

const proofs = [
  {
    title: "See which homes and branches were covered",
    body: "A visit list shows check-ins, planned stops, and patches that have gone quiet.",
    frame: <VisitHistory />,
  },
  {
    title: "Check in from the agent’s phone",
    body: "GPS, notes, and an optional photo stay on the visit, with the follow-up named.",
    frame: <VisitRecord />,
  },
  {
    title: "Let customers and DSAs refer without an app",
    body: "A link or QR opens in the browser. The sender sees status. They are not a field seat.",
    frame: <PortalPhone />,
  },
  {
    title: "Keep the referrer on the plan",
    body: "Family or DSA origin stays attached from the introduction to the premium.",
    frame: <ReferralDesk />,
  },
  {
    title: "Show a due or failed premium to the field team",
    body: "Paid, due soon, and failed stay on the plan, with a follow-up when you configure one.",
    frame: <PremiumList />,
  },
  {
    title: "Read the loop, not a vanity chart",
    body: "On Growth, analytics groups visits, referrals, and plans by referrer and region.",
    frame: <AnalyticsSample />,
  },
];

function fintechFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Does Syclops replace our policy admin or loan system?",
      a: "No. Underwriting, the KYC of record, policy admin, loan origination, and regulatory reporting stay in the core you already run. Syclops is the field layer: agent visits, customer and DSA referrals, and whether the plan still pays.",
    },
    {
      q: "Can we manage multiple branches?",
      a: "Yes. Branches are regions in one workspace on Team and Growth. Agents check in on the patch they are covering. Multi-brand or multi-city is on Scale.",
    },
    {
      q: "Can agents check in at customer homes?",
      a: "Yes. Check-in records location. GPS runs on a working day between check-in and check-out, and a photo can be required. Mock locations are flagged. The record is the visit, not a live map of the evening.",
    },
    {
      q: "Can customers and DSAs refer without installing an app?",
      a: "Yes. They open a portal link or a QR code in the browser. They do not install the field app, and a referrer login is not billed as a field seat. The portal is included on Growth and Scale.",
    },
    {
      q: "Can we import an existing agent beat?",
      a: "Yes. Import a CSV of accounts — name, phone, email, and area. Last-visit can be empty. After import, check-ins and referrals attach to those rows.",
    },
    {
      q: "Can we track lapsed premiums and pending payments?",
      a: "On Growth, a plan shows the amount, the interval, and whether it is paid, failed, or due soon. After the retry schedule you set, a failed payment can become a follow-up for the agent who owns that customer. You can connect Razorpay or Stripe, or mark cash and UPI. Syclops does not replace core accounting, and it does not collect money unless a gateway is connected.",
    },
    {
      q: "Are customer and DSA accounts billed?",
      a: "No. Referrer logins are not billed as field seats. You pay for field seats and manager seats.",
    },
    {
      q: "Is this a legal collections system?",
      a: "No. Syclops covers enrollment, referral origin, and renewal follow-ups. It does not issue legal notices or replace a collections stack.",
    },
    {
      q: "How much does Syclops cost?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Referrer logins are not billed as field seats. Annual terms discount 15% at checkout. The full comparison is on the pricing page.`,
    },
    {
      q: "Is there a free trial?",
      a: `Yes. A new workspace can be used for ${trialDays} days without a credit card. When that period ends, access stops until a paid plan is applied. The trial is not unlimited free use.`,
    },
  ];
}

function FeatureList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-medium">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

function startHref(cta: "hero" | "pricing" | "final" | "mobile") {
  return `/start?industry=fintech&cta=${cta}`;
}

export function FintechLanding({ trialDays }: { trialDays: number }) {
  const faqs = fintechFaqs(trialDays);

  return (
    <>
      <FintechAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Fintech", path: "/industries/fintech" },
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              For insurance · NBFC · wealth teams
            </p>
            <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn agent visits into policies that keep paying.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Track doorstep check-ins, customer and DSA referrals, issued policies,
              and lapsed premiums in one connected system. Keep your core policy or
              loan system.
            </p>
            <div id="fintech-hero-cta" className="mt-8 flex flex-wrap gap-3">
              <FintechLink
                href={startHref("hero")}
                event="fintech_hero_trial_click"
                params={{ cta_location: "hero" }}
                className={`${primary} ${fintechFocus}`}
              >
                Start your free trial
              </FintechLink>
              <FintechLink
                href="#how-it-works"
                event="fintech_demo_click"
                params={{ cta_location: "hero" }}
                className={`${secondary} ${fintechFocus}`}
              >
                See how it works
              </FintechLink>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
              <li>{trialDays} days free</li>
              <li>No credit card required</li>
              <li>No sales call</li>
              <li>Core system stays</li>
            </ul>
          </div>
          <HeroBoard />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="fintech-problem">
        <h2 id="fintech-problem" className="display max-w-3xl text-3xl font-semibold tracking-tight">
          Premiums get lost between the visit, the introduction, and the core.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <article key={problem.title} className="rounded-3xl border border-line bg-cream p-6">
              <h3 className="text-lg font-medium">{problem.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{problem.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-7">
          Syclops connects these activities so every visit, referral, plan, and
          follow-up has a clear status and owner.
        </p>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="fintech-visits"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Agent field tracking
            </p>
            <h2 id="fintech-visits" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know where your agents are working.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Plan home and branch visits, track check-ins, capture notes, and see
              which accounts have not been visited recently.
            </p>
            <FeatureList
              items={[
                {
                  title: "Planned visits",
                  body: "The day is a beat with last-visit dates, so a skipped home or branch shows up as a gap.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in. GPS runs on a working day between check-in and check-out.",
                },
                {
                  title: "Visit history",
                  body: "Duration, notes, and an optional photo — including a KYC photo — stay on the account.",
                },
                {
                  title: "Notes and follow-ups",
                  body: "A visit can name the next action, including a premium follow-up after your retry schedule.",
                },
                {
                  title: "Branch and territory coverage",
                  body: "Branches are regions. Agents check in on the patch they are covering.",
                },
                {
                  title: "TADA where agents travel",
                  body: "Mileage is the path they walked. A manager approves it against your rate card.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Field check-in is on Team.{" "}
              <Link href="/product/field" className={textLink}>
                Field tracking
              </Link>
              {" · "}
              <Link href="/tada-software" className={textLink}>
                TADA
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <VisitRecord />
            <VisitHistory />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-referrals">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Customer and DSA referrals
            </p>
            <h2 id="fintech-referrals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know who introduced every customer.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect family and DSA introductions to the customer, the issued plan,
              and whether that plan still pays.
            </p>
            <FeatureList
              items={[
                {
                  title: "Customer or DSA referrer",
                  body: "The sender is a named referrer, not a source field that disappears after issuance.",
                },
                {
                  title: "Customer details",
                  body: "Name and phone or email stay on the referral. The same phone or email cannot be referred twice into the same plan.",
                },
                {
                  title: "Referral source",
                  body: "Family, DSA, or another sender you enable. Team includes the referral workspace. The browser portal is on Growth.",
                },
                {
                  title: "Status through paying",
                  body: "Status moves from sent to converted when a plan is created, then to paying when the first invoice clears.",
                },
                {
                  title: "Plan association",
                  body: "The policy, SIP, or EMI plan keeps who referred it when a premium is paid, due, or failed.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/referral-portal" className={textLink}>
                Portal guide
              </Link>
            </p>
          </div>
          <div className="order-2 grid gap-3 md:order-1">
            <PortalPhone />
            <ReferralDesk />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-premiums">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Premium and plan follow-ups
            </p>
            <h2 id="fintech-premiums" className="display mt-3 text-3xl font-semibold tracking-tight">
              Make a lapsed premium visible to the agent.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect policies, SIPs, and EMI plans with follow-up workflows, so the
              right person knows which customer needs attention.
            </p>
            <FeatureList
              items={[
                {
                  title: "Customer and plan",
                  body: "The plan is the policy, SIP, or EMI. The referrer stays on it.",
                },
                {
                  title: "Premium due date",
                  body: "Due soon is a status on the plan, with the amount and the next date.",
                },
                {
                  title: "Payment status",
                  body: "Paid, failed, and due soon stay on the record after you connect Razorpay or Stripe, or when staff mark cash or UPI.",
                },
                {
                  title: "Pending amount",
                  body: "The plan amount is what the follow-up is about. This is not a replacement for core accounts.",
                },
                {
                  title: "Follow-up status",
                  body: "After the retry schedule you set, a failed payment can become a task for the agent who owns that customer.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Subscription plans and dunning are on Growth. Syclops does not replace
              your core, and it is not a legal-notice collections system.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <PremiumRecord />
            <PremiumList />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-models">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="fintech-models" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            One connected workflow. Different distribution models.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-3xl border border-line bg-cream p-6">
                <h3 className="text-lg font-medium">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{audience.problem}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {audience.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-journey">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="fintech-journey" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            From the first home visit to the next premium.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps share one record. Syclops is the connection between them,
            not another place to retype the same customer.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {journey.map((step, index) => (
              <li key={step.title} className="relative">
                {index < journey.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 hidden h-px w-[calc(100%+1rem)] bg-line lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative">
                  <p className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-cream text-xs font-medium tabular-nums text-iris">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-base font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-core">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="fintech-core" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your core system. Add the missing field layer.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">Policy or loan core</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {coreItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-iris bg-cream p-6">
              <h3 className="text-lg font-medium">Syclops</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {syclopsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            You do not need to replace the software that already administers policies
            or loans. Syclops works alongside your existing systems.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-proof">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            Illustrative sample workspace
          </p>
          <h2 id="fintech-proof" className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            The same records your agents and referrers use.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These layouts use sample fintech data so you can see a visit, a referral,
            a premium, and loop health. They are not a customer result.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {proofs.map((proof) => (
              <figure key={proof.title}>
                {proof.frame}
                <figcaption className="mt-3">
                  <p className="font-medium">{proof.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{proof.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fintech-pricing"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="fintech-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="fintech-pricing-title" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Start with agent tracking. Add referrals and premium follow-ups as you grow.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month. Customer
            and DSA logins are not billed as field seats. The referrer portal and
            plan follow-ups are on Growth. {trialDays} days free · No credit card
            required.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {publicPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-6 ${
                  plan.featured ? "border-iris bg-cream" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-2xl font-semibold">{plan.name}</h3>
                  {plan.featured ? (
                    <p className="rounded-full bg-iris px-2.5 py-1 text-[11px] font-medium text-cream">
                      Recommended
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-3xl font-semibold tabular-nums">
                  {formatInr(plan.priceInr)}
                </p>
                <p className="mt-1 text-sm text-muted">{plan.cadence}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <FintechLink
                  href={startHref("pricing")}
                  event="fintech_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${fintechFocus} ${
                    plan.featured
                      ? "bg-iris text-cream hover:bg-iris-dark"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start your free trial
                </FintechLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <FintechLink
              href="/pricing"
              event="fintech_pricing_click"
              params={{ cta_location: "pricing", plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </FintechLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="fintech-faq" className="display text-3xl font-semibold tracking-tight">
            Questions distribution teams ask
          </h2>
          <div className="mt-8">
            <FintechFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="fintech-next">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="fintech-next" className="display text-2xl font-semibold tracking-tight">
            Read the product behind the loop
          </h2>
          <div className="mt-6">
            <Related
              items={[
                {
                  href: "/product/field",
                  label: "Field tracking",
                  body: "Agent check-in, routes, and TADA.",
                },
                {
                  href: "/blog/kol-dsa-referral-loops",
                  label: "DSA and KOL loops",
                  body: "The same record for a policy and a device contract.",
                },
                {
                  href: "/guides/import-beat-list",
                  label: "Import a beat list",
                  body: "CSV of accounts. Last-visit can be empty.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="fintech-final"
        title="Bring your beats, referrals, and premiums into one system."
        body="Create your workspace, invite your agents, and start tracking the customer from the visit to the next premium."
        actions={
          <div className="flex flex-col items-start gap-3">
            <FintechLink
              href={startHref("final")}
              event="fintech_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${fintechFocus}`}
            >
              Start your free trial
            </FintechLink>
            <FintechLink
              href="/interested?industry=fintech"
              event="fintech_contact_click"
              params={{ cta_location: "final" }}
              className={`text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline ${fintechFocus}`}
            >
              Talk to our team
            </FintechLink>
            <p className="text-sm text-cream/70">
              {trialDays} days free · No credit card · No implementation call required
            </p>
          </div>
        }
      />
      <FintechStickyCta label="Start your free trial" />
    </>
  );
}
