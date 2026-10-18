import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/documents/review", file: "01-review-decision-desktop-left.png" },
    { route: "/documents", file: "02-own-versions-desktop-left.png" },
  ],
  journeys: [
    {
      name: "Document intake rejects an invalid email, then persists a corrected own draft",
      covers: {
        states: [
          { route: "/documents", state: "validation" },
          { route: "/documents", state: "success" },
          { route: "/documents", state: "populated" },
        ],
      },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/documents`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        const form = page.locator('form[action*="Document.create"]').first();
        await expect(form).toBeVisible();
        const title = "Browser intake draft";
        await form.locator('[name="inputs[title]"]').fill(title);
        await form.locator('[name="inputs[category]"]').fill("Operating procedure");
        await form.locator('[name="inputs[subject]"]').fill("Browser draft persistence");
        const email = form.locator('[name="inputs[email]"]');
        await email.fill("invalid-email");
        const [rejected] = await Promise.all([
          page.waitForResponse(response => response.request().method() === "POST" &&
            decodeURIComponent(new URL(response.url()).pathname).includes("approve.Document.create")),
          form.locator('button[type="submit"]').click(),
        ]);
        expect(rejected.status(), "Invalid email must be refused by canonical validation").toBe(400);
        expect(await rejected.json()).toMatchObject({ code: "validation" });
        await expect(form.locator('[data-can-form-feedback-code="validation"]')).toBeVisible();
        await expect(form.locator('[name="inputs[title]"]')).toHaveValue(title);
        await expect(email).toHaveValue("invalid-email");
        await capture("/documents", "validation");
        await email.fill("submitter@example.test");
        const [created] = await Promise.all([
          page.waitForResponse(response => response.request().method() === "POST" &&
            decodeURIComponent(new URL(response.url()).pathname).includes("approve.Document.create")),
          form.locator('button[type="submit"]').click(),
        ]);
        expect(created.status(), "The canonical create must commit, not return an error").toBe(200);
        await page.goto(`${baseURL}/documents`, { waitUntil: "networkidle" });
        await expect(page.locator('li.list-row').filter({ hasText: title })).toHaveCount(1);
        await capture("/documents", "success");
        await page.reload({ waitUntil: "networkidle" });
        const row = page.locator('li.list-row').filter({ hasText: title });
        await expect(row).toHaveCount(1);
        await expect(row).toContainText("Operating procedure");
        await capture("/documents", "populated");
      },
    },
    {
      name: "/documents: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/documents", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/documents`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/documents", "denied");
      },
    },
    {
      name: "/documents/review: Ava cannot enter reviewer or coordinator", actor: "Ava",
      covers: { states: [{ route: "/documents/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/documents/review`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/documents/review", "denied");
      },
    },
  ],
});
