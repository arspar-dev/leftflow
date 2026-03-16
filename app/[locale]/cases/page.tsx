import { getDictionary, type Locale } from "@/lib/i18n";
import { caseStudies, caseCategories } from "@/lib/cases";
import { CasesListClient } from "./CasesListClient";

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <CasesListClient
      cases={caseStudies}
      categories={caseCategories}
      locale={locale as Locale}
      dict={dict}
    />
  );
}
