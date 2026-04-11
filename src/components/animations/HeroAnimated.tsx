"use client";

import { motion, type Variants } from "framer-motion";
import { useSplash } from "@/context/SplashContext";

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HeroAnimated() {
  const { splashDone } = useSplash();

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        initial="hidden"
        animate={splashDone ? "show" : "hidden"}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6"
        >
          Build Software That <br className="hidden sm:block" />
          Grows Your Business
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-500 leading-relaxed mb-10"
        >
          I help small businesses and startups launch custom websites, SaaS products, and AI-powered tools — fast, clean, and built to last.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-500 text-neutral-900 font-semibold text-base hover:bg-brand-600 transition-colors"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="text-neutral-500 font-medium text-base hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
          >
            See my services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
