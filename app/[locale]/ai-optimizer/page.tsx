import { getDictionary, type Locale } from "@/lib/i18n";
import { AIOptimizerClient } from "./AIOptimizerClient";

export async function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }, { locale: "nl" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `AI Optimizer | LeftFlow`,
    description: (dict as any).aiOptimizer?.subtitle || "Boost your brand visibility in AI search results",
  };
}

export default async function AIOptimizerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <AIOptimizerClient locale={locale as Locale} dict={dict} />;
}
