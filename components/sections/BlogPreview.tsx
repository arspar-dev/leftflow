"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations";
import { blogPosts } from "@/lib/blog";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function BlogPreview({ locale, dict }: Props) {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-[32px] font-bold text-charcoal-950 mb-10">
            {(dict as any).blogPreview?.title || "Latest Insights"}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => {
            const postData = post[locale] || post.en;
            return (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block"
                >
                  <p className="text-xs font-medium text-charcoal-500 uppercase tracking-wide mb-2">
                    {post.category}
                  </p>
                  <h3 className="font-semibold text-charcoal-950 group-hover:text-charcoal-700 transition-colors mb-2">
                    {postData.title}
                  </h3>
                  <p className="text-sm text-charcoal-400">
                    {post.date}
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
