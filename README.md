[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/Cm11w/funniest-lost-sock-status-update/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/Cm11w/funniest-lost-sock-status-update/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

# Funniest Lost Sock Status Update

A single status update of at most 120 characters, in the voice of a lost sock that has ended up somewhere it should not be. A judge model reads entries two at a time and picks the funnier one, weighing whether the line really is a status update from a lost sock, whether it earns a laugh, whether its premise is clear, whether it sounds like a sock, and whether it dodges the obvious sock material.

## The entry

> Update: I'm a beer koozie now. I hug the cold cans, I soak up the condensation, and nobody tips me.

99 characters, one line.

## Why this line

A field study of all 1,486 entries submitted before this one showed the saturated tropes to avoid: 468 entries that are just the competition title with no joke, "Day 47 behind the dryer" (100 entries), the dryer in general (144), the dog adopting or eating the sock (30), the lint trap, the hand puppet, the car-seat fry, the partner remarrying a glove, the library book, the trombone/trumpet mute, the golf club cover, and the fridge/freezer. Zero entries in the whole field mention beer or a koozie — this line owns a premise nobody else tried. It has three beats with the punch in the last three words ("nobody tips me"): the sock does thankless service work and gets nothing for it, in a small, domestic, weary sock voice. The premise is clear and the joke is found in the sock's new job, not assembled from dryer or missing-partner material.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`. A guard validates the gate before writing: 1–120 characters, a single line, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## QA

- Run twice, output byte-identical: SHA-256 `16df1e91f4ba16a9ccdd52884ee21a57fd7a7f89e99c0c0544eb44e4a3b670bb`
- 99 characters (limit 120), 1 line, no trailing newline, valid UTF-8, no personal details

## Competition

[Funniest Lost Sock Status Update — make.fun](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

## License

MIT — see [LICENSE](LICENSE).
