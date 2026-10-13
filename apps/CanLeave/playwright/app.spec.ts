import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/leave/mine", file: "02-leave-mine-desktop.png" },
    { route: "/leave/review", file: "03-leave-review-desktop.png" },
    { route: "/leave/absence", file: "04-leave-absence-desktop.png" },
  ],
  journeys: [
    {
      name: "/leave/mine scoped empty view survives reload",
      covers: { states: [{ route: "/leave/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/leave/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My leave", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No working calendar.", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No allowances configured.", { exact: true }).first()).toBeVisible();
        await capture("/leave/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No working calendar.", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No allowances configured.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/leave/absence scoped empty view survives reload",
      covers: { states: [{ route: "/leave/absence", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/leave/absence`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Absence dates", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No absence dates.", { exact: true }).first()).toBeVisible();
        await capture("/leave/absence", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No absence dates.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/leave/review rejects a member without its business role",
      covers: { states: [{ route: "/leave/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/leave/review`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/leave/review", "denied");
      },
    },
  ],
});
