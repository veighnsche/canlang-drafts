import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/events", file: "01-event-registration-desktop.png" },
    { route: "/events/work", file: "02-event-operations-desktop.png" },
  ],
  journeys: [
    {
      name: "Public discovery has no bookable records in a fresh serving store", unauthenticated: true,
      covers: { states: [{ route: "/events", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/events`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Events", exact: true }).first()).toBeVisible();
        await expect(page.getByText("Published event discovery", { exact: true })).toBeVisible();
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await expect(page.locator('form[action*="register"], form[action*="cancel"]')).toHaveCount(0);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await capture("/events", "empty");
      },
    },
    {
      name: "/events/work: Ava cannot enter organizer or check_in or finance", actor: "Ava",
      covers: { states: [{ route: "/events/work", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/events/work`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/events/work", "denied");
      },
    },
  ],
});
