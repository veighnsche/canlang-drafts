import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/learning/mine", file: "02-my-learning-desktop.png" },
    { route: "/learning/courses", file: "03-learning-courses-desktop.png" },
  ],
  journeys: [
    {
      name: "/learning/mine scoped empty view survives reload",
      covers: { states: [{ route: "/learning/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/learning/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My learning", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
        await capture("/learning/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/learning/courses rejects a member without its business role",
      covers: { states: [{ route: "/learning/courses", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/learning/courses`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/learning/courses", "denied");
      },
    },
    {
      name: "/learning/mine saves each authored view and restores it on reload",
      covers: { states: [{ route: "/learning/mine", state: "view-required" }, { route: "/learning/mine", state: "view-optional" }, { route: "/learning/mine", state: "view-overdue" }, { route: "/learning/mine", state: "view-all" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/learning/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        {
          const choice = page.locator('input[type="radio"][name="view"][value="required"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="required"]')).toBeChecked();
          await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
          await capture("/learning/mine", "view-required");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="required"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="optional"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="optional"]')).toBeChecked();
          await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
          await capture("/learning/mine", "view-optional");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="optional"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="overdue"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="overdue"]')).toBeChecked();
          await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
          await capture("/learning/mine", "view-overdue");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="overdue"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="all"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
          await expect(page.getByText("No enrolled courses", { exact: true }).first()).toBeVisible();
          await capture("/learning/mine", "view-all");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
        }
      },
    },
  ],
});
