import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/gallery", file: "01-approved-collection-desktop.png" },
    { route: "/gallery/review", file: "02-image-review-desktop.png" },
  ],
  journeys: [
    {
      name: "/gallery: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/gallery", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/gallery`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/gallery", "denied");
      },
    },
    {
      name: "/gallery: empty collection remains empty after reload",
      covers: { states: [{ route: "/gallery", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/gallery`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Approved collections", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No collections available", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No collections available", { exact: true })).toBeVisible();
        await capture("/gallery", "empty");
      },
    },
    {
      name: "/gallery/submit: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/gallery/submit", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/gallery/submit`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/gallery/submit", "denied");
      },
    },
    {
      name: "/gallery/submit: empty collection remains empty after reload",
      covers: { states: [{ route: "/gallery/submit", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/gallery/submit`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My images and submissions", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No successful images to submit", { exact: true })).toBeVisible();
        await expect(page.getByText("No submissions yet", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No successful images to submit", { exact: true })).toBeVisible();
        await expect(page.getByText("No submissions yet", { exact: true })).toBeVisible();
        await capture("/gallery/submit", "empty");
      },
    },
    {
      name: "/gallery/review: Ava cannot enter reviewer", actor: "Ava",
      covers: { states: [{ route: "/gallery/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/gallery/review`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/gallery/review", "denied");
      },
    },
    {
      name: "/gallery/access: Ava cannot enter curator", actor: "Ava",
      covers: { states: [{ route: "/gallery/access", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/gallery/access`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/gallery/access", "denied");
      },
    },
  ],
});
