import { writeFile } from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("FAL_KEY env variable required");
  process.exit(1);
}

const PUBLIC = join(process.cwd(), "public");
const IMAGES_DIR = join(PUBLIC, "images");
const VIDEOS_DIR = join(PUBLIC, "videos");

if (!existsSync(IMAGES_DIR)) mkdirSync(IMAGES_DIR, { recursive: true });
if (!existsSync(VIDEOS_DIR)) mkdirSync(VIDEOS_DIR, { recursive: true });

async function generateImage(prompt, filename, opts = {}) {
  const { aspect_ratio = "16:9", resolution = "1K" } = opts;
  console.log(`🖼  Generating: ${filename}...`);

  const res = await fetch("https://fal.run/fal-ai/nano-banana-2", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio,
      resolution,
      output_format: "png",
      safety_tolerance: "5",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`  ❌ Failed ${filename}: ${err}`);
    return null;
  }

  const data = await res.json();
  if (!data.images || data.images.length === 0) {
    console.error(`  ❌ No images returned for ${filename}`);
    return null;
  }

  const imageUrl = data.images[0].url;
  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());
  const outPath = join(IMAGES_DIR, filename);
  await writeFile(outPath, buffer);
  console.log(`  ✅ Saved: ${outPath} (${(buffer.length / 1024).toFixed(0)}KB)`);
  return outPath;
}

async function generateVideo(prompt, filename, opts = {}) {
  const { aspect_ratio = "16:9", duration = "5s" } = opts;
  console.log(`🎬 Generating video: ${filename}...`);
  console.log(`   (This may take 1-3 minutes)`);

  // Submit to queue
  const submitRes = await fetch("https://queue.fal.run/fal-ai/veo3", {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      aspect_ratio,
      duration,
    }),
  });

  if (!submitRes.ok) {
    const err = await submitRes.text();
    console.error(`  ❌ Failed to submit video: ${err}`);
    return null;
  }

  const { request_id } = await submitRes.json();
  console.log(`   Request ID: ${request_id}`);

  // Poll for completion
  let attempts = 0;
  const maxAttempts = 120; // 10 minutes max
  while (attempts < maxAttempts) {
    await new Promise((r) => setTimeout(r, 5000)); // 5s interval

    const statusRes = await fetch(
      `https://queue.fal.run/fal-ai/veo3/requests/${request_id}/status`,
      { headers: { Authorization: `Key ${FAL_KEY}` } }
    );

    const status = await statusRes.json();
    process.stdout.write(`   Status: ${status.status} (${attempts * 5}s)\r`);

    if (status.status === "COMPLETED") {
      console.log(`\n   Video generation complete!`);
      break;
    }
    if (status.status === "FAILED") {
      console.error(`\n  ❌ Video generation failed`);
      return null;
    }
    attempts++;
  }

  // Get result
  const resultRes = await fetch(
    `https://queue.fal.run/fal-ai/veo3/requests/${request_id}`,
    { headers: { Authorization: `Key ${FAL_KEY}` } }
  );

  const result = await resultRes.json();
  if (!result.video?.url) {
    console.error(`  ❌ No video URL in response`);
    console.log(JSON.stringify(result, null, 2));
    return null;
  }

  const videoRes = await fetch(result.video.url);
  const buffer = Buffer.from(await videoRes.arrayBuffer());
  const outPath = join(VIDEOS_DIR, filename);
  await writeFile(outPath, buffer);
  console.log(`  ✅ Saved: ${outPath} (${(buffer.length / 1024 / 1024).toFixed(1)}MB)`);
  return outPath;
}

// ─── IMAGE PROMPTS ───────────────────────────────────────

