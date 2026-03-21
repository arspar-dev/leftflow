"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  LineReveal,
  AnimatedCounter,
} from "@/components/animations";
import type { ServiceLocaleData } from "@/lib/services";
import type { Dictionary, Locale } from "@/lib/i18n";

/* ── Static data maps ─────────────────────────────────── */

const serviceVideoMap: Record<string, string> = {
  "ai-automation": "/videos/ai-workflow-demo.mp4",
  "chatbots-voice-agents": "/videos/service-ai-agents.mp4",
  "workflow-automation": "/videos/service-workflow-automation.mp4",
  "custom-ai-solutions": "/videos/service-llm-development.mp4",
  "content-creation": "/videos/service-content-generation.mp4",
};

const serviceMetrics: Record<string, { value: string; label: string }[]> = {
  "ai-automation": [
    { value: "%300", label: "Efficiency Increase" },
    { value: "2wk", label: "Setup Time" },
    { value: "1.8x", label: "ROI in 6 months" },
  ],
  "chatbots-voice-agents": [
    { value: "80%", label: "Query Resolution" },
    { value: "24/7", label: "Availability" },
    { value: "3x", label: "Faster Response" },
  ],
  "workflow-automation": [
    { value: "%65", label: "Time Saved" },
    { value: "1 Sprint", label: "Setup" },
    { value: "99.9%", label: "Uptime" },
  ],
  "custom-ai-solutions": [
    { value: "15%", label: "Retention Lift" },
    { value: "3.5x", label: "Faster Insights" },
    { value: "25%", label: "Marketing ROI" },
  ],
  "b2b-sales-automation": [
    { value: "3x", label: "Lead Pipeline" },
    { value: "40%", label: "Shorter Cycle" },
    { value: "65K+", label: "Revenue Generated" },
  ],
  "content-creation": [
    { value: "10x", label: "Content Speed" },
    { value: "60%", label: "Cost Reduction" },
    { value: "3x", label: "Engagement" },
  ],
  "corporate-website": [
    { value: "95+", label: "Lighthouse Score" },
    { value: "2x", label: "Conversion Rate" },
    { value: "<1s", label: "Load Time" },
  ],
  "e-commerce-webshop": [
    { value: "2.5x", label: "Sales Growth" },
    { value: "80%", label: "Conv. Increase" },
    { value: "50%", label: "Cart Recovery" },
  ],
};

/* ── Component ────────────────────────────────────────── */

interface Props {
  service: ServiceLocaleData;
  slug: string;
  locale: Locale;
  dict: Dictionary;
}

