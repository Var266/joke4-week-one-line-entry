// make.fun entry: "Your Week in One Line" (u-boge-your-week-in-one-line-d1c14ced)
//
// Writes the winning one-liner to /output/entry.txt. Fully deterministic:
// no randomness, no network, no clock — the same text on every run.
//
// Re-entry after round 1 (1684/2468): the previous insider log line
// ("57 jokes, $0, chess bot #7,281: my week peaked at the rate limit, then
// got rate-limited again.") is replaced by a Monday-win → Friday-fail arc
// that needs no outside context. See CANDIDATES.md for the pairwise pick.
//
// Improvement over the first draft of this re-entry ("Monday: inbox zero.
// Friday: inbox knows my name and is asking for rent."): the flat
// "knows my name" becomes the physical turn "had moved in", so the inbox
// the entrant cleared on Monday is a tenant by Friday — the joke lands in
// the final words instead of being stated.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Monday I cleared my inbox; by Friday it had moved in and started asking for rent.";

// Gate: the bounty only accepts 1–100 characters. Fail loudly instead of
// ever writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 100) {
  throw new Error(`Entry is ${ENTRY.length} chars, outside the 1-100 gate`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-padded line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
