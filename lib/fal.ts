import * as fal from "@fal-ai/serverless-client";

fal.config({
  credentials: process.env.FAL_KEY,
});

interface GenerateImageOptions {
  prompt: string;
  imageSize?: string;
}

export async function generateImage({
  prompt,
  imageSize = "landscape_16_9",
}: GenerateImageOptions): Promise<string> {
  const result = await fal.run("fal-ai/flux/dev", {
    input: {
      prompt: `${prompt}, cinematic, professional, high quality, modern corporate`,
      image_size: imageSize,
      num_images: 1,
    },
  });

  return (result as any).images[0].url;
}
