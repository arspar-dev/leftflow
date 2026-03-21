"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal, LineReveal } from "@/components/animations";
import type { Locale, Dictionary } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  const cta = (dict as any).contactCTA || {};

  return (
    <section className="relative py-28 md:py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[800px] mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label accent-dot text-white/40 mb-8">
            Get Started
          </p>
        </motion.div>

        <TextReveal
          as="h2"
          delay={0.2}
          className="heading-display text-white text-[2rem] md:text-[3rem] mb-8"
        >
          {cta.title || "Ready to transform your business with AI?"}
        </TextReveal>

        <LineReveal delay={0.6}>
          <p className="body-18 text-white/45 mb-12 max-w-lg mx-auto">
            {cta.description || "Schedule a free 15-minute consultation call"}
          </p>
        </LineReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href={`/${locale}/contact`} className="btn-hh-white group">
            {cta.button || "Schedule a call"}
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="mailto:info@leftflow.ai"
            className="inline-flex items-center gap-2 text-white/40 border border-white/10 px-6 py-3 text-sm font-medium hover:text-white hover:border-white/25 transition-all duration-300"
          >
            info@leftflow.ai
          </a>
        </motion.div>
      </div>
    </section>
  );
}
