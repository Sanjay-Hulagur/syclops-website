import Link from "next/link";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import {
  MedtechAnalytics,
  MedtechFaq,
  MedtechLink,
  MedtechStickyCta,
  medtechFocus,
} from "@/components/medtech/client";
import {
  AnalyticsSample,
  ContractList,
  ContractRecord,
  HeroBoard,
  PortalPhone,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/medtech/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems = [
  {
    title: "KOL and department visits",
    body: "Clinical reps cover hospitals, but management cannot easily see which departments were visited and which have gone quiet.",
  },
  {
    title: "Hospital introductions",
    body: "A department head refers another site on a call or in email. The introduction is often gone by the time an evaluation starts.",
  },
  {
    title: "Evaluations",
    body: "The eval lives in a thread. The team cannot see a single status between the visit and a signed contract.",
  },
  {
    title: "Service windows",
    body: "A service plan can lapse in the ERP while the rep who owns that hospital still has last quarter’s notes.",
  },
];

const journey = [
  {
    title: "KOL visit",
    body: "A rep checks in at the department. The visit has an owner, notes, and a date.",
  },
  {
    title: "Department introduction",
    body: "The hospital or department that made the introduction stays on the record.",
  },
  {
    title: "Evaluation",
    body: "Before a contract exists, the referral stays in sent or accepted. Conversion is not a meeting that felt promising.",
  },
  {
    title: "Contract",
    body: "Converted means a device and service plan exists, with the referring department still attached.",
  },
  {
    title: "Service window",
    body: "The plan shows the amount, the next window, and whether it is paid, failed, or due soon.",
  },
  {
    title: "Follow-up",
    body: "After the retry schedule you set, a lapse can become a task for the rep who owns that account.",
  },
];

const audiences = [
  {
    title: "Device companies",
    problem:
      "A KOL visit and a department introduction disappear once the contract is raised somewhere else.",
    items: [
      "KOL visits",
      "Department referrals",
      "Evaluation status",
      "Device contracts",
      "Service follow-ups",
    ],
  },
  {
    title: "Diagnostics",
    problem:
      "Analyzer placements and the departments that asked for them are tracked apart from the service window.",
    items: [
      "Hospital and lab beats",
      "Referring departments",
      "Evaluation to placement",
      "Analyzer service plans",
      "Lapse follow-ups",
    ],
  },
  {
    title: "Multi-hospital teams",
    problem:
      "Coverage across cities is a list, and a quiet service plan has no named owner on the beat.",
    items: [
      "Territory coverage",
      "Hospital accounts",
      "Cross-site referrals",
      "Multi-city on Scale",
      "Service windows",
    ],
  },
];

const coreItems = [
  "Hospital information system",
  "Device master and inventory",
  "Invoicing of record",
  "Regulatory files",
  "Existing commercial workflows",
];

const syclopsItems = [
  "KOL and department visits",
  "Hospital coverage",
  "Department referrals",
  "Evaluation status",
  "Field follow-ups",
  "Service-plan visibility and supported subscription workflows",
];

const proofs = [
  {
    title: "See which departments were covered",
    body: "A visit list shows check-ins, planned hospitals, and accounts that have gone quiet.",
    frame: <VisitHistory />,
  },
  {
    title: "Check in from the rep’s phone",
    body: "GPS, duration, notes, and an optional badge photo stay on the visit.",
    frame: <VisitRecord />,
  },
  {
    title: "Let a department refer without an app",
    body: "A link or QR opens in the browser. The sender sees status. They are not a field seat.",
    frame: <PortalPhone />,
  },
  {
    title: "Keep the referring department on the contract",
    body: "Origin stays attached from the introduction through evaluation to the service plan.",
    frame: <ReferralDesk />,
  },
  {
    title: "Show a service window to the field team",
    body: "Paid, due soon, and failed stay on the contract, with a follow-up when you configure one.",
    frame: <ContractList />,
  },
  {
    title: "Read the loop, not a vanity chart",
    body: "On Growth, analytics groups visits, referrals, and plans by referrer and region.",
    frame: <AnalyticsSample />,
  },
];

function medtechFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Does Syclops replace our ERP or the hospital HIS?",
      a: "No. Clinical records stay in the hospital system. Device inventory, invoicing of record, and regulatory files stay in your ERP. Syclops is the field layer: KOL visits, department referrals, and whether the service plan still pays.",
    },
    {
      q: "Can we track KOL and department visits?",
      a: "Yes. Reps check in at the hospital. Location is recorded at check-in. GPS runs on a working day between check-in and check-out. A badge photo can be required. Notes and duration stay on the visit.",
    },
    {
      q: "Can we manage multiple cities or countries?",
      a: "Territories and hospital accounts sit in one workspace on Team and Growth. Multi-brand or multi-city is on Scale. You can also use separate workspaces.",
    },
    {
      q: "Can department heads refer without installing an app?",
      a: "Yes. They open a portal link or a QR code in the browser. They do not install the field app, and a referrer login is not billed as a field seat. The portal is included on Growth and Scale.",
    },
    {
      q: "Can we import existing hospital accounts?",
      a: "Yes. Import a CSV of accounts — name, phone, email, and area. Last-visit can be empty. After import, check-ins and referrals attach to those rows.",
    },
    {
      q: "Can we track evaluations before a contract?",
      a: "Yes. An evaluation is the referral before it converts. Converted means a device and service plan has been created. The contract keeps the referring department.",
    },
    {
      q: "Can we track service windows and lapsed contracts?",
      a: "On Growth, a service plan shows the amount, the interval, and whether it is paid, failed, or due soon. After the retry schedule you set, a failed payment can become a follow-up for the rep who owns that hospital. You can connect Razorpay or Stripe, or mark a collection in the workspace. Syclops does not replace your ERP invoices, and it does not collect fees unless a gateway is connected.",
    },
    {
      q: "Are KOL and department logins billed?",
      a: "No. Referrer logins are not billed as field seats. You pay for field seats and manager seats.",
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
  return `/start?industry=medtech&cta=${cta}`;
}

