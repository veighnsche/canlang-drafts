import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/people/my-readiness", file: "02-people-my-readiness-desktop.png" },
    { route: "/people/onboarding", file: "03-people-onboarding-desktop.png" },
  ],
  journeys: [
    {
      name: "/people/my-readiness scoped empty view survives reload",
      covers: { states: [{ route: "/people/my-readiness", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/people/my-readiness`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My readiness", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No assigned steps", { exact: true }).first()).toBeVisible();
        await capture("/people/my-readiness", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No assigned steps", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/people/onboarding rejects a member without its business role",
      covers: { states: [{ route: "/people/onboarding", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/people/onboarding`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/people/onboarding", "denied");
      },
    },
    {
      name: "/people/my-readiness saves each authored view and restores it on reload",
      covers: { states: [{ route: "/people/my-readiness", state: "view-unfinished" }, { route: "/people/my-readiness", state: "view-overdue" }, { route: "/people/my-readiness", state: "view-all" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/people/my-readiness`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        {
          const choice = page.locator('input[type="radio"][name="view"][value="unfinished"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="unfinished"]')).toBeChecked();
          await expect(page.getByText("No assigned steps", { exact: true }).first()).toBeVisible();
          await capture("/people/my-readiness", "view-unfinished");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="unfinished"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="overdue"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="overdue"]')).toBeChecked();
          await expect(page.getByText("No assigned steps", { exact: true }).first()).toBeVisible();
          await capture("/people/my-readiness", "view-overdue");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="overdue"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="all"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
          await expect(page.getByText("No assigned steps", { exact: true }).first()).toBeVisible();
          await capture("/people/my-readiness", "view-all");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
        }
      },
    },
  ],
});
