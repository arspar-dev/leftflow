"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericPart = parseInt(target.replace(/\D/g, "")) || 0;
  const prefix = target.match(/^[^\d]*/)?.[0] || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && numericPart > 0) {
          let start = 0;
          const duration = 1500;
          const stepTime = duration / numericPart;
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= numericPart) clearInterval(timer);
          }, Math.max(stepTime, 15));
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart]);

  if (target === "24/7") return <div ref={ref}>24/7</div>;
  return <div ref={ref}>{prefix}{count}{suffix}</div>;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden min-h-[90vh] flex items-center">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="/images/hero-dashboard.png"
      >
        <source src="/videos/hero-ai.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/60" />

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <FadeIn>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {dict.hero.title}
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-charcoal-400 leading-relaxed mb-10 max-w-xl">
                {dict.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/contact`} className="btn-glow">
                  {dict.hero.cta} →
                </Link>
                <Link href={`/${locale}/services`} className="btn-hh-white text-sm">
                  {(dict as any).services?.label || "Services"}
                </Link>
              </div>
            </FadeIn>

            {/* Animated trust indicators */}
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-charcoal-800">
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter target="50" suffix="+" />
                  </p>
                  <p className="text-sm text-charcoal-500">{(dict as any).stats?.items?.[0]?.label || "Projects"}</p>
                </div>
                <div className="w-px h-10 bg-charcoal-800" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter target="35" suffix="+" />
                  </p>
                  <p className="text-sm text-charcoal-500">{(dict as any).stats?.items?.[2]?.label || "Clients"}</p>
                </div>
                <div className="w-px h-10 bg-charcoal-800" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter target="24/7" />
                  </p>
                  <p className="text-sm text-charcoal-500">AI Support</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Dashboard image or mockup */}
          <FadeIn delay={0.2} direction="right">
            <div className="hidden lg:block relative">
              <motion.div
                className="relative overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <Image
                  src="/images/hero-dashboard.png"
                  alt="AI Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>

              {/* Floating metric cards */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-charcoal-900/90 backdrop-blur border border-charcoal-700 p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xs text-charcoal-500 mb-1">Efficiency</p>
                <p className="text-xl font-bold text-primary-400">+300%</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-charcoal-900/90 backdrop-blur border border-charcoal-700 p-4 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-xs text-charcoal-500 mb-1">Cost Reduction</p>
                <p className="text-xl font-bold text-secondary-400">-40%</p>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
