"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
  locale: Locale;
}

const serviceIcons = [
  // Chatbot / message
  <svg key="chat" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  // Workflow / flow
  <svg key="flow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // Target / B2B
  <svg key="target" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  // Brain / Custom AI
  <svg key="brain" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1"/><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1"/><line x1="12" y1="18" x2="12" y2="22"/></svg>,
  // Pen / Content
  <svg key="pen" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.854z"/></svg>,
  // Monitor / Website & E-Commerce
  <svg key="monitor" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
];

const serviceSlugs = [
  "chatbots-voice-agents",
  "workflow-automation",
  "b2b-sales-automation",
  "custom-ai-solutions",
  "content-creation",
  "corporate-website",
];

export function ServicesSection({ dict, locale }: Props) {
  const items = dict.services.items.slice(0, 6);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
            {dict.services.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-4">
            {dict.services.title}
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item: any, i: number) => (
            <StaggerItem key={i}>
              <Link
                href={`/${locale}/services/${serviceSlugs[i] || "ai-automation"}`}
                className="group block p-6 bg-white border border-charcoal-200 rounded-xl hover:border-primary-500 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-charcoal-950 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600">
                  {(dict as any).common?.learnMore || "Learn More"} →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