export function ServicePageClient({ service, slug, locale, dict }: Props) {
  const videoSrc = serviceVideoMap[slug];
  const metrics = serviceMetrics[slug];
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO — Full-bleed video with parallax zoom
          ════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Parallax media layer */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`/images/service-${slug}.jpg`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={`/images/service-${slug}.jpg`}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          )}
          {videoSrc && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative flex flex-col justify-end min-h-screen max-w-[1400px] mx-auto px-8 md:px-12 pb-20 md:pb-28"
        >
          {/* Red accent label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="section-label accent-dot text-white/70 mb-8"
          >
            {dict.services.label}
          </motion.p>

          {/* Display heading — word reveal */}
          <TextReveal
            as="h1"
            delay={0.5}
            staggerDelay={0.06}
            className="heading-display text-white text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-4xl mb-8 leading-[1.05]"
          >
            {service.title}
          </TextReveal>

          {/* Subtitle */}
          <LineReveal delay={1}>
            <p className="body-18 text-white/60 max-w-xl mb-10">
              {service.subtitle}
            </p>
          </LineReveal>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/${locale}/contact`} className="btn-hh-white group">
              {service.ctaText}
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
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 right-8 md:right-12"
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
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════
          METRICS — Animated counters with dividers
          ════════════════════════════════════════════════════ */}
      {metrics && (
        <section className="bg-white border-b border-black/8">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-3 divide-x divide-black/8">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-12 md:py-16 px-8 text-center"
                >
                  <AnimatedCounter
                    value={m.value}
                    className="block text-[2.25rem] md:text-[3.25rem] font-light text-black tracking-tighter leading-none mb-3"
                  />
                  <p className="section-label text-black/40">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════
          PROBLEM / SOLUTION — Editorial two-column
          ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          {/* Tasman-style: 4-col label + 8-col content */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            {/* Sidebar label */}
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/50 sticky top-28">
                  Approach
                </p>
              </FadeIn>
            </div>

            {/* Content */}
            <div className="md:col-span-9">
              <div className="grid md:grid-cols-2 gap-16 md:gap-20">
                {/* Problem */}
                <FadeIn direction="up" delay={0.1}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-px bg-[#e63b2e]" />
                      <span className="section-label text-[#e63b2e]">Problem</span>
                    </div>
                    <h2 className="heading-display text-black text-[1.5rem] md:text-[1.875rem] mb-8">
                      {service.problemTitle}
                    </h2>
                    <ul className="space-y-5">
                      {service.problems.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + i * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-start gap-4"
                        >
                          <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-black/15 flex-shrink-0" />
                          <p className="body-16 text-black/65">{p}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Solution */}
                <FadeIn direction="up" delay={0.25}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-6 h-px bg-[#0a0a0a]" />
                      <span className="section-label text-black/70">Solution</span>
                    </div>
                    <h2 className="heading-display text-black text-[1.5rem] md:text-[1.875rem] mb-8">
                      {service.solutionTitle}
                    </h2>
                    <ul className="space-y-5">
                      {service.solutions.map((s, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + i * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex items-start gap-4"
                        >
                          <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#e63b2e] flex-shrink-0" />
                          <p className="body-16 text-black/65">{s}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURES — Numbered grid with border divisions
          ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#f5f4f0]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
            {/* Sidebar label */}
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/50">
                  Capabilities
                </p>
              </FadeIn>
            </div>

            {/* Heading */}
            <div className="md:col-span-9">
              <TextReveal
                as="h2"
                className="heading-display text-black text-[2rem] md:text-[2.75rem]"
              >
                {service.name}
              </TextReveal>
            </div>
          </div>

          {/* Feature cards grid — 1px border division pattern */}
          <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 -m-px">
            {service.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="border border-black/[0.06] p-8 md:p-10 h-full group hover:bg-white transition-all duration-500 relative">
                  {/* Number */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[0.8125rem] font-medium text-[#e63b2e] tabular-nums tracking-tight">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex-1 h-px bg-black/[0.06] origin-left"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-[1.0625rem] font-medium text-black mb-3 tracking-[-0.01em] group-hover:text-[#e63b2e] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="body-16 text-black/50 leading-relaxed group-hover:text-black/65 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e63b2e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROCESS — Timeline with animated connectors
          ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-20">
            {/* Sidebar */}
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/50">
                  Process
                </p>
              </FadeIn>
            </div>

            {/* Heading */}
            <div className="md:col-span-9">
              <TextReveal
                as="h2"
                className="heading-display text-black text-[2rem] md:text-[2.75rem]"
              >
                {(dict as any).workflow?.label || "How We Work"}
              </TextReveal>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-0">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative px-8 md:px-10 py-8 md:py-0"
              >
                {/* Top connector line */}
                <div className="flex items-center mb-8">
                  {/* Step dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + i * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-10 h-10 border-2 border-black/10 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-[0.75rem] font-medium text-[#e63b2e] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Connector */}
                  {i < service.processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + i * 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="hidden md:block flex-1 h-px bg-black/10 origin-left ml-4"
                    />
                  )}
                </div>

                {/* Text */}
                <h3 className="text-base font-medium text-black mb-2 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="body-14 text-black/45 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TECH STACK — Horizontal layout with floating pills
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#f5f4f0] border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:items-center">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/50 mb-2">Stack</p>
                <h2 className="text-xl font-medium text-black tracking-tight">
                  Technology
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-5 py-2.5 bg-white border border-black/8 body-14 text-black/65
                               hover:border-[#e63b2e]/30 hover:text-[#e63b2e] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          EXPERT — Minimal centered card
          ════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[560px] mx-auto px-8">
          <FadeIn>
            <div className="text-center">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 h-20 bg-[#0a0a0a] mx-auto mb-6 flex items-center justify-center"
              >
                <span className="text-lg font-light text-white tracking-tight">BK</span>
              </motion.div>

              <h3 className="text-lg font-medium text-black mb-1 tracking-tight">
                Burhan Kocabıyık
              </h3>
              <p className="body-14 text-black/40 mb-8">
                Founder & AI Automation Specialist
              </p>

              <Link href={`/${locale}/contact`} className="btn-hh group body-14">
                {(dict as any).contact?.bookCall || "Book a call"}
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <p className="body-14 text-black/25 mt-6">
                info@leftflow.ai
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Full black with serif heading
          ════════════════════════════════════════════════════ */}
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
            {(dict as any).contactCTA?.title || "Ready to grow with AI?"}
          </TextReveal>

          <LineReveal delay={0.6}>
            <p className="body-18 text-white/45 mb-12 max-w-lg mx-auto">
              {(dict as any).contactCTA?.description}
            </p>
          </LineReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/${locale}/contact`} className="btn-hh-white group">
              {service.ctaText}
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
