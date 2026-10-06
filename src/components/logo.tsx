import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={site.name}
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/syclops-logo.svg"
        alt={site.name}
        width={212}
        height={64}
        className="h-8 w-auto"
      />
    </Link>
  );
}
