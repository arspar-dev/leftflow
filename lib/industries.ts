export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Industry {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroDescription: string;
  useCases: UseCase[];
  stats: Stat[];
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
  };
  imagePrompt: string;
}

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-ticaret",
    title: "E-ticarette Akıllı Otomasyon",
    description: "Sipariş yönetiminden envanter takibine, e-ticaret operasyonlarınızı uçtan uca otomatikleştirin.",
    heroDescription: "E-ticaret işletmenizi AI destekli otomasyon ile ölçeklendirin. Sipariş işleme, envanter yönetimi ve müşteri iletişimini otomatikleştirerek operasyonel verimliliği artırın.",
    useCases: [
      { title: "Sipariş Yönetimi", description: "Sipariş alımından kargoya teslime kadar tüm süreci otomatik yönetin. Stok kontrolü, fatura kesimi ve kargo entegrasyonu tek platformda.", icon: "package" },
      { title: "Envanter Takibi", description: "Gerçek zamanlı stok takibi ile fazla stok veya stok eksikliği sorunlarını ortadan kaldırın. AI tabanlı talep tahminleri ile optimum stok seviyelerini koruyun.", icon: "warehouse" },
      { title: "Müşteri Bildirimleri", description: "Sipariş durumu, kargo takibi ve kampanya bildirimleri otomatik olarak müşterilere iletilsin. Kişiselleştirilmiş iletişim ile müşteri memnuniyetini artırın.", icon: "bell" },
      { title: "Fiyatlandırma Optimizasyonu", description: "Rakip fiyatları, talep verileri ve stok durumuna göre dinamik fiyatlandırma stratejileri oluşturun.", icon: "trending" },
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
    imagePrompt: "Modern e-commerce warehouse with automated conveyor belts and robotic arms, digital screens showing order tracking dashboards, cinematic lighting, professional, high quality, modern corporate, blue and white color scheme",
  },
  {
    slug: "healthcare",
    name: "Sağlık",
    title: "Sağlık Sektöründe AI Otomasyonu",
    description: "Randevu yönetiminden hasta takibine, sağlık hizmetlerinizi dijitalleştirin.",
    heroDescription: "Sağlık sektörünüzdeki süreçleri AI ile optimize edin. Randevu yönetimi, hasta takibi ve raporlama süreçlerini otomatikleştirerek hem verimliliği hem de hasta memnuniyetini artırın.",
    useCases: [
      { title: "Randevu Yönetimi", description: "Online randevu sistemi, otomatik hatırlatmalar ve doktor müsaitlik takibi ile randevu süreçlerini kolaylaştırın.", icon: "calendar" },
      { title: "Hasta Takibi", description: "Hasta geçmişi, tedavi planları ve kontrol takipleri otomatik olarak yönetilsin. Kritik hatırlatmalar zamanında yapılsın.", icon: "heart" },
      { title: "Raporlama", description: "Klinik verileri otomatik analiz edin, performans raporları oluşturun ve sağlık bakanlığı raporlamalarını kolaylaştırın.", icon: "chart" },
      { title: "İlaç Yönetimi", description: "Reçete takibi, ilaç etkileşim kontrolü ve stok yönetimini otomatikleştirin.", icon: "pill" },
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
    imagePrompt: "Modern hospital reception with digital check-in screens, a doctor looking at holographic patient data, clean white and blue medical environment, cinematic, professional, high quality, modern corporate",
  },
  {
    slug: "finance",
    name: "Finans",
    title: "Finans Sektöründe Otomasyon",
    description: "Fatura işleme, compliance ve raporlama süreçlerinizi otomatikleştirin.",
    heroDescription: "Finansal süreçlerinizi AI ile güçlendirin. Fatura işleme, uyumluluk kontrolleri ve finansal raporlama gibi kritik süreçleri otomatikleştirerek riskleri minimize edin.",
    useCases: [
      { title: "Fatura İşleme", description: "Gelen faturaları otomatik tanıma, doğrulama ve kaydetme. OCR teknolojisi ile manuel veri girişini ortadan kaldırın.", icon: "receipt" },
      { title: "Compliance Kontrolü", description: "Yasal düzenlemelere uyumu otomatik takip edin. Risk değerlendirmesi ve uyumluluk raporlarını anında oluşturun.", icon: "shield" },
      { title: "Finansal Raporlama", description: "Aylık, çeyreklik ve yıllık finansal raporları otomatik oluşturun. Gerçek zamanlı dashboard'lar ile anlık görünürlük sağlayın.", icon: "chart" },
      { title: "Risk Analizi", description: "AI tabanlı risk skorlama, anomali tespiti ve erken uyarı sistemleri ile finansal riskleri proaktif yönetin.", icon: "alert" },
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
    imagePrompt: "Modern financial trading floor with multiple screens showing charts and data analytics, blue-lit environment, cinematic, professional, high quality, modern corporate, futuristic finance",
  },
  {
    slug: "manufacturing",
    name: "Üretim",
    title: "Üretimde Akıllı Otomasyon",
    description: "Üretim hattı, kalite kontrol ve tedarik zinciri süreçlerini otomatikleştirin.",
    heroDescription: "Üretim süreçlerinizi AI ile optimize edin. Üretim hattı izleme, kalite kontrol ve tedarik zinciri yönetimini otomatikleştirerek verimlilik ve kaliteyi artırın.",
    useCases: [
      { title: "Üretim Hattı İzleme", description: "Gerçek zamanlı üretim hattı takibi, darboğaz tespiti ve otomatik kapasite planlaması ile üretim verimliliğini artırın.", icon: "settings" },
      { title: "Kalite Kontrol", description: "AI tabanlı görsel denetim, otomatik ölçüm ve kalite standart kontrolü ile kusur oranlarını minimize edin.", icon: "check" },
      { title: "Tedarik Zinciri", description: "Hammadde siparişlerini otomatik tetikleyin, tedarikçi performansını izleyin ve envanter seviyelerini optimize edin.", icon: "truck" },
      { title: "Bakım Planlaması", description: "Prediktif bakım ile makine arızalarını önceden tespit edin, plansız duruş sürelerini ortadan kaldırın.", icon: "wrench" },
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
    imagePrompt: "Modern smart factory with robotic arms on assembly line, digital quality control displays, industrial automation, cinematic lighting, professional, high quality, modern corporate, blue tones",
  },
  {
    slug: "logistics",
    name: "Lojistik",
    title: "Lojistikte AI Otomasyonu",
    description: "Kargo takibi, rota optimizasyonu ve depo yönetimi süreçlerini otomatikleştirin.",
    heroDescription: "Lojistik operasyonlarınızı AI ile dönüştürün. Kargo takibi, rota optimizasyonu ve depo yönetimi süreçlerini uçtan uca otomatikleştirerek teslimat hızını ve müşteri memnuniyetini artırın.",
    useCases: [
      { title: "Kargo Takibi", description: "Gerçek zamanlı kargo izleme, otomatik durum güncellemeleri ve proaktif sorun tespiti ile teslimat süreçlerini iyileştirin.", icon: "map" },
      { title: "Rota Optimizasyonu", description: "AI tabanlı rota planlama ile teslimat sürelerini kısaltın, yakıt maliyetlerini düşürün ve araç verimliliğini artırın.", icon: "navigation" },
      { title: "Depo Yönetimi", description: "Otomatik yerleşim planlaması, toplama optimizasyonu ve envanter yönetimi ile depo operasyonlarını hızlandırın.", icon: "warehouse" },
      { title: "Talep Tahmini", description: "AI destekli talep tahminleri ile kapasiteyi proaktif planlayın, sezonsal dalgalanmalara hazırlıklı olun.", icon: "trending" },
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
    imagePrompt: "Modern logistics hub with automated sorting systems, delivery trucks with GPS tracking, digital route optimization map, cinematic, professional, high quality, modern corporate",
  },
  {
    slug: "retail",
    name: "Perakende",
    title: "Perakendede Dijital Dönüşüm",
    description: "Stok yönetimi, kampanya otomasyonu ve müşteri sadakat programlarını otomatikleştirin.",
    heroDescription: "Perakende operasyonlarınızı AI ile güçlendirin. Stok yönetimi, kişiselleştirilmiş kampanyalar ve sadakat programları ile müşteri deneyimini ve karlılığı artırın.",
    useCases: [
      { title: "Stok Yönetimi", description: "AI tabanlı talep tahmini ile optimal stok seviyelerini koruyun. Otomatik sipariş tetikleme ve tedarikçi yönetimi.", icon: "package" },
      { title: "Kampanya Otomasyonu", description: "Kişiselleştirilmiş promosyonlar, otomatik e-posta kampanyaları ve hedefli teklifler ile satışları artırın.", icon: "megaphone" },
      { title: "Sadakat Programı", description: "Otomatik puan hesaplama, ödül yönetimi ve kişiselleştirilmiş müşteri deneyimi ile sadakati güçlendirin.", icon: "heart" },
      { title: "Müşteri Analizi", description: "Alışveriş davranışı analizi, segmentasyon ve churn tahmini ile müşteri ilişkilerini optimize edin.", icon: "users" },
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
    imagePrompt: "Modern retail store with digital price tags and AI-powered analytics screens, customer engagement technology, cinematic, professional, high quality, modern corporate, warm lighting",
  },
  {
    slug: "real-estate",
    name: "Emlak",
    title: "Emlak Sektöründe Otomasyon",
    description: "Lead yönetimi, sözleşme süreçleri ve döküman otomasyonunu güçlendirin.",
    heroDescription: "Emlak operasyonlarınızı AI ile modernleştirin. Lead yönetimi, sözleşme hazırlama ve döküman süreçlerini otomatikleştirerek satış verimliliğinizi artırın.",
    useCases: [
      { title: "Lead Yönetimi", description: "Potansiyel müşterileri otomatik skorlayın, takip e-postalarını zamanında gönderin ve satış hunisini optimize edin.", icon: "users" },
      { title: "Sözleşme Otomasyonu", description: "Sözleşmeleri otomatik oluşturun, dijital imza süreçlerini yönetin ve arşivlemeyi otomatikleştirin.", icon: "file" },
      { title: "Döküman Yönetimi", description: "Tapu, iskan, ruhsat gibi belgeleri merkezi dijital arşivde yönetin. Otomatik sınıflandırma ve arama.", icon: "folder" },
      { title: "Portföy Analizi", description: "Piyasa verilerini analiz edin, fiyat önerileri oluşturun ve yatırım fırsatlarını tespit edin.", icon: "chart" },
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
    imagePrompt: "Modern real estate office with digital property displays, virtual property tour setup, CRM dashboard on screen, cinematic, professional, high quality, modern corporate",
  },
  {
    slug: "education",
    name: "Eğitim",
    title: "Eğitimde AI Çözümleri",
    description: "Öğrenci takibi, içerik yönetimi ve sınav süreçlerini otomatikleştirin.",
    heroDescription: "Eğitim süreçlerinizi AI ile dönüştürün. Öğrenci takibi, içerik üretimi ve sınav yönetimi süreçlerini otomatikleştirerek eğitim kalitesini artırın.",
    useCases: [
      { title: "Öğrenci Takibi", description: "Öğrenci performansını otomatik analiz edin, risk altındaki öğrencileri tespit edin ve kişiselleştirilmiş öneriler sunun.", icon: "users" },
      { title: "İçerik Yönetimi", description: "Ders materyallerini organize edin, otomatik içerik önerileri oluşturun ve öğrenme yollarını kişiselleştirin.", icon: "book" },
      { title: "Sınav Otomasyonu", description: "Sınav oluşturma, otomatik değerlendirme ve sonuç analizi ile sınav süreçlerini hızlandırın.", icon: "clipboard" },
      { title: "Veli İletişimi", description: "Otomatik performans raporları, devamsızlık bildirimleri ve randevu yönetimi ile iletişimi güçlendirin.", icon: "bell" },
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
    imagePrompt: "Modern smart classroom with interactive digital boards, students using tablets, AI-powered learning analytics on teacher screen, cinematic, professional, high quality, modern corporate",
  },
  {
    slug: "hr",
    name: "İnsan Kaynakları",
    title: "HR'da Akıllı Otomasyon",
    description: "İşe alım, bordro ve onboarding süreçlerini otomatikleştirin.",
    heroDescription: "İnsan kaynakları süreçlerinizi AI ile güçlendirin. İşe alım, bordro yönetimi ve onboarding süreçlerini otomatikleştirerek HR ekibinizin stratejik işlere odaklanmasını sağlayın.",
    useCases: [
      { title: "İşe Alım Otomasyonu", description: "CV tarama, aday skorlama, mülakat planlama ve aday iletişimini otomatikleştirin. En iyi yetenekleri hızla bulun.", icon: "search" },
      { title: "Bordro Yönetimi", description: "Maaş hesaplama, vergi kesintileri, SGK bildirgeleri ve banka transferlerini otomatik gerçekleştirin.", icon: "calculator" },
      { title: "Onboarding", description: "Yeni çalışan oryantasyonunu otomatikleştirin. Döküman toplama, eğitim planlaması ve ekipman hazırlığı.", icon: "user-plus" },
      { title: "Performans Takibi", description: "Otomatik performans değerlendirme döngüleri, hedef takibi ve geri bildirim yönetimi.", icon: "trending" },
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
    imagePrompt: "Modern HR office with AI-powered recruitment dashboard, video interview setup, digital onboarding screens, cinematic, professional, high quality, modern corporate, warm tones",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
