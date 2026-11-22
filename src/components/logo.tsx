import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  link = true,
}: {
  className?: string;
  /** Paid landing pages show the logo without a way off the page. */
  link?: boolean;
}) {
  const image = (
    <img
      src="/syclops-logo.svg"
      alt={site.name}
      width={212}
      height={64}
      className="h-8 w-auto"
    />
  );
  if (!link) {
    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
  }
  return (
    <Link
      href="/"
      aria-label={site.name}
      className={`inline-flex items-center ${className}`}
    >
      {image}
    </Link>
  );
}
