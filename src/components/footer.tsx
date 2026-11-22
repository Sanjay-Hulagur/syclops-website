import Link from "next/link";
import { Logo } from "@/components/logo";
import { androidApp, supportEmail } from "@/lib/site";

type FooterLink = { href: string; label: string; download?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
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
      { href: androidApp.href, label: "Download Android APK", download: true },
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
      { href: "/compare", label: "All comparisons" },
      { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel" },
      { href: "/compare/gps-trackers", label: "vs GPS-only trackers" },
      { href: "/compare/crm", label: "vs traditional CRM" },
      { href: "/compare/vertical-software", label: "vs vertical software" },
      { href: "/compare/gym-software", label: "vs gym management software" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/start?cta=footer", label: "Start free trial" },
      { href: "/login", label: "Log in" },
      { href: "/guides", label: "Guides" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/customers", label: "How teams use Syclops" },
      { href: "/interested", label: "I'm interested" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
      { href: "/refund", label: "Refund" },
    ],
  },
];

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-1 sm:mt-3 sm:space-y-2">
      {links.map((link) => (
        <li key={link.href + link.label}>
          {link.download ? (
            <a
              href={link.href}
              download={androidApp.filename}
              className="block py-1.5 text-sm text-ink/80 hover:text-iris-dark sm:py-0"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="block py-1.5 text-sm text-ink/80 hover:text-iris-dark sm:py-0"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-quiet">
      <div className="mx-auto grid max-w-6xl px-5 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-6">
        <div className="border-b border-line pb-6 sm:border-0 sm:pb-0 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Field visits, partner referrals and subscription renewals in one
            app. Made in India.
          </p>
          <p className="mt-4 text-sm text-muted">
            Support:{" "}
            <a href={`mailto:${supportEmail}`} className="text-ink underline underline-offset-2">
              {supportEmail}
            </a>
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <details className="group border-b border-line sm:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between text-sm font-medium">
                {column.title}
                <span aria-hidden="true" className="text-muted transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pb-3">
                <LinkList links={column.links} />
              </div>
            </details>
            <div className="hidden sm:block">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {column.title}
              </p>
              <LinkList links={column.links} />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} Syclops
        </p>
      </div>
    </footer>
  );
}
