import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/dispatch", file: "01-dispatch-desktop.png" },
    { route: "/dispatch/mine", file: "02-my-visit-mobile.png" },
  ],
});
