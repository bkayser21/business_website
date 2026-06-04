import { BRAND_NAME, BRAND_TAGLINE, CONTACT_EMAIL_DISPLAY, CALENDLY_URL } from "@/lib/config";

const navLinks = [
  { label: "The problem", href: "#problem" },
  { label: "What we do", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Why us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <a className="brand brand--footer" href="#top" aria-label={`${BRAND_NAME} home`}>
            <span className="brand__badge" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="34" height="34">
                <defs>
                  <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="var(--blue)" />
                    <stop offset="1" stopColor="var(--pink)" />
                  </linearGradient>
                </defs>
                <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="none" stroke="url(#footer-grad)" strokeWidth="2.5" />
                <path d="M20 9 L30 30 L23.2 30 L20 22.4 L16.8 30 L10 30 Z" fill="url(#footer-grad)" />
              </svg>
            </span>
            <span className="brand__word">{BRAND_NAME}</span>
          </a>
          <p className="footer__tag">{BRAND_TAGLINE}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <a className="footer__email" href={`mailto:${CONTACT_EMAIL_DISPLAY}`}>
            {CONTACT_EMAIL_DISPLAY}
          </a>
          <a className="footer__site" href="https://apexmade.com" target="_blank" rel="noopener noreferrer">
            apexmade.com
          </a>
          <a
            className="btn btn--primary btn--sm"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free call
          </a>
        </div>
      </div>

      <div className="wrap footer__legal">
        <span>&copy; {year} {BRAND_NAME}. All rights reserved.</span>
      </div>
    </footer>
  );
}
