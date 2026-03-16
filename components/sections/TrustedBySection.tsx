"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

const clientLogos = [
  { name: "BoutiqueRugs", display: "BoutiqueRugs" },
  { name: "Westwing", display: "Westwing" },
  { name: "YENA", display: "YENA" },
  { name: "Tolon", display: "Tolon" },
  { name: "Arkman", display: "Arkman" },
  { name: "Naz Teknik", display: "Naz Teknik" },
  { name: "Octo", display: "Octo" },
  { name: "Steps Agency", display: "Steps" },
  { name: "Steelify", display: "Steelify" },
  { name: "Tuva Home", display: "Tuva Home" },
];

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-12 bg-white border-b border-charcoal-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs text-charcoal-400 mb-8 uppercase tracking-[0.2em] font-medium">
            {dict.trustedBy.title}
          </p>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-marquee gap-16 items-center">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="text-charcoal-400 hover:text-charcoal-700 transition-colors shrink-0 flex items-center"
                style={{ minWidth: "fit-content" }}
              >
                <span className="font-bold text-lg tracking-tight whitespace-nowrap">
                  {logo.display}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
