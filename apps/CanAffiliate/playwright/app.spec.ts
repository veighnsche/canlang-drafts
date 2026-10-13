import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/partners", file: "01-partners-desktop-left.png" },
    { route: "/partners/mine", file: "02-own-commissions-desktop-left.png" },
    { route: "/partners/share/{Partner.id}", file: "03-introduction-desktop-left.png" },
  ],
  journeys: [
    {
      name: "Verified member without a partner account sees no commission records or actions",
      covers: { states: [{ route: "/partners/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/partners/mine`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My commissions", exact: true }).first()).toBeVisible();
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await expect(page.locator('form[action*="onboard"], form[action*="refresh_account"], form[action*="settle"]')).toHaveCount(0);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await capture("/partners/mine", "empty");
      },
    },
    {
      name: "/partners: Ava cannot enter partner_manager or finance", actor: "Ava",
      covers: { states: [{ route: "/partners", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/partners`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/partners", "denied");
      },
    },
  ],
});
