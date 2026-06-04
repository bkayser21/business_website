import { CALENDLY_URL } from "@/lib/config";

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <p className="eyebrow eyebrow--center reveal">How it works</p>
        <h2 className="section__title section__title--center reveal">
          Three simple steps. No risk, no jargon.
        </h2>
        <ol className="steps">
          <li className="step reveal">
            <span className="step__num">1</span>
            <h3>Free call</h3>
            <p>
              Tell me what&apos;s slowing you down. No jargon, no pressure — just a straight
              conversation about where the time is going.
            </p>
          </li>
          <li className="step__line reveal" aria-hidden="true" />
          <li className="step reveal">
            <span className="step__num">2</span>
            <h3>Clear plan &amp; fixed scope</h3>
            <p>
              You get a simple plan with a fixed price and timeline. You know exactly what
              you&apos;re getting before anything starts.
            </p>
          </li>
          <li className="step__line reveal" aria-hidden="true" />
          <li className="step reveal">
            <span className="step__num">3</span>
            <h3>We build &amp; hand it off</h3>
            <p>
              I build it, set it up, and show you how to use it — in plain English. Then it
              just works in the background.
            </p>
          </li>
        </ol>
        <div className="how__cta reveal">
          <a
            className="btn btn--primary btn--lg"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free discovery call
          </a>
          <span className="how__cta-note">Free · 20 minutes · no pressure</span>
        </div>
      </div>
    </section>
  );
}
