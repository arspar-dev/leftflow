"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import type { Dictionary, Locale } from "@/lib/i18n";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

const aiOptimizerContent = {
  tr: {
    title: "AI Optimizer",
    subtitle: "AI'da Markanızın Görünürlüğünü Artırın",
    description: "ChatGPT, Gemini ve diğer AI araçlarında markanızın nasıl göründüğünü keşfedin. Generative Engine Optimization (GEO) stratejileriyle AI arama sonuçlarında üst sıralara çıkın.",
    features: [
      { title: "GEO Stratejisi", description: "Geleneksel SEO'nun ötesine geçin. AI araçlarının içeriklerinizi nasıl bulduğunu ve sunduğunu optimize edin.", icon: "strategy" },
      { title: "AI-Friendly İçerik", description: "AI modellerinin kolayca anlayacağı, yapılandırılmış ve semantik olarak zengin içerikler oluşturun.", icon: "content" },
      { title: "Marka Takibi", description: "Markanızın AI yanıtlarında ne sıklıkla ve nasıl bahsedildiğini gerçek zamanlı takip edin.", icon: "tracking" },
      { title: "Rakip Analizi", description: "Rakiplerinizin AI arama sonuçlarındaki konumunu analiz edin ve stratejinizi buna göre şekillendirin.", icon: "analysis" },
      { title: "Dashboard & Raporlama", description: "AI görünürlük metriklerinizi takip etmek için gerçek zamanlı dashboard ve detaylı raporlar.", icon: "dashboard" },
      { title: "Sürekli Optimizasyon", description: "AI algoritmalarındaki değişikliklere hızlı adapte olun. Stratejinizi sürekli güncelleyin.", icon: "optimize" },
    ],
    ctaTitle: "AI Görünürlük Analizi Talep Et",
    ctaDescription: "Ücretsiz analiz ile markanızın AI araçlarında nasıl göründüğünü keşfedin.",
    ctaButton: "Ücretsiz Analiz Al",
    howItWorks: "Nasıl Çalışır?",
    steps: [
      { title: "Analiz", description: "Markanızın mevcut AI görünürlüğünü analiz ediyoruz." },
      { title: "Strateji", description: "GEO stratejisi ve içerik planı oluşturuyoruz." },
      { title: "Uygulama", description: "AI-friendly içerikler üretiyor ve optimize ediyoruz." },
      { title: "Takip", description: "Sonuçları izliyor ve sürekli iyileştiriyoruz." },
    ],
  },
  en: {
    title: "AI Optimizer",
    subtitle: "Boost Your Brand Visibility in AI",
    description: "Discover how your brand appears in ChatGPT, Gemini, and other AI tools. Rise to the top of AI search results with Generative Engine Optimization (GEO) strategies.",
    features: [
      { title: "GEO Strategy", description: "Go beyond traditional SEO. Optimize how AI tools find and present your content.", icon: "strategy" },
      { title: "AI-Friendly Content", description: "Create structured, semantically rich content that AI models can easily understand.", icon: "content" },
      { title: "Brand Monitoring", description: "Track how often and how your brand is mentioned in AI responses in real-time.", icon: "tracking" },
      { title: "Competitor Analysis", description: "Analyze your competitors' position in AI search results and shape your strategy accordingly.", icon: "analysis" },
      { title: "Dashboard & Reporting", description: "Real-time dashboard and detailed reports to track your AI visibility metrics.", icon: "dashboard" },
      { title: "Continuous Optimization", description: "Quickly adapt to changes in AI algorithms. Keep your strategy up-to-date.", icon: "optimize" },
    ],
    ctaTitle: "Request AI Visibility Analysis",
    ctaDescription: "Discover how your brand appears in AI tools with a free analysis.",
    ctaButton: "Get Free Analysis",
    howItWorks: "How It Works",
    steps: [
      { title: "Analysis", description: "We analyze your brand's current AI visibility." },
      { title: "Strategy", description: "We create a GEO strategy and content plan." },
      { title: "Implementation", description: "We produce and optimize AI-friendly content." },
      { title: "Monitoring", description: "We monitor results and continuously improve." },
    ],
  },
  nl: {
    title: "AI Optimizer",
    subtitle: "Vergroot Uw Merkzichtbaarheid in AI",
    description: "Ontdek hoe uw merk verschijnt in ChatGPT, Gemini en andere AI-tools. Stijg naar de top van AI-zoekresultaten met Generative Engine Optimization (GEO) strategieën.",
    features: [
      { title: "GEO Strategie", description: "Ga verder dan traditionele SEO. Optimaliseer hoe AI-tools uw content vinden en presenteren.", icon: "strategy" },
      { title: "AI-Friendly Content", description: "Creëer gestructureerde, semantisch rijke content die AI-modellen gemakkelijk kunnen begrijpen.", icon: "content" },
      { title: "Merk Monitoring", description: "Volg in realtime hoe vaak en hoe uw merk wordt genoemd in AI-antwoorden.", icon: "tracking" },
      { title: "Concurrentie Analyse", description: "Analyseer de positie van uw concurrenten in AI-zoekresultaten en vorm uw strategie dienovereenkomstig.", icon: "analysis" },
      { title: "Dashboard & Rapportage", description: "Realtime dashboard en gedetailleerde rapporten om uw AI-zichtbaarheidsmetrics te volgen.", icon: "dashboard" },
      { title: "Continue Optimalisatie", description: "Pas u snel aan veranderingen in AI-algoritmen aan. Houd uw strategie up-to-date.", icon: "optimize" },
    ],
    ctaTitle: "Vraag AI Zichtbaarheidsanalyse Aan",
    ctaDescription: "Ontdek hoe uw merk verschijnt in AI-tools met een gratis analyse.",
    ctaButton: "Gratis Analyse",
    howItWorks: "Hoe Het Werkt",
    steps: [
      { title: "Analyse", description: "We analyseren de huidige AI-zichtbaarheid van uw merk." },
      { title: "Strategie", description: "We creëren een GEO-strategie en contentplan." },
      { title: "Implementatie", description: "We produceren en optimaliseren AI-friendly content." },
      { title: "Monitoring", description: "We monitoren resultaten en verbeteren continu." },
    ],
  },
};

