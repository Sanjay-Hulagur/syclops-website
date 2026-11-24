"use client";

import { useEffect, useRef, useState } from "react";

export const FPS = 30;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

/** 0 → 1 over `length` frames from `start`, eased like the reels. */
export const progress = (frame: number, start: number, length: number) =>
  easeOut(clamp01((frame - start) / length));

export const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

/** Opacity and lift for a piece that rises into place. */
export const rise = (frame: number, start: number, distance = 14, length = 14) => {
  const p = progress(frame, start, length);
  return { opacity: p, transform: `translateY(${(1 - p) * distance}px)` };
};

/** Pop with a small overshoot, for chips and status pills. */
export const pop = (frame: number, start: number, length = 12) => {
  const p = progress(frame, start, length);
  const s = p < 0.6 ? lerp(0.7, 1.08, p / 0.6) : lerp(1.08, 1, (p - 0.6) / 0.4);
  return { opacity: p, scale: s };
};

/**
 * A looping frame counter that only runs while the element is on screen.
 * Starts on `poster`, which is also what the server renders and what
 * reduced-motion visitors keep seeing.
 */
export function useLoop<T extends Element>(length: number, poster: number) {
  const ref = useRef<T>(null);
  const [frame, setFrame] = useState(poster);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let visible = false;
    let last = 0;
    let elapsed = poster / FPS;

    const tick = (now: number) => {
      if (!visible) return;
      if (last) elapsed += Math.min(now - last, 100) / 1000;
      last = now;
      setFrame(Math.floor(elapsed * FPS) % length);
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      last = 0;
      if (visible) raf = requestAnimationFrame(tick);
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [length, poster]);

  return [ref, frame] as const;
}
