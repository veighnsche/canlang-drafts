import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/finance/my-invoices", file: "01-own-invoice-desktop.png" },
    { route: "/finance/invoice/{Invoice.id}", file: "02-issued-document-desktop.png" },
  ],
  journeys: [
    {
      name: "Own invoice list without billing ownership offers no collection or document actions",
      covers: { states: [{ route: "/finance/my-invoices", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/finance/my-invoices`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByText("No own invoices match these filters", { exact: true })).toBeVisible();
        await expect(page.locator('form[action*="collect"], form[action*="document"], form[action*="generate_receipt"]')).toHaveCount(0);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No own invoices match these filters", { exact: true })).toBeVisible();
        await capture("/finance/my-invoices", "empty");
      },
    },
    {
      name: "Ordinary member has no retained invoice history or finance intake",
      covers: { states: [{ route: "/finance/invoice-history", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/finance/invoice-history`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByText("No historical invoices retained yet", { exact: true })).toBeVisible();
        await expect(page.locator('form[action*="retain_legacy"], form[action*="link_legacy"]')).toHaveCount(0);
        await capture("/finance/invoice-history", "empty");
      },
    },
    {
      name: "/finance/invoices: Ava cannot enter finance", actor: "Ava",
      covers: { states: [{ route: "/finance/invoices", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/finance/invoices`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/finance/invoices", "denied");
      },
    },
  ],
});
