import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "counselor-beat-unpaid-fee-installment",
  title: "Unpaid fees need a counselor visit",
  date: "2026-10-16",
  updated: POST_UPDATED,
  category: "Education",
  excerpt:
    "Plan counselor visits around unpaid fees, keep alumni and parent referrals named, and stop running enquiries, calls, and fees in three lists.",
  hero: {
    src: "/blog/counselor-family-visit.jpg",
    alt: "An education counselor with a folder talking with a parent and a student at the gate of their home.",
    width: 1280,
    height: 640,
  },
  body: [
    {
      type: "p",
      text: "An unpaid fee is a counselor visit, not only an SMS. Campus growth teams keep three memories that never agree: an enquiry Excel, a counselor call log, and the accounts list of unpaid term fees. Alumni intros live in a parent WhatsApp group. By the time someone asks which introduction became a paying student, the sheet is a week old and the parent has already heard a different story from the bus route.",
    },
    {
      type: "h2",
      text: "Accounts can message a parent. Coverage still needs a person",
    },
    {
      type: "p",
      text: "An accounts office can send a reminder. In India the parent is often waiting on a counselor, a hostel doubt, or a rumour about the programme, not on a payment link. Another link does not replace a visit at the school, college, or tuition centre that owns that family. The SMS is a notice. The visit is the work.",
    },
    {
      type: "p",
      text: "The failure mode is familiar. Accounts exports unpaid fees on Monday. Counselors already planned a campus day from last month’s enquiry sheet. Nobody joins the two lists, so the counselor walks a building where the urgent family is not, and the urgent family gets another text. [Subscriptions](/product/subscriptions) that stop at the gateway leave that join on the floor.",
    },
    {
      type: "h2",
      text: "Treat the counselor day as a field day",
    },
    {
      type: "p",
      text: "A counselor day is a field day. Check in at the campus with GPS. Log each visit with notes and a photo, so a skipped school shows up on the list of places nobody has visited instead of as silence. Upload your counselors and areas from the spreadsheet (CSV) templates, then stop dual-running the sheet. The phone becomes the list. The sheet becomes a souvenir.",
    },
    {
      type: "p",
      text: "[Field tracking](/product/field) is how that day stays honest. Location is recorded at check-in, and only during the working day. Visits stay on the account, not in a personal note that dies with the counselor’s phone. When a term fee is still due, the fee plan shows it, along with the counselor who enrolled the student.",
    },
    {
      type: "ul",
      items: [
        "Check in at the campus before the first conversation, so the day has a start.",
        "Log every visit, even when last year’s sheet had no owner.",
        "Look at the list of schools nobody has visited. An untouched block should not look like a finished block.",
        "When a fee is still due, give the follow-up to the counselor who enrolled the student, not to a shared inbox.",
        "Check who referred the student. An alumni or parent referrer is often the adult who can save the seat.",
      ],
    },
    {
      type: "h2",
      text: "The alumni intro needs a record too",
    },
    {
      type: "p",
      text: "Alumni and parent referrals need the same record as any other introduction. Each referral keeps the name of who sent it, and a status from pending to admitted, or stopped with a reason, not a rumour in a group. The same mobile number cannot be referred twice, so two alumni cannot claim the same student. Different spellings of a referrer’s name can be merged into one person, instead of a counselor guessing in a corridor.",
    },
    {
      type: "p",
      text: "That record matters the day the fee is due. The referrer is not a marketing source you file and forget. They are often the person the parent will take a call from. Before the counselor walks in, they should know who sent the family. An [education](/industries/education) workspace keeps counselor visits, alumni referrals, and fee plans in one app.",
    },
    {
      type: "h2",
      text: "The academic ERP stays the system for marks",
    },
    {
      type: "p",
      text: "Syclops does not replace the academic ERP. Marks, timetable, and attendance registers stay there. The loop you are missing is different: who walked the campus, which intro became an admission, and which unpaid fee became a visit instead of another accounts SMS. Buying a second student-information system to get that loop is how campuses end up with two logins and the same leak.",
    },
    {
      type: "p",
      text: "Cash at the accounts window still happens. When a parent pays at the desk, the counselor or the clerk records the payment on the fee plan, as cash, including a part payment, or as UPI with its reference. The payment is on the record even though the money did not come through the gateway. Review the plans marked Payment Due each week, and plan the follow-ups in each counselor’s calendar. You do not rebuild the list by hand every Monday.",
    },
    {
      type: "h2",
      text: "The reminder is the notice. The visit is the recovery",
    },
    {
      type: "p",
      text: "Gateway retries and reminder texts belong in the billing tool. They recover the parent who only needed a new UPI pin. They do not recover the parent who is waiting to see a person. Read [why subscriptions need a field team](/blog/subscriptions-need-a-field-team) if the argument still sounds like a gym problem. On a campus it is the same loop with a counselor and a term fee. Create an education workspace, upload your counselors and areas, and let the unpaid fee decide the next visit.",
    },
  ],
  faqs: [
    {
      q: "Does this replace our academic ERP?",
      a: "No. Marks and timetable stay in the ERP. Counselor visits, alumni referrals, and whether each fee plan is paid are what Syclops holds.",
    },
    {
      q: "Should every unpaid SMS become a campus visit?",
      a: "No. Let the reminder, or another try online, go first. Plan a counselor visit when the fee is still due after that, or when you already know the family is waiting on a person rather than a reminder.",
    },
  ],
};
