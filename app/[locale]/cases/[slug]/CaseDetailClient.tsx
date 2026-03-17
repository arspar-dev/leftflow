"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui";
import { PageTransition } from "@/components/animations";
import type { CaseStudy } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  caseStudy: CaseStudy;
  otherCases: CaseStudy[];
  locale: Locale;
  dict: Dictionary;
}

export function CaseDetailClient({ caseStudy, otherCases, locale, dict }: Props) {
  const content = caseStudy[locale] || caseStudy.en;

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-charcoal-400 mb-8">
              <Link href={`/${locale}`} className="hover:text-primary-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${locale}/cases`} className="hover:text-primary-500 transition-colors">{(dict as any).casesPage?.breadcrumb || "Cases"}</Link>
              <span>/</span>
              <span className="text-charcoal-700">{caseStudy.client}</span>
            </div>
          </FadeIn>

          {/* Hero */}
          <FadeIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-primary-50 text-primary-600">
                  {caseStudy.category.toUpperCase()}
                </span>
                <span className="text-sm text-charcoal-500">{caseStudy.client}</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-charcoal-800 mb-4">
                {content.title}
              </h1>
              <p className="text-lg text-charcoal-500 leading-relaxed">
                {content.excerpt}
              </p>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.1}>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-charcoal-100 mb-16">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${caseStudy.image})` }}
              />
            </div>
          </FadeIn>

          {/* Key Metric */}
          <FadeIn delay={0.15}>
            <div className="text-center mb-16 py-8 bg-charcoal-50 rounded-2xl border border-charcoal-200/60">
              <div className="text-5xl font-bold text-primary-500 mb-2">{caseStudy.metric}</div>
              <div className="text-sm text-charcoal-500 uppercase tracking-wider">{(dict as any).caseDetail?.keyResult || "Key Result"}</div>
            </div>
          </FadeIn>

          {/* Challenge / Solution / Result */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{(dict as any).caseDetail?.challenge || "Challenge"}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{content.challenge}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 rounded-2xl bg-primary-50 border border-primary-100">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0693e3" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{(dict as any).caseDetail?.solution || "Solution"}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{content.solution}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d084" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{(dict as any).caseDetail?.result || "Result"}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{content.result}</p>
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="text-center mb-16 py-12 bg-charcoal-800 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {(dict as any).caseDetail?.ctaTitle || "Ready for similar results?"}
              </h3>
              <Button href={`/${locale}/contact`} variant="white" size="lg">
                {(dict as any).caseDetail?.ctaButton || "Schedule a Call"}
              </Button>
            </div>
          </FadeIn>

          {/* Other Cases */}
          {otherCases.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-8">{(dict as any).caseDetail?.moreCases || "More Cases"}</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {otherCases.map((c) => {
                  const cContent = c[locale] || c.en;
                  return (
                    <Link key={c.slug} href={`/${locale}/cases/${c.slug}`} className="group">
                      <div className="bg-charcoal-50 rounded-2xl overflow-hidden border border-charcoal-200/60 hover:border-primary-300 transition-all">
                        <div className="aspect-[16/10] overflow-hidden bg-charcoal-200">
                          <div
                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${c.image})` }}
                          />
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-charcoal-400 mb-1">{c.client}</p>
                          <p className="text-sm font-semibold text-charcoal-800 group-hover:text-primary-500 transition-colors">
                            {cContent.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
