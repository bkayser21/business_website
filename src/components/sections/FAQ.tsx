export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="wrap faq__inner">
        <div className="faq__head reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="section__title">The questions everyone asks.</h2>
          <p className="section__lede">
            Still unsure? The discovery call answers the rest — no obligation.
          </p>
        </div>
        <div className="faq__list">
          <details className="qa reveal" open>
            <summary>What does it cost?</summary>
            <p>
              Every project is fixed-price and quoted up front, so you&apos;ll never get a
              surprise bill. Most owners start with one small, high-impact win — and we go
              from there only if it&apos;s worth it to you.
            </p>
          </details>
          <details className="qa reveal">
            <summary>How long does it take?</summary>
            <p>
              Many automations are up and running in one to two weeks. Larger custom builds
              take a few weeks. You&apos;ll get a realistic timeline on the call — before you
              commit to anything.
            </p>
          </details>
          <details className="qa reveal">
            <summary>Do I need to be technical?</summary>
            <p>
              Not even slightly — that&apos;s the whole point. I handle every technical detail
              and explain everything in plain English. If a term needs a glossary, I won&apos;t
              use it.
            </p>
          </details>
          <details className="qa reveal">
            <summary>What happens on the call?</summary>
            <p>
              Twenty honest minutes. You tell me what&apos;s eating your time; I tell you
              straight whether I can help, and roughly what it would take. If it&apos;s not a
              fit, I&apos;ll say so.
            </p>
          </details>
          <details className="qa reveal">
            <summary>Is my data safe?</summary>
            <p>
              Yes. Your data stays yours. I build on secure, established tools, only connect
              what&apos;s needed, and never sell or share your information. Full stop.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
