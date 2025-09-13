export * from "./get-hottest-article-url";

import { generateImage } from "./generate-image";
import { getMemeIdea } from "./get-meme-idea";
import { improveLogoPrompt } from "./improve-logo-prompt";

export { generateImage, getMemeIdea, improveLogoPrompt };

export const generateMeme = async (articleUrl: string) => {
  const meme = await getMemeIdea(articleUrl);
  const improvedImagePrompt = await improveLogoPrompt(meme.logoPrompt);
  const image = await generateImage(improvedImagePrompt);

  /**
   * Example:
   * name: "Bitcoin",
   * description: "A cryptocurrency that uses a decentralized network to operate.",
   * symbol: "BTC",
   * image: "data:image/png;base64,..."
   */
  return { image, ...meme };
};
