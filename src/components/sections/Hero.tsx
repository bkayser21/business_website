import { BRAND_NAME } from "@/lib/config";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
          Available for new projects
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
          Build Software That <br className="hidden sm:block" />
          <span className="text-brand-600">Grows Your Business</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-600 leading-relaxed mb-10">
          I help small businesses and startups launch custom websites, SaaS products, and AI-powered tools — fast, clean, and built to last.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-600 text-white font-semibold text-base hover:bg-brand-700 transition-colors shadow-sm"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-neutral-200 text-neutral-700 font-semibold text-base hover:bg-neutral-50 transition-colors"
          >
            See my services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center border-t border-neutral-100 pt-12">
          {[
            { stat: "4+", label: "Services offered" },
            { stat: "Fast", label: "Turnaround times" },
            { stat: "Clean", label: "Maintainable code" },
            { stat: "Direct", label: "Access to the developer" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-neutral-900">{item.stat}</p>
              <p className="text-sm text-neutral-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
