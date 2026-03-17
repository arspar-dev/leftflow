"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations";
import { caseStudies, caseCategories } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface CasesPreviewProps {
  locale: Locale;
  dict: Dictionary;
}

export function CasesPreview({ locale, dict }: CasesPreviewProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = (dict as any).casesPreview?.filters || {};
  const categoryLabelMap: Record<string, string> = {
    all: filters.all || "Filter op ...",
    ai: filters.ai || "AI",
    automation: filters.automation || "Automation",
    b2b: filters.b2b || "B2B",
    ecommerce: filters.ecommerce || "E-commerce",
  };

  const filtered =
    activeFilter === "all"
      ? caseStudies.slice(0, 3)
      : caseStudies.filter((c) => c.category === activeFilter).slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading + dropdown filter - HH style */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="text-[32px] font-bold text-charcoal-950">
              {(dict as any).casesPreview?.title || "Our Success Stories"}
            </h2>

            {/* Dropdown filter like HH */}
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="border border-charcoal-300 text-charcoal-700 text-sm px-4 py-2.5 bg-white focus:outline-none focus:border-charcoal-950 min-w-[180px]"
            >
              <option value="all">{categoryLabelMap.all}</option>
              <option value="ai">{categoryLabelMap.ai}</option>
              <option value="automation">{categoryLabelMap.automation}</option>
              <option value="b2b">{categoryLabelMap.b2b}</option>
              <option value="ecommerce">{categoryLabelMap.ecommerce}</option>
            </select>
          </div>
        </FadeIn>

        {/* Cases grid - HH style: large image cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((c) => {
            const localeData = c[locale] ?? c.en;
            return (
              <FadeIn key={c.slug}>
                <Link
                  href={`/${locale}/cases/${c.slug}`}
                  className="group block"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={c.image}
                      alt={localeData.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Category tags */}
                  <p className="text-xs font-medium text-charcoal-500 uppercase tracking-wide mb-2">
                    {c.category === "ecommerce" ? "E-commerce" : c.category.charAt(0).toUpperCase() + c.category.slice(1)}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-charcoal-950 group-hover:text-charcoal-700 transition-colors">
                    {localeData.title}
                  </h3>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
