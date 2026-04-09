"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, TextReveal } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function AboutClient({ dict, locale }: Props) {
  const a = dict.about;

  return (
    <main>
      {/* Hero with video */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/about-team.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-motion.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/70 to-charcoal-950/90" />
        <div className="relative max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">
          <FadeIn>
            <nav className="text-sm text-white/40 mb-8">
              <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">{(dict as any).about?.breadcrumb || "Culture"}</span>
            </nav>
          </FadeIn>
          <TextReveal
            as="h1"
            className="heading-display text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] mb-6 max-w-3xl leading-[1.08]"
          >
            {(dict as any).about?.breadcrumb || a.label || "Our Culture"}
          </TextReveal>
          <FadeIn delay={0.6}>
            <p className="body-18 text-white/50 max-w-2xl mb-8">
              {a.subtitle}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh-white">
              {dict.common.contactUs}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Team Photo */}
      <section className="bg-charcoal-950">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-12">
          <FadeIn>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="LeftFlow Team"
                fill
                className="object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/40">
                  LeftFlow
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-9">
              <FadeIn>
                <h2 className="heading-display text-black text-[2rem] md:text-[2.75rem] mb-8">
                  {a.title || "Hi, we're LeftFlow"}
                </h2>
                <p className="body-16 text-black/50 leading-relaxed max-w-[65ch]">
                  {(dict as any).about?.intro || a.mission.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal-100 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/40">
                  {(dict as any).about?.valuesLabel || "Our Values"}
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-9">
              <TextReveal
                as="h2"
                className="heading-display text-black text-[2rem] md:text-[2.75rem]"
              >
                {a.values.title}
              </TextReveal>
            </div>
          </div>

          <StaggerContainer className="space-y-0">
            {a.values.items.map((v: any, i: number) => (
              <StaggerItem key={i}>
                <div className="border-t border-black/10 last:border-b">
                  <div className="max-w-[1000px] flex items-start gap-8 md:gap-12 py-10 md:py-14">
                    <div className="flex-shrink-0">
                      <span className="text-[0.75rem] font-medium text-primary-500 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-medium text-black mb-2 tracking-tight">
                        {v.title}
                      </h3>
                      <p className="body-14 text-black/50 max-w-xl">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="section-label accent-dot text-black/40">
                  LeftFlow
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-9">
              <TextReveal
                as="h2"
                className="heading-display text-black text-[2rem] md:text-[2.75rem]"
              >
                {a.team.title}
              </TextReveal>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {a.team.members.map((m: any, i: number) => {
              const initials = m.name
                .split(" ")
                .map((n: string) => n.charAt(0))
                .join("");
              return (
                <StaggerItem key={i}>
                  <div className="text-left">
                    <div className="w-14 h-14 bg-charcoal-950 mb-4 flex items-center justify-center">
                      <span className="text-sm font-medium text-white tracking-tight">{initials}</span>
                    </div>
                    <h3 className="font-medium text-black">{m.name}</h3>
                    <p className="body-14 text-black/50 mb-1">{m.role}</p>
                    <p className="text-xs text-black/35 leading-relaxed">{m.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Amsterdam Tech Partnership */}
      {(dict as any).amsterdamTechSection && (
        <section id="amsterdam-tech" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-8 md:px-12">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16">
              <div className="md:col-span-4">
                <FadeIn>
                  <p className="section-label accent-dot text-white/50 mb-6">
                    {(dict as any).amsterdamTechSection.kicker}
                  </p>
                  <div className="inline-flex items-center gap-3 px-5 py-3 border border-white/15 bg-white/[0.03] mb-6">
                    <span className="w-2 h-2 bg-[#DA1219] rounded-full" />
                    <span className="font-semibold tracking-[0.05em] text-white uppercase text-[0.875rem]">
                      Amsterdam Tech
                    </span>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-8">
                <FadeIn>
                  <h2 className="heading-display text-white text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.05] mb-6">
                    {(dict as any).amsterdamTechSection.title}
                  </h2>
                  <p className="body-18 text-white/60 leading-relaxed mb-10 max-w-2xl">
                    {(dict as any).amsterdamTechSection.lead}
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-16 pt-16 border-t border-white/10">
              <div className="md:col-span-5">
                <h3 className="heading-display text-white text-[1.5rem] md:text-[1.875rem] mb-5">
                  {(dict as any).amsterdamTechSection.whoTitle}
                </h3>
                <p className="body-16 text-white/55 leading-relaxed">
                  {(dict as any).amsterdamTechSection.whoBody}
                </p>
              </div>
              <div className="md:col-span-7">
                <h3 className="heading-display text-white text-[1.5rem] md:text-[1.875rem] mb-8">
                  {(dict as any).amsterdamTechSection.benefitsTitle}
                </h3>
                <div className="space-y-6">
                  {((dict as any).amsterdamTechSection.benefits || []).map((b: any, i: number) => (
                    <div key={i} className="flex gap-5 border-t border-white/10 pt-6">
                      <span className="text-[#e63b2e] font-semibold tabular-nums text-[0.875rem] mt-1 min-w-[2ch]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-white font-medium text-[1.0625rem] mb-2">{b.title}</h4>
                        <p className="text-white/55 text-[0.9375rem] leading-relaxed">{b.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/10">
              <p className="text-white/50 text-[0.9375rem] max-w-xl flex-1">
                {(dict as any).amsterdamTechSection.footer}
              </p>
              <div className="flex gap-3">
                <Link
                  href={`/${locale}/advisory`}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white text-[0.875rem] font-medium hover:border-white/50 transition-colors"
                >
                  {(dict as any).amsterdamTechSection.linkAdvisory}
                  <span>→</span>
                </Link>
                <Link
                  href={`/${locale}/systems`}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white text-[0.875rem] font-medium hover:border-white/50 transition-colors"
                >
                  {(dict as any).amsterdamTechSection.linkSystems}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-charcoal-950 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto px-8 md:px-12 text-center">
          <FadeIn>
            <TextReveal
              as="h2"
              className="heading-display text-white text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] mb-6"
            >
              {(dict as any).about?.readyToWork || "Ready to work together?"}
            </TextReveal>
            <p className="body-16 text-white/40 mb-10 max-w-xl mx-auto">
              {a.mission.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/contact`} className="btn-hh-white">
                {(dict as any).about?.scheduleCall || dict.common.contactUs}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="mailto:info@leftflow.ai" className="inline-flex items-center gap-2 text-white/40 border border-white/10 px-6 py-3 text-sm font-medium hover:text-white hover:border-white/30 transition-all duration-300">
                info@leftflow.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
