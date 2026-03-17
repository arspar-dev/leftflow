"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#1a1a2e]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {dict.hero.title}
              </h1>
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

            {/* Trust indicators */}
            <FadeIn delay={0.3}>
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-charcoal-800">
                <div>
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-sm text-charcoal-500">{(dict as any).stats?.items?.[0]?.label || "Projects"}</p>
                </div>
                <div className="w-px h-10 bg-charcoal-800" />
                <div>
                  <p className="text-2xl font-bold text-white">35+</p>
                  <p className="text-sm text-charcoal-500">{(dict as any).stats?.items?.[2]?.label || "Clients"}</p>
                </div>
                <div className="w-px h-10 bg-charcoal-800" />
                <div>
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="text-sm text-charcoal-500">AI Support</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Dashboard mockup */}
          <FadeIn delay={0.2} direction="right">
            <div className="hidden lg:block relative">
              {/* Floating dashboard card */}
              <div className="relative bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-charcoal-500">LeftFlow AI Dashboard</span>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-charcoal-800 rounded-lg p-3">
                    <p className="text-xs text-charcoal-500 mb-1">Efficiency</p>
                    <p className="text-lg font-bold text-primary-400">+300%</p>
                  </div>
                  <div className="bg-charcoal-800 rounded-lg p-3">
                    <p className="text-xs text-charcoal-500 mb-1">Time Saved</p>
                    <p className="text-lg font-bold text-success-400">904h</p>
                  </div>
                  <div className="bg-charcoal-800 rounded-lg p-3">
                    <p className="text-xs text-charcoal-500 mb-1">Cost</p>
                    <p className="text-lg font-bold text-secondary-400">-40%</p>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 8
                          ? 'linear-gradient(to top, #2563EB, #7C3AED)'
                          : '#1e293b',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-charcoal-600">Jan</span>
                  <span className="text-[10px] text-charcoal-600">Dec</span>
                </div>
              </div>

              {/* Glow effect behind dashboard */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl -z-10 rounded-3xl" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
