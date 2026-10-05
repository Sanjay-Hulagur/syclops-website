import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        aria-hidden
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="#12141a"
          strokeWidth="1.5"
        />
        <circle
          cx="16"
          cy="16"
          r="8"
          fill="none"
          stroke="#c45c26"
          strokeWidth="1.4"
          className="sy-orbit sy-dash"
        />
        <circle cx="16" cy="16" r="3.2" fill="#c45c26" className="sy-breathe" />
      </svg>
      <span className="display text-[17px] font-semibold tracking-tight text-ink">
        syclops
      </span>
    </Link>
  );
}
