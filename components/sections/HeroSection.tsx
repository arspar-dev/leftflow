"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative bg-charcoal-950 min-h-[100dvh] flex items-end pb-20 md:pb-28 pt-32 md:pt-40">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-end">
          {/* Left — headline + CTA */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-500 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              AI Automation Agency
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold text-white leading-[1.08] tracking-tighter mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              {dict.hero.title}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-charcoal-400 leading-relaxed mb-10 max-w-[52ch]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              {dict.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <Link href={`/${locale}/contact`} className="btn-hh-white">
                {dict.hero.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href={`/${locale}/services`} className="btn-hh-outline border-charcoal-700 text-charcoal-300 hover:bg-charcoal-800 hover:text-white hover:border-charcoal-600">
                {(dict as any).services?.label || "Services"}
              </Link>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="grid grid-cols-2 gap-px bg-charcoal-800">
              {[
                { value: "50+", label: (dict as any).stats?.items?.[0]?.label || "Projects" },
                { value: "35+", label: (dict as any).stats?.items?.[2]?.label || "Clients" },
                { value: "3x", label: (dict as any).stats?.items?.[1]?.label || "Efficiency" },
                { value: "24/7", label: "AI Support" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-charcoal-950 p-6 md:p-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                >
                  <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-mono">{stat.value}</p>
                  <p className="text-xs text-charcoal-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-charcoal-800" />
    </section>
  );
}
