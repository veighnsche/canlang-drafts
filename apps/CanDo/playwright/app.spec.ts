import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Each body asserts only the named browser outcome. Isolated source examples do not seed these pages.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/tasks", file: "01-tasks-desktop.png" },
    { route: "/tasks/my-work", file: "02-my-work-desktop.png" },
  ],
  journeys: [
    {
      name: "/tasks: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/tasks", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/tasks`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/tasks", "denied");
      },
    },
    {
      name: "/tasks: empty collection remains empty after reload",
      covers: { states: [{ route: "/tasks", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/tasks`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Tasks", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No tasks match these filters.", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No tasks match these filters.", { exact: true })).toBeVisible();
        await capture("/tasks", "empty");
      },
    },
    {
      name: "/tasks/my-work: Dee canonical JSON refusal without team membership", actor: "Dee",
      covers: { states: [{ route: "/tasks/my-work", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        // Explicit JSON admission probe; ordinary HTML navigation recovers to team selection.
        await page.setExtraHTTPHeaders({ Accept: "application/json" });
        const response = await page.goto(`${baseURL}/tasks/my-work`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/tasks/my-work", "denied");
      },
    },
    {
      name: "/tasks/my-work: empty collection remains empty after reload",
      covers: { states: [{ route: "/tasks/my-work", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/tasks/my-work`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My work", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No work projection yet.", { exact: true })).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No work projection yet.", { exact: true })).toBeVisible();
        await capture("/tasks/my-work", "empty");
      },
    },
    {
      name: "/tasks/checklists: Ava cannot enter task_manager", actor: "Ava",
      covers: { states: [{ route: "/tasks/checklists", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/tasks/checklists`, { waitUntil: "domcontentloaded" });
        expect(response?.status(), "The real actor must be refused by this source page guard").toBe(403);
        expect(await response!.json()).toMatchObject({ code: "forbidden" });
        await expect(page.locator("form, table.table, li.list-row")).toHaveCount(0);
        await capture("/tasks/checklists", "denied");
      },
    },
  ],
});
