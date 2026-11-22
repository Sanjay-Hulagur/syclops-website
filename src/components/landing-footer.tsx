import Link from "next/link";
import { supportEmail } from "@/lib/site";

export function LandingFooter() {
  return (
    <footer className="border-t border-line bg-quiet">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-5 text-sm text-muted sm:px-5">
        <Link href="/pricing" className="hover:text-ink">
          Pricing
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/privacy" className="hover:text-ink">
          Privacy
        </Link>
        <span aria-hidden="true">·</span>
        <Link href="/terms" className="hover:text-ink">
          Terms
        </Link>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${supportEmail}`} className="hover:text-ink">
          Support
        </a>
        <span className="w-full text-xs sm:ml-auto sm:w-auto">
          © {new Date().getFullYear()} Syclops
        </span>
      </div>
    </footer>
  );
}
