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
  FeePlanList,
  FeePlanRecord,
  PortalPhone,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/education/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris-dark px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-deep";
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
    title: "Fees that are due",
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
    body: "The referral keeps the name of the person who made the introduction.",
  },
  {
    title: "Admission",
    body: "Admitted is a status on the referral, so the introduction is credited when the student joins.",
  },
  {
    title: "Fee plan",
    body: "The plan shows the price, what has been paid, and its status, such as Active or Payment Due.",
  },
  {
    title: "Follow-up",
    body: "A plan marked Payment Due names the counselor who enrolled the student, so they know whom to call.",
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
      "Fee payment status",
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
      "Crash-course fee plans",
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
  "Fee plans with payment status",
];

const proofs = [
  {
    title: "See which campuses were covered",
    body: "A visit list shows check-ins, planned stops, and campuses nobody has visited.",
    frame: <VisitHistory />,
  },
  {
    title: "Check in from the counselor’s phone",
    body: "GPS, notes, and a photo stamped with the place and time stay on the visit.",
    frame: <VisitRecord />,
  },
  {
    title: "Give parents and alumni a login",
    body: "They log in from any phone browser and see whether each student they sent has joined.",
    frame: <PortalPhone />,
  },
  {
    title: "Know who referred each student",
    body: "Each referral keeps the parent or alum who sent the student, and shows whether they joined.",
    frame: <ReferralDesk />,
  },
  {
    title: "Show unpaid fees to the field team",
    body: "A fee plan shows what has been paid and whether a payment is due.",
    frame: <FeePlanList />,
  },
  {
    title: "Read the loop, not a vanity chart",
    body: "Analytics show visits and referrals by person, referrer, and region.",
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
      a: "Yes. Set up each campus as a region in one workspace. Counselors check in at the campus they are covering.",
    },
    {
      q: "Can we track counselor visits outside our institution?",
      a: "Yes. Counselors check in with GPS and a photo at the schools, colleges, and tuition centres they visit, not only your own building. Location is recorded only during the working day. The record is the visit, not a live map of the evening.",
    },
    {
      q: "Can parents and alumni refer students without installing an app?",
      a: "Yes. They log in at app.syclops.in in any phone browser with a one-time code, and see only the students they referred. They do not install the field app, and referrer logins are not billed as field seats.",
    },
    {
      q: "Can we import existing student enquiry data?",
      a: "Yes. Staff, areas, referrers, and leads upload from spreadsheet (CSV) templates.",
    },
    {
      q: "Can we track fee payments that are due?",
      a: "On Growth, a fee plan shows the price, what has been paid, and its status, such as Active or Payment Due. Fees can be recorded as cash, including part payments, or UPI, or paid online through Razorpay, which our team connects with you. Syclops does not build instalment schedules, and it does not replace your accounts system.",
    },
    {
      q: "Are parent and alumni accounts billed?",
      a: "No. Referrer logins are not billed as field seats. You pay for field seats and manager seats.",
    },
    {
      q: "Can coaching institutes use Syclops?",
      a: "Yes. Coaching institutes use the same loop: student enquiries, counselor visits, parent or alumni referrals, and a course fee plan.",
    },
    {
      q: "Does the app use education words?",
      a: "Partly. The phone screens say referrers and referred users. Some forms and the admin dashboard still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. The steps are the same.",
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
            and fees that are due in one connected system. Keep your existing
            academic ERP.
          </p>
          <div id="education-hero-cta" className="mt-8 flex flex-wrap gap-3">
            <EducationLink
              href={startHref("hero")}
              event="education_hero_trial_click"
              params={{ cta_location: "hero" }}
              className={`${primary} ${educationFocus}`}
            >
              Start free trial
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
                  body: "A visit plan for the week, and a list of campuses nobody has visited.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in, and only during the working day.",
                },
                {
                  title: "Visit history",
                  body: "Each visit keeps its notes and photo, so the next counselor sees what happened.",
                },
                {
                  title: "Notes and follow-ups",
                  body: "A visit records why the counselor went and what was said, so the next visit starts there.",
                },
                {
                  title: "Campus and territory coverage",
                  body: "Campuses are regions. Counselors check in at the school, college, or tuition centre they are covering.",
                },
                {
                  title: "Activity you can review",
                  body: "Managers see the visit list, and analytics can be filtered by region.",
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
              Track parent and alumni introductions, admission status, and fee
              plans in one place.
            </p>
            <FeatureList
              items={[
                {
                  title: "Parent or alumni referrer",
                  body: "The sender is a named referrer, not a source dropdown that disappears after admission.",
                },
                {
                  title: "Student details",
                  body: "Name and mobile number stay on the referral, and the same mobile number cannot be referred twice.",
                },
                {
                  title: "A login for referrers",
                  body: "Parents, alumni, or teachers log in with a one-time code and see the students they sent.",
                },
                {
                  title: "Enquiry and admission status",
                  body: "Each referral shows whether the student came in and joined, or why not.",
                },
                {
                  title: "Referrals and fee plans together",
                  body: "Referrals and fee plans sit in the same workspace, so the counselor sees both.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/referral-portal" className={textLink}>
                Referrers guide
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
              Fee follow-ups
            </p>
            <h2 id="education-fees" className="display mt-3 text-3xl font-semibold tracking-tight">
              Make unpaid fees visible to the field team.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Every fee plan shows what has been paid and whether a payment is due,
              so the right person knows which student needs a call.
            </p>
            <FeatureList
              items={[
                {
                  title: "Student and programme",
                  body: "The fee plan is the programme: a semester, a degree year, or a crash course.",
                },
                {
                  title: "Part payments",
                  body: "The desk records the cash amount collected, even when it is only part of the fee.",
                },
                {
                  title: "Payment status",
                  body: "Each plan shows its status, such as Active or Payment Due, and how the fee came in: online through Razorpay, or cash or UPI recorded by staff.",
                },
                {
                  title: "Not a ledger",
                  body: "The plan price is what the follow-up is about. Syclops does not build instalment schedules or replace your accounts.",
                },
                {
                  title: "Who enrolled the student",
                  body: "Each fee plan keeps the counselor who enrolled the student, so follow-ups have an owner.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Fee plans are on Growth. Syclops does not replace your accounts
              system.{" "}
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <FeePlanRecord />
            <FeePlanList />
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
            From the first campus visit to the fee payment.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps happen in one app, so nobody retypes the same student in
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
            a fee plan, and visits turning into admissions. They are not a
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
            and alumni logins are not billed as field seats. Visits and referrals
            are on Team, and fee plans are on Growth. {trialDays} days free · No
            credit card required.
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
                <EducationLink
                  href={startHref("pricing")}
                  event="education_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${educationFocus} ${
                    plan.featured
                      ? "bg-iris-dark text-cream hover:bg-iris-deep"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start free trial
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
                  body: "Counselor visits for fees that are due.",
                },
                {
                  href: "/guides/import-from-excel",
                  label: "Upload from a spreadsheet",
                  body: "Staff, areas, and referrers from CSV templates.",
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
              Start free trial
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
      <EducationStickyCta label="Start free trial" />
    </>
  );
}
