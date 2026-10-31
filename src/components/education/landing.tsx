import Image from "next/image";
import Link from "next/link";
import heroArt from "../../../Images/Campus Admissions Dashboard Scene.png";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import {
  EducationAnalytics,
  EducationFaq,
  EducationLink,
  EducationStickyCta,
  educationFocus,
} from "@/components/education/client";
import {
  AnalyticsSample,
  FeePlanRecord,
  InstallmentList,
  PortalPhone,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/education/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems = [
  {
    title: "Campus outreach",
    body: "Counselors visit schools, colleges and tuition centres, but management cannot easily see which campuses are being covered.",
  },
  {
    title: "Student enquiries",
    body: "Enquiries arrive through calls, WhatsApp, walk-ins and referral networks. Follow-ups become scattered.",
  },
  {
    title: "Parent and alumni referrals",
    body: "Institutions receive introductions, but the original referrer is often lost when the student moves through the admission process.",
  },
  {
    title: "Fee installments",
    body: "The accounts team knows which fees are pending, but the counselor or field team may not know which students need follow-up.",
  },
];

const journey = [
  {
    title: "Campus visit",
    body: "A counselor checks in at a school, college, or tuition centre. The visit has an owner, notes, and a date.",
  },
  {
    title: "Student enquiry",
    body: "The conversation stays on that campus record, so the next person does not reconstruct it from chat.",
  },
  {
    title: "Parent / alumni referral",
    body: "The person who made the introduction stays attached as the student moves forward.",
  },
  {
    title: "Admission",
    body: "Admitted means a fee plan exists, with a status the team can see.",
  },
  {
    title: "Fee plan",
    body: "The plan shows the amount, the next due date, and whether it is paid, failed, or due soon.",
  },
  {
    title: "Follow-up",
    body: "A pending or failed installment can become a task for the counselor who owns that student.",
  },
];

const institutions = [
  {
    title: "Schools",
    problem:
      "Parent introductions and visits to feeder schools usually sit apart from the admission follow-up.",
    items: [
      "Parent referrals",
      "Admission enquiries",
      "School outreach",
      "Counselor visit tracking",
      "Admission follow-ups",
    ],
  },
  {
    title: "PU and degree colleges",
    problem:
      "Campus outreach and alumni introductions drop off once a student is tagged to a programme and a fee plan.",
    items: [
      "Campus outreach",
      "Alumni referrals",
      "Admission tracking",
      "Programme-wise enquiries",
      "Fee installment visibility",
    ],
  },
  {
    title: "Coaching institutes",
    problem:
      "Student enquiries, counselor follow-ups, and crash-course fees are often three separate lists.",
    items: [
      "Student enquiries",
      "Counselor follow-ups",
      "Referral tracking",
      "Course enrolment",
      "Crash-course fee plans and installments",
    ],
  },
];

const erpItems = [
  "Academic records",
  "Marks and examinations",
  "Timetables",
  "Student administration",
  "Existing academic workflows",
];

const syclopsItems = [
  "Counselor field visits",
  "Campus coverage",
  "Parent and alumni referrals",
  "Referral tracking",
  "Field follow-ups",
  "Fee-plan visibility and supported subscription workflows",
];

const proofs = [
  {
    title: "See which campuses were covered",
    body: "A visit list shows check-ins, planned stops, and campuses that have gone quiet.",
    frame: <VisitHistory />,
  },
  {
    title: "Check in from the counselor’s phone",
    body: "GPS, duration, and notes stay on the visit, with the follow-up named.",
    frame: <VisitRecord />,
  },
  {
    title: "Let parents refer without an app",
    body: "A link or QR opens in the browser. The sender sees enquiry and admission status.",
    frame: <PortalPhone />,
  },
  {
    title: "Keep the referrer on the student",
    body: "Parent or alumni origin stays attached from enquiry to the fee plan.",
    frame: <ReferralDesk />,
  },
  {
    title: "Show the next installment to the field team",
    body: "Paid, due soon, and failed stay on the fee plan, with a follow-up when you configure one.",
    frame: <InstallmentList />,
  },
  {
    title: "Read the loop, not a vanity chart",
    body: "On Growth, analytics groups visits, referrals, and plans by referrer and region.",
    frame: <AnalyticsSample />,
  },
];

function educationFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Does Syclops replace our academic ERP?",
      a: "No. Academic records, marks, examinations, timetables, and student administration stay in the system you already run. Syclops is the field layer: counselor visits, parent and alumni referrals, and fee-plan follow-ups.",
    },
    {
      q: "Can we manage multiple campuses?",
      a: "Yes. Campuses are regions in one workspace on Team and Growth. Counselors check in at the campus they are covering. Multi-brand or multi-city is on Scale.",
    },
    {
      q: "Can we track counselor visits outside our institution?",
      a: "Yes. The beat is the schools, colleges, and tuition centres your counselors visit, not only your own building. Check-in records location. GPS runs on a working day between check-in and check-out, and a photo can be required. The record is the visit, not a live map of the evening.",
    },
    {
      q: "Can parents and alumni refer students without installing an app?",
      a: "Yes. They open a portal link or a QR code in the browser. They do not install the field app, and a referrer login is not billed as a field seat. The portal is included on Growth and Scale.",
    },
    {
      q: "Can we import existing student enquiry data?",
      a: "Yes. Import a CSV of campuses and students — name, phone, email, and area. Last-visit can be empty. After import, check-ins and referrals attach to those rows. See the beat-list import guide.",
    },
    {
      q: "Can we track fee installments and pending payments?",
      a: "On Growth, a fee plan shows the amount, the interval, and whether it is paid, failed, or due soon. After the retry schedule you set, a failed payment can become a follow-up for the counselor who owns that student. You can connect Razorpay or Stripe, or mark cash and UPI in the workspace. Syclops does not replace your accounts system, and it does not collect fees unless a gateway is connected.",
    },
    {
      q: "Are parent and alumni accounts billed?",
      a: "No. Referrer logins are not billed as field seats. You pay for field seats and manager seats.",
    },
    {
      q: "Can coaching institutes use Syclops?",
      a: "Yes. Coaching institutes use the same loop: student enquiries, counselor visits, parent or alumni referrals, and a course fee plan with a due or failed installment.",
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
  return `/start?industry=education&cta=${cta}`;
}

