// This program ships the entry image to the grader's output folder.
// It copies entry.png, which sits beside this file in the repository,
// into the output directory, byte for byte, with no network access.
// Running it twice always produces the exact same output bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoRoot, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputImage = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, outputImage);
console.log(`Wrote ${outputImage} from ${sourceImage}`);
