"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isLandingPath, LandingHeader } from "@/components/landing-chrome";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";

const trialClass =
  "inline-flex items-center justify-center rounded-full bg-iris-dark font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (isLandingPath(pathname)) return <LandingHeader />;
  const onSignup = pathname === "/start" || pathname.startsWith("/start/");

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-3 sm:px-5">
        <Logo />
        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.primary.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted hover:text-ink"
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-56 translate-y-1 rounded-2xl border border-line bg-cream p-2 opacity-0 shadow-sm transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-quiet hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className={`${onSignup ? "inline" : "hidden lg:inline"} px-2 py-2 text-sm text-muted hover:text-ink`}
          >
            Log in
          </Link>
          {onSignup ? null : (
            <Link
              href="/start?cta=header"
              data-cta-id="header_trial"
              data-cta-location="header"
              className={`${trialClass} h-9 px-3.5 text-sm sm:h-10 sm:px-4`}
            >
              Start free trial
            </Link>
          )}
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className="block h-px bg-ink" />
              <span className="block h-px bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary">
            {nav.primary.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children
                  ? item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 pl-3 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <Link
              href="/login"
              className="mt-2 border-t border-line py-3 text-base font-medium"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
