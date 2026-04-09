"use client";

import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { FadeIn } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ContactClient({ dict, locale }: Props) {
  const searchParams = useSearchParams();
  const nc = (dict as any).newContact || {};

  const topicRaw = searchParams.get("topic") || "";
  const isSystemsTopic = topicRaw.startsWith("systems");

  const heroCopy = (() => {
    if (isSystemsTopic) {
      if (locale === "tr")
        return {
          label: "SYSTEMS",
          title: "45 dakikalık keşif çağrısı.",
          subtitle:
            "Teknik kapsamı, entegrasyonları ve takvimi birlikte netleştirelim. Aşağıdan uygun saati seçin.",
        };
      if (locale === "nl")
        return {
          label: "SYSTEMS",
          title: "45-minuten discovery call.",
          subtitle:
            "Laten we samen de technische scope, integraties en tijdlijn verhelderen. Kies hieronder een geschikt tijdstip.",
        };
      return {
        label: "SYSTEMS",
        title: "45-minute discovery call.",
        subtitle:
          "Let's walk through the technical scope, integrations and timeline together. Pick a time below.",
      };
    }
    if (locale === "tr")
      return {
        label: "TOPLANTI PLANLA",
        title: "30 dakika, net cevaplar.",
        subtitle:
          "Satış yapmayız. Problemi anlarız, uygun hattı (Advisory veya Systems) öneririz. Aşağıdan uygun saati seçin.",
      };
    if (locale === "nl")
      return {
        label: "PLAN EEN GESPREK",
        title: "30 minuten, heldere antwoorden.",
        subtitle:
          "Geen verkoop. We begrijpen het probleem, adviseren de juiste lijn (Advisory of Systems). Kies hieronder een tijdstip.",
      };
    return {
      label: "BOOK A MEETING",
      title: nc.heroTitle || "30 minutes, clear answers.",
      subtitle:
        "No sales pitch. We understand the problem, recommend the right line (Advisory or Systems). Pick a time below.",
    };
  })();

  return (
    <main className="bg-white">
      {/* Hero + Calendly side by side */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — Text */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <p className="section-label accent-dot text-black/50 mb-4">
                  {heroCopy.label}
                </p>
                <h1 className="heading-display text-black text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-[1.1] mb-6">
                  {heroCopy.title}
                </h1>
                <p className="body-16 text-black/55 leading-relaxed mb-8">
                  {heroCopy.subtitle}
                </p>
                <div className="space-y-4 text-[0.875rem] text-black/40">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#e63b2e] rounded-full flex-shrink-0" />
                    <span>info@leftflow.ai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#e63b2e] rounded-full flex-shrink-0" />
                    <span>Rotterdam · İstanbul</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Calendly */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.15}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/burhantech/doa-tanisma-toplantisi-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ff6900"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section with contact info */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <FadeIn>
              <p className="section-label text-white/30 mb-3">Email</p>
              <a href="mailto:info@leftflow.ai" className="text-white/70 hover:text-white transition-colors body-16">
                info@leftflow.ai
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="section-label text-white/30 mb-3">Rotterdam</p>
              <p className="text-white/70 body-14">Stationsplein 45<br />3013 AK Rotterdam</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="section-label text-white/30 mb-3">İstanbul</p>
              <p className="text-white/70 body-14">Maslak Mahallesi<br />34398 Sarıyer, İstanbul</p>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
