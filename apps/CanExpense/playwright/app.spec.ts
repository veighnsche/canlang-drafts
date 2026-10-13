import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/expenses/mine", file: "01-private-claim-desktop.png" },
    { route: "/expenses/review", file: "02-review-reimbursement-desktop.png" },
  ],
  journeys: [
    {
      name: "/expenses/mine: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/expenses/mine", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/expenses/mine`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/expenses/mine", "denied");
      },
    },
    {
      name: "/expenses/mine: empty collection remains empty after reload",
      covers: { states: [{ route: "/expenses/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/expenses/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My expenses", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No claims yet.", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No claims yet.", { exact: true })).toBeVisible();
        await capture("/expenses/mine", "empty");
      },
    },
    {
      name: "/expenses/review: Ava cannot enter reviewer or finance", actor: "Ava",
      covers: { states: [{ route: "/expenses/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/expenses/review`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/expenses/review", "denied");
      },
    },
  ],
});
