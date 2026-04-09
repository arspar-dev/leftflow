"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, PageTransition } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";

interface Props {
  post: BlogPost;
  dict: Dictionary;
  locale: Locale;
  relatedPosts: BlogPost[];
}

const categoryColors: Record<string, string> = {
  automation: "bg-primary-50 text-primary-500 border border-primary-200",
  ai: "bg-charcoal-100 text-charcoal-700 border border-charcoal-200",
  industry: "bg-accent-400/10 text-accent-500 border border-accent-400/20",
  caseStudy: "bg-success-500/10 text-success-600 border border-success-500/20",
  guide: "bg-rose-50 text-rose-500 border border-rose-200",
};

export function BlogDetailClient({ post, dict, locale, relatedPosts }: Props) {
  const postData = post[locale] || post.tr;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-charcoal-200">
        <div
          className="h-full bg-primary-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Full-width hero image */}
      <section className="relative pt-[72px]">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={`/images/blog-${post.slug}.jpg`}
            alt={postData.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-xs font-medium ${categoryColors[post.category]}`}>
                  {dict.blog.categories[post.category as keyof typeof dict.blog.categories]}
                </span>
                <span className="text-sm text-white/60">{post.date}</span>
                <span className="text-sm text-white/60">{post.readTime} {dict.blog.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {postData.title}
              </h1>
              <p className="text-lg text-white/70 max-w-2xl">{postData.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      <article className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* TOC Sidebar */}
            <FadeIn direction="left" className="hidden lg:block">
              <div className="sticky top-20">
                <h4 className="text-sm font-semibold text-charcoal-800 mb-4">{dict.blog.toc}</h4>
                <nav className="space-y-2 border-l-2 border-charcoal-100 pl-4">
                  {postData.headings.map((heading, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block text-sm text-charcoal-500 hover:text-primary-500 transition-colors py-1 hover:pl-1"
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
                  <div className="mb-10" id={`section-${i}`}>
                    <h2 className="text-xl lg:text-2xl font-bold text-charcoal-800 mb-4">
                      {postData.headings[i]}
                    </h2>
                    {paragraph.split('\n\n').map((p, j) => (
                      <p key={j} className="text-charcoal-600 leading-relaxed text-[17px] mb-4 last:mb-0">{p}</p>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Share / Back */}
          <div className="mt-12 pt-8 border-t border-charcoal-200 flex items-center justify-between">
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium text-charcoal-600 hover:text-primary-500 transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              {(dict as any).blog?.backToBlog || "Back to blog"}
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-12 border-t border-charcoal-200">
            <FadeIn>
              <h3 className="text-2xl font-bold text-charcoal-800 mb-8">{dict.blog.relatedPosts}</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => {
                const relData = related[locale] || related.tr;
                return (
                  <FadeIn key={related.slug}>
                    <Link href={`/${locale}/blog/${related.slug}`}>
                      <div className="h-full group cursor-pointer overflow-hidden bg-charcoal-50 border border-charcoal-200/60 hover:shadow-lg transition-all">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={`/images/blog-${related.slug}.jpg`}
                            alt={relData.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-5">
                          <span className={`px-2.5 py-0.5 text-xs font-medium ${categoryColors[related.category]}`}>
                            {dict.blog.categories[related.category as keyof typeof dict.blog.categories]}
                          </span>
                          <h4 className="font-semibold text-charcoal-800 mt-3 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                            {relData.title}
                          </h4>
                          <p className="text-sm text-charcoal-500 line-clamp-2">{relData.excerpt}</p>
                        </div>
                      </div>
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
