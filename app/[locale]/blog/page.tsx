import { getDictionary, type Locale } from "@/lib/i18n";
import { blogPosts } from "@/lib/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata = {
  title: "Blog | LeftFlow",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <BlogListClient posts={blogPosts} dict={dict} locale={locale as Locale} />;
}
