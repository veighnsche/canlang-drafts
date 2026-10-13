import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/loyalty", file: "02-loyalty-desktop.png" },
    { route: "/loyalty/fulfillment", file: "03-loyalty-fulfillment-desktop.png" },
    { route: "/loyalty/catalog", file: "04-loyalty-catalog-desktop.png" },
  ],
  journeys: [
    {
      name: "/loyalty scoped empty view survives reload",
      covers: { states: [{ route: "/loyalty", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/loyalty`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My rewards", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No reward account yet", { exact: true }).first()).toBeVisible();
        await capture("/loyalty", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No reward account yet", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/loyalty/fulfillment rejects a member without its business role",
      covers: { states: [{ route: "/loyalty/fulfillment", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/loyalty/fulfillment`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/loyalty/fulfillment", "denied");
      },
    },
    {
      name: "/loyalty/catalog rejects a member without its business role",
      covers: { states: [{ route: "/loyalty/catalog", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/loyalty/catalog`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/loyalty/catalog", "denied");
      },
    },
  ],
});
