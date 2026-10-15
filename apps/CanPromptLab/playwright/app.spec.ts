import { expect, test, type Locator, type Page, type Response } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Operation ownership comes from the compiled form, not the source package alias.
const formFor = (page: Page, operation: string, scope: Page | Locator = page): Locator =>
  scope.locator("form").filter({ has: page.locator(`input[name="operation"][value$=".${operation}"]`) }).first();
const input = (form: Locator, name: string, update = false): Locator =>
  form.locator(`[name="inputs${update ? "[changes]" : ""}[${name}]"]`);
const viewFor = (page: Page, title: string): Locator => page.locator("[data-can-view]")
  .filter({ has: page.getByRole("heading", { name: title, exact: true }) }).first();
const catalogFor = (page: Page, name: string): Locator => page.locator("[data-can-card]")
  .filter({ has: page.getByRole("heading", { name, exact: true }) }).first();

async function openForm(form: Locator, scope?: Locator): Promise<void> {
  if (await form.isVisible()) return;
  // Inline scenario forms live directly in the canonical action menu. Open
  // that owner before deciding whether a separate dialog is needed.
  const menu = form.locator('xpath=ancestor::div[@data-can-action-menu][1]');
  if (await menu.count() && !await menu.locator('[data-can-action-menu-popover]').isVisible()) {
    await menu.locator('[data-can-action-menu-trigger]').click();
    if (await form.isVisible()) return;
  }
  const opener = form.locator('xpath=ancestor::div[@data-can-menu-dialog][1]')
    .locator(":scope > [data-can-menu-dialog-open]");
  if (await opener.count()) {
    if (!await opener.isVisible()) {
      const menu = form.locator('xpath=ancestor::div[@data-can-action-menu][1]');
      if (await menu.count()) await menu.locator("[data-can-action-menu-trigger]").click();
      else if (scope !== undefined) await scope.locator("[data-can-action-menu-trigger]").first().click();
    }
    await opener.click();
  } else {
    await form.locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " drawer ")][1]')
      .locator(":scope > .drawer-content label.drawer-button").click();
  }
  await expect(form).toBeVisible();
}

const previousSubmission = new WeakMap<Page, Map<string, { operationId: string; binding: string | null }>>();
async function submit(page: Page, form: Locator): Promise<Response> {
  const operation = await form.locator('input[name="operation"]').inputValue();
  const inDialog = await form.locator("xpath=ancestor::dialog[1]").count() > 0;
  const operationId = await form.locator('input[name="operation_id"]').inputValue();
  const bindingInput = form.locator('input[name="form_binding"]');
  const binding = await bindingInput.count() ? await bindingInput.inputValue() : null;
  const previous = previousSubmission.get(page) ?? new Map<string, { operationId: string; binding: string | null }>();
  const sameOperationId = previous.get(operation)?.operationId === operationId;
  const sameFormBinding = binding === null ? null : previous.get(operation)?.binding === binding;
  previous.set(operation, { operationId, binding });
  previousSubmission.set(page, previous);
  // Observe the genuine transient DOM state before clicking; no transport delay.
  const observed = await form.evaluateHandle(element => {
    const state = { pending: false };
    const observer = new MutationObserver(() => {
      if (element.getAttribute("data-can-submit-state") === "pending" && element.getAttribute("aria-busy") === "true") {
        state.pending = true;
        observer.disconnect();
      }
    });
    observer.observe(element, { attributes: true, attributeFilter: ["data-can-submit-state", "aria-busy"] });
    return { state, stop: () => observer.disconnect() };
  });
  const pending = page.waitForResponse(value => value.request().method() === "POST" &&
    new URL(value.url()).pathname.startsWith("/api/operations/"));
  await form.locator('button[type="submit"]').click();
  const response = await pending;
  const result = await response.json();
  try { expect(await observed.evaluate(value => value.state.pending), "canonical submit exposes pending and aria-busy").toBe(true); }
  finally { await observed.evaluate(value => value.stop()); await observed.dispose(); }
  console.info("PromptLab submission", JSON.stringify({ operation, httpStatus: response.status(),
    status: result.status, code: result.code, message: result.message, sameOperationId, formBindingPresent: binding !== null, sameFormBinding }));
  if (result.status === "committed" && inDialog) {
    // A committed generated form refreshes the authorized main partial. Its
    // heading can change before its closing animation ends. Match the stable
    // operation instead of resolving the old record-caption locator again.
    await expect(page.locator("dialog:visible").filter({
      has: page.locator(`input[name="operation"][value="${operation}"]`),
    })).toHaveCount(0);
  }
  return response;
}

