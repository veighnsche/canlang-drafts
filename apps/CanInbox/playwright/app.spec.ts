import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/inbox", file: "01-departmental-inbox-desktop.png" },
    { route: "/inbox", state: "unknown-send", file: "02-uncertain-reply-desktop.png" },
  ],
  journeys: [
    {
      name: "/inbox: Ava cannot enter mail_staff or inbox_admin", actor: "Ava",
      covers: { states: [{ route: "/inbox", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/inbox`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/inbox", "denied");
      },
    },
    {
      name: "/inbox/settings: Ava cannot enter inbox_admin", actor: "Ava",
      covers: { states: [{ route: "/inbox/settings", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/inbox/settings`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/inbox/settings", "denied");
      },
    },
  ],
});
