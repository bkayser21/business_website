const valueProps = [
  {
    title: "You'll always know who's building your software",
    description: "No account managers, no handoffs. You work directly with me from first call to final launch.",
  },
  {
    title: "Software that fits how you work",
    description: "I take time to understand how you actually operate before writing a single line of code.",
  },
  {
    title: "Built to last — no duct tape, no shortcuts",
    description: "Clean, solid builds that hold up as your business grows — not something you'll need to redo in a year.",
  },
  {
    title: "No agency bloat. No waiting around.",
    description: "Small, focused engagements that ship quickly — without the overhead or delays of a big dev shop.",
  },
];

const outcomes = [
  "You own 100% of the code",
  "No retainers or lock-in",
  "No account managers — just Bryan",
  "Built for how you work, not a template",
  "Response time: within 1 business day",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(82,222,229,0.13) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold font-display text-off-white mb-6"
              style={{ letterSpacing: "-0.5px" }}
            >
              Why Apex Made
            </h2>
            <p className="text-lavender text-lg leading-relaxed mb-10">
              Most software is built for everyone, which means it fits no one perfectly. I build software around how your business actually works — then hand it over so it&apos;s truly yours.
            </p>

            <ul className="flex flex-col gap-6">
              {valueProps.map((vp) => (
                <li key={vp.title} className="flex gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-cyan flex items-center justify-center">
                    <svg className="w-3 h-3 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-off-white">{vp.title}</p>
                    <p className="text-sm text-lavender mt-1 leading-relaxed">{vp.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-cyan text-charcoal font-semibold text-base hover:bg-cyan-deep transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Outcomes panel */}
          <div className="hidden lg:flex flex-col gap-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-charcoal-deep rounded-xl px-5 py-4 border border-charcoal"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="text-lavender text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
