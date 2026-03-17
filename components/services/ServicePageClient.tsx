"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { ServiceLocaleData } from "@/lib/services";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  service: ServiceLocaleData;
  slug: string;
  locale: Locale;
  dict: Dictionary;
}

export function ServicePageClient({ service, slug, locale, dict }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={`/images/service-${slug}.jpg`} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <p className="text-sm font-medium text-primary-400 uppercase tracking-wide mb-4">
              {dict.services.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-charcoal-400 max-w-2xl mb-8">
              {service.subtitle}
            </p>
            <Link href={`/${locale}/contact`} className="btn-glow">
              {service.ctaText} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Problem-Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <FadeIn direction="left">
              <div className="p-8 bg-red-50 rounded-xl border border-red-100">
                <h2 className="text-xl font-bold text-charcoal-950 mb-6">
                  {service.problemTitle}
                </h2>
                <ul className="space-y-4">
                  {service.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      </span>
                      <span className="text-charcoal-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn direction="right">
              <div className="p-8 bg-green-50 rounded-xl border border-green-100">
                <h2 className="text-xl font-bold text-charcoal-950 mb-6">
                  {service.solutionTitle}
                </h2>
                <ul className="space-y-4">
                  {service.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      <span className="text-charcoal-600">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-charcoal-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-charcoal-950 mb-12 text-center">
              {service.name}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="p-6 bg-white rounded-xl border border-charcoal-200 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-charcoal-950 mb-12 text-center">
              {(dict as any).workflow?.label || "How We Work"}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {service.processSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-500">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-charcoal-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-charcoal-950 mb-8 text-center">
              Technology Stack
            </h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <span className="px-5 py-2.5 bg-white border border-charcoal-200 text-sm font-medium text-charcoal-700">
                  {tech}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Card */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[600px] mx-auto px-6">
          <FadeIn>
            <div className="text-center p-8 bg-charcoal-50 rounded-2xl border border-charcoal-200">
              {/* Placeholder avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">BK</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal-950 mb-1">
                Burhan Kocabıyık
              </h3>
              <p className="text-sm text-charcoal-500 mb-6">
                Founder & AI Automation Specialist
              </p>
              <Link href={`/${locale}/contact`} className="btn-hh text-sm">
                {(dict as any).contact?.bookCall || "Book a call"} →
              </Link>
              <p className="text-xs text-charcoal-400 mt-4">
                info@leftflow.ai
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600" />
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {(dict as any).contactCTA?.title || "Ready to grow with AI?"}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {(dict as any).contactCTA?.description}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh-white">
              {service.ctaText} →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
