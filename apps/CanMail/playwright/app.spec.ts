import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/mailroom", file: "02-mailroom-desktop.png" },
    { route: "/mailroom/mine", file: "03-mailroom-mine-desktop.png" },
  ],
  journeys: [
    {
      name: "/mailroom/mine scoped empty view survives reload",
      covers: { states: [{ route: "/mailroom/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/mailroom/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My mail", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No mail service yet", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
        await capture("/mailroom/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No mail service yet", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/mailroom rejects a member without its business role",
      covers: { states: [{ route: "/mailroom", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/mailroom`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/mailroom", "denied");
      },
    },
    {
      name: "/mailroom/mine saves each authored view and restores it on reload",
      covers: { states: [{ route: "/mailroom/mine", state: "view-collection" }, { route: "/mailroom/mine", state: "view-forwarding" }, { route: "/mailroom/mine", state: "view-history" }, { route: "/mailroom/mine", state: "view-all" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/mailroom/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        {
          const choice = page.locator('input[type="radio"][name="view"][value="collection"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="collection"]')).toBeChecked();
          await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
          await capture("/mailroom/mine", "view-collection");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="collection"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="forwarding"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="forwarding"]')).toBeChecked();
          await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
          await capture("/mailroom/mine", "view-forwarding");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="forwarding"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="history"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="history"]')).toBeChecked();
          await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
          await capture("/mailroom/mine", "view-history");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="history"]')).toBeChecked();
        }
        {
          const choice = page.locator('input[type="radio"][name="view"][value="all"]');
          await choice.check();
          const form = page.locator("form").filter({ has: choice });
          await form.getByRole("button", { name: "Save", exact: true }).click();
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
          await expect(page.getByText("No own mail items", { exact: true }).first()).toBeVisible();
          await capture("/mailroom/mine", "view-all");
          await page.reload({ waitUntil: "networkidle" });
          await expect(page.locator('input[type="radio"][name="view"][value="all"]')).toBeChecked();
        }
      },
    },
  ],
});
