import { generateObject } from "ai";
import z from "zod";

import { openRouter } from "~/lib/open-router";

export const getMemeIdea = async (prompt: string) => {
  const { object } = await generateObject({
    model: openRouter("openai/gpt-5-nano"),
    prompt: [
      `Analyze this news article: ${prompt}`,
      `Create an innovative, viral-worthy and a really degen meme concept that cleverly captures the essence of this news story.`,
      [
        `Meme Requirements:`,
        `- Witty and culturally relevant humor`,
        `- Clear connection to the article's key message`,
        `- Universal appeal and instant understanding`,
        `- High viral potential for social media`,
        `- Potential to spark engagement and sharing`,
      ].join("\n"),
      [
        `Logo Requirements:`,
        `- Simple yet distinctive visual elements`,
        `- Strong thematic connection to the meme`,
        `- Scalable design that maintains clarity`,
        `- Memorable and instantly recognizable`,
        `- Effective in both color and monochrome`,
      ].join("\n"),
      [
        `Additional Guidelines:`,
        `- Symbol: Create a memorable 3-4 letter token symbol (e.g., "BTC" for Bitcoin)`,
        `- Description: Craft a concise, humorous explanation that captures the meme's essence`,
        `- Name: Design a catchy, memorable title that reflects the meme's theme`,
        `- Consider current meme trends and formats`,
        `- Ensure the concept has potential for variations and remixes`,
      ].join("\n"),
    ].join("\n\n"),
    schema: z.object({
      description: z.string(),
      name: z.string(),
      symbol: z.string(),
      logoPrompt: z.string(),
    }),
  });

  return object;
};
