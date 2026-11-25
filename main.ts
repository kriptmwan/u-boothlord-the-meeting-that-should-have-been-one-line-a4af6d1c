// The Meeting That Should Have Been One Line.
// One sentence that could have replaced an entire pointless meeting:
// the decision was already made before anyone sat down, and the
// meeting itself was only the ceremony where we pretended to make it.
// The sting is the double move: "hallway" says the real decision
// happened elsewhere, "ceremony" says the meeting was pure theatre.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The decision was made in the hallway before we sat down; this meeting was just the ceremony where we pretended to make it.";

// Gate (kit RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
