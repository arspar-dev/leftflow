import { notFound } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getBlogPost, getAllBlogSlugs, blogPosts } from "@/lib/blog";
import { BlogDetailClient } from "@/components/blog/BlogDetailClient";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const postData = post[locale as Locale] || post.tr;
  return {
    title: `${postData.title} | LeftFlow Blog`,
    description: postData.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const dict = await getDictionary(locale as Locale);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <BlogDetailClient
      post={post}
      dict={dict}
      locale={locale as Locale}
      relatedPosts={relatedPosts}
    />
  );
}