const imagePrompts = [
  // ═══════════════════════════════════════════════════════════
  // HERO — The homepage hero needs a realistic-looking SaaS dashboard
  // that screams "we build automation platforms". Think: n8n meets
  // a premium analytics tool. Must work as a screenshot/mockup.
  // ═══════════════════════════════════════════════════════════
  {
    filename: "hero-dashboard.png",
    prompt: "A curved ultrawide monitor sitting on a clean dark walnut desk, photographed at a slight angle from the front-right. The screen displays a dark-themed workflow automation platform: a canvas with 10 connected rectangular nodes arranged in a branching flowchart — nodes labeled with small icons for email, database, API, filter, transform. Thin neon-blue connection lines run between them. A sidebar on the left shows a list of workflows. A metrics bar at the top shows small charts and numbers. The desk has a wireless keyboard, a trackpad, and a small succulent plant. Soft blue LED ambient lighting reflects off the desk surface. Studio product photography, shot on medium format camera, shallow depth of field, dark moody background fading to black.",
    aspect_ratio: "16:9",
    resolution: "2K",
  },

  // ═══════════════════════════════════════════════════════════
  // SERVICES — Each service image serves as hero background with
  // text overlay. Think: what would a photographer shoot to
  // visually explain this specific service?
  // ═══════════════════════════════════════════════════════════

  // AI Automation: Shows the core concept — a computer orchestrating
  // multiple systems. Like a control center connecting everything.
  {
    filename: "service-ai-automation.jpg",
    prompt: "Overhead bird's-eye photograph of a large desk workspace. At the center is a laptop showing a node-based automation builder with colorful connected blocks. Around the laptop, arranged in a radial pattern: a smartphone showing email notifications, a tablet showing a CRM contacts list, a printed spreadsheet with highlighted rows, a small robot arm toy, and USB cables connecting devices together. Shot from directly above on a matte black desk surface. Flat lay editorial photography, even studio lighting, no shadows. Clean, organized, symmetrical composition.",
    aspect_ratio: "16:9",
  },

  // Chatbots & Voice Agents: The actual product — a chat interface
  // in use. Show the conversation happening on a phone/screen.
  {
    filename: "service-chatbots-voice-agents.jpg",
    prompt: "Close-up photograph of a person's hands holding a smartphone in portrait orientation. The phone screen shows a WhatsApp-style chat conversation with an AI assistant — the bot messages have a blue accent, user messages are white. A small microphone waveform animation is visible at the bottom of the chat. In the blurred background: a modern office desk with a laptop showing a chatbot analytics dashboard with conversation metrics and satisfaction scores. Shallow depth of field, natural warm office lighting, editorial tech photography style.",
    aspect_ratio: "16:9",
  },

  // Workflow Automation: The actual tool — an n8n/Make-style canvas
  // with a real business process mapped out visually.
  {
    filename: "service-workflow-automation.jpg",
    prompt: "A wide monitor displaying a workflow automation canvas — the visual shows a horizontal pipeline of 12 connected nodes with icons: 'New Order' trigger node on the left, followed by 'Validate Payment', 'Update Inventory', 'Generate Invoice', 'Send Email', 'Update CRM', ending with 'Notify Team' on the right. Each node is a rounded rectangle with a colored icon. Green lines connect completed nodes, orange lines show the active step, gray lines show pending steps. Dark UI theme with a navy sidebar. The monitor sits on a standing desk in a modern office with exposed brick walls. Ambient blue LED strip lighting under the desk. Tech lifestyle editorial photography.",
    aspect_ratio: "16:9",
  },

  // Custom AI Solutions: Developer environment — code editor + AI model
  // training dashboard. Shows the technical craftsmanship.
  {
    filename: "service-custom-ai-solutions.jpg",
    prompt: "A developer's workstation with dual monitors in a dim room with blue ambient lighting. Left monitor shows a code editor (VS Code with dark theme) with Python code visible — imports for langchain, openai, vector database. Right monitor shows a model training dashboard with loss curves declining over epochs, accuracy charts trending upward, and a confusion matrix heatmap in purple and blue tones. A mechanical keyboard with blue backlighting in the foreground. A whiteboard in the background has hand-drawn neural network architecture diagrams with arrows. Moody tech photography, cinematic blue color grading.",
    aspect_ratio: "16:9",
  },

  // B2B Sales Automation: A CRM pipeline view — the sales funnel
  // in action with real-looking deal cards moving through stages.
  {
    filename: "service-b2b-sales-automation.jpg",
    prompt: "A laptop screen showing a Kanban-style sales pipeline CRM dashboard. Five columns labeled 'Lead', 'Contacted', 'Meeting', 'Proposal', 'Won' — each containing 3-4 deal cards with company names and deal values. The rightmost 'Won' column has green checkmarks. A sidebar shows lead scoring metrics and a bar chart of monthly revenue. Next to the laptop: a printed LinkedIn profile page, a coffee mug, and a notepad with handwritten prospect notes. Shot on a clean white desk, bright natural daylight from a window, airy Scandinavian office interior. Bright, optimistic editorial photography.",
    aspect_ratio: "16:9",
  },

  // Content Creation: Show the actual output — social media posts,
  // articles, video thumbnails being produced by AI.
  {
    filename: "service-content-creation.jpg",
    prompt: "A creative workspace desk from a 45-degree overhead angle. Center: an iMac screen showing a social media content calendar grid with colorful post thumbnails for Instagram, LinkedIn, and Twitter. To the left: a tablet showing an AI-generated blog article draft. To the right: printed social media post mockups spread on the desk — Instagram story templates, LinkedIn carousel slides. A camera lens, a small ring light, and a color palette swatch book are scattered around. Warm creative studio lighting with golden hour tones. Editorial creative agency photography style.",
    aspect_ratio: "16:9",
  },

  // Corporate Website: Show the deliverable — a beautiful website
  // displayed across responsive devices.
  {
    filename: "service-corporate-website.jpg",
    prompt: "Three devices arranged in a staggered composition on a dark slate surface: a MacBook Pro showing a modern corporate homepage with a dark hero section and blue CTA buttons, an iPad showing the same site's services page in tablet view, and an iPhone showing the mobile navigation menu. All screens are illuminated and sharp. The devices cast soft reflections on the dark surface. Behind them: a blurred monitor showing Google PageSpeed score of 98 in green. Moody tech product photography, overhead studio lighting with rim light accents, dark background.",
    aspect_ratio: "16:9",
  },

  // E-Commerce & Webshop: A real online store with products,
  // shopping cart, and analytics — the complete package.
  {
    filename: "service-e-commerce-webshop.jpg",
    prompt: "A split-screen composition: left half shows a beautiful online fashion store frontend — product grid with clothing items, clean white design with 'Add to Cart' buttons. Right half shows the e-commerce backend dashboard — order list table, revenue chart trending upward, inventory levels with colored status bars, a small map showing delivery routes. The two halves are connected by a thin diagonal dividing line. Both screens are displayed on a large monitor in a modern office. Shot straight-on, even lighting, product photography aesthetic with a clean white wall background.",
    aspect_ratio: "16:9",
  },

  // ═══════════════════════════════════════════════════════════
  // BLOG POSTS — Each blog header image should visually capture
  // the article's core message. Think: editorial illustration
  // that tells the story at a glance.
  // ═══════════════════════════════════════════════════════════

  // E-commerce Order Automation Guide: Show the entire order lifecycle
  // as a physical assembly line — boxes moving through stations.
  {
    filename: "blog-ecommerce-order-automation-guide.jpg",
    prompt: "Miniature diorama photograph of an e-commerce fulfillment process: a tiny conveyor belt running left to right through four stations — (1) a laptop with an order notification, (2) a miniature warehouse shelf with a robot arm picking items, (3) a packing station with tape and boxes, (4) a delivery van at the end. Small cardboard packages travel along the belt between stations. Tilt-shift photography style making everything look like miniatures. Bright white studio lighting, clean white background, soft shadows. Whimsical but professional product photography.",
    aspect_ratio: "16:9",
  },

  // Healthcare AI Appointment Management: A hospital reception
  // desk with a digital scheduling board — real environment.
  {
    filename: "blog-healthcare-ai-appointment-management.jpg",
    prompt: "A modern medical clinic reception area: a sleek white reception desk with a large wall-mounted display behind it showing a digital appointment schedule — a weekly calendar grid with color-coded time slots (green for available, blue for booked, gray for past). Small notification icons show automated SMS reminders being sent. In front of the desk: a tablet on a stand for patient self-check-in showing a friendly interface. Clean, bright medical environment with white walls, subtle blue accent lighting, indoor plants. Professional architectural interior photography, natural daylight.",
    aspect_ratio: "16:9",
  },

  // Data Silos: Visual metaphor — isolated glass containers with
  // data inside, walls being broken between them.
  {
    filename: "blog-data-silos-holding-companies-back.jpg",
    prompt: "Conceptual still life photograph: five tall clear glass cylinders standing on a dark reflective surface, each containing different colored glowing particles — blue, green, amber, purple, red. The cylinders are separated by frosted glass walls. One wall between two cylinders is cracking open with bright white light streaming through the crack, particles beginning to mix. The mixed particles create a brighter, more vibrant glow. Dark moody studio background with dramatic directional lighting from above. Fine art product photography, high contrast.",
    aspect_ratio: "16:9",
  },

  // Business Automation Trends 2025: A futuristic workspace showing
  // the cutting edge — holographic displays, AI interfaces.
  {
    filename: "blog-business-automation-trends-2025.jpg",
    prompt: "A modern glass-walled office at dusk, photographed from outside looking in. Inside: a person silhouetted at a standing desk working with a large transparent display showing holographic-style UI elements — bar charts, flow diagrams, an AI chat interface. Multiple floating semi-transparent screens around them show trend lines going upward. The city skyline is visible through the opposite glass wall with twilight colors — deep blue and amber. The office has subtle blue LED accent lighting. Editorial architecture and tech photography, cinematic wide angle, blue hour lighting.",
    aspect_ratio: "16:9",
  },

  // Finance Compliance Automation: Stacks of regulatory documents
  // being processed by a scanner/AI — transformation scene.
  {
    filename: "blog-finance-compliance-automation.jpg",
    prompt: "A close-up photograph of a corporate desk split into two halves by a vertical beam of blue scanning light. Left side: messy stacks of printed financial reports, regulatory documents, spreadsheets, and compliance forms piled up in disorder, paper clips and sticky notes scattered. Right side: the same desk is completely clean and organized — a single tablet screen shows a dashboard with green checkmarks next to compliance items, a pie chart showing 99% compliance rate, and a timeline of automated audits. Dramatic split lighting — warm tungsten on the left (old way), cool blue on the right (new way). Editorial conceptual photography.",
    aspect_ratio: "16:9",
  },

  // HR Recruitment Automation: The recruitment funnel visualized
  // as physical objects — resumes being filtered by AI.
  {
    filename: "blog-hr-recruitment-automation.jpg",
    prompt: "A conceptual photograph showing a large funnel made of frosted glass on a desk. At the wide top: hundreds of small printed resume papers being poured in, fanning out in a messy cloud. The funnel narrows in the middle where a glowing blue ring represents AI screening. At the bottom: only 5 pristine resume cards emerge, neatly organized in a row, each with a green 'matched' stamp. Next to the funnel: a laptop showing a candidate ranking dashboard with scores and profiles. Clean white studio background, even lighting, conceptual product photography.",
    aspect_ratio: "16:9",
  },

  // Logistics Automation ROI: Before/after of a logistics operation —
  // chaos vs. optimized. Money being saved visually.
  {
    filename: "blog-logistics-automation-roi.jpg",
    prompt: "A split photograph divided diagonally. Top-left triangle: a chaotic logistics scene — a messy warehouse with boxes everywhere, a confused driver looking at a crumpled paper map, red warning indicators. Bottom-right triangle: the same warehouse transformed — neatly organized shelving with barcode scanners, a GPS route displayed on a tablet showing an optimized delivery path in green, a digital dashboard showing cost savings with a large downward arrow on expenses and upward arrow on profit. The dividing diagonal line transitions from red to green. Clean editorial photography, documentary style with warm lighting.",
    aspect_ratio: "16:9",
  },

  // Small Business Automation Starter: Approachable, small scale —
  // a shop owner with simple automation tools, not overwhelming.
  {
    filename: "blog-small-business-automation-starter-guide.jpg",
    prompt: "A cozy small business owner's desk in a boutique shop. A laptop is open showing a simple drag-and-drop automation builder with just 3 connected blocks: 'New Email' → 'Auto Reply' → 'Add to Spreadsheet'. Next to the laptop: a smartphone showing email notifications being automatically sorted, a small stack of auto-generated invoices from a printer, a coffee cup, and a small potted cactus. Warm afternoon sunlight streaming through a shop window. The scene feels inviting and manageable, not high-tech. Lifestyle editorial photography, warm color tones, shallow depth of field.",
    aspect_ratio: "16:9",
  },

  // ═══════════════════════════════════════════════════════════
  // ABOUT / TEAM — Show the workspace and collaborative culture
  // of a remote-first tech company.
  // ═══════════════════════════════════════════════════════════
  {
    filename: "about-team.jpg",
    prompt: "A bright, airy co-working space with large windows showing a canal-side view (Rotterdam style). Four workstations are visible: one has a person on a video call with multiple participants visible on screen, another has a pair programming setup with two monitors showing code. A whiteboard on the wall has colorful sticky notes arranged in a sprint board pattern. A communal table in the center has laptops, coffee cups, and design printouts spread out. Indoor plants, exposed ceiling ducts painted white, polished concrete floor. A wall-mounted TV shows a world map with connection pins in Rotterdam and Istanbul. Bright architectural interior photography, natural daylight, editorial office style.",
    aspect_ratio: "16:9",
  },

  // ═══════════════════════════════════════════════════════════
  // INDUSTRIES — Each industry image should show AI/automation
  // being used IN that specific industry environment.
  // Not "industry overview" but a real scene of that industry
  // being transformed by technology.
  // ═══════════════════════════════════════════════════════════

  // E-commerce: Inside a modern fulfillment center — automated
  // picking, digital order tracking screens.
  {
    filename: "industry-ecommerce.jpg",
    prompt: "Interior of a modern e-commerce fulfillment warehouse. Automated conveyor belts carry small brown cardboard boxes through the facility. Industrial shelving units with organized bins stretch into the distance. A large wall-mounted screen shows a real-time order tracking dashboard — a map with delivery routes in green, order count ticking up, processing status bars. A worker with a handheld barcode scanner checks packages at a quality station. Blue LED industrial lighting along the ceiling. Wide angle industrial photography, documentary style, slightly desaturated cool tones.",
    aspect_ratio: "16:9",
  },

  // Healthcare: A modern hospital command center with patient
  // monitoring — technology saving lives.
  {
    filename: "industry-healthcare.jpg",
    prompt: "A hospital nurse station with multiple monitors displaying patient information systems. The central large display shows a ward map with room status indicators — green for stable, yellow for attention needed, blue for scheduled procedures. A side monitor shows an automated appointment schedule. Medical equipment with digital readouts in the foreground. A nurse uses a tablet to check patient records. Clean white medical environment with blue accent lighting from the monitors. Sterile, bright medical photography, clinical and organized, natural and artificial mixed lighting.",
    aspect_ratio: "16:9",
  },

  // Finance: A compliance/trading operations room —
  // screens with real financial data and monitoring.
  {
    filename: "industry-finance.jpg",
    prompt: "A financial operations room with a curved desk and six monitors arranged in a semicircle. Screens show: candlestick stock charts, a transaction monitoring dashboard flagging suspicious activities in red, an automated compliance checklist with green checkmarks, a risk heat map of portfolio positions, and a report being auto-generated. The room has dark walls with subtle ambient blue lighting. A glass partition separates it from a bright modern office in the background. Professional financial photography, moody blue-and-amber color grading, shot at eye level across the desk.",
    aspect_ratio: "16:9",
  },

  // Manufacturing: A smart factory floor with robotic arms and
  // quality inspection cameras — industry 4.0 in action.
  {
    filename: "industry-manufacturing.jpg",
    prompt: "A modern smart factory production line photographed from a slightly elevated walkway. Orange robotic arms perform welding on metal components, creating small blue sparks. Above the line: high-speed cameras in black housings perform automated visual quality inspection — a nearby monitor shows a live feed with green bounding boxes around inspected parts and a '99.2% pass rate' indicator. Digital displays along the line show production metrics — units per hour, defect rates, machine utilization bars. Steel and concrete industrial environment with LED strip lighting in blue. Industrial documentary photography, wide angle, dramatic lighting contrast.",
    aspect_ratio: "16:9",
  },

  // Logistics: A distribution hub control room —
  // route optimization and fleet management.
  {
    filename: "industry-logistics.jpg",
    prompt: "A logistics control room with a massive wall-mounted screen showing a live city map with delivery routes — blue dots represent vehicles, green paths show optimized routes, red markers show delayed deliveries. A dispatcher sits at a desk with dual monitors: one showing a fleet management table (vehicle IDs, ETAs, fuel levels), the other showing warehouse inventory levels with reorder alerts. Through a large window behind: a loading dock is visible with trucks being loaded. Functional, utilitarian office environment with overhead fluorescent lighting and blue-accent LED monitors. Professional logistics photography, documentary editorial style.",
    aspect_ratio: "16:9",
  },

  // Retail: Inside a modern store with digital touchpoints —
  // smart shelves, analytics screens.
  {
    filename: "industry-retail.jpg",
    prompt: "Interior of a modern retail clothing store with clean white shelving and warm wood accents. Key tech elements: digital price tags on shelf edges showing dynamic pricing, a large display near the entrance showing 'Recommended for You' product suggestions, and a tablet POS system at the checkout counter showing customer purchase history and loyalty points. A store manager looks at a wall-mounted analytics screen showing foot traffic heatmaps — warmer colors near popular sections. Evening retail lighting: warm spotlights on products, cool ambient from displays. Architectural retail photography, lifestyle commercial style.",
    aspect_ratio: "16:9",
  },

  // Real Estate: A real estate office with virtual tours
  // and CRM — the digital transformation of property sales.
  {
    filename: "industry-real-estate.jpg",
    prompt: "A modern real estate agency office. The focal point: a large curved monitor showing a 3D virtual property tour — a living room rendered in high quality with measurement annotations and clickable hotspots. Next to it: a second monitor shows a CRM lead board with client cards, property matches, and automated follow-up sequences. On the desk: printed property brochures with QR codes, a tablet showing an e-signature interface for a contract. Through the office window: actual buildings visible, connecting digital and physical real estate. Bright, professional office with glass walls, natural light, and a city view. Commercial real estate photography, bright and aspirational.",
    aspect_ratio: "16:9",
  },

  // Education: A smart classroom with interactive tech —
  // AI-powered learning in a real educational setting.
  {
    filename: "industry-education.jpg",
    prompt: "A modern university classroom with tiered seating. The professor's station has a large interactive whiteboard displaying a lesson with diagrams, an AI-generated quiz appearing in a sidebar, and student engagement metrics showing green bars for 85% participation. Students at their desks have tablets showing personalized learning paths — each tablet shows slightly different content adapted to the student's level. A side screen on the wall shows a class analytics dashboard: average scores, at-risk student alerts in amber, learning progress curves. Modern educational architecture with large windows, natural light, birch wood accents, and green plants. Bright, optimistic editorial education photography.",
    aspect_ratio: "16:9",
  },

  // HR: Recruitment and people operations office —
  // the HR tech stack in daily use.
  {
    filename: "industry-hr.jpg",
    prompt: "A modern HR department open office. The main desk has a widescreen monitor showing a recruitment ATS (Applicant Tracking System) — a Kanban board with candidate cards moving through stages: 'Applied' (50 cards), 'AI Screened' (15 cards), 'Interview' (5 cards), 'Offer' (2 cards). A side monitor shows an onboarding checklist dashboard with progress bars for new hires. On the desk: a printed organizational chart, a headset for phone interviews. In the background: a glass meeting room where a video interview is taking place on a large screen. Warm, welcoming office with wood and fabric textures, not clinical. HR workplace photography, warm natural light, editorial style.",
    aspect_ratio: "16:9",
  },
];

