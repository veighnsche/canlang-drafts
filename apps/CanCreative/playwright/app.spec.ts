import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/creative", file: "01-image-studio-desktop-left.png" },
    { route: "/creative/workflows", file: "02-workflow-templates-desktop-left.png" },
    { route: "/creative/recovery", file: "03-recovery-desktop-left.png" },
    { route: "/creative/from-chat", file: "04-chat-to-image-desktop-left.png" },
  ],
  journeys: [
    {
      name: "/creative: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/creative", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/creative`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/creative", "denied");
      },
    },
    {
      name: "/creative: empty collection remains empty after reload",
      covers: { states: [{ route: "/creative", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/creative`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Image studio", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No image jobs yet", { exact: true })).toBeVisible();
        await expect(page.getByText("No image-job allowances", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No image jobs yet", { exact: true })).toBeVisible();
        await expect(page.getByText("No image-job allowances", { exact: true })).toBeVisible();
        await capture("/creative", "empty");
      },
    },
    {
      name: "/creative/from-chat: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/creative/from-chat", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/creative/from-chat`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/creative/from-chat", "denied");
      },
    },
    {
      name: "/creative/from-chat: empty collection remains empty after reload",
      covers: { states: [{ route: "/creative/from-chat", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/creative/from-chat`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Chat to image", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No conversations", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No conversations", { exact: true })).toBeVisible();
        await capture("/creative/from-chat", "empty");
      },
    },
    {
      name: "/creative/recovery: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/creative/recovery", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/creative/recovery`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/creative/recovery", "denied");
      },
    },
    {
      name: "/creative/recovery: empty collection remains empty after reload",
      covers: { states: [{ route: "/creative/recovery", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/creative/recovery`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Unresolved image jobs", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No unresolved image jobs", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No unresolved image jobs", { exact: true })).toBeVisible();
        await capture("/creative/recovery", "empty");
      },
    },
    {
      name: "/creative/workflows: Ava cannot enter creative_manager", actor: "Ava",
      covers: { states: [{ route: "/creative/workflows", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/creative/workflows`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/creative/workflows", "denied");
      },
    },
  ],
});
