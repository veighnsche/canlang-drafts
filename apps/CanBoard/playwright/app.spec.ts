import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/board", file: "01-final-record-desktop-left.png" },
    { route: "/board/actions", file: "02-assigned-actions-desktop-left.png" },
  ],
  journeys: [
    {
      name: "/board: Ava cannot enter board_member or coordinator or secretary", actor: "Ava",
      covers: { states: [{ route: "/board", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/board`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/board", "denied");
      },
    },
    {
      name: "/board/actions: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/board/actions", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/board/actions`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/board/actions", "denied");
      },
    },
    {
      name: "/board/actions: empty collection remains empty after reload",
      covers: { states: [{ route: "/board/actions", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/board/actions`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Board actions", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No outstanding actions.", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No outstanding actions.", { exact: true })).toBeVisible();
        await capture("/board/actions", "empty");
      },
    },
  ],
});
