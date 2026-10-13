import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/membership/plans", file: "02-membership-plans-desktop.png" },
    { route: "/membership/access-review", file: "03-membership-access-review-desktop.png" },
    { route: "/membership/mine", file: "05-membership-mine-desktop.png" },
    { route: "/membership/register", file: "06-membership-register-desktop.png" },
    { route: "/membership/content", file: "08-membership-content-desktop.png" },
  ],
  journeys: [
    {
      name: "/membership/mine scoped empty view survives reload",
      covers: { states: [{ route: "/membership/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/membership/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My membership", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No memberships for your account", { exact: true }).first()).toBeVisible();
        await capture("/membership/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No memberships for your account", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/membership/content scoped empty view survives reload",
      covers: { states: [{ route: "/membership/content", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/membership/content`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Member information", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No member information available", { exact: true }).first()).toBeVisible();
        await capture("/membership/content", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No member information available", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/membership/plans rejects a member without its business role",
      covers: { states: [{ route: "/membership/plans", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/membership/plans`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/membership/plans", "denied");
      },
    },
    {
      name: "/membership/register rejects a member without its business role",
      covers: { states: [{ route: "/membership/register", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/membership/register`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/membership/register", "denied");
      },
    },
    {
      name: "/membership/content/edit rejects a member without its business role",
      covers: { states: [{ route: "/membership/content/edit", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/membership/content/edit`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/membership/content/edit", "denied");
      },
    },
  ],
});
