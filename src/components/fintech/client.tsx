"use client";

import {
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { track, type AnalyticsParams } from "@/lib/analytics";

const focusRing =
  "focus-visible:outline-none focus-visible:[box-shadow:0_0_0_3px_color-mix(in_srgb,#C45C26_25%,transparent)]";

export function FintechAnalytics() {
  useEffect(() => {
    track("fintech_landing_view");
  }, []);

  return null;
}

export function FintechLink({
  href,
  event,
  params,
  className,
  children,
}: {
  href: string;
  event?: string;
  params?: AnalyticsParams;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (event) track(event, params);
      }}
    >
      {children}
    </Link>
  );
}

export function FintechFaq({ items }: { items: { q: string; a: string }[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  function toggle(index: number, question: string) {
    const expanding = !open.has(index);
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
    if (expanding) track("fintech_faq_expand", { question });
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const root = event.currentTarget.closest("[data-fintech-faq]");
    const buttons = root?.querySelectorAll<HTMLButtonElement>("[data-faq-button]");
    if (!buttons?.length) return;

    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % buttons.length;
    else if (event.key === "ArrowUp") next = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = buttons.length - 1;
    else return;

    event.preventDefault();
    buttons[next]?.focus();
  }

  return (
    <div data-fintech-faq className="divide-y divide-line rounded-3xl border border-line bg-cream">
      {items.map((item, index) => {
        const expanded = open.has(index);
        const buttonId = `${baseId}-q-${index}`;
        const panelId = `${baseId}-a-${index}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                data-faq-button
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium hover:bg-quiet/70 ${focusRing}`}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index, item.q)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-muted">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="px-6 pb-5 text-sm leading-6 text-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FintechStickyCta({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("fintech-hero-cta");
    const ends: Element[] = [];
    const finalBand = document.getElementById("fintech-final");
    const footer = document.querySelector("footer");
    if (finalBand) ends.push(finalBand);
    if (footer) ends.push(footer);

    let heroVisible = true;
    const endVisible = new Set<Element>();
    const sync = () => setVisible(!heroVisible && endVisible.size === 0);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry?.isIntersecting ?? false;
        sync();
      },
      { threshold: 0.2 },
    );
    const endObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) endVisible.add(entry.target);
          else endVisible.delete(entry.target);
        }
        sync();
      },
      { threshold: 0.25 },
    );

    if (hero) heroObserver.observe(hero);
    else heroVisible = false;
    ends.forEach((node) => endObserver.observe(node));
    sync();

    return () => {
      heroObserver.disconnect();
      endObserver.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <FintechLink
        href="/start?industry=fintech&cta=mobile"
        event="fintech_hero_trial_click"
        params={{ cta_location: "mobile" }}
        className={`flex w-full items-center justify-center rounded-full bg-iris px-5 py-3 text-sm font-medium text-cream hover:bg-iris-dark ${focusRing}`}
      >
        {label}
      </FintechLink>
    </div>
  );
}

export const fintechFocus = focusRing;
