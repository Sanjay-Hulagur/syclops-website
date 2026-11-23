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
    why: "Indian gym software is strong at door attendance, GST invoices, and class booking. Member referrals still live on a whiteboard, and nobody calls the member whose payment is due. Syclops is gym referral software plus field tracking — not a replacement for your floor ERP.",
    jobs: [
      { title: "Member-get-member that pays", body: "Each referral keeps the name of the member who sent the friend. Record the reward and approve it before it is paid." },
      { title: "Trainer field days", body: "GPS check-in at each visit, PT intros as visits, and TA/DA if trainers travel between centres." },
      { title: "Payments due, visible", body: "Each membership shows what has been paid and what is still due, so someone knows whom to call." },
    ],
    day: [
      { title: "Floor visits", body: "Trainers check in at the club. Walk-ins and PT intros are visits, not WhatsApp notes." },
      { title: "Member refers", body: "A member shares your referral page. The referral keeps their name when the friend joins." },
      { title: "Payment due", body: "A membership with a payment due shows it, so a trainer or the desk can follow up." },
    ],
    configure: [
      "Centres as regions, trainers as field seats",
      "Membership plans, prices, and durations",
      "A referral page for members",
      "Cash, UPI, EMI, or Razorpay payments",
    ],
    faqs: [
      { q: "Do I still need gym management software?", a: "Keep it for class booking and door access if you want. Syclops covers who referred each member, field proof, and whether the member has paid." },
      { q: "Can members refer without an app?", a: "Yes. They use your referral page in a browser. They do not need a field seat." },
      { q: "Does Syclops do biometric gym attendance?", a: "No. Floor punch-in stays in your gym software. Syclops tracks trainer visits, referred joins, and paying memberships." },
      { q: "Multi-centre chains?", a: "Set up each centre as a region, then filter staff and reports by region." },
      { q: "Does the app use gym words?", a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say partners and members. The steps are the same." },
    ],
  },
  education: {
    why: "Enquiry Excel, counselor calls, and the accounts office rarely agree on which alumni referral turned into an admission. Syclops is for counselor visits and fee plans — not an academic ERP for marks and timetable.",
    jobs: [
      { title: "Counselor coverage", body: "GPS check-in at schools and tuition centres, with notes on each visit. See which ones nobody has visited." },
      { title: "Alumni and parent referrals", body: "Each referral keeps the name of who sent the student, and shows whether they joined." },
      { title: "Fee instalments", body: "Fee plans with EMI schedules show each due date, so a counselor knows whom to call." },
    ],
    day: [
      { title: "School visits", body: "Counselors check in at schools and tuition centres, with notes on whom they met." },
      { title: "Alumni referral", body: "A parent or alum sends a student through your referral page. The status shows whether they joined." },
      { title: "Instalments", body: "Each fee plan shows the next due date, so the counselor or the accounts office can follow up." },
    ],
    configure: [
      "Areas, schools, and counselor seats",
      "Programmes as plans with instalments",
      "A referral page for alumni and parents",
      "Online fee payments through Razorpay",
    ],
    faqs: [
      { q: "Does this replace the academic ERP?", a: "No. It sits beside it. Referrals and field coverage live in Syclops. Marks stay in the ERP." },
      { q: "Can we upload our counselors from Excel?", a: "Yes. Staff and areas upload from an Excel template. Schools you visit are added from the phone or in the admin console." },
      { q: "Coaching institutes as well as schools?", a: "Yes. Same steps: counselor visit, alumni or parent referral, then a semester or crash-course fee plan." },
      { q: "Does the app use education words?", a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say schools and students. The steps are the same." },
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
      { q: "Can we pay referral doctors from bills?", a: "Yes. Upload bills, set payout rules by bill category, and approve each payout before it is paid." },
      { q: "Diagnostic centres?", a: "Yes. Doctor outreach, field activity, and referral source reporting. Laboratory systems stay in place." },
    ],
  },
  sales: {
    why: "Traditional CRM is a pipeline of deals. Indian field sales still runs on beat sheets, dealer visits, and channel partners who forward leads on WhatsApp. Syclops is the visit, the partner referral, and the recurring contract — not an FMCG order-booking DMS.",
    jobs: [
      { title: "Dealer visits", body: "Reps check in at dealers and accounts with GPS and photos. TA/DA comes from the distance travelled." },
      { title: "Channel partner referrals", body: "A forwarded lead becomes a named referral, with a status the partner can see." },
      { title: "Accounts nobody visits", body: "See which accounts have never been visited, and which are visited but never send business." },
    ],
    day: [
      { title: "Visits", body: "Reps check in at dealers and accounts, following the week’s visit plan." },
      { title: "Partner lead", body: "A channel partner sends a lead through your referral page. It keeps their name until it converts or is lost." },
      { title: "Review", body: "Managers see each rep’s visits and the referrals that followed." },
    ],
    configure: [
      "Territories and accounts",
      "Sales staff and field seats",
      "A referral page for channel partners",
      "TA/DA amounts by distance",
    ],
    faqs: [
      { q: "We already have a CRM.", a: "Keep it for long deals if you must. Syclops is the visit, the partner referral, and the recurring contract." },
      { q: "Can we set TA/DA amounts?", a: "Yes. Set the allowance for each distance range. Staff see their daily and monthly TA/DA in the app." },
      { q: "Is this SFA for FMCG distribution?", a: "No. It does not book secondary orders or sync distributor stock. It is dealer visits, partner referrals, and plans." },
      { q: "Does the app use sales words?", a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say dealers and customers. The steps are the same." },
    ],
  },
  fintech: {
    why: "MIS in Excel, lapses in the insurer or NBFC core, agents reporting on a call. Syclops tracks the doorstep visit, the family referral, and whether the customer has paid — it does not replace the insurer core.",
    jobs: [
      { title: "Agent home visits", body: "Check in at the customer with GPS and photos. ID proof is captured when a plan is sold." },
      { title: "Customer referrals", body: "A spouse or parent is a named referral that keeps the name of who sent them." },
      { title: "Instalments", body: "EMI plans show each due date, so agents know whom to visit." },
    ],
    day: [
      { title: "Doorstep", body: "Agents check in at the customer with GPS and photos." },
      { title: "Family referral", body: "A customer sends a spouse or parent. The referral keeps the name of who sent them." },
      { title: "Payment due", body: "A plan with a payment due shows it, so the agent knows to go back." },
    ],
    configure: [
      "Areas and agent seats",
      "Policies or SIPs as plans with EMI",
      "A referral page for customers",
      "Online payments through Razorpay",
    ],
    faqs: [
      { q: "Does this replace the insurer core?", a: "No. Core stays core. Syclops is field proof, who referred the customer, and whether they have paid." },
      { q: "Is GPS always on?", a: "No. Location is recorded only during the working day." },
      { q: "NBFC collections vs growth?", a: "Syclops is enrollment, referrals, and follow-up visits for payments due — not a legal-notice collections stack." },
      { q: "Does the app use our words?", a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say partners and customers. The steps are the same." },
    ],
  },
  medtech: {
    why: "KOL visits in a field app, evaluations in email, device contracts in another system. Syclops keeps the department referral attached to the plan it led to.",
    jobs: [
      { title: "KOL and department visits", body: "Clinical reps check in with GPS and photos. Notes stay on the account." },
      { title: "Eval to contract", body: "A department head refers another site. Conversion is a device plus service plan, not a vanished thread." },
      { title: "Service plans", body: "Each service plan shows its end date and any payment due." },
    ],
    day: [
      { title: "KOL visit", body: "Clinical reps check in at the department with GPS and photos." },
      { title: "Eval → contract", body: "A department head refers another site. Conversion is a device + service plan." },
      { title: "Service plan", body: "Each plan shows its end date and any payment due, so the rep knows when to go back." },
    ],
    configure: [
      "Territories and hospital accounts",
      "Device and service plans",
      "A referral page for departments",
      "ERP connector on Scale",
    ],
    faqs: [
      { q: "Can we track evaluations?", a: "Log each evaluation as a visit with notes. The referral stays open until it converts or is lost." },
      { q: "Multi-country?", a: "Each country can run as its own workspace. Talk to us about Scale." },
      { q: "Does this replace the ERP?", a: "No. On Scale we connect your ERP, set up for your system. The KOL visit and the referring department stay in Syclops." },
    ],
  },
};
