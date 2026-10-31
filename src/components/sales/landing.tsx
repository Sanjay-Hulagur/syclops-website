import Image from "next/image";
import Link from "next/link";
import heroArt from "../../../Images/Field Sales Partnership Dashboard.png";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import {
  SalesAnalytics,
  SalesFaq,
  SalesLink,
  SalesStickyCta,
  salesFocus,
} from "@/components/sales/client";
import {
  AccountRecord,
  BeatList,
  CheckInPhone,
  LeadStatus,
  LoopHealth,
  PartnerPortal,
  PlanRecord,
  RenewalList,
} from "@/components/sales/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems = [
  {
    title: "Field visits without clear accountability",
    body: "Sales representatives visit dealers, customers and accounts, but managers need visibility into planned visits, actual check-ins and follow-up activity.",
  },
  {
    title: "Partner leads get lost",
    body: "Channel partners send leads through calls and WhatsApp. The original referral source and lead status can become difficult to track.",
  },
  {
    title: "CRM stops at the deal stage",
    body: "Traditional CRMs often track opportunities, but field visits, partner activity and recurring contract follow-ups may remain disconnected.",
  },
  {
    title: "Renewals need action",
    body: "Contracts approaching renewal need visibility, ownership and follow-up rather than remaining forgotten in a CRM stage.",
  },
];

const workflow = [
  {
    title: "Field visit",
    body: "A representative checks in at a dealer or account. The visit has an owner, notes, and a date.",
  },
  {
    title: "Partner referral",
    body: "A channel partner submits a lead in the portal. The person who sent it stays named.",
  },
  {
    title: "Lead qualification",
    body: "Status moves from sent to accepted while the team works the opportunity.",
  },
  {
    title: "Won customer",
    body: "Converted means a plan exists, so the win is not a stage that disappears after close.",
  },
  {
    title: "Recurring plan",
    body: "The plan keeps the referrer, the amount, and whether it is paid, failed, or due soon.",
  },
  {
    title: "Renewal follow-up",
    body: "A due or failed plan stays visible to the person who owns that account.",
  },
];

const audiences = [
  {
    title: "B2B field sales teams",
    body: "Coverage of dealers and accounts is the job. The beat, the visit, and the next follow-up stay on the account.",
    items: [
      "Sales representative visits",
      "Dealer and account coverage",
      "Visit history",
      "Territory management",
      "Follow-up activity",
    ],
  },
  {
    title: "Channel-led businesses",
    body: "Partners send leads without a field seat. Attribution and status stay on the lead they submitted.",
    items: [
      "Channel partner network",
      "Partner-submitted leads",
      "Referral attribution",
      "Lead status visibility",
      "Partner performance on Growth",
    ],
  },
  {
    title: "Agencies and service businesses",
    body: "Account visits and referred customers sit on the same recurring plan, with the renewal date in view.",
    items: [
      "Account visits",
      "Referred customers",
      "Recurring service contracts",
      "Renewal follow-ups",
      "Customer relationship visibility",
    ],
  },
  {
    title: "Multi-location sales organisations",
    body: "Territories are regions in one workspace. Managers see visits and, on Growth, results by region.",
    items: [
      "Multiple territories",
      "Field representatives",
      "Manager visibility",
      "Visit performance",
      "Reporting by region on Growth",
    ],
  },
];

const crmItems = [
  "Deal pipeline",
  "Opportunity tracking",
  "Sales notes",
  "Customer records",
];

const syclopsItems = [
  "Planned field visits",
  "GPS visit verification",
  "Account coverage",
  "Channel partner referrals",
  "Partner attribution",
  "Recurring plan visibility",
  "Field follow-up workflows",
];

