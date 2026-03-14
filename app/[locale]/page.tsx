import { getDictionary, type Locale } from "@/lib/i18n";
import { industries } from "@/lib/industries";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { PageTransition } from "@/components/animations";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <PageTransition>
      <HeroSection dict={dict} locale={locale as Locale} />
      <ServicesSection dict={dict} locale={locale as Locale} />
      <FeaturesSection dict={dict} />
      <IndustriesPreview dict={dict} locale={locale as Locale} industries={industries} />
      <ProcessSection dict={dict} />
      <TestimonialSection dict={dict} />
      <StatsSection dict={dict} locale={locale as Locale} />
      <FAQSection dict={dict} />
    </PageTransition>
  );
}