export function MedtechLanding({ trialDays }: { trialDays: number }) {
  const faqs = medtechFaqs(trialDays);

  return (
    <>
      <MedtechAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Medtech", path: "/industries/medtech" },
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              For devices · diagnostics · hospital teams
            </p>
            <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn KOL visits into device contracts that stay in service.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Track department visits, hospital referrals, evaluations, and
              service-plan follow-ups in one connected system. Keep your ERP and the
              hospital HIS.
            </p>
            <div id="medtech-hero-cta" className="mt-8 flex flex-wrap gap-3">
              <MedtechLink
                href={startHref("hero")}
                event="medtech_hero_trial_click"
                params={{ cta_location: "hero" }}
                className={`${primary} ${medtechFocus}`}
              >
                Start your free trial
              </MedtechLink>
              <MedtechLink
                href="#how-it-works"
                event="medtech_demo_click"
                params={{ cta_location: "hero" }}
                className={`${secondary} ${medtechFocus}`}
              >
                See how it works
              </MedtechLink>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
              <li>{trialDays} days free</li>
              <li>No credit card required</li>
              <li>No sales call</li>
              <li>ERP and HIS stay</li>
            </ul>
          </div>
          <HeroBoard />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="medtech-problem">
        <h2 id="medtech-problem" className="display max-w-3xl text-3xl font-semibold tracking-tight">
          Contracts get lost between the KOL visit, the evaluation, and the ERP.
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
          Syclops connects these activities so every visit, referral, contract, and
          follow-up has a clear status and owner.
        </p>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="medtech-visits"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              KOL and department visits
            </p>
            <h2 id="medtech-visits" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know which hospitals your reps are covering.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Plan department visits, track check-ins, capture notes, and see which
              accounts have not been visited recently.
            </p>
            <FeatureList
              items={[
                {
                  title: "Planned visits",
                  body: "The day is a beat with last-visit dates, so a skipped department shows up as a gap.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in. GPS runs on a working day between check-in and check-out.",
                },
                {
                  title: "Visit history",
                  body: "Duration, notes, and an optional badge photo stay on the hospital account.",
                },
                {
                  title: "Notes and follow-ups",
                  body: "A visit can name the next action, including a service-window follow-up after your retry schedule.",
                },
                {
                  title: "Territory coverage",
                  body: "Hospitals are accounts in regions. Reps check in at the department they are covering.",
                },
                {
                  title: "TADA where reps travel",
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
              <Link href="/product/mobile" className={textLink}>
                Field app
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <VisitRecord />
            <VisitHistory />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-referrals">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Hospital referrals
            </p>
            <h2 id="medtech-referrals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know which department opened every account.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect a department introduction to the evaluation, the contract, and
              the service plan that follows.
            </p>
            <FeatureList
              items={[
                {
                  title: "Department referrer",
                  body: "The sender is a named referrer, not an email thread that ends when the contract is raised.",
                },
                {
                  title: "Hospital account",
                  body: "The referred site stays on the record. The same phone or email cannot be referred twice into the same plan.",
                },
                {
                  title: "Evaluation before conversion",
                  body: "Sent and accepted cover the evaluation. Converted means a device and service plan exists.",
                },
                {
                  title: "Referral source",
                  body: "Team includes the referral workspace. The browser portal for department heads is on Growth.",
                },
                {
                  title: "Contract association",
                  body: "The service plan keeps the referring department when it is paid, due, or lapsed.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/qualification-window" className={textLink}>
                Qualification window
              </Link>
            </p>
          </div>
          <div className="order-2 grid gap-3 md:order-1">
            <PortalPhone />
            <ReferralDesk />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-contracts">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Service-plan follow-ups
            </p>
            <h2 id="medtech-contracts" className="display mt-3 text-3xl font-semibold tracking-tight">
              Make a quiet service window visible to the rep.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect device contracts and service plans with follow-up workflows, so
              the right person knows which hospital needs attention.
            </p>
            <FeatureList
              items={[
                {
                  title: "Hospital and device",
                  body: "The plan is the device plus service. The referring department stays on it.",
                },
                {
                  title: "Service window",
                  body: "Due soon is a status on the plan, with the amount and the next date.",
                },
                {
                  title: "Payment status",
                  body: "Paid, failed, and due soon stay on the record after you connect Razorpay or Stripe, or when staff mark a collection.",
                },
                {
                  title: "Pending amount",
                  body: "The plan amount is what the follow-up is about. This is not a replacement ERP invoice.",
                },
                {
                  title: "Follow-up status",
                  body: "After the retry schedule you set, a failed payment can become a task for the rep who owns that account.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Subscription plans and dunning are on Growth. Syclops does not replace
              your ERP.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <ContractRecord />
            <ContractList />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-models">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="medtech-models" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            One connected workflow. Different commercial motions.
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

      <section className="border-t border-line" aria-labelledby="medtech-journey">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="medtech-journey" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            From the first department visit to the next service window.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps share one record. Syclops is the connection between them,
            not another place to retype the same hospital.
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

      <section className="border-t border-line" aria-labelledby="medtech-core">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="medtech-core" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your ERP and the hospital HIS. Add the missing field layer.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">ERP and hospital systems</h3>
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
            You do not need to replace the software that already runs contracts or
            clinical records. Syclops works alongside your existing systems.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-proof">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            Illustrative sample workspace
          </p>
          <h2 id="medtech-proof" className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            The same records your reps and referring departments use.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These layouts use sample medtech data so you can see a visit, a referral,
            a service plan, and loop health. They are not a customer result.
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
        id="medtech-pricing"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="medtech-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="medtech-pricing-title" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Start with KOL visits. Add referrals and service plans as you grow.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month. Department
            and KOL logins are not billed as field seats. The referrer portal and
            service-plan follow-ups are on Growth. {trialDays} days free · No credit
            card required.
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
                <MedtechLink
                  href={startHref("pricing")}
                  event="medtech_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${medtechFocus} ${
                    plan.featured
                      ? "bg-iris text-cream hover:bg-iris-dark"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start your free trial
                </MedtechLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <MedtechLink
              href="/pricing"
              event="medtech_pricing_click"
              params={{ cta_location: "pricing", plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </MedtechLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="medtech-faq" className="display text-3xl font-semibold tracking-tight">
            Questions commercial teams ask
          </h2>
          <div className="mt-8">
            <MedtechFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="medtech-next">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="medtech-next" className="display text-2xl font-semibold tracking-tight">
            Read the product behind the loop
          </h2>
          <div className="mt-6">
            <Related
              items={[
                {
                  href: "/product/field",
                  label: "Field tracking",
                  body: "KOL check-in, routes, and TADA.",
                },
                {
                  href: "/blog/kol-dsa-referral-loops",
                  label: "KOL and DSA loops",
                  body: "Department origin on the contract that still pays.",
                },
                {
                  href: "/product/subscriptions",
                  label: "Subscriptions",
                  body: "Service windows that can write a field task.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="medtech-final"
        title="Bring your hospital visits, referrals, and service plans into one system."
        body="Create your workspace, invite your reps, and start tracking the account from the department visit to the next service window."
        actions={
          <div className="flex flex-col items-start gap-3">
            <MedtechLink
              href={startHref("final")}
              event="medtech_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${medtechFocus}`}
            >
              Start your free trial
            </MedtechLink>
            <MedtechLink
              href="/interested?industry=medtech"
              event="medtech_contact_click"
              params={{ cta_location: "final" }}
              className={`text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline ${medtechFocus}`}
            >
              Talk to our team
            </MedtechLink>
            <p className="text-sm text-cream/70">
              {trialDays} days free · No credit card · No implementation call required
            </p>
          </div>
        }
      />
      <MedtechStickyCta label="Start your free trial" />
    </>
  );
}
