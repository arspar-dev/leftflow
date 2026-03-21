"use client";

import Link from "next/link";
import Image from "next/image";
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
        <div className="absolute inset-0 bg-charcoal-900" />
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

          {/* Service Image */}
          <FadeIn delay={0.2}>
            <div className="mt-12 relative aspect-video max-w-4xl overflow-hidden">
              <Image
                src={`/images/service-${slug}.jpg`}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 900px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem-Solution */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem */}
            <FadeIn direction="left">
              <div className="p-8 border border-charcoal-200">
                <h2 className="text-xl font-semibold text-charcoal-950 mb-6">
                  {service.problemTitle}
                </h2>
                <ul className="space-y-4">
                  {service.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-charcoal-400 flex-shrink-0" />
                      <span className="text-charcoal-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn direction="right">
              <div className="p-8 border border-charcoal-200 bg-charcoal-50">
                <h2 className="text-xl font-semibold text-charcoal-950 mb-6">
                  {service.solutionTitle}
                </h2>
                <ul className="space-y-4">
                  {service.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 flex-shrink-0" />
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
                <div className="p-6 bg-white border border-charcoal-200 h-full">
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
                  <p className="text-xs font-mono text-charcoal-400 mb-2">{String(i + 1).padStart(2, "0")}</p>
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
            <div className="text-center p-8 bg-charcoal-50 border border-charcoal-200">
              {/* Placeholder avatar */}
              <div className="w-16 h-16 bg-charcoal-950 mx-auto mb-4 flex items-center justify-center">
                <span className="text-lg font-medium text-white tracking-tight">BK</span>
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
        <div className="absolute inset-0 bg-charcoal-950" />
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
