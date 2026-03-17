"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface Props {
  dict: Dictionary;
}

const stepIcons = [
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z"/></svg>,
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key="4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

export function WorkflowSection({ dict }: Props) {
  const workflow = (dict as any).workflow;
  if (!workflow) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
              {workflow.label}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-950">
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
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-charcoal-200 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-500" />
                  </div>
                )}

                <div className="relative z-10 text-center">
                  {/* Step number + icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 mx-auto mb-5">
                    {stepIcons[i]}
                  </div>
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal-950 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
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
