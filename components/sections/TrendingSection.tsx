"use client";

import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface TrendingSectionProps {
  dict: Dictionary;
}

const topicHrefs = ["#services", "#services", "#features", "#data-intelligence", "#industries"];

export function TrendingSection({ dict }: TrendingSectionProps) {
  const topics = (dict as any).trending?.topics || [
    { label: "AI Solutions" },
    { label: "Workflow Automation" },
    { label: "AI Chatbots" },
    { label: "Data Intelligence" },
    { label: "E-commerce AI" },
  ];

  return (
    <section className="bg-white border-y border-charcoal-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {topics.map((topic: any, i: number) => (
            <Link
              key={topic.label}
              href={topicHrefs[i] || "#"}
              className="text-sm font-medium text-charcoal-800 border-b border-transparent hover:border-charcoal-800 transition-colors duration-200 pb-0.5"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
