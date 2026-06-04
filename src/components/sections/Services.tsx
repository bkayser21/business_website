export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <p className="eyebrow eyebrow--center reveal">What we do</p>
        <h2 className="section__title section__title--center reveal">
          Practical tech that gives you your time back.
        </h2>
        <div className="cards">
          <article className="card reveal">
            <span className="card__num">01</span>
            <h3 className="card__title">Custom software, built to fit</h3>
            <p className="card__body">
              A simple tool made for exactly how your business runs — booking, quoting,
              scheduling, tracking. Not another off-the-shelf app you bend yourself around.
            </p>
            <p className="card__out">→ Outcome: software that works the way you already do.</p>
          </article>
          <article className="card card--feature reveal">
            <span className="card__num">02</span>
            <h3 className="card__title">Let AI handle the busywork</h3>
            <p className="card__body">
              Repetitive tasks — follow-ups, data entry, scheduling, intake — handled
              automatically so you stop doing the same thing twice every day.
            </p>
            <p className="card__out">→ Outcome: less manual work, more time on the job.</p>
          </article>
          <article className="card reveal">
            <span className="card__num">03</span>
            <h3 className="card__title">Never miss a lead again</h3>
            <p className="card__body">
              Every call, form, and message gets caught and followed up — automatically and
              fast — so customers hear back right away instead of slipping through the cracks.
            </p>
            <p className="card__out">→ Outcome: more booked jobs from the leads you already get.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
