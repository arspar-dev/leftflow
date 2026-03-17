"use client";

import Image from "next/image";
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
    <section className="py-16 md:py-24 bg-charcoal-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
            {(dict as any).casesPreview?.title || "Success Stories"}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 items-center mt-8">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featuredData.title}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-xs font-medium text-primary-500 uppercase tracking-wide mb-2">
                {featured.category === "ecommerce" ? "E-commerce" : featured.category.charAt(0).toUpperCase() + featured.category.slice(1)}
              </p>
              <p className="text-sm font-semibold text-charcoal-500 mb-3">
                {featured.client}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-950 mb-4">
                {featuredData.title}
              </h3>
              <p className="text-charcoal-500 leading-relaxed mb-8">
                {featuredData.excerpt}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-charcoal-200">
                  <p className="text-2xl font-bold text-primary-500">{featured.metric}</p>
                  <p className="text-xs text-charcoal-500 mt-1">{(dict as any).caseDetail?.keyResult || "Key Result"}</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-charcoal-200">
                  <p className="text-2xl font-bold text-primary-500">3x</p>
                  <p className="text-xs text-charcoal-500 mt-1">ROI</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-charcoal-200">
                  <p className="text-2xl font-bold text-primary-500">-40%</p>
                  <p className="text-xs text-charcoal-500 mt-1">Cost</p>
                </div>
              </div>

              <Link href={`/${locale}/cases/${featured.slug}`} className="btn-hh text-sm">
                {(dict as any).casesPreview?.readMore || "Read case"} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
