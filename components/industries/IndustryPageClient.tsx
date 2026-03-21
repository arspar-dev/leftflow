"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
import { Button, Card, SectionLabel, Badge } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { Industry } from "@/lib/industries";
import { type ReactNode } from "react";

interface Props {
  industry: Industry;
  dict: Dictionary;
  locale: Locale;
  allIndustries: Industry[];
}

const useCaseIcons: Record<string, ReactNode> = {
  package: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  warehouse: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>,
  bell: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  trending: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  calendar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  pill: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>,
  receipt: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  alert: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>,
  settings: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  check: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  truck: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  wrench: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  map: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  navigation: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>,
  megaphone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
  users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  file: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>,
  folder: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>,
  book: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
  clipboard: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>,
  search: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  calculator: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>,
  "user-plus": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>,
};

export function IndustryPageClient({ industry, dict, locale, allIndustries }: Props) {
  const otherIndustries = allIndustries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  const localeData = industry[locale as keyof Pick<Industry, 'tr' | 'en' | 'nl'>] || industry.en;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-charcoal-950" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Badge variant="primary" className="mb-4">{localeData.name}</Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-3xl">
              {localeData.title}
            </h1>
            <p className="text-lg text-charcoal-400 max-w-2xl mb-8 leading-relaxed">
              {localeData.heroDescription}
            </p>
            <Button
              href={`/${locale}/contact`}
              size="lg"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
            >
              {dict.industries.ctaButton}
            </Button>
          </FadeIn>

          {/* Industry Stats Preview */}
          <FadeIn delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-800 max-w-3xl">
              {localeData.stats.slice(0, 4).map((stat, i) => (
                <div key={i} className="bg-charcoal-950 p-6 md:p-8">
                  <p className="text-xl md:text-2xl font-semibold text-white tracking-tight font-mono">{stat.value}</p>
                  <p className="text-xs text-charcoal-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Industry Image */}
          <FadeIn delay={0.3}>
            <div className="mt-8 relative aspect-video max-w-4xl mx-auto overflow-hidden">
              <Image
                src={`/images/industry-${industry.slug}.jpg`}
                alt={localeData.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 900px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>{dict.industries.useCases}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800 text-center mb-16">
              {localeData.name} — {dict.industries.useCases}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {localeData.useCases.map((uc, i) => (
              <StaggerItem key={i}>
                <div className="h-full p-8  bg-charcoal-50 border border-charcoal-200/60 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                    {useCaseIcons[industry.icons[i]] || useCaseIcons.settings}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-charcoal-500 leading-relaxed text-sm">
                    {uc.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>{dict.industries.benefits}</SectionLabel>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {localeData.stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 bg-white  border border-charcoal-200/60">
                  <p className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-charcoal-500">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>{dict.industries.caseStudy}</SectionLabel>
            <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-800 text-center mb-12">
              {localeData.caseStudy.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { label: dict.industries.challenge, text: localeData.caseStudy.challenge, color: "bg-red-50 text-red-500 border border-red-200" },
              { label: dict.industries.solution, text: localeData.caseStudy.solution, color: "bg-primary-50 text-primary-500 border border-primary-200" },
              { label: dict.industries.result, text: localeData.caseStudy.result, color: "bg-success-500/10 text-success-600 border border-success-500/20" },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="p-6  bg-charcoal-50 border border-charcoal-200/60 h-full">
                  <span className={`inline-block px-3 py-1 text-xs font-medium mb-4 ${item.color}`}>
                    {item.label}
                  </span>
                  <p className="text-charcoal-500 leading-relaxed text-sm">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-charcoal-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {dict.industries.ctaTitle}
            </h2>
            <p className="text-charcoal-400 mb-8 text-lg">
              {dict.industries.ctaDescription}
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-charcoal-800 px-8 py-4 font-medium hover:bg-white/90 transition-colors text-lg"
              >
                {dict.industries.ctaButton}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h3 className="text-2xl font-bold text-charcoal-800 text-center mb-12">
              {dict.industries.label}
            </h3>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-4">
            {otherIndustries.map((ind) => {
              const indLocale = ind[locale as keyof Pick<Industry, 'tr' | 'en' | 'nl'>] || ind.en;
              return (
                <StaggerItem key={ind.slug}>
                  <Link href={`/${locale}/industries/${ind.slug}`}>
                    <div className="group cursor-pointer p-6  bg-white border border-charcoal-200/60 hover:shadow-lg transition-all">
                      <h4 className="font-semibold text-charcoal-800 mb-1 group-hover:text-primary-500 transition-colors">{indLocale.name}</h4>
                      <p className="text-sm text-charcoal-500 line-clamp-2">{indLocale.description}</p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
