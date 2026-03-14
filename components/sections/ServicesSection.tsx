"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { SectionLabel } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

export function ServicesSection({ dict }: Props) {
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

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionLabel>{dict.services.label}</SectionLabel>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-16">
            {dict.services.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {dict.services.items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <div className="group relative bg-slate-50 hover:bg-primary-50/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-transparent hover:border-primary-100">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="flex items-center gap-4 lg:min-w-[200px]">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                      {icons[i]}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <span className="text-4xl font-bold text-primary-200 group-hover:text-primary-300 transition-colors lg:ml-auto">
                    {item.number}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