const featureIcons: Record<string, React.ReactNode> = {
  strategy: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  content: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  tracking: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  analysis: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>,
  dashboard: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>,
  optimize: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>,
};

export function AIOptimizerClient({ locale, dict }: Props) {
  const content = aiOptimizerContent[locale];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-charcoal-950 pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-20 md:py-32 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 text-sm text-primary-400 mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
              Generative Engine Optimization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto">
              {content.title} — {content.subtitle}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
              {content.description}
            </p>
            <Link href={`/${locale}/contact`} className="btn-glow text-lg px-8 py-4">
              {content.ctaButton} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary-500 uppercase tracking-wide mb-4 text-center">
              AI Optimizer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-16 text-center">
              {content.subtitle}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="group p-6 border border-charcoal-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {featureIcons[feature.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-950 mb-2">{feature.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-charcoal-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-950 mb-16 text-center">
              {content.howItWorks}
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {content.steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-500">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <FadeIn>
            <div className="bg-charcoal-950  p-6 md:p-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/40 text-xs ml-3">AI Optimizer Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-white/40 mb-1">AI Mentions</p>
                  <p className="text-2xl font-bold text-primary-400">1,247</p>
                  <p className="text-xs text-green-400">+23% ↑</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-white/40 mb-1">Brand Score</p>
                  <p className="text-2xl font-bold text-primary-400">8.4/10</p>
                  <p className="text-xs text-green-400">+1.2 ↑</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-white/40 mb-1">Competitors</p>
                  <p className="text-2xl font-bold text-white">#2</p>
                  <p className="text-xs text-green-400">+3 ↑</p>
                </div>
              </div>
              {/* Chart bars */}
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-xs text-white/40 mb-4">AI Visibility Trend</p>
                <div className="flex items-end gap-2 h-24">
                  {[35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 82, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary-600 to-primary-400 opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-950" />
        <div className="relative max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {content.ctaTitle}
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              {content.ctaDescription}
            </p>
            <Link href={`/${locale}/contact`} className="btn-hh-white text-lg px-8 py-4">
              {content.ctaButton} →
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
