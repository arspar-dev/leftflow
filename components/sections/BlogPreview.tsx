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
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-charcoal-950 text-center mb-12">
            {(dict as any).blogPreview?.title || "Latest Insights"}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => {
            const postData = post[locale] || post.en;
            return (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-charcoal-100">
                  <Image
                    src={`/images/blog-${post.slug}.jpg`}
                    alt={postData.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-charcoal-500 uppercase tracking-wide mb-2">
                  {post.category} · {post.date}
                </p>
                <h3 className="font-semibold text-charcoal-950 group-hover:text-primary-500 transition-colors mb-2 line-clamp-2">
                  {postData.title}
                </h3>
                <p className="text-sm text-charcoal-500 line-clamp-2">
                  {postData.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
