"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

const stepIcons = [
  // Magnifying glass / discovery
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  // Lightbulb / strategy
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/></svg>,
  // Code / implementation
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Trending up / growth
  <svg key="4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

export function WorkflowSection({ dict }: Props) {
  const workflow = (dict as any).workflow;
  if (!workflow) return null;

  return (
    <section className="py-20 bg-charcoal-950 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary-400 uppercase tracking-wide mb-3">
              {workflow.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {workflow.title}
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.steps.map((step: any, i: number) => (
            <StaggerItem key={i}>
              <div className="relative">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-charcoal-700 z-0" />
                )}

                <div className="relative z-10 bg-charcoal-900 rounded-xl p-6 border border-charcoal-800 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500/10 text-primary-400">
                      {stepIcons[i]}
                    </span>
                    <span className="text-sm font-bold text-primary-400">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
