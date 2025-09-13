import { generateMeme, getHottestArticleUrl } from "./src";
import ora from "ora";

const spinner = ora("🔍 Finding the hottest news article...").start();
const start = performance.now();

const articleUrl = await getHottestArticleUrl();
spinner.text = "🎨 Generating meme from the article...";

const meme = await generateMeme(articleUrl);

const duration = performance.now() - start;
spinner.succeed("✨ Meme generated successfully!");

const { image, ...rest } = meme;

console.log(`  ⏱️ Operation took ${(duration / 1000).toFixed(2)}s\n`);
console.log({ image: `${image.slice(0, 100)}...`, ...rest });
