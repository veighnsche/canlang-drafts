import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/marketplace", file: "01-community-listings-desktop.png" },
    { route: "/marketplace/reports", file: "02-moderation-desktop.png" },
  ],
  journeys: [
    {
      name: "/marketplace scoped empty view survives reload",
      covers: { states: [{ route: "/marketplace", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/marketplace`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Community marketplace", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No active listings match.", { exact: true }).first()).toBeVisible();
        await capture("/marketplace", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No active listings match.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/marketplace saves each authored view and restores it on reload",
      covers: { states: [{ route: "/marketplace", state: "view-mine" }, { route: "/marketplace", state: "view-community" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/marketplace`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        {
          const choice = page.locator('input[type="radio"][name="view"][value="mine"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="mine"]')).toBeChecked();
          await expect(page.getByText("No own listings yet.", { exact: true }).first()).toBeVisible();
          await capture("/marketplace", "view-mine");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="mine"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="community"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="community"]')).toBeChecked();
          await expect(page.getByText("No active listings match.", { exact: true }).first()).toBeVisible();
          await capture("/marketplace", "view-community");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="community"]')).toBeChecked();
        }
      },
    },
  ],
});
