import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/feedback", file: "01-suggestions-desktop.png" },
    { route: "/feedback/moderation", file: "02-moderation-desktop.png" },
  ],
  journeys: [
    {
      name: "/feedback: empty collection remains empty after reload", unauthenticated: true,
      covers: { states: [{ route: "/feedback", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/feedback`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Suggestions", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No products yet.", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No products yet.", { exact: true })).toBeVisible();
        await capture("/feedback", "empty");
      },
    },
    {
      name: "/feedback/moderation: Ava cannot enter product_owner", actor: "Ava",
      covers: { states: [{ route: "/feedback/moderation", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/feedback/moderation`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/feedback/moderation", "denied");
      },
    },
  ],
});
