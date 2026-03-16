"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Locale } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
}

export function ContactCTA({ locale }: ContactCTAProps) {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <FadeIn>
          {/* Heading */}
          <h2 className="text-3xl font-bold text-charcoal-950 mb-4">
            Schedule a 15-minute discovery call
          </h2>

          {/* Body text */}
          <p className="text-charcoal-500 max-w-xl mx-auto mb-8">
            During the call, we&apos;ll discuss your challenge. Prefer to call
            directly?
          </p>

          {/* Phone number */}
          <p className="text-xl font-bold text-charcoal-950 mb-2">
            <a
              href="tel:+31612345678"
              className="hover:underline"
            >
              +31 6 12345678
            </a>
          </p>

          {/* Email */}
          <p className="text-charcoal-500 mb-10">
            <a
              href="mailto:info@leftflow.ai"
              className="hover:text-charcoal-950 transition-colors"
            >
              info@leftflow.ai
            </a>
          </p>

          {/* CTA button */}
          <Link href={`/${locale}/contact`} className="btn-hh">
            Schedule a call
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
