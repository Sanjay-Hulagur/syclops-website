import Image from "next/image";
import Link from "next/link";
import heroArt from "../../../Images/Medtech Field Visits Dashboard.png";
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
  PortalPhone,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/medtech/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris-dark px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-deep";
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
    body: "Before a contract exists, the referral stays open. Conversion is not a meeting that felt promising.",
  },
  {
    title: "Contract",
    body: "Converted means the contract is signed. The device and service plan is recorded as a plan in Syclops.",
  },
  {
    title: "Service window",
    body: "The plan shows the amount, the end date, and whether it is paid or has a payment due.",
  },
  {
    title: "Follow-up",
    body: "A payment due shows on the plan, so the rep who sold it knows to go back.",
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
      "Evaluation notes",
      "Device contracts",
      "Service follow-ups",
    ],
  },
  {
    title: "Diagnostics",
    problem:
      "Analyzer placements and the departments that asked for them are tracked apart from the service window.",
    items: [
      "Hospital and lab visit plans",
      "Referring departments",
      "Evaluation to placement",
      "Analyzer service plans",
      "Follow-ups on payments due",
    ],
  },
  {
    title: "Multi-hospital teams",
    problem:
      "Coverage across cities is a list, and a service plan with a payment due has no named owner.",
    items: [
      "Territory coverage",
      "Hospital accounts",
      "Cross-site referrals",
      "A region for each city",
      "Service plan end dates",
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
  "Evaluation notes",
  "Field follow-ups",
  "Service plans with payment status",
];

const proofs = [
  {
    title: "See which departments were covered",
    body: "A visit list shows check-ins, planned hospitals, and accounts nobody has visited.",
    frame: <VisitHistory />,
  },
  {
    title: "Check in from the rep’s phone",
    body: "GPS, notes, and photos stay on the visit.",
    frame: <VisitRecord />,
  },
  {
    title: "Let a department refer without an app",
    body: "Your referral page opens in the browser. The sender sees status. They are not a field seat.",
    frame: <PortalPhone />,
  },
  {
    title: "Know which department opened each account",
    body: "Each referral keeps the department that sent it, and shows whether it converted.",
    frame: <ReferralDesk />,
  },
  {
    title: "Show a payment due to the field team",
    body: "Paid and due payments stay on the service plan, with their dates.",
    frame: <ContractList />,
  },
  {
    title: "Read the loop, not a vanity chart",
    body: "Analytics show visits and referrals by person, referrer, and region.",
    frame: <AnalyticsSample />,
  },
];

function medtechFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Does Syclops replace our ERP or the hospital HIS?",
      a: "No. Clinical records stay in the hospital system. Device inventory, invoicing of record, and regulatory files stay in your ERP. Syclops is the field layer: KOL visits, department referrals, and whether the service plan has been paid.",
    },
    {
      q: "Can we track KOL and department visits?",
      a: "Yes. Reps check in at the hospital with GPS and photos. Location is recorded only during the working day, and notes stay on the visit.",
    },
    {
      q: "Can we manage multiple cities or countries?",
      a: "Set up each city as a region in one workspace. Each country can run as its own workspace.",
    },
    {
      q: "Can department heads refer without installing an app?",
      a: "Yes. They open your referral page in the browser and sign in with a one-time code sent to their email. They do not install the field app, and referrer logins are not billed as field seats. The referral page is included on Growth and Scale.",
    },
    {
      q: "Can we import existing hospital accounts?",
      a: "Reps and areas upload from an Excel template. Hospital accounts are added from the phone or in the admin console. Talk to us about bringing older lists across.",
    },
    {
      q: "Can we track evaluations before a contract?",
      a: "Yes. Log each evaluation as a visit with notes. The referral stays open until the contract is signed or the deal is lost.",
    },
    {
      q: "Can we track service plans and payments due?",
      a: "On Growth, a service plan shows the amount, the end date, and whether it is paid or has a payment due. Payments can be recorded as cash, UPI, or EMI, or paid online through Razorpay, which our team connects with you. Syclops does not replace your ERP invoices.",
    },
    {
      q: "Does the app use medtech words?",
      a: "Partly. Syclops was built for hospitals, so referrers show as doctors, which fits KOLs, and some screens say patients where you would say sites or accounts. The steps are the same.",
    },
    {
      q: "Are KOL and department logins billed?",
      a: "No. Referrer logins are not billed as field seats. You pay for field seats and manager seats.",
    },
    {
      q: "How much does Syclops cost?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Referrer logins are not billed as field seats. The full comparison is on the pricing page.`,
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

      <header className="grid items-center gap-6 overflow-hidden border-b border-line px-5 py-10 sm:py-12 lg:grid-cols-[max(1.25rem,calc((100%-72rem)/2+1.25rem))_minmax(0,32rem)_minmax(0,1fr)] lg:gap-0 lg:px-0 lg:py-2">
        <div className="hidden lg:block" aria-hidden="true" />
        <div className="lg:py-8 lg:pr-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            For devices · diagnostics · hospital teams
          </p>
          <h1 className="display mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Turn KOL visits into device contracts that stay in service.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            Track department visits, hospital referrals, evaluations, and
            service-plan follow-ups in one place. Keep your ERP and the hospital
            HIS.
          </p>
          <div id="medtech-hero-cta" className="mt-8 flex flex-wrap gap-3">
            <MedtechLink
              href={startHref("hero")}
              event="medtech_hero_trial_click"
              params={{ cta_location: "hero" }}
              className={`${primary} ${medtechFocus}`}
            >
              Start free trial
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
        <Image
          src={heroArt}
          alt="Hospital meeting with field visits, hospital accounts and leads, orders and pipeline, and a phone check-in for today's device visits."
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-auto w-full"
        />
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
                  body: "A visit plan for the week, and a list of departments nobody has visited.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in, and only during the working day.",
                },
                {
                  title: "Visit history",
                  body: "Notes and photos stay on the hospital account.",
                },
                {
                  title: "Notes and follow-ups",
                  body: "A visit records why the rep went and what was said, so the next visit starts there.",
                },
                {
                  title: "Territory coverage",
                  body: "Hospitals are accounts in regions. Reps check in at the department they are covering.",
                },
                {
                  title: "TADA where reps travel",
                  body: "TA/DA is worked out from the distance travelled, using the amounts you set.",
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
              Track department introductions, evaluations, contracts, and service
              plans in one place.
            </p>
            <FeatureList
              items={[
                {
                  title: "Department referrer",
                  body: "The sender is a named referrer, not an email thread that ends when the contract is raised.",
                },
                {
                  title: "Hospital account",
                  body: "The referred site stays on the referral. The referral page blocks a second open referral for the same mobile number.",
                },
                {
                  title: "Evaluation before conversion",
                  body: "The referral stays open through the evaluation. Converted means the contract is signed.",
                },
                {
                  title: "Referral source",
                  body: "Team includes the referral workspace. The referral page for department heads is on Growth.",
                },
                {
                  title: "Referrals and contracts together",
                  body: "Referrals and service plans sit in the same workspace, so the rep sees both.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/referral-payouts" className={textLink}>
                Referral payouts
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
              Make a payment due visible to the rep.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Every service plan shows which payments are made and which are due, so
              the right person knows which hospital needs a visit.
            </p>
            <FeatureList
              items={[
                {
                  title: "Hospital and device",
                  body: "The plan is the device plus service, with the rep who sold it.",
                },
                {
                  title: "Plan dates",
                  body: "Each plan has a start and end date, and EMI plans list every instalment.",
                },
                {
                  title: "Payment status",
                  body: "Paid or Payment Due stays on the record, whether the payment came in online through Razorpay or staff recorded it.",
                },
                {
                  title: "Pending amount",
                  body: "The plan amount is what the follow-up is about. This is not a replacement ERP invoice.",
                },
                {
                  title: "Who sold the plan",
                  body: "Each plan keeps the rep who enrolled the hospital, so follow-ups have an owner.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Service plans are on Growth. Syclops does not replace your ERP.{" "}
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
            These steps happen in one app, so nobody retypes the same hospital in
            three places.
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
            a service plan, and visits turning into contracts. They are not a
            customer result.
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
            and KOL logins are not billed as field seats. The referral page and
            service plans are on Growth. {trialDays} days free · No credit
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
                    <p className="rounded-full bg-iris-dark px-2.5 py-1 text-[11px] font-medium text-cream">
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
                      ? "bg-iris-dark text-cream hover:bg-iris-deep"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start free trial
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
                  body: "One way of working for medical reps and agents.",
                },
                {
                  href: "/product/subscriptions",
                  label: "Subscriptions",
                  body: "Service plans, EMI, and payment status.",
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
              Start free trial
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
      <MedtechStickyCta label="Start free trial" />
    </>
  );
}
