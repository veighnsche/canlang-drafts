import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/companies/{Customer.id}", file: "01-company-people-desktop-left.png" },
    { route: "/customers", file: "03-directory-desktop-left.png" },
    { route: "/customers/billing-approvals", file: "04-billing-approval-desktop-left.png" },
    { route: "/company-invitations", file: "02-invitations-desktop-left.png" },
  ],
  journeys: [
    {
      name: "Own company invitation index has no unaddressed invitation or role-grant action",
      covers: { states: [{ route: "/company-invitations", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/company-invitations`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Invitations", exact: true }).first()).toBeVisible();
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await expect(page.locator('form[action*="accept"], form[action*="claim"]')).toHaveCount(0);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await capture("/company-invitations", "empty");
      },
    },
    {
      name: "/customers: Ava cannot enter customer_manager", actor: "Ava",
      covers: { states: [{ route: "/customers", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/customers`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/customers", "denied");
      },
    },
    {
      name: "/customers/billing-approvals: Ava cannot enter finance", actor: "Ava",
      covers: { states: [{ route: "/customers/billing-approvals", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/customers/billing-approvals`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/customers/billing-approvals", "denied");
      },
    },
  ],
});
