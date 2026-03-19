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
    <section className="py-24 md:py-32 bg-charcoal-950">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
            {cta.title || "Ready to transform your business with AI?"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-base text-charcoal-400 mb-10 max-w-xl mx-auto leading-relaxed">
            {cta.description || "Schedule a free 15-minute consultation call"}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${locale}/contact`} className="btn-hh-white">
              {cta.button || "Schedule a call"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="mailto:info@leftflow.ai" className="inline-flex items-center gap-2 text-charcoal-400 border border-charcoal-700 px-6 py-3 text-sm font-medium hover:text-white hover:border-charcoal-500 transition-all duration-300">
              {(dict as any).common?.contactUs || "info@leftflow.ai"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
