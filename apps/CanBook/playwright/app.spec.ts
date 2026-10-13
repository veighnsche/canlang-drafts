import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/appointments", file: "01-appointments-desktop-left.png" },
    { route: "/appointments/hosts", file: "02-host-agenda-desktop-left.png" },
  ],
  journeys: [
    {
      name: "Public discovery has no bookable records in a fresh serving store", unauthenticated: true,
      covers: { states: [{ route: "/appointments", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        expect((await page.goto(`${baseURL}/appointments`, { waitUntil: "networkidle" }))?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Appointments", exact: true }).first()).toBeVisible();
        await expect(page.getByText("Published host windows", { exact: true })).toBeVisible();
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await expect(page.locator('form[action*="book"], form[action*="Appointment.cancel"], form[action*="cancel"]')).toHaveCount(0);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('li.list-row')).toHaveCount(0);
        await capture("/appointments", "empty");
      },
    },
    {
      name: "/appointments/hosts: Ava cannot enter host_manager", actor: "Ava",
      covers: { states: [{ route: "/appointments/hosts", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/appointments/hosts`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/appointments/hosts", "denied");
      },
    },
  ],
});
