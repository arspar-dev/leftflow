"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-charcoal-100 text-charcoal-700 text-xs font-medium px-3 py-1 rounded-full">
                <span className="text-yellow-500">★★★★★</span>
                {dict.hero.rating} · {dict.hero.badge}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-4xl md:text-[42px] font-bold leading-tight text-charcoal-950 max-w-3xl">
              {dict.hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-charcoal-500">
              {dict.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link href={`/${locale}/contact`} className="btn-hh mt-8">
              {dict.hero.cta} →
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="LeftFlow AI Automation"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
