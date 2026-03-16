"use client";

import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

const clientNames = [
  "BoutiqueRugs",
  "Westwing",
  "YENA",
  "Tolon",
  "Arkman",
  "Naz Teknik",
  "Octo",
  "Steps Agency",
  "Steelify",
  "Tuva Home",
];

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-charcoal-950 mb-12">
            {dict.trustedBy.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {clientNames.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center py-6"
            >
              <span className="text-xl font-bold text-charcoal-400">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
