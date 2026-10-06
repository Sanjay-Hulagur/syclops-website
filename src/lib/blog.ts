export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "channel-partner-portal-not-crm-source-field",
    title: "A channel partner portal is not a CRM source field",
    date: "2026-10-27",
    category: "Sales",
    excerpt:
      "Field sales still paste “partner” into a CRM. The partner cannot see status, and the retainer has no memory of who sent it.",
    body: [
      "Indian field sales teams buy a CRM because the board asked for a pipeline. The beat still lives in WhatsApp. Channel partners still ask “what happened to that intro?” A source dropdown named Partner is not a portal. It is a rumour with a picklist.",
      "A deal pipeline answers whether a named opportunity moved stage. A partner referral answers whether the sender can see sent, accepted, converted, and paying — and whether a retainer or AMC still renews. Those are different objects. Bending Salesforce or Zoho into a beat usually means a customization ticket and an empty source field.",
      "Give partners one URL. They are not paid field seats. Rewards wait on a qualification window. The same phone cannot be referred twice into the same plan. Field seats still check in, walk a beat, and write TADA from the path. When a retainer is at risk, the visit is for the owner of that account, with the partner still on the record.",
      "Keep a CRM if you close five named contracts a quarter. Do not buy CRM for coverage, TADA, or a partner who needs status without calling your desk. Syclops is not FMCG DMS and not a live-map SFA. Create a sales workspace, import the beat, share the portal.",
    ],
  },
  {
    slug: "clinic-referral-portal-vs-whatsapp",
    title: "A clinic referral portal beats a WhatsApp status call",
    date: "2026-10-13",
    category: "Healthcare",
    excerpt:
      "Partner clinics call the desk because status lives in a thread. A portal shows enroll vs lapse without another afternoon of “did they come?”",
    body: [
      "Every care network that grows through partner clinics learns the same afternoon ritual. The referring doctor or centre wants to know whether the patient was accepted, whether a care plan started, and whether they lapsed. The answer lives in a WhatsApp group, a billing clerk, and whoever last saw the file.",
      "That is not a people problem. A chat cannot be the system of record for a referral. Photos of visiting cards sit next to festival forwards. Duplicate names get referred twice. The clinic that sent the patient has no read-only view, so they call.",
      "Clinic referral software has to be a portal the sender can open: sent, accepted, enrolled on a 30/60/90-day plan, paying, or lapsed. Rewards — if you use them — wait on a qualification window. The same phone cannot be referred twice into the same plan. Name mismatches sit in Pending until a manager assigns them.",
      "Field officers still walk the beat. Check-in with geo and a visiting-card photo. Skip is a status, not silence. When a plan lapses, the officer who owns that clinic gets a task. Syclops is not a hospital HIS. Charts, OP billing, and pharmacy stay where they are. Origin and the next visit live here.",
      "WhatsApp can still carry a template when status changes. The thread is a channel. The record is the referral. Turn the partner portal on in Settings, share one URL, and let the clinic see enroll vs lapse without calling the desk.",
    ],
  },
  {
    slug: "counselor-beat-unpaid-fee-installment",
    title: "An unpaid fee installment is a counselor visit, not only an SMS",
    date: "2026-10-20",
    category: "Education",
    excerpt:
      "Accounts can SMS a parent. Coverage still needs a counselor on a campus beat, with the alumni intro attached to the fee plan.",
    body: [
      "Campus growth teams keep three memories that never agree. Enquiry Excel. Counselor call logs. The accounts office list of unpaid term fees. Alumni intros live in a parent WhatsApp group. By the time someone asks which intro still pays, the sheet is a week old.",
      "An unpaid installment is not only a dunning SMS. In India the parent is often waiting on a counselor, a bus route, or a rumour about the programme. Retrying a mandate does not replace a visit at the school or tuition centre that owns that family.",
      "Treat the counselor day as a beat. Check-in at campuses. Enquiry is a visit attached to an account, with last-visit dates that stop skipped patches. Import last year’s Excel if you must — empty last-visit is fine — then stop dual-running the sheet.",
      "Alumni and parent referrals need the same object as a gym member-get-member: status is admitted and on a fee plan, not a rumour. Qualification windows and duplicate-phone rules stop paying for joins that bounce. When a term fee fails, write a counselor task for the person who owns that campus, with the referrer still on the record — they are often the adult who can save the seat.",
      "Syclops does not replace the academic ERP. Marks and timetable stay there. Counselor coverage, alumni origin, and whether the semester plan still pays are the loop. Create an education workspace and let unpaid fees become a visit instead of another accounts SMS.",
    ],
  },
  {
    slug: "dpdp-employee-gps-retention",
    title: "DPDP and employee GPS: retention is a setting, not a forever trail",
    date: "2026-11-03",
    category: "Security",
    excerpt:
      "Field GPS in India has to be purpose-limited. Working-day check-in, checkout that ends the trail, and retention you can actually change.",
    body: [
      "Employee location is personal data. Indian field products that treat live maps as the product collect more than a growth loop needs, and they keep it longer than a working day justifies. DPDP does not require a blog badge. It does require purpose, access control, and a retention you can explain.",
      "Syclops collects GPS as evidence of a field day: check-in starts it, checkout ends it. Managers can see location on that working day. History is the route, not a CCTV feed. Partners never see GPS. Field seats see their own day unless you grant a manager role. Mock-location flags and optional photo EXIF are proof of work, not surveillance theatre.",
      "Retention days for GPS points live in Settings → Security. Who can export personal data is a role. Data subject access and deletion are in Settings → Data — not a mailbox you hope someone reads. Invite expiry and session length are the same screen.",
      "We do not publish SOC 2 or ISO badges on this site. Multi-tenant isolation, TLS, RBAC, and an India hosting region picker on Scale are in the product. If you need a questionnaire, create a workspace and ask. Do not buy field tracking software that cannot name when the trail stops.",
      "TADA still writes from the path. Rank staff by paying outcomes, not kilometres. Privacy and growth are the same design: collect the pin because a visit, referral, or at-risk plan needed it — then delete it on the schedule you set.",
    ],
  },
  {
    slug: "razorpay-memberships-field-dunning",
    title: "Razorpay memberships still need a field visit after retries fail",
    date: "2026-11-10",
    category: "Subscriptions",
    excerpt:
      "Gateway dunning retries the mandate. Indian memberships, fees, and policies often fail for reasons a link cannot see. Then the beat has to move.",
    body: [
      "Razorpay and Stripe are correct at retries, emails, and a hosted page to update the UPI mandate or card. That recovers involuntary churn when the customer lives in a browser. Gym members, campus fee plans, care programmes, retainers, and policies often fail because the person stopped coming, a parent is waiting on a counselor, or cash was always how they paid.",
      "Subscription software that stops at the gateway leaves origin on the floor. Who referred them. Which visit closed. Which field seat owns the account. After your retry schedule exhausts, Syclops can write a field task: who to see, where they were last visited, and which referrer brought them in — because that referrer is often the person who can save the plan.",
      "Cash and desk collections still happen. Staff mark the collection. It attaches to the plan and the referrer. Origin does not die because the money did not come through Razorpay. Quiet usage can write the beat automatically. You configure when that happens; you do not paste an Excel every Monday.",
      "This is not a collections-agency product and not a legal dunning stack. Tax labels, who can void, and freeze rules live in Settings. Connect test keys first. Map plans. Let a failed debit become a visit instead of another dunning email that nobody on the beat will see.",
    ],
  },
  {
    slug: "kol-dsa-referral-loops",
    title: "KOL visits and DSA beats are the same loop with different nouns",
    date: "2026-11-17",
    category: "Industries",
    excerpt:
      "Medtech KOLs and fintech DSAs both send someone, need status, and need a field day when the contract or policy lapses.",
    body: [
      "Medtech field teams visit KOLs and hospital departments. Fintech and insurance teams run DSA and agent beats. The nouns differ. The leak is the same: the intro lives in WhatsApp, the visit lives in a GPS app, and the device contract or policy lives in billing.",
      "A KOL who sends a department wants to know whether the account converted to a contract, not whether your rep’s pin was inside a geofence. A DSA who sent a borrower or a policyholder wants to know whether that plan still pays. Status the sender can see is the product. Rewards wait on a qualification window. Duplicate phone or email cannot be referred twice into the same plan.",
      "Field days stay first-class. Check-in at the hospital or the agent’s patch. TADA from the path. When a device contract goes quiet or a premium lapses, write a visit for the owner of that beat — not only an SMS from collections. Syclops is not FMCG DMS, not an HIS, and not a core policy admin system. It sits beside those tools for origin and the next visit.",
      "Pick medtech or fintech at signup. Rename visit, referrer, and plan if your words differ. The portal is still one URL. Referrers are still not paid seats. Create a workspace and stop running three partial memories for the same introduction.",
    ],
  },
  {
    slug: "tada-is-the-path-not-the-pin",
    title: "TADA should be the path you walked, not a pin-to-pin guess",
    date: "2026-10-06",
    category: "Field",
    excerpt:
      "Morning pin times evening pin is not a field day. Mileage has to be the route between check-in and checkout, on the same record as the visit.",
    body: [
      "Field TADA in India is still often two GPS points and a multiplier. The claim looks clean in Excel. It is wrong the moment the beat is not a straight line: a skipped clinic, a second campus, a member who needed a return visit after a failed debit.",
      "Pin-to-pin also invites the wrong argument. Staff fight kilometres. Managers fight inflating. Nobody asks whether the day created a named intro or saved a plan. You can pay more TADA and still leak referrals.",
      "Treat TADA as the path between check-in and checkout. The working day starts when geo is required. Visits attach to accounts. Checkout closes the route so mileage is the line walked, not a chord between two stamps. Mock locations can still be flagged. Photo can still be required. None of that replaces a rate card and a manager who approves the sheet.",
      "TADA software is not payroll punch-in and not a live CCTV map. Statutory attendance can stay in HR. Partners never see GPS. Location is collected on a working day; retention is a setting. Rank people by paying outcomes. Kilometres are a cost, not a scoreboard.",
      "If you already bought a GPS-only tracker, it will keep proving pins. Import the beat list so the next day has accounts, last-visit dates, and at-risk plans on top. Then mileage has somewhere to sit. Syclops writes TADA from that path and keeps the visit on the referral and the subscription.",
      "Set the rate (per km, daily cap) in Settings. Invite field seats. The sheet appears after checkout. That is field force TADA in service of the loop — not another WhatsApp photo of an odometer.",
    ],
  },
  {
    slug: "gym-referral-programme-without-replacing-erp",
    title: "Run a gym referral programme without replacing your gym ERP",
    date: "2026-10-06",
    category: "Referrals",
    excerpt:
      "Keep classes, door access, and GST invoices where they work. Put origin, rewards, and trainer visits on the membership that still pays.",
    body: [
      "Gym owners looking for gym referral software often get sold a second floor system. Class booking, lockers, biometric attendance, GST invoices — those are real jobs. They are not the same job as “who sent this member, did they stay, and did a trainer visit when the debit failed.”",
      "Member-get-member fails in three familiar places. The friend joins at the desk and nobody records the sender. The reward pays on rumour before the membership lasts a month. A failed UPI mandate becomes an SMS from billing, not a trainer task. Whiteboards and WhatsApp groups hide all three.",
      "Keep the gym ERP for the floor. Use gym referral software for origin. A member shares a portal link or a QR at reception. They do not need the field app and they are not a paid seat. The friend’s membership still knows who sent them. Status is sent, joined, paying, or churned.",
      "Rewards belong on the next invoice after a qualification window, with a cap. Duplicate phone or email cannot be referred twice into the same plan. Name mismatches sit in Pending until a manager assigns them. That is how you stop paying for joins that bounce without a phone call to the sender.",
      "Trainers remain field seats: check-in at the club, PT intros as visits, TADA if they travel between centres. Unused visits or a failed mandate write a beat. Floor punch-in stays in gym software. Syclops does not claim biometric door attendance or class occupancy.",
      "Multi-centre chains use clubs as regions. You do not migrate the timetable to get a referral programme. Create a gym workspace, set the reward, print the QR. The industry page and the gym referral software lander exist so search can find that split — ERP for the floor, loop for growth.",
    ],
  },
  {
    slug: "how-to-choose-referral-management-software",
    title: "How to choose referral management software",
    date: "2026-10-06",
    category: "Referrals",
    excerpt:
      "The useful test is simple: can the person who sent the customer see status, and can you see whether that customer paid?",
    body: [
      "Referral management software is not a form that collects a name. It is the record between an introduction and an invoice. If status lives in WhatsApp, the reward lives in a sheet, and the plan lives in billing, you do not have a system. You have three partial memories.",
      "Ask four questions before you buy. Can a partner, member, clinic, or alumnus open a portal and see sent, accepted, converted, and paying? Does a reward wait until the customer stays past a qualification window? Can the same phone be referred twice? When a plan churns, does anyone in the field get a task?",
      "Healthcare teams, gyms, campuses, and channel sales ask for the same thing with different nouns. A clinic wants proof the patient was accepted. A gym wants the membership tied to the member who sent them. A campus wants the alumni intro attached to the fee plan. Software that only fits one of those nouns will be replaced the year you add a second motion.",
      "Syclops is built around that shared record, with field visits and subscriptions on it. GPS-only tools stop at the pin. CRMs stop at a source field. If those are the tools you have, the referral is still leaking between them.",
    ],
  },
  {
    slug: "referral-leakage-is-a-systems-problem",
    title: "Referral leakage is a systems problem, not a people problem",
    date: "2026-09-12",
    category: "Referrals",
    excerpt:
      "Most teams do not lose referrals because staff are lazy. They lose them because the visit, the intro, and the plan live in three tools.",
    body: [
      "A field visit that never becomes a named referral is wasted mileage. A referral that never becomes a paying plan is wasted trust. A plan that churns without a task for the field team is wasted revenue.",
      "WhatsApp and Excel feel fast because they hide the joins. Someone forwards a name. Someone else pastes it into a sheet. Billing creates a membership, a semester fee, or a policy with no memory of who sent them. By the time a manager asks “what happened to Priya?”, the thread has scrolled off the phone.",
      "Gym referral programmes, alumni intros, clinic partners, and channel leads all fail the same way. The sender has no status. The field team has no proof the visit happened. Finance has a plan that looks organic. Leakage is booked as “marketing didn’t convert.”",
      "Syclops makes the joins the product: visit, referrer, subscriber, and the next action when the loop breaks. Member-get-member and B2B partners are the same referrer object with different reward rules if you want them. Duplicate phone or email cannot be referred twice into the same plan.",
      "Rewards should not fire on a rumour. Qualification windows, caps, and credit on the next invoice are how you avoid paying for joins that bounce. Pending name matches sit in a queue instead of a phone call to the sender.",
      "If you only track GPS, you will get better attendance and the same leakage. If you only track CRM stages, you will get prettier pipelines and the same no-shows. If you only run gym or school software, you will bill well and still not know which intro still pays.",
      "The loop has to be one object. Turn the portal on in Settings, share a QR, and watch sent / converted / paying / churned as a leakage view — not a month-end paste.",
    ],
  },
  {
    slug: "gps-is-not-a-growth-system",
    title: "GPS is not a growth system",
    date: "2026-08-28",
    category: "Field",
    excerpt:
      "Live maps answer where someone was. They do not answer who they moved, or whether that person still pays.",
    body: [
      "Field force tools in India have gotten very good at proving a pin. Anti-spoofing, selfie attendance, geo-fences, route playback — useful, and incomplete.",
      "Live location is a reasonable answer to “is the beat being walked?” It is a poor answer to “did we grow?” Attendance percentage can rise while referred joins stall and renewals slip. Managers celebrate coverage and miss leakage.",
      "Growth teams need the next two questions: did the visit create a referral, and did that referral become a subscription that renewed? A pin with no named intro and no paying plan is still a leak, even if the photo EXIF is perfect.",
      "Treat GPS as evidence inside a loop, not as the product. Check-in starts the working day. Visits attach to accounts. Checkout closes the route so TADA is the path, not a pin-to-pin guess. Mock locations can still be flagged. Photo can still be required. None of that replaces origin on the plan.",
      "Syclops is not a CCTV feed. Location is collected between check-in and check-out on a working day. Retention is a setting. Partners never see GPS. Field seats see their own day unless you grant a manager role.",
      "Rank staff by paying outcomes, not kilometres. Overlay at-risk memberships, unpaid installments, or lapsed policies on the beat so the day is not random. That is field tracking software in service of revenue, not surveillance.",
    ],
  },
  {
    slug: "subscriptions-need-a-field-team",
    title: "Subscriptions need a field team",
    date: "2026-07-15",
    category: "Subscriptions",
    excerpt:
      "Dunning emails do not replace a visit. At-risk members, students, and policyholders still live in the real world.",
    body: [
      "Billing software knows a payment failed. It does not know which trainer, counselor, or agent owns the relationship.",
      "SaaS dunning — retry the card, email a link, pause the plan — is the right play when the customer lives in a browser. Gym members, campus fee plans, care programmes, retainers, and policies often fail for reasons a retry cannot see. The mandate expired. The parent is waiting on a counselor. The member stopped coming.",
      "Involuntary churn is still real: failed UPI, expired cards, quiet usage. Retry schedules belong in the gateway. After they exhaust, Syclops can write a field task: who to see, where they were last visited, and which referrer brought them in — because that referrer is often the person who can save the account.",
      "Cash and desk collections still happen in India. Staff mark the collection. It attaches to the plan and the referrer. Origin does not die because the money did not come through Razorpay or Stripe.",
      "At-risk lists should not be another Excel. Click through to the account and the next suggested visit. Quiet usage or a bounce can write the beat automatically. You configure when that happens; you do not assign it by hand every Monday.",
      "Recurring revenue is a field sport the moment your customers are not only on a screen. Connect the gateway, define plans, and let churn become a visit instead of another dunning email.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

const defaultRelated = [
  { href: "/product", label: "Product", body: "Field, referrals, subscriptions." },
  {
    href: "/referral-management-software",
    label: "Referral management software",
    body: "Status from sent to paying.",
  },
  { href: "/faq", label: "FAQ", body: "Seats, GPS, CRM, hosting." },
];

const relatedBySlug: Record<
  string,
  { href: string; label: string; body: string }[]
> = {
  "channel-partner-portal-not-crm-source-field": [
    { href: "/compare/crm", label: "vs traditional CRM", body: "A portal is not a source field." },
    { href: "/industries/sales", label: "Sales & marketing", body: "Beat, partner intro, retainer." },
    { href: "/product/referrals", label: "Referral management", body: "Status the sender can see." },
  ],
  "clinic-referral-portal-vs-whatsapp": [
    { href: "/industries/healthcare", label: "Healthcare", body: "Clinic portal and care plans." },
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "Healthcare and clinic referral status.",
    },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "The thread is a channel." },
  ],
  "counselor-beat-unpaid-fee-installment": [
    { href: "/industries/education", label: "Education", body: "Counselor visits and fee plans." },
    { href: "/product/field", label: "Field tracking", body: "Campus check-in and last-visit dates." },
    { href: "/product/subscriptions", label: "Subscriptions", body: "Unpaid installments as tasks." },
  ],
  "dpdp-employee-gps-retention": [
    { href: "/security", label: "Security", body: "GPS retention, RBAC, India hosting." },
    { href: "/privacy", label: "Privacy", body: "What is processed, and where you export it." },
    { href: "/product/field", label: "Field tracking", body: "Working-day check-in, not CCTV." },
  ],
  "razorpay-memberships-field-dunning": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Retries, then a field task." },
    { href: "/integrations", label: "Integrations", body: "Razorpay and Stripe keys." },
    { href: "/guides/plans-billing", label: "Plans and billing guide", body: "Connect test keys first." },
  ],
  "kol-dsa-referral-loops": [
    { href: "/industries/medtech", label: "Medtech", body: "KOL visits and device contracts." },
    { href: "/industries/fintech", label: "Fintech", body: "Agent visits and policy referrals." },
    { href: "/product/referrals", label: "Referral management", body: "Same object, different nouns." },
  ],
  "tada-is-the-path-not-the-pin": [
    { href: "/tada-software", label: "TADA software", body: "Mileage from the path." },
    { href: "/product/field", label: "Field tracking", body: "Check-in to checkout." },
    { href: "/compare/gps-trackers", label: "vs GPS-only trackers", body: "The pin is not the product." },
  ],
  "gym-referral-programme-without-replacing-erp": [
    { href: "/gym-referral-software", label: "Gym referral software", body: "Member-get-member beside ERP." },
    { href: "/industries/gyms", label: "Gyms", body: "Trainer visits and memberships." },
    { href: "/compare/gym-software", label: "vs gym management software", body: "Keep the floor system." },
  ],
  "how-to-choose-referral-management-software": [
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "What the category has to hold.",
    },
    { href: "/product/referrals", label: "Referral product", body: "Portal, window, leakage." },
    { href: "/faq", label: "FAQ", body: "Seats, GPS, CRM, cancel." },
  ],
  "referral-leakage-is-a-systems-problem": [
    { href: "/product/referrals", label: "Referral management", body: "Leakage as a view, not a paste." },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "Where intros go to die." },
    { href: "/guides/qualification-window", label: "Qualification window", body: "Rewards after they stay." },
  ],
  "gps-is-not-a-growth-system": [
    { href: "/product/field", label: "Field tracking", body: "GPS as evidence, not the scoreboard." },
    { href: "/compare/gps-trackers", label: "vs GPS-only trackers", body: "Attendance % vs paying loop." },
    { href: "/tada-software", label: "TADA software", body: "Path, not pin-to-pin." },
  ],
  "subscriptions-need-a-field-team": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Dunning that creates a visit." },
    { href: "/product/field", label: "Field tracking", body: "The beat those tasks land on." },
    { href: "/blog/razorpay-memberships-field-dunning", label: "Razorpay then a visit", body: "Retries first." },
  ],
};

export function postRelated(slug: string) {
  return relatedBySlug[slug] ?? defaultRelated;
}
