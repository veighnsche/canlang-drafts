import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/stock", file: "01-posting-queue-desktop.png" },
    { route: "/stock", file: "02-ledger-transfer-desktop.png", state: "validation" },
    { route: "/stock", file: "02-ledger-transfer-desktop.png", state: "dialog-open" },
  ],
});
