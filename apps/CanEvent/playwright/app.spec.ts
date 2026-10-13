import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/events", file: "01-event-registration-desktop.png" },
    { route: "/events/work", file: "02-event-operations-desktop.png" },
  ],
});
