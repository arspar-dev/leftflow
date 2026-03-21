"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { caseStudies } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface CasesPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function CasesPreview({ locale, dict }: CasesPreviewProps) {
  const featured = caseStudies[0];
  const featuredData = featured[locale] ?? featured.en;

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-500 mb-10">
            {(dict as any).casesPreview?.title || "OUR SUCCESS STORIES"}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <FadeIn direction="left" className="lg:col-span-7">
            <p className="text-xs font-medium text-primary-500 uppercase tracking-wide mb-3">
              {featured.category === "ecommerce" ? "E-commerce" : featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}
              {" · "}
              {featured.client}
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-5">
              {featuredData.title}
            </h3>
            <p className="text-charcoal-400 leading-relaxed max-w-[52ch] mb-8">
              {featuredData.excerpt}
            </p>
            <Link href={`/${locale}/cases/${featured.slug}`} className="btn-hh-white text-sm">
              {(dict as any).casesPreview?.readMore || "Read case"} →
            </Link>
          </FadeIn>

          <FadeIn direction="right" className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-px bg-charcoal-800">
              <div className="bg-charcoal-950 p-6">
                <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-mono">{featured.metric}</p>
                <p className="text-xs text-charcoal-500 mt-1">{(dict as any).caseDetail?.keyResult || "Key Result"}</p>
              </div>
              <div className="bg-charcoal-950 p-6">
                <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-mono">3x</p>
                <p className="text-xs text-charcoal-500 mt-1">ROI</p>
              </div>
              <div className="bg-charcoal-950 p-6">
                <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight font-mono">-40%</p>
                <p className="text-xs text-charcoal-500 mt-1">Cost</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
