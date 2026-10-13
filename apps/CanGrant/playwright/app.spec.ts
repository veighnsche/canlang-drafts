import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/awards/review", file: "01-award-review-desktop.png" },
    { route: "/awards", file: "02-applicant-intake-desktop.png" },
  ],
  journeys: [
    {
      name: "/awards/review: Ava cannot enter reviewer or coordinator", actor: "Ava",
      covers: { states: [{ route: "/awards/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/awards/review`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/awards/review", "denied");
      },
    },
  ],
});