// Read the actual canonical result, never a seeded actor ID or intercepted value.
// Source `now` shares the committed row's frozen update clock; user display is
// the permitted stable identity, with no account-directory/name lookup.
async function archiveEvidence(page: Page, response: Response): Promise<{ actor: string; time: string }> {
  expect(response.ok()).toBe(true);
  const result = await response.json();
  expect(result.status).toBe("committed");
  expect(result.records).toHaveLength(1);
  const row = result.records[0];
  expect(typeof row.updatedBy).toBe("string");
  expect(row.updatedBy.length).toBeGreaterThan(0);
  expect(Number.isSafeInteger(row.updated)).toBe(true);
  expect(row.data.archived).toBe(true);
  expect(row.data.archived_by).toEqual({ id: row.updatedBy });
  expect(row.data.archive_recorded_at).toBe(new Date(row.updated).toISOString());
  const locale = await page.locator("html").getAttribute("lang");
  expect(locale).toBeTruthy();
  return { actor: row.updatedBy, time: new Intl.DateTimeFormat(locale!, {
    dateStyle: "medium", timeStyle: "medium", timeZone: "UTC",
  }).format(new Date(row.updated)) };
}

async function expectArchiveEvidence(view: Locator, evidence: { actor: string; time: string }): Promise<void> {
  const fields = view.locator("p").filter({ hasText: evidence.actor }).filter({ hasText: evidence.time });
  await expect(fields).toHaveCount(1);
  await expect(fields).toBeVisible();
  await expect(fields).toContainText("\u2068true\u2069");
}

async function expectClearedArchiveEvidence(view: Locator, evidence: { actor: string; time: string }): Promise<void> {
  await expect(view).toBeVisible();
  await expect(view).toContainText("\u2068false\u2069");
  await expect(view).not.toContainText(evidence.actor);
  await expect(view).not.toContainText(evidence.time);
}

async function closeForm(form: Locator): Promise<void> {
  const dialog = form.locator("xpath=ancestor::dialog[1]");
  if (await dialog.count()) {
    if (await dialog.isVisible()) await dialog.getByRole("button", { name: "Cancel", exact: true }).click();
  } else {
    const drawer = form.locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " drawer ")][1]');
    const toggle = drawer.locator(":scope > input.drawer-toggle");
    if (await toggle.count() && await toggle.isChecked()) {
      await drawer.locator(":scope > .drawer-side > label.drawer-overlay").click({ position: { x: 350, y: 20 } });
    }
  }
}

async function createCatalog(page: Page, name: string): Promise<void> {
  const form = formFor(page, "Catalog.create");
  await openForm(form);
  await input(form, "name").fill(name);
  expect((await (await submit(page, form)).json()).status).toBe("committed");
  await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  await closeForm(formFor(page, "Catalog.create"));
  await expect(catalogFor(page, name)).toContainText("No entries in this catalog.");
}

async function createEntry(page: Page, catalog: string, title: string, code = "Ａlice"): Promise<void> {
  const form = formFor(page, "Entry.create", catalogFor(page, catalog));
  await openForm(form);
  for (const [name, value] of Object.entries({ code, title, barcode: "4006381333931", summary: "Original summary" })) {
    await input(form, name).fill(value);
  }
  await submit(page, form);
  await expect(viewFor(page, title)).toBeVisible();
  await closeForm(formFor(page, "Entry.create", catalogFor(page, catalog)));
  await expect(catalogFor(page, catalog)).toContainText("No notes yet.");
}

