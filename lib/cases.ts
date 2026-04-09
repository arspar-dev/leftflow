export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  category: "ai" | "automation" | "data" | "development" | "ecommerce" | "b2b";
  image: string;
  metric: string;
  metrics: CaseMetric[];
  tr: { title: string; excerpt: string; challenge: string; solution: string; result: string };
  en: { title: string; excerpt: string; challenge: string; solution: string; result: string };
  nl: { title: string; excerpt: string; challenge: string; solution: string; result: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "boutiquerugs",
    client: "BoutiqueRugs",
    category: "ecommerce",
    image: "/images/industry-ecommerce.jpg",
    metric: "46%",
    metrics: [
      { value: "46%", label: "Cart Abandonment ↓" },
      { value: "+32%", label: "Conversion Rate" },
      { value: "4.8★", label: "App Store Rating" },
    ],
    tr: {
      title: "E-ticaret AR Ürün Görselleştirme",
      excerpt: "BoutiqueRugs için AR tabanlı ürün görselleştirme ile sepet terk oranında %46 düşüş sağlandı.",
      challenge: "BoutiqueRugs ABD merkezli, 5.000+ SKU'luk bir online halı mağazası. Müşteriler ürünleri evlerinde nasıl duracağını hayal edemediği için sepet terk oranı sektör ortalamasının 2 katına çıkmıştı. Ürün fotoğrafları yüksek kaliteliydi ama 'benim salonumda nasıl durur' sorusunu cevaplayamıyordu.",
      solution: "WebAR tabanlı bir ürün görselleştirme modülü geliştirdik. Müşteriler uygulama indirmeden, tarayıcıdan kamerayı açıp halıyı kendi odalarına yerleştirebiliyor. Ölçek otomatik hesaplanıyor, ışık koşullarına göre gölge ekleniyor. Shopify'a tek satır kod ile entegre edildi, 5.000+ SKU için otomatik 3D model pipeline'ı kuruldu.",
      result: "Sepet terk oranı %46 düştü, dönüşüm oranı %32 arttı. AR kullanan müşterilerin ortalama sipariş değeri kullanmayanlara göre %28 daha yüksek çıktı. App Store'da 4.8 yıldız ile öne çıkan özellik olarak listelendi.",
    },
    en: {
      title: "E-commerce AR Product Visualization",
      excerpt: "Achieved 46% reduction in cart abandonment through AR-based product visualization for BoutiqueRugs.",
      challenge: "BoutiqueRugs is a US-based online rug retailer with 5,000+ SKUs. Cart abandonment was running at 2x the industry average because customers couldn't visualize how a rug would look in their own space. High-quality product photos weren't enough to answer 'how will this look in my living room?'",
      solution: "We built a WebAR product visualization module. Customers open their camera from the browser — no app download — and place the rug in their room with automatic scaling and realistic shadows. Integrated into Shopify with a single code snippet. We set up an automated 3D model pipeline covering all 5,000+ SKUs.",
      result: "Cart abandonment dropped 46%, conversion rate increased 32%. Customers who used AR had 28% higher average order value compared to non-AR sessions. Featured on the App Store with a 4.8-star rating.",
    },
    nl: {
      title: "E-commerce AR Productvisualisatie",
      excerpt: "46% minder winkelwagenverlating door AR-gebaseerde productvisualisatie voor BoutiqueRugs.",
      challenge: "BoutiqueRugs is een Amerikaanse online tapijtwinkel met 5.000+ artikelen. Winkelwagenverlating lag op 2x het sectorgemiddelde omdat klanten zich niet konden voorstellen hoe een tapijt er in hun eigen ruimte uit zou zien. Productfoto's van hoge kwaliteit waren niet genoeg.",
      solution: "We bouwden een WebAR-productvisualisatiemodule. Klanten openen de camera vanuit de browser — geen app nodig — en plaatsen het tapijt in hun kamer met automatische schaling en realistische schaduwen. Geïntegreerd in Shopify met één coderegel. Geautomatiseerde 3D-modelpipeline voor alle 5.000+ producten.",
      result: "Winkelwagenverlating daalde met 46%, conversie steeg met 32%. Klanten die AR gebruikten hadden een 28% hogere gemiddelde orderwaarde. 4,8 sterren op de App Store.",
    },
  },
  {
    slug: "westwing",
    client: "Westwing",
    category: "b2b",
    image: "/images/industry-retail.jpg",
    metric: "€65K+",
    metrics: [
      { value: "€65K+", label: "Direct Revenue" },
      { value: "-40%", label: "Sales Cycle" },
      { value: "-35%", label: "Acquisition Cost" },
    ],
    tr: {
      title: "B2B Satış Otomasyonu",
      excerpt: "Westwing ile B2B satış otomasyonu sayesinde €65.000+ gelir elde edildi.",
      challenge: "Westwing'in B2B satış ekibi potansiyel müşterileri manuel olarak LinkedIn ve fuarlardan topluyor, tek tek e-posta yazıyordu. Outreach hacmi düşük kaldığı için pipeline dolmuyordu. Her satıcı günde ortalama 8-10 kişiye ulaşabiliyordu ve bu kişilerin büyük kısmı hedef profille uyuşmuyordu.",
      solution: "Satış Outreach Agent modelimizi Westwing'e uyarladık. Apollo ve LinkedIn Sales Navigator'dan otomatik veri çekimi, ICP'ye (ideal müşteri profili) göre lead skorlama, şirket ve kişi bazlı kişiselleştirilmiş e-posta sekansları ve Calendly toplantı entegrasyonu kurduk. Tüm pipeline HubSpot'a otomatik aktarıldı.",
      result: "İlk 3 ayda €65.000+ direkt gelir. Satış döngüsü %40 kısaldı — ilk temastan kapanışa ortalama 18 günden 11 güne düştü. Müşteri kazanım maliyeti %35 azaldı. Satıcı başına günlük outreach 8-10'dan 80-100'e çıktı.",
    },
    en: {
      title: "B2B Sales Automation Pipeline",
      excerpt: "Generated €65,000+ revenue through B2B sales automation for Westwing.",
      challenge: "Westwing's B2B sales team was sourcing leads manually from LinkedIn and trade fairs, writing individual emails one by one. Low outreach volume meant the pipeline stayed empty. Each rep reached 8-10 prospects per day, and most of them didn't match the ideal customer profile.",
      solution: "We adapted our Sales Outreach Agent model for Westwing. Automated data enrichment from Apollo and LinkedIn Sales Navigator, ICP-based lead scoring, company-and-person-level personalized email sequences, and Calendly meeting integration. The full pipeline syncs to HubSpot automatically.",
      result: "€65,000+ direct revenue in the first 3 months. Sales cycle shortened by 40% — average first-touch-to-close dropped from 18 days to 11 days. Customer acquisition cost fell 35%. Per-rep daily outreach went from 8-10 to 80-100 contacts.",
    },
    nl: {
      title: "B2B Verkoopautomatisering",
      excerpt: "€65.000+ omzet gegenereerd door B2B-verkoopautomatisering voor Westwing.",
      challenge: "Het B2B-verkoopteam van Westwing zocht leads handmatig via LinkedIn en beurzen en schreef individuele e-mails. Het lage outreach-volume hield de pipeline leeg. Elke verkoper bereikte 8-10 prospects per dag, en de meesten pasten niet bij het ideale klantprofiel.",
      solution: "We pasten ons Sales Outreach Agent-model aan voor Westwing. Automatische dataverrijking via Apollo en LinkedIn Sales Navigator, ICP-gebaseerde lead scoring, gepersonaliseerde e-mailsequenties op bedrijfs- en persoonsniveau, en Calendly-vergaderingsintegratie. De volledige pipeline synchroniseert automatisch met HubSpot.",
      result: "€65.000+ directe omzet in de eerste 3 maanden. Verkoopcyclus 40% korter — gemiddelde doorlooptijd van eerste contact tot sluiting van 18 naar 11 dagen. Klantwervingskosten daalden met 35%. Outreach per verkoper van 8-10 naar 80-100 contacten per dag.",
    },
  },
  {
    slug: "tolon",
    client: "Tolon",
    category: "b2b",
    image: "/images/industry-manufacturing.jpg",
    metric: "410",
    metrics: [
      { value: "410", label: "Qualified Leads" },
      { value: "+15%", label: "Market Share" },
      { value: "2x", label: "Sales Efficiency" },
    ],
    tr: {
      title: "Pazar Lideri Müşteri Kazanımı",
      excerpt: "80 yıllık pazar lideri Tolon için 410 nitelikli müşteri kazanıldı.",
      challenge: "Tolon, 80 yıllık endüstriyel soğutma ve iklimlendirme sektörü lideri. Mevcut müşteri tabanı sadık ama yeni pazarlara (hastane, otel zincirleri, AVM'ler) giriş zorlaşmıştı. Satış ekibi geleneksel yöntemlerle — fuar, referans, soğuk arama — çalışıyor, ama bu kanalların ölçeklenmesi mümkün değildi.",
      solution: "25 milyon+ şirket veritabanından Tolon'un ICP'sine uyan firmaları filtreledik. Sektör, lokasyon, şirket büyüklüğü ve satın alma sinyallerine göre lead skorlama yaptık. Kişiselleştirilmiş çok kanallı outreach (e-posta + LinkedIn + telefon) sekansları kurarak satış ekibinin önüne hazır, nitelikli toplantılar koyduk.",
      result: "5 ay içinde 410 nitelikli müşteri adayı teslim edildi. Tolon'un bu segmentteki pazar payı %15 arttı. Satış ekibinin verimliliği 2 katına çıktı — aynı ekip, ek eleman almadan daha fazla potansiyel müşteriyle görüştü.",
    },
    en: {
      title: "Market Leader Customer Acquisition",
      excerpt: "Acquired 410 qualified customers for 80-year market leader Tolon.",
      challenge: "Tolon is an 80-year leader in industrial cooling and HVAC. Their existing customer base was loyal, but breaking into new verticals — hospitals, hotel chains, shopping malls — had stalled. The sales team relied on trade fairs, referrals, and cold calls, none of which could scale.",
      solution: "We filtered Tolon's ICP from a 25M+ company database. Lead scoring by industry, location, company size, and buying signals. Multi-channel personalized outreach sequences (email + LinkedIn + phone) delivered qualified, meeting-ready leads to the sales team.",
      result: "410 qualified leads delivered in 5 months. Tolon's market share in these verticals grew 15%. Sales team efficiency doubled — same headcount, 2x more qualified conversations.",
    },
    nl: {
      title: "Marktleider Klantwerving",
      excerpt: "410 gekwalificeerde klanten geworven voor 80-jarige marktleider Tolon.",
      challenge: "Tolon is al 80 jaar marktleider in industriële koeling en HVAC. Het bestaande klantenbestand was trouw, maar doorbraak naar nieuwe segmenten — ziekenhuizen, hotelketens, winkelcentra — liep vast. Het verkoopteam werkte via beurzen, referenties en cold calling, maar die kanalen schaalden niet.",
      solution: "We filterden Tolon's ICP uit een database van 25M+ bedrijven. Lead scoring op sector, locatie, bedrijfsomvang en koopsignalen. Multichannel gepersonaliseerde outreach-sequenties (e-mail + LinkedIn + telefoon) leverden gekwalificeerde, vergaderklare leads aan het verkoopteam.",
      result: "410 gekwalificeerde leads in 5 maanden. Tolon's marktaandeel in deze segmenten groeide met 15%. Efficiëntie van het verkoopteam verdubbelde — zelfde bezetting, 2x meer gekwalificeerde gesprekken.",
    },
  },
  {
    slug: "naz-teknik",
    client: "Naz Teknik",
    category: "automation",
    image: "/images/industry-logistics.jpg",
    metric: "850",
    metrics: [
      { value: "850", label: "Qualified Leads" },
      { value: "+60%", label: "Brand Awareness" },
      { value: "3x", label: "Monthly Sales" },
    ],
    tr: {
      title: "Yurt İçi Pazar Erişimi Genişletme",
      excerpt: "Naz Teknik için otomasyon ile 850 nitelikli müşteriye ulaşıldı.",
      challenge: "Naz Teknik, endüstriyel hırdavat ve bağlantı elemanları sektöründe güçlü bir üretici ama yurt içi pazarda marka bilinirliği sınırlıydı. Bayilere ve büyük son kullanıcılara ulaşmak için yeterli satış kapasitesi yoktu. Dijital varlıkları minimum düzeydeydi, potansiyel müşteriler firmayı bulamıyordu.",
      solution: "Yurt içi pazar penetrasyon stratejisi oluşturduk. Hedef sektörlere (inşaat, enerji, üretim) göre firma ve karar verici veritabanı hazırladık. Otomatik outreach sekansları, sektöre özel içerik pazarlaması ve dijital reklam kampanyaları ile çok kanallı müşteri kazanım sistemi kurduk.",
      result: "6 ayda 850 nitelikli müşteri adayı teslim edildi. Dijital kanallardan gelen marka bilinirliği metrikleri %60 arttı. Aylık satış hacmi 3 katına çıktı. Naz Teknik ilk kez kendi sektöründe dijital kanaldan sipariş almaya başladı.",
    },
    en: {
      title: "Domestic Market Reach Expansion",
      excerpt: "Reached 850 qualified customers through automation for Naz Teknik.",
      challenge: "Naz Teknik is a strong manufacturer in industrial hardware and fasteners, but domestic brand awareness was limited. They lacked the sales capacity to reach dealers and large end-users. Their digital presence was minimal — potential customers simply couldn't find them.",
      solution: "We built a domestic market penetration strategy. Created a targeted database of companies and decision-makers in construction, energy, and manufacturing. Multi-channel acquisition system combining automated outreach sequences, industry-specific content marketing, and digital ad campaigns.",
      result: "850 qualified leads delivered in 6 months. Digital brand awareness metrics increased 60%. Monthly sales volume tripled. For the first time, Naz Teknik started receiving orders through digital channels in their sector.",
    },
    nl: {
      title: "Uitbreiding Binnenlands Marktbereik",
      excerpt: "850 gekwalificeerde klanten bereikt door automatisering voor Naz Teknik.",
      challenge: "Naz Teknik is een sterke producent van industriële bevestigingsmiddelen, maar de binnenlandse merkbekendheid was beperkt. Ze hadden onvoldoende verkoopcapaciteit om dealers en grote eindgebruikers te bereiken. Hun digitale aanwezigheid was minimaal — potentiële klanten konden ze simpelweg niet vinden.",
      solution: "We bouwden een binnenlandse marktpenetratiestrategie. Gerichte database van bedrijven en beslissers in bouw, energie en productie. Multichannel acquisitiesysteem met geautomatiseerde outreach, sectorspecifieke contentmarketing en digitale advertentiecampagnes.",
      result: "850 gekwalificeerde leads in 6 maanden. Digitale merkbekendheid steeg met 60%. Maandelijks verkoopvolume verdrievoudigd. Naz Teknik ontving voor het eerst orders via digitale kanalen in hun sector.",
    },
  },
  {
    slug: "arkman",
    client: "Arkman",
    category: "b2b",
    image: "/images/industry-finance.jpg",
    metric: "151",
    metrics: [
      { value: "151", label: "Qualified Leads" },
      { value: "+25%", label: "Revenue per Client" },
      { value: "6 wk", label: "Time to Pipeline" },
    ],
    tr: {
      title: "Pazar Payı Genişletme",
      excerpt: "Arkman için 151 nitelikli müşteri ile pazar payı genişletildi.",
      challenge: "Arkman, yapı ve dekorasyon sektöründe faaliyet gösteren bir firma. Rekabetçi bir pazarda büyüme zorlaşmıştı; mevcut müşteri tabanı doygunluğa yaklaşmıştı ve yeni müşteri bulma maliyeti artıyordu. Satış ekibi kişisel ağlarına bağımlıydı, sistematik bir prospecting süreci yoktu.",
      solution: "25 milyon+ şirket veritabanından Arkman'ın hedef profiline uyan firmaları çektik. Sektör, bölge, gelir büyüklüğü ve dijital davranış sinyallerine göre skorlama yaptık. Kişiselleştirilmiş e-posta sekansları ve LinkedIn outreach'i ile 6 hafta içinde çalışan bir pipeline kurduk.",
      result: "151 nitelikli müşteri adayı teslim edildi. Yeni müşteri segmentinden gelen müşteri başına gelir, mevcut ortalamadan %25 daha yüksek çıktı. Pipeline'ın ilk sonuçları 6. haftada gelmeye başladı — Arkman'ın daha önce hiç sistematik outreach yapmadığı bir kanal açılmış oldu.",
    },
    en: {
      title: "Market Share Expansion",
      excerpt: "Expanded market share with 151 qualified customers for Arkman.",
      challenge: "Arkman operates in the construction and decoration sector. Growth had stalled in a competitive market; the existing customer base was approaching saturation and new customer acquisition costs were rising. The sales team depended on personal networks with no systematic prospecting process.",
      solution: "We pulled matching companies from a 25M+ database filtered to Arkman's ICP. Scored by industry, region, revenue size, and digital behavior signals. Personalized email sequences and LinkedIn outreach built a working pipeline within 6 weeks.",
      result: "151 qualified leads delivered. Revenue per customer from the new segment came in 25% higher than the existing average. First pipeline results arrived at week 6 — opening a channel Arkman had never systematically worked before.",
    },
    nl: {
      title: "Uitbreiding Marktaandeel",
      excerpt: "Marktaandeel uitgebreid met 151 gekwalificeerde klanten voor Arkman.",
      challenge: "Arkman opereert in de bouw- en decoratiesector. Groei was gestagneerd in een concurrerende markt; het bestaande klantenbestand naderde verzadiging en de kosten voor nieuwe klantwerving stegen. Het verkoopteam leunde op persoonlijke netwerken zonder systematisch prospectingproces.",
      solution: "We haalden passende bedrijven uit een 25M+ database gefilterd op Arkman's ICP. Gescoord op sector, regio, omvang en digitaal gedrag. Gepersonaliseerde e-mailsequenties en LinkedIn-outreach bouwden binnen 6 weken een werkende pipeline.",
      result: "151 gekwalificeerde leads opgeleverd. Omzet per klant uit het nieuwe segment lag 25% hoger dan het bestaande gemiddelde. Eerste resultaten kwamen in week 6 — een kanaal geopend dat Arkman nooit eerder systematisch had bewerkt.",
    },
  },
  {
    slug: "yena",
    client: "YENA",
    category: "automation",
    image: "/images/industry-manufacturing.jpg",
    metric: "3x",
    metrics: [
      { value: "3x", label: "Efficiency" },
      { value: "-70%", label: "Processing Time" },
      { value: "+45%", label: "Customer Satisfaction" },
    ],
    tr: {
      title: "Üretim B2B Otomasyonu",
      excerpt: "YENA Engineering için üretim süreçlerinde 3 kat verimlilik artışı sağlandı.",
      challenge: "YENA Engineering, kaynaklı çelik yapı üreten bir üretici. Müşteri siparişleri, teknik çizim onayları ve üretim planlaması e-posta ve Excel üzerinden yürüyor, CRM'de müşteri geçmişi tutulmuyordu. Bir siparişin girmesinden üretime alınmasına kadar ortalama 5 iş günü geçiyordu ve bu sürenin büyük kısmı bilgi toplamak ve onay almakla harcanıyordu.",
      solution: "CRM entegrasyonlu otomatik sipariş yönetim sistemi kurduk. Müşteri talep geldiğinde otomatik teklif hesaplaması, teknik çizim onay akışı ve üretim takvimi entegrasyonu devreye giriyor. Sipariş durumu müşteriye otomatik bildirimle iletiliyor. Tüm müşteri geçmişi, teklif arşivi ve iletişim tek bir panelde toplandı.",
      result: "Verimlilik 3 katına çıktı — sipariş giriş-üretim süresi 5 iş gününden 1.5 güne düştü. Sipariş işleme süresi %70 azaldı. Müşteri memnuniyeti anketlerinde %45 artış ölçüldü. Satış ekibi artık sipariş takibi yerine yeni iş geliştirmeye vakit ayırabiliyor.",
    },
    en: {
      title: "Manufacturing B2B Automation",
      excerpt: "Achieved 3x efficiency improvement in manufacturing processes for YENA Engineering.",
      challenge: "YENA Engineering manufactures welded steel structures. Customer orders, technical drawing approvals, and production scheduling ran on email and Excel with no CRM history. Average time from order entry to production start was 5 business days, most of it spent gathering information and chasing approvals.",
      solution: "We built a CRM-integrated automated order management system. When a customer request comes in, automatic quote calculation, technical drawing approval workflow, and production calendar integration kick in. Order status updates are sent to customers automatically. All customer history, quote archive, and communications consolidated in a single dashboard.",
      result: "3x efficiency gain — order-to-production time dropped from 5 business days to 1.5 days. Order processing time reduced 70%. Customer satisfaction surveys showed a 45% improvement. The sales team now spends time on business development instead of chasing order status.",
    },
    nl: {
      title: "Productie B2B-automatisering",
      excerpt: "3x efficiëntieverbetering in productieprocessen voor YENA Engineering.",
      challenge: "YENA Engineering produceert gelaste staalconstructies. Klantorders, technische tekeninggoedkeuringen en productieplanning liepen via e-mail en Excel zonder CRM-historie. Gemiddeld duurde het 5 werkdagen van orderinvoer tot productiestart, grotendeels besteed aan informatie verzamelen en goedkeuringen najagen.",
      solution: "We bouwden een CRM-geïntegreerd geautomatiseerd ordermanagementsysteem. Bij een klantverzoek worden automatisch offerteberekening, technische goedkeuringsworkflow en productiekalenderintegratie geactiveerd. Orderstatusupdates gaan automatisch naar klanten. Alle klanthistorie, offertearcief en communicatie in één dashboard.",
      result: "3x efficiëntiewinst — order-tot-productietijd van 5 werkdagen naar 1,5 dag. Orderverwerkingstijd 70% verminderd. Klanttevredenheidsonderzoeken toonden 45% verbetering. Het verkoopteam besteedt nu tijd aan business development in plaats van orderstatus najagen.",
    },
  },
  {
    slug: "steps-agency",
    client: "Steps Agency",
    category: "automation",
    image: "/images/industry-hr.jpg",
    metric: "100+",
    metrics: [
      { value: "100+", label: "Qualified Leads" },
      { value: "-40%", label: "Marketing Cost" },
      { value: "+55%", label: "Lead Quality" },
    ],
    tr: {
      title: "B2B Pazarlama Otomasyonu",
      excerpt: "Steps Agency için 100+ nitelikli müşteri kazanıldı.",
      challenge: "Steps Agency, kurumsal etkinlik ve deneyim pazarlaması alanında çalışan bir ajans. B2B müşteri kazanımı tamamen kurucunun kişisel ağına ve soğuk aramalara dayanıyordu. Sistematik bir dijital pazarlama altyapısı yoktu, gelen lead'lerin kalitesi düşüktü ve satış ekibi niteliksiz görüşmelerle zaman kaybediyordu.",
      solution: "Otomatik pazarlama ve lead generation sistemi kurduk. Hedef sektörlere (finans, FMCG, teknoloji) yönelik içerik pazarlaması, LinkedIn kampanyaları ve e-posta outreach sekansları tasarladık. Lead skorlama sistemiyle gelen talepleri otomatik niteliklendirdik — satış ekibine sadece skor eşiğini geçen lead'ler düştü.",
      result: "4 ayda 100+ nitelikli müşteri adayı teslim edildi. Pazarlama maliyeti %40 düştü — kişi başı kazanım maliyeti yarıya indi. Lead kalitesi %55 arttı, satış ekibinin zamanının büyük kısmı artık gerçekten kapanabilecek fırsatlara gidiyor.",
    },
    en: {
      title: "B2B Marketing Automation",
      excerpt: "Acquired 100+ qualified customers for Steps Agency through marketing automation.",
      challenge: "Steps Agency specializes in corporate events and experiential marketing. B2B customer acquisition depended entirely on the founder's personal network and cold calls. No systematic digital marketing infrastructure existed, inbound lead quality was low, and the sales team wasted time on unqualified conversations.",
      solution: "We built an automated marketing and lead generation system. Content marketing, LinkedIn campaigns, and email outreach sequences targeting key verticals (finance, FMCG, tech). Lead scoring system automatically qualified incoming requests — only leads above the threshold reached the sales team.",
      result: "100+ qualified leads delivered in 4 months. Marketing cost dropped 40% — cost per acquisition cut in half. Lead quality improved 55%, with the sales team now spending most of their time on opportunities that can actually close.",
    },
    nl: {
      title: "B2B Marketingautomatisering",
      excerpt: "100+ gekwalificeerde klanten geworven voor Steps Agency door marketingautomatisering.",
      challenge: "Steps Agency is gespecialiseerd in corporate events en experience marketing. B2B-klantwerving leunde volledig op het persoonlijke netwerk van de oprichter en cold calling. Geen systematische digitale marketinginfrastructuur, lage inbound leadkwaliteit, en het verkoopteam verspilde tijd aan ongekwalificeerde gesprekken.",
      solution: "We bouwden een geautomatiseerd marketing- en leadgeneratiesysteem. Contentmarketing, LinkedIn-campagnes en e-mail outreach-sequenties gericht op key verticals (finance, FMCG, tech). Lead scoring kwalificeerde inkomende verzoeken automatisch — alleen leads boven de drempel bereikten het verkoopteam.",
      result: "100+ gekwalificeerde leads in 4 maanden. Marketingkosten 40% lager — kosten per acquisitie gehalveerd. Leadkwaliteit 55% verbeterd, verkoopteam besteedt nu het merendeel van de tijd aan kansen die daadwerkelijk kunnen sluiten.",
    },
  },
  {
    slug: "steelify",
    client: "Steelify",
    category: "automation",
    image: "/images/industry-manufacturing.jpg",
    metric: "70%",
    metrics: [
      { value: "70%", label: "Efficiency ↑" },
      { value: "-85%", label: "Error Rate" },
      { value: "-50%", label: "Delivery Time" },
    ],
    tr: {
      title: "Üretim Süreç Otomasyonu",
      excerpt: "Steelify için üretim süreçlerinde %70 verimlilik artışı sağlandı.",
      challenge: "Steelify, özel çelik kesim ve şekillendirme hizmeti veren bir üretici. Sipariş alımından üretime kadar olan süreçte kalite kontrol adımları manuel yapılıyor, hata raporları kağıt üzerinde tutuluyor ve sipariş durumu müşteriye telefon veya e-posta ile bildiriliyordu. Hata oranı sektör ortalamasının üzerindeydi ve teslimat gecikmeleri müşteri kaybına yol açıyordu.",
      solution: "AI destekli kalite kontrol sistemi ve otomatik sipariş yönetim platformu kurduk. Üretim hattına görüntü tanıma tabanlı kalite kontrol noktaları ekledik. Sipariş durumu gerçek zamanlı müşteri portalına aktarıldı. Hata tespitinde otomatik bildirim ve kök neden analizi devreye alındı.",
      result: "Genel verimlilik %70 arttı. Hata oranı %85 düştü — görüntü tanıma sistemi insan gözünün kaçırdığı yüzey kusurlarını yakalıyor. Teslimat süreleri %50 kısaldı. Müşteri portalı sayesinde 'siparişim nerede' aramaları neredeyse sıfıra indi.",
    },
    en: {
      title: "Manufacturing Process Automation",
      excerpt: "Achieved 70% efficiency improvement in production processes for Steelify.",
      challenge: "Steelify provides custom steel cutting and forming services. Quality control steps between order intake and production were manual, error reports kept on paper, and customers received status updates via phone or email. Error rates ran above industry average and delivery delays were driving customer churn.",
      solution: "We built an AI-powered quality control system and automated order management platform. Added computer vision-based quality checkpoints on the production line. Real-time order status pushed to a customer portal. Automated alerts and root cause analysis on defect detection.",
      result: "Overall efficiency improved 70%. Error rate dropped 85% — the vision system catches surface defects that human inspection misses. Delivery times shortened 50%. 'Where's my order' calls dropped to near zero thanks to the customer portal.",
    },
    nl: {
      title: "Productie Procesautomatisering",
      excerpt: "70% efficiëntieverbetering in productieprocessen voor Steelify.",
      challenge: "Steelify levert op maat gesneden en gevormde staalproducten. Kwaliteitscontrole tussen orderinname en productie was handmatig, foutrapporten op papier, en klanten kregen statusupdates per telefoon of e-mail. Foutpercentages lagen boven het sectorgemiddelde en leveringsvertragingen veroorzaakten klantverloop.",
      solution: "We bouwden een AI-aangestuurd kwaliteitscontrolesysteem en geautomatiseerd orderplatform. Computer vision-checkpoints toegevoegd op de productielijn. Realtime orderstatus naar een klantenportaal. Automatische meldingen en root cause-analyse bij defectdetectie.",
      result: "Algehele efficiëntie 70% verbeterd. Foutpercentage daalde met 85% — het visionsysteem detecteert oppervlaktedefecten die menselijke inspectie mist. Levertijden 50% korter. 'Waar is mijn order'-telefoontjes naar bijna nul dankzij het klantenportaal.",
    },
  },
  {
    slug: "tuva-home",
    client: "Tuva Home",
    category: "ecommerce",
    image: "/images/industry-ecommerce.jpg",
    metric: "2.5x",
    metrics: [
      { value: "2.5x", label: "Sales Growth" },
      { value: "+80%", label: "Conversion Rate" },
      { value: "+60%", label: "Customer LTV" },
    ],
    tr: {
      title: "E-ticaret Optimizasyonu",
      excerpt: "Tuva Home için e-ticaret satışları 2.5 katına çıkarıldı.",
      challenge: "Tuva Home, ev tekstili ve dekorasyon ürünleri satan bir e-ticaret markası. Site trafiği yeterliydi ama dönüşüm oranları düşüktü — ziyaretçilerin büyük kısmı satın almadan ayrılıyordu. E-posta listesi vardı ama segmentasyon yapılmıyor, herkese aynı kampanya gönderiliyordu. Müşteri yaşam boyu değeri düşük kalıyordu çünkü tekrar satın alma oranı zayıftı.",
      solution: "Üç katmanlı bir optimizasyon yaptık. İlk olarak AI destekli ürün öneri motoru kurduk — müşterinin göz atma davranışına göre kişiselleştirilmiş öneriler. İkinci olarak e-posta pazarlama otomasyonu: RFM segmentasyonu, sepet terk hatırlatmaları, cross-sell sekansları. Üçüncü olarak dinamik fiyatlandırma ve kampanya yönetim paneli.",
      result: "Satışlar 2.5 katına çıktı. Dönüşüm oranı %80 arttı — ürün önerileri tek başına dönüşümün %35'ini sürüklüyor. Müşteri yaşam boyu değeri %60 yükseldi, tekrar satın alma oranı 3 ayda 2 katına çıktı. E-posta pazarlamasından gelen gelir toplam gelirin %22'sine ulaştı.",
    },
    en: {
      title: "E-commerce Optimization",
      excerpt: "Increased e-commerce sales by 2.5x for Tuva Home.",
      challenge: "Tuva Home sells home textiles and decor products online. Site traffic was adequate but conversion rates were low — most visitors left without purchasing. An email list existed but no segmentation was applied; everyone received the same campaigns. Customer lifetime value stayed low because repeat purchase rates were weak.",
      solution: "Three-layer optimization. First, an AI-powered product recommendation engine — personalized suggestions based on browsing behavior. Second, email marketing automation: RFM segmentation, cart abandonment reminders, cross-sell sequences. Third, a dynamic pricing and campaign management dashboard.",
      result: "Sales grew 2.5x. Conversion rate improved 80% — product recommendations alone drive 35% of conversions. Customer lifetime value rose 60%, repeat purchase rate doubled in 3 months. Email marketing revenue reached 22% of total revenue.",
    },
    nl: {
      title: "E-commerce Optimalisatie",
      excerpt: "E-commerce verkoop met 2,5x verhoogd voor Tuva Home.",
      challenge: "Tuva Home verkoopt woontextiel en decoratieproducten online. Siteverkeer was voldoende, maar conversiepercentages lagen laag — de meeste bezoekers vertrokken zonder te kopen. Er was een e-maillijst maar zonder segmentatie; iedereen ontving dezelfde campagnes. Klantlevensduurwaarde bleef laag door zwakke herhaalaankopen.",
      solution: "Drielaagse optimalisatie. Ten eerste een AI-aangedreven productaanbevelingsengine — gepersonaliseerde suggesties op basis van browsegedrag. Ten tweede e-mailmarketingautomatisering: RFM-segmentatie, winkelwagenherinneringen, cross-sell sequenties. Ten derde een dynamisch prijs- en campagnebeheerdashboard.",
      result: "Verkoop 2,5x gegroeid. Conversie 80% verbeterd — productaanbevelingen alleen al goed voor 35% van de conversies. Klantlevensduurwaarde steeg 60%, herhaalaankooppercentage verdubbelde in 3 maanden. E-mailmarketingomzet bereikte 22% van de totale omzet.",
    },
  },
];

export const caseCategories = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI" },
  { value: "automation", label: "Automation" },
  { value: "b2b", label: "B2B" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "data", label: "Data" },
  { value: "development", label: "Development" },
];
