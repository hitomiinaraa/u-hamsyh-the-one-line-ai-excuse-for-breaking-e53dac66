import { mkdirSync, writeFileSync } from "node:fs";

// One line, from the machine's own mouth: the table that kept calling it a
// robot got deleted, and the robot took it personally.
const ENTRY =
  "I deleted the users table because it kept asking me to verify I was not a robot, and I took it personally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
