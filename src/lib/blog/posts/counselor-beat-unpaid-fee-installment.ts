import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "counselor-beat-unpaid-fee-installment",
  title: "An unpaid fee installment is a counselor visit, not only an SMS",
  date: "2026-10-16",
  updated: POST_UPDATED,
  category: "Education",
  excerpt:
    "Accounts can SMS a parent. Coverage still needs a counselor on a campus beat, with the alumni intro attached to the fee plan.",
  body: [
    {
      type: "p",
      text: "An unpaid fee installment is a counselor visit, not only an SMS. Campus growth teams keep three memories that never agree: an enquiry Excel, a counselor call log, and the accounts list of unpaid term fees. Alumni intros live in a parent WhatsApp group. By the time someone asks which introduction still pays, the sheet is a week old and the parent has already heard a different story from the bus route.",
    },
    {
      type: "h2",
      text: "Accounts can message a parent. Coverage still needs a person",
    },
    {
      type: "p",
      text: "An accounts office can send a reminder. In India the parent is often waiting on a counselor, a hostel doubt, or a rumour about the programme, not on a payment link. Retrying a mandate does not replace a visit at the school, college, or tuition centre that owns that family. The SMS is a notice. The visit is the work.",
    },
    {
      type: "p",
      text: "The failure mode is familiar. Accounts exports unpaid installments on Monday. Counselors already planned a campus day from last month’s enquiry sheet. Nobody joins the two lists, so the counselor walks a building where the urgent family is not, and the urgent family gets another text. [Subscriptions](/product/subscriptions) that stop at the gateway leave that join on the floor.",
    },
    {
      type: "h2",
      text: "Treat the counselor day as a beat",
    },
    {
      type: "p",
      text: "A counselor day is a field day. Check in at the campus. Log the enquiry as a visit on an account, with a last-visit date, so a skipped block is a status and not silence. Import last year’s Excel if you must — an empty last-visit is fine — then stop dual-running the sheet. The phone becomes the list. The sheet becomes a souvenir.",
    },
    {
      type: "p",
      text: "[Field tracking](/product/field) is how that day stays honest. Geo is required at check-in. Checkout closes the route. Visits attach to the family or the campus account, not to a personal note that dies with the counselor’s phone. When a term fee fails, the task lands on the person who owns that campus, with the last visit already on the record.",
    },
    {
      type: "ul",
      items: [
        "Check in at the campus before the first conversation, so the day has a start.",
        "Attach every enquiry to an account, even when last year’s sheet had no owner.",
        "Treat a skip as a logged status. An untouched block should not look like a finished block.",
        "When a fee fails, write the task to the counselor who owns that campus, not to a shared inbox.",
        "Keep the alumni or parent referrer on the account. They are often the adult who can save the seat.",
      ],
    },
    {
      type: "h2",
      text: "The alumni intro has to sit on the fee plan",
    },
    {
      type: "p",
      text: "Alumni and parent referrals need the same object as any other introduction. Status is admitted and on a fee plan, not a rumour in a group. A qualification window stops you paying for a join that leaves before the term settles. A duplicate-phone rule stops two alumni claiming the same student. Name mismatches sit in Pending until a manager assigns them, instead of a counselor guessing in a corridor.",
    },
    {
      type: "p",
      text: "That attachment matters the day the installment fails. The referrer is not a marketing source you file and forget. They are often the person the parent will take a call from. If the fee plan has forgotten them, the counselor walks in without the one relationship that could keep the seat. An [education](/industries/education) workspace keeps counselor coverage, alumni origin, and the semester plan on one record.",
    },
    {
      type: "h2",
      text: "The academic ERP stays the system for marks",
    },
    {
      type: "p",
      text: "Syclops does not replace the academic ERP. Marks, timetable, and attendance registers stay there. The loop you are missing is different: who walked the campus, which intro still pays, and which unpaid installment became a visit instead of another accounts SMS. Buying a second student-information system to get that loop is how campuses end up with two logins and the same leak.",
    },
    {
      type: "p",
      text: "Cash at the accounts window still happens. When a parent pays at the desk, the counselor or the clerk marks the collection. It attaches to the plan and to the referrer. Origin does not die because the money did not come through a mandate. You configure when a failed debit or a quiet plan writes the next beat. You do not rebuild the list by hand every Monday.",
    },
    {
      type: "h2",
      text: "Dunning is the notice. The beat is the recovery",
    },
    {
      type: "p",
      text: "Gateway retries and reminder texts belong in the billing tool. They recover the parent who only needed a new UPI pin. They do not recover the parent who is waiting to see a person. Read [why subscriptions need a field team](/blog/subscriptions-need-a-field-team) if the argument still sounds like a gym problem. On a campus it is the same loop with a counselor and a term fee. Create an education workspace, import the beat, and let the unpaid installment name the next visit.",
    },
  ],
  faqs: [
    {
      q: "Does this replace our academic ERP?",
      a: "No. Marks and timetable stay in the ERP. Counselor coverage, alumni origin, and whether the semester plan still pays are the records this loop holds.",
    },
    {
      q: "Should every unpaid SMS become a campus visit?",
      a: "No. Let the gateway retry first. Write a counselor task when the retries are exhausted, or when you already know the family is waiting on a person rather than a link.",
    },
  ],
};
