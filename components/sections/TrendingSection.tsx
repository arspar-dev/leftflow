"use client";

import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/getDictionary";

interface TrendingSectionProps {
  dict: Dictionary;
}

const topics = [
  { label: "AI Solutions", href: "#services" },
  { label: "Workflow Automation", href: "#services" },
  { label: "AI Chatbots", href: "#features" },
  { label: "Data Intelligence", href: "#data-intelligence" },
  { label: "E-commerce AI", href: "#industries" },
];

export function TrendingSection({ dict }: TrendingSectionProps) {
  return (
    <section className="bg-white border-y border-charcoal-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {topics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
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
