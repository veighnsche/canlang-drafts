import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/dispatch", file: "01-dispatch-desktop.png" },
    { route: "/dispatch/mine", file: "02-my-visit-desktop.png" },
  ],
  journeys: [
    {
      name: "/dispatch: Ava cannot enter dispatcher", actor: "Ava",
      covers: { states: [{ route: "/dispatch", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/dispatch`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/dispatch", "denied");
      },
    },
    {
      name: "/dispatch/mine: Ava cannot enter technician", actor: "Ava",
      covers: { states: [{ route: "/dispatch/mine", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/dispatch/mine`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/dispatch/mine", "denied");
      },
    },
  ],
});
