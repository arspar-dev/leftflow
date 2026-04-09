"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal, LineReveal } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const newHero = (dict as any).newHero || {};
  const trustBar = (dict as any).trustBar?.items || [];

  return (
    <section ref={heroRef} className="relative bg-[#0a0a0a] min-h-[100dvh] flex items-end overflow-hidden">
      {/* Parallax video background */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
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
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full pb-20 md:pb-28 pt-40"
      >
        {/* Red accent label */}
        <motion.p
          className="section-label accent-dot text-white/60 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {newHero.kicker || "AI Transformation Firm"}
        </motion.p>

        {/* Display heading — word reveal */}
        <TextReveal
          as="h1"
          delay={0.5}
          staggerDelay={0.06}
          className="heading-display text-white text-[2.75rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] max-w-5xl mb-8 leading-[1.05]"
        >
          {newHero.title || dict.hero.title}
        </TextReveal>

        {/* Subtitle */}
        <LineReveal delay={1}>
          <p className="body-18 text-white/55 max-w-2xl mb-10">
            {newHero.subtitle || dict.hero.subtitle}
          </p>
        </LineReveal>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href={`/${locale}/contact?topic=advisory`}
            className="btn-hh-white group"
          >
            {newHero.primaryCta || dict.hero.cta}
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
          <Link
            href={`/${locale}/advisory`}
            className="inline-flex items-center gap-1.5 px-6 py-[14px] text-[0.875rem] font-medium text-white/85 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
          >
            {newHero.secondaryCta || "See our packages"}
            <span className="text-white/60">→</span>
          </Link>
        </motion.div>

        {/* Trust bar — 4 stat items */}
        {trustBar.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl"
          >
            {trustBar.map(
              (item: { value: string; label: string }, i: number) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-white font-semibold text-[1.375rem] tracking-[-0.02em] leading-none">
                    {item.value}
                  </div>
                  <div className="text-white/45 text-[0.75rem] uppercase tracking-[0.06em]">
                    {item.label}
                  </div>
                </div>
              )
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="section-label text-white/30 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}
