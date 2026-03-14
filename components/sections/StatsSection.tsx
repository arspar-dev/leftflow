"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button, SectionLabel } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function StatsSection({ dict, locale }: Props) {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stats-background.jpg"
          alt=""
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <SectionLabel>{dict.stats.label}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {dict.stats.title}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {dict.stats.description}
            </p>
            <Button
              href={`/${locale}/contact`}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
            >
              {dict.nav.cta}
            </Button>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-6">
            {dict.stats.items.map((stat: any, i: number) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800">
                  <p className="text-3xl lg:text-4xl font-bold text-primary-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
