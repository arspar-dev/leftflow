export interface ServiceLocaleData {
  name: string;
  title: string;
  subtitle: string;
  ctaText: string;
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
  features: { title: string; description: string }[];
  techStack: string[];
  processSteps: { title: string; description: string }[];
}

export interface Service {
  slug: string;
  icon: string;
  category: "ai" | "web" | "sales";
  tr: ServiceLocaleData;
  en: ServiceLocaleData;
  nl: ServiceLocaleData;
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    icon: "zap",
    category: "ai",
    tr: {
      name: "AI Otomasyon",
      title: "AI Otomasyon Çözümleri",
      subtitle: "İş süreçlerinizi yapay zeka ile otomatikleştirin. Manuel görevleri ortadan kaldırın, verimliliği artırın, maliyetleri düşürün.",
      ctaText: "Ücretsiz Otomasyon Analizi Al",
      problemTitle: "Ekibiniz hâlâ tekrarlayan görevlerle vakit kaybediyor mu?",
      problems: [
        "Manuel veri girişi saatlerce sürüyor",
        "Sistemler arası bilgi transferi hataya açık",
        "Müşteri yanıt süreleri uzun",
        "Raporlama süreçleri verimsiz"
      ],
      solutionTitle: "AI otomasyonla bu sorunları kökten çözün",
      solutions: [
        "Otomatik veri işleme ve sınıflandırma",
        "Sistem entegrasyonları ile kesintisiz veri akışı",
        "Anlık, AI destekli müşteri yanıtları",
        "Otomatik rapor oluşturma ve dağıtım"
      ],
      features: [
        { title: "Süreç Otomasyonu", description: "İş akışlarını tanımlayın, otomatikleştirin ve optimize edin." },
        { title: "Veri İşleme", description: "AI ile belge analizi, veri çıkarma ve sınıflandırma." },
        { title: "E-posta Otomasyonu", description: "Akıllı e-posta sınıflandırma, yönlendirme ve yanıtlama." },
        { title: "CRM Entegrasyonu", description: "Salesforce, HubSpot, Pipedrive bağlantıları." },
        { title: "Raporlama", description: "Otomatik rapor oluşturma, dashboard ve dağıtım." },
        { title: "AI Model Entegrasyonu", description: "GPT, Claude ve özel model entegrasyonları." }
      ],
      techStack: ["n8n", "Make", "Zapier", "OpenAI", "Anthropic", "Google Cloud", "AWS", "Python"],
      processSteps: [
        { title: "Süreç Analizi", description: "Mevcut iş akışlarınızı analiz ediyoruz" },
        { title: "Çözüm Tasarımı", description: "Otomasyon stratejisi oluşturuyoruz" },
        { title: "Geliştirme", description: "Otomasyon akışlarını kuruyoruz" },
        { title: "İzleme & Optimizasyon", description: "Performansı izliyor ve iyileştiriyoruz" }
      ]
    },
    en: {
      name: "AI Automation",
      title: "AI Automation Solutions",
      subtitle: "Automate your business processes with AI. Eliminate manual tasks, boost efficiency, and reduce costs.",
      ctaText: "Get Free Automation Analysis",
      problemTitle: "Is your team still wasting time on repetitive tasks?",
      problems: [
        "Manual data entry takes hours",
        "Cross-system data transfers are error-prone",
        "Customer response times are too long",
        "Reporting processes are inefficient"
      ],
      solutionTitle: "Solve these problems at their root with AI automation",
      solutions: [
        "Automated data processing and classification",
        "Seamless data flow through system integrations",
        "Instant, AI-powered customer responses",
        "Automated report generation and distribution"
      ],
      features: [
        { title: "Process Automation", description: "Define, automate, and optimize your workflows." },
        { title: "Data Processing", description: "AI-powered document analysis, data extraction, and classification." },
        { title: "Email Automation", description: "Smart email classification, routing, and response." },
        { title: "CRM Integration", description: "Salesforce, HubSpot, and Pipedrive connections." },
        { title: "Reporting", description: "Automated report generation, dashboards, and distribution." },
        { title: "AI Model Integration", description: "GPT, Claude, and custom model integrations." }
      ],
      techStack: ["n8n", "Make", "Zapier", "OpenAI", "Anthropic", "Google Cloud", "AWS", "Python"],
      processSteps: [
        { title: "Process Analysis", description: "We analyze your existing workflows" },
        { title: "Solution Design", description: "We create an automation strategy" },
        { title: "Development", description: "We build automation workflows" },
        { title: "Monitoring & Optimization", description: "We monitor and improve performance" }
      ]
    },
    nl: {
      name: "AI Automatisering",
      title: "AI Automatiseringsoplossingen",
      subtitle: "Automatiseer uw bedrijfsprocessen met AI. Elimineer handmatige taken, verhoog efficiëntie en verlaag kosten.",
      ctaText: "Gratis automatiseringsanalyse",
      problemTitle: "Verspilt uw team nog steeds tijd aan repetitieve taken?",
      problems: [
        "Handmatige data-invoer kost uren",
        "Data-overdracht tussen systemen is foutgevoelig",
        "Reactietijden voor klanten zijn te lang",
        "Rapportageprocessen zijn inefficiënt"
      ],
      solutionTitle: "Los deze problemen fundamenteel op met AI-automatisering",
      solutions: [
        "Geautomatiseerde dataverwerking en classificatie",
        "Naadloze datastroom door systeemintegraties",
        "Directe, AI-gestuurde klantreacties",
        "Geautomatiseerde rapportgeneratie en distributie"
      ],
      features: [
        { title: "Procesautomatisering", description: "Definieer, automatiseer en optimaliseer uw workflows." },
        { title: "Dataverwerking", description: "AI-gestuurde documentanalyse, data-extractie en classificatie." },
        { title: "E-mailautomatisering", description: "Slimme e-mailclassificatie, routing en respons." },
        { title: "CRM-integratie", description: "Salesforce, HubSpot en Pipedrive verbindingen." },
        { title: "Rapportage", description: "Geautomatiseerde rapportgeneratie, dashboards en distributie." },
        { title: "AI-modelintegratie", description: "GPT, Claude en aangepaste modelintegraties." }
      ],
      techStack: ["n8n", "Make", "Zapier", "OpenAI", "Anthropic", "Google Cloud", "AWS", "Python"],
      processSteps: [
        { title: "Procesanalyse", description: "We analyseren uw bestaande workflows" },
        { title: "Oplossingsontwerp", description: "We creëren een automatiseringsstrategie" },
        { title: "Ontwikkeling", description: "We bouwen automatiseringsworkflows" },
        { title: "Monitoring & Optimalisatie", description: "We monitoren en verbeteren de prestaties" }
      ]
    }
  },
  {
    slug: "chatbots-voice-agents",
    icon: "message-circle",
    category: "ai",
    tr: {
      name: "AI Chatbots & Sesli Asistanlar",
      title: "AI Chatbots & Sesli Asistanlar",
      subtitle: "7/24 çalışan akıllı chatbotlar ve sesli AI ajanları ile müşteri deneyimini dönüştürün.",
      ctaText: "Demo Talep Et",
      problemTitle: "Müşteri desteğiniz 7/24 yanıt veriyor mu?",
      problems: [
        "Müşteri bekleme süreleri çok uzun",
        "Destek ekibi tekrarlayan sorularla zaman kaybediyor",
        "Çok kanallı müşteri iletişimi yönetilemiyor",
        "Satış fırsatları mesai dışında kaçırılıyor"
      ],
      solutionTitle: "AI chatbotlar ile müşteri deneyimini dönüştürün",
      solutions: [
        "Anında müşteri yanıtları — gece gündüz",
        "Akıllı FAQ ve bilgi tabanı entegrasyonu",
        "WhatsApp, Instagram, web — tüm kanallardan destek",
        "Otomatik satış asistanı ve randevu ayarlama"
      ],
      features: [
        { title: "WhatsApp AI Chatbot", description: "Müşteri desteği, sipariş takibi ve randevu yönetimi." },
        { title: "Web Chatbot", description: "Canlı destek + AI hybrid çözüm." },
        { title: "Sesli AI Ajanları", description: "Telefon yanıtlama, aramalar ve IVR." },
        { title: "Çok Kanallı Entegrasyon", description: "Instagram, Facebook, Telegram, WhatsApp." }
      ],
      techStack: ["OpenAI", "Anthropic", "Twilio", "WhatsApp Business", "Voiceflow"],
      processSteps: [
        { title: "İhtiyaç Analizi", description: "Müşteri senaryolarını belirleme" },
        { title: "Tasarım & Geliştirme", description: "Bot akışları ve bilgi tabanı oluşturma" },
        { title: "Eğitim & Test", description: "AI modelini şirket verileriyle eğitme" },
        { title: "Canlıya Alma & İzleme", description: "Performans takibi ve sürekli iyileştirme" }
      ]
    },
    en: {
      name: "AI Chatbots & Voice Agents",
      title: "AI Chatbots & Voice Agents",
      subtitle: "Transform customer experience with intelligent chatbots and voice AI agents that work 24/7.",
      ctaText: "Request a Demo",
      problemTitle: "Does your customer support respond 24/7?",
      problems: [
        "Customer wait times are too long",
        "Support team wastes time on repetitive questions",
        "Multi-channel customer communication is unmanageable",
        "Sales opportunities are missed outside business hours"
      ],
      solutionTitle: "Transform customer experience with AI chatbots",
      solutions: [
        "Instant customer responses — day and night",
        "Smart FAQ and knowledge base integration",
        "Support across all channels — WhatsApp, Instagram, web",
        "Automated sales assistant and appointment scheduling"
      ],
      features: [
        { title: "WhatsApp AI Chatbot", description: "Customer support, order tracking, and appointment management." },
        { title: "Web Chatbot", description: "Live support + AI hybrid solution." },
        { title: "Voice AI Agents", description: "Phone answering, outbound calls, and IVR." },
        { title: "Multi-Channel Integration", description: "Instagram, Facebook, Telegram, WhatsApp." }
      ],
      techStack: ["OpenAI", "Anthropic", "Twilio", "WhatsApp Business", "Voiceflow"],
      processSteps: [
        { title: "Needs Analysis", description: "Identify customer scenarios" },
        { title: "Design & Development", description: "Build bot flows and knowledge base" },
        { title: "Training & Testing", description: "Train AI model with company data" },
        { title: "Go Live & Monitoring", description: "Performance tracking and continuous improvement" }
      ]
    },
    nl: {
      name: "AI Chatbots & Spraakassistenten",
      title: "AI Chatbots & Spraakassistenten",
      subtitle: "Transformeer klantervaring met intelligente chatbots en spraak-AI-agents die 24/7 werken.",
      ctaText: "Demo aanvragen",
      problemTitle: "Reageert uw klantenservice 24/7?",
      problems: [
        "Wachttijden voor klanten zijn te lang",
        "Supportteam verspilt tijd aan herhalende vragen",
        "Meerkanaals klantcommunicatie is onbeheersbaar",
        "Verkoopkansen worden gemist buiten kantooruren"
      ],
      solutionTitle: "Transformeer klantervaring met AI-chatbots",
      solutions: [
        "Directe klantreacties — dag en nacht",
        "Slimme FAQ en kennisbank-integratie",
        "Ondersteuning via alle kanalen — WhatsApp, Instagram, web",
        "Geautomatiseerde verkopassistent en afspraakplanning"
      ],
      features: [
        { title: "WhatsApp AI Chatbot", description: "Klantenservice, ordertracking en afspraakbeheer." },
        { title: "Web Chatbot", description: "Live ondersteuning + AI hybride oplossing." },
        { title: "Spraak AI-agents", description: "Telefoonbeantwoording, uitgaande gesprekken en IVR." },
        { title: "Meerkanaalintegratie", description: "Instagram, Facebook, Telegram, WhatsApp." }
      ],
      techStack: ["OpenAI", "Anthropic", "Twilio", "WhatsApp Business", "Voiceflow"],
      processSteps: [
        { title: "Behoefteanalyse", description: "Klantscenario's identificeren" },
        { title: "Ontwerp & Ontwikkeling", description: "Botflows en kennisbank opbouwen" },
        { title: "Training & Testen", description: "AI-model trainen met bedrijfsdata" },
        { title: "Live & Monitoring", description: "Prestatiemonitoring en continue verbetering" }
      ]
    }
  },
  {
    slug: "workflow-automation",
    icon: "git-branch",
    category: "ai",
    tr: {
      name: "Workflow Automation",
      title: "Workflow Automation",
      subtitle: "n8n, Make ve özel entegrasyonlarla iş süreçlerinizi bağlayın, otomatikleştirin ve optimize edin.",
      ctaText: "Otomasyon Potansiyelinizi Keşfedin",
      problemTitle: "İş süreçleriniz birbirine bağlı mı?",
      problems: ["Farklı araçlar arasında manuel veri kopyalama", "Tetikleyici tabanlı aksiyonlar eksik", "Hata oranları yüksek", "Ölçeklendirme sorunları"],
      solutionTitle: "Tüm sistemlerinizi birbirine bağlayın",
      solutions: ["API entegrasyonları ile kesintisiz veri akışı", "Event-driven otomatik tetikleyiciler", "Hata yönetimi ve alarm sistemleri", "Enterprise seviye otomasyon altyapısı"],
      features: [
        { title: "n8n Workflow Development", description: "Özel otomasyon akışları tasarımı ve geliştirme." },
        { title: "API Entegrasyonları", description: "SaaS, CRM, ERP sistemleri bağlantıları." },
        { title: "Veri Senkronizasyonu", description: "Sistemler arası otomatik veri aktarımı." },
        { title: "Webhook & Event-Driven", description: "Gerçek zamanlı tetikleyiciler ve aksiyonlar." },
        { title: "Error Handling", description: "Hata yönetimi, loglama ve alarm sistemleri." },
        { title: "Ölçeklendirme", description: "Enterprise seviye otomasyon altyapısı." }
      ],
      techStack: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST API"],
      processSteps: [
        { title: "Süreç Haritalama", description: "Mevcut iş akışlarınızı haritalıyoruz" },
        { title: "Entegrasyon Tasarımı", description: "Optimal otomasyon mimarisini kuruyoruz" },
        { title: "Geliştirme & Test", description: "Akışları kurup test ediyoruz" },
        { title: "Canlıya Alma", description: "Üretime alıp izliyoruz" }
      ]
    },
    en: {
      name: "Workflow Automation",
      title: "Workflow Automation",
      subtitle: "Connect, automate, and optimize your business processes with n8n, Make, and custom integrations.",
      ctaText: "Discover Your Automation Potential",
      problemTitle: "Are your business processes connected?",
      problems: ["Manual data copying between tools", "Missing trigger-based actions", "High error rates", "Scaling difficulties"],
      solutionTitle: "Connect all your systems together",
      solutions: ["Seamless data flow through API integrations", "Event-driven automatic triggers", "Error handling and alert systems", "Enterprise-grade automation infrastructure"],
      features: [
        { title: "n8n Workflow Development", description: "Custom automation flow design and development." },
        { title: "API Integrations", description: "SaaS, CRM, ERP system connections." },
        { title: "Data Synchronization", description: "Automated cross-system data transfer." },
        { title: "Webhook & Event-Driven", description: "Real-time triggers and actions." },
        { title: "Error Handling", description: "Error management, logging, and alert systems." },
        { title: "Scaling", description: "Enterprise-grade automation infrastructure." }
      ],
      techStack: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST API"],
      processSteps: [
        { title: "Process Mapping", description: "We map your existing workflows" },
        { title: "Integration Design", description: "We design the optimal architecture" },
        { title: "Development & Testing", description: "We build and test workflows" },
        { title: "Go Live", description: "We deploy and monitor in production" }
      ]
    },
    nl: {
      name: "Workflow Automatisering",
      title: "Workflow Automatisering",
      subtitle: "Verbind, automatiseer en optimaliseer uw bedrijfsprocessen met n8n, Make en custom integraties.",
      ctaText: "Ontdek uw automatiseringspotentieel",
      problemTitle: "Zijn uw bedrijfsprocessen met elkaar verbonden?",
      problems: ["Handmatig kopiëren van data tussen tools", "Ontbrekende trigger-gebaseerde acties", "Hoge foutpercentages", "Schaalbaarheidsproblemen"],
      solutionTitle: "Verbind al uw systemen met elkaar",
      solutions: ["Naadloze datastroom via API-integraties", "Event-driven automatische triggers", "Foutafhandeling en alarmsystemen", "Enterprise-grade automatiseringsinfrastructuur"],
      features: [
        { title: "n8n Workflow Ontwikkeling", description: "Op maat gemaakte automatiseringsworkflows." },
        { title: "API-integraties", description: "SaaS, CRM, ERP systeemverbindingen." },
        { title: "Datasynchronisatie", description: "Geautomatiseerde cross-system datatransfer." },
        { title: "Webhook & Event-Driven", description: "Realtime triggers en acties." },
        { title: "Foutafhandeling", description: "Foutbeheer, logging en alarmsystemen." },
        { title: "Opschaling", description: "Enterprise-grade automatiseringsinfrastructuur." }
      ],
      techStack: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST API"],
      processSteps: [
        { title: "Procesmapping", description: "We brengen uw bestaande workflows in kaart" },
        { title: "Integratieontwerp", description: "We ontwerpen de optimale architectuur" },
        { title: "Ontwikkeling & Testen", description: "We bouwen en testen workflows" },
        { title: "Go Live", description: "We deployen en monitoren in productie" }
      ]
    }
  },
  {
    slug: "custom-ai-solutions",
    icon: "cpu",
    category: "ai",
    tr: {
      name: "Özel AI Çözümleri",
      title: "Özel AI Çözümleri",
      subtitle: "İşletmenize özel yapay zeka modelleri, RAG sistemleri ve LLM uygulamaları geliştiriyoruz.",
      ctaText: "AI Çözüm Danışmanlığı Al",
      problemTitle: "Standart AI araçları yetmiyor mu?",
      problems: ["Genel AI modelleri sektör spesifik bilgi içermiyor", "Şirket verileriniz AI'da kullanılamıyor", "Mevcut çözümler özelleştirme sunmuyor", "GDPR ve veri güvenliği endişeleri"],
      solutionTitle: "İşletmenize özel AI çözümleri",
      solutions: ["Sektörünüze özel eğitilmiş AI modelleri", "Şirket dokümanlarından akıllı yanıtlar (RAG)", "Tam özelleştirilebilir AI uygulamaları", "GDPR uyumlu, güvenli AI sistemleri"],
      features: [
        { title: "RAG Sistemleri", description: "Şirket dokümanlarından akıllı yanıtlar üretme." },
        { title: "Fine-Tuned Modeller", description: "Sektörünüze özel eğitilmiş AI modelleri." },
        { title: "AI-Powered Analytics", description: "Veri analizi ve tahminleme." },
        { title: "Doküman İşleme", description: "AI ile otomatik belge analizi ve çıkarma." },
        { title: "Çok Dilli AI", description: "Türkçe, İngilizce, Hollandaca desteği." },
        { title: "AI Güvenlik", description: "GDPR uyumlu AI sistemleri." }
      ],
      techStack: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"],
      processSteps: [
        { title: "Veri Analizi", description: "Mevcut verilerinizi değerlendiriyoruz" },
        { title: "Model Tasarımı", description: "En uygun AI mimarisini seçiyoruz" },
        { title: "Geliştirme & Eğitim", description: "Modeli geliştirip verilerinizle eğitiyoruz" },
        { title: "Entegrasyon", description: "Sistemlerinize entegre edip optimize ediyoruz" }
      ]
    },
    en: {
      name: "Custom AI Solutions",
      title: "Custom AI Solutions",
      subtitle: "We build custom AI models, RAG systems, and LLM applications tailored to your business.",
      ctaText: "Get AI Solution Consultation",
      problemTitle: "Are off-the-shelf AI tools not enough?",
      problems: ["Generic AI models lack industry-specific knowledge", "Your company data isn't usable in AI", "Existing solutions don't offer customization", "GDPR and data security concerns"],
      solutionTitle: "AI solutions built for your business",
      solutions: ["AI models trained for your industry", "Smart answers from company documents (RAG)", "Fully customizable AI applications", "GDPR-compliant, secure AI systems"],
      features: [
        { title: "RAG Systems", description: "Smart answers from company documents." },
        { title: "Fine-Tuned Models", description: "AI models trained for your industry." },
        { title: "AI-Powered Analytics", description: "Data analysis and prediction." },
        { title: "Document Processing", description: "Automated document analysis and extraction." },
        { title: "Multi-Language AI", description: "Turkish, English, and Dutch support." },
        { title: "AI Security", description: "GDPR-compliant AI systems." }
      ],
      techStack: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"],
      processSteps: [
        { title: "Data Analysis", description: "We evaluate your existing data" },
        { title: "Model Design", description: "We select the optimal AI architecture" },
        { title: "Development & Training", description: "We develop and train the model" },
        { title: "Integration", description: "We integrate and optimize for your systems" }
      ]
    },
    nl: {
      name: "Custom AI-oplossingen",
      title: "Custom AI-oplossingen",
      subtitle: "We bouwen op maat gemaakte AI-modellen, RAG-systemen en LLM-toepassingen voor uw bedrijf.",
      ctaText: "AI-oplossing advies",
      problemTitle: "Zijn standaard AI-tools niet genoeg?",
      problems: ["Generieke AI-modellen missen branchespecifieke kennis", "Uw bedrijfsdata is niet bruikbaar in AI", "Bestaande oplossingen bieden geen maatwerk", "AVG en dataveiligheidszorgen"],
      solutionTitle: "AI-oplossingen gebouwd voor uw bedrijf",
      solutions: ["AI-modellen getraind voor uw branche", "Slimme antwoorden uit bedrijfsdocumenten (RAG)", "Volledig aanpasbare AI-toepassingen", "AVG-conforme, veilige AI-systemen"],
      features: [
        { title: "RAG-systemen", description: "Slimme antwoorden uit bedrijfsdocumenten." },
        { title: "Fijnafgestemde Modellen", description: "AI-modellen getraind voor uw branche." },
        { title: "AI-Powered Analytics", description: "Data-analyse en voorspelling." },
        { title: "Documentverwerking", description: "Geautomatiseerde documentanalyse en extractie." },
        { title: "Meertalige AI", description: "Turkse, Engelse en Nederlandse ondersteuning." },
        { title: "AI-beveiliging", description: "AVG-conforme AI-systemen." }
      ],
      techStack: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI"],
      processSteps: [
        { title: "Data-analyse", description: "We evalueren uw bestaande data" },
        { title: "Modelontwerp", description: "We selecteren de optimale AI-architectuur" },
        { title: "Ontwikkeling & Training", description: "We ontwikkelen en trainen het model" },
        { title: "Integratie", description: "We integreren en optimaliseren voor uw systemen" }
      ]
    }
  },
  {
    slug: "b2b-sales-automation",
    icon: "target",
    category: "sales",
    tr: {
      name: "B2B Sales Automation",
      title: "B2B Sales Automation",
      subtitle: "Coremagnet ile lead generation, outreach otomasyonu ve satış süreçlerinizi AI ile güçlendirin.",
      ctaText: "Satış Otomasyonu Demo",
      problemTitle: "Satış ekibiniz verimsiz mi çalışıyor?",
      problems: ["Lead bulma süreci çok uzun", "Manuel outreach ölçeklenmiyor", "CRM verileri güncel tutulmuyor", "Satış fırsatları takip edilmiyor"],
      solutionTitle: "AI ile satış süreçlerinizi otomatikleştirin",
      solutions: ["Otomatik lead generation ve lead scoring", "Kişiselleştirilmiş outreach otomasyonu", "CRM otomatik senkronizasyon", "Pipeline yönetimi ve raporlama"],
      features: [
        { title: "Lead Generation", description: "Apollo.io, LinkedIn, web scraping ile hedef müşteri bulma." },
        { title: "Outreach Otomasyonu", description: "Kişiselleştirilmiş e-posta ve LinkedIn mesajları." },
        { title: "Lead Scoring", description: "AI ile müşteri kalitesi puanlama." },
        { title: "CRM Entegrasyonu", description: "HubSpot, Pipedrive, Salesforce senkronizasyonu." },
        { title: "Pipeline Yönetimi", description: "Otomatik deal takibi ve raporlama." },
        { title: "Randevu Ayarlama", description: "Otomatik toplantı planlama ve hatırlatma." }
      ],
      techStack: ["Apollo.io", "LinkedIn", "HubSpot", "Pipedrive", "Salesforce", "n8n"],
      processSteps: [
        { title: "Hedef Kitle Analizi", description: "İdeal müşteri profilini tanımlıyoruz" },
        { title: "Outreach Stratejisi", description: "Kişiselleştirilmiş mesaj akışları oluşturuyoruz" },
        { title: "Otomasyon Kurulumu", description: "Lead gen ve outreach süreçlerini kuruyoruz" },
        { title: "Optimizasyon", description: "A/B test ve sürekli iyileştirme" }
      ]
    },
    en: {
      name: "B2B Sales Automation",
      title: "B2B Sales Automation",
      subtitle: "Supercharge your sales with Coremagnet — AI-powered lead generation, outreach automation, and CRM integrations.",
      ctaText: "Sales Automation Demo",
      problemTitle: "Is your sales team working inefficiently?",
      problems: ["Lead finding process takes too long", "Manual outreach doesn't scale", "CRM data isn't kept up-to-date", "Sales opportunities aren't being tracked"],
      solutionTitle: "Automate your sales processes with AI",
      solutions: ["Automated lead generation and scoring", "Personalized outreach automation", "Automatic CRM synchronization", "Pipeline management and reporting"],
      features: [
        { title: "Lead Generation", description: "Find target customers via Apollo.io, LinkedIn, and web scraping." },
        { title: "Outreach Automation", description: "Personalized email and LinkedIn messages." },
        { title: "Lead Scoring", description: "AI-powered customer quality scoring." },
        { title: "CRM Integration", description: "HubSpot, Pipedrive, Salesforce sync." },
        { title: "Pipeline Management", description: "Automated deal tracking and reporting." },
        { title: "Appointment Setting", description: "Automated meeting scheduling and reminders." }
      ],
      techStack: ["Apollo.io", "LinkedIn", "HubSpot", "Pipedrive", "Salesforce", "n8n"],
      processSteps: [
        { title: "Target Audience Analysis", description: "We define your ideal customer profile" },
        { title: "Outreach Strategy", description: "We create personalized message flows" },
        { title: "Automation Setup", description: "We build lead gen and outreach processes" },
        { title: "Optimization", description: "A/B testing and continuous improvement" }
      ]
    },
    nl: {
      name: "B2B Sales Automatisering",
      title: "B2B Sales Automatisering",
      subtitle: "Versterk uw verkoop met Coremagnet — AI-gestuurde leadgeneratie, outreach automatisering en CRM-integraties.",
      ctaText: "Sales automatisering demo",
      problemTitle: "Werkt uw verkoopteam inefficiënt?",
      problems: ["Leadgeneratie duurt te lang", "Handmatige outreach schaalt niet", "CRM-data wordt niet bijgehouden", "Verkoopkansen worden niet gevolgd"],
      solutionTitle: "Automatiseer uw verkoopprocessen met AI",
      solutions: ["Geautomatiseerde leadgeneratie en scoring", "Gepersonaliseerde outreach automatisering", "Automatische CRM-synchronisatie", "Pipeline management en rapportage"],
      features: [
        { title: "Leadgeneratie", description: "Doelklanten vinden via Apollo.io, LinkedIn en webscraping." },
        { title: "Outreach Automatisering", description: "Gepersonaliseerde e-mail en LinkedIn berichten." },
        { title: "Lead Scoring", description: "AI-gestuurde klantwaliteitsscore." },
        { title: "CRM-integratie", description: "HubSpot, Pipedrive, Salesforce sync." },
        { title: "Pipeline Management", description: "Geautomatiseerde deal tracking en rapportage." },
        { title: "Afspraakplanning", description: "Geautomatiseerde vergaderplanning en herinneringen." }
      ],
      techStack: ["Apollo.io", "LinkedIn", "HubSpot", "Pipedrive", "Salesforce", "n8n"],
      processSteps: [
        { title: "Doelgroepanalyse", description: "We definiëren uw ideale klantprofiel" },
        { title: "Outreach Strategie", description: "We creëren gepersonaliseerde berichtflows" },
        { title: "Automatisering Opzet", description: "We bouwen leadgen en outreach processen" },
        { title: "Optimalisatie", description: "A/B testen en continue verbetering" }
      ]
    }
  },
  {
    slug: "content-creation",
    icon: "pen-tool",
    category: "sales",
    tr: {
      name: "Content Creation & Social Media",
      title: "Content Creation & Social Media",
      subtitle: "AI destekli içerik üretimi, video production ve sosyal medya yönetimi ile markanızı büyütün.",
      ctaText: "İçerik Stratejisi Görüşmesi",
      problemTitle: "İçerik üretmek çok mu zaman alıyor?",
      problems: ["Blog yazıları, sosyal medya postları hazırlamak saatler sürüyor", "Tutarlı içerik takvimi sürdürülemiyor", "Video production maliyetli ve yavaş", "SEO uyumlu içerik üretmek zor"],
      solutionTitle: "AI ile içerik üretimini hızlandırın",
      solutions: ["AI destekli blog ve sosyal medya içeriği", "Otomatik içerik takvimi ve planlama", "AI video production ve UGC", "SEO optimizasyonlu içerik üretimi"],
      features: [
        { title: "AI Content Writing", description: "Blog, sosyal medya ve e-posta içerikleri." },
        { title: "Video Production", description: "UGC, explainer videolar ve Sora AI." },
        { title: "Sosyal Medya Yönetimi", description: "Strateji, planlama ve paylaşım." },
        { title: "SEO Content", description: "Arama motoru odaklı içerik üretimi." },
        { title: "Visual Design", description: "Grafik tasarım, infografik ve carousel." },
        { title: "Content Automation", description: "Otomatik içerik üretim pipeline'ları." }
      ],
      techStack: ["OpenAI", "Anthropic", "Canva", "Adobe", "Hootsuite", "Buffer"],
      processSteps: [
        { title: "Strateji", description: "İçerik stratejisi ve hedef kitle analizi" },
        { title: "Üretim", description: "AI destekli içerik oluşturma" },
        { title: "Yayınlama", description: "Otomatik planlama ve paylaşım" },
        { title: "Analiz", description: "Performans analizi ve optimizasyon" }
      ]
    },
    en: {
      name: "Content Creation & Social Media",
      title: "Content Creation & Social Media",
      subtitle: "Grow your brand with AI-powered content production, video creation, and social media management.",
      ctaText: "Content Strategy Consultation",
      problemTitle: "Is content creation taking too much time?",
      problems: ["Blog posts and social media take hours to prepare", "Consistent content calendar can't be maintained", "Video production is costly and slow", "SEO-friendly content is hard to create"],
      solutionTitle: "Accelerate content creation with AI",
      solutions: ["AI-powered blog and social media content", "Automated content calendar and planning", "AI video production and UGC", "SEO-optimized content creation"],
      features: [
        { title: "AI Content Writing", description: "Blog, social media, and email content." },
        { title: "Video Production", description: "UGC, explainer videos, and Sora AI." },
        { title: "Social Media Management", description: "Strategy, planning, and publishing." },
        { title: "SEO Content", description: "Search engine focused content production." },
        { title: "Visual Design", description: "Graphic design, infographics, and carousels." },
        { title: "Content Automation", description: "Automated content production pipelines." }
      ],
      techStack: ["OpenAI", "Anthropic", "Canva", "Adobe", "Hootsuite", "Buffer"],
      processSteps: [
        { title: "Strategy", description: "Content strategy and audience analysis" },
        { title: "Production", description: "AI-powered content creation" },
        { title: "Publishing", description: "Automated scheduling and sharing" },
        { title: "Analysis", description: "Performance analysis and optimization" }
      ]
    },
    nl: {
      name: "Content Creatie & Social Media",
      title: "Content Creatie & Social Media",
      subtitle: "Laat uw merk groeien met AI-gestuurde contentproductie, videocreatie en social media management.",
      ctaText: "Content strategie gesprek",
      problemTitle: "Kost contentcreatie te veel tijd?",
      problems: ["Blogposts en social media kosten uren", "Consistent contentschema kan niet worden volgehouden", "Videoproductie is duur en traag", "SEO-vriendelijke content is moeilijk te maken"],
      solutionTitle: "Versnel contentcreatie met AI",
      solutions: ["AI-gestuurde blog en social media content", "Geautomatiseerd contentschema en planning", "AI-videoproductie en UGC", "SEO-geoptimaliseerde contentcreatie"],
      features: [
        { title: "AI Content Writing", description: "Blog, social media en e-mail content." },
        { title: "Videoproductie", description: "UGC, uitlegvideo's en Sora AI." },
        { title: "Social Media Management", description: "Strategie, planning en publicatie." },
        { title: "SEO Content", description: "Zoekmachine-gerichte contentproductie." },
        { title: "Visueel Ontwerp", description: "Grafisch ontwerp, infographics en carousels." },
        { title: "Content Automatisering", description: "Geautomatiseerde contentproductiepipelines." }
      ],
      techStack: ["OpenAI", "Anthropic", "Canva", "Adobe", "Hootsuite", "Buffer"],
      processSteps: [
        { title: "Strategie", description: "Contentstrategie en doelgroepanalyse" },
        { title: "Productie", description: "AI-gestuurde contentcreatie" },
        { title: "Publicatie", description: "Geautomatiseerde planning en delen" },
        { title: "Analyse", description: "Prestatieanalyse en optimalisatie" }
      ]
    }
  },
  {
    slug: "corporate-website",
    icon: "monitor",
    category: "web",
    tr: {
      name: "Kurumsal Web Sitesi",
      title: "Kurumsal Web Sitesi Geliştirme",
      subtitle: "Markanızı dijitalde en iyi şekilde temsil eden, hızlı, modern ve dönüşüm odaklı web siteleri tasarlıyoruz.",
      ctaText: "Web Sitesi Teklifi Al",
      problemTitle: "Web siteniz markanızı yansıtıyor mu?",
      problems: ["Web siteniz eski ve yavaş", "Mobil uyumlu değil", "SEO performansı düşük", "Dönüşüm oranları yetersiz"],
      solutionTitle: "Modern, hızlı ve dönüşüm odaklı web siteleri",
      solutions: ["Next.js ile ultra-hızlı performans", "Responsive tasarım — tüm cihazlarda mükemmel", "SEO altyapısı ve Core Web Vitals optimizasyonu", "Dönüşüm odaklı UX tasarımı"],
      features: [
        { title: "Tasarım & UX", description: "Kullanıcı odaklı, modern arayüz tasarımı." },
        { title: "Headless CMS", description: "Storyblok, Strapi, WordPress entegrasyonu." },
        { title: "Performans", description: "Core Web Vitals ve sayfa hızı optimizasyonu." },
        { title: "SEO Altyapısı", description: "Teknik SEO, schema markup ve sitemap." },
        { title: "Responsive", description: "Tüm cihazlarda mükemmel deneyim." },
        { title: "Analytics", description: "Google Analytics 4 ve Tag Manager entegrasyonu." }
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "WordPress", "Storyblok"],
      processSteps: [
        { title: "Keşif", description: "Marka ve hedef kitle analizi" },
        { title: "Tasarım", description: "UI/UX tasarım ve prototipleme" },
        { title: "Geliştirme", description: "Frontend ve backend geliştirme" },
        { title: "Lansman", description: "Test, optimizasyon ve yayına alma" }
      ]
    },
    en: {
      name: "Corporate Website",
      title: "Corporate Website Development",
      subtitle: "We design fast, modern, and conversion-focused websites that represent your brand at its best.",
      ctaText: "Get a Website Quote",
      problemTitle: "Does your website reflect your brand?",
      problems: ["Your website is outdated and slow", "Not mobile-friendly", "Poor SEO performance", "Low conversion rates"],
      solutionTitle: "Modern, fast, and conversion-focused websites",
      solutions: ["Ultra-fast performance with Next.js", "Responsive design — perfect on all devices", "SEO infrastructure and Core Web Vitals optimization", "Conversion-focused UX design"],
      features: [
        { title: "Design & UX", description: "User-centered, modern interface design." },
        { title: "Headless CMS", description: "Storyblok, Strapi, WordPress integration." },
        { title: "Performance", description: "Core Web Vitals and page speed optimization." },
        { title: "SEO Infrastructure", description: "Technical SEO, schema markup, and sitemap." },
        { title: "Responsive", description: "Perfect experience on all devices." },
        { title: "Analytics", description: "Google Analytics 4 and Tag Manager integration." }
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "WordPress", "Storyblok"],
      processSteps: [
        { title: "Discovery", description: "Brand and audience analysis" },
        { title: "Design", description: "UI/UX design and prototyping" },
        { title: "Development", description: "Frontend and backend development" },
        { title: "Launch", description: "Testing, optimization, and go-live" }
      ]
    },
    nl: {
      name: "Bedrijfswebsite",
      title: "Bedrijfswebsite Ontwikkeling",
      subtitle: "We ontwerpen snelle, moderne en conversie-gerichte websites die uw merk op zijn best vertegenwoordigen.",
      ctaText: "Website offerte aanvragen",
      problemTitle: "Weerspiegelt uw website uw merk?",
      problems: ["Uw website is verouderd en traag", "Niet mobielvriendelijk", "Slechte SEO-prestaties", "Lage conversiepercentages"],
      solutionTitle: "Moderne, snelle en conversie-gerichte websites",
      solutions: ["Ultra-snelle prestaties met Next.js", "Responsive design — perfect op alle apparaten", "SEO-infrastructuur en Core Web Vitals optimalisatie", "Conversie-gericht UX-ontwerp"],
      features: [
        { title: "Ontwerp & UX", description: "Gebruikersgerichte, moderne interface-ontwerp." },
        { title: "Headless CMS", description: "Storyblok, Strapi, WordPress integratie." },
        { title: "Prestaties", description: "Core Web Vitals en paginasnelheid optimalisatie." },
        { title: "SEO-infrastructuur", description: "Technische SEO, schema markup en sitemap." },
        { title: "Responsive", description: "Perfecte ervaring op alle apparaten." },
        { title: "Analytics", description: "Google Analytics 4 en Tag Manager integratie." }
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "WordPress", "Storyblok"],
      processSteps: [
        { title: "Ontdekking", description: "Merk- en doelgroepanalyse" },
        { title: "Ontwerp", description: "UI/UX ontwerp en prototyping" },
        { title: "Ontwikkeling", description: "Frontend en backend ontwikkeling" },
        { title: "Lancering", description: "Testen, optimalisatie en livegang" }
      ]
    }
  },
  {
    slug: "e-commerce-webshop",
    icon: "shopping-cart",
    category: "web",
    tr: {
      name: "E-Commerce & Webshop",
      title: "E-Commerce & Webshop Çözümleri",
      subtitle: "Shopify, WooCommerce ve özel platformlarla satışlarınızı artıran online mağazalar kuruyoruz.",
      ctaText: "E-Commerce Teklifi Al",
      problemTitle: "Online satışlarınız beklentilerin altında mı?",
      problems: ["Platform seçimi ve kurulumu karmaşık", "Ödeme entegrasyonları sorunlu", "Envanter yönetimi manuel", "Conversion oranları düşük"],
      solutionTitle: "Satış odaklı e-ticaret çözümleri",
      solutions: ["Doğru platform seçimi ve hızlı kurulum", "Stripe, iDEAL, PayPal entegrasyonları", "Otomatik envanter ve kargo yönetimi", "CRO ile dönüşüm optimizasyonu"],
      features: [
        { title: "Platform Kurulumu", description: "Shopify, WooCommerce ve özel platform seçimi." },
        { title: "Ödeme Entegrasyonları", description: "Stripe, iDEAL, PayPal ve yerel ödeme yöntemleri." },
        { title: "Envanter Yönetimi", description: "ERP bağlantısı ve otomatik stok takibi." },
        { title: "Kargo Entegrasyonu", description: "Lojistik ve kargo takip entegrasyonları." },
        { title: "CRO", description: "Conversion rate optimization ve A/B test." },
        { title: "Marketplace", description: "Amazon, Bol.com ve marketplace entegrasyonları." }
      ],
      techStack: ["Shopify", "WooCommerce", "Stripe", "Vercel", "Next.js"],
      processSteps: [
        { title: "Platform Seçimi", description: "İhtiyaçlarınıza uygun platform seçimi" },
        { title: "Tasarım & Kurulum", description: "Mağaza tasarımı ve ürün yükleme" },
        { title: "Entegrasyonlar", description: "Ödeme, kargo ve envanter bağlantıları" },
        { title: "Optimizasyon", description: "CRO, SEO ve performans iyileştirme" }
      ]
    },
    en: {
      name: "E-Commerce & Webshop",
      title: "E-Commerce & Webshop Solutions",
      subtitle: "Build online stores that boost your sales with Shopify, WooCommerce, and custom platforms.",
      ctaText: "Get E-Commerce Quote",
      problemTitle: "Are your online sales below expectations?",
      problems: ["Platform selection and setup is complex", "Payment integrations are problematic", "Inventory management is manual", "Conversion rates are low"],
      solutionTitle: "Sales-focused e-commerce solutions",
      solutions: ["Right platform selection and fast setup", "Stripe, iDEAL, PayPal integrations", "Automated inventory and shipping management", "Conversion optimization with CRO"],
      features: [
        { title: "Platform Setup", description: "Shopify, WooCommerce, and custom platform selection." },
        { title: "Payment Integrations", description: "Stripe, iDEAL, PayPal, and local payment methods." },
        { title: "Inventory Management", description: "ERP connection and automated stock tracking." },
        { title: "Shipping Integration", description: "Logistics and shipment tracking integrations." },
        { title: "CRO", description: "Conversion rate optimization and A/B testing." },
        { title: "Marketplace", description: "Amazon, Bol.com, and marketplace integrations." }
      ],
      techStack: ["Shopify", "WooCommerce", "Stripe", "Vercel", "Next.js"],
      processSteps: [
        { title: "Platform Selection", description: "Choose the right platform for your needs" },
        { title: "Design & Setup", description: "Store design and product upload" },
        { title: "Integrations", description: "Payment, shipping, and inventory connections" },
        { title: "Optimization", description: "CRO, SEO, and performance improvement" }
      ]
    },
    nl: {
      name: "E-Commerce & Webshop",
      title: "E-Commerce & Webshop Oplossingen",
      subtitle: "Bouw webshops die uw verkoop verhogen met Shopify, WooCommerce en aangepaste platforms.",
      ctaText: "E-commerce offerte aanvragen",
      problemTitle: "Zijn uw online verkopen onder de verwachtingen?",
      problems: ["Platformselectie en -opzet is complex", "Betalingsintegraties zijn problematisch", "Voorraadbeheer is handmatig", "Conversiepercentages zijn laag"],
      solutionTitle: "Verkoopgerichte e-commerce oplossingen",
      solutions: ["Juiste platformselectie en snelle opzet", "Stripe, iDEAL, PayPal integraties", "Geautomatiseerd voorraad- en verzendbeheer", "Conversie-optimalisatie met CRO"],
      features: [
        { title: "Platform Opzet", description: "Shopify, WooCommerce en aangepaste platformselectie." },
        { title: "Betalingsintegraties", description: "Stripe, iDEAL, PayPal en lokale betaalmethoden." },
        { title: "Voorraadbeheer", description: "ERP-verbinding en geautomatiseerde voorraadtracking." },
        { title: "Verzendintegratie", description: "Logistiek en zendingtracking integraties." },
        { title: "CRO", description: "Conversie-optimalisatie en A/B testen." },
        { title: "Marketplace", description: "Amazon, Bol.com en marketplace integraties." }
      ],
      techStack: ["Shopify", "WooCommerce", "Stripe", "Vercel", "Next.js"],
      processSteps: [
        { title: "Platformselectie", description: "Kies het juiste platform voor uw behoeften" },
        { title: "Ontwerp & Opzet", description: "Winkelontwerp en productupload" },
        { title: "Integraties", description: "Betaling, verzending en voorraadverbindingen" },
        { title: "Optimalisatie", description: "CRO, SEO en prestatieverbetering" }
      ]
    }
  }
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceLocale(slug: string, locale: string) {
  const service = getService(slug);
  if (!service) return undefined;
  return service[locale as keyof Pick<Service, "tr" | "en" | "nl">] || service.en;
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug);
}
