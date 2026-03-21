"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

export function ValuePropositions({ dict }: Props) {
  const vp = (dict as any).valuePropositions;
  if (!vp) return null;

  const numbers = ["01", "02", "03", "04"];

  return (
    <section className="py-24 md:py-36 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="md:col-span-3">
            <FadeIn>
              <p className="section-label accent-dot text-white/40">
                {vp.label}
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-9">
            <TextReveal
              as="h2"
              className="heading-display text-white text-[2rem] md:text-[2.75rem]"
            >
              {vp.title}
            </TextReveal>
          </div>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
          {vp.items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="bg-[#0a0a0a] p-8 md:p-12 h-full group hover:bg-white/[0.03] transition-colors duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[0.8125rem] font-medium text-[#e63b2e] tabular-nums">
                    {numbers[i]}
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex-1 h-px bg-white/[0.06] origin-left"
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="body-16 text-white/40 leading-relaxed max-w-md">
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
