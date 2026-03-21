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
    <section className="relative bg-black min-h-[100dvh] flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-dark.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-32 md:py-40">
        <motion.p
          className="text-xs font-medium tracking-[0.25em] uppercase text-white/50 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          AI Automation Agency
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold text-white leading-[1.05] tracking-[-0.035em] mb-8 max-w-4xl whitespace-pre-line"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/60 leading-relaxed mb-12 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          <Link href={`/${locale}/contact`} className="btn-hh-white">
            {dict.hero.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
