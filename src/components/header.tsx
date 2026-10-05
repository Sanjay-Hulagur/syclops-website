"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.primary.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-muted hover:text-ink"
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-56 translate-y-1 rounded-2xl border border-line bg-cream p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
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
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="text-sm text-muted hover:text-ink">
            Log in
          </Link>
          <Link
            href="/start"
            className="rounded-full bg-iris px-4 py-2 text-sm font-medium text-cream hover:bg-iris-dark"
          >
            Start for free
          </Link>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-paper px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.primary.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium"
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
              className="mt-2 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/start"
              className="rounded-full bg-iris px-4 py-2.5 text-center text-sm font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              Start for free
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
