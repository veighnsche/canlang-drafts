import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/catalogs", file: "02-catalogs-desktop.png" },
    { route: "/tags", file: "03-tags-desktop.png" },
    { route: "/catalogs/archived", file: "04-catalogs-archived-desktop.png" },
  ],
  journeys: [
    {
      name: "/catalogs scoped empty view survives reload",
      covers: { states: [{ route: "/catalogs", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/catalogs`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Catalogs", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No catalogs yet.", { exact: true }).first()).toBeVisible();
        await expect(page.locator('form').filter({ has: page.locator('input[name="operation"][value="prompt_lab.Catalog.create"]') })).toHaveCount(0);
        await capture("/catalogs", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No catalogs yet.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/tags scoped empty view survives reload",
      covers: { states: [{ route: "/tags", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/tags`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Catalog tags", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No tags yet.", { exact: true }).first()).toBeVisible();
        await expect(page.locator('form').filter({ has: page.locator('input[name="operation"][value="prompt_lab.Tag.create"]') })).toHaveCount(0);
        await capture("/tags", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No tags yet.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/catalogs/archived scoped empty view survives reload",
      covers: { states: [{ route: "/catalogs/archived", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/catalogs/archived`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Archived entries", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No archived entries.", { exact: true }).first()).toBeVisible();
        await capture("/catalogs/archived", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No archived entries.", { exact: true }).first()).toBeVisible();
      },
    },
  ],
});
