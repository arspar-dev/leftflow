"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n";

interface TrendingSectionProps {
  dict: Dictionary;
}

const trendingTopics = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M20.8 7.2A10 10 0 0 0 16.8 3.2L12 12h10a10 10 0 0 0-1.2-4.8z" />
      </svg>
    ),
    color: "bg-primary-50 text-primary-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    color: "bg-secondary-400/10 text-secondary-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "bg-accent-400/10 text-accent-500",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "bg-success-500/10 text-success-600",
  },
];

export function TrendingSection({ dict }: TrendingSectionProps) {
  const topics = [
    { title: "AI Solutions", desc: "Custom artificial intelligence solutions for every business challenge" },
    { title: "Workflow Automation", desc: "Automate repetitive tasks and boost operational efficiency" },
    { title: "AI Chatbots & Agents", desc: "Intelligent conversational agents that scale your operations" },
    { title: "Data Intelligence", desc: "Transform raw data into actionable business insights" },
  ];

  return (
    <section className="py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
              Trending Topics
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-800">
              What&apos;s driving digital growth
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, i) => (
            <StaggerItem key={topic.title}>
              <div className="bg-white rounded-2xl p-6 border border-charcoal-200/60 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 group cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-xl ${trendingTopics[i].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {trendingTopics[i].icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2">{topic.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{topic.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
