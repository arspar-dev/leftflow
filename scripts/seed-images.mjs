/**
 * Image Seed Script - Generates images via Fal.ai, downloads to public/images/
 * Budget: 20 images (out of 40 max)
 */

import * as fal from "@fal-ai/serverless-client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../public/images");

fal.config({
  credentials: "8d511c43-a1e4-4b8e-ba9f-4a68e19f19be:f0f1af24123be31f3f46ba63d97a4b5c",
});

const images = [
  { key: "hero", prompt: "Modern AI-powered office workspace with holographic blue data visualizations floating in air, sleek minimalist design, soft blue ambient lighting, futuristic yet professional" },
  { key: "about-team", prompt: "Diverse professional tech team collaborating around a modern table with laptops and digital screens, warm natural lighting, corporate photography, candid moment" },
  { key: "data-intelligence", prompt: "Abstract flowing data streams transforming from raw chaotic particles into organized crystal-clear insights, blue and indigo color palette, digital art, clean background" },
  { key: "industry-ecommerce", prompt: "Modern automated e-commerce fulfillment center with conveyor belts and robotic sorting arms, digital order screens glowing blue, wide angle, cinematic" },
  { key: "industry-healthcare", prompt: "Modern hospital reception area with sleek digital check-in kiosks, clean white and blue interior, AI-powered patient flow display, professional medical environment" },
  { key: "industry-finance", prompt: "Modern fintech trading desk with multiple curved monitors displaying financial charts and AI analytics, dark blue ambient lighting, professional" },
  { key: "industry-manufacturing", prompt: "Smart factory production line with robotic arms and real-time quality control displays, blue LED lighting, industrial automation, high-tech manufacturing" },
  { key: "industry-logistics", prompt: "Aerial view of modern logistics distribution hub with automated sorting systems and delivery fleet, digital route maps overlay, professional, blue tones" },
  { key: "industry-retail", prompt: "Modern retail store interior with AI-powered digital signage and smart shelves, customer analytics display, warm professional lighting, high-tech shopping" },
  { key: "industry-real-estate", prompt: "Modern real estate agency with large screens showing 3D virtual property tours and market analytics dashboard, professional office, natural light" },
  { key: "industry-education", prompt: "Modern smart classroom with interactive digital whiteboard, students engaged with tablet learning, AI analytics on teacher dashboard, bright educational space" },
  { key: "industry-hr", prompt: "Modern HR office with AI recruitment dashboard showing candidate profiles and analytics, clean professional workspace, warm corporate lighting" },
  { key: "blog-ecommerce-order-automation-guide", prompt: "Clean dashboard interface showing automated e-commerce order workflow with status tracking, blue accent UI, professional tech screenshot style" },
  { key: "blog-healthcare-ai-appointment-management", prompt: "Digital medical appointment scheduling interface on tablet screen in clinic waiting room, clean modern healthcare environment, blue accents" },
  { key: "blog-data-silos-holding-companies-back", prompt: "Abstract visualization of isolated data clusters breaking free and connecting into unified flowing data network, blue and purple digital art" },
  { key: "blog-logistics-automation-roi", prompt: "Logistics control center with large wall display showing fleet tracking map and ROI metrics dashboard, professional, blue tones, cinematic" },
  { key: "blog-hr-recruitment-automation", prompt: "AI-powered resume screening interface on laptop screen in modern office, candidate matching visualization, professional corporate setting" },
  { key: "blog-business-automation-trends-2025", prompt: "Futuristic workspace with floating holographic UI panels showing automation workflow trends, blue and white color scheme, clean and modern" },
  { key: "blog-small-business-automation-starter-guide", prompt: "Small business owner at clean modern desk with laptop showing simple automation dashboard, warm natural light, approachable professional setting" },
  { key: "blog-finance-compliance-automation", prompt: "Financial compliance monitoring center with screens showing regulatory tracking and automated risk alerts, professional blue-lit environment" },
];

async function generateAndDownload(entry) {
  // Generate via Fal.ai
  const result = await fal.run("fal-ai/flux/dev", {
    input: {
      prompt: `${entry.prompt}, cinematic, high quality, 4k, photorealistic`,
      image_size: "landscape_16_9",
      num_images: 1,
    },
  });

  const imageUrl = result.images[0].url;

  // Download image
  const response = await fetch(imageUrl);
  const buffer = Buffer.from(await response.arrayBuffer());
  const filePath = path.join(OUTPUT_DIR, `${entry.key}.jpg`);
  fs.writeFileSync(filePath, buffer);

  return filePath;
}

async function main() {
  console.log(`\n🎨 LeftFlow Image Generation`);
  console.log(`📊 Images to generate: ${images.length}/40 budget\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = {};
  let done = 0;

  for (const entry of images) {
    const filePath = path.join(OUTPUT_DIR, `${entry.key}.jpg`);

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skip: ${entry.key} (exists)`);
      results[entry.key] = `/images/${entry.key}.jpg`;
      done++;
      continue;
    }

    try {
      console.log(`🖼️  [${done + 1}/${images.length}] Generating: ${entry.key}...`);
      await generateAndDownload(entry);
      results[entry.key] = `/images/${entry.key}.jpg`;
      done++;
      console.log(`   ✅ Done`);

      // Rate limit: 2s between requests
      await new Promise((r) => setTimeout(r, 2000));
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
    }
  }

  // Save mapping
  const jsonPath = path.resolve(__dirname, "../content/images.json");
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));

  console.log(`\n✨ Complete! ${done}/${images.length} images generated`);
  console.log(`📁 Saved to: public/images/`);
  console.log(`📋 Mapping: content/images.json\n`);
}

main().catch(console.error);
