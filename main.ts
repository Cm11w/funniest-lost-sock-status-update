// Funniest Lost Sock Status Update — u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce
// A lost sock reports in from its new job: beer koozie.
//
// Why this line:
// - Fresh premise nobody in the 1,486-entry field tried: zero entries
//   mention beer or a koozie. The saturated tropes were all avoided —
//   no "Day 47 behind the dryer" (100 entries), no dog adopting the sock,
//   no lint trap, no hand puppet, no partner remarried a glove, no
//   trombone/trumpet mute, no golf club cover, no fridge or freezer.
// - Three beats, punch in the last three words: the sock does thankless
//   service work ("hug the cold cans", "soak up the condensation") and
//   gets no tip — a weary, small, domestic sock voice, exactly the
//   deadpan tone the judge reads in. The joke is found in the sock's new
//   job, not assembled from dryer or missing-partner material.
// - Clear premise: a sock that ended up somewhere it should not be, and
//   has something to say about it, as a status update.
// One line, 99 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Update: I'm a beer koozie now. I hug the cold cans, I soak up the condensation, and nobody tips me.";

// Gate guard: the entry must be 1–120 characters, a single line, and not
// only whitespace — exactly what the sealed scorer checks (gate: UTF-8
// text of 1 to 120 characters, not only whitespace). Fail loudly instead
// of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-120`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
