"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const valueIcons = [
  // Lightbulb - Innovation
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
  // Heart - Client Success
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  // Academic Cap - Learning
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
  // Eye - Transparency
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  // Globe - Remote-First
  <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
];

const avatarGradients = [
  "from-primary-400 to-primary-600",
  "from-secondary-400 to-secondary-600",
  "from-green-400 to-emerald-600",
  "from-amber-400 to-orange-600",
];

export function AboutClient({ dict, locale }: Props) {
  const a = dict.about;

  return (
    <main>
      {/* Hero - Dark gradient */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111827] to-[#1a1a2e]" />
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <nav className="text-sm text-white/50 mb-8">
              <Link href={`/${locale}`} className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white/80">{(dict as any).about?.breadcrumb || "Culture"}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              {(dict as any).about?.breadcrumb || a.label || "Our Culture"}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
              {a.subtitle}
            </p>
            <Link href={`/${locale}/contact`} className="btn-glow">
              {dict.common.contactUs} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-4">
              LeftFlow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-8">
              {a.title || "Hi, we're LeftFlow"}
            </h2>
            <p className="text-lg text-charcoal-500 leading-relaxed">
              {(dict as any).about?.intro || a.mission.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values - HH "8 Things" numbered format */}
      <section className="bg-charcoal-50 py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-4 text-center">
              {(dict as any).about?.valuesLabel || "Our Values"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-16 text-center">
              {a.values.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-0">
            {a.values.items.map((v: any, i: number) => (
              <StaggerItem key={i}>
                <div className="group border-t border-charcoal-200 last:border-b">
                  <div className="max-w-[1000px] mx-auto flex items-start gap-6 md:gap-10 py-10 md:py-14">
                    {/* Number */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <span className="text-5xl md:text-7xl font-bold text-charcoal-200 group-hover:text-primary-500 transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                          {valueIcons[i]}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal-950">
                          {v.title}
                        </h3>
                      </div>
                      <p className="text-charcoal-500 leading-relaxed max-w-xl">
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
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-4 text-center">
              LeftFlow
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-16 text-center">
              {a.team.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {a.team.members.map((m: any, i: number) => {
              const initials = m.name
                .split(" ")
                .map((n: string) => n.charAt(0))
                .join("");
              return (
                <StaggerItem key={i}>
                  <div className="text-center group">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${
                        avatarGradients[i % avatarGradients.length]
                      } mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      {initials}
                    </div>
                    <h3 className="font-bold text-charcoal-950 text-lg">{m.name}</h3>
                    <p className="text-sm text-charcoal-500 mb-2">{m.role}</p>
                    <p className="text-xs text-charcoal-400">{m.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Career CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600" />
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {(dict as any).about?.readyToWork || "Ready to work together?"}
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              {a.mission.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/contact`} className="btn-hh-white">
                {(dict as any).about?.scheduleCall || dict.common.contactUs} →
              </Link>
              <a href="mailto:info@leftflow.ai" className="inline-flex items-center gap-2 text-white border-2 border-white/30 rounded-full px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                info@leftflow.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
