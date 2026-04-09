"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function DualCtaSection({ dict, locale }: Props) {
  const d = (dict as any).dualCta || {};
  if (!d.advisoryTitle) return null;

  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      {/* Ambient gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 25% 20%, rgba(230,59,46,0.08), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(255,255,255,0.03), transparent 60%)",
        }}
      />
      {/* SVG noise for depth */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay pointer-events-none"
        aria-hidden
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="max-w-3xl mb-14">
          <p className="section-label accent-dot text-white/55 mb-6">
            {d.kicker || "Let's Begin"}
          </p>
          <h2 className="heading-display text-white text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.05] tracking-[-0.025em]">
            {d.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Advisory card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-10 md:p-12 border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="text-[#e63b2e] text-[11px] font-semibold tracking-[0.14em] mb-5">
              ADVISORY
            </div>
            <h3 className="text-white text-[1.5rem] md:text-[1.75rem] font-semibold tracking-[-0.015em] leading-tight mb-4">
              {d.advisoryTitle}
            </h3>
            <p className="text-white/55 text-[0.9375rem] leading-relaxed mb-8">
              {d.advisoryDesc}
            </p>
            <Link
              href={`/${locale}/advisory`}
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-white group-hover:text-[#e63b2e] transition-colors"
            >
              {d.advisoryBtn}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Systems card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-10 md:p-12 border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="text-white text-[11px] font-semibold tracking-[0.14em] mb-5">
              SYSTEMS
            </div>
            <h3 className="text-white text-[1.5rem] md:text-[1.75rem] font-semibold tracking-[-0.015em] leading-tight mb-4">
              {d.systemsTitle}
            </h3>
            <p className="text-white/55 text-[0.9375rem] leading-relaxed mb-8">
              {d.systemsDesc}
            </p>
            <Link
              href={`/${locale}/systems`}
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-white group-hover:text-white transition-colors"
            >
              {d.systemsBtn}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Footer line */}
        <div className="mt-14 text-center">
          <p className="text-white/50 text-[0.9375rem]">
            {d.footer}{" "}
            <Link
              href={`/${locale}/contact`}
              className="text-white underline decoration-white/30 hover:decoration-[#e63b2e] hover:text-[#e63b2e] transition-colors ml-1"
            >
              {d.footerCta} →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
