"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

const SCROLL_MARKS = [25, 50, 75, 100] as const;

const CTA_PATHS = new Set(["/start", "/interested", "/pricing", "/login"]);

function textOf(value: string | null | undefined) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function elementText(el: Element) {
  const clone = el.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("br").forEach((br) => br.replaceWith(" "));
  return textOf(clone.textContent);
}

function labelText(el: HTMLElement) {
  if (el.id) {
    const label = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
    const named = textOf(label?.textContent);
    if (named) return named;
  }
  const parent = el.closest("label");
  if (!parent) return "";
  const clone = parent.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("input, select, textarea").forEach((node) => node.remove());
  return textOf(clone.textContent);
}

function controlName(el: HTMLElement) {
  const explicit =
    el.getAttribute("data-analytics-name") ||
    el.getAttribute("aria-label") ||
    el.getAttribute("title");
  if (textOf(explicit)) return textOf(explicit);

  if (el instanceof HTMLSelectElement) {
    return labelText(el) || textOf(el.getAttribute("name")) || "select";
  }

  const visible = textOf(el.innerText || el.textContent);
  if (visible) return visible;

  const image = el.querySelector("img");
  const alt = textOf(image?.getAttribute("alt"));
  if (alt) return alt;

  return labelText(el) || textOf(el.getAttribute("name"));
}

function clickUrl(el: HTMLElement) {
  if (!(el instanceof HTMLAnchorElement)) return "";
  const href = el.getAttribute("href");
  if (!href || href.startsWith("javascript:")) return "";
  try {
    const url = new URL(href, window.location.href);
    if (url.origin === window.location.origin) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    return url.href;
  } catch {
    return href;
  }
}

function isOutbound(el: HTMLElement) {
  if (!(el instanceof HTMLAnchorElement)) return false;
  const href = el.getAttribute("href") || "";
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return true;
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function isCta(el: HTMLElement, url: string) {
  if (el.getAttribute("data-analytics-cta") === "true") return true;
  const className = el.getAttribute("class") || "";
  if (className.includes("bg-iris")) return true;
  if (!url) return false;
  try {
    const path = new URL(url, window.location.origin).pathname;
    return CTA_PATHS.has(path);
  } catch {
    return false;
  }
}

function sectionLabel(section: Element) {
  const heading =
    section.querySelector("h2") ||
    section.querySelector("h1") ||
    section.querySelector("p") ||
    section.querySelector("h3");
  return (heading ? elementText(heading) : "") || section.id;
}

function clickLocation(el: HTMLElement) {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section");
  return (section ? sectionLabel(section) : "") || "main";
}

function downloadName(el: HTMLElement) {
  if (!(el instanceof HTMLAnchorElement)) return "";
  const href = el.getAttribute("href") || "";
  const download = el.getAttribute("download");
  if (download == null && !/\.apk(?:$|\?)/i.test(href)) return "";
  if (download && download !== "true") return download;
  try {
    const url = new URL(href, window.location.href);
    return decodeURIComponent(url.pathname.split("/").pop() || "download");
  } catch {
    return "download";
  }
}

function onActivate(event: MouseEvent) {
  if (event.type === "click" && event.button !== 0) return;
  if (event.type === "auxclick" && event.button !== 1) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target.closest("nextjs-portal")) return;

  const el = target.closest(
    "a, button, [role='button'], [role='tab'], summary",
  );
  if (!(el instanceof HTMLElement)) return;
  if (el.closest("[data-analytics-ignore]")) return;

  const buttonName = controlName(el);
  if (!buttonName) return;

  const url = clickUrl(el);
  const file = downloadName(el);
  const params = {
    button_name: buttonName,
    click_url: url || undefined,
    click_location: clickLocation(el),
    element_type: el.tagName.toLowerCase(),
    outbound: isOutbound(el) ? "true" : "false",
    is_cta: isCta(el, url) ? "true" : "false",
  };

  track("button_click", params);

  if (!file) return;
  const extension = file.includes(".") ? file.split(".").pop() : "";
  track("file_download", {
    button_name: buttonName,
    file_name: file,
    file_extension: extension || undefined,
    link_url: url || undefined,
  });
}

function onSelect(event: Event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;
  if (target.closest("[data-analytics-ignore]")) return;
  const selected = target.selectedOptions[0];
  const value = textOf(selected?.value);
  if (!value || value.includes("@")) return;
  track("option_select", {
    select_name: controlName(target) || "select",
    selected_value: value,
    selected_label: textOf(selected?.textContent) || undefined,
  });
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("click", onActivate, true);
    document.addEventListener("auxclick", onActivate, true);
    document.addEventListener("change", onSelect, true);
    return () => {
      document.removeEventListener("click", onActivate, true);
      document.removeEventListener("auxclick", onActivate, true);
      document.removeEventListener("change", onSelect, true);
    };
  }, []);

  useEffect(() => {
    const fired = new Set<number>();
    let frame = 0;

    const measure = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 8) return;
      const percent = Math.min(100, Math.round((window.scrollY / max) * 100));
      for (const mark of SCROLL_MARKS) {
        if (percent < mark || fired.has(mark)) continue;
        fired.add(mark);
        track("page_scroll", {
          percent_scrolled: mark,
          page_path: pathname,
        });
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          const aboveFold =
            window.scrollY < 24 &&
            entry.boundingClientRect.top < window.innerHeight * 0.85;
          if (aboveFold) {
            seen.add(entry.target);
            observer.unobserve(entry.target);
            continue;
          }
          const section = entry.target;
          const sectionName = sectionLabel(section);
          if (!sectionName) continue;
          seen.add(section);
          observer.unobserve(section);
          track("section_view", {
            section_name: sectionName,
            section_id: section.id || undefined,
            page_path: pathname,
          });
        }
      },
      { threshold: 0.2 },
    );

    document.querySelectorAll("main section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
