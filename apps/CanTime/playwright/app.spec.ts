import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/time/mine", file: "01-own-time-desktop.png" },
    { route: "/time/review", file: "02-period-review-desktop.png" },
  ],
});
