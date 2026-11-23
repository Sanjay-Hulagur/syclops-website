export const guides = [
  {
    slug: "create-workspace",
    title: "Create a Syclops workspace",
    scene: "start" as const,
    summary:
      "Your email address and your business name. We email you a link to set your password. No card, no sales call.",
    intro: [
      "A Syclops workspace is the account your field staff, managers, and referrers share. You create it on the web in about a minute, and nothing is billed during the free trial.",
      "The signup asks for two things: your email address and your business name. Everything else, such as regions, staff, and the people who refer to you, is set up after you sign in.",
    ],
    steps: [
      { title: "Enter your email address", body: "Use the address you want to sign in with. That email becomes the owner of the workspace." },
      { title: "Name your business", body: "Usually the brand, not a person. The people you add will see this name." },
      { title: "Set your password", body: "We email you a link. It works for 72 hours. Open it, choose a password, and sign in to the admin console." },
      { title: "Add your team", body: "Add regions, your field staff, and the people who refer to you, then record your first visit or referral." },
    ],
    faqs: [
      { q: "Do I need a credit card to start?", a: "No. The free trial does not need a card. The current length and terms are on the pricing page. After the trial we send an invoice or a payment link for the seats you choose." },
      { q: "The email didn’t arrive. What now?", a: "Check spam and promotions, then submit the signup form again with the same email. We send a fresh link. Still nothing? Write to syclops.team@gmail.com." },
    ],
  },
  {
    slug: "invite-team",
    title: "Add field staff, managers, and referrers",
    scene: "mobile" as const,
    summary: "Field staff and managers are paid seats. Referrers are free.",
    intro: [
      "Field staff start their working day in the app, check in at visits, and get TA/DA. Managers see reports and coverage on the web. Referrers only send people and follow their status, so they never use a paid seat.",
      "Everyone signs in with their email and a one-time code. There is no company code to type, and the Android app and the web app open the same workspace.",
    ],
    steps: [
      { title: "Add your managers", body: "Add each manager with their email in the admin console." },
      { title: "Add field staff", body: "One by one, or upload a list from the Excel template." },
      { title: "Staff install the app", body: "They download the Android APK from this site and sign in with their email." },
      { title: "Bring in referrers", body: "Add them in the admin console, or share your referral page. They never use a seat." },
    ],
    faqs: [
      { q: "What is a field seat?", a: "A paid user who works in the field: checks in at visits and gets TA/DA. Managers can be seats. Referrers are not." },
      { q: "Can staff use their own phones?", a: "Yes. Location is recorded only during the working day." },
    ],
  },
  {
    slug: "field-day",
    title: "Run a field day with GPS check-in",
    scene: "field" as const,
    summary: "Start the day in the app. Check in at each visit. TA/DA adds itself up.",
    intro: [
      "A field day in Syclops is not a live CCTV map. Staff start their working day in the app, and location is recorded only during the working day. Each visit is checked in with GPS and photos, and stays tied to the partner.",
      "The day’s distance becomes TA/DA, using the allowance you set for each distance range. Managers see each person’s visits and route on the web.",
    ],
    steps: [
      { title: "Start the day", body: "One tap in the app. The working day begins." },
      { title: "Follow the plan", body: "The week’s visit plan and the day’s route are on the phone." },
      { title: "Check in at each visit", body: "GPS and photos, a visit reason, and notes. A new partner can be added on the spot." },
      { title: "See TA/DA add up", body: "The day’s distance becomes TA/DA, with daily and monthly totals in the app." },
    ],
    faqs: [
      { q: "Is GPS always on?", a: "No. Location is recorded only during the working day." },
      { q: "How is TA/DA worked out?", a: "From the distance travelled during the working day, using the allowance you set for each distance range." },
    ],
  },
  {
    slug: "referral-portal",
    title: "Set up your referral page",
    scene: "referral" as const,
    summary: "One link for everyone who refers to you. They sign in, send people, and see what happened next.",
    intro: [
      "Doctors, members, alumni, and channel partners all refer the same way. Each gets their own login on your referral page and sees what happened to the people they sent, without calling your desk.",
      "The referral page blocks a second open referral for the same mobile number. When a referral is lost, your team records why: the person did not visit, could not be reached, or went somewhere else.",
    ],
    steps: [
      { title: "Get your referral page", body: "We set it up with your business name and send you the link." },
      { title: "Share the link", body: "On WhatsApp, by email, or in print. Referrers sign in with a one-time code sent to their email." },
      { title: "Follow each referral", body: "Your team moves it from awaiting arrival to converted, or records why not." },
      { title: "Reward referrers", body: "Record a reward for a referral, or work out payouts from bills. Approve them before they are paid." },
    ],
    faqs: [
      { q: "Do referrers need a paid seat?", a: "No. People who only send referrals are never billed." },
      { q: "Can the same person be referred twice?", a: "Not while a referral for that mobile number is still open on your referral page." },
    ],
  },
  {
    slug: "plans-billing",
    title: "Set up membership plans and payments",
    scene: "subscription" as const,
    summary: "Create plans, enroll customers on the phone, and record cash, UPI, EMI, or Razorpay payments.",
    intro: [
      "Membership plans are often sold where the customer is: at a camp, at the front desk, or at their door. Staff enroll the customer on the phone, and the plan keeps the name of whoever sold it.",
      "Payments can be cash, UPI, EMI, or online through Razorpay, which our team connects with you. Every plan shows its status, so anyone with a payment due is easy to find.",
    ],
    steps: [
      { title: "Create your plans", body: "Name, price, duration and tier, how many members are covered, and the price for each extra member." },
      { title: "Enroll on the phone", body: "Verify the customer’s mobile with a one-time code, add family members and ID proof, and take the payment." },
      { title: "Record the payment", body: "Cash, UPI, or online. For EMI, Syclops builds the instalment schedule with due dates." },
      { title: "Keep track", body: "Each plan shows Active, Payment Due, Inactive, or Banned, and who enrolled it." },
    ],
    faqs: [
      { q: "Can we collect cash at the desk?", a: "Yes. Staff record the cash payment and can upload proof of payment." },
      { q: "Does Syclops retry failed payments?", a: "No. The plan shows the payment as due, so your team knows whom to call or visit." },
    ],
  },
  {
    slug: "reports",
    title: "Read your reports and export to Excel",
    scene: "analytics" as const,
    summary: "Coverage, people, and referrers. Excel and PDF, with no analyst in the middle.",
    intro: [
      "Start with coverage: which partners your team never visits, and which ones get visits but never refer. Then look at people: each person’s visits, attendance, calendar, and distance. Then referrers: who sends the most, and from which region.",
      "Pick any date range. Staff, sales, and visit reports download as Excel, and daily reports as PDF.",
    ],
    steps: [
      { title: "Coverage", body: "Partners never visited, and partners visited but never referring." },
      { title: "People", body: "Each person’s visits, attendance, calendar, and distance." },
      { title: "Referrers", body: "Referrals by referrer and region, and what became of them." },
      { title: "Export", body: "Excel for staff, sales, and visit reports. PDF for daily reports." },
    ],
    faqs: [
      { q: "Can referrers see company analytics?", a: "No. They see only the people they sent." },
      { q: "Can I get the data into Excel?", a: "Yes. Staff, sales, and visit reports download as Excel." },
    ],
  },
  {
    slug: "import-from-excel",
    title: "Upload your team and areas from Excel",
    scene: "field" as const,
    summary:
      "Download the template, fill it in, and upload it. Staff, areas, and visit reasons go in at once.",
    intro: [
      "Most teams already keep their staff list and areas in Excel. Syclops has an Excel template for each, so you do not type them in one by one.",
      "There are templates for field staff, areas and villages, visit reasons, and announcements. Hospitals can also upload in-house doctors, community health workers, patients, and discharges.",
    ],
    steps: [
      { title: "Download the template", body: "Each upload has its own Excel template with the right columns." },
      { title: "Fill it in", body: "One row per person or place. Keep the column names as they are." },
      { title: "Upload it", body: "Syclops checks the file and tells you which rows need fixing." },
      { title: "Start the first day", body: "Field staff sign in to the app and start their working day." },
    ],
    faqs: [
      {
        q: "Can I import last year’s Excel sheet?",
        a: "Copy it into our template first, then upload it. From then on, use Syclops instead of the sheet.",
      },
      {
        q: "Can I upload partners from Excel?",
        a: "Not yet. Staff add partners from the phone after a visit, or you add them in the admin console.",
      },
    ],
  },
  {
    slug: "referral-payouts",
    title: "Pay referrers: rewards and payouts from bills",
    scene: "referral" as const,
    summary:
      "Record a reward for each referral, or work out payouts from bills. Nothing is marked paid until it is approved.",
    intro: [
      "Referral programmes go wrong when nobody can say what a referrer is owed. Syclops keeps the reward on the referral itself, next to the person who was sent.",
      "Teams that pay a share of each bill can upload bills and let payout rules do the sums. Every payout moves from pending to approved to paid, so nothing is paid twice by accident.",
    ],
    steps: [
      { title: "Record a reward", body: "Add the reward amount when a referral converts." },
      { title: "Or set payout rules", body: "Pay a share of each bill, by bill category, with any deductions you apply." },
      { title: "Match names", body: "Link the different spellings of a referrer’s name on bills to one person." },
      { title: "Approve, then pay", body: "Each payout is pending, then approved, then paid. Download the settlement report and thank-you letters." },
    ],
    faqs: [
      {
        q: "When is a payout marked paid?",
        a: "Only after someone approves it and then marks it paid. Until then it shows as pending or approved.",
      },
      {
        q: "Can the same person be referred twice?",
        a: "Not while a referral for that mobile number is still open on your referral page.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}

export const faqs = [
  {
    q: "What is referral management software?",
    a: "Software that records who sent a customer, whether they converted, and what the sender is owed. Syclops is referral management software that also keeps field visits and membership plans in the same workspace.",
  },
  {
    q: "Is Syclops referral management software?",
    a: "Yes. Doctors, partners, members, and alumni send people through their own login and see what happened next. You record rewards and approve payouts. Referrers are not paid seats.",
  },
  {
    q: "Who is Syclops for?",
    a: "Any team that grows through field staff and people who refer, then keeps customers on a plan. Hospitals and clinics first, and also gyms, campuses, sales teams, fintech, and medtech.",
  },
  {
    q: "Is Syclops field tracking software or a CRM?",
    a: "Neither, fully. GPS check-in and TADA prove the visit. A CRM would stop at the deal. Syclops continues to the referral and the membership plan.",
  },
  {
    q: "Is there a sales call?",
    a: "No. Create a workspace and add your team. We connect WhatsApp and Razorpay with you, and the guides cover the rest.",
  },
  {
    q: "What is a field seat?",
    a: "A paid user who works in the field: checks in at visits and gets TA/DA. Managers can be seats. Referrers are not seats.",
  },
  {
    q: "Can partners use it without paying?",
    a: "Yes. Referrers send people and follow their status for free. They never use a paid seat.",
  },
  {
    q: "Where is the Android app?",
    a: "Download the APK from the mobile app page. Referrers can also use your referral page in a browser.",
  },
  {
    q: "How is this different from GPS tracking?",
    a: "GPS is evidence. Syclops continues to the referral and the membership plan. A pin that never leads to a customer is still leakage.",
  },
  {
    q: "How is this different from a CRM?",
    a: "A CRM is deals. Syclops is visit, referrer, and plan in one place, including TADA and membership payments.",
  },
  {
    q: "Does this replace gym, school, or clinic software?",
    a: "No. Keep vertical tools for classes, marks, or charts. Syclops covers field proof, who referred each customer, and whether they have paid for their plan.",
  },
  {
    q: "Where is data hosted?",
    a: "Each workspace is kept apart from every other customer’s. If you need the hosting location in writing, email syclops.team@gmail.com.",
  },
  {
    q: "How do I cancel?",
    a: "Write to syclops.team@gmail.com to stop future renewal. A cancellation is considered within 7 days of the order, and an approved refund takes 14 days, as set out in the refund policy.",
  },
  {
    q: "Will the app use my industry’s words?",
    a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you might say partners and customers. The steps are the same.",
  },
];
