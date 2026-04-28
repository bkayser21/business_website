export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-charcoal leading-tight mb-6"
          style={{ letterSpacing: "-1.5px" }}
        >
          Your Software. Built From the Inside Out.
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone leading-relaxed mb-10">
          Tired of software that almost works? Get custom tools built around how your business actually runs — and own them outright.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-cyan text-charcoal font-semibold text-base hover:bg-cyan-deep transition-colors"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="text-stone font-medium text-base hover:text-charcoal transition-colors inline-flex items-center gap-1"
          >
            See how it works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
