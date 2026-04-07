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
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Simple Process, Real Results</h2>
          <p className="max-w-xl mx-auto text-neutral-500 text-lg">
            No complicated onboarding. We go from conversation to shipped product as efficiently as possible.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span className="text-7xl font-bold text-neutral-200 leading-none mb-4">{step.number}</span>
              <h3 className="font-semibold text-neutral-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="text-5xl font-bold text-neutral-200 leading-none flex-shrink-0 w-16">{step.number}</span>
              <div className="pt-2">
                <h3 className="font-semibold text-neutral-900 text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
