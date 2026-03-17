"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/cases";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  cases: CaseStudy[];
  categories: string[];
  locale: Locale;
  dict: Dictionary;
}

const ITEMS_PER_PAGE = 9;

export function CasesListClient({ cases, categories, locale, dict }: Props) {
  const [activeFilter, setActiveFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter cases
  const filtered = activeFilter
    ? cases.filter((c) => c.category === activeFilter)
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
        <h1 className="text-5xl font-bold text-charcoal-950 pb-8">
          {(dict as any).casesPage?.title || "Cases"}
        </h1>

        {/* Filter dropdown */}
        <div className="mb-10">
          <select
            value={activeFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="border border-charcoal-200 rounded-lg px-4 py-2 text-sm text-charcoal-950 bg-white focus:outline-none focus:ring-2 focus:ring-charcoal-200"
          >
            <option value="">{(dict as any).casesPage?.filterPlaceholder || "-- Filter --"}</option>
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
            return (
              <Link
                key={c.slug}
                href={`/${locale}/cases/${c.slug}`}
                className="group block"
              >
                {/* Thumbnail */}
                <div className="aspect-video rounded-xl overflow-hidden relative bg-charcoal-100 mb-4">
                  <Image
                    src={c.image}
                    alt={content.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
