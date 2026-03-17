"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ServicesSection({ dict, locale }: Props) {
  return (
    <section id="services" className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-[32px] font-bold text-charcoal-950 mb-8">
            {dict.services.label}
          </h2>
        </FadeIn>

        {/* HH style: simple linked blocks with just service name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {dict.services.items.map((item: any, i: number) => (
            <FadeIn key={i} delay={i * 0.05}>
              <Link
                href={`/${locale}/#services`}
                className="block p-5 border border-charcoal-200 hover:border-charcoal-400 transition-colors group"
              >
                <h4 className="font-semibold text-charcoal-950 group-hover:text-charcoal-700 transition-colors">
                  {item.title}
                </h4>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
