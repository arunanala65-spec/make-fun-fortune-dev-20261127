import * as fs from "node:fs";
import * as path from "node:path";

// One original fortune-cookie line for a software developer.
// The legacy code you curse was someone else's Friday rush —
// tomorrow, that someone is you.
const LINE =
  "The legacy code you curse was written by someone in a hurry — tomorrow, that someone is you.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 120) {
    throw new Error(`entry must be 1-120 characters, got ${LINE.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
