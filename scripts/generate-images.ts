/**
 * Professional Image Generation Script - Happy Horizon Style
 *
 * Generates photorealistic corporate imagery via Fal.ai
 * Uses prompts designed for professional agency photography
 *
 * Usage: npx ts-node scripts/generate-images.ts
 */

import * as fal from "@fal-ai/serverless-client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

fal.config({
  credentials: process.env.FAL_KEY,
});

interface ImageEntry {
  key: string;
  prompt: string;
  url?: string;
}

const imageEntries: ImageEntry[] = [
  // Hero - Happy Horizon style team photo
  {
    key: "hero",
    prompt: "Professional corporate team photo in a bright modern office space, diverse group of 8 people smiling at camera, natural daylight through large windows, contemporary minimal office interior with white walls and wooden accents, shot on Canon EOS R5, 35mm f/1.8, editorial photography, warm natural tones, shallow depth of field",
  },
  // About team
  {
    key: "about-team",
    prompt: "Group of young creative professionals collaborating around a large table in a bright open-plan office, laptops and notebooks on table, some standing some sitting, casual business attire, natural daylight, candid moment of discussion and laughter, modern Scandinavian interior, editorial photography, warm tones, shot on Sony A7IV",
  },
  // Data Intelligence
  {
    key: "data-intelligence",
    prompt: "Professional business analyst presenting data dashboard on a large screen to colleagues in a modern meeting room, clean minimal office, data visualization charts visible on screen, natural lighting, corporate photography, neutral color palette, shot on Canon EOS R5",
  },
  // Industries
  {
    key: "industry-ecommerce",
    prompt: "Modern e-commerce fulfillment center with organized shelves, a professional worker scanning packages with a tablet, clean bright industrial space, natural lighting from skylights, professional photography, neutral tones, editorial quality",
  },
  {
    key: "industry-healthcare",
    prompt: "Modern healthcare reception area with a professional receptionist helping a patient at a clean white desk, digital check-in screen visible, bright clinical interior, natural daylight, professional healthcare photography, clean and minimal",
  },
  {
    key: "industry-finance",
    prompt: "Professional financial advisor in a sleek modern office reviewing documents with a client, clean desk with laptop showing charts, floor-to-ceiling windows with city skyline, natural light, corporate photography, neutral professional tones",
  },
  {
    key: "industry-manufacturing",
    prompt: "Modern smart factory floor with a professional engineer in clean workwear inspecting automated machinery, bright well-lit industrial space, digital control panels visible, professional industrial photography, clean composition",
  },
  {
    key: "industry-logistics",
    prompt: "Modern logistics command center with a professional logistics coordinator at a workstation with multiple screens showing maps and routes, clean bright office, professional corporate photography, natural daylight",
  },
  {
    key: "industry-retail",
    prompt: "Modern retail store interior with a professional store manager reviewing inventory on a tablet, clean contemporary retail space with products on minimal shelving, warm natural lighting, professional retail photography",
  },
  {
    key: "industry-real-estate",
    prompt: "Professional real estate agent showing a modern apartment to clients, bright spacious interior with large windows, city views, contemporary furnishing, professional real estate photography, natural daylight, warm tones",
  },
  {
    key: "industry-education",
    prompt: "Modern university lecture hall with students working on laptops, professor at front with digital presentation board, bright academic interior, natural lighting, professional educational photography, clean composition",
  },
  {
    key: "industry-hr",
    prompt: "Professional HR manager conducting an interview with a candidate in a bright modern office meeting room, glass walls, contemporary furniture, natural daylight, corporate photography, warm professional atmosphere",
  },
  // Blog covers - professional editorial photography
  {
    key: "blog-ecommerce-order-automation-guide",
    prompt: "Close-up of a professional using a laptop showing an e-commerce dashboard with order management interface, clean desk setup, coffee cup nearby, bright natural light from window, editorial photography, warm tones, shallow depth of field",
  },
  {
    key: "blog-healthcare-ai-appointment-management",
    prompt: "Healthcare professional in white coat using a modern tablet device in a bright hospital corridor, clean clinical environment, blurred background with other staff, professional medical photography, natural lighting",
  },
  {
    key: "blog-data-silos-holding-companies-back",
    prompt: "Overhead view of a team meeting in a modern conference room, papers and laptops on a large wooden table, people discussing and pointing at documents, bright natural daylight from above, professional bird's-eye corporate photography",
  },
  {
    key: "blog-logistics-automation-roi",
    prompt: "Professional delivery truck driver checking packages with a handheld scanner at a modern loading dock, clean organized warehouse in background, bright daylight, professional logistics photography, clean composition",
  },
  {
    key: "blog-hr-recruitment-automation",
    prompt: "Professional recruiter reviewing resumes on a laptop in a bright modern office, comfortable workspace with plants and natural light, shallow depth of field, editorial corporate photography, warm inviting atmosphere",
  },
  {
    key: "blog-business-automation-trends-2025",
    prompt: "Modern open-plan tech office with professionals working at standing desks, multiple screens visible, bright contemporary workspace with indoor plants, natural daylight, wide-angle editorial photography, clean minimal aesthetic",
  },
  {
    key: "blog-small-business-automation-starter-guide",
    prompt: "Small business owner at a clean desk with laptop and notebook, focusing on screen, cozy but professional home office setup, warm natural window light, shallow depth of field, lifestyle editorial photography",
  },
  {
    key: "blog-finance-compliance-automation",
    prompt: "Professional in a suit working at a clean modern desk with dual monitors showing financial charts, contemporary office with city view through window, warm professional lighting, corporate photography, neutral tones",
  },
  // Service images
  {
    key: "service-content-generation",
    prompt: "Creative professional writing on a laptop in a bright modern studio space, colorful mood boards on wall behind, artistic but professional atmosphere, natural lighting, editorial photography, warm creative tones",
  },
  {
    key: "service-ai-agents",
    prompt: "Two tech professionals discussing code on a large screen in a modern development office, standing at a whiteboard with diagrams, bright contemporary tech office, natural daylight, professional tech photography",
  },
  {
    key: "service-workflow-automation",
    prompt: "Professional working at a clean minimalist desk with multiple organized screens showing workflow diagrams and dashboards, bright modern office, natural light, clean professional photography, focused composition",
  },
  {
    key: "service-llm-development",
    prompt: "Developer team pair-programming at a modern workstation, code visible on ultra-wide monitor, bright tech office with exposed brick and industrial modern design, natural daylight, professional tech editorial photography",
  },
];

