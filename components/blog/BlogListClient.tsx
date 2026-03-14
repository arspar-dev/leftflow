"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
import { Card, SectionLabel, Badge } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
  dict: Dictionary;
  locale: Locale;
}

const categoryColors: Record<string, string> = {
  automation: "bg-blue-50 text-blue-600",
  ai: "bg-purple-50 text-purple-600",
  industry: "bg-amber-50 text-amber-600",
  caseStudy: "bg-emerald-50 text-emerald-600",
  guide: "bg-rose-50 text-rose-600",
};

export function BlogListClient({ posts, dict, locale }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "automation", "ai", "industry", "caseStudy", "guide"] as const;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const postData = post[locale];
      const matchesSearch = searchQuery === "" ||
        postData.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        postData.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery, locale]);

  return (
    <PageTransition>
      <section className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel>{dict.blog.title}</SectionLabel>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {dict.blog.title}
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                {dict.blog.subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Search + Filters */}
          <FadeIn delay={0.1}>
            <div className="mb-12 space-y-4">
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input
                    type="text"
                    placeholder={dict.blog.search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-primary-500 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {dict.blog.categories[cat as keyof typeof dict.blog.categories]}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Posts Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
              const postData = post[locale];
              return (
                <StaggerItem key={post.slug}>
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <Card className="h-full group cursor-pointer overflow-hidden" padding="sm">
                      {/* Image placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl mb-4 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-primary-400">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                            {dict.blog.categories[post.category as keyof typeof dict.blog.categories]}
                          </span>
                          <span className="text-xs text-slate-400">{post.readTime} {dict.blog.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {postData.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{postData.excerpt}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-slate-400">{post.date}</span>
                          <span className="text-sm font-medium text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            {dict.blog.readMore}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  );
}
