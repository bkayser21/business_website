"use client";

import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/config";

const navLinks = [
  { label: "The problem", href: "#problem" },
  { label: "What we do", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Why us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`nav${stuck ? " is-stuck" : ""}`} id="top">
      <div className="wrap nav__inner">
        <a className="brand" href="#top" aria-label="Apex Made home">
          <span className="brand__badge" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <defs>
                <linearGradient id="nav-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--blue)" />
                  <stop offset="1" stopColor="var(--pink)" />
                </linearGradient>
              </defs>
              <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="none" stroke="url(#nav-grad)" strokeWidth="2.5" />
              <path d="M20 9 L30 30 L23.2 30 L20 22.4 L16.8 30 L10 30 Z" fill="url(#nav-grad)" />
            </svg>
          </span>
          <span className="brand__word">Apex&nbsp;Made</span>
        </a>

        <nav className="nav__links" aria-label="Page sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary btn--sm"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free call
          </a>
          <button
            className="nav__hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="nav__mobile" aria-label="Mobile navigation">
          <div className="wrap">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMobile}>
                {link.label}
              </a>
            ))}
            <a
              className="btn btn--primary"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
            >
              Book a free call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
