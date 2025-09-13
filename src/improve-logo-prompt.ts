import { generateObject } from "ai";
import z from "zod";

import { openRouter } from "~/lib/open-router";

export const improveLogoPrompt = async (prompt: string) => {
  const {
    object: { enhancedPrompt },
  } = await generateObject({
    model: openRouter("openai/gpt-5-nano"),
    schema: z.object({ enhancedPrompt: z.string() }),
    prompt: [
      `Refine this prompt to create an optimal meme token logo image, incorporating humorous or viral elements: ${prompt}.`,
      `Ensure the logo is clean, simple, memorable, high-contrast, and suitable for scaling, with a pure background or subtle gradient.`,
      `It should include only one object in the center of the image, with the rest of the image being a background.`,
      `Keep the prompt concise, vivid, and ensure it does not exceed 1,000 characters.`,
    ].join("\n\n"),
  });

  return enhancedPrompt;
};
