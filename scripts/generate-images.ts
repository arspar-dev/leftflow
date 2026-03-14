/**
 * Image Generation Seed Script
 *
 * Generates all site images via Fal.ai and saves URLs to content/images.json
 * Budget: Max 40 images total
 *
 * Usage: npx ts-node scripts/generate-images.ts
 *
 * Note: Requires FAL_KEY in .env.local
 * Optional: BLOB_READ_WRITE_TOKEN for Vercel Blob storage
 */

import * as fal from "@fal-ai/serverless-client";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load env
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

fal.config({
  credentials: process.env.FAL_KEY,
});

interface ImageEntry {
  key: string;
  prompt: string;
  url?: string;
}

// Image budget: 40 total
// - 1 hero image
// - 9 industry images
// - 8 blog cover images
// - 4 misc (about, data-intelligence, etc.)
// Total: 22 images (well within budget)

const imageEntries: ImageEntry[] = [
  // Hero
  {
    key: "hero",
    prompt: "Modern AI-powered office workspace with holographic displays showing automation workflows, blue and white color scheme, futuristic yet professional, cinematic lighting",
  },
  // About
  {
    key: "about-team",
    prompt: "Diverse professional tech team in modern office space collaborating on AI project, warm lighting, corporate photography style",
  },
  // Data Intelligence
  {
    key: "data-intelligence",
    prompt: "Abstract data visualization with flowing streams of data transforming into insights, blue digital art, modern corporate, futuristic dashboard",
  },
  // Industries
  {
    key: "industry-ecommerce",
    prompt: "Modern e-commerce warehouse with automated conveyor belts and robotic arms, digital screens showing order tracking dashboards, cinematic lighting, professional, blue and white color scheme",
  },
  {
    key: "industry-healthcare",
    prompt: "Modern hospital reception with digital check-in screens, clean white and blue medical environment, professional healthcare technology",
  },
  {
    key: "industry-finance",
    prompt: "Modern financial trading floor with multiple screens showing charts and data analytics, blue-lit environment, professional, futuristic finance",
  },
  {
    key: "industry-manufacturing",
    prompt: "Modern smart factory with robotic arms on assembly line, digital quality control displays, industrial automation, blue tones",
  },
  {
    key: "industry-logistics",
    prompt: "Modern logistics hub with automated sorting systems, delivery trucks with GPS tracking, digital route optimization map, professional",
  },
  {
    key: "industry-retail",
    prompt: "Modern retail store with digital price tags and AI-powered analytics screens, customer engagement technology, warm lighting",
  },
  {
    key: "industry-real-estate",
    prompt: "Modern real estate office with digital property displays, virtual property tour setup, CRM dashboard on screen, professional",
  },
  {
    key: "industry-education",
    prompt: "Modern smart classroom with interactive digital boards, students using tablets, AI-powered learning analytics on teacher screen",
  },
  {
    key: "industry-hr",
    prompt: "Modern HR office with AI-powered recruitment dashboard, video interview setup, digital onboarding screens, warm corporate tones",
  },
  // Blog covers
  {
    key: "blog-ecommerce-order-automation-guide",
    prompt: "Modern e-commerce dashboard showing automated order processing workflow, digital screens with charts, professional business technology",
  },
  {
    key: "blog-healthcare-ai-appointment-management",
    prompt: "Modern hospital reception with AI-powered digital appointment system, clean medical environment, professional healthcare",
  },
  {
    key: "blog-data-silos-holding-companies-back",
    prompt: "Abstract data visualization showing disconnected data silos transforming into connected streams, blue digital art",
  },
  {
    key: "blog-logistics-automation-roi",
    prompt: "Modern logistics control room with multiple screens showing route optimization and fleet management, professional corporate",
  },
  {
    key: "blog-hr-recruitment-automation",
    prompt: "Modern HR office with AI recruitment dashboard, resume screening interface, professional corporate technology",
  },
  {
    key: "blog-business-automation-trends-2025",
    prompt: "Futuristic office with holographic displays showing automation trends and AI dashboards, blue tones, professional",
  },
  {
    key: "blog-small-business-automation-starter-guide",
    prompt: "Small business owner at desk with laptop showing automation workflow dashboard, warm office environment, professional",
  },
  {
    key: "blog-finance-compliance-automation",
    prompt: "Modern finance office with compliance monitoring screens and automated reporting dashboards, blue corporate tones",
  },
];

async function generateImage(prompt: string): Promise<string> {
  const result = await fal.run("fal-ai/flux/dev", {
    input: {
      prompt: `${prompt}, cinematic, professional, high quality, modern corporate`,
      image_size: "landscape_16_9",
      num_images: 1,
    },
  });
  return (result as any).images[0].url;
}

async function main() {
  console.log(`\n🎨 LeftFlow Image Generation Script`);
  console.log(`📊 Total images to generate: ${imageEntries.length}`);
  console.log(`💰 Budget: 40 max | Using: ${imageEntries.length}\n`);

  const outputPath = path.resolve(__dirname, "../content/images.json");

  // Load existing images if any
  let existingImages: Record<string, string> = {};
  if (fs.existsSync(outputPath)) {
    existingImages = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    console.log(`📂 Found ${Object.keys(existingImages).length} existing images\n`);
  }

  const images: Record<string, string> = { ...existingImages };
  let generated = 0;
  let skipped = 0;

  for (const entry of imageEntries) {
    if (images[entry.key]) {
      console.log(`⏭️  Skipping "${entry.key}" (already exists)`);
      skipped++;
      continue;
    }

    try {
      console.log(`🖼️  Generating "${entry.key}"...`);
      const url = await generateImage(entry.prompt);
      images[entry.key] = url;
      generated++;
      console.log(`✅ Done! (${generated}/${imageEntries.length - skipped})`);

      // Save after each generation to avoid losing progress
      fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

      // Rate limiting - wait 2 seconds between requests
      if (generated < imageEntries.length - skipped) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    } catch (error) {
      console.error(`❌ Failed "${entry.key}":`, error);
    }
  }

  console.log(`\n✨ Done! Generated ${generated} images, skipped ${skipped}`);
  console.log(`📁 Saved to: ${outputPath}\n`);
}

main().catch(console.error);
