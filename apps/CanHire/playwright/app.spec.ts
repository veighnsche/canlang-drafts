import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/hiring", file: "01-hiring-desktop.png" },
    { route: "/careers", file: "02-careers-application-desktop.png" },
  ],
  journeys: [
    {
      name: "/hiring: Ava cannot enter recruiter", actor: "Ava",
      covers: { states: [{ route: "/hiring", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/hiring`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/hiring", "denied");
      },
    },
    {
      name: "/hiring/handoff: Ava cannot enter hr", actor: "Ava",
      covers: { states: [{ route: "/hiring/handoff", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/hiring/handoff`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/hiring/handoff", "denied");
      },
    },
    {
      name: "/hiring/interviews: Ava cannot enter interviewer", actor: "Ava",
      covers: { states: [{ route: "/hiring/interviews", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/hiring/interviews`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/hiring/interviews", "denied");
      },
    },
  ],
});
