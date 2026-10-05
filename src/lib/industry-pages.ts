import type { IndustryId } from "@/lib/industries";

export const industryPages: Record<
  IndustryId,
  {
    day: { title: string; body: string }[];
    configure: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  gyms: {
    day: [
      { title: "Floor visits", body: "Trainers check in at the club. Walk-ins and PT intros are visits, not WhatsApp notes." },
      { title: "Member refers", body: "A member shares the portal. The friend joins on a membership that still knows who sent them." },
      { title: "Renewal risk", body: "Unused visits or a failed debit become a trainer task before the member ghosts." },
    ],
    configure: [
      "Clubs as regions, trainers as field seats",
      "Membership plans and freeze rules",
      "Member portal + QR at reception",
      "Razorpay or UPI for renewals",
    ],
    faqs: [
      { q: "Do I still need gym software?", a: "Keep it for class booking if you want. Syclops owns referral origin, field proof, and whether the membership still pays." },
      { q: "Can members refer without an app?", a: "Yes. The portal is a link or QR. They do not need a field seat." },
    ],
  },
  education: {
    day: [
      { title: "Campus beats", body: "Counselors check in at schools and tuition centres. Enquiry is a visit attached to a campus." },
      { title: "Alumni intro", body: "A parent or alum sends a student. Status is admitted and fee-plan, not a rumour." },
      { title: "Installments", body: "Unpaid term fees write a counselor task, not only an accounts SMS." },
    ],
    configure: [
      "Clusters, campuses, and counselor seats",
      "Programmes as plans with installments",
      "Alumni / parent portal",
      "Fee gateway in Integrations",
    ],
    faqs: [
      { q: "Does this replace the academic ERP?", a: "No. It sits beside it. Referrals and field coverage are the loop. Marks stay in the ERP." },
      { q: "Can we import last year’s enquiries?", a: "CSV of campuses and students. Last-visit can be empty." },
    ],
  },
  healthcare: {
    day: [
      { title: "Partner clinics", body: "Health officers check in with geo and a visiting-card photo." },
      { title: "Care-plan enroll", body: "The referred patient lands on a 30/60/90-day plan, not a one-off bill." },
      { title: "Lapse", body: "A lapsed plan is a field task for the officer who owns that clinic." },
    ],
    configure: [
      "Clusters and clinic directory",
      "Care plans and dunning",
      "Clinic portal for referrals",
      "Billing or HIS connector on Scale",
    ],
    faqs: [
      { q: "Is this a hospital HIS?", a: "No. It is field, referral, and plan for clinics and care networks. HIS stays the system of record for clinical charts." },
      { q: "What about patient data?", a: "Plan and referral status only. Retention and export live in Settings → Data." },
    ],
  },
  sales: {
    day: [
      { title: "Beat", body: "Reps check in at dealers and accounts. Last-visit dates stop skipped patches." },
      { title: "Partner lead", body: "A channel partner sends a lead. Won means a retainer, not a vanished WhatsApp forward." },
      { title: "Renewal", body: "At-risk retainers go back on the beat automatically." },
    ],
    configure: [
      "Territories and account types",
      "Retainer plans",
      "Partner portal",
      "TADA rate card",
    ],
    faqs: [
      { q: "We already have a CRM.", a: "Keep it for long deals if you must. Syclops is the visit, the partner intro, and the recurring contract." },
      { q: "Can managers approve TADA?", a: "Yes. Rate card in Settings. Approval is a queue, not email." },
    ],
  },
  fintech: {
    day: [
      { title: "Doorstep", body: "Agents check in at the customer. KYC photo is a visit attachment." },
      { title: "Family referral", body: "A customer sends a spouse or parent. The policy is a plan with a premium date." },
      { title: "Lapse", body: "Missed premium writes an agent task with the original referrer attached." },
    ],
    configure: [
      "Branches and agent seats",
      "Policy / SIP as plans",
      "Customer referral portal",
      "Premium gateway",
    ],
    faqs: [
      { q: "Does this replace the insurer core?", a: "No. Core stays core. Syclops is field proof, referral origin, and whether the premium still pays." },
      { q: "Is GPS always on?", a: "Only on a working day between check-in and check-out. Retention is a setting." },
    ],
  },
  medtech: {
    day: [
      { title: "KOL visit", body: "Clinical reps check in at the department. Badge photo is optional proof." },
      { title: "Eval → contract", body: "A department head refers another site. Conversion is a device + service plan." },
      { title: "Service window", body: "A lapsed service plan is a field task, not a forgotten email." },
    ],
    configure: [
      "Territories and hospital accounts",
      "Device + service plans",
      "Department portal",
      "ERP connector on Scale",
    ],
    faqs: [
      { q: "Can we track evaluations?", a: "Yes. Evaluation is a referral status before converted. The contract is the plan." },
      { q: "Multi-country?", a: "Scale plan. Separate workspaces or multi-city in Settings." },
    ],
  },
};
