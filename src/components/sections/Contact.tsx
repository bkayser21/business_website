import { CALENDLY_URL } from "@/lib/config";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="cta-band__bg" aria-hidden="true" />
      <div className="wrap cta-band__inner reveal">
        <h2 className="cta-band__title">Ready to win back your time?</h2>
        <p className="cta-band__sub">
          Let&apos;s find the quickest win for your business — in one free, 20-minute call.
        </p>
        <a
          className="btn btn--invert btn--lg"
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a free discovery call
        </a>
        <p className="cta-band__note">Free · no pressure · no obligation</p>
      </div>
    </section>
  );
}
