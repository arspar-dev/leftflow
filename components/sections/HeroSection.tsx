"use client";

import { Button } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                {dict.hero.badge}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-800 leading-[1.1] mb-6">
                {dict.hero.title.split("AI").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="relative inline-flex items-center mx-1">
                        <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-xl text-[0.85em]">
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
              <p className="text-lg text-charcoal-500 max-w-xl mb-8 leading-relaxed">
                {dict.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={`/${locale}/contact`}
                  size="lg"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  }
                >
                  {dict.hero.cta}
                </Button>
                <Button href={`/${locale}/cases`} variant="outline" size="lg">
                  View Cases
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex gap-8 mt-12 pt-8 border-t border-charcoal-200">
                {[
                  { value: "70+", label: "Clients" },
                  { value: "55K+", label: "Users Served" },
                  { value: "46%", label: "Avg. Improvement" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary-500">{stat.value}</div>
                    <div className="text-sm text-charcoal-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-charcoal-500 ml-2">leftflow-dashboard</span>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/hero.jpg"
                  className="w-full h-auto rounded-xl"
                >
                  <source src="/videos/hero-motion.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-charcoal-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success-500/10 rounded-xl flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d084" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal-800">Automation Active</div>
                    <div className="text-xs text-charcoal-500">3 workflows running</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-charcoal-100">
                <div className="text-2xl font-bold text-primary-500">↑ 86%</div>
                <div className="text-xs text-charcoal-500 mt-1">Efficiency Gain</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
