"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";
import { ADMIN_SIGN_IN_URL } from "@/lib/signup";

export function isLandingPath(pathname: string | null) {
  return Boolean(pathname?.startsWith("/lp/"));
}

export function LandingHeader() {
  return (
    <header className="border-b border-line/80 bg-paper">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-5">
        <Logo link={false} />
        <a
          href={ADMIN_SIGN_IN_URL}
          className="rounded-full px-3 py-2 text-sm font-medium text-ink underline-offset-2 hover:underline"
        >
          Log in
        </a>
      </div>
    </header>
  );
}

/** Paid landing pages get a one-line footer instead of the site footer. */
export function FooterSwitch({
  landing,
  children,
}: {
  landing: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return isLandingPath(pathname) ? landing : children;
}
