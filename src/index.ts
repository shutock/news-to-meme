import { generateImage, getMemeIdea, improveLogoPrompt } from "./llm";

export const generateMeme = async (prompt: string) => {
  const { description, logoPrompt, name, symbol } = await getMemeIdea(prompt);
  const improvedImagePrompt = await improveLogoPrompt(logoPrompt);
  const image = await generateImage(improvedImagePrompt);

  /**
   * Example:
   * name: "Bitcoin",
   * description: "A cryptocurrency that uses a decentralized network to operate.",
   * symbol: "BTC",
   * image: "data:image/png;base64,..."
   */
  return { description, image, name, symbol };
};
