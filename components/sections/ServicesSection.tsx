"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const serviceLinks = [
  "#content-generation",
  "#ai-agents",
  "#workflow-automation",
  "#llm-development",
  "#data-intelligence",
];

export function ServicesSection({ dict, locale }: Props) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-950">
              {dict.services.label}
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dict.services.items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <Link
                href={serviceLinks[i] || "#"}
                className="block bg-charcoal-50 rounded-xl p-6 border border-charcoal-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <h3 className="font-semibold text-lg text-charcoal-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