const proofs = [
  {
    title: "See the day’s beat",
    body: "Planned stops and completed check-ins sit on one list, including accounts that have not been visited.",
    frame: <BeatList />,
  },
  {
    title: "Check in from the phone",
    body: "GPS, notes, and an optional photo stay on the visit. Location runs for the working day only.",
    frame: <CheckInPhone />,
  },
  {
    title: "Open the account",
    body: "The dealer or customer keeps last visit, owner, and the partner who introduced them.",
    frame: <AccountRecord />,
  },
  {
    title: "Let partners submit a lead",
    body: "A portal link in the browser. Partners see their own leads. They are not billed as field seats.",
    frame: <PartnerPortal />,
  },
  {
    title: "Keep status on the referral",
    body: "Sent, accepted, converted, and paying stay on the lead. Converted means a plan was created.",
    frame: <LeadStatus />,
  },
  {
    title: "See the renewal before it is forgotten",
    body: "The plan shows the referrer, the due date, and paid, failed, or due soon where billing is connected.",
    frame: <PlanRecord />,
  },
  {
    title: "Read visits, leads, and plans together",
    body: "On Growth, analytics groups activity by referrer and region. The counts below are a sample layout.",
    frame: <LoopHealth />,
  },
];

function salesFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "We already use a CRM. Why do we need Syclops?",
      a: "Keep the CRM for the deal pipeline, opportunity stages, sales notes, and customer records. Syclops is the work that usually sits outside that pipeline: planned field visits, GPS check-in, account coverage, channel partner referrals, and recurring plan follow-up. There is no CRM sync to turn on. The two systems sit side by side.",
    },
    {
      q: "Can we track our field representatives using GPS?",
      a: "Yes. Check-in records location. GPS runs on a working day between check-in and check-out, a photo can be required, and mock locations are flagged. Managers can see location during that working day. Retention is a setting. It is visit evidence, not a live map of the evening.",
    },
    {
      q: "Can we plan daily beat visits?",
      a: "Yes. The beat is the accounts in a territory, with last-visit dates. Representatives see planned stops, log a visit or a skip, and managers see which accounts have not been covered. You can import a beat list from CSV.",
    },
    {
      q: "Can channel partners submit leads?",
      a: "Yes, on Growth and Scale. Partners open a portal link in the browser, submit a lead, and see status for what they sent. They do not install the field app, and a partner login is not billed as a field seat. Team includes the referral workspace. The portal itself is on Growth.",
    },
    {
      q: "Can we track which partner referred a customer?",
      a: "Yes. The referrer stays on the lead and on the plan created from it. Your team sees who sent the account. The partner sees their own submissions, not other partners, GPS, or your rate card.",
    },
    {
      q: "Can we track leads through conversion?",
      a: "Yes. Status moves from sent to accepted, to converted when a plan is created, and to paying when the first invoice clears. Churned is a status too. The same phone or email cannot be referred twice into the same plan.",
    },
    {
      q: "Can we manage recurring contracts and renewals?",
      a: "On Growth, a plan shows the account, the referrer, the amount, the next date, and whether it is paid, failed, or due soon after you connect Razorpay or Stripe, or when staff mark cash or UPI. Syclops does not replace your accounting system, and it does not recover a renewal by itself. After the retry schedule you set, a failed payment can become a follow-up for the person who owns that account.",
    },
    {
      q: "Can managers approve TADA?",
      a: "Yes. Mileage is the path between check-in and check-out. You set a rate card and a daily cap in Settings. Approval is a queue in the workspace. TADA is included on Team.",
    },
    {
      q: "Is Syclops an FMCG distributor management system?",
      a: "No. It does not book secondary orders and it does not manage distributor inventory or stock. It is for field visits, partner referrals, and recurring plans.",
    },
    {
      q: "Can we manage multiple territories?",
      a: "Yes. Territories are regions in one workspace on Team and Growth. Representatives check in on the territory they cover. Multi-brand or multi-city is on Scale. Analytics by region is on Growth.",
    },
    {
      q: "How much does Syclops cost?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Partner and referrer logins are not billed as field seats. Annual terms discount 15% at checkout. The full comparison is on the pricing page.`,
    },
    {
      q: "Is there a free trial?",
      a: `Yes. A new workspace can be used for ${trialDays} days without a credit card. When that period ends, access stops until a paid plan is applied. You set it up in the browser. There is no sales call to start.`,
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

function startHref(cta: "hero" | "product" | "pricing" | "final" | "mobile") {
  return `/start?industry=sales&cta=${cta}`;
}

export function SalesLanding({ trialDays }: { trialDays: number }) {
  const faqs = salesFaqs(trialDays);

  return (
    <>
      <SalesAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Sales", path: "/industries/sales" },
        ]}
      />

      <header className="grid items-center gap-6 overflow-hidden border-b border-line px-5 py-10 sm:py-12 lg:grid-cols-[max(1.25rem,calc((100%-72rem)/2+1.25rem))_minmax(0,32rem)_minmax(0,1fr)] lg:gap-0 lg:px-0 lg:py-2">
        <div className="hidden lg:block" aria-hidden="true" />
        <div className="lg:py-8 lg:pr-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            <span className="whitespace-nowrap">For field sales</span>
            {" · "}
            <span className="whitespace-nowrap">Channel partners</span>
            {" · "}
            <span className="whitespace-nowrap">Sales & marketing teams</span>
          </p>
          <h1 className="display mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Turn field visits and partner referrals into revenue.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            Plan sales visits, manage channel partners, track referred leads and
            follow every opportunity through to conversion and renewal — in one
            connected platform.
          </p>
          <div id="sales-hero-cta" className="mt-8 flex flex-wrap gap-3">
            <SalesLink
              href={startHref("hero")}
              event="sales_hero_trial_click"
              params={{ cta_location: "hero" }}
              className={`${primary} ${salesFocus}`}
            >
              Start your free trial
            </SalesLink>
            <SalesLink
              href="#how-it-works"
              event="sales_demo_click"
              params={{ cta_location: "hero" }}
              className={`${secondary} ${salesFocus}`}
            >
              See how it works
            </SalesLink>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
            <li>{trialDays} days free</li>
            <li>No credit card required</li>
            <li>No sales call</li>
            <li>Self-serve setup</li>
          </ul>
        </div>
        <Image
          src={heroArt}
          alt="Field sales desk with today's partner visits, referred leads, revenue and renewals, and a phone check-in at Acme Industries."
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-auto w-full"
        />
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="sales-problem">
        <h2 id="sales-problem" className="display max-w-3xl text-3xl font-semibold tracking-tight">
          Sales activity is happening everywhere. Your visibility shouldn&apos;t be scattered.
        </h2>
        <ol className="mt-8 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-cream">
          {problems.map((problem, index) => (
            <li key={problem.title} className="grid gap-2 px-6 py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
              <p className="text-xs font-medium tabular-nums text-iris">0{index + 1}</p>
              <div>
                <h3 className="text-lg font-medium">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{problem.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-base leading-7">
          Syclops connects the field visit, the partner introduction, the opportunity
          and the recurring customer relationship.
        </p>
      </section>

      <section
        id="how-it-works"
        data-sales-section="field"
        className="scroll-mt-24 border-t border-line bg-cream"
        aria-labelledby="sales-field"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Field sales and beat tracking
            </p>
            <h2 id="sales-field" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know which accounts your team is visiting.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Plan field routes, track customer visits, capture activity and identify
              accounts that have not received attention.
            </p>
            <FeatureList
              items={[
                {
                  title: "Planned visits",
                  body: "The day is a beat with last-visit dates, so a skipped dealer shows up as a gap.",
                },
                {
                  title: "Daily beat",
                  body: "Representatives see the accounts on their route, log a visit, or mark a skip.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in. GPS runs on a working day between check-in and check-out.",
                },
                {
                  title: "Account visit history",
                  body: "Duration, notes, and an optional photo stay on the dealer or customer.",
                },
                {
                  title: "Visit notes and follow-up",
                  body: "The visit can name the next action. It does not create that action by itself.",
                },
                {
                  title: "TADA and travel tracking",
                  body: "Mileage is the path walked. A manager approves it against the rate card you set.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Field check-in and TADA are on Team.{" "}
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
            <BeatList />
            <CheckInPhone />
          </div>
        </div>
      </section>

      <section
        id="partners"
        data-sales-section="partners"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="sales-partners"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Channel partner referrals
            </p>
            <h2 id="sales-partners" className="display mt-3 text-3xl font-semibold tracking-tight">
              Give every partner lead a clear identity and status.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Let partners submit referred leads through a portal and track their
              progress through the sales process.
            </p>
            <FeatureList
              items={[
                {
                  title: "Partner portal",
                  body: "One link in the browser. Partners sign in with a phone or email. They are not billed as field seats.",
                },
                {
                  title: "Partner profile",
                  body: "The sender is a named referrer, not a source dropdown that disappears after the deal.",
                },
                {
                  title: "Lead submission",
                  body: "The partner submits the account they introduced. Team includes the referral workspace. The portal is on Growth.",
                },
                {
                  title: "Referrer attribution",
                  body: "The partner stays on the lead and on the plan created from it.",
                },
                {
                  title: "Lead status",
                  body: "Sent, accepted, converted, paying, and churned. The partner sees their own rows.",
                },
                {
                  title: "Won and converted",
                  body: "Converted when a plan is created. Paying when the first invoice clears.",
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
            <PartnerPortal />
            <LeadStatus />
          </div>
        </div>
      </section>

      <section
        id="renewals"
        data-sales-section="renewals"
        className="scroll-mt-24 border-t border-line bg-quiet"
        aria-labelledby="sales-renewals"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Recurring contracts and renewals
            </p>
            <h2 id="sales-renewals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Keep recurring customers from slipping through the cracks.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect referred customers and recurring plans with renewal visibility
              and the follow-up activity required to retain them.
            </p>
            <FeatureList
              items={[
                {
                  title: "Customer and account",
                  body: "The plan belongs to the dealer or customer the team already visits.",
                },
                {
                  title: "Linked referral source",
                  body: "The partner who opened the account stays on the plan when it renews or fails.",
                },
                {
                  title: "Plan or contract",
                  body: "A retainer is a plan: price, interval, and the rules you set. This is on Growth.",
                },
                {
                  title: "Renewal date",
                  body: "Due soon is a status on the plan, with the amount and the next date.",
                },
                {
                  title: "Payment status, where supported",
                  body: "Paid, failed, and due soon appear after you connect Razorpay or Stripe, or when staff mark cash or UPI.",
                },
                {
                  title: "Follow-up status",
                  body: "After the retry schedule you set, a failed payment can become a follow-up for the owner of that account. Syclops does not recover the renewal by itself.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Subscription plans and dunning are on Growth.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <PlanRecord />
            <RenewalList />
          </div>
        </div>
      </section>

      <section
        id="workflow"
        data-sales-section="workflow"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="sales-workflow"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-workflow" className="display max-w-3xl text-3xl font-semibold tracking-tight">
            From the first field visit to the next renewal.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps share one record. Syclops connects the visit, the partner,
            the opportunity, and the plan. It is not another place to store contacts.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {workflow.map((step, index) => (
              <li key={step.title} className="relative">
                {index < workflow.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 hidden h-px w-[calc(100%+1rem)] bg-line lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <p className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-cream text-xs font-medium tabular-nums text-iris">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-base font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <SalesLink
              href={startHref("product")}
              event="sales_hero_trial_click"
              params={{ cta_location: "product" }}
              className={`${primary} ${salesFocus}`}
            >
              Start your free trial
            </SalesLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="sales-audiences">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-audiences" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Built for businesses that grow through field relationships.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-3xl border border-line bg-cream p-6">
                <h3 className="text-lg font-medium">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{audience.body}</p>
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

      <section
        id="product-records"
        data-sales-section="records"
        className="border-t border-line"
        aria-labelledby="sales-records"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            Illustrative sample workspace
          </p>
          <h2 id="sales-records" className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            The records a sales workspace actually keeps.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These layouts use sample sales data so you can see a beat, a check-in,
            an account, a partner lead, a plan, and loop health. They are not a
            captured customer screen and not a verified result.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {proofs.map((proof) => (
              <figure key={proof.title} className="last:md:col-span-2 last:max-w-xl">
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

      <section className="border-t border-line" aria-labelledby="sales-crm">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-crm" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your CRM. Connect the work happening outside it.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            A pipeline still answers whether a named opportunity moved stage.
            Syclops answers whether the account was visited, who introduced it,
            and whether the plan still pays. There is no CRM integration to switch on.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">Traditional CRM</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {crmItems.map((item) => (
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
          <p className="mt-6 text-sm leading-6">
            <Link href="/compare/crm" className={textLink}>
              Compare Syclops with a CRM
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="sales-fit">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-fit" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            A clear fit, including what this is not.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-cream p-6">
              <h3 className="text-lg font-medium">Syclops is for</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Field visits to dealers, customers, and accounts</li>
                <li>Channel partners who submit referred leads</li>
                <li>Recurring contracts with a renewal date and an owner</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-line bg-paper p-6">
              <h3 className="text-lg font-medium">Syclops is not</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>An FMCG secondary-order booking system</li>
                <li>A distributor inventory or stock-management platform</li>
                <li>A replacement for your CRM, ERP, or accounting software</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        data-sales-section="visibility"
        className="border-t border-line"
        aria-labelledby="sales-visibility"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-visibility" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            See what your sales team and partners are actually contributing.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Managers can review planned and completed visits, territory coverage,
            account history, partner-submitted leads, conversion status, and plans
            that are due or failed. On Growth, the same activity can be grouped by
            referrer and region. The figures use sample labels.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Illustrative sample workspace
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <BeatList />
            <LeadStatus />
            <RenewalList />
            <LoopHealth />
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            <Link href="/product/analytics" className={textLink}>
              Analytics
            </Link>
            {" · "}
            <Link href="/product/field" className={textLink}>
              Field visits
            </Link>
          </p>
        </div>
      </section>

      <section
        id="sales-pricing"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="sales-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-pricing-title" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Priced per field seat. Partners are not a seat.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month. Referrer
            logins are not billed as field seats. Growth is the plan that adds the
            partner portal, subscription plans, and analytics by referrer and region.
            {" "}
            {trialDays} days free, without a credit card.
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
                      For this workflow
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
                <SalesLink
                  href={startHref("pricing")}
                  event="sales_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${salesFocus} ${
                    plan.featured
                      ? "bg-iris text-cream hover:bg-iris-dark"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start your free trial
                </SalesLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <SalesLink
              href="/pricing"
              event="sales_pricing_click"
              params={{ cta_location: "pricing", plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </SalesLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="sales-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="sales-faq" className="display text-3xl font-semibold tracking-tight">
            Questions sales teams ask
          </h2>
          <div className="mt-8">
            <SalesFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="sales-next">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="sales-next" className="display text-2xl font-semibold tracking-tight">
            Read the product behind the loop
          </h2>
          <div className="mt-6">
            <Related
              items={[
                {
                  href: "/blog/channel-partner-portal-not-crm-source-field",
                  label: "Portal vs CRM source field",
                  body: "Partners need status. A picklist is not a portal.",
                },
                {
                  href: "/start?industry=sales",
                  label: "Start",
                  body: "Create a sales workspace.",
                },
                {
                  href: "/compare/crm",
                  label: "vs CRM",
                  body: "Deals vs beat, referrer, and plan.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="sales-final"
        title="Connect your field team, partners and customers."
        body="Create your workspace, invite your field team and start tracking visits and referrals."
        actions={
          <div className="flex flex-col items-start gap-3">
            <SalesLink
              href={startHref("final")}
              event="sales_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${salesFocus}`}
            >
              Start your free trial
            </SalesLink>
            <SalesLink
              href="/interested?industry=sales"
              event="sales_contact_click"
              params={{ cta_location: "final" }}
              className={`text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline ${salesFocus}`}
            >
              Talk to our team
            </SalesLink>
            <p className="text-sm text-cream/70">
              {trialDays} days free · No credit card · No sales call
            </p>
          </div>
        }
      />
      <SalesStickyCta label="Start your free trial" />
    </>
  );
}