// ─── MAIN ────────────────────────────────────────────────

const mode = process.argv[2] || "all"; // "images", "video", or "all"

async function main() {
  console.log("═══════════════════════════════════════════");
  console.log("   LeftFlow Asset Generator (Fal AI)");
  console.log("═══════════════════════════════════════════\n");

  if (mode === "images" || mode === "all") {
    console.log(`\n📸 Generating ${imagePrompts.length} images...\n`);

    // Generate in batches of 3 to avoid rate limits
    for (let i = 0; i < imagePrompts.length; i += 3) {
      const batch = imagePrompts.slice(i, i + 3);
      const results = await Promise.all(
        batch.map((p) =>
          generateImage(p.prompt, p.filename, {
            aspect_ratio: p.aspect_ratio,
            resolution: p.resolution || "1K",
          })
        )
      );
      console.log(`  Batch ${Math.floor(i / 3) + 1}/${Math.ceil(imagePrompts.length / 3)} done\n`);
      // Small delay between batches
      if (i + 3 < imagePrompts.length) {
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  }

  if (mode === "video" || mode === "all") {
    console.log("\n🎬 Generating hero video with veo3...\n");
    await generateVideo(
      "Cinematic wide shot of a futuristic AI command center. Dark environment with blue and purple glowing holographic displays showing data flows, automation workflows, and analytics charts floating in the air. Camera slowly pans across the space. Smooth, flowing data streams connecting different dashboards. No people. Ultra clean, minimal tech aesthetic. Film quality, 4K cinematic look.",
      "hero-ai.mp4",
      { aspect_ratio: "16:9", duration: "8s" }
    );
  }

  console.log("\n═══════════════════════════════════════════");
  console.log("   ✅ Generation complete!");
  console.log("═══════════════════════════════════════════");
}

main().catch(console.error);
