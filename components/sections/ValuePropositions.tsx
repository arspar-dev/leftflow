"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

export function ValuePropositions({ dict }: Props) {
  const vp = (dict as any).valuePropositions;
  if (!vp) return null;

  const numbers = ["01", "02", "03", "04"];

  return (
    <section className="py-24 md:py-32 bg-charcoal-950">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-charcoal-500 mb-4">
            {vp.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-16 max-w-2xl">
            {vp.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-px bg-charcoal-800">
          {vp.items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="bg-charcoal-950 p-8 md:p-10 h-full group hover:bg-charcoal-900/50 transition-colors duration-500">
                <p className="text-5xl md:text-6xl font-semibold text-charcoal-800 font-mono mb-6 group-hover:text-charcoal-700 transition-colors">
                  {numbers[i]}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
