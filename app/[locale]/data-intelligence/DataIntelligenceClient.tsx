"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
import { Button, SectionLabel } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const capIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
];

export function DataIntelligenceClient({ dict, locale }: Props) {
  const d = dict.dataIntelligence;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-charcoal-950" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <SectionLabel>{d.label}</SectionLabel>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              {d.title}
            </h1>
            <p className="text-lg text-charcoal-400 max-w-2xl mx-auto mb-10">
              {d.subtitle}
            </p>
            <Button
              href={`/${locale}/contact`}
              size="lg"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
            >
              {d.ctaButton}
            </Button>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12 max-w-3xl mx-auto grid grid-cols-3 gap-px bg-charcoal-800">
              {[
                { value: "10x", label: "Data Processing" },
                { value: "98%", label: "Accuracy" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, i) => (
                <div key={i} className="bg-charcoal-950 p-6 md:p-8">
                  <p className="text-xl md:text-2xl font-semibold text-white tracking-tight font-mono">{stat.value}</p>
                  <p className="text-xs text-charcoal-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-charcoal-800 text-center mb-16">
              {d.processTitle}
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-charcoal-200 -translate-y-1/2" />

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
              {d.processSteps.map((step: any, i: number) => (
                <StaggerItem key={i}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-primary-500 text-white flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">{i + 1}</span>
                    </div>
                    <h3 className="font-semibold text-charcoal-800 mb-1">{step.title}</h3>
                    <p className="text-sm text-charcoal-500">{step.description}</p>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-8 left-full -translate-x-1/2 z-20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0693e3" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>{d.capabilities}</SectionLabel>
            <h2 className="text-3xl font-bold text-charcoal-800 text-center mb-16">
              {d.capabilities}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {d.capabilityItems.map((item: any, i: number) => (
              <StaggerItem key={i}>
                <div className="h-full p-8  bg-white border border-charcoal-200/60 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                      {capIcons[i]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-charcoal-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{d.ctaTitle}</h2>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block mt-8">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-charcoal-800 px-8 py-4 font-medium hover:bg-white/90 transition-colors text-lg"
              >
                {d.ctaButton}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
