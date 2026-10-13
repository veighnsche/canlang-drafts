import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/chat", file: "01-conversation-desktop-left.png" },
    { route: "/chat/admin", file: "02-access-limits-desktop-left.png" },
    { route: "/chat/recovery", file: "03-recovery-desktop-left.png" },
  ],
  journeys: [
    {
      name: "/chat: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/chat", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/chat`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/chat", "denied");
      },
    },
    {
      name: "/chat: empty collection remains empty after reload",
      covers: { states: [{ route: "/chat", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/chat`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Conversations", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No conversations yet", { exact: true })).toBeVisible();
        await expect(page.getByText("No token allowances", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No conversations yet", { exact: true })).toBeVisible();
        await expect(page.getByText("No token allowances", { exact: true })).toBeVisible();
        await capture("/chat", "empty");
      },
    },
    {
      name: "/chat/recovery: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/chat/recovery", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/chat/recovery`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/chat/recovery", "denied");
      },
    },
    {
      name: "/chat/recovery: empty collection remains empty after reload",
      covers: { states: [{ route: "/chat/recovery", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/chat/recovery`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Unresolved usage", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No unresolved usage", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No unresolved usage", { exact: true })).toBeVisible();
        await capture("/chat/recovery", "empty");
      },
    },
    {
      name: "/chat/admin: Ava cannot enter ai_manager", actor: "Ava",
      covers: { states: [{ route: "/chat/admin", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/chat/admin`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/chat/admin", "denied");
      },
    },
  ],
});
