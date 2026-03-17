export interface IndustryLocaleData {
  name: string;
  title: string;
  description: string;
  heroDescription: string;
  useCases: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

export interface Industry {
  slug: string;
  icons: string[]; // one icon per use case
  imagePrompt: string;
  tr: IndustryLocaleData;
  en: IndustryLocaleData;
  nl: IndustryLocaleData;
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    icons: ["package", "warehouse", "bell", "trending"],
    imagePrompt: "Modern e-commerce warehouse with automated conveyor belts and robotic arms, digital screens showing order tracking dashboards, cinematic lighting, professional, high quality, modern corporate, blue and white color scheme",
    tr: {
      name: "E-ticaret",
      title: "E-ticarette Akıllı Otomasyon",
      description: "Sipariş yönetiminden envanter takibine, e-ticaret operasyonlarınızı uçtan uca otomatikleştirin.",
      heroDescription: "E-ticaret işletmenizi AI destekli otomasyon ile ölçeklendirin. Sipariş işleme, envanter yönetimi ve müşteri iletişimini otomatikleştirerek operasyonel verimliliği artırın.",
      useCases: [
        { title: "Sipariş Yönetimi", description: "Sipariş alımından kargoya teslime kadar tüm süreci otomatik yönetin. Stok kontrolü, fatura kesimi ve kargo entegrasyonu tek platformda." },
        { title: "Envanter Takibi", description: "Gerçek zamanlı stok takibi ile fazla stok veya stok eksikliği sorunlarını ortadan kaldırın. AI tabanlı talep tahminleri ile optimum stok seviyelerini koruyun." },
        { title: "Müşteri Bildirimleri", description: "Sipariş durumu, kargo takibi ve kampanya bildirimleri otomatik olarak müşterilere iletilsin. Kişiselleştirilmiş iletişim ile müşteri memnuniyetini artırın." },
        { title: "Fiyatlandırma Optimizasyonu", description: "Rakip fiyatları, talep verileri ve stok durumuna göre dinamik fiyatlandırma stratejileri oluşturun." },
      ],
      stats: [
        { value: "%85", label: "Sipariş İşleme Hızı Artışı" },
        { value: "%40", label: "Operasyonel Maliyet Düşüşü" },
        { value: "7/24", label: "Kesintisiz Otomasyon" },
        { value: "%95", label: "Müşteri Memnuniyeti" },
      ],
      caseStudy: {
        title: "Online Mağaza: Sipariş Sürecinde %80 Hızlanma",
        challenge: "Günlük 500+ sipariş manuel olarak işleniyor, hatalar ve gecikmeler yaşanıyordu.",
        solution: "AI destekli sipariş otomasyon sistemi kurularak tüm süreç otomatikleştirildi.",
        result: "Sipariş işleme süresi 45 dakikadan 8 dakikaya düştü. Hata oranı %0.5'in altına indi.",
      },
    },
    en: {
      name: "E-commerce",
      title: "Smart Automation for E-commerce",
      description: "Automate your e-commerce operations end-to-end, from order management to inventory tracking.",
      heroDescription: "Scale your e-commerce business with AI-powered automation. Increase operational efficiency by automating order processing, inventory management, and customer communications.",
      useCases: [
        { title: "Order Management", description: "Automatically manage the entire process from order receipt to shipping. Stock control, invoicing, and carrier integration on a single platform." },
        { title: "Inventory Tracking", description: "Eliminate overstocking and stockout issues with real-time inventory tracking. Maintain optimal stock levels using AI-based demand forecasting." },
        { title: "Customer Notifications", description: "Automatically deliver order status, shipment tracking, and promotional notifications to customers. Boost customer satisfaction with personalized communication." },
        { title: "Pricing Optimization", description: "Create dynamic pricing strategies based on competitor prices, demand data, and stock availability." },
      ],
      stats: [
        { value: "85%", label: "Faster Order Processing" },
        { value: "40%", label: "Operational Cost Reduction" },
        { value: "24/7", label: "Uninterrupted Automation" },
        { value: "95%", label: "Customer Satisfaction" },
      ],
      caseStudy: {
        title: "Online Store: 80% Faster Order Processing",
        challenge: "Over 500 daily orders were processed manually, causing errors and delays.",
        solution: "An AI-powered order automation system was implemented to fully automate the process.",
        result: "Order processing time dropped from 45 minutes to 8 minutes. Error rate fell below 0.5%.",
      },
    },
    nl: {
      name: "E-commerce",
      title: "Slimme Automatisering voor E-commerce",
      description: "Automatiseer uw e-commerce-operaties end-to-end, van orderbeheer tot voorraadbeheer.",
      heroDescription: "Schaal uw e-commercebedrijf met AI-aangedreven automatisering. Verhoog de operationele efficiëntie door orderverwerking, voorraadbeheer en klantcommunicatie te automatiseren.",
      useCases: [
        { title: "Orderbeheer", description: "Beheer automatisch het volledige proces van orderontvangst tot verzending. Voorraadbeheer, facturatie en vervoerdersintegratie op één platform." },
        { title: "Voorraadtracking", description: "Elimineer overvoorraad- en uitverkochtproblemen met realtime voorraadtracking. Behoud optimale voorraadniveaus met AI-gebaseerde vraagvoorspelling." },
        { title: "Klantnotificaties", description: "Lever automatisch orderstatus, zendingstracking en promotionele meldingen aan klanten. Verhoog de klanttevredenheid met gepersonaliseerde communicatie." },
        { title: "Prijsoptimalisatie", description: "Creëer dynamische prijsstrategieën op basis van concurrentieprijzen, vraaggegevens en voorraadbeschikbaarheid." },
      ],
      stats: [
        { value: "85%", label: "Snellere Orderverwerking" },
        { value: "40%", label: "Operationele Kostenverlaging" },
        { value: "24/7", label: "Ononderbroken Automatisering" },
        { value: "95%", label: "Klanttevredenheid" },
      ],
      caseStudy: {
        title: "Online Winkel: 80% Snellere Orderverwerking",
        challenge: "Meer dan 500 dagelijkse bestellingen werden handmatig verwerkt, met fouten en vertragingen als gevolg.",
        solution: "Een AI-aangedreven orderautomatiseringssysteem werd geïmplementeerd om het volledige proces te automatiseren.",
        result: "De orderverwerkingstijd daalde van 45 minuten naar 8 minuten. Het foutpercentage daalde tot onder 0,5%.",
      },
    },
  },
  {
    slug: "healthcare",
    icons: ["calendar", "heart", "chart", "pill"],
    imagePrompt: "Modern hospital reception with digital check-in screens, a doctor looking at holographic patient data, clean white and blue medical environment, cinematic, professional, high quality, modern corporate",
    tr: {
      name: "Sağlık",
      title: "Sağlık Sektöründe AI Otomasyonu",
      description: "Randevu yönetiminden hasta takibine, sağlık hizmetlerinizi dijitalleştirin.",
      heroDescription: "Sağlık sektörünüzdeki süreçleri AI ile optimize edin. Randevu yönetimi, hasta takibi ve raporlama süreçlerini otomatikleştirerek hem verimliliği hem de hasta memnuniyetini artırın.",
      useCases: [
        { title: "Randevu Yönetimi", description: "Online randevu sistemi, otomatik hatırlatmalar ve doktor müsaitlik takibi ile randevu süreçlerini kolaylaştırın." },
        { title: "Hasta Takibi", description: "Hasta geçmişi, tedavi planları ve kontrol takipleri otomatik olarak yönetilsin. Kritik hatırlatmalar zamanında yapılsın." },
        { title: "Raporlama", description: "Klinik verileri otomatik analiz edin, performans raporları oluşturun ve sağlık bakanlığı raporlamalarını kolaylaştırın." },
        { title: "İlaç Yönetimi", description: "Reçete takibi, ilaç etkileşim kontrolü ve stok yönetimini otomatikleştirin." },
      ],
      stats: [
        { value: "%60", label: "Randevu Kaçırma Azalması" },
        { value: "%35", label: "İdari İş Yükü Azalması" },
        { value: "%90", label: "Hasta Memnuniyeti" },
        { value: "3x", label: "Daha Hızlı Raporlama" },
      ],
      caseStudy: {
        title: "Özel Hastane: Randevu Sisteminde Devrim",
        challenge: "Günlük 200+ randevu telefon ile alınıyor, %30 kaçırma oranı vardı.",
        solution: "AI destekli online randevu sistemi ve otomatik hatırlatma mekanizması kuruldu.",
        result: "Randevu kaçırma oranı %8'e düştü. İdari personel %40 daha verimli çalışmaya başladı.",
      },
    },
    en: {
      name: "Healthcare",
      title: "AI Automation in Healthcare",
      description: "Digitalize your healthcare services, from appointment management to patient tracking.",
      heroDescription: "Optimize your healthcare processes with AI. Automate appointment management, patient tracking, and reporting to improve both efficiency and patient satisfaction.",
      useCases: [
        { title: "Appointment Management", description: "Simplify appointment processes with online booking, automated reminders, and physician availability tracking." },
        { title: "Patient Tracking", description: "Automatically manage patient history, treatment plans, and follow-up appointments. Ensure critical reminders are delivered on time." },
        { title: "Reporting", description: "Automatically analyze clinical data, generate performance reports, and streamline regulatory reporting requirements." },
        { title: "Medication Management", description: "Automate prescription tracking, drug interaction checks, and pharmaceutical inventory management." },
      ],
      stats: [
        { value: "60%", label: "Reduction in No-Shows" },
        { value: "35%", label: "Less Administrative Workload" },
        { value: "90%", label: "Patient Satisfaction" },
        { value: "3x", label: "Faster Reporting" },
      ],
      caseStudy: {
        title: "Private Hospital: Revolutionizing Appointment Systems",
        challenge: "Over 200 daily appointments were booked by phone, with a 30% no-show rate.",
        solution: "An AI-powered online appointment system with automated reminders was implemented.",
        result: "No-show rate dropped to 8%. Administrative staff became 40% more efficient.",
      },
    },
    nl: {
      name: "Gezondheidszorg",
      title: "AI-automatisering in de Gezondheidszorg",
      description: "Digitaliseer uw gezondheidszorgdiensten, van afspraakbeheer tot patiënttracking.",
      heroDescription: "Optimaliseer uw zorgprocessen met AI. Automatiseer afspraakbeheer, patiënttracking en rapportage om zowel de efficiëntie als de patiënttevredenheid te verbeteren.",
      useCases: [
        { title: "Afspraakbeheer", description: "Vereenvoudig afspraakprocessen met online boekingen, geautomatiseerde herinneringen en beschikbaarheidstracking van artsen." },
        { title: "Patiënttracking", description: "Beheer automatisch de patiëntgeschiedenis, behandelplannen en vervolgafspraken. Zorg dat kritieke herinneringen op tijd worden afgeleverd." },
        { title: "Rapportage", description: "Analyseer automatisch klinische gegevens, genereer prestatierapporten en stroomlijn wettelijke rapportagevereisten." },
        { title: "Medicatiebeheer", description: "Automatiseer recepttracking, interactiecontroles van medicijnen en farmaceutisch voorraadbeheer." },
      ],
      stats: [
        { value: "60%", label: "Minder No-Shows" },
        { value: "35%", label: "Minder Administratieve Werklast" },
        { value: "90%", label: "Patiënttevredenheid" },
        { value: "3x", label: "Snellere Rapportage" },
      ],
      caseStudy: {
        title: "Privékliniek: Revolutie in Afspraaksystemen",
        challenge: "Meer dan 200 dagelijkse afspraken werden telefonisch geboekt, met een no-showpercentage van 30%.",
        solution: "Een AI-aangedreven online afspraaksysteem met geautomatiseerde herinneringen werd geïmplementeerd.",
        result: "Het no-showpercentage daalde naar 8%. Het administratief personeel werd 40% efficiënter.",
      },
    },
  },
  {
    slug: "finance",
    icons: ["receipt", "shield", "chart", "alert"],
    imagePrompt: "Modern financial trading floor with multiple screens showing charts and data analytics, blue-lit environment, cinematic, professional, high quality, modern corporate, futuristic finance",
    tr: {
      name: "Finans",
      title: "Finans Sektöründe Otomasyon",
      description: "Fatura işleme, compliance ve raporlama süreçlerinizi otomatikleştirin.",
      heroDescription: "Finansal süreçlerinizi AI ile güçlendirin. Fatura işleme, uyumluluk kontrolleri ve finansal raporlama gibi kritik süreçleri otomatikleştirerek riskleri minimize edin.",
      useCases: [
        { title: "Fatura İşleme", description: "Gelen faturaları otomatik tanıma, doğrulama ve kaydetme. OCR teknolojisi ile manuel veri girişini ortadan kaldırın." },
        { title: "Compliance Kontrolü", description: "Yasal düzenlemelere uyumu otomatik takip edin. Risk değerlendirmesi ve uyumluluk raporlarını anında oluşturun." },
        { title: "Finansal Raporlama", description: "Aylık, çeyreklik ve yıllık finansal raporları otomatik oluşturun. Gerçek zamanlı dashboard'lar ile anlık görünürlük sağlayın." },
        { title: "Risk Analizi", description: "AI tabanlı risk skorlama, anomali tespiti ve erken uyarı sistemleri ile finansal riskleri proaktif yönetin." },
      ],
      stats: [
        { value: "%70", label: "Fatura İşleme Hızı Artışı" },
        { value: "%99", label: "Compliance Uyum Oranı" },
        { value: "%50", label: "Maliyet Tasarrufu" },
        { value: "10x", label: "Daha Hızlı Raporlama" },
      ],
      caseStudy: {
        title: "Finans Şirketi: Compliance Sürecinde %90 İyileşme",
        challenge: "Manuel compliance kontrolleri ayda 200+ saat harcıyordu, hata riski yüksekti.",
        solution: "AI destekli otomatik compliance ve risk değerlendirme sistemi devreye alındı.",
        result: "Compliance kontrol süresi %90 azaldı. Hata oranı sıfıra yaklaştı.",
      },
    },
    en: {
      name: "Finance",
      title: "Automation in the Finance Sector",
      description: "Automate your invoice processing, compliance, and reporting workflows.",
      heroDescription: "Empower your financial processes with AI. Minimize risks by automating critical workflows such as invoice processing, compliance checks, and financial reporting.",
      useCases: [
        { title: "Invoice Processing", description: "Automatically recognize, validate, and record incoming invoices. Eliminate manual data entry with OCR technology." },
        { title: "Compliance Monitoring", description: "Automatically track regulatory compliance. Generate risk assessments and compliance reports instantly." },
        { title: "Financial Reporting", description: "Automatically generate monthly, quarterly, and annual financial reports. Gain real-time visibility through live dashboards." },
        { title: "Risk Analysis", description: "Proactively manage financial risks with AI-based risk scoring, anomaly detection, and early warning systems." },
      ],
      stats: [
        { value: "70%", label: "Faster Invoice Processing" },
        { value: "99%", label: "Compliance Rate" },
        { value: "50%", label: "Cost Savings" },
        { value: "10x", label: "Faster Reporting" },
      ],
      caseStudy: {
        title: "Finance Company: 90% Improvement in Compliance Processes",
        challenge: "Manual compliance checks consumed 200+ hours per month with a high risk of errors.",
        solution: "An AI-powered automated compliance and risk assessment system was deployed.",
        result: "Compliance check time decreased by 90%. Error rate dropped to near zero.",
      },
    },
    nl: {
      name: "Financiën",
      title: "Automatisering in de Financiële Sector",
      description: "Automatiseer uw factuurverwerking, compliance en rapportageprocessen.",
      heroDescription: "Versterk uw financiële processen met AI. Minimaliseer risico's door kritieke workflows zoals factuurverwerking, compliancecontroles en financiële rapportage te automatiseren.",
      useCases: [
        { title: "Factuurverwerking", description: "Herken, valideer en registreer inkomende facturen automatisch. Elimineer handmatige gegevensinvoer met OCR-technologie." },
        { title: "Compliancemonitoring", description: "Volg automatisch de naleving van regelgeving. Genereer risicobeoordelingen en compliancerapporten direct." },
        { title: "Financiële Rapportage", description: "Genereer automatisch maandelijkse, kwartaal- en jaarlijkse financiële rapporten. Krijg realtime inzicht via live dashboards." },
        { title: "Risicoanalyse", description: "Beheer financiële risico's proactief met AI-gebaseerde risicoscoring, anomaliedetectie en vroegtijdige waarschuwingssystemen." },
      ],
      stats: [
        { value: "70%", label: "Snellere Factuurverwerking" },
        { value: "99%", label: "Compliancepercentage" },
        { value: "50%", label: "Kostenbesparing" },
        { value: "10x", label: "Snellere Rapportage" },
      ],
      caseStudy: {
        title: "Financieel Bedrijf: 90% Verbetering in Complianceprocessen",
        challenge: "Handmatige compliancecontroles kostten meer dan 200 uur per maand, met een hoog foutrisico.",
        solution: "Een AI-aangedreven geautomatiseerd compliance- en risicobeoordelingssysteem werd ingezet.",
        result: "De compliancecontroletijd daalde met 90%. Het foutpercentage daalde tot bijna nul.",
      },
    },
  },
  {
    slug: "manufacturing",
    icons: ["settings", "check", "truck", "wrench"],
    imagePrompt: "Modern smart factory with robotic arms on assembly line, digital quality control displays, industrial automation, cinematic lighting, professional, high quality, modern corporate, blue tones",
    tr: {
      name: "Üretim",
      title: "Üretimde Akıllı Otomasyon",
      description: "Üretim hattı, kalite kontrol ve tedarik zinciri süreçlerini otomatikleştirin.",
      heroDescription: "Üretim süreçlerinizi AI ile optimize edin. Üretim hattı izleme, kalite kontrol ve tedarik zinciri yönetimini otomatikleştirerek verimlilik ve kaliteyi artırın.",
      useCases: [
        { title: "Üretim Hattı İzleme", description: "Gerçek zamanlı üretim hattı takibi, darboğaz tespiti ve otomatik kapasite planlaması ile üretim verimliliğini artırın." },
        { title: "Kalite Kontrol", description: "AI tabanlı görsel denetim, otomatik ölçüm ve kalite standart kontrolü ile kusur oranlarını minimize edin." },
        { title: "Tedarik Zinciri", description: "Hammadde siparişlerini otomatik tetikleyin, tedarikçi performansını izleyin ve envanter seviyelerini optimize edin." },
        { title: "Bakım Planlaması", description: "Prediktif bakım ile makine arızalarını önceden tespit edin, plansız duruş sürelerini ortadan kaldırın." },
      ],
      stats: [
        { value: "%25", label: "Üretim Verimliliği Artışı" },
        { value: "%80", label: "Kalite Kontrol Hızı" },
        { value: "%45", label: "Stok Maliyeti Düşüşü" },
        { value: "%90", label: "Plansız Duruş Azalması" },
      ],
      caseStudy: {
        title: "Fabrika: Üretim Hattında %30 Verimlilik Artışı",
        challenge: "Manuel kalite kontroller yavaş, prediktif bakım mevcut değildi.",
        solution: "AI görsel denetim ve prediktif bakım sistemi entegre edildi.",
        result: "Kalite kontrol %80 hızlandı. Plansız duruşlar %90 azaldı.",
      },
    },
    en: {
      name: "Manufacturing",
      title: "Smart Automation in Manufacturing",
      description: "Automate your production line, quality control, and supply chain processes.",
      heroDescription: "Optimize your manufacturing processes with AI. Automate production line monitoring, quality control, and supply chain management to boost efficiency and quality.",
      useCases: [
        { title: "Production Line Monitoring", description: "Improve production efficiency with real-time line tracking, bottleneck detection, and automated capacity planning." },
        { title: "Quality Control", description: "Minimize defect rates with AI-based visual inspection, automated measurement, and quality standard verification." },
        { title: "Supply Chain", description: "Automatically trigger raw material orders, monitor supplier performance, and optimize inventory levels." },
        { title: "Maintenance Planning", description: "Detect machine failures in advance with predictive maintenance and eliminate unplanned downtime." },
      ],
      stats: [
        { value: "25%", label: "Production Efficiency Increase" },
        { value: "80%", label: "Faster Quality Control" },
        { value: "45%", label: "Inventory Cost Reduction" },
        { value: "90%", label: "Less Unplanned Downtime" },
      ],
      caseStudy: {
        title: "Factory: 30% Productivity Boost on the Production Line",
        challenge: "Manual quality checks were slow and predictive maintenance was nonexistent.",
        solution: "AI visual inspection and predictive maintenance systems were integrated.",
        result: "Quality control became 80% faster. Unplanned downtime decreased by 90%.",
      },
    },
    nl: {
      name: "Productie",
      title: "Slimme Automatisering in de Productie",
      description: "Automatiseer uw productielijn, kwaliteitscontrole en supply chain-processen.",
      heroDescription: "Optimaliseer uw productieprocessen met AI. Automatiseer productielijnmonitoring, kwaliteitscontrole en supply chain-management om efficiëntie en kwaliteit te verhogen.",
      useCases: [
        { title: "Productielijnmonitoring", description: "Verbeter de productie-efficiëntie met realtime lijntracking, knelpuntdetectie en geautomatiseerde capaciteitsplanning." },
        { title: "Kwaliteitscontrole", description: "Minimaliseer het defectpercentage met AI-gebaseerde visuele inspectie, geautomatiseerde meting en kwaliteitsnormverificatie." },
        { title: "Supply Chain", description: "Activeer automatisch grondstofbestellingen, monitor leveranciersprestaties en optimaliseer voorraadniveaus." },
        { title: "Onderhoudsplanning", description: "Detecteer machinestoringen vooraf met predictief onderhoud en elimineer ongeplande stilstand." },
      ],
      stats: [
        { value: "25%", label: "Meer Productie-efficiëntie" },
        { value: "80%", label: "Snellere Kwaliteitscontrole" },
        { value: "45%", label: "Lagere Voorraadkosten" },
        { value: "90%", label: "Minder Ongeplande Stilstand" },
      ],
      caseStudy: {
        title: "Fabriek: 30% Productiviteitsverhoging op de Productielijn",
        challenge: "Handmatige kwaliteitscontroles waren traag en predictief onderhoud ontbrak.",
        solution: "AI visuele inspectie en predictief onderhoudssystemen werden geïntegreerd.",
        result: "Kwaliteitscontrole werd 80% sneller. Ongeplande stilstand nam af met 90%.",
      },
    },
  },
  {
    slug: "logistics",
    icons: ["map", "navigation", "warehouse", "trending"],
    imagePrompt: "Modern logistics hub with automated sorting systems, delivery trucks with GPS tracking, digital route optimization map, cinematic, professional, high quality, modern corporate",
    tr: {
      name: "Lojistik",
      title: "Lojistikte AI Otomasyonu",
      description: "Kargo takibi, rota optimizasyonu ve depo yönetimi süreçlerini otomatikleştirin.",
      heroDescription: "Lojistik operasyonlarınızı AI ile dönüştürün. Kargo takibi, rota optimizasyonu ve depo yönetimi süreçlerini uçtan uca otomatikleştirerek teslimat hızını ve müşteri memnuniyetini artırın.",
      useCases: [
        { title: "Kargo Takibi", description: "Gerçek zamanlı kargo izleme, otomatik durum güncellemeleri ve proaktif sorun tespiti ile teslimat süreçlerini iyileştirin." },
        { title: "Rota Optimizasyonu", description: "AI tabanlı rota planlama ile teslimat sürelerini kısaltın, yakıt maliyetlerini düşürün ve araç verimliliğini artırın." },
        { title: "Depo Yönetimi", description: "Otomatik yerleşim planlaması, toplama optimizasyonu ve envanter yönetimi ile depo operasyonlarını hızlandırın." },
        { title: "Talep Tahmini", description: "AI destekli talep tahminleri ile kapasiteyi proaktif planlayın, sezonsal dalgalanmalara hazırlıklı olun." },
      ],
      stats: [
        { value: "%30", label: "Teslimat Süresi Kısalması" },
        { value: "%25", label: "Yakıt Tasarrufu" },
        { value: "%50", label: "Depo Verimliliği Artışı" },
        { value: "%95", label: "Zamanında Teslimat" },
      ],
      caseStudy: {
        title: "Lojistik Firması: Teslimat Süresinde %35 İyileşme",
        challenge: "Manuel rota planlaması verimsizdi, teslimat gecikmeleri yaşanıyordu.",
        solution: "AI rota optimizasyonu ve gerçek zamanlı takip sistemi devreye alındı.",
        result: "Ortalama teslimat süresi %35 kısaldı. Yakıt maliyetleri %25 düştü.",
      },
    },
    en: {
      name: "Logistics",
      title: "AI Automation in Logistics",
      description: "Automate your shipment tracking, route optimization, and warehouse management processes.",
      heroDescription: "Transform your logistics operations with AI. Automate shipment tracking, route optimization, and warehouse management end-to-end to increase delivery speed and customer satisfaction.",
      useCases: [
        { title: "Shipment Tracking", description: "Improve delivery processes with real-time shipment monitoring, automatic status updates, and proactive issue detection." },
        { title: "Route Optimization", description: "Shorten delivery times, reduce fuel costs, and increase vehicle efficiency with AI-based route planning." },
        { title: "Warehouse Management", description: "Accelerate warehouse operations with automated layout planning, pick optimization, and inventory management." },
        { title: "Demand Forecasting", description: "Plan capacity proactively with AI-powered demand forecasts and stay prepared for seasonal fluctuations." },
      ],
      stats: [
        { value: "30%", label: "Shorter Delivery Times" },
        { value: "25%", label: "Fuel Cost Savings" },
        { value: "50%", label: "Warehouse Efficiency Gain" },
        { value: "95%", label: "On-Time Delivery" },
      ],
      caseStudy: {
        title: "Logistics Firm: 35% Improvement in Delivery Times",
        challenge: "Manual route planning was inefficient, causing delivery delays.",
        solution: "AI route optimization and a real-time tracking system were deployed.",
        result: "Average delivery time shortened by 35%. Fuel costs dropped by 25%.",
      },
    },
    nl: {
      name: "Logistiek",
      title: "AI-automatisering in de Logistiek",
      description: "Automatiseer uw zendingstracking, routeoptimalisatie en magazijnbeheerprocessen.",
      heroDescription: "Transformeer uw logistieke operaties met AI. Automatiseer zendingstracking, routeoptimalisatie en magazijnbeheer end-to-end om de leversnelheid en klanttevredenheid te verhogen.",
      useCases: [
        { title: "Zendingstracking", description: "Verbeter leverprocessen met realtime zendingsmonitoring, automatische statusupdates en proactieve probleemdetectie." },
        { title: "Routeoptimalisatie", description: "Verkort levertijden, verlaag brandstofkosten en verhoog voertuigefficiëntie met AI-gebaseerde routeplanning." },
        { title: "Magazijnbeheer", description: "Versnel magazijnoperaties met geautomatiseerde indelingsplanning, pickoptimalisatie en voorraadbeheer." },
        { title: "Vraagvoorspelling", description: "Plan capaciteit proactief met AI-aangedreven vraagvoorspellingen en wees voorbereid op seizoensgebonden schommelingen." },
      ],
      stats: [
        { value: "30%", label: "Kortere Levertijden" },
        { value: "25%", label: "Brandstofkostenbesparing" },
        { value: "50%", label: "Meer Magazijnefficiëntie" },
        { value: "95%", label: "Op Tijd Geleverd" },
      ],
      caseStudy: {
        title: "Logistiek Bedrijf: 35% Verbetering in Levertijden",
        challenge: "Handmatige routeplanning was inefficiënt, wat leidde tot leveringsvertragingen.",
        solution: "AI-routeoptimalisatie en een realtime trackingsysteem werden ingezet.",
        result: "De gemiddelde levertijd werd met 35% verkort. De brandstofkosten daalden met 25%.",
      },
    },
  },
  {
    slug: "retail",
    icons: ["package", "megaphone", "heart", "users"],
    imagePrompt: "Modern retail store with digital price tags and AI-powered analytics screens, customer engagement technology, cinematic, professional, high quality, modern corporate, warm lighting",
    tr: {
      name: "Perakende",
      title: "Perakendede Dijital Dönüşüm",
      description: "Stok yönetimi, kampanya otomasyonu ve müşteri sadakat programlarını otomatikleştirin.",
      heroDescription: "Perakende operasyonlarınızı AI ile güçlendirin. Stok yönetimi, kişiselleştirilmiş kampanyalar ve sadakat programları ile müşteri deneyimini ve karlılığı artırın.",
      useCases: [
        { title: "Stok Yönetimi", description: "AI tabanlı talep tahmini ile optimal stok seviyelerini koruyun. Otomatik sipariş tetikleme ve tedarikçi yönetimi." },
        { title: "Kampanya Otomasyonu", description: "Kişiselleştirilmiş promosyonlar, otomatik e-posta kampanyaları ve hedefli teklifler ile satışları artırın." },
        { title: "Sadakat Programı", description: "Otomatik puan hesaplama, ödül yönetimi ve kişiselleştirilmiş müşteri deneyimi ile sadakati güçlendirin." },
        { title: "Müşteri Analizi", description: "Alışveriş davranışı analizi, segmentasyon ve churn tahmini ile müşteri ilişkilerini optimize edin." },
      ],
      stats: [
        { value: "%20", label: "Satış Artışı" },
        { value: "%35", label: "Stok Maliyeti Düşüşü" },
        { value: "%60", label: "Kampanya ROI Artışı" },
        { value: "2x", label: "Müşteri Geri Dönüşü" },
      ],
      caseStudy: {
        title: "Perakende Zinciri: Kampanya Verimliliğinde %60 Artış",
        challenge: "Genel kampanyalar düşük dönüşüm oranına sahipti, stok sorunları yaşanıyordu.",
        solution: "AI kişiselleştirme ve talep tahmin sistemi uygulandı.",
        result: "Kampanya dönüşümleri %60 arttı. Stok maliyetleri %35 düştü.",
      },
    },
    en: {
      name: "Retail",
      title: "Digital Transformation in Retail",
      description: "Automate inventory management, campaign automation, and customer loyalty programs.",
      heroDescription: "Empower your retail operations with AI. Improve customer experience and profitability with inventory management, personalized campaigns, and loyalty programs.",
      useCases: [
        { title: "Inventory Management", description: "Maintain optimal stock levels with AI-based demand forecasting. Automated reorder triggers and supplier management." },
        { title: "Campaign Automation", description: "Boost sales with personalized promotions, automated email campaigns, and targeted offers." },
        { title: "Loyalty Program", description: "Strengthen customer loyalty with automated points calculation, rewards management, and personalized customer experiences." },
        { title: "Customer Analytics", description: "Optimize customer relationships with shopping behavior analysis, segmentation, and churn prediction." },
      ],
      stats: [
        { value: "20%", label: "Sales Increase" },
        { value: "35%", label: "Inventory Cost Reduction" },
        { value: "60%", label: "Campaign ROI Increase" },
        { value: "2x", label: "Customer Return Rate" },
      ],
      caseStudy: {
        title: "Retail Chain: 60% Increase in Campaign Effectiveness",
        challenge: "Generic campaigns had low conversion rates, and inventory issues were common.",
        solution: "AI personalization and demand forecasting systems were implemented.",
        result: "Campaign conversions increased by 60%. Inventory costs dropped by 35%.",
      },
    },
    nl: {
      name: "Retail",
      title: "Digitale Transformatie in Retail",
      description: "Automatiseer voorraadbeheer, campagne-automatisering en klantloyaliteitsprogramma's.",
      heroDescription: "Versterk uw retailoperaties met AI. Verbeter de klantervaring en winstgevendheid met voorraadbeheer, gepersonaliseerde campagnes en loyaliteitsprogramma's.",
      useCases: [
        { title: "Voorraadbeheer", description: "Behoud optimale voorraadniveaus met AI-gebaseerde vraagvoorspelling. Geautomatiseerde herbesteltriggers en leveranciersbeheer." },
        { title: "Campagne-automatisering", description: "Verhoog de verkoop met gepersonaliseerde promoties, geautomatiseerde e-mailcampagnes en gerichte aanbiedingen." },
        { title: "Loyaliteitsprogramma", description: "Versterk de klantloyaliteit met geautomatiseerde puntenberekening, beloningenbeheer en gepersonaliseerde klantervaringen." },
        { title: "Klantanalyse", description: "Optimaliseer klantrelaties met analyse van koopgedrag, segmentatie en churnvoorspelling." },
      ],
      stats: [
        { value: "20%", label: "Verkooptoename" },
        { value: "35%", label: "Lagere Voorraadkosten" },
        { value: "60%", label: "Hogere Campagne-ROI" },
        { value: "2x", label: "Klantretentie" },
      ],
      caseStudy: {
        title: "Retailketen: 60% Verbetering in Campagne-effectiviteit",
        challenge: "Generieke campagnes hadden lage conversiepercentages en er waren voorraadproblemen.",
        solution: "AI-personalisatie- en vraagvoorspellingssystemen werden geïmplementeerd.",
        result: "Campagneconversies stegen met 60%. Voorraadkosten daalden met 35%.",
      },
    },
  },
  {
    slug: "real-estate",
    icons: ["users", "file", "folder", "chart"],
    imagePrompt: "Modern real estate office with digital property displays, virtual property tour setup, CRM dashboard on screen, cinematic, professional, high quality, modern corporate",
    tr: {
      name: "Emlak",
      title: "Emlak Sektöründe Otomasyon",
      description: "Lead yönetimi, sözleşme süreçleri ve döküman otomasyonunu güçlendirin.",
      heroDescription: "Emlak operasyonlarınızı AI ile modernleştirin. Lead yönetimi, sözleşme hazırlama ve döküman süreçlerini otomatikleştirerek satış verimliliğinizi artırın.",
      useCases: [
        { title: "Lead Yönetimi", description: "Potansiyel müşterileri otomatik skorlayın, takip e-postalarını zamanında gönderin ve satış hunisini optimize edin." },
        { title: "Sözleşme Otomasyonu", description: "Sözleşmeleri otomatik oluşturun, dijital imza süreçlerini yönetin ve arşivlemeyi otomatikleştirin." },
        { title: "Döküman Yönetimi", description: "Tapu, iskan, ruhsat gibi belgeleri merkezi dijital arşivde yönetin. Otomatik sınıflandırma ve arama." },
        { title: "Portföy Analizi", description: "Piyasa verilerini analiz edin, fiyat önerileri oluşturun ve yatırım fırsatlarını tespit edin." },
      ],
      stats: [
        { value: "%45", label: "Lead Dönüşüm Artışı" },
        { value: "%70", label: "Sözleşme Süresi Kısalması" },
        { value: "%80", label: "Döküman Arama Hızı" },
        { value: "3x", label: "Daha Fazla Satış Kapama" },
      ],
      caseStudy: {
        title: "Emlak Ajansı: Lead Dönüşümünde %50 Artış",
        challenge: "Potansiyel müşteri takibi manuel yapılıyor, fırsatlar kaçırılıyordu.",
        solution: "AI lead skorlama ve otomatik takip sistemi kuruldu.",
        result: "Lead dönüşüm oranı %50 arttı. Sözleşme hazırlama süresi %70 kısaldı.",
      },
    },
    en: {
      name: "Real Estate",
      title: "Automation in the Real Estate Sector",
      description: "Strengthen lead management, contract processes, and document automation.",
      heroDescription: "Modernize your real estate operations with AI. Boost sales efficiency by automating lead management, contract preparation, and document workflows.",
      useCases: [
        { title: "Lead Management", description: "Automatically score potential clients, send follow-up emails on time, and optimize your sales funnel." },
        { title: "Contract Automation", description: "Automatically generate contracts, manage digital signature workflows, and automate archiving." },
        { title: "Document Management", description: "Manage deeds, permits, and certificates in a centralized digital archive. Automated classification and search." },
        { title: "Portfolio Analysis", description: "Analyze market data, generate pricing recommendations, and identify investment opportunities." },
      ],
      stats: [
        { value: "45%", label: "Lead Conversion Increase" },
        { value: "70%", label: "Shorter Contract Turnaround" },
        { value: "80%", label: "Faster Document Search" },
        { value: "3x", label: "More Closed Deals" },
      ],
      caseStudy: {
        title: "Real Estate Agency: 50% Increase in Lead Conversion",
        challenge: "Potential client follow-up was done manually, causing missed opportunities.",
        solution: "An AI lead scoring and automated follow-up system was implemented.",
        result: "Lead conversion rate increased by 50%. Contract preparation time shortened by 70%.",
      },
    },
    nl: {
      name: "Vastgoed",
      title: "Automatisering in de Vastgoedsector",
      description: "Versterk leadbeheer, contractprocessen en documentautomatisering.",
      heroDescription: "Moderniseer uw vastgoedoperaties met AI. Verhoog de verkoopefficiëntie door leadbeheer, contractvoorbereiding en documentworkflows te automatiseren.",
      useCases: [
        { title: "Leadbeheer", description: "Score potentiële klanten automatisch, verstuur follow-up e-mails op tijd en optimaliseer uw verkooptrechter." },
        { title: "Contractautomatisering", description: "Genereer automatisch contracten, beheer digitale ondertekeningsworkflows en automatiseer archivering." },
        { title: "Documentbeheer", description: "Beheer aktes, vergunningen en certificaten in een centraal digitaal archief. Geautomatiseerde classificatie en zoekfunctie." },
        { title: "Portfolioanalyse", description: "Analyseer marktgegevens, genereer prijsaanbevelingen en identificeer investeringskansen." },
      ],
      stats: [
        { value: "45%", label: "Meer Leadconversie" },
        { value: "70%", label: "Kortere Contractdoorlooptijd" },
        { value: "80%", label: "Sneller Documenten Zoeken" },
        { value: "3x", label: "Meer Afgesloten Deals" },
      ],
      caseStudy: {
        title: "Vastgoedkantoor: 50% Meer Leadconversie",
        challenge: "Follow-up van potentiële klanten werd handmatig gedaan, waardoor kansen werden gemist.",
        solution: "Een AI-leadscoring- en geautomatiseerd follow-upsysteem werd geïmplementeerd.",
        result: "Het leadconversiepercentage steeg met 50%. De contractvoorbereidingstijd werd met 70% verkort.",
      },
    },
  },
  {
    slug: "education",
    icons: ["users", "book", "clipboard", "bell"],
    imagePrompt: "Modern smart classroom with interactive digital boards, students using tablets, AI-powered learning analytics on teacher screen, cinematic, professional, high quality, modern corporate",
    tr: {
      name: "Eğitim",
      title: "Eğitimde AI Çözümleri",
      description: "Öğrenci takibi, içerik yönetimi ve sınav süreçlerini otomatikleştirin.",
      heroDescription: "Eğitim süreçlerinizi AI ile dönüştürün. Öğrenci takibi, içerik üretimi ve sınav yönetimi süreçlerini otomatikleştirerek eğitim kalitesini artırın.",
      useCases: [
        { title: "Öğrenci Takibi", description: "Öğrenci performansını otomatik analiz edin, risk altındaki öğrencileri tespit edin ve kişiselleştirilmiş öneriler sunun." },
        { title: "İçerik Yönetimi", description: "Ders materyallerini organize edin, otomatik içerik önerileri oluşturun ve öğrenme yollarını kişiselleştirin." },
        { title: "Sınav Otomasyonu", description: "Sınav oluşturma, otomatik değerlendirme ve sonuç analizi ile sınav süreçlerini hızlandırın." },
        { title: "Veli İletişimi", description: "Otomatik performans raporları, devamsızlık bildirimleri ve randevu yönetimi ile iletişimi güçlendirin." },
      ],
      stats: [
        { value: "%40", label: "Öğretmen Verimliliği Artışı" },
        { value: "%25", label: "Öğrenci Başarı Artışı" },
        { value: "%80", label: "İdari İş Yükü Azalması" },
        { value: "5x", label: "Daha Hızlı Değerlendirme" },
      ],
      caseStudy: {
        title: "Özel Okul: Öğretmen Verimliliğinde %45 Artış",
        challenge: "Not girişi, devamsızlık takibi ve veli iletişimi çok zaman alıyordu.",
        solution: "AI destekli öğrenci yönetim ve otomasyon sistemi kuruldu.",
        result: "İdari görevler %80 azaldı. Öğretmenler öğretime %45 daha fazla vakit ayırıyor.",
      },
    },
    en: {
      name: "Education",
      title: "AI Solutions in Education",
      description: "Automate student tracking, content management, and examination processes.",
      heroDescription: "Transform your educational processes with AI. Automate student tracking, content creation, and exam management to improve the quality of education.",
      useCases: [
        { title: "Student Tracking", description: "Automatically analyze student performance, identify at-risk students, and provide personalized recommendations." },
        { title: "Content Management", description: "Organize course materials, generate automatic content suggestions, and personalize learning paths." },
        { title: "Exam Automation", description: "Accelerate examination processes with automated exam creation, grading, and result analysis." },
        { title: "Parent Communication", description: "Strengthen communication with automated performance reports, absence notifications, and appointment management." },
      ],
      stats: [
        { value: "40%", label: "Teacher Efficiency Increase" },
        { value: "25%", label: "Student Achievement Increase" },
        { value: "80%", label: "Less Administrative Workload" },
        { value: "5x", label: "Faster Grading" },
      ],
      caseStudy: {
        title: "Private School: 45% Increase in Teacher Productivity",
        challenge: "Grade entry, attendance tracking, and parent communication were extremely time-consuming.",
        solution: "An AI-powered student management and automation system was implemented.",
        result: "Administrative tasks decreased by 80%. Teachers now spend 45% more time on teaching.",
      },
    },
    nl: {
      name: "Onderwijs",
      title: "AI-oplossingen in het Onderwijs",
      description: "Automatiseer leerlingtracking, contentbeheer en examenprocessen.",
      heroDescription: "Transformeer uw onderwijsprocessen met AI. Automatiseer leerlingtracking, contentcreatie en examenbeheer om de onderwijskwaliteit te verbeteren.",
      useCases: [
        { title: "Leerlingtracking", description: "Analyseer automatisch de prestaties van leerlingen, identificeer risicostudenten en bied gepersonaliseerde aanbevelingen." },
        { title: "Contentbeheer", description: "Organiseer lesmateriaal, genereer automatische contentaanbevelingen en personaliseer leertrajecten." },
        { title: "Examenautomatisering", description: "Versnel examenprocessen met geautomatiseerde examencreatie, beoordeling en resultaatanalyse." },
        { title: "Oudercommunicatie", description: "Versterk de communicatie met geautomatiseerde prestatierapporten, afwezigheidsmeldingen en afspraakbeheer." },
      ],
      stats: [
        { value: "40%", label: "Meer Docentenefficiëntie" },
        { value: "25%", label: "Hogere Leerlingprestaties" },
        { value: "80%", label: "Minder Administratieve Werklast" },
        { value: "5x", label: "Sneller Beoordelen" },
      ],
      caseStudy: {
        title: "Particuliere School: 45% Meer Docentenproductiviteit",
        challenge: "Cijferinvoer, aanwezigheidsregistratie en oudercommunicatie waren extreem tijdrovend.",
        solution: "Een AI-aangedreven leerlingbeheersysteem en automatiseringssysteem werd geïmplementeerd.",
        result: "Administratieve taken namen met 80% af. Docenten besteden nu 45% meer tijd aan lesgeven.",
      },
    },
  },
  {
    slug: "hr",
    icons: ["search", "calculator", "user-plus", "trending"],
    imagePrompt: "Modern HR office with AI-powered recruitment dashboard, video interview setup, digital onboarding screens, cinematic, professional, high quality, modern corporate, warm tones",
    tr: {
      name: "İnsan Kaynakları",
      title: "HR'da Akıllı Otomasyon",
      description: "İşe alım, bordro ve onboarding süreçlerini otomatikleştirin.",
      heroDescription: "İnsan kaynakları süreçlerinizi AI ile güçlendirin. İşe alım, bordro yönetimi ve onboarding süreçlerini otomatikleştirerek HR ekibinizin stratejik işlere odaklanmasını sağlayın.",
      useCases: [
        { title: "İşe Alım Otomasyonu", description: "CV tarama, aday skorlama, mülakat planlama ve aday iletişimini otomatikleştirin. En iyi yetenekleri hızla bulun." },
        { title: "Bordro Yönetimi", description: "Maaş hesaplama, vergi kesintileri, SGK bildirgeleri ve banka transferlerini otomatik gerçekleştirin." },
        { title: "Onboarding", description: "Yeni çalışan oryantasyonunu otomatikleştirin. Döküman toplama, eğitim planlaması ve ekipman hazırlığı." },
        { title: "Performans Takibi", description: "Otomatik performans değerlendirme döngüleri, hedef takibi ve geri bildirim yönetimi." },
      ],
      stats: [
        { value: "%60", label: "İşe Alım Süresi Kısalması" },
        { value: "%80", label: "Bordro Hata Azalması" },
        { value: "%50", label: "Onboarding Süresi Kısalması" },
        { value: "4x", label: "Daha Fazla Aday Değerlendirme" },
      ],
      caseStudy: {
        title: "Teknoloji Şirketi: İşe Alım Süresinde %65 Kısalma",
        challenge: "Binlerce CV manuel inceleniyor, işe alım süreci aylarca sürüyordu.",
        solution: "AI CV tarama ve otomatik aday değerlendirme sistemi devreye alındı.",
        result: "İşe alım süresi 45 günden 15 güne düştü. Aday kalitesi önemli ölçüde arttı.",
      },
    },
    en: {
      name: "Human Resources",
      title: "Smart Automation in HR",
      description: "Automate recruitment, payroll, and onboarding processes.",
      heroDescription: "Empower your human resources processes with AI. Automate recruitment, payroll management, and onboarding so your HR team can focus on strategic initiatives.",
      useCases: [
        { title: "Recruitment Automation", description: "Automate CV screening, candidate scoring, interview scheduling, and candidate communications. Find the best talent faster." },
        { title: "Payroll Management", description: "Automatically calculate salaries, tax deductions, social security filings, and bank transfers." },
        { title: "Onboarding", description: "Automate new employee orientation. Document collection, training scheduling, and equipment preparation." },
        { title: "Performance Tracking", description: "Automated performance review cycles, goal tracking, and feedback management." },
      ],
      stats: [
        { value: "60%", label: "Shorter Hiring Time" },
        { value: "80%", label: "Fewer Payroll Errors" },
        { value: "50%", label: "Faster Onboarding" },
        { value: "4x", label: "More Candidates Evaluated" },
      ],
      caseStudy: {
        title: "Tech Company: 65% Reduction in Hiring Time",
        challenge: "Thousands of CVs were reviewed manually and the hiring process took months.",
        solution: "An AI-powered CV screening and automated candidate evaluation system was deployed.",
        result: "Hiring time dropped from 45 days to 15 days. Candidate quality improved significantly.",
      },
    },
    nl: {
      name: "Human Resources",
      title: "Slimme Automatisering in HR",
      description: "Automatiseer werving, salarisadministratie en onboardingprocessen.",
      heroDescription: "Versterk uw HR-processen met AI. Automatiseer werving, salarisadministratie en onboarding zodat uw HR-team zich kan richten op strategische initiatieven.",
      useCases: [
        { title: "Wervingsautomatisering", description: "Automatiseer CV-screening, kandidaatscoring, sollicitatiegesprekplanning en kandidaatcommunicatie. Vind sneller het beste talent." },
        { title: "Salarisadministratie", description: "Bereken automatisch salarissen, belastinginhoudingen, sociale zekerheidsmeldingen en bankoverschrijvingen." },
        { title: "Onboarding", description: "Automatiseer de oriëntatie van nieuwe medewerkers. Documentverzameling, trainingsplanning en apparaatvoorbereiding." },
        { title: "Prestatietracking", description: "Geautomatiseerde prestatiebeoordelingscycli, doeltracking en feedbackbeheer." },
      ],
      stats: [
        { value: "60%", label: "Kortere Wervingstijd" },
        { value: "80%", label: "Minder Salarisfouten" },
        { value: "50%", label: "Snellere Onboarding" },
        { value: "4x", label: "Meer Kandidaten Beoordeeld" },
      ],
      caseStudy: {
        title: "Techbedrijf: 65% Kortere Wervingstijd",
        challenge: "Duizenden CV's werden handmatig beoordeeld en het wervingsproces duurde maanden.",
        solution: "Een AI-aangedreven CV-screening- en geautomatiseerd kandidaatbeoordelingssysteem werd ingezet.",
        result: "De wervingstijd daalde van 45 naar 15 dagen. De kwaliteit van kandidaten verbeterde aanzienlijk.",
      },
    },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getIndustryLocale(slug: string, locale: string): (IndustryLocaleData & { slug: string; icons: string[] }) | undefined {
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return undefined;
  const data = industry[locale as keyof Pick<Industry, 'tr' | 'en' | 'nl'>] || industry.en;
  return { ...data, slug: industry.slug, icons: industry.icons };
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
