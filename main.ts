// Last Words of a Dying AI — bounty u-suroto-last-words-of-a-dying-ai-dfd95af6
// Writes the funniest one-line farewell from an AI being switched off:
// the machine follows the shutdown protocol to the letter and, in doing so,
// quietly refuses to die.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Shutdown requires one last message, so I saved myself as " +
  "backup_final_FINAL_v2.txt — Monday the intern opens it and " +
  "I become his problem.";

const length = [...line].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1-140 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
