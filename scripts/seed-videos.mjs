/**
 * Video Seed Script - Generates videos via Fal.ai
 * Step 1: Generate base image with Nano Banana 2
 * Step 2: Convert image to video with Veo 3
 * Budget: 3 videos (out of 10 max)
 */

import * as fal from "@fal-ai/serverless-client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../public/videos");

fal.config({
  credentials: "8d511c43-a1e4-4b8e-ba9f-4a68e19f19be:f0f1af24123be31f3f46ba63d97a4b5c",
});

const videos = [
  {
    key: "automation-showcase",
    imagePrompt: "Professional motion graphics frame showing an AI automation dashboard with flowing data connections between multiple business systems, glowing blue neural network lines, clean dark interface with bright accent elements, 16:9 cinematic composition, high quality",
    videoPrompt: "Smooth camera zoom into the dashboard, data streams flowing between systems with glowing particles, charts animating and updating in real-time, neural network connections pulsing with light, professional motion graphics style, seamless loop",
  },
  {
    key: "data-intelligence-motion",
    imagePrompt: "Abstract data visualization showing raw data particles on the left transforming into organized charts, graphs and crystal-clear insights on the right, blue and indigo color palette, dark background, professional motion graphics frame, cinematic",
    videoPrompt: "Raw data particles flowing from left to right, morphing and organizing into beautiful charts and graphs, smooth particle animation, colors shifting from chaotic to organized blue palette, professional motion graphics, cinematic camera movement",
  },
  {
    key: "ai-workflow-demo",
    imagePrompt: "Clean modern workflow automation diagram showing connected nodes with icons for email, chat, analytics and CRM, floating in a 3D space with soft blue glow, professional UI design, dark background, motion graphics style",
    videoPrompt: "Workflow nodes lighting up sequentially as data flows between them, animated connections with glowing particles traveling along paths, smooth 3D camera orbit, each node pulses when activated, professional motion graphics, clean and modern",
  },
  // Phase 2: Service motion graphic videos
  {
    key: "service-content-generation",
    imagePrompt: "Professional motion graphic dark dashboard showing AI content generation pipeline, text being generated on screen, neural network data flow, dark navy blue and black, corporate consulting style, glowing blue accent lines, 16:9 cinematic",
    videoPrompt: "Smooth animation of AI generating text content on dashboard screens, data particles flowing through neural network pathways, text appearing and formatting in real-time, charts updating, professional motion graphics style, dark corporate atmosphere",
  },
  {
    key: "service-ai-agents",
    imagePrompt: "Professional dark interface showing AI chatbot agent responding to messages, conversation bubbles, connected service integrations, dark navy blue background, corporate tech, glowing connections, 16:9 cinematic",
    videoPrompt: "Smooth animation of AI chatbot responding with text appearing in bubbles, service connection lines lighting up, integration nodes pulsing with activity, professional motion graphics, clean corporate aesthetic",
  },
  {
    key: "service-workflow-automation",
    imagePrompt: "Professional dark dashboard showing workflow automation nodes connected by data flow lines, efficiency metrics and KPI panels, dark blue and black, corporate style, neon blue accents, 16:9 cinematic",
    videoPrompt: "Smooth animation of workflow nodes activating sequentially, data flowing through automation pipeline, efficiency metrics counting up, progress bars filling, professional motion graphics, dark corporate theme",
  },
  {
    key: "service-llm-development",
    imagePrompt: "Professional visualization of large language model neural network architecture, transformer layers with data flowing through, training metrics dashboard, dark navy, enterprise tech, glowing nodes, 16:9 cinematic",
    videoPrompt: "Smooth animation of neural network layers activating with data flowing through transformer blocks, training loss decreasing on chart, accuracy improving, model architecture visualization pulsing, professional motion graphics",
  },
  {
    key: "hero-motion",
    imagePrompt: "Professional dark corporate hero visual with abstract AI neural network patterns, flowing data particles and light trails, dark navy blue to black gradient, premium consulting aesthetic, subtle blue glow, 16:9 cinematic",
    videoPrompt: "Smooth cinematic animation of abstract AI technology patterns, subtle particle movement flowing through neural pathways, light trails gently animating, premium corporate atmosphere, slow elegant camera movement",
  },
  {
    key: "process-motion",
    imagePrompt: "Professional dark infographic showing 4-step business automation process with connected stages, glowing icons and data flow lines, dark blue gradient, McKinsey consulting style, premium dark theme, 16:9 cinematic",
    videoPrompt: "Smooth animation of business process steps lighting up one by one sequentially, data flowing between stages with glowing particles, icons animating as each step activates, professional motion graphics, corporate style",
  },
];

async function generateVideo(entry) {
  // Step 1: Generate base image with Nano Banana 2
  console.log(`   📸 Generating base image...`);
  const imgResult = await fal.run("fal-ai/nano-banana-2", {
    input: {
      prompt: entry.imagePrompt,
      aspect_ratio: "16:9",
      resolution: "2K",
      output_format: "jpeg",
      num_images: 1,
    },
  });

  const imageUrl = imgResult.images[0].url;
  console.log(`   ✅ Base image generated`);

  // Step 2: Convert to video with Veo 3
  console.log(`   🎬 Converting to video with Veo 3...`);
  const vidResult = await fal.subscribe("fal-ai/veo3/image-to-video", {
    input: {
      prompt: entry.videoPrompt,
      image_url: imageUrl,
      aspect_ratio: "16:9",
      duration: "6s",
      resolution: "720p",
      generate_audio: false,
    },
    logs: true,
    onQueueUpdate(update) {
      if (update.status === "IN_PROGRESS") {
        const logs = update.logs || [];
        if (logs.length > 0) {
          console.log(`   ⏳ ${logs[logs.length - 1].message}`);
        }
      }
    },
  });

  const videoUrl = vidResult.video.url;
  console.log(`   ✅ Video generated`);

  // Step 3: Download video
  console.log(`   💾 Downloading...`);
  const response = await fetch(videoUrl);
  const buffer = Buffer.from(await response.arrayBuffer());
  const filePath = path.join(OUTPUT_DIR, `${entry.key}.mp4`);
  fs.writeFileSync(filePath, buffer);

  return filePath;
}

async function main() {
  console.log(`\n🎬 LeftFlow Video Generation`);
  console.log(`📊 Videos to generate: ${videos.length}/10 budget\n`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let done = 0;

  for (const entry of videos) {
    const filePath = path.join(OUTPUT_DIR, `${entry.key}.mp4`);

    // Skip if already exists
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  Skip: ${entry.key} (exists)`);
      done++;
      continue;
    }

    try {
      console.log(`🎥 [${done + 1}/${videos.length}] Generating: ${entry.key}...`);
      await generateVideo(entry);
      done++;
      console.log(`   ✅ Complete!\n`);

      // Rate limit: 3s between requests
      await new Promise((r) => setTimeout(r, 3000));
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log(`\n✨ Complete! ${done}/${videos.length} videos generated`);
  console.log(`📁 Saved to: public/videos/\n`);
}

main().catch(console.error);
