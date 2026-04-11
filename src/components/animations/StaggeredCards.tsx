"use client";

import { motion, type Variants } from "framer-motion";
import { services } from "@/data/services";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function StaggeredCards() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={cardVariant}
          whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
          className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-neutral-300 transition-colors duration-200 cursor-default"
        >
          <div className="text-neutral-400 mb-4">{service.icon}</div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">{service.title}</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
