"use client";

import { useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  cases: CaseStudy[];
  categories: string[];
  locale: Locale;
  dict: Dictionary;
}

const ITEMS_PER_PAGE = 9;

// Line tags per case slug: advisory / systems / both
const CASE_LINE_TAGS: Record<string, ("advisory" | "systems")[]> = {
  westwing: ["advisory", "systems"],
  yena: ["systems"],
  steelify: ["systems"],
  "naz-teknik": ["advisory"],
  tolon: ["advisory", "systems"],
  boutiquerugs: ["systems"],
  arkman: ["systems"],
  "steps-agency": ["systems"],
  "tuva-home": ["systems"],
};

export function CasesListClient({ cases, categories, locale, dict }: Props) {
  const [activeFilter, setActiveFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const nc = (dict as any).newCases || {};

  // Filter cases — filter supports category OR advisory/systems line tag
  const filtered = activeFilter
    ? activeFilter === "advisory" || activeFilter === "systems"
      ? cases.filter((c) => (CASE_LINE_TAGS[c.slug] || []).includes(activeFilter as "advisory" | "systems"))
      : cases.filter((c) => c.category === activeFilter)
    : cases;

  // Pagination
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const paginatedCases = filtered.slice(startIndex, endIndex);

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    setCurrentPage(1);
  };

  return (
    <main className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-charcoal-500 pt-32 mb-6">
          <Link href={`/${locale}`} className="hover:text-charcoal-950 transition-colors">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-charcoal-950">{(dict as any).casesPage?.breadcrumb || "Cases"}</span>
        </nav>

        {/* Page title */}
        <h1 className="text-5xl font-bold text-charcoal-950 pb-4">
          {(dict as any).casesPage?.title || "Cases"}
        </h1>

        {/* Subtitle */}
        {nc.subtitle && (
          <p className="body-16 text-charcoal-500 max-w-2xl pb-10 leading-relaxed">
            {nc.subtitle}
          </p>
        )}

        {/* Filter dropdown */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <select
            value={activeFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="border border-charcoal-200 rounded-lg px-4 py-2 text-sm text-charcoal-950 bg-white focus:outline-none focus:ring-2 focus:ring-charcoal-200"
          >
            <option value="">{(dict as any).casesPage?.filterPlaceholder || "-- Filter --"}</option>
            {nc.filters?.advisory && <option value="advisory">{nc.filters.advisory}</option>}
            {nc.filters?.systems && <option value="systems">{nc.filters.systems}</option>}
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCases.map((c) => {
            const content = c[locale] || c.en;
            const lineTags = CASE_LINE_TAGS[c.slug] || [];
            return (
              <Link
                key={c.slug}
                href={`/${locale}/cases/${c.slug}`}
                className="group block"
              >
                {/* Metric highlight */}
                <div className="bg-charcoal-950 p-6 mb-4 group-hover:bg-charcoal-900 transition-colors relative">
                  <p className="text-3xl font-semibold text-white tracking-tight font-mono">{c.metric}</p>
                  <p className="text-xs text-charcoal-500 mt-1 uppercase tracking-wide">{(dict as any).caseDetail?.keyResult || "Key Result"}</p>
                  {lineTags.length > 0 && (
                    <div className="absolute top-4 right-4 flex gap-1">
                      {lineTags.map((t) => (
                        <span
                          key={t}
                          className={`text-[9px] font-semibold tracking-[0.12em] px-1.5 py-0.5 border uppercase ${
                            t === "advisory"
                              ? "border-[#e63b2e]/40 text-[#e63b2e] bg-[#e63b2e]/10"
                              : "border-white/30 text-white/80 bg-white/5"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category tag */}
                <p className="text-xs text-charcoal-500 uppercase tracking-wide mb-1">
                  {c.category}
                </p>

                {/* Title: Client | Description */}
                <h3 className="font-semibold text-charcoal-950 mb-1">
                  {c.client} | {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-charcoal-500 line-clamp-2 mb-2">
                  {content.excerpt}
                </p>

                {/* Read more link */}
                <span className="text-sm font-medium text-charcoal-950 group-hover:text-primary-500 transition-colors">
                  {(dict as any).casesPage?.readMore || "Read more"} &rarr;
                </span>
              </Link>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-charcoal-500">
            {(dict as any).casesPage?.noResults || "No cases found for this filter."}
          </div>
        )}

        {/* Bottom CTA */}
        {nc.bottomTitle && (
          <div className="border-t border-charcoal-100 mt-20 pt-16 pb-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-4 tracking-tight">
              {nc.bottomTitle}
            </h2>
            <p className="text-charcoal-500 mb-8 leading-relaxed">{nc.bottomDesc}</p>
            <Link
              href={`/${locale}/contact?topic=advisory`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal-950 text-white font-medium text-sm uppercase tracking-wide hover:bg-[#e63b2e] transition-colors"
            >
              {nc.bottomCta}
              <span>→</span>
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between py-16">
            <p className="text-sm text-charcoal-500">
              {(dict as any).casesPage?.showing || "Showing"} {startIndex + 1} - {endIndex} {(dict as any).casesPage?.of || "of"} {totalItems}
            </p>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-charcoal-950 text-white"
                        : "text-charcoal-500 hover:bg-charcoal-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
