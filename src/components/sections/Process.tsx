const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We align on your goals, timeline, and budget. I ask the right questions so there are no surprises later.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I design and develop your solution iteratively, with regular check-ins so you always know where things stand.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We deploy, test, and go live together. I handle the technical details so you can focus on your business.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing help when you need it — bug fixes, new features, or just a question. I don't disappear after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Simple Process, Real Results</h2>
          <p className="max-w-xl mx-auto text-neutral-600 text-lg">
            No complicated onboarding. We go from conversation to shipped product as efficiently as possible.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-neutral-200 z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-600 flex items-center justify-center mb-5 shadow-sm">
                <span className="text-brand-600 font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-semibold text-neutral-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-brand-600 font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="flex-1 w-px bg-neutral-200 my-2" />}
              </div>
              <div className="pb-8 pt-2">
                <h3 className="font-semibold text-neutral-900 text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
