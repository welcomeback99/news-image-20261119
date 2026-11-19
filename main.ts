import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(targetDir, "entry.png");

// The copy is byte-for-byte, so repeated runs always produce
// an identical file in the destination folder.
await mkdir(targetDir, { recursive: true });
await copyFile(source, target);
