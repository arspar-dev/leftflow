"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="bg-white pt-40 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <h1 className="text-[42px] font-bold leading-tight text-charcoal-950">
              AI-Powered Automation Agency
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-charcoal-500">
              Hi, we&apos;re LeftFlow. An AI automation agency specializing in
              workflow automation, AI agents, content generation, and LLM
              development. With offices in Amsterdam and Rotterdam, we&apos;re
              always close to our clients and talent.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-charcoal-500">
              Discover how we can help you automate processes and drive growth in
              a competitive, ever-changing market. Curious about what we can do
              for your results?
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href={`/${locale}/contact`} className="btn-hh mt-10">
              {dict.nav.cta}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
