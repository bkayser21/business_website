export default function WhyApexMade() {
  return (
    <section className="section why" id="why">
      <div className="wrap why__inner">
        <div className="why__intro reveal">
          <p className="eyebrow">Why Apex Made</p>
          <h2 className="section__title">
            Serious technical chops. Delivered in plain English.
          </h2>
          <p className="section__lede">
            I&apos;m a data scientist by background who&apos;d rather build something that
            genuinely saves you time than sell you buzzwords. Here&apos;s what that means for you.
          </p>
        </div>
        <ul className="why__list">
          <li className="why__item reveal">
            <h3>A real technical background</h3>
            <p>
              Years of working with data and software — so what I build is solid, not a
              fragile patch-job. You get the depth without the lecture.
            </p>
          </li>
          <li className="why__item reveal">
            <h3>You work directly with me</h3>
            <p>
              No offshore team, no rotating account managers. The person you talk to is the
              person who builds it and stands behind it.
            </p>
          </li>
          <li className="why__item reveal">
            <h3>Fixed scope, no surprises</h3>
            <p>
              A clear price, a clear timeline, a clear deliverable — agreed before we start.
              No open-ended invoices, no scope creep.
            </p>
          </li>
          <li className="why__item reveal">
            <h3>Built for local businesses</h3>
            <p>
              Practical tools for how you actually work — not enterprise software shrunk down
              and sold to you at a markup.
            </p>
          </li>
        </ul>
        {/* placeholder for client logos / testimonials — add as they come in */}
        <div className="trustbar reveal" aria-label="Early client logos coming soon">
          <span className="trustbar__label">Trusted by local businesses</span>
          <div className="trustbar__slots">
            <span className="logo-slot">your logo here</span>
            <span className="logo-slot">your logo here</span>
            <span className="logo-slot">your logo here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
