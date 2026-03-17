# LeftFlow Website Blueprint — Happy Horizon Stilinde Detaylı Rehber

> **Amaç:** Bu doküman, LeftFlow web sitesinin Happy Horizon (happyhorizon.com) referans alınarak sayfa sayfa nasıl yapılması gerektiğini açıklar. Her sayfanın yapısı, içeriği, görselleri, bileşenleri ve kullanılacak prompt örnekleri detaylı şekilde belirtilmiştir.

---

## İÇİNDEKİLER

1. [Genel Site Mimarisi](#1-genel-site-mimarisi)
2. [Tasarım Sistemi & Stil Rehberi](#2-tasarım-sistemi--stil-rehberi)
3. [Ana Sayfa (Homepage)](#3-ana-sayfa-homepage)
4. [Services (Hizmetler) Ana Sayfası](#4-services-hizmetler-ana-sayfası)
5. [Services Alt Sayfaları — AI Automation](#5-services-alt-sayfaları--ai-automation)
6. [Services Alt Sayfaları — AI Chatbots & Voice Agents](#6-services-alt-sayfaları--ai-chatbots--voice-agents)
7. [Services Alt Sayfaları — Workflow Automation (n8n)](#7-services-alt-sayfaları--workflow-automation-n8n)
8. [Services Alt Sayfaları — Custom AI Solutions](#8-services-alt-sayfaları--custom-ai-solutions)
9. [Services Alt Sayfaları — B2B Sales Automation (Coremagnet)](#9-services-alt-sayfaları--b2b-sales-automation-coremagnet)
10. [Services Alt Sayfaları — Content Creation & Social Media](#10-services-alt-sayfaları--content-creation--social-media)
11. [Services Alt Sayfaları — Corporate Website Development](#11-services-alt-sayfaları--corporate-website-development)
12. [Services Alt Sayfaları — E-Commerce & Webshop](#12-services-alt-sayfaları--e-commerce--webshop)
13. [Cases (Başarı Hikayeleri)](#13-cases-başarı-hikayeleri)
14. [Industries (Sektörler)](#14-industries-sektörler)
15. [Insights (Blog & İçerikler)](#15-insights-blog--i̇çerikler)
16. [Culture (Kültür)](#16-culture-kültür)
17. [Contact (İletişim)](#17-contact-i̇letişim)
18. [AI Optimizer Sayfası](#18-ai-optimizer-sayfası)
19. [Header & Footer Yapısı](#19-header--footer-yapısı)
20. [Ortak Bileşenler & Tekrarlayan Elementler](#20-ortak-bileşenler--tekrarlayan-elementler)
21. [AI Prompt Rehberi — Sayfa Oluşturma](#21-ai-prompt-rehberi--sayfa-oluşturma)

---

## 1. Genel Site Mimarisi

Happy Horizon'un site haritası aşağıdaki gibidir. LeftFlow bunu kendi hizmetlerine göre adapte edecektir:

```
LeftFlow.ai
├── / (Ana Sayfa)
├── /services/
│   ├── /services/ai-automation/
│   ├── /services/chatbots-voice-agents/
│   ├── /services/workflow-automation/
│   ├── /services/custom-ai-solutions/
│   ├── /services/b2b-sales-automation/
│   ├── /services/content-creation/
│   ├── /services/corporate-website/
│   └── /services/e-commerce-webshop/
├── /cases/
│   ├── /cases/[client-name-slug]/  (her case için ayrı sayfa)
├── /industries/
│   ├── /industries/e-commerce/
│   ├── /industries/saas/
│   ├── /industries/healthcare/
│   ├── /industries/b2b/
│   ├── /industries/education/
│   └── /industries/retail/
├── /insights/
│   ├── Blog yazıları
│   ├── Cases
│   ├── News
│   └── Events & Webinars
├── /culture/
├── /contact/
└── /ai-optimizer/
```

### Happy Horizon Referans Site Yapısı (100 sayfa analiz edildi):
- **Ana Sayfa:** Hub lokasyonları, client logoları, son haberler
- **5 Ana Service Kategorisi:** Online Marketing, Development & Technology, Strategy & Innovation, Branding, Data & Automation
- **Her kategoride 4-8 alt sayfa** (örn: SEO, SEA, Social Advertising, CRO, E-mail Marketing...)
- **7 Industry sayfası:** Healthcare, Government, E-commerce, Education, Non-profit, Retail, B2B
- **40+ Case sayfası** detaylı müşteri başarı hikayeleri
- **Insights:** Blog, Cases, News, Events, Partners
- **Culture sayfası:** Değerler, çalışma kültürü, "8 Things that keep us Happy"
- **Contact:** 8 hub lokasyonu harita ile
- **Tema sayfaları:** AI, Klantloyaliteit, Digitale Toegankelijkheid, Arbeidsmarktcommunicatie

---

## 2. Tasarım Sistemi & Stil Rehberi

### Happy Horizon Tasarım Dili
Happy Horizon minimal, temiz ve profesyonel bir tasarım kullanır. LeftFlow bunu kendi markasına adapte edecektir.

### Renkler
```
Primary:        #0D0D0D (Siyah — ana metin)
Secondary:      #2563EB (Mavi — CTA butonları, linkler)
Accent:         #7C3AED (Mor — vurgu, gradientler)
Background:     #FFFFFF (Beyaz — ana arkaplan)
Light BG:       #F8FAFC (Açık gri — section arka planları)
Dark Section:   #111827 (Koyu — footer, hero alternatif)
Success Green:  #10B981
```

### Tipografi
```
Başlıklar:     Inter veya Söhne (Bold/Semibold)
Alt Başlıklar: Inter (Medium)
Body:          Inter (Regular, 16px line-height: 1.6)
```

### Genel Kurallar
- Her sayfada **hero section** — büyük başlık + alt metin + CTA butonu
- **Client logo band** — en az 6-8 tanınmış marka logosu yatay kaydırılabilir şerit
- **CTA section** — her sayfanın altında "Bize Ulaşın" veya "Daag ons uit!" tarzı bir section
- Görseller: Gerçek ekip fotoğrafları, ofis görselleri, case çalışmaları görselleri
- Animasyonlar: Scroll-triggered fade-in, hover efektleri butonlarda
- **Responsive:** Mobile-first yaklaşım

---

## 3. Ana Sayfa (Homepage)

### Happy Horizon Ana Sayfası Analizi:
Happy Horizon'un ana sayfası şu bileşenlerden oluşur:
1. **Hero Section** — "Creative digital agency" başlığı + "Wij maken impact voor:" altmetni
2. **Animated Text** — Müşteri isimleri rotate eden animasyon
3. **Client Logo Carousel** — Shimano, CSU, Fontys, Timing, PIDZ vb.
4. **Hub Lokasyonları** — 8 ofis adresi, çalışma saatleri, ulaşım bilgileri
5. **Son Haberler / Blog** — En güncel 3 blog yazısı kartları

### LeftFlow Ana Sayfa Yapısı:

#### Section 1: Hero
```
Yapı:
- Full-width hero, koyu gradient arkaplan (#0D0D0D → #1a1a2e)
- Büyük başlık: "AI ile İşinizi Dönüştürün"
- Alt metin: "Chatbotlar, sesli asistanlar, otomasyon iş akışları ve özel AI çözümleri ile 
  işletmenizin verimliliğini %300'e kadar artırın."
- CTA Butonu: "Ücretsiz Danışmanlık Al" (parlak mavi, hover'da glow efekti)
- Sağ tarafta: Dashboard/chatbot arayüzü mockup görseli veya Lottie animasyonu
```

#### Section 2: Client Logo Band
```
Yapı:
- Açık gri arkaplan (#F8FAFC)
- "Güvenilen Markalar" başlığı (küçük, gri)
- 8-12 client logosu yatay sırayla (grayscale, hover'da renkli)
- Otomatik kayan carousel

LOGOLAR (bulunması gerekenler):
- Sektördeki tanınmış markalar veya çalışılan müşteri logoları
- Eğer gerçek müşteri yoksa: "Trusted by 50+ businesses" metni
- Teknoloji partnerleri: n8n, OpenAI, Anthropic, Make, Zapier logoları
```

#### Section 3: Hizmet Kartları
```
Yapı:
- 2x3 veya 3x2 grid
- Her kart: İkon + Başlık + 2 satır açıklama + "Daha Fazla →" linki
- Kartlar:
  1. AI Chatbots & Voice Agents
  2. Workflow Automation (n8n, Make)
  3. B2B Sales Automation
  4. Custom AI Solutions
  5. Content Creation
  6. Corporate Website & E-Commerce
```

#### Section 4: Featured Case
```
Yapı:
- Full-width, görsel ağırlıklı
- Sol taraf: Case görseli (mockup veya screenshot)
- Sağ taraf: 
  - Client adı + Logo
  - Başlık: "X şirketi nasıl Y sonucu elde etti"
  - 3 adet metrik kutusu (ör: %300 verimlilik artışı, 10x hız, %40 maliyet azalması)
  - "Case'i Oku →" linki
```

#### Section 5: Nasıl Çalışıyoruz
```
Yapı:
- 4 adımlı yatay timeline/stepper
- Her adım: Numara + İkon + Başlık + Kısa açıklama
  1. Keşif & Analiz — İhtiyaçlarınızı anlıyoruz
  2. Strateji & Tasarım — Çözüm yol haritası oluşturuyoruz
  3. Geliştirme & Test — Çözümü hayata geçiriyoruz
  4. Lansman & Optimizasyon — Sürekli iyileştiriyoruz
```

#### Section 6: Testimonials / Rakamlar
```
Yapı:
- Koyu arkaplan section
- 4 büyük rakam yan yana:
  - "50+" Tamamlanan Proje
  - "%300" Ortalama Verimlilik Artışı
  - "24/7" AI Destekli Çözümler
  - "3x" Daha Hızlı Dönüş Süresi
```

#### Section 7: Blog / Son İçerikler
```
Yapı:
- 3 blog kartı yan yana
- Her kart: Görsel + Kategori etiketi + Başlık + Tarih + Yazar
```

#### Section 8: CTA Section
```
Yapı:
- Gradient arkaplan
- "AI ile Büyümeye Hazır mısınız?"
- "15 dakikalık ücretsiz danışmanlık görüşmesi" alt metin
- İki CTA butonu: "Toplantı Planla" + "Bize Yazın"
```

### Prompt (Ana Sayfa için):
```
Create a modern, professional homepage for LeftFlow — an AI automation agency.

DESIGN: 
- Dark gradient hero (#0D0D0D to #1a1a2e) with animated particles or subtle mesh gradient
- Clean, minimal sections alternating white and light gray (#F8FAFC) backgrounds
- Blue (#2563EB) and purple (#7C3AED) accent colors for CTAs and highlights
- Typography: Inter font family, bold headings, relaxed body text

HERO SECTION:
- Large heading: "AI ile İşinizi Dönüştürün" (center or left-aligned)
- Subheading about chatbots, voice agents, automation workflows, and custom AI solutions
- Glowing CTA button "Ücretsiz Danışmanlık Al"
- Right side: floating dashboard/chatbot mockup image or animated illustration

SECTIONS (in order):
1. Client logo carousel (grayscale logos, auto-scrolling): n8n, OpenAI, Make, Zapier, etc.
2. 6 service cards in 2x3 grid with icons
3. Featured case study with metrics and mockup image
4. "How We Work" 4-step horizontal timeline
5. Stats section (dark bg): 50+ projects, 300% efficiency, 24/7 AI, 3x faster
6. Latest blog posts (3 cards)
7. Final CTA with gradient background

STYLE: Like happyhorizon.com — professional, spacious, modern. Not generic AI aesthetic.
Use real professional photography feel, not cartoon illustrations.
```

---

## 4. Services (Hizmetler) Ana Sayfası

### Happy Horizon Referans:
Happy Horizon'un `/services/` sayfası minimal bir yapıdadır ve sadece 5 ana kategoriye yönlendirme içerir:
- Online Marketing
- Development & Technology
- Strategy & Innovation
- Branding
- Data & Automation

Her kategori kartının büyük bir başlığı, kısa açıklaması ve görsel/ikon alanı vardır.

### LeftFlow Services Ana Sayfa Yapısı:

#### Section 1: Hero
```
- Başlık: "Hizmetlerimiz"
- Alt metin: "AI otomasyon, chatbot geliştirme, iş akışı otomasyonu ve 
  dijital dönüşüm çözümleriyle işletmenizi geleceğe taşıyoruz."
- Arkaplan: Koyu gradient veya full-width profesyonel ofis görseli overlay ile
```

#### Section 2: Hizmet Kategorileri Grid
```
Yapı: 2x4 veya benzeri grid, her kart büyük ve dikkat çekici

Kartlar:
1. AI Chatbots & Voice Agents
   - İkon: Mesaj balonu + AI ikon
   - Açıklama: "7/24 müşteri desteği, satış asistanları, 
     sesli AI ajanları"
   - Link: /services/chatbots-voice-agents/

2. Workflow Automation
   - İkon: Akış şeması ikonu
   - Açıklama: "n8n, Make ve özel entegrasyonlarla iş süreçlerinizi otomatikleştirin"
   - Link: /services/workflow-automation/

3. B2B Sales Automation (Coremagnet)
   - İkon: Hedef/mıknatıs ikonu
   - Açıklama: "Lead generation, outreach otomasyonu, CRM entegrasyonları"
   - Link: /services/b2b-sales-automation/

4. Custom AI Solutions
   - İkon: Beyin/chip ikonu
   - Açıklama: "Özel LLM sistemleri, RAG uygulamaları, AI model fine-tuning"
   - Link: /services/custom-ai-solutions/

5. Content Creation & Social Media
   - İkon: Kamera/kalem ikonu
   - Açıklama: "AI destekli içerik üretimi, sosyal medya yönetimi"
   - Link: /services/content-creation/

6. Corporate Website Development
   - İkon: Monitor ikonu
   - Açıklama: "Profesyonel kurumsal web siteleri, landing page'ler"
   - Link: /services/corporate-website/

7. E-Commerce & Webshop
   - İkon: Alışveriş sepeti ikonu
   - Açıklama: "Shopify, WooCommerce, özel e-ticaret çözümleri"
   - Link: /services/e-commerce-webshop/

8. Data & Analytics
   - İkon: Grafik ikonu
   - Açıklama: "Veri analizi, dashboard geliştirme, AI-powered raporlama"
   - Link: /services/data-analytics/
```

#### Section 3: Client Logoları
```
"Wij maken impact voor:" tarzı client logo band
```

#### Section 4: CTA
```
"Hangi hizmet sizin için uygun? 15 dakikalık ücretsiz danışmanlık."
CTA butonu + telefon numarası
```

---

## 5. Services Alt Sayfaları — AI Automation

### Happy Horizon Referans Yapı:
Her alt hizmet sayfası şu kalıba uyar (örn: `/services/online-marketing/social-advertising/`):
1. **Hero:** Başlık + açıklama + "Daag ons uit!" CTA
2. **Açıklama bölümü:** 2-3 paragraf detaylı hizmet açıklaması
3. **Özellikler listesi:** İkon + başlık + açıklama (grid veya liste)
4. **Case örneği:** 1-2 ilgili case çalışması kartı
5. **Çalışma süreci:** "Hoe werken we aan...?" — adım adım süreç
6. **Client logoları:** İlgili sektördeki müşteriler
7. **Teknoloji partnerleri:** Kullanılan platform/araç logoları
8. **Kişi kartı:** İlgili uzmanın fotoğrafı + isim + title + "Plan een belafspraak" CTA
9. **İlgili bloglar:** 2-3 blog kartı
10. **Son CTA:** Form veya telefon randevusu

### LeftFlow AI Automation Sayfası:

#### URL: `/services/ai-automation/`

#### Section 1: Hero
```
- Başlık: "AI Otomasyon Çözümleri"
- Alt metin: "İş süreçlerinizi yapay zeka ile otomatikleştirin. 
  Manuel görevleri ortadan kaldırın, verimliliği artırın, maliyetleri düşürün."
- CTA: "Ücretsiz Otomasyon Analizi Al"
- Görsel: Otomasyon dashboard mockup veya akış diyagramı görseli
```

#### Section 2: Problem-Çözüm
```
Sol kolon — Problem:
"Ekibiniz hâlâ tekrarlayan görevlerle vakit kaybediyor mu?"
- Manuel veri girişi saatlerce sürüyor
- Sistemler arası bilgi transferi hataya açık
- Müşteri yanıt süreleri uzun

Sağ kolon — Çözüm:
"AI otomasyonla bu sorunları kökten çözün."
- Otomatik veri işleme ve sınıflandırma
- Sistem entegrasyonları ile kesintisiz veri akışı
- Anlık, AI destekli müşteri yanıtları
```

#### Section 3: Hizmet Detayları
```
3x2 grid kartları:
1. Süreç Otomasyonu — İş akışlarını tanımlayın, otomatikleştirin
2. Veri İşleme — AI ile belge analizi, veri çıkarma
3. E-posta Otomasyonu — Akıllı e-posta sınıflandırma ve yanıtlama
4. CRM Entegrasyonu — Salesforce, HubSpot, Pipedrive bağlantıları
5. Raporlama — Otomatik rapor oluşturma ve dağıtım
6. Yapay Zeka Modelleri — GPT, Claude, özel model entegrasyonu
```

#### Section 4: Case Çalışması
```
Featured case: Gerçek bir müşteri örneği
- Müşteri adı + logo
- Sorun → Çözüm → Sonuç formatı
- 3 metrik kutusu
- "Case'i Oku →" linki
```

#### Section 5: Teknoloji Stack
```
Logo grid:
n8n, Make (Integromat), Zapier, OpenAI, Anthropic Claude, 
Google Cloud AI, AWS, Python, Node.js
```

#### Section 6: Uzman Kartı
```
- Emre'nin (veya ilgili kişinin) fotoğrafı
- İsim, Title: "Founder & AI Automation Specialist"
- "15 dakikalık bir görüşme planlayın"
- Takvim bağlantısı
```

#### Section 7: İlgili Blog Yazıları (2-3 kart)

#### Section 8: CTA Section

### Prompt (Service Alt Sayfası):
```
Create a detailed service page for "AI Automation Solutions" in the style of happyhorizon.com service pages.

STRUCTURE:
1. Hero with dark gradient, title "AI Otomasyon Çözümleri", subtitle, CTA button
2. Problem-Solution split section (two columns)
3. 6 service feature cards in 2x3 grid with icons, titles, descriptions
4. Featured case study with client logo, before/after metrics
5. Technology stack logos (n8n, Make, OpenAI, Claude, etc.)
6. Expert contact card with photo, name, CTA to book a call
7. 2-3 related blog post cards
8. Final CTA section with gradient background

DESIGN: Same as happyhorizon.com — clean, professional, spacious.
White backgrounds alternating with light gray (#F8FAFC).
Blue buttons, dark text, professional imagery.
```

---

## 6. Services Alt Sayfaları — AI Chatbots & Voice Agents

#### URL: `/services/chatbots-voice-agents/`

#### Yapı (Happy Horizon formatında):

**Hero:**
```
Başlık: "AI Chatbots & Sesli Asistanlar"
Alt metin: "7/24 çalışan akıllı chatbotlar ve sesli AI ajanları ile 
müşteri deneyimini dönüştürün."
CTA: "Demo Talep Et"
Görsel: Chatbot arayüzü mockup (telefon + masaüstü)
```

**Hizmet Özellikleri Grid (4 kart):**
```
1. WhatsApp AI Chatbot — Müşteri desteği, sipariş takibi, randevu
2. Web Chatbot — Canlı destek + AI hybrid çözüm
3. Sesli AI Ajanları — Telefon yanıtlama, aramalar, IVR
4. Çok Kanallı Entegrasyon — Instagram, Facebook, Telegram, WhatsApp
```

**Detaylı Açıklama:**
```
2-3 paragraf: Chatbotların nasıl çalıştığı, NLP teknolojisi,
özel eğitim verileri ile doğru yanıtlar, hafıza yönetimi,
escalation (insana aktarma) akışı
```

**Çalışma Süreci (4 adım):**
```
1. İhtiyaç Analizi — Müşteri senaryolarını belirleme
2. Tasarım & Geliştirme — Bot akışları, bilgi tabanı oluşturma
3. Eğitim & Test — AI modelini şirket verileriyle eğitme
4. Canlıya Alma & İzleme — Performans takibi, sürekli iyileştirme
```

**Case Çalışması:** DoubleTree Hotel chatbot örneği veya başka gerçek bir proje

**Teknoloji Logoları:** OpenAI, Anthropic, Twilio, WhatsApp Business API, Voiceflow

---

## 7. Services Alt Sayfaları — Workflow Automation (n8n)

#### URL: `/services/workflow-automation/`

**Hero:**
```
Başlık: "Workflow Automation"
Alt metin: "n8n, Make ve özel entegrasyonlarla iş süreçlerinizi 
bağlayın, otomatikleştirin ve optimize edin."
CTA: "Otomasyon Potansiyelinizi Keşfedin"
```

**Hizmet Özellikleri:**
```
1. n8n Workflow Development — Özel otomasyon akışları
2. API Entegrasyonları — SaaS, CRM, ERP bağlantıları
3. Veri Senkronizasyonu — Sistemler arası otomatik veri aktarımı
4. Webhook & Event-Driven — Gerçek zamanlı tetikleyiciler
5. Error Handling & Monitoring — Hata yönetimi, alarm sistemleri
6. Ölçeklendirme — Enterprise seviye otomasyon altyapısı
```

**Kullanım Alanları:**
```
Grid veya timeline:
- E-ticaret sipariş otomasyonu
- Lead scoring & routing
- Müşteri onboarding akışları
- Raporlama otomasyonu
- Sosyal medya post otomasyonu
- Fatura ve ödeme takibi
```

---

## 8. Services Alt Sayfaları — Custom AI Solutions

#### URL: `/services/custom-ai-solutions/`

**Hero:**
```
Başlık: "Özel AI Çözümleri"
Alt metin: "İşletmenize özel yapay zeka modelleri, RAG sistemleri 
ve LLM uygulamaları geliştiriyoruz."
```

**Hizmet Özellikleri:**
```
1. RAG (Retrieval-Augmented Generation) — Şirket dokümanlarından akıllı yanıtlar
2. Fine-Tuned AI Modelleri — Sektörünüze özel eğitilmiş modeller
3. AI-Powered Analytics — Veri analizi ve tahminleme
4. Doküman İşleme — AI ile otomatik belge analizi
5. Çok Dilli AI — Türkçe, İngilizce, Hollandaca ve daha fazlası
6. AI Güvenlik & Compliance — GDPR uyumlu AI sistemleri
```

---

## 9. Services Alt Sayfaları — B2B Sales Automation (Coremagnet)

#### URL: `/services/b2b-sales-automation/`

**Hero:**
```
Başlık: "B2B Sales Automation"
Alt metin: "Coremagnet ile lead generation, outreach otomasyonu 
ve satış süreçlerinizi AI ile güçlendirin."
```

**Hizmet Özellikleri:**
```
1. Lead Generation — Apollo.io, LinkedIn, web scraping ile hedef müşteri bulma
2. Outreach Automation — Kişiselleştirilmiş e-posta ve LinkedIn mesajları
3. Lead Scoring — AI ile müşteri kalitesi puanlama
4. CRM Integration — HubSpot, Pipedrive, Salesforce senkronizasyonu
5. Pipeline Management — Otomatik deal takibi ve raporlama
6. Appointment Setting — Otomatik randevu ayarlama
```

**Metrikler:**
```
- %200 daha fazla lead
- %40 daha yüksek conversion rate
- %60 zaman tasarrufu satış ekibinde
```

---

## 10. Services Alt Sayfaları — Content Creation & Social Media

#### URL: `/services/content-creation/`

**Hizmetler:**
```
1. AI Content Writing — Blog, sosyal medya, e-posta içerikleri
2. Video Production — UGC, explainer videolar, Sora AI
3. Sosyal Medya Yönetimi — Strateji, planlama, paylaşım
4. SEO Content — Arama motoru odaklı içerik üretimi
5. Visual Design — Grafik tasarım, infografik, carousel
6. Content Automation — Otomatik içerik üretim pipeline'ları
```

---

## 11. Services Alt Sayfaları — Corporate Website Development

#### URL: `/services/corporate-website/`

### Happy Horizon Referans: `/services/development-technology/corporate-website/`
Happy Horizon bu sayfada şunları içerir:
- Teknoloji partnerleri logoları (Storyblok, Strapi, JavaScript, vb.)
- Marketing automation entegrasyonları
- İlgili blog yazıları

**LeftFlow Corporate Website Sayfası:**

**Hero:**
```
Başlık: "Kurumsal Web Sitesi Geliştirme"
Alt metin: "Markanızı dijitalde en iyi şekilde temsil eden, hızlı, 
modern ve dönüşüm odaklı web siteleri tasarlıyoruz."
```

**Hizmet Detayları:**
```
1. Tasarım & UX — Kullanıcı odaklı, modern arayüz tasarımı
2. Headless CMS — Storyblok, Strapi, WordPress entegrasyonu
3. Performance Optimization — Core Web Vitals, sayfa hızı
4. SEO Altyapısı — Teknik SEO, schema markup, sitemap
5. Responsive Design — Tüm cihazlarda mükemmel deneyim
6. Analytics Entegrasyonu — Google Analytics 4, Tag Manager
```

**Teknoloji Stack:**
```
Next.js, React, Tailwind CSS, WordPress, Webflow, 
Storyblok, Vercel, Cloudflare
```

**Önemli Not:**
Bu sayfa Happy Horizon'daki gibi teknoloji partner logolarını, 
ilgili blog yazılarını ve case çalışmalarını da içermeli.

---

## 12. Services Alt Sayfaları — E-Commerce & Webshop

#### URL: `/services/e-commerce-webshop/`

### Happy Horizon Referans: `/services/development-technology/e-commerce-webshop/`
HH bu sayfada platformları, yardım edilen konuları ve case'leri listeler.

**LeftFlow E-Commerce Sayfası:**

**Hero:**
```
Başlık: "E-Commerce & Webshop Çözümleri"
Alt metin: "Shopify, WooCommerce ve özel platformlarla 
satışlarınızı artıran online mağazalar kuruyoruz."
```

**Yardım Edilen Konular:**
```
- Platform seçimi ve kurulumu
- Ödeme entegrasyonları (Stripe, iDEAL, PayPal)
- Envanter yönetimi ve ERP bağlantısı
- Kargo ve lojistik entegrasyonu
- Conversion rate optimization
- Marketplace entegrasyonları (Amazon, Bol.com)
```

**Platform Logoları:**
```
Shopify, WooCommerce, BigCommerce, Shopware, Magento
```

---

## 13. Cases (Başarı Hikayeleri)

### Happy Horizon Referans: `/nl/cases/`
Cases sayfası filtrelenebilir bir galeri olarak çalışır. Her case kartı şunları içerir:
- Büyük banner görseli
- Kategori etiketi (örn: "Branding", "Development & Technology")
- Müşteri adı + Kısa başlık
- "Lees verder" linki

### LeftFlow Cases Yapısı:

#### Ana Cases Sayfası (`/cases/`)
```
- Hero: "Başarı Hikayeleri" + alt metin
- Filtre: Kategori bazlı (AI Chatbot, Automation, Sales, Website)
- Grid: 3 kolon, her kart:
  - Banner görseli (proje screenshot veya mockup)
  - Kategori etiketi
  - Client adı + Başlık
  - Kısa açıklama (1-2 cümle)
  - "Detaylı Oku →"
```

#### Tekil Case Sayfası (Happy Horizon formatı):
```
Her case sayfası şu yapıdadır:

1. HERO: Full-width banner görseli + client logo
2. OVERVIEW: 
   - Client adı, sektör, hizmet kategorisi
   - Kısa özet (2-3 cümle)
3. CHALLENGE: Müşterinin karşılaştığı sorun
4. SOLUTION: Uygulanan çözüm (görseller, screenshots ile)
5. RESULTS: Metrik kutuları (büyük rakamlar)
6. VIDEO (varsa): "Case in 1 minuut" tarzı kısa video
7. QUOTE: Müşteri testimonial
8. CONTACT: İlgili uzman kartı + CTA
9. RELATED CASES: 2-3 benzer case kartı
```

### Prompt (Case Sayfası):
```
Create a case study page in the style of happyhorizon.com/nl/cases/[case-name].

LAYOUT:
1. Full-width hero image/banner with client logo overlay
2. Overview section: client name, industry, services used
3. "The Challenge" section with problem description
4. "Our Solution" section with implementation details and screenshots
5. "Results" section with 3-4 large metric boxes showing improvements
6. Client quote/testimonial in a styled blockquote
7. Expert contact card (photo, name, CTA)
8. Related cases grid (3 cards)

DESIGN: Clean white background, blue accent color for metrics.
Professional typography, generous spacing.
```

---

## 14. Industries (Sektörler)

### Happy Horizon Referans: 7 sektör sayfası
Her sektör sayfası şunları içerir:
- Hero + sektöre özel başlık
- Sektör hakkında genel açıklama (neden farklı?)
- Ilgili client logoları
- İlgili case çalışmaları
- Uzman kartı
- CTA

### LeftFlow Industries:

#### `/industries/e-commerce/`
```
Başlık: "E-Commerce İçin AI Çözümleri"
İçerik: Chatbot, sepet hatırlatma, ürün önerisi, stok otomasyonu
Müşteri logoları + İlgili caseler
```

#### `/industries/saas/`
```
Başlık: "SaaS Şirketleri İçin Otomasyon"
İçerik: Onboarding otomasyonu, churn prevention, usage analytics
```

#### `/industries/healthcare/`
```
Başlık: "Sağlık Sektöründe AI"
İçerik: Randevu botları, hasta takibi, doküman işleme
```

#### `/industries/b2b/`
```
Başlık: "B2B Şirketler İçin AI & Otomasyon"
İçerik: Lead generation, CRM otomasyonu, content generation
```

#### `/industries/education/`
```
Başlık: "Eğitim Sektörü AI Çözümleri"
İçerik: Öğrenci destek chatbotları, içerik oluşturma, analitik
```

#### `/industries/retail/`
```
Başlık: "Perakende İçin AI"
İçerik: Müşteri hizmeti, envanter optimizasyonu, kişiselleştirme
```

---

## 15. Insights (Blog & İçerikler)

### Happy Horizon Referans: `/nl/insights/`
5 kategori altında organize:
- Blogs
- Cases
- Nieuws (Haberler)
- Events & Webinars
- Partners

### LeftFlow Insights Yapısı:
```
/insights/ ana sayfası:
- 5 kategori kartı (büyük ikonlarla)
  1. Blog — AI, otomasyon, dijital dönüşüm yazıları
  2. Cases — Müşteri başarı hikayeleri
  3. Haberler — Şirket haberleri
  4. Events & Webinars — Online etkinlikler
  5. Kaynaklar — E-book, whitepaper, template'ler

Blog liste sayfası:
- Filtrelenebilir kategori menüsü
- Blog kartları: Görsel + Kategori + Başlık + Tarih + Yazar
- Pagination veya infinite scroll
```

---

## 16. Culture (Kültür)

### Happy Horizon Referans: `/nl/culture/`
"8 Things that keep us Happy" formatında değerler sayfası:
1. It's all about balance
2. We bring talents together
3. We own (y)our business
4. Teamwork makes dreams work
5. Sharing is a superpower
6. We play to win
7. We celebrate everything
8. (Sonuncusu)

Her değer: numara + başlık + açıklama paragrafı + görsel

### LeftFlow Culture Sayfası:

```
Başlık: "Kültürümüz"
Alt başlık: "Yapay zeka ile geleceği şekillendirirken, 
insanı merkeze koyuyoruz."

Değerlerimiz (Happy Horizon formatında):

1. Innovation First
   "Yeni teknolojileri keşfetmek ve uygulamak DNA'mızda var."

2. Müşteri Başarısı = Bizim Başarımız
   "Her projeye iş ortağı gibi yaklaşırız."

3. Sürekli Öğrenme
   "AI dünyası hızla değişiyor. Biz de onunla birlikte."

4. Şeffaflık
   "Süreçlerimiz, fiyatlarımız ve sonuçlarımız şeffaftır."

5. Remote-First, Global Mindset
   "Rotterdam'dan İstanbul'a, dünyanın her yerinden çalışırız."

Ekip fotoğrafları, ofis görselleri (çalışma ortamı)
Kariyer bölümü: Açık pozisyonlar + başvuru CTA
```

---

## 17. Contact (İletişim)

### Happy Horizon Referans: `/nl/contact/`
8 hub lokasyonu, her birinde:
- Adres, telefon, çalışma saatleri
- "Met de auto?" ve "Met de trein?" yol tarifleri
- "Route" ve "Bekijk Hub" butonları

### LeftFlow Contact Sayfası:

```
Section 1: İletişim Formu
- İsim, E-posta, Şirket, Mesaj, Bütçe aralığı (dropdown)
- "Mesaj Gönder" CTA

Section 2: Direkt İletişim
- E-posta: info@leftflow.com
- Telefon: +31 XXX
- WhatsApp: +90 XXX

Section 3: Ofis Lokasyonları (Happy Horizon formatında)
Rotterdam Ofis:
- Adres
- Çalışma saatleri
- Ulaşım bilgileri
- Google Maps embed

İstanbul Ofis:
- Adres
- Çalışma saatleri
- Google Maps embed

Section 4: Sosyal Medya Linkleri
LinkedIn, Instagram, YouTube, Twitter/X

Section 5: "15 Dakikalık Ücretsiz Danışmanlık" 
- Calendly embed veya link
```

---

## 18. AI Optimizer Sayfası

### Happy Horizon Referans: `/nl/ai-optimizer/`
AI görünürlüğü optimize eden özel bir ürün/hizmet sayfası.

### LeftFlow AI Optimizer:
```
Başlık: "AI Optimizer — AI'da Markanızın Görünürlüğünü Artırın"

İçerik:
- ChatGPT, Gemini, Perplexity gibi AI araçlarında markanızın 
  nasıl göründüğünü analiz ediyoruz
- GEO (Generative Engine Optimization) stratejisi
- AI-friendly content oluşturma
- Marka mentions ve citations takibi
- Gerçek zamanlı dashboard

CTA: "AI Görünürlük Analizi Talep Et"
```

---

## 19. Header & Footer Yapısı

### Header (Happy Horizon formatında):
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]    Services ▾   Cases   Industries ▾   Insights │
│                                    Culture   Contact    │
│                                    [Get in Touch] btn   │
└─────────────────────────────────────────────────────────┘

Services Mega Menu (hover'da açılır):
┌───────────────────────────────────────────┐
│ AI Automation        │ Website & E-Commerce│
│ ├─ AI Chatbots       │ ├─ Corporate Website│
│ ├─ Voice Agents      │ ├─ E-Commerce       │
│ ├─ Workflow Auto.    │ └─ Webdesign        │
│ └─ Custom AI         │                     │
│                      │ Sales & Marketing    │
│                      │ ├─ B2B Sales Auto.   │
│                      │ ├─ Content Creation  │
│                      │ └─ Data & Analytics  │
└───────────────────────────────────────────┘
```

### Footer (Happy Horizon formatında):
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]                                                  │
│                                                          │
│  Services          Industries       Insights   Company   │
│  ─ AI Automation   ─ E-Commerce     ─ Blog     ─ About  │
│  ─ Chatbots        ─ SaaS           ─ Cases    ─ Culture│
│  ─ Workflow        ─ Healthcare     ─ News     ─ Contact│
│  ─ Custom AI       ─ B2B           ─ Events   ─ Careers│
│  ─ B2B Sales       ─ Education                          │
│  ─ Content         ─ Retail                             │
│  ─ Website                                              │
│  ─ E-Commerce                                           │
│                                                          │
│  ─────────────────────────────────────────────────────   │
│  © 2026 LeftFlow  │  Privacy Policy  │  Terms           │
│  KVK: XXX  │  BTW: XXX                                  │
│  [LinkedIn] [Instagram] [YouTube] [Twitter]              │
└─────────────────────────────────────────────────────────┘
```

---

## 20. Ortak Bileşenler & Tekrarlayan Elementler

### 1. Client Logo Band
```
Her sayfada kullanılır.
- Gri arkaplan veya beyaz üzerine
- 8-12 logo yatay kaydırılabilir
- Grayscale, hover'da renkli
- "Wij maken impact voor:" veya "Güvenilen Markalar" başlığı
```

### 2. CTA Section
```
Her sayfanın sonunda.
Variant A (açık):
- Gradient arkaplan
- Büyük başlık + alt metin
- 2 buton: Primary CTA + Secondary CTA

Variant B (koyu):
- Koyu arkaplan (#111827)
- Beyaz metin
- Tek CTA buton
```

### 3. Expert/Contact Kartı
```
Her service sayfasının sonunda.
- Kişi fotoğrafı (yuvarlak crop)
- İsim + Title
- "Plan een belafspraak in van 15 min." tarzı CTA
- Telefon numarası: "Liever direct bellen? 088 – XXX"
- Mini form: İsim, E-posta, Mesaj
```

### 4. Case Kartları
```
Her sayfada 2-3 tane ilgili case gösterilir.
- Yatay veya dikey kart
- Banner görseli
- Kategori etiketi
- Client adı + Başlık
- Kısa açıklama
- "Lees verder →" / "Detaylı Oku →"
```

### 5. Blog Kartları
```
Her sayfada 2-3 ilgili blog gösterilir.
- Kare veya yatay görsel
- Kategori etiketi
- Başlık
- Tarih + Yazar (küçük yazar fotoğrafı ile)
- "Lees meer" linki
```

### 6. Metrik/Rakam Kutuları
```
Case sayfalarında ve ana sayfada.
- 3-4 kutu yan yana
- Büyük rakam (bold, renkli)
- Kısa açıklama altında
- Örn: "%300" — "Verimlilik Artışı"
```

### 7. Adım Adım Süreç (Process Steps)
```
4-5 adımlı yatay timeline veya dikey stepper
- Numara veya ikon
- Başlık
- Kısa açıklama
- Bağlantı çizgisi/ok aralarında
```

---

## 21. AI Prompt Rehberi — Sayfa Oluşturma

### Genel Prompt Şablonu:
```
Build a professional website page for LeftFlow (AI automation agency) 
in the exact style of happyhorizon.com.

PAGE: [Sayfa adı]
URL: [URL yolu]

DESIGN SYSTEM:
- Colors: Primary #0D0D0D, Accent Blue #2563EB, Purple #7C3AED
- Background alternating: white and #F8FAFC
- Dark sections: #111827
- Font: Inter (Bold headings, Regular body, 16px base)
- Generous whitespace, professional imagery
- Smooth scroll animations (fade-in on scroll)

COMPONENTS NEEDED:
[Sayfa için gereken section'lar listele]

CONTENT:
[Türkçe veya İngilizce içerik detaylarını belirt]

IMAGES:
[Görsel ihtiyaçlarını belirt — mockuplar, ekip fotoğrafları, vs.]

REFERENCE: 
Study happyhorizon.com for the exact layout patterns:
- Hero sections with gradient overlays
- Client logo carousels
- Service feature grids
- Case study cards
- Expert contact cards with photo
- CTA sections at page bottom
- Mega menu navigation
- Professional, clean footer
```

### Sayfa Bazlı Özel Promptlar:

#### Homepage Promptu:
```
Create the homepage for leftflow.ai — an AI automation agency based in 
Rotterdam and Istanbul. The design should match happyhorizon.com exactly.

Include these sections in order:
1. Hero: Dark gradient bg, title "AI ile İşinizi Dönüştürün", 
   subtitle about AI services, glowing blue CTA button, 
   floating dashboard illustration on right
2. Logo carousel: n8n, OpenAI, Make, Zapier logos, grayscale
3. Services grid: 6 cards — AI Chatbots, Workflow Automation, 
   B2B Sales, Custom AI, Content, Website
4. Featured case with metrics
5. Process steps: 4-step horizontal timeline
6. Stats: dark bg, 4 big numbers
7. Blog cards: 3 latest posts
8. CTA: gradient bg, "Ücretsiz Danışmanlık Al"

Use Inter font, blue/purple accents, clean white sections, 
no generic AI aesthetic — professional agency look.
```

#### Service Alt Sayfa Promptu:
```
Create a service detail page for "[Service Name]" at leftflow.ai.
Follow the exact structure of happyhorizon.com/nl/services/online-marketing/social-advertising/

Sections:
1. Hero with title, subtitle, CTA
2. Detailed service description (2-3 paragraphs)
3. Feature grid (6 items with icons)
4. Related case study card
5. Technology partner logos
6. Expert contact card (round photo, name, title, "Book a 15-min call")
7. Related blog posts (2-3)
8. Bottom CTA section

Include proper hover states, scroll animations, responsive design.
Match Happy Horizon's spacing, typography, and color usage exactly.
```

---

## EK: Görsel ve Logo Rehberi

### Bulunması Gereken Logolar:
```
Teknoloji Partnerleri:
- n8n logo → https://n8n.io (resmi siteden)
- OpenAI logo → resmi brand assets
- Anthropic Claude logo → resmi brand assets
- Make (Integromat) logo → resmi brand assets
- Zapier logo → resmi brand assets
- Shopify logo
- HubSpot logo
- Twilio logo
- WhatsApp Business logo
- Google Cloud logo
- AWS logo
- Vercel logo
- Next.js logo
- React logo

Platform/Araç Logoları (grayscale):
SVG formatında, orjinal brand sayfalarından indirilebilir.
Çoğu marka public brand asset sayfası sunar:
- openai.com/brand
- n8n.io/press
- zapier.com/brand
- shopify.com/brand
```

### Görsel İhtiyaçları:
```
1. Ekip fotoğrafları — Profesyonel kare crop (768x768px)
2. Ofis görselleri — Çalışma ortamı, toplantı odaları (1920x1280px)
3. Case görselleri — Proje screenshot'ları, mockuplar (1918x1079px)
4. Service görselleri — İlgili illüstrasyonlar veya stock foto
5. Blog banner'ları — 760x420px
6. Hero görselleri — Full-width (1920px genişlik)
```

### Görsel Oluşturma Notu:
```
Eğer gerçek fotoğraf yoksa, şu yaklaşımı kullan:
- Dashboard mockupları: Figma veya browser frame içinde screenshot
- İllüstrasyonlar: Minimal, line-art stil (Humaaans, Blush, unDraw)
- Gradient arka planlar: Mesh gradient veya subtle noise texture
- İkonlar: Lucide, Heroicons veya Phosphor Icons (SVG, tutarlı stil)
```

---

## EK: Happy Horizon'dan Öğrenilen Kalıplar

### 1. Her Sayfada Tekrarlayan Pattern:
```
Hero → İçerik → Case → Teknoloji → Uzman → Blog → CTA
```

### 2. CTA Dili (Türkçeye adapte):
```
HH: "Daag ons uit!" → LF: "Bize Meydan Okuyun!"
HH: "Plan een belafspraak in van 15 min." → LF: "15 Dakikalık Görüşme Planlayın"
HH: "Liever direct bellen?" → LF: "Doğrudan aramayı tercih eder misiniz?"
HH: "Wat is jouw uitdaging?" → LF: "Sizin zorluğunuz ne?"
```

### 3. Content Tone:
```
Happy Horizon: Profesyonel ama samimi, "wij" (biz) kullanır, 
müşteriyi "jou/jullie" (sen/siz) olarak hitap eder.

LeftFlow: Aynı yaklaşım — "Biz" dili, müşteriye "siz" ile hitap, 
teknik ama anlaşılır, güven veren ton.
```

### 4. Sayfa Uzunluğu:
```
Service alt sayfaları: 1500-3000 kelime
Case sayfaları: 500-1500 kelime
Industry sayfaları: 800-2000 kelime
Ana sayfa: 1000-2000 kelime (section'lara dağılmış)
```

---

## SONUÇ

Bu doküman, Happy Horizon'un 100 sayfasının detaylı analizi sonucu oluşturulmuştur. LeftFlow web sitesi bu rehbere birebir uygun şekilde oluşturulduğunda, Happy Horizon kalitesinde profesyonel bir ajans web sitesi ortaya çıkacaktır. Her sayfanın yapısı, içeriği, görselleri ve AI prompt'ları bu dokümanda belirtilmiştir.

**Önemli:** Bu dokümanı yapay zekaya verirken, her seferinde tek bir sayfa için prompt kullanın. Tüm sayfaları aynı anda oluşturmaya çalışmayın. Sayfa sayfa ilerleyin ve her sayfayı onaylayıp sonraki sayfaya geçin.
