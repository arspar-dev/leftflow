"use client";

import Link from "next/link";
import { FadeIn, PageTransition } from "@/components/animations";
import { Badge, Card } from "@/components/ui";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
  dict: Dictionary;
  locale: Locale;
  relatedPosts: BlogPost[];
}

const categoryColors: Record<string, string> = {
  automation: "bg-blue-50 text-blue-600",
  ai: "bg-purple-50 text-purple-600",
  industry: "bg-amber-50 text-amber-600",
  caseStudy: "bg-emerald-50 text-emerald-600",
  guide: "bg-rose-50 text-rose-600",
};

export function BlogDetailClient({ post, dict, locale, relatedPosts }: Props) {
  const postData = post[locale] || post.tr;

  return (
    <PageTransition>
      <article className="pt-32 pb-20 lg:pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                  {dict.blog.categories[post.category as keyof typeof dict.blog.categories]}
                </span>
                <span className="text-sm text-slate-400">{post.date}</span>
                <span className="text-sm text-slate-400">{post.readTime} {dict.blog.readTime}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {postData.title}
              </h1>
              <p className="text-lg text-slate-500">{postData.excerpt}</p>
            </div>
          </FadeIn>

          {/* Cover Image Placeholder */}
          <FadeIn delay={0.1}>
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-12 flex items-center justify-center text-primary-300">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* TOC Sidebar */}
            <FadeIn direction="left" className="hidden lg:block">
              <div className="sticky top-28">
                <h4 className="text-sm font-semibold text-slate-800 mb-4">{dict.blog.toc}</h4>
                <nav className="space-y-2">
                  {postData.headings.map((heading, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block text-sm text-slate-500 hover:text-primary-600 transition-colors py-1"
                    >
                      {heading}
                    </a>
                  ))}
                </nav>
              </div>
            </FadeIn>

            {/* Content */}
            <div className="lg:col-span-3">
              {postData.content.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="mb-8" id={`section-${i}`}>
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">
                      {postData.headings[i]}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">{paragraph}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <FadeIn>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">{dict.blog.relatedPosts}</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => {
                const relData = related[locale] || related.tr;
                return (
                  <FadeIn key={related.slug}>
                    <Link href={`/${locale}/blog/${related.slug}`}>
                      <Card className="h-full group cursor-pointer" padding="md">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[related.category]}`}>
                          {dict.blog.categories[related.category as keyof typeof dict.blog.categories]}
                        </span>
                        <h4 className="font-semibold text-slate-800 mt-3 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {relData.title}
                        </h4>
                        <p className="text-sm text-slate-500 line-clamp-2">{relData.excerpt}</p>
                      </Card>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
