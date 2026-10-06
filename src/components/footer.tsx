import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Overview" },
      { href: "/product/field", label: "Field tracking" },
      { href: "/tada-software", label: "TADA software" },
      { href: "/product/referrals", label: "Referrals" },
      {
        href: "/referral-management-software",
        label: "Referral management software",
      },
      { href: "/gym-referral-software", label: "Gym referral software" },
      { href: "/product/subscriptions", label: "Subscriptions" },
      { href: "/product/analytics", label: "Analytics" },
      { href: "/product/mobile", label: "Mobile app" },
      { href: "/integrations", label: "Integrations" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/industries/gyms", label: "Gyms" },
      { href: "/industries/education", label: "Education" },
      { href: "/industries/healthcare", label: "Healthcare" },
      { href: "/industries/sales", label: "Sales & marketing" },
      { href: "/industries/fintech", label: "Fintech" },
      { href: "/industries/medtech", label: "Medtech" },
    ],
  },
  {
    title: "Compare",
    links: [
      { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel" },
      { href: "/compare/gps-trackers", label: "vs GPS-only trackers" },
      { href: "/compare/crm", label: "vs traditional CRM" },
      { href: "/compare/vertical-software", label: "vs vertical software" },
      { href: "/compare/gym-software", label: "vs gym management software" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/start", label: "Start for free" },
      { href: "/login", label: "Log in" },
      { href: "/guides", label: "Guides" },
      { href: "/faq", label: "FAQ" },
      { href: "/pricing", label: "Pricing" },
      { href: "/customers", label: "Customers" },
      { href: "/blog", label: "Blog" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/refund", label: "Refund" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-quiet">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Referral management software for field teams. Partner and member
            referrals, visits, and subscriptions — create a workspace and go.
          </p>
          <p className="mt-6 text-sm text-muted">India</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {column.title}
            </p>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/80 hover:text-iris"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Syclops. Visit → Referral → Subscription
          → Revenue.
        </p>
      </div>
    </footer>
  );
}
