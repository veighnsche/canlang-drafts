import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/volunteering", file: "01-activities-desktop.png" },
    { route: "/volunteering/work", file: "02-coordination-desktop.png" },
    { route: "/volunteering", file: "03-own-assignments-desktop.png", state: "assignments" },
  ],
  journeys: [
    {
      name: "/volunteering/work rejects a member without its business role",
      covers: { states: [{ route: "/volunteering/work", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/volunteering/work`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/volunteering/work", "denied");
      },
    },
    {
      name: "/volunteering exposes the authored personal intake or discovery section",
      covers: { states: [{ route: "/volunteering", state: "initial" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/volunteering`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Volunteer activities", exact: true }).first()).toBeVisible();
        await expect(page.getByText("Published volunteer activities", { exact: true }).first()).toBeVisible();
        await capture("/volunteering", "initial");
      },
    },
    {
      name: "Own assignments preference persists and excludes organizer intake",
      covers: { states: [{ route: "/volunteering", state: "assignments" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/volunteering`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        const choice = page.locator('input[type="radio"][name="view"][value="assignments"]');
        await choice.check();
        await page.locator("form").filter({ has: choice }).getByRole("button", { name: "Save", exact: true }).click();
        await expect(page.getByText("Your signups and assigned tasks", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("Opportunity authoring", { exact: true })).toHaveCount(0);
        await capture("/volunteering", "assignments");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('input[type="radio"][name="view"][value="assignments"]')).toBeChecked();
        await expect(page.getByText("Your signups and assigned tasks", { exact: true }).first()).toBeVisible();
      },
    },
  ],
});