// The local seed grants Ava the unique source-declared curator role through
// Identity's owner API. Ben retains membership only; no business rows are seeded.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  previewRoles: { Ava: ["curator"] },
  actor: "Ava",
  // These existing owner checks cover nonvisual outcomes; this is a declaration,
  // not a claim that a browser journey executes or passes their native cases.
  ownerChecks: [
    { test: "draft/apps/CanPromptLab/CanPromptLab.can", requirements: [
      "requirement:CanPromptLab:swap-the-two-current-entry-codes:906b5cf6f097",
      "requirement:CanPromptLab:member-attempts-curator-create-edit-archive:da75dea5b1dc",
    ] },
    { test: "packages/cloudflare/src/runtime/promptlab-native-acceptance.integration.test.ts", requirements: [
      "requirement:CanPromptLab:member-attempts-curator-create-edit-archive:da75dea5b1dc",
      "requirement:CanPromptLab:change-code-if-writes-carol-and:d69c52a8a726",
      "requirement:CanPromptLab:replay-a-committed-canonical-operation-with:24a52d128286",
    ] },
    { test: "packages/cloudflare/src/runtime/promptlab-activation-collision.integration.test.ts", requirements: [
      "requirement:CanPromptLab:compute-and-distinct-keys-no-unicode:27c8eccc01c8",
      "requirement:CanPromptLab:changed-key-implementation-collides-on-installed:ddadd49045e8",
    ] },
  ],
  references: [
    { route: "/catalogs", file: "02-catalogs-desktop.png" },
    { route: "/tags", file: "03-tags-desktop.png" },
    { route: "/catalogs/archived", file: "04-catalogs-archived-desktop.png" },
  ],
  journeys: [
    {
      name: "curator navigates empty workspaces and closes intake with the keyboard",
      covers: { states: [
        { route: "/catalogs", state: "empty" }, { route: "/tags", state: "empty" },
        { route: "/catalogs/archived", state: "empty" }, { route: "/catalogs", state: "dialog-open" },
      ] },
      async run({ page, baseURL, capture }) {
        await page.goto(`${baseURL}/catalogs`, { waitUntil: "networkidle" });
        await expect(page.getByText("No catalogs yet.", { exact: true })).toBeVisible();
        await capture("/catalogs", "empty");
        const form = formFor(page, "Catalog.create");
        const opener = form.locator('xpath=ancestor::div[@data-can-menu-dialog][1]').locator(":scope > [data-can-menu-dialog-open]");
        await opener.focus();
        await page.keyboard.press("Enter");
        await expect(form).toBeVisible();
        await capture("/catalogs", "dialog-open");
        await page.keyboard.press("Escape");
        await expect(form).toBeHidden();
        await expect(opener).toBeFocused();
        for (const [title, route, empty] of [
          ["Catalog tags", "/tags", "No tags yet."],
          ["Archived entries", "/catalogs/archived", "No archived entries."],
        ] as const) {
          const navigationToggle = page.locator('.navbar label[for="can-drawer"]');
          const narrow = await navigationToggle.isVisible();
          if (narrow) await navigationToggle.click();
          await page.locator("aside.can-sidebar").getByRole("link", { name: title, exact: true }).click();
          await expect(page).toHaveURL(`${baseURL}${route}`);
          if (narrow) await expect(page.locator('#can-drawer')).not.toBeChecked();
          await expect(page.getByText(empty, { exact: true })).toBeVisible();
          await capture(route, "empty");
        }
      },
    },
    {
      name: "anonymous visitors receive canonical protected route denials",
      unauthenticated: true,
      covers: { states: ["/catalogs", "/tags", "/catalogs/archived"].map(route => ({ route, state: "denied" })) },
      async run({ page, baseURL, capture }) {
        for (const route of ["/catalogs", "/tags", "/catalogs/archived"]) {
          const signIn = await page.goto(`${baseURL}${route}`);
          expect(signIn?.status()).toBe(200);
          await expect(page).toHaveURL(`${baseURL}/auth/login`);
          await expect(page.getByRole("heading", { name: "Sign in", exact: true })).toBeVisible();
          await expect(page.locator('input[name="operation"]')).toHaveCount(0);
          const original = signIn!.request().redirectedFrom();
          expect(original?.url()).toBe(`${baseURL}${route}`);
          const redirect = await original!.response();
          expect(redirect?.status()).toBe(303);
          expect(redirect?.headers()["location"]).toBe("/auth/login");
          // HTML navigation uses canonical sign-in; JSON negotiation retains
          // the actual permission refusal at the protected route.
          // Chromium keeps its document Accept header despite page-level
          // extra headers. Forward this navigation with explicit negotiation;
          // the real preview still supplies the entire response.
          const protectedURL = `${baseURL}${route}`;
          await page.route(protectedURL, request => request.continue({
            headers: { ...request.request().headers(), accept: "application/json" },
          }), { times: 1 });
          try {
            const response = await page.goto(protectedURL);
            expect((await response!.request().allHeaders()).accept).toBe("application/json");
            expect(response?.status()).toBe(403);
            expect(JSON.parse(await page.locator("body").innerText()).code).toBe("forbidden");
            await expect(page.locator("form")).toHaveCount(0);
            await capture(route, "denied");
          } finally { await page.unroute(protectedURL); }
        }
      },
    },
    {
      name: "curator corrects checked entry input and preserves canonical key ownership",
      covers: {
        requirements: [
          "requirement:CanPromptLab:create-lice-then-alice-or-alice:f8d85d42ff6e",
          "requirement:CanPromptLab:create-bob-in-that-catalog-or:a48abbde55e0",
          "requirement:CanPromptLab:delete-an-admitted-entry-through-canonical:bc673179b778",
          "requirement:CanPromptLab:barcode-4006381333931-or-9780306406157-valid-4006381333932:b60539671303",
        ],
        operations: ["prompt_lab.Catalog.create", "prompt_lab.Catalog.update", "prompt_lab.Entry.create", "prompt_lab.Entry.update", "prompt_lab.Entry.delete", "prompt_lab.archive_entry", "prompt_lab.restore_entry"],
        states: [{ route: "/catalogs", state: "pending" }, { route: "/catalogs", state: "success" }, { route: "/catalogs", state: "expanded" }, { route: "/catalogs", state: "menu-open" }, { route: "/catalogs", state: "validation" }, { route: "/catalogs", state: "populated" }, { route: "/catalogs/archived", state: "populated" }],
      },
      async run({ page, baseURL, capture, recordObservedState }) {
        await page.goto(`${baseURL}/catalogs`, { waitUntil: "networkidle" });
        await createCatalog(page, "Browser catalog");
        recordObservedState("/catalogs", "pending");
        recordObservedState("/catalogs", "success");
        const editCatalog = formFor(page, "Catalog.update", catalogFor(page, "Browser catalog"));
        await openForm(editCatalog);
        await input(editCatalog, "name", true).fill("Checked catalog");
        await submit(page, editCatalog);
        await expect(page.getByRole("heading", { name: "Checked catalog", exact: true })).toBeVisible();
        await closeForm(formFor(page, "Catalog.update", catalogFor(page, "Checked catalog")));
        const create = () => formFor(page, "Entry.create", catalogFor(page, "Checked catalog"));
        await openForm(create());
        for (const [name, value] of Object.entries({ code: "Ａlice", title: "Checked entry", barcode: "4006381333932", summary: "Keep this summary" })) await input(create(), name).fill(value);
        await submit(page, create());
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "barcode")).toHaveValue("4006381333932");
        await expect(input(create(), "summary")).toHaveValue("Keep this summary");
        await capture("/catalogs", "validation");
        await input(create(), "barcode").fill("４006381333931");
        await submit(page, create());
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "barcode")).toHaveValue("４006381333931");
        await input(create(), "barcode").fill("4006381333931");
        await input(create(), "code").fill("é".repeat(65));
        await submit(page, create());
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "code")).toHaveValue("é".repeat(65));
        await expect(input(create(), "title")).toHaveValue("Checked entry");
        await input(create(), "code").fill("Ａlice");
        await submit(page, create());
        await expect(viewFor(page, "Checked entry")).toBeVisible();
        await closeForm(create());
        await expect(catalogFor(page, "Checked catalog")).toContainText("No notes yet.");
        await openForm(create());
        for (const [name, value] of Object.entries({ code: "Alice", title: "Duplicate entry", barcode: "9780306406157", summary: "Retain duplicate input" })) await input(create(), name).fill(value);
        const duplicate = await (await submit(page, create())).json();
        expect((duplicate.error ?? duplicate).code).toBe("conflict");
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "code")).toHaveValue("Alice");
        await expect(viewFor(page, "Duplicate entry")).toHaveCount(0);
        await closeForm(create());
        const edit = formFor(page, "Entry.update", viewFor(page, "Checked entry"));
        await openForm(edit, viewFor(page, "Checked entry"));
        await input(edit, "title", true).fill("Updated entry");
        await submit(page, edit);
        await expect(viewFor(page, "Updated entry")).toBeVisible();
        await closeForm(formFor(page, "Entry.update", viewFor(page, "Updated entry")));
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Updated entry")).toContainText("Ａlice");
        await createCatalog(page, "Independent catalog");
        await createEntry(page, "Independent catalog", "Independent same code", "Alice");
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Independent same code")).toContainText("Alice");
        await expect(viewFor(page, "Updated entry")).toContainText("Ａlice");
        const history = catalogFor(page, "Checked catalog").locator("details").filter({ has: page.locator("summary").filter({ hasText: /^History$/ }) }).first();
        await history.locator(":scope > summary").click();
        await expect(history).toHaveAttribute("open", "");
        await expect(history).not.toContainText("History unavailable.");
        await capture("/catalogs", "expanded");
        await history.locator(":scope > summary").click();
        await expect(history).not.toHaveAttribute("open", "");
        await capture("/catalogs", "populated");
        const menu = viewFor(page, "Updated entry").locator("[data-can-action-menu]").first();
        await menu.locator("[data-can-action-menu-trigger]").click();
        await expect(menu.locator("[data-can-action-menu-popover]")).toBeVisible();
        await capture("/catalogs", "menu-open");
        const archive = formFor(page, "archive_entry", viewFor(page, "Updated entry"));
        await openForm(archive, viewFor(page, "Updated entry"));
        const evidence = await archiveEvidence(page, await submit(page, archive));
        await page.goto(`${baseURL}/catalogs/archived`, { waitUntil: "networkidle" });
        await expect(viewFor(page, "Updated entry")).toBeVisible();
        await page.reload({ waitUntil: "networkidle" });
        await expectArchiveEvidence(viewFor(page, "Updated entry"), evidence);
        await capture("/catalogs/archived", "populated");
        const restore = formFor(page, "restore_entry", viewFor(page, "Updated entry"));
        await openForm(restore, viewFor(page, "Updated entry"));
        await submit(page, restore);
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Updated entry")).toHaveCount(0);
        await page.goto(`${baseURL}/catalogs`, { waitUntil: "networkidle" });
        await expect(viewFor(page, "Updated entry")).toContainText("Ａlice");
        await expectClearedArchiveEvidence(viewFor(page, "Updated entry"), evidence);
        const remove = formFor(page, "Entry.delete", viewFor(page, "Updated entry"));
        await openForm(remove, viewFor(page, "Updated entry"));
        await submit(page, remove);
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Updated entry")).toHaveCount(0);
        await createEntry(page, "Checked catalog", "Released code reused");
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Released code reused")).toContainText("Ａlice");
      },
    },
    {
      name: "curator corrects tag byte budget and archives and restores committed tags",
      transportFailures: [{ operation: "prompt_lab.Tag.create", code: "net::ERR_INTERNET_DISCONNECTED" }],
      covers: { requirements: [
        "requirement:CanPromptLab:tag-reference-then-eference-or-reference:f42ef30e94db",
        "requirement:CanPromptLab:entry-code-or-tag-name-contains:4f672c9d7d6a",
      ], operations: ["prompt_lab.Tag.create", "prompt_lab.Tag.update", "prompt_lab.Tag.delete", "prompt_lab.archive_tag", "prompt_lab.restore_tag"],
        states: [{ route: "/tags", state: "failure" }, { route: "/tags", state: "expanded" }, { route: "/tags", state: "pending" }, { route: "/tags", state: "success" }, { route: "/tags", state: "validation" }, { route: "/tags", state: "populated" }] },
      async run({ page, context, baseURL, capture, recordObservedState }) {
        await page.goto(`${baseURL}/tags`, { waitUntil: "networkidle" });
        const create = () => formFor(page, "Tag.create");
        await openForm(create());
        await input(create(), "name").fill("Recovered tag");
        await input(create(), "description").fill("Retained through transport loss");
        const recoveryNonce = await create().locator('input[name="operation_id"]').inputValue();
        try {
          await context.setOffline(true);
          const failed = page.waitForEvent("requestfailed", request => request.method() === "POST" &&
            new URL(request.url()).pathname.endsWith("/prompt_lab.Tag.create"));
          await create().locator('button[type="submit"]').click();
          expect((await failed).failure()?.errorText).toBe("net::ERR_INTERNET_DISCONNECTED");
          await expect(create()).toHaveAttribute("data-can-submit-state", "error");
          await expect(create().getByRole("alert")).toContainText("The submission could not be confirmed.");
          await expect(input(create(), "name")).toHaveValue("Recovered tag");
          await expect(input(create(), "description")).toHaveValue("Retained through transport loss");
          await capture("/tags", "failure");
        } finally { await context.setOffline(false); }
        await expect(create().locator('input[name="operation_id"]')).toHaveValue(recoveryNonce);
        const recovered = await submit(page, create());
        expect(recovered.ok()).toBe(true);
        expect((await recovered.json()).status).toBe("committed");
        recordObservedState("/tags", "pending");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByRole("heading", { name: "Recovered tag", exact: true })).toHaveCount(1);
        await expect(viewFor(page, "Recovered tag")).toContainText("Retained through transport loss");
        recordObservedState("/tags", "success");
        await openForm(create());
        await input(create(), "name").fill("é".repeat(65));
        await input(create(), "description").fill("Keep tag description");
        await submit(page, create());
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "name")).toHaveValue("é".repeat(65));
        await expect(input(create(), "description")).toHaveValue("Keep tag description");
        await capture("/tags", "validation");
        const valid = "é".repeat(64);
        await input(create(), "name").fill(valid);
        await submit(page, create());
        await expect(viewFor(page, valid)).toBeVisible();
        await closeForm(create());
        const edit = formFor(page, "Tag.update", viewFor(page, valid));
        await openForm(edit, viewFor(page, valid));
        await input(edit, "name", true).fill("Reference");
        await submit(page, edit);
        await expect(viewFor(page, "Reference")).toBeVisible();
        await closeForm(formFor(page, "Tag.update", viewFor(page, "Reference")));
        await openForm(create());
        await input(create(), "name").fill("Ｒeference");
        await input(create(), "description").fill("Duplicate tag");
        const duplicate = await (await submit(page, create())).json();
        expect((duplicate.error ?? duplicate).code).toBe("conflict");
        await expect(create().getByRole("alert")).toBeVisible();
        await expect(input(create(), "name")).toHaveValue("Ｒeference");
        await closeForm(create());
        const archive = formFor(page, "archive_tag", viewFor(page, "Reference"));
        await openForm(archive, viewFor(page, "Reference"));
        const evidence = await archiveEvidence(page, await submit(page, archive));
        await page.reload({ waitUntil: "networkidle" });
        await expectArchiveEvidence(viewFor(page, "Reference"), evidence);
        const restore = formFor(page, "restore_tag", viewFor(page, "Reference"));
        await openForm(restore, viewFor(page, "Reference"));
        await submit(page, restore);
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Reference")).toContainText("Keep tag description");
        await expectClearedArchiveEvidence(viewFor(page, "Reference"), evidence);
        const history = page.locator("details").filter({ has: page.locator("summary").filter({ hasText: /^History$/ }) }).first();
        await history.locator(":scope > summary").click();
        await expect(history).toHaveAttribute("open", "");
        await expect(history).not.toContainText("History unavailable.");
        await capture("/tags", "expanded");
        await history.locator(":scope > summary").click();
        await expect(history).not.toHaveAttribute("open", "");
        await capture("/tags", "populated");
        const remove = formFor(page, "Tag.delete", viewFor(page, "Reference"));
        await openForm(remove, viewFor(page, "Reference"));
        await submit(page, remove);
        await page.reload({ waitUntil: "networkidle" });
        await expect(viewFor(page, "Reference")).toHaveCount(0);
      },
    },
    {
      name: "ordinary member manages own notes while curator writes stay unavailable",
      covers: { operations: ["prompt_lab.Note.create", "prompt_lab.Note.update", "prompt_lab.Note.delete"] },
      async run({ page, context, session, baseURL }) {
        await page.goto(`${baseURL}/catalogs`, { waitUntil: "networkidle" });
        await createCatalog(page, "Member catalog");
        await createEntry(page, "Member catalog", "Member entry");
        await session.authenticate(context, "Ben");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.locator('form').filter({ has: page.locator('input[name="operation"][value$=".Catalog.create"]') })).toHaveCount(0);
        await expect(page.locator('form').filter({ has: page.locator('input[name="operation"][value$=".Entry.update"]') })).toHaveCount(0);
        const deniedForm = formFor(page, "Note.create");
        const csrf = await deniedForm.locator('input[name="_csrf"]').inputValue();
        const nonce = await deniedForm.locator('input[name="operation_id"]').inputValue();
        const deniedOperation = (await deniedForm.locator('input[name="operation"]').inputValue()).replace(/\.Note\.create$/, ".Catalog.create");
        const denied = await context.request.post(`${baseURL}/api/operations/${deniedOperation}`, {
          headers: { origin: baseURL, "x-csrf-token": csrf },
          data: { operation: deniedOperation, operation_id: nonce, inputs: { name: "Forbidden member catalog" } },
        });
        expect(denied.status()).toBe(403);
        expect((await denied.json()).code).toBe("forbidden");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByRole("heading", { name: "Forbidden member catalog", exact: true })).toHaveCount(0);
        // Reload mints a fresh owning Note form before the legitimate write.
        const note = formFor(page, "Note.create");
        await openForm(note);
        await input(note, "body").fill("Member-owned note");
        await submit(page, note);
        await expect(page.getByText(/Member-owned note/).first()).toBeVisible();
        await closeForm(formFor(page, "Note.create"));
        const edit = formFor(page, "Note.update");
        await openForm(edit);
        await input(edit, "body", true).fill("Member-owned revision");
        await submit(page, edit);
        await expect(page.getByText(/Member-owned revision/).first()).toBeVisible();
        await closeForm(formFor(page, "Note.update"));
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText(/Member-owned revision/).first()).toBeVisible();
        const remove = formFor(page, "Note.delete");
        await openForm(remove);
        await submit(page, remove);
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText(/Member-owned revision/)).toHaveCount(0);
      },
    },
  ],
});
