"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const serviceVisuals = [
  { image: "/images/service-content-generation.jpg", video: "/videos/service-content-generation.mp4" },
  { image: "/images/service-ai-agents.jpg", video: "/videos/service-ai-agents.mp4" },
  { image: "/images/service-workflow-automation.jpg", video: "/videos/service-workflow-automation.mp4" },
  { image: "/images/service-llm-development.jpg", video: "/videos/service-llm-development.mp4" },
];

const icons = [
  // Content creation
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.855z"/></svg>,
  // AI agent
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
  // Workflow
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  // LLM
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
];

export function ServicesSection({ dict }: Props) {
  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>{dict.services.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-16">
            {dict.services.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-16">
          {dict.services.items.map((item: any, i: number) => {
            const isReversed = i % 2 === 1;
            return (
              <StaggerItem key={i}>
                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
                  {/* Text side */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                        {icons[i]}
                      </div>
                      <span className="text-sm font-mono text-primary-400 tracking-wider">{item.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Visual side */}
                  <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-primary-900/20 aspect-video bg-slate-800">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={serviceVisuals[i]?.image}
                        className="w-full h-full object-cover"
                      >
                        <source src={serviceVisuals[i]?.video} type="video/mp4" />
                      </video>
                      {/* Fallback image if no video */}
                      <Image
                        src={serviceVisuals[i]?.image || "/images/hero.jpg"}
                        alt={item.title}
                        fill
                        className="object-cover -z-10"
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
