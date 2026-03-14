"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rating badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i <= 4 ? "#6366f1" : "none"}
                    stroke="#6366f1"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-600">
                {dict.hero.rating}
              </span>
              <span className="text-sm text-slate-400">|</span>
              <span className="text-sm text-slate-500">{dict.hero.badge}</span>
            </div>
          </div>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
            {dict.hero.title.split("AI").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="relative inline-flex items-center mx-2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-xl text-[0.85em]">
                      AI
                    </span>
                  </span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {dict.hero.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Button
            href={`/${locale}/contact`}
            size="lg"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            {dict.hero.cta}
          </Button>
        </FadeIn>

        {/* Partner logos placeholder */}
        <FadeIn delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-8 lg:gap-12 opacity-40">
            {["TechCorp", "Steellify", "BSS", "YENA", "CoreMap"].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg font-bold text-slate-400 tracking-wider"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
