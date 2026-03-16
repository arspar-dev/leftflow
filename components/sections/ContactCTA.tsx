"use client";

import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui";
import type { Locale } from "@/lib/i18n";

interface ContactCTAProps {
  locale: Locale;
}

export function ContactCTA({ locale }: ContactCTAProps) {
  return (
    <section className="py-20 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            What&apos;s your challenge?
          </h2>
          <p className="text-lg text-charcoal-400 max-w-2xl mx-auto mb-10">
            Schedule a free 15-minute discovery call and let&apos;s explore how AI can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={`/${locale}/contact`} variant="white" size="lg">
              Schedule a Call
            </Button>
            <div className="flex items-center gap-6 text-charcoal-400">
              <a href="tel:+31612345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +31 6 12345678
              </a>
              <a href="mailto:info@leftflow.ai" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@leftflow.ai
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
