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
  PlanList,
  PlanRecord,
} from "@/components/sales/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris-dark px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-deep";
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
    body: "A channel partner submits a lead on your referral page. The referral keeps their name.",
  },
  {
    title: "Lead qualification",
    body: "The lead stays open while the team works the opportunity.",
  },
  {
    title: "Won customer",
    body: "Converted is a status on the referral, so the win does not disappear after close.",
  },
  {
    title: "Recurring plan",
    body: "The plan keeps the amount, the end date, and whether it is paid or has a payment due.",
  },
  {
    title: "Renewal follow-up",
    body: "A plan with a payment due stays visible, with its end date, to the person who sold it.",
  },
];

const audiences = [
  {
    title: "B2B field sales teams",
    body: "Coverage of dealers and accounts is the job. The visit plan, the visit, and the notes stay on the account.",
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
      "Referrals by partner",
    ],
  },
  {
    title: "Agencies and service businesses",
    body: "Account visits, referred customers, and recurring plans sit in one workspace, with each plan’s end date in view.",
    items: [
      "Account visits",
      "Referred customers",
      "Recurring service contracts",
      "Plan end dates and payments due",
      "Customer relationship visibility",
    ],
  },
  {
    title: "Multi-location sales organisations",
    body: "Territories are regions in one workspace. Managers see visits and results by region.",
    items: [
      "Multiple territories",
      "Field representatives",
      "Manager visibility",
      "Visit performance",
      "Reporting by region",
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
  "Field follow-ups",
];

const proofs = [
  {
    title: "See the day’s visits",
    body: "Planned stops and completed check-ins sit on one list, including accounts that have not been visited.",
    frame: <BeatList />,
  },
  {
    title: "Check in from the phone",
    body: "GPS, notes, and photos stay on the visit. Location is recorded only during the working day.",
    frame: <CheckInPhone />,
  },
  {
    title: "Open the account",
    body: "The dealer or customer keeps its visit history and the rep who owns it.",
    frame: <AccountRecord />,
  },
  {
    title: "Let partners submit a lead",
    body: "Your referral page opens in the browser. Partners see their own leads. They are not billed as field seats.",
    frame: <PartnerPortal />,
  },
  {
    title: "Keep status on the referral",
    body: "Each lead shows where it stands, from sent to converted, or why it was lost.",
    frame: <LeadStatus />,
  },
  {
    title: "See the renewal before it is forgotten",
    body: "The plan shows the end date, the amount, and whether a payment is due.",
    frame: <PlanRecord />,
  },
  {
    title: "Read visits, leads, and plans together",
    body: "Analytics show activity by person, referrer, and region. The counts below are a sample layout.",
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
      a: "Yes. Each visit is checked in with GPS and photos, and location is recorded only during the working day. Managers see each person’s visits and route for that day. It is visit evidence, not a live map of the evening.",
    },
    {
      q: "Can we plan daily beat visits?",
      a: "Yes. Reps get a visit plan for the week and a route for the day, and log each visit when they check in. Managers see which accounts nobody has visited. Reps and areas upload from an Excel template.",
    },
    {
      q: "Can channel partners submit leads?",
      a: "Yes, on Growth and Scale. Partners open your referral page in the browser, sign in with a one-time code sent to their email, submit a lead, and see status for what they sent. They do not install the field app, and a partner login is not billed as a field seat. Team includes the referral workspace. The referral page itself is on Growth.",
    },
    {
      q: "Can we track which partner referred a customer?",
      a: "Yes. The partner stays on the lead they sent, and your team sees who sent each account. The partner sees their own submissions, not other partners or GPS.",
    },
    {
      q: "Can we track leads through conversion?",
      a: "Yes. Each lead shows its status until it converts, or records why it was lost. Your referral page blocks a second open referral for the same mobile number.",
    },
    {
      q: "Can we manage recurring contracts and renewals?",
      a: "On Growth, a plan shows the customer, the amount, the end date, and whether it is paid or has a payment due. Payments can be recorded as cash, UPI, or EMI, or paid online through Razorpay, which our team connects with you. Syclops does not replace your accounting system, and it does not renew a contract by itself.",
    },
    {
      q: "How does TADA work?",
      a: "TA/DA is worked out from the distance travelled during the working day, using the allowance you set for each distance range. Reps see their daily and monthly totals in the app. TADA is included on Team.",
    },
    {
      q: "Is Syclops an FMCG distributor management system?",
      a: "No. It does not book secondary orders and it does not manage distributor inventory or stock. It is for field visits, partner referrals, and recurring plans.",
    },
    {
      q: "Can we manage multiple territories?",
      a: "Yes. Territories are regions in one workspace. Representatives check in on the territory they cover, and analytics can be filtered by region.",
    },
    {
      q: "Does the app use sales words?",
      a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say dealers and customers. The steps are the same.",
    },
    {
      q: "How much does Syclops cost?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Partner and referrer logins are not billed as field seats. The full comparison is on the pricing page.`,
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
            Plan sales visits, manage channel partners, track referred leads, and
            follow every opportunity through to conversion and a paying plan — in
            one place.
          </p>
          <div id="sales-hero-cta" className="mt-8 flex flex-wrap gap-3">
            <SalesLink
              href={startHref("hero")}
              event="sales_hero_trial_click"
              params={{ cta_location: "hero" }}
              className={`${primary} ${salesFocus}`}
            >
              Start free trial
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
            <li>Set up in the browser</li>
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
          Syclops puts the field visit, the partner introduction, the opportunity,
          and the recurring plan in one place.
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
                  body: "A visit plan for the week, and a list of accounts nobody has visited.",
                },
                {
                  title: "Daily route",
                  body: "Representatives see the day’s route on the phone and check in at each stop.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in, and only during the working day.",
                },
                {
                  title: "Account visit history",
                  body: "Notes and photos stay on the dealer or customer.",
                },
                {
                  title: "Visit notes and follow-up",
                  body: "The visit can name the next action. It does not create that action by itself.",
                },
                {
                  title: "TADA and travel tracking",
                  body: "TA/DA is worked out from the distance travelled, using the amounts you set.",
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
              Let partners submit referred leads on your referral page and follow
              their progress through the sales process.
            </p>
            <FeatureList
              items={[
                {
                  title: "Partner referral page",
                  body: "One link in the browser. Partners sign in with a one-time code sent to their email. They are not billed as field seats.",
                },
                {
                  title: "Partner profile",
                  body: "The sender is a named referrer, not a source dropdown that disappears after the deal.",
                },
                {
                  title: "Lead submission",
                  body: "The partner submits the account they introduced. Team includes the referral workspace. The referral page is on Growth.",
                },
                {
                  title: "Referrer attribution",
                  body: "The partner stays on the lead they sent.",
                },
                {
                  title: "Lead status",
                  body: "Open, converted, or lost with a reason. The partner sees their own rows.",
                },
                {
                  title: "Partner payouts",
                  body: "Record a reward for each converted lead, and approve it before it is paid.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/referral-portal" className={textLink}>
                Referral page guide
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
              Every recurring plan shows its end date and whether a payment is due,
              so the person who sold it knows when to go back.
            </p>
            <FeatureList
              items={[
                {
                  title: "Customer and account",
                  body: "Each plan names the customer it was sold to.",
                },
                {
                  title: "Who sold it",
                  body: "The plan keeps the rep who enrolled the customer, so follow-ups have an owner.",
                },
                {
                  title: "Plan or contract",
                  body: "A retainer is a plan: price, duration, and what it includes. This is on Growth.",
                },
                {
                  title: "Renewal date",
                  body: "Each plan has an end date, and EMI plans list every instalment with its due date.",
                },
                {
                  title: "Payment status",
                  body: "Paid or Payment Due, whether the payment came in online through Razorpay or staff recorded cash or UPI.",
                },
                {
                  title: "Follow-up",
                  body: "A payment due is visible to the person who owns the account. Syclops does not renew the contract by itself.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Plans and payments are on Growth.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <PlanRecord />
            <PlanList />
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
            These steps happen in one app: the visit, the partner, the opportunity,
            and the plan. It is not another place to store contacts.
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
              Start free trial
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
            These layouts use sample sales data so you can see a visit plan, a
            check-in, an account, a partner lead, a plan, and visits turning into
            customers. They are not a
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
            and whether the customer has paid. There is no CRM integration to
            switch on.
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
                <li>Recurring contracts with an end date and an owner</li>
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
            with a payment due. The same activity can be filtered by referrer and
            region. The figures use sample labels.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Illustrative sample workspace
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <BeatList />
            <LeadStatus />
            <PlanList />
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
            partner referral page, recurring plans, and analytics by referrer and
            region.
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
                    <p className="rounded-full bg-iris-dark px-2.5 py-1 text-[11px] font-medium text-cream">
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
                      ? "bg-iris-dark text-cream hover:bg-iris-deep"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start free trial
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
                  label: "Referral page vs CRM source field",
                  body: "Partners need status. A picklist is not a referral page.",
                },
                {
                  href: "/start?industry=sales",
                  label: "Start",
                  body: "Create a sales workspace.",
                },
                {
                  href: "/compare/crm",
                  label: "vs CRM",
                  body: "Deals vs visits, referrers, and plans.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="sales-final"
        title="Connect your field team, partners and customers."
        body="Create your workspace, add your field team and start tracking visits and referrals."
        actions={
          <div className="flex flex-col items-start gap-3">
            <SalesLink
              href={startHref("final")}
              event="sales_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${salesFocus}`}
            >
              Start free trial
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
      <SalesStickyCta label="Start free trial" />
    </>
  );
}
