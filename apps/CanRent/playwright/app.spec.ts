import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/workspace/resources", file: "05-workspace-resources-desktop.png" },
    { route: "/workspace", file: "06-workspace-desktop.png" },
    { route: "/workspace/reservations", file: "07-workspace-reservations-desktop.png" },
    { route: "/workspace/my-bookings", file: "08-workspace-my-bookings-desktop.png" },
    { route: "/workspace/occupancy", file: "10-workspace-occupancy-desktop.png" },
  ],
  journeys: [
    {
      name: "/workspace scoped empty view survives reload",
      covers: { states: [{ route: "/workspace", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Available workspace", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No resources match these filters", { exact: true }).first()).toBeVisible();
        await capture("/workspace", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No resources match these filters", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/workspace/my-bookings scoped empty view survives reload",
      covers: { states: [{ route: "/workspace/my-bookings", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/my-bookings`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My bookings", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No bookings yet", { exact: true }).first()).toBeVisible();
        await capture("/workspace/my-bookings", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No bookings yet", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/workspace/occupancy scoped empty view survives reload",
      covers: { states: [{ route: "/workspace/occupancy", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/occupancy`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Local occupancy", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No bookings in this view", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No resources match these filters", { exact: true }).first()).toBeVisible();
        await capture("/workspace/occupancy", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No bookings in this view", { exact: true }).first()).toBeVisible();
        await expect(page.getByText("No resources match these filters", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/workspace/catalog rejects a member without its business role",
      covers: { states: [{ route: "/workspace/catalog", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/catalog`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/workspace/catalog", "denied");
      },
    },
    {
      name: "/workspace/resources rejects a member without its business role",
      covers: { states: [{ route: "/workspace/resources", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/resources`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/workspace/resources", "denied");
      },
    },
    {
      name: "/workspace/reservations rejects a member without its business role",
      covers: { states: [{ route: "/workspace/reservations", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/reservations`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/workspace/reservations", "denied");
      },
    },
    {
      name: "/workspace/arrivals rejects a member without its business role",
      covers: { states: [{ route: "/workspace/arrivals", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/arrivals`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/workspace/arrivals", "denied");
      },
    },
    {
      name: "/workspace/refund-review rejects a member without its business role",
      covers: { states: [{ route: "/workspace/refund-review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workspace/refund-review`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/workspace/refund-review", "denied");
      },
    },
  ],
});
