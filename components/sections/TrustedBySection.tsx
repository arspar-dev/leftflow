"use client";

import { FadeIn } from "@/components/animations";
import { allClientLogos } from "@/components/logos/ClientLogos";
import type { Dictionary } from "@/lib/i18n";

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-12 bg-[#f5f4f0]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <FadeIn>
          <p className="section-label text-black/30 text-center mb-8">
            {dict.trustedBy.title}
          </p>
        </FadeIn>

        {/* Auto-scrolling marquee carousel */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...allClientLogos, ...allClientLogos].map(({ name, Logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center px-8 min-w-[160px] grayscale hover:grayscale-0 opacity-30 hover:opacity-70 transition-all duration-300"
              >
                <Logo className="h-8 w-auto text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
