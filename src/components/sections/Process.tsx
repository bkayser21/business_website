const steps = [
  {
    number: "01",
    title: "We Listen First",
    description:
      "Tell us how your business works and what's not working. We study the problem before we propose anything.",
  },
  {
    number: "02",
    title: "We Build Together",
    description:
      "Regular check-ins keep you in the loop. You see real progress, give feedback, and shape the outcome as we go.",
  },
  {
    number: "03",
    title: "We Go Live With You",
    description:
      "We deploy, test, and launch together. You'll feel confident from day one — not handed a manual and left alone.",
  },
  {
    number: "04",
    title: "We Don't Disappear",
    description:
      "Need a fix, a new feature, or just a quick answer? I'm still here after launch — because the work doesn't stop at delivery.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-lavender">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold font-display text-charcoal mb-4"
            style={{ letterSpacing: "-0.5px" }}
          >
            How It Works
          </h2>
          <p className="max-w-xl mx-auto text-stone text-lg">
            No complicated onboarding. We go from first conversation to shipped product as efficiently as possible.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span className="text-7xl font-bold font-display text-charcoal/20 leading-none mb-4">{step.number}</span>
              <h3 className="font-semibold text-charcoal text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-stone leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="text-5xl font-bold font-display text-charcoal/20 leading-none flex-shrink-0 w-16">{step.number}</span>
              <div className="pt-2">
                <h3 className="font-semibold text-charcoal text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
