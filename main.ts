// One Letter for Your Day — entry for make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// The task: write exactly ONE letter to /output/entry.txt —
// the first letter of a word that describes your day.
// This entry picks "Z": zero sleep.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z"; // zero sleep

// Guard: the sealed scorer only accepts exactly one character.
// Refuse to write anything else rather than produce an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
