"use client";

import { useEffect } from "react";

function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/placeholder/30min";

  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden border border-neutral-200"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=52DEE5`}
      style={{ minWidth: "320px", height: "660px" }}
    />
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              Pick a time that works for you. The first call is free — no pressure, no commitment.
            </p>

            <div className="flex flex-col gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>30-minute free consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No obligation — just a conversation</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>You&apos;ll get a short prep form after booking</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Direct access — you&apos;re talking to the developer</span>
              </div>
            </div>
          </div>

          {/* Calendly embed */}
          <div className="lg:col-span-3">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
