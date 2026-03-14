"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary } from "@/lib/i18n";

export function ProcessSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>{dict.process.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
            {dict.process.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-800/40 hidden md:block" />

          <div className="space-y-12">
            {dict.process.steps.map((step: any, i: number) => (
              <StaggerItem key={i}>
                <div className="flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-primary-500/30">
                    {i + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
