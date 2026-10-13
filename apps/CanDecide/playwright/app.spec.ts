import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/decisions", file: "01-advisory-decision-desktop-left.png" },
    { route: "/decisions", state: "independent-review-empty", file: "02-independent-review-desktop-left.png" },
  ],
  journeys: [
    {
      name: "/decisions: Ava cannot enter analyst or reviewer", actor: "Ava",
      covers: { states: [{ route: "/decisions", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/decisions`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/decisions", "denied");
      },
    },
  ],
});
