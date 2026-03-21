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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12">
            <div className="md:col-span-3">
              <p className="section-label accent-dot text-black/40">
                {(dict as any).blogPreview?.title || "Latest Insights"}
              </p>
            </div>
            <div className="md:col-span-9 flex items-end justify-between">
              <h2 className="heading-display text-black text-[2rem] md:text-[2.75rem]">
                {(dict as any).blog?.title || "Blog"}
              </h2>
              <Link href={`/${locale}/blog`} className="hidden md:inline-flex text-sm text-black/40 hover:text-black transition-colors">
                {(dict as any).casesPreview?.viewAll || "View all"} →
              </Link>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => {
            const postData = post[locale] || post.en;
            return (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-charcoal-100">
                    <Image
                      src={`/images/blog-${post.slug}.jpg`}
                      alt={postData.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <p className="section-label text-primary-500 mb-2">
                    {post.category}
                  </p>
                  <h3 className="font-medium text-black group-hover:text-primary-500 transition-colors mb-2 line-clamp-2 tracking-tight">
                    {postData.title}
                  </h3>
                  <p className="body-14 text-black/35">
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
