"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Locale, Dictionary } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  const cta = (dict as any).contactCTA || {};

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {cta.title || "Ready to transform your business with AI?"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            {cta.description || "Schedule a free 15-minute consultation call"}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-hh-white">
              {cta.button || "Schedule a call"} →
            </Link>
            <a href="mailto:info@leftflow.ai" className="inline-flex items-center gap-2 text-white border-2 border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
              {(dict as any).common?.contactUs || "Contact us"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
