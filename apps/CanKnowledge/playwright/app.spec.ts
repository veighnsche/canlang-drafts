import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/knowledge", file: "01-private-sourced-answer-desktop.png" },
    { route: "/knowledge/editor", file: "02-procedure-editor-desktop.png" },
  ],
  journeys: [
    {
      name: "/knowledge scoped empty view survives reload",
      covers: { states: [{ route: "/knowledge", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/knowledge`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Company knowledge", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No topics available", { exact: true }).first()).toBeVisible();
        await capture("/knowledge", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No topics available", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/knowledge/expert scoped empty view survives reload",
      covers: { states: [{ route: "/knowledge/expert", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/knowledge/expert`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Expert questions", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No questions for you", { exact: true }).first()).toBeVisible();
        await capture("/knowledge/expert", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No questions for you", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/knowledge/editor rejects a member without its business role",
      covers: { states: [{ route: "/knowledge/editor", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/knowledge/editor`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/knowledge/editor", "denied");
      },
    },
    {
      name: "/knowledge/settings rejects a member without its business role",
      covers: { states: [{ route: "/knowledge/settings", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/knowledge/settings`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/knowledge/settings", "denied");
      },
    },
  ],
});
