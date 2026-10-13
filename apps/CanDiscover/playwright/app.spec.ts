import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/discover", file: "01-evidence-review-desktop.png" },
    { route: "/discover", state: "plans-incomplete", file: "02-plans-coverage-desktop.png" },
  ],
  journeys: [
    {
      name: "/discover: Ava cannot enter researcher or reviewer", actor: "Ava",
      covers: { states: [{ route: "/discover", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/discover`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/discover", "denied");
      },
    },
  ],
});
