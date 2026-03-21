"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const serviceSlugs = [
  "chatbots-voice-agents",
  "workflow-automation",
  "b2b-sales-automation",
  "custom-ai-solutions",
  "content-creation",
  "corporate-website",
];

export function ServicesSection({ dict, locale }: Props) {
  const items = dict.services.items.slice(0, 6);

  return (
    <section id="services" className="py-24 md:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          {/* Sidebar label */}
          <div className="md:col-span-3">
            <FadeIn>
              <p className="section-label accent-dot text-black/50">
                {dict.services.label}
              </p>
            </FadeIn>
          </div>

          {/* Heading */}
          <div className="md:col-span-9">
            <TextReveal
              as="h2"
              className="heading-display text-black text-[2rem] md:text-[2.75rem]"
            >
              {dict.services.title}
            </TextReveal>
          </div>
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 -m-px">
          {items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <Link
                href={`/${locale}/services/${serviceSlugs[i] || "ai-automation"}`}
                className="block border border-black/[0.06] p-8 md:p-10 h-full group hover:bg-[#f5f4f0] transition-all duration-500 relative"
              >
                {/* Number */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[0.8125rem] font-medium text-[#e63b2e] tabular-nums tracking-tight">
                    {String(i + 1).padStart(2, "0")}
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
                    className="flex-1 h-px bg-black/[0.06] origin-left"
                  />
                </div>

                <h3 className="text-[1.0625rem] font-medium text-black mb-3 tracking-[-0.01em] group-hover:text-[#e63b2e] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="body-16 text-black/50 leading-relaxed mb-6 group-hover:text-black/65 transition-colors duration-300">
                  {item.description}
                </p>
                <span className="body-14 font-medium text-black/30 group-hover:text-[#e63b2e] transition-colors duration-300">
                  {(dict as any).common?.learnMore || "Learn More"} →
                </span>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e63b2e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