export function EducationLanding({ trialDays }: { trialDays: number }) {
  const faqs = educationFaqs(trialDays);

  return (
    <>
      <EducationAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Education", path: "/industries/education" },
        ]}
      />

      <header className="grid items-center gap-6 overflow-hidden border-b border-line px-5 py-10 sm:py-12 lg:grid-cols-[max(1.25rem,calc((100%-72rem)/2+1.25rem))_minmax(0,32rem)_minmax(0,1fr)] lg:gap-0 lg:px-0 lg:py-2">
        <div className="hidden lg:block" aria-hidden="true" />
        <div className="lg:py-8 lg:pr-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            For schools · colleges · coaching institutes
          </p>
          <h1 className="display mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Turn student enquiries into admissions — and admissions into collected fees.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            Track counselor visits, parent and alumni referrals, student admissions,
            and pending fee installments in one connected system. Keep your existing
            academic ERP.
          </p>
          <div id="education-hero-cta" className="mt-8 flex flex-wrap gap-3">
            <EducationLink
              href={startHref("hero")}
              event="education_hero_trial_click"
              params={{ cta_location: "hero" }}
              className={`${primary} ${educationFocus}`}
            >
              Start your free trial
            </EducationLink>
            <EducationLink
              href="#how-it-works"
              event="education_demo_click"
              params={{ cta_location: "hero" }}
              className={`${secondary} ${educationFocus}`}
            >
              See how it works
            </EducationLink>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
            <li>{trialDays} days free</li>
            <li>No credit card required</li>
            <li>No sales call</li>
            <li>Existing ERP stays</li>
          </ul>
        </div>
        <Image
          src={heroArt}
          alt="Campus admissions desk with counselor visits, student referrals, admissions and fee follow-ups, and a phone check-in for today's school visits."
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="h-auto w-full"
        />
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="education-problem">
        <h2 id="education-problem" className="display max-w-3xl text-3xl font-semibold tracking-tight">
          Admissions get lost between visits, enquiries and fee collection.
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
          Syclops connects these activities so every visit, referral, admission and
          follow-up has a clear status and owner.
        </p>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="education-visits"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Counselor and campus tracking
            </p>
            <h2 id="education-visits" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know where your counselors are working.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Plan campus visits, track counselor check-ins, capture visit notes and
              identify campuses that have not been visited recently.
            </p>
            <FeatureList
              items={[
                {
                  title: "Planned visits",
                  body: "The day is a beat with last-visit dates, so skipped campuses show up as a gap.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in. GPS runs on a working day between check-in and check-out.",
                },
                {
                  title: "Visit history",
                  body: "Duration, notes, and an optional photo stay on the campus.",
                },
                {
                  title: "Notes and follow-ups",
                  body: "A visit can name the next action, including a fee-plan follow-up after your retry schedule.",
                },
                {
                  title: "Campus and territory coverage",
                  body: "Campuses are regions. Counselors check in at the school, college, or tuition centre they are covering.",
                },
                {
                  title: "Activity you can review",
                  body: "Managers see the visit list. On Growth, analytics can be filtered by region.",
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

      <section className="border-t border-line" aria-labelledby="education-referrals">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Student referral management
            </p>
            <h2 id="education-referrals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know who referred every student.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect parent and alumni introductions to student enquiries, admission
              status and the resulting fee plan.
            </p>
            <FeatureList
              items={[
                {
                  title: "Parent or alumni referrer",
                  body: "The sender is a named referrer, not a source dropdown that disappears after admission.",
                },
                {
                  title: "Student details",
                  body: "Name and phone or email stay on the referral. The same phone or email cannot be referred twice into the same plan.",
                },
                {
                  title: "Referral source",
                  body: "Parent, alumni, or another sender you enable. Team includes the referral workspace. The browser portal is on Growth.",
                },
                {
                  title: "Enquiry and admission status",
                  body: "Status moves from sent to converted when a fee plan is created, then to paying when the first invoice clears.",
                },
                {
                  title: "Fee-plan association",
                  body: "The plan keeps who referred the student when the installment is paid, due, or failed.",
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

      <section className="border-t border-line" aria-labelledby="education-fees">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Fee installment follow-ups
            </p>
            <h2 id="education-fees" className="display mt-3 text-3xl font-semibold tracking-tight">
              Make pending installments visible to the field team.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Connect fee plans and pending installments with follow-up workflows, so
              the right person knows which student needs attention.
            </p>
            <FeatureList
              items={[
                {
                  title: "Student and programme",
                  body: "The fee plan is the programme: a semester, a degree term, or a crash course.",
                },
                {
                  title: "Installment due date",
                  body: "Due soon is a status on the plan, with the amount and the next date.",
                },
                {
                  title: "Payment status",
                  body: "Paid, failed, and due soon stay on the record after you connect Razorpay or Stripe, or when staff mark cash or UPI.",
                },
                {
                  title: "Pending amount",
                  body: "The plan amount is what the follow-up is about. This is not a replacement accounts ledger.",
                },
                {
                  title: "Follow-up status",
                  body: "After the retry schedule you set, a failed payment can become a task for the counselor who owns that student.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Subscription plans and dunning are on Growth. Syclops does not replace
              your accounts system.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <FeePlanRecord />
            <InstallmentList />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="education-models">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="education-models" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            One connected workflow. Different education models.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {institutions.map((institution) => (
              <article key={institution.title} className="rounded-3xl border border-line bg-cream p-6">
                <h3 className="text-lg font-medium">{institution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{institution.problem}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {institution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="education-journey">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="education-journey" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            From the first campus visit to the last installment.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps share one record. Syclops is the connection between them,
            not another place to retype the same student.
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

      <section className="border-t border-line" aria-labelledby="education-erp">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="education-erp" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your academic ERP. Add the missing field layer.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">Academic ERP</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {erpItems.map((item) => (
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
            You do not need to replace the software that already runs your institution.
            Syclops works alongside your existing systems.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="education-proof">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
            Illustrative sample workspace
          </p>
          <h2 id="education-proof" className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            The same records your counselors and referrers use.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These layouts use sample education data so you can see a visit, a referral,
            a fee plan, and loop health. They are not a customer result.
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
        id="education-pricing"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="education-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="education-pricing-title" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Start with field tracking. Add referrals and fee workflows as you grow.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month. Parent
            and alumni logins are not billed as field seats. Fee plans, the referrer
            portal, and dunning are on Growth. {trialDays} days free · No credit card
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
                <EducationLink
                  href={startHref("pricing")}
                  event="education_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${educationFocus} ${
                    plan.featured
                      ? "bg-iris text-cream hover:bg-iris-dark"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start your free trial
                </EducationLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <EducationLink
              href="/pricing"
              event="education_pricing_click"
              params={{ cta_location: "pricing", plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </EducationLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="education-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="education-faq" className="display text-3xl font-semibold tracking-tight">
            Questions institutions ask
          </h2>
          <div className="mt-8">
            <EducationFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="education-next">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="education-next" className="display text-2xl font-semibold tracking-tight">
            Read the product behind the loop
          </h2>
          <div className="mt-6">
            <Related
              items={[
                {
                  href: "/product/referrals",
                  label: "Referral management",
                  body: "Alumni and parent intros with status.",
                },
                {
                  href: "/blog/counselor-beat-unpaid-fee-installment",
                  label: "Unpaid fees as a visit",
                  body: "Counselor beat plus alumni origin on the fee plan.",
                },
                {
                  href: "/guides/import-beat-list",
                  label: "Import a beat list",
                  body: "CSV of campuses and students. Last-visit can be empty.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="education-final"
        title="Bring your campuses, referrals and follow-ups into one system."
        body="Create your workspace, invite your counselors and start tracking the student journey."
        actions={
          <div className="flex flex-col items-start gap-3">
            <EducationLink
              href={startHref("final")}
              event="education_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${educationFocus}`}
            >
              Start your free trial
            </EducationLink>
            <EducationLink
              href="/interested?industry=education"
              event="education_contact_click"
              params={{ cta_location: "final" }}
              className={`text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline ${educationFocus}`}
            >
              Talk to our team
            </EducationLink>
            <p className="text-sm text-cream/70">
              {trialDays} days free · No credit card · No implementation call required
            </p>
          </div>
        }
      />
      <EducationStickyCta label="Start your free trial" />
    </>
  );
}
