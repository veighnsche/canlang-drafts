import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/roster", file: "01-roster-populated-desktop.png" },
    { route: "/roster/mine", file: "02-own-shifts-desktop.png" },
  ],
  journeys: [
    {
      name: "/roster rejects a member without its business role",
      covers: { states: [{ route: "/roster", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/roster`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/roster", "denied");
      },
    },
    {
      name: "/roster/mine exposes the authored personal intake or discovery section",
      covers: { states: [{ route: "/roster/mine", state: "initial" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/roster/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My shifts", exact: true }).first()).toBeVisible();
        await expect(page.getByText("Your availability", { exact: true }).first()).toBeVisible();
        await expect(page.locator('form').filter({ has: page.locator('input[name="operation"][value="shift.Availability.create"]') })).toHaveCount(1);
        await capture("/roster/mine", "initial");
      },
    },
  ],
});