async function generateImage(prompt: string): Promise<string> {
  const result = await fal.run("fal-ai/flux/dev", {
    input: {
      prompt: `${prompt}, photorealistic, high resolution, 8k quality, professional photography`,
      image_size: "landscape_16_9",
      num_images: 1,
      num_inference_steps: 28,
      guidance_scale: 3.5,
    },
  });
  return (result as any).images[0].url;
}

async function downloadImage(url: string, filepath: string): Promise<void> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));
}

async function main() {
  console.log(`\n🎨 LeftFlow Professional Image Generation`);
  console.log(`📊 Total images: ${imageEntries.length}`);
  console.log(`🎯 Style: Happy Horizon corporate photography\n`);

  const imagesDir = path.resolve(__dirname, "../public/images");
  const outputPath = path.resolve(__dirname, "../content/images.json");

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  let existingImages: Record<string, string> = {};
  if (fs.existsSync(outputPath)) {
    existingImages = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    console.log(`📂 Found ${Object.keys(existingImages).length} existing images\n`);
  }

  const images: Record<string, string> = { ...existingImages };
  let generated = 0;
  let skipped = 0;

  for (const entry of imageEntries) {
    // Always regenerate to get professional quality
    try {
      console.log(`🖼️  Generating "${entry.key}"...`);
      const url = await generateImage(entry.prompt);

      // Download to public/images/
      const filename = `${entry.key}.jpg`;
      const filepath = path.join(imagesDir, filename);
      await downloadImage(url, filepath);

      images[entry.key] = `/images/${filename}`;
      generated++;
      console.log(`✅ Done! (${generated}/${imageEntries.length})`);

      fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

      // Rate limiting
      if (generated < imageEntries.length) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    } catch (error) {
      console.error(`❌ Failed "${entry.key}":`, error);
    }
  }

  console.log(`\n✨ Done! Generated ${generated} professional images`);
  console.log(`📁 Saved to: ${imagesDir}\n`);
}

main().catch(console.error);
