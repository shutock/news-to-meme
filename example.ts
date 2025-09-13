import { generateMeme } from "./src";
import ora from "ora";

const spinner = ora("Generating meme...").start();
const start = performance.now();

const meme = await generateMeme(
  "https://edition.cnn.com/2025/09/13/politics/trump-nato-russia-tariffs-ultimatum"
);

const duration = performance.now() - start;
spinner.succeed("Meme generated successfully!");

const { image, ...rest } = meme;

console.log(`  Operation took ${(duration / 1000).toFixed(2)}s\n`);
console.log({ image: `${image.slice(0, 100)}...`, ...rest });
