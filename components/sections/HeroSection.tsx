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
    <>
      {/* Dark hero with image - HH style */}
      <section className="relative bg-charcoal-950 pt-[72px]">
        <div className="relative w-full aspect-[16/7] max-h-[600px] overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="LeftFlow AI Automation"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
      </section>

      {/* Text intro section - HH style: large heading + paragraph + CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-[32px] md:text-[42px] font-bold leading-tight text-charcoal-950 mb-6">
              {dict.hero.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="text-charcoal-500 text-lg leading-relaxed max-w-3xl mb-8">
              {dict.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link href={`/${locale}/contact`} className="btn-hh">
              {dict.hero.cta} →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
