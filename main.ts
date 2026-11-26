import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8").trimEnd();

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
const charCount = [...entry].length;
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry + "\n", "utf8");
console.log(`Entry delivered (${charCount} chars) to ${outPath}`);
