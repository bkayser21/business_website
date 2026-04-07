const valueProps = [
  {
    title: "Direct access to the developer",
    description: "No account managers or middlemen. You work directly with me — the person writing your code.",
  },
  {
    title: "Business-first thinking",
    description: "I build what moves the needle for your business, not what's technically impressive for its own sake.",
  },
  {
    title: "Modern, maintainable code",
    description: "Clean architecture and up-to-date tooling. Your codebase won't become a liability six months from now.",
  },
  {
    title: "Fast turnaround",
    description: "No agency bloat. Small, focused engagements that ship quickly and adapt as your needs change.",
  },
];

const stack = [
  { label: "Specialization", value: "Full-Stack Web & SaaS" },
  { label: "Stack", value: "Next.js, React, Node, TypeScript" },
  { label: "AI Integrations", value: "OpenAI, Anthropic, LangChain" },
  { label: "Response time", value: "Within 1 business day" },
  { label: "Availability", value: "Open to new projects" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Why Work With Me
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-10">
              I&apos;m a software developer focused on helping small businesses and startups get real software built — not endless proposals. When you hire me, you get a dedicated engineer who understands your goals and writes the code to achieve them.
            </p>

            <ul className="flex flex-col gap-6">
              {valueProps.map((vp) => (
                <li key={vp.title} className="flex gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{vp.title}</p>
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{vp.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-500 text-neutral-900 font-semibold text-base hover:bg-brand-600 transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Plain stack list */}
          <div className="hidden lg:flex flex-col gap-5">
            {stack.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5 border-b border-neutral-200 pb-5 last:border-0 last:pb-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{item.label}</span>
                <span className="text-base font-medium text-neutral-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
