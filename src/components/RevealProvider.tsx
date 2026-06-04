"use client";

import { useEffect } from "react";

export default function RevealProvider() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = (el: HTMLElement) => el.classList.add("is-in");
    const revealAll = () => items.forEach(reveal);

    if (reduce || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    // Reveal anything already in (or above) the viewport on load.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) reveal(el);
    });

    // Staggered reveal as elements scroll into view.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []).filter(
            (c) => c.classList.contains("reveal")
          ) as HTMLElement[];
          el.style.transitionDelay = `${Math.max(0, siblings.indexOf(el)) * 90}ms`;
          reveal(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });

    // Hard failsafe: snap everything visible if transitions are throttled.
    const t = setTimeout(() => {
      document.documentElement.classList.add("reveal-failsafe");
      revealAll();
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
