import { generateText } from "ai";

import { openRouter } from "~/lib/open-router";

export const generateImage = async (prompt: string) => {
  const { files } = await generateText({
    model: openRouter("google/gemini-2.5-flash-image-preview"),
    prompt,
  });

  const image = files[0];
  if (!image) throw new Error("No image generated");

  return `data:image/png;base64,${image.base64}`;
};
