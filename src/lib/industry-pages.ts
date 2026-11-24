import type { IndustryId } from "@/lib/industries";

const vocabularyAnswer =
  "Partly. The phone screens say referrers and referred users. Some forms and the admin dashboard still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. The steps are the same.";

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
    why: "Indian gym software is strong at door attendance, GST invoices, and class booking. Member referrals still live on a whiteboard, and nobody calls the member whose payment is due. Syclops is gym referral software plus field tracking — not a replacement for your floor ERP.",
    jobs: [
      { title: "Member-get-member you can trace", body: "Each referral keeps the name of the member who sent the friend, and shows whether the friend came in." },
      { title: "Trainer field days", body: "GPS check-in at each visit, PT intros as visits, and TA/DA if trainers travel between centres." },
      { title: "Payments due, visible", body: "Each membership shows what has been paid and what is still due, so someone knows whom to call." },
    ],
    day: [
      { title: "Floor visits", body: "Trainers check in at the club. Walk-ins and PT intros are visits, not WhatsApp notes." },
      { title: "Member refers", body: "A member sends a friend from their own login. The referral keeps their name when the friend joins." },
      { title: "Payment due", body: "A membership with a payment due shows it, so a trainer or the desk can follow up." },
    ],
    configure: [
      "Centres as regions, trainers as field seats",
      "Membership plans, prices, and durations",
      "Referrer logins for members",
      "Cash, UPI, or Razorpay payments",
    ],
    faqs: [
      { q: "Do I still need gym management software?", a: "Keep it for class booking and door access if you want. Syclops covers who referred each member, field proof, and whether the member has paid." },
      { q: "Do members need to install an app to refer?", a: "No. They can log in at app.syclops.in in any phone browser, or install the Android app. They do not need a field seat." },
      { q: "Does Syclops do biometric gym attendance?", a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and paying memberships." },
      { q: "Multi-centre chains?", a: "Set up each centre as a region, then filter staff and reports by region." },
      { q: "Does the app use gym words?", a: vocabularyAnswer },
    ],
  },
  education: {
    why: "Enquiry Excel, counselor calls, and the accounts office rarely agree on which alumni referral turned into an admission. Syclops is for counselor visits, referrals, and fee plans — not an academic ERP for marks and timetable.",
    jobs: [
      { title: "Counselor coverage", body: "GPS check-in at schools and tuition centres, with notes on each visit. See which ones nobody has visited." },
      { title: "Alumni and parent referrals", body: "Each referral keeps the name of who sent the student, and shows whether they joined." },
      { title: "Fees due", body: "Each fee plan shows what has been paid and its status, such as Payment Due, so a counselor knows whom to call." },
    ],
    day: [
      { title: "School visits", body: "Counselors check in at schools and tuition centres, with notes on whom they met." },
      { title: "Alumni referral", body: "A parent or alum sends a student from their own login. The status shows whether they joined." },
      { title: "Fees due", body: "A fee plan marked Payment Due names the counselor who enrolled the student, so they or the accounts office can follow up." },
    ],
    configure: [
      "Areas and counselor seats",
      "Programmes as plans with prices and durations, set up with our team",
      "Referrer logins for alumni, parents, and teachers",
      "Online fee payments through Razorpay",
    ],
    faqs: [
      { q: "Does this replace the academic ERP?", a: "No. It sits beside it. Referrals and field coverage live in Syclops. Marks stay in the ERP." },
      { q: "Can we upload our counselors from a spreadsheet?", a: "Yes. Staff, areas, and referrers such as teachers upload from spreadsheet (CSV) templates." },
      { q: "Coaching institutes as well as schools?", a: "Yes. Same steps: counselor visit, alumni or parent referral, then a semester or crash-course fee plan." },
      { q: "Does the app use education words?", a: vocabularyAnswer },
    ],
  },
  healthcare: {
    why: "Referral doctors, PRO visits, and patient referrals usually live in different places. Syclops connects that field work for hospitals and diagnostic centres. It is not a hospital HIS.",
    jobs: [
      { title: "Referral doctors", body: "Specialty, territory, last visit, and the PRO who owns the relationship." },
      { title: "PRO visits", body: "Planned visits, GPS check-in, notes, and TA/DA from the distance travelled." },
      { title: "Patient referrals", body: "The referring doctor stays on the referral. An OP or IP match needs an HIS connector." },
    ],
    day: [
      { title: "Doctor visit", body: "A PRO checks in at the clinic. Notes and the follow-up stay on that doctor." },
      { title: "Patient referral", body: "The referral names the doctor who sent the patient." },
      { title: "Outcome", body: "A hospital visit or admission is attached where an HIS connector supports it." },
    ],
    configure: [
      "Territories and the doctor directory",
      "PRO field seats",
      "A referral page for doctors, on Growth",
      "HIS connector on Scale",
    ],
    faqs: [
      { q: "Is this a hospital HIS?", a: "No. Clinical charts, billing, and OPD or IPD workflows stay in the HIS. Syclops is the referral and field layer." },
      { q: "Can we track which doctor referred a patient?", a: "Yes. The referring doctor, date, and status stay on the referral." },
      { q: "Can we pay referral doctors from Syclops?", a: "Not today. Syclops shows which doctor sent each patient and what happened, so your accounts team can work out what is owed. Payments to doctors happen outside the app." },
      { q: "Diagnostic centres?", a: "Yes. Doctor outreach, field activity, and referral source reporting. Laboratory systems stay in place." },
    ],
  },
  sales: {
    why: "Traditional CRM is a pipeline of deals. Indian field sales still runs on beat sheets, dealer visits, and channel partners who forward leads on WhatsApp. Syclops is the visit, the partner referral, and the conversion — not an FMCG order-booking DMS.",
    jobs: [
      { title: "Dealer visits", body: "Reps check in at dealers and accounts with GPS and a photo. TA/DA comes from the distance travelled." },
      { title: "Channel partner referrals", body: "A forwarded lead becomes a named referral, with a status the partner can see." },
      { title: "Accounts nobody visits", body: "See which accounts have never been visited, and which are visited but never send business." },
    ],
    day: [
      { title: "Visits", body: "Reps check in at dealers and accounts, following the week’s visit plan." },
      { title: "Partner lead", body: "A channel partner sends a lead from their own login. It keeps their name, and they can see its status." },
      { title: "Review", body: "Managers see each rep’s visits and the referrals that followed." },
    ],
    configure: [
      "Territories and accounts",
      "Sales staff and field seats",
      "Referrer logins for channel partners",
      "TA/DA amounts by distance",
    ],
    faqs: [
      { q: "We already have a CRM.", a: "Keep it for long deals if you must. Syclops is the visit, the partner referral, and the conversion." },
      { q: "Can we set TA/DA amounts?", a: "Yes. Set the allowance for each distance range. Staff see their daily and monthly TA/DA in the app." },
      { q: "Is this SFA for FMCG distribution?", a: "No. It does not book secondary orders or sync distributor stock. It is dealer visits, partner referrals, and conversions." },
      { q: "Does the app use sales words?", a: vocabularyAnswer },
    ],
  },
  fintech: {
    why: "MIS in Excel, lapses in the insurer or NBFC core, agents reporting on a call. Syclops tracks the doorstep visit, the family referral, the follow-up calls, and the policy or loan it led to — it does not replace the insurer core.",
    jobs: [
      { title: "Agent home visits", body: "Check in at the customer with GPS and a photo stamped with the place and time." },
      { title: "Customer referrals", body: "A spouse or parent is a named referral that keeps the name of who sent them." },
      { title: "Conversions", body: "Record each policy or loan as converted, with the quoted and the final amount." },
    ],
    day: [
      { title: "Doorstep", body: "Agents check in at the customer with GPS and a photo." },
      { title: "Family referral", body: "A customer sends a spouse or parent. The referral keeps the name of who sent them." },
      { title: "Conversion", body: "When the policy is issued, the agent records it as converted." },
    ],
    configure: [
      "Areas and agent seats",
      "Visit plans for each agent",
      "Referrer logins for customers and DSAs",
      "Call outcomes and conversions",
    ],
    faqs: [
      { q: "Does this replace the insurer core?", a: "No. Core stays core. Syclops is field proof, who referred the customer, the calls, and the conversion." },
      { q: "Is GPS always on?", a: "No. Location is recorded only during the working day." },
      { q: "NBFC collections vs growth?", a: "Syclops is for growth: visits, referrals, calls, and conversions. It does not track repayments and is not a collections stack." },
      { q: "Does the app use our words?", a: vocabularyAnswer },
    ],
  },
  medtech: {
    why: "KOL visits in a field app, evaluations in email, referrals in someone’s head. Syclops keeps the KOL visit, the introduction it led to, and the sale in one place.",
    jobs: [
      { title: "KOL and department visits", body: "Clinical reps check in with GPS and a photo. Notes stay on the visit." },
      { title: "Referral to conversion", body: "A KOL introduces a colleague at another hospital. The referral keeps the KOL’s name, and the sale is recorded as a conversion." },
      { title: "Conversions", body: "Each sale is recorded as converted, with the quoted and the final amount." },
    ],
    day: [
      { title: "KOL visit", body: "Clinical reps check in at the department with GPS and a photo." },
      { title: "Referral", body: "A KOL sends an introduction from their own login, and can see its status there." },
      { title: "Follow-up call", body: "Each call after the demo is logged with its outcome." },
    ],
    configure: [
      "Territories and the KOLs you visit",
      "Call outcomes and conversions",
      "Referrer logins for KOLs",
      "Clinical reps as field seats",
    ],
    faqs: [
      { q: "Can we track evaluations?", a: "Log each evaluation as a visit with notes. The referral stays pending through the evaluation, and the sale is recorded as a conversion when it closes." },
      { q: "Do KOLs need to install an app?", a: "No. They can log in at app.syclops.in in any phone browser, or install the Android app." },
      { q: "Does this replace the ERP?", a: "No. Your ERP stays as it is, with contracts and service plans. The KOL visit, the referral, and the conversion stay in Syclops." },
    ],
  },
};
