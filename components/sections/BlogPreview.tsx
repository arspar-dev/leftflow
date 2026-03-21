"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { blogPosts } from "@/lib/blog";
import type { Locale, Dictionary } from "@/lib/i18n";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export function BlogPreview({ locale, dict }: Props) {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-3">
                {(dict as any).blogPreview?.title || "Latest Insights"}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950">
                {(dict as any).blog?.title || "Blog"}
              </h2>
            </div>
            <Link href={`/${locale}/blog`} className="hidden md:inline-flex btn-hh-outline text-sm">
              {(dict as any).casesPreview?.viewAll || "View all"} →
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => {
            const postData = post[locale] || post.en;
            return (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block"
                >
                  {/* Blog image */}
                  <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-charcoal-100">
                    <Image
                      src={`/images/blog-${post.slug}.jpg`}
                      alt={postData.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <p className="text-xs font-medium text-primary-500 uppercase tracking-wide mb-2">
                    {post.category}
                  </p>
                  <h3 className="font-semibold text-charcoal-950 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                    {postData.title}
                  </h3>
                  <p className="text-sm text-charcoal-400">
                    {post.date}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="md:hidden mt-8 text-center">
          <Link href={`/${locale}/blog`} className="btn-hh-outline text-sm">
            {(dict as any).casesPreview?.viewAll || "View all"} →
          </Link>
        </div>
      </div>
    </section>
  );
}
