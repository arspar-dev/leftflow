"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface TrendingSectionProps {
  dict: Dictionary;
}

const topicHrefs = ["#services", "#services", "#services", "#data-intelligence", "#industries"];

export function TrendingSection({ dict }: TrendingSectionProps) {
  const trending = (dict as any).trending;
  const topics = trending?.topics || [
    { label: "AI Solutions" },
    { label: "Workflow Automation" },
    { label: "AI Chatbots" },
    { label: "Data Intelligence" },
    { label: "E-commerce AI" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-[32px] font-bold text-charcoal-950 mb-3">
            {trending?.title || "Trending topics"}
          </h2>
          <p className="text-charcoal-500 mb-8 max-w-2xl">
            {trending?.subtitle || "These themes and topics come up frequently with our clients and in the market."}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {topics.map((topic: any, i: number) => (
            <FadeIn key={topic.label} delay={i * 0.05}>
              <Link
                href={topicHrefs[i] || "#"}
                className="block p-5 border border-charcoal-200 hover:border-charcoal-400 transition-colors group"
              >
                <h4 className="font-semibold text-charcoal-950 group-hover:text-charcoal-700 transition-colors">
                  {topic.label}
                </h4>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
