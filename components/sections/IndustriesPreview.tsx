"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { Industry } from "@/lib/industries";
import { type ReactNode } from "react";

interface Props {
  dict: Dictionary;
  locale: Locale;
  industries: Industry[];
}

const industryIcons: Record<string, ReactNode> = {
  ecommerce: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  healthcare: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  finance: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  manufacturing: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>,
  logistics: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  retail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>,
  "real-estate": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  education: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>,
  hr: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

export function IndustriesPreview({ dict, locale, industries }: Props) {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              {dict.industries.label}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800 mb-4">
              {dict.industries.title}
            </h2>
            <p className="text-charcoal-500 max-w-2xl mx-auto">
              {dict.industries.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.slice(0, 6).map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link href={`/${locale}/industries/${industry.slug}`}>
                <div className="h-full group cursor-pointer p-6 rounded-2xl bg-white border border-charcoal-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    {industryIcons[industry.slug]}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-2 group-hover:text-primary-500 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-charcoal-500 line-clamp-2">
                    {industry.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="text-center mt-12">
            <Button href={`/${locale}/industries/ecommerce`} variant="outline">
              {dict.industries.viewAll}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
