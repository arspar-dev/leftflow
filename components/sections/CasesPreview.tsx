"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { caseStudies, caseCategories } from "@/lib/cases";
import type { Locale } from "@/lib/i18n";

interface CasesPreviewProps {
  locale: Locale;
}

const categoryLabelMap: Record<string, string> = {
  all: "All",
  ai: "AI",
  automation: "Automation",
  b2b: "B2B",
  ecommerce: "E-commerce",
};

const displayCategories = caseCategories.filter((c) =>
  ["all", "ai", "automation", "b2b", "ecommerce"].includes(c.value)
);

export function CasesPreview({ locale }: CasesPreviewProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? caseStudies.slice(0, 4)
      : caseStudies.filter((c) => c.category === activeFilter).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <FadeIn>
          <h2 className="text-3xl font-bold text-charcoal-950 text-center mb-10">
            Our Success Stories
          </h2>
        </FadeIn>

        {/* Filter bar */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {displayCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={
                  activeFilter === cat.value
                    ? "bg-charcoal-950 text-white rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                    : "text-charcoal-500 hover:text-charcoal-950 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                }
              >
                {categoryLabelMap[cat.value] ?? cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Cases grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {filtered.map((c) => {
            const localeData = c[locale] ?? c.en;
            return (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/${locale}/cases/${c.slug}`}
                  className="group block"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <Image
                      src={c.image}
                      alt={localeData.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Category tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-charcoal-500 uppercase tracking-wide">
                      {c.category === "ecommerce" ? "E-commerce" : c.category.charAt(0).toUpperCase() + c.category.slice(1)}
                    </span>
                    <span className="text-xs text-charcoal-400">
                      {c.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-1 group-hover:underline">
                    {localeData.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-charcoal-500 mb-3 line-clamp-2">
                    {localeData.excerpt}
                  </p>

                  {/* Read more link */}
                  <span className="text-sm font-medium text-charcoal-950 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View all cases link */}
        <FadeIn>
          <div className="text-center mt-14">
            <Link
              href={`/${locale}/cases`}
              className="btn-hh"
            >
              View all cases
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
