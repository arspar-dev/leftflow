"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
  dict: Dictionary;
  locale: Locale;
}

const categoryColors: Record<string, string> = {
  automation: "bg-primary-50 text-primary-600",
  ai: "bg-secondary-400/10 text-secondary-500",
  industry: "bg-accent-400/10 text-accent-500",
  caseStudy: "bg-success-500/10 text-success-600",
  guide: "bg-red-50 text-red-500",
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
      <section className="pt-32 pb-20 lg:pt-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium mb-3">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                Insights
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
                {dict.blog.title}
              </h1>
              <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
                {dict.blog.subtitle}
              </p>
            </div>
          </FadeIn>

          {/* Search + Filters */}
          <FadeIn delay={0.1}>
            <div className="mb-12 space-y-4">
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input
                    type="text"
                    placeholder={dict.blog.search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? "bg-primary-500 text-white shadow-md"
                        : "bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200"
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
                    <div className="h-full group cursor-pointer bg-charcoal-50 overflow-hidden border border-charcoal-200/60 hover:border-primary-300 hover:shadow-lg transition-all">
                      <div className="aspect-video overflow-hidden relative">
                        <Image
                          src={`/images/blog-${post.slug}.jpg`}
                          alt={postData.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category]}`}>
                            {dict.blog.categories[post.category as keyof typeof dict.blog.categories]}
                          </span>
                          <span className="text-xs text-charcoal-400">{post.readTime} {dict.blog.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-charcoal-800 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                          {postData.title}
                        </h3>
                        <p className="text-sm text-charcoal-500 line-clamp-2">{postData.excerpt}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-charcoal-400">{post.date}</span>
                          <span className="text-sm font-medium text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            {dict.blog.readMore}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </span>
                        </div>
                      </div>
                    </div>
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
