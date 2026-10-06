import type { IndustryId } from "@/lib/industries";

export const industryPages: Record<
  IndustryId,
  {
    why: string;
    jobs: { title: string; body: string }[];
    day: { title: string; body: string }[];
    configure: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  gyms: {
    why: "Indian gym software is strong at door attendance, GST invoices, and class booking. Member referrals still live on a whiteboard, and a failed debit rarely becomes a trainer visit. Syclops is gym referral software plus field tracking — not a replacement for your floor ERP.",
    jobs: [
      { title: "Member-get-member that pays", body: "A friend joins on a membership that still knows who sent them. Rewards hit the next invoice after your qualification window." },
      { title: "Trainer field days", body: "Check-in at the club, PT intros as visits, TADA if trainers travel between centres." },
      { title: "Churn as a beat", body: "Unused visits or a failed UPI mandate write a trainer task before the member ghosts." },
    ],
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
      { q: "Do I still need gym management software?", a: "Keep it for class booking and door access if you want. Syclops owns referral origin, field proof, and whether the membership still pays." },
      { q: "Can members refer without an app?", a: "Yes. The portal is a link or QR. They do not need a field seat." },
      { q: "Does Syclops do biometric gym attendance?", a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and paying memberships." },
      { q: "Multi-centre chains?", a: "Clubs as regions on Team/Growth. Multi-brand / multi-city on Scale." },
    ],
  },
  education: {
    why: "Enquiry Excel, counselor calls, and the accounts office rarely agree on which alumni intro still pays. Syclops is for campus beats and semester fee plans — not an academic ERP for marks and timetable.",
    jobs: [
      { title: "Counselor coverage", body: "Check-in at schools and tuition centres. Enquiry is a visit attached to a campus, with last-visit dates that stop skipped patches." },
      { title: "Alumni and parent referrals", body: "Status is admitted and on a fee plan, not a rumour in a WhatsApp group." },
      { title: "Installments as field work", body: "Unpaid term fees write a counselor task, not only an accounts SMS." },
    ],
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
      { q: "Coaching institutes as well as schools?", a: "Yes. Same loop: counselor visit, alumni or parent intro, semester or crash-course fee plan." },
    ],
  },
  healthcare: {
    why: "Partner clinics ask for patient status every afternoon because referrals live in WhatsApp and plans live at the billing desk. Syclops is field outreach and care-plan software for clinics and care networks — not a hospital HIS.",
    jobs: [
      { title: "Partner clinic beats", body: "Health officers check in with geo and a visiting-card photo. Skip is a status, not silence." },
      { title: "Clinic referral portal", body: "Partners send patients and see enroll vs lapse without calling your desk." },
      { title: "Care plans that write tasks", body: "30/60/90-day plans. A lapse is a field task for the officer who owns that clinic." },
    ],
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
      { q: "Diagnostics and collection networks?", a: "Yes. Partner sites as the beat, referred patients on a plan, lapses back on the officer’s list." },
    ],
  },
  sales: {
    why: "Traditional CRM is a pipeline of deals. Indian field sales still runs on beat sheets, dealer visits, and channel partners who forward leads on WhatsApp. Syclops is the visit, the partner intro, and the retainer — not an FMCG order-booking DMS.",
    jobs: [
      { title: "Beat visits", body: "Reps check in at dealers and accounts. Last-visit dates stop skipped patches. TADA writes from the route." },
      { title: "Channel partner portal", body: "A forwarded lead becomes a named referral with status through won and paying." },
      { title: "Retainers that renew", body: "At-risk contracts go back on the beat automatically instead of dying in a CRM stage." },
    ],
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
      { q: "Is this SFA for FMCG distribution?", a: "No. It does not book secondary orders or sync distributor stock. It is beat visits, partner referrals, and retainers." },
    ],
  },
  fintech: {
    why: "MIS in Excel, lapses in the insurer or NBFC core, agents reporting on a call. Syclops tracks the doorstep visit, the family referral, and whether the premium or SIP still pays — it does not replace the insurer core.",
    jobs: [
      { title: "Agent home visits", body: "Check-in at the customer. KYC photo is a visit attachment. Mock locations are flagged." },
      { title: "Customer referrals", body: "A spouse or parent is a named intro on a policy or SIP with a premium date." },
      { title: "Lapse as a field task", body: "Missed premium writes an agent task with the original referrer still attached." },
    ],
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
      { q: "NBFC collections vs growth loop?", a: "Syclops is enrollment, referral, and renewal tasks — not a legal-notice collections stack." },
    ],
  },
  medtech: {
    why: "KOL visits in a field app, evaluations in email, device contracts in another system. Syclops keeps the department referral on the service plan when revenue lands.",
    jobs: [
      { title: "KOL and department visits", body: "Clinical reps check in. Badge photo is optional proof. Duration and notes stay on the account." },
      { title: "Eval to contract", body: "A department head refers another site. Conversion is a device plus service plan, not a vanished thread." },
      { title: "Service windows", body: "A lapsed service plan is a field task, not a forgotten email." },
    ],
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
      { q: "Does this replace the ERP?", a: "No. Invoices can flow in on Scale. Origin — the KOL visit and the referring department — stays in Syclops." },
    ],
  },
};
