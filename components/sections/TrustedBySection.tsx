"use client";

import { FadeIn } from "@/components/animations";
import { allClientLogos } from "@/components/logos/ClientLogos";
import type { Dictionary } from "@/lib/i18n";

export function TrustedBySection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-16 bg-charcoal-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-center text-lg font-medium text-charcoal-500 mb-10">
            {dict.trustedBy.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {allClientLogos.map(({ name, Logo }) => (
            <div
              key={name}
              className="flex items-center justify-center py-4 opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <Logo className="h-8 w-auto text-charcoal-950" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
