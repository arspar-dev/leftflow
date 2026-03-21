"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { caseStudies } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface CasesPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function CasesPreview({ locale, dict }: CasesPreviewProps) {
  const cases = caseStudies.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-charcoal-950 text-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label accent-dot text-white/30">
                {(dict as any).casesPreview?.title || "Our Success Stories"}
              </p>
            </div>
            <Link href={`/${locale}/cases`} className="hidden md:inline-flex text-sm text-white/40 hover:text-white transition-colors">
              {(dict as any).casesPreview?.viewAll || "View all cases"} →
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {cases.map((c) => {
            const caseData = c[locale] ?? c.en;
            return (
              <StaggerItem key={c.slug}>
                <Link href={`/${locale}/cases/${c.slug}`} className="group block relative aspect-[4/3] overflow-hidden bg-charcoal-950">
                  <Image
                    src={c.image}
                    alt={caseData.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70 border border-white/20 bg-black/30 backdrop-blur-sm">
                      {c.category === "ecommerce" ? "E-commerce" : c.category.charAt(0).toUpperCase() + c.category.slice(1)}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-2xl font-semibold text-white font-mono">
                      {c.metric}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p className="text-xs text-white/50 mb-1">{c.client}</p>
                    <h3 className="text-base font-medium text-white mb-2 line-clamp-2 tracking-tight">
                      {caseData.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs text-white/0 group-hover:text-white/80 transition-all duration-300">
                      {(dict as any).casesPreview?.readMore || "Read case"} →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="md:hidden mt-8 text-center">
          <Link href={`/${locale}/cases`} className="btn-hh-white text-sm">
            {(dict as any).casesPreview?.viewAll || "View all cases"} →
          </Link>
        </div>
      </div>
    </section>
  );
}
