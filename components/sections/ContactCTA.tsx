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
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Meeting booking text */}
          <FadeIn>
            <div>
              <h2 className="text-[32px] font-bold text-charcoal-950 mb-4">
                {cta.title || "Schedule a 15-minute discovery call"}
              </h2>
              <p className="text-charcoal-500 mb-6">
                {cta.description || "During the call, we'll discuss your challenge. Prefer to call directly?"}
              </p>
              <p className="text-lg font-bold text-charcoal-950 mb-1">
                <a href="tel:+31612345678" className="hover:underline">
                  +31 6 12345678
                </a>
              </p>
              <p className="text-charcoal-500 mb-8">
                <a href="mailto:info@leftflow.ai" className="hover:text-charcoal-950 transition-colors">
                  info@leftflow.ai
                </a>
              </p>
              <Link href={`/${locale}/contact`} className="btn-hh">
                {cta.button || "Schedule a call"}
              </Link>
            </div>
          </FadeIn>

          {/* Right: Challenge form teaser */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xl font-bold text-charcoal-950 mb-4">
                {(dict as any).contact?.challengeTitle || "What is your challenge?"}
              </h3>
              <p className="text-charcoal-500 mb-6 text-sm">
                {(dict as any).contact?.challengeDescription || "Curious about what we can do for your results? Challenge us and we'll get in touch within 2 business days."}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="btn-hh-outline text-sm"
              >
                {cta.button || "Contact us"} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
