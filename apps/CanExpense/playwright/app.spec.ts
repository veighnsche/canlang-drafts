import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Explicit concept mappings come from the adjacent generation prompts/reference notes.
// Concepts guide meaningful route states; runtime baselines remain viewport-specific.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/expenses/mine", file: "01-private-claim-desktop.png" },
    { route: "/expenses/review", file: "02-review-reimbursement-desktop.png" },
  ],
});
