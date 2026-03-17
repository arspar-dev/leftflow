"use client";

import { FadeIn } from "@/components/animations";
import { allClientLogos } from "@/components/logos/ClientLogos";
import type { Dictionary } from "@/lib/i18n";

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-12 bg-charcoal-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-sm text-charcoal-500 text-center mb-8">
            {dict.trustedBy.title}
          </p>
        </FadeIn>

        {/* Auto-scrolling marquee carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {/* Duplicate logos for seamless loop */}
            {[...allClientLogos, ...allClientLogos].map(({ name, Logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center px-8 min-w-[160px] grayscale hover:grayscale-0 opacity-40 hover:opacity-80 transition-all duration-300"
              >
                <Logo className="h-8 w-auto text-charcoal-950" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
