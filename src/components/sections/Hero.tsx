import { CALENDLY_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="orb orb--blue" />
        <span className="orb orb--pink" />
        <span className="grid-fade" />
      </div>
      <div className="wrap hero__inner">
        <p className="eyebrow reveal">For local businesses that are done with busywork</p>

        <h1 className="hero__title reveal">
          <span className="hl hl--hours">
            Win back <span className="grad">hours every week</span>
            <br />— without hiring a tech team.
          </span>
          <span className="hl hl--busywork">
            Your business,
            <br />
            <span className="grad">minus the busywork.</span>
          </span>
          <span className="hl hl--admin">
            Stop drowning in admin.
            <br />
            Let <span className="grad">smart software</span> do it.
          </span>
        </h1>

        <p className="hero__sub reveal">
          Apex Made builds custom software, simple AI tools, and automations for local
          businesses — so you capture every lead and spend far less time on manual work.
        </p>

        <div className="hero__cta reveal">
          <a
            className="btn btn--primary btn--lg"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free discovery call
          </a>
        </div>

        <p className="hero__trust reveal">
          <span className="dot" />
          Free, no pressure, 20 minutes. You work directly with the person who builds it.
        </p>
      </div>
    </section>
  );
}
