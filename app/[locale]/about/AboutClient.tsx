"use client";

import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
import { Card, SectionLabel, Button } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const valueIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
];

export function AboutClient({ dict, locale }: Props) {
  const a = dict.about;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-slate-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <SectionLabel>{a.label}</SectionLabel>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6">
              {a.title}
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {a.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-primary-50/50 border border-primary-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{a.mission.title}</h3>
                <p className="text-slate-600 leading-relaxed">{a.mission.description}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{a.vision.title}</h3>
                <p className="text-slate-600 leading-relaxed">{a.vision.description}</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
              {a.values.title}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.items.map((v: any, i: number) => (
              <StaggerItem key={i}>
                <Card padding="lg" className="h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mx-auto mb-4">
                    {valueIcons[i]}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500">{v.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">
              {a.team.title}
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.team.members.map((m: any, i: number) => (
              <StaggerItem key={i}>
                <Card padding="lg" className="text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-800">{m.name}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{m.role}</p>
                  <p className="text-sm text-slate-500">{m.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {dict.footer.ctaTitle}
            </h2>
            <p className="text-slate-500 mb-8">{dict.footer.ctaSubtitle}</p>
            <Button
              href={`/${locale}/contact`}
              size="lg"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
            >
              {dict.nav.cta}
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
