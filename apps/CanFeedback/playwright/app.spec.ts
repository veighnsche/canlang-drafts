import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/feedback", file: "01-suggestions-desktop.png" },
    { route: "/feedback/moderation", file: "02-moderation-desktop.png" },
  ],
});
