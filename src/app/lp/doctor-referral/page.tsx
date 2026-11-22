import type { Metadata } from "next";
import Link from "next/link";
import { SampleReferral } from "@/components/sample-referral";
import { FocusSignupButton, SignupForm } from "@/components/signup-form";
import { getBillingConfig } from "@/lib/billing";
import { formatInr, publicPlans } from "@/lib/plans";
import { supportEmail } from "@/lib/site";

const LOCATION = "lp_doctor_referral";

export const metadata: Metadata = {
  title: { absolute: "Doctor referral tracking for hospitals | Syclops" },
  description:
    "See which doctors send you patients and who your PROs should visit next. PROs log each doctor visit with GPS and a photo. 14 days free, no card.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    title: "Your PRO checks in at the clinic",
    body: "The visit is saved with the doctor’s name, the phone’s GPS location and a photo.",
  },
  {
    title: "The doctor refers a patient",
    body: "Your PRO, or your front desk, records the referral against that doctor.",
  },
  {
    title: "You see the patient arrive",
    body: "Each referral moves from Pending to Arrived, Admitted and Discharged, so you know which doctors really send patients.",
  },
];

export default async function DoctorReferralLandingPage() {
  const billing = await getBillingConfig();
  const days = billing.trial.days;
  const team = publicPlans.find((plan) => plan.name === "Team") ?? publicPlans[0];
  const example = 3;

  const faqs = [
    {
      q: "Is patient data safe, and where is it stored?",
      a: "Each hospital gets its own database, kept apart from every other customer’s. Personal details such as names and phone numbers are encrypted in that database, and the app reaches it only over HTTPS. Only the people you give a login can see your records. Email us if you need the hosting details in writing.",
    },
    {
      q: "Do referring doctors need a paid seat?",
      a: "No. You pay for field staff, such as your PROs. Doctors who refer patients are never billed as seats.",
    },
    {
      q: "Does it work on our PROs’ Android phones?",
      a: "Yes. PROs install the Syclops Android app from our website, or open app.syclops.in in the phone’s browser. Visits use the phone’s GPS and camera.",
    },
    {
      q: `What happens after ${days} days?`,
      a: "Access stops until you choose a plan. We never ask for a card, so nothing is charged automatically. To continue, tell us how many PROs you have and we send an invoice or a payment link.",
    },
  ];

  return (
    <>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-10 pt-5 sm:px-5 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-x-14 lg:pt-14">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-iris-dark">
            Doctor referral tracking for hospitals
          </p>
          <h1 className="display mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            See which doctors send you patients, and who to visit next.
          </h1>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted">
            Your PROs log each doctor visit with GPS and a photo. You see every
            patient they refer and where each one stands.
          </p>
        </div>
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <SignupForm
            location={LOCATION}
            trialDays={days}
            workflow="doctor-referral"
            industry="healthcare"
            showLogin={false}
          />
        </div>
        <div className="max-w-xl">
          <SampleReferral />
        </div>
      </section>

      <section className="border-t border-line bg-quiet">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-5 sm:py-14">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            From doctor visit to admitted patient
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line bg-cream p-5">
                <p className="display text-lg font-semibold text-iris-dark">{index + 1}</p>
                <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-5 sm:py-14">
        <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
          Built from a working hospital referral team.
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          Syclops began as the in-house system of a hospital network in
          India, where PROs used it every day to log doctor visits and the
          patients those doctors referred. We turned it into a product any
          hospital can set up on its own.
        </p>
      </section>

      <section className="border-t border-line bg-quiet">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-5 sm:py-14">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            Pay per PRO, not per doctor
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-cream p-5">
              <p className="text-sm text-muted">{team.name} plan</p>
              <p className="mt-1 display text-3xl font-semibold">
                {formatInr(team.priceInr)}
              </p>
              <p className="text-sm text-muted">per field seat a month</p>
              <p className="mt-4 rounded-lg bg-quiet px-3 py-2 text-sm">
                {example} PROs on {team.name}:{" "}
                <span className="font-semibold">
                  {formatInr(team.priceInr * example)} a month
                </span>
              </p>
            </div>
            <ul className="grid content-start gap-3 text-sm leading-6 text-muted">
              <li>
                <span className="font-medium text-ink">Doctors need no seat.</span>{" "}
                Only field staff, such as PROs, count as seats.
              </li>
              <li>
                <span className="font-medium text-ink">{days} days free.</span> No
                card, so nothing is charged when the trial ends.
              </li>
              <li>
                <span className="font-medium text-ink">Then an invoice.</span> We
                send an invoice or a payment link for the seats you need.
              </li>
              <li>
                <Link href="/pricing" className="font-medium text-ink underline underline-offset-2">
                  See every plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-5 sm:py-14">
        <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
          Questions hospitals ask
        </h2>
        <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-cream">
          {faqs.map((item) => (
            <details key={item.q} className="group px-5 py-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {item.q}
                <span aria-hidden="true" className="text-muted transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-6 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          Something else? Email{" "}
          <a href={`mailto:${supportEmail}`} className="font-medium text-ink underline underline-offset-2">
            {supportEmail}
          </a>
          .
        </p>
      </section>

      <section className="border-t border-line bg-quiet">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-10 sm:px-5 sm:py-14">
          <h2 className="display text-2xl font-semibold tracking-tight sm:text-3xl">
            Start with your next doctor visit.
          </h2>
          <FocusSignupButton location={LOCATION}>
            Start my {days}-day free trial
          </FocusSignupButton>
          <p className="text-sm text-muted">No credit card. No sales call needed.</p>
        </div>
      </section>
    </>
  );
}
