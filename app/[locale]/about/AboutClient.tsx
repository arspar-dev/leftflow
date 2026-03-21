"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
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
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <nav className="text-sm text-charcoal-500 mb-8">
              <Link href={`/${locale}`} className="hover:text-charcoal-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-charcoal-300">{(dict as any).about?.breadcrumb || "Culture"}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 max-w-3xl tracking-tighter leading-[1.08]">
              {(dict as any).about?.breadcrumb || a.label || "Our Culture"}
            </h1>
            <p className="text-base md:text-lg text-charcoal-400 max-w-2xl mb-8 leading-relaxed">
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
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <FadeIn>
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="LeftFlow Team"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[800px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-400 mb-4">
              LeftFlow
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-950 mb-8 tracking-tight">
              {a.title || "Hi, we're LeftFlow"}
            </h2>
            <p className="text-base text-charcoal-500 leading-relaxed max-w-[65ch]">
              {(dict as any).about?.intro || a.mission.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal-50 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-400 mb-4">
              {(dict as any).about?.valuesLabel || "Our Values"}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-950 mb-16 tracking-tight">
              {a.values.title}
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-0">
            {a.values.items.map((v: any, i: number) => (
              <StaggerItem key={i}>
                <div className="border-t border-charcoal-200 last:border-b">
                  <div className="max-w-[1000px] flex items-start gap-8 md:gap-12 py-10 md:py-14">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-mono text-charcoal-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-charcoal-950 mb-2">
                        {v.title}
                      </h3>
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
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-charcoal-400 mb-4">
              LeftFlow
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-charcoal-950 mb-16 tracking-tight">
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
                  <div className="text-left">
                    <div className="w-14 h-14 bg-charcoal-950 mb-4 flex items-center justify-center">
                      <span className="text-sm font-medium text-white tracking-tight">{initials}</span>
                    </div>
                    <h3 className="font-medium text-charcoal-950">{m.name}</h3>
                    <p className="text-sm text-charcoal-500 mb-1">{m.role}</p>
                    <p className="text-xs text-charcoal-400 leading-relaxed">{m.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-950 py-24 md:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
              {(dict as any).about?.readyToWork || "Ready to work together?"}
            </h2>
            <p className="text-base text-charcoal-400 mb-10 max-w-xl mx-auto leading-relaxed">
              {a.mission.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}/contact`} className="btn-hh-white">
                {(dict as any).about?.scheduleCall || dict.common.contactUs}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="mailto:info@leftflow.ai" className="inline-flex items-center gap-2 text-charcoal-400 border border-charcoal-700 px-6 py-3 text-sm font-medium hover:text-white hover:border-charcoal-500 transition-all duration-300">
                info@leftflow.ai
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
