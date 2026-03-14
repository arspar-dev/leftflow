import { getDictionary, type Locale } from "@/lib/i18n";
import { DataIntelligenceClient } from "./DataIntelligenceClient";

export const metadata = {
  title: "Veri Zekası | LeftFlow",
};

export default async function DataIntelligencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return <DataIntelligenceClient dict={dict} locale={locale as Locale} />;
}
