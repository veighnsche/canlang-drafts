import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/workbench", file: "01-proposal-review-desktop.png" },
  ],
  journeys: [
    {
      name: "/workbench scoped empty view survives reload",
      covers: { states: [{ route: "/workbench", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workbench`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "AI workbench", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No sessions yet", { exact: true }).first()).toBeVisible();
        await capture("/workbench", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No sessions yet", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/workbench required reference blocks incomplete intake and retains text",
      covers: { states: [{ route: "/workbench", state: "validation" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/workbench`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        const form = page.locator("form").filter({ has: page.locator('input[name="operation"][value="workbench.start"]') });
        await expect(form).toHaveCount(1);
        const draft = form.locator('[name="inputs[goal]"]');
        await draft.fill("Plan a task without starting provider work");
        const required = form.locator('[name="inputs[location]"]');
        await expect(required).toBeVisible();
        await expect(required).toHaveValue("");
        await form.locator('button[type="submit"]').click();
        const feedback = form.locator("[data-can-form-feedback]");
        await expect(feedback).toBeVisible();
        await expect(feedback).toHaveAttribute("data-can-form-feedback-code", /^(validation|projection)$/);
        // Canonical projection can refuse incomplete typed money/array inputs before HTTP.
        // Server bound validation uses denied; neither path can become success.
        const code = await feedback.getAttribute("data-can-form-feedback-code");
        await expect(form).toHaveAttribute("data-can-submit-state", code === "validation" ? "denied" : "error");
        await expect(feedback).not.toHaveText("");
        await expect(draft).toHaveValue("Plan a task without starting provider work");
        await expect(required).toHaveValue("");
        await capture("/workbench", "validation");
        // Correcting the text is possible without inventing the missing owning record.
        await draft.fill("Plan a task without starting provider work (corrected)");
        await expect(draft).toHaveValue("Plan a task without starting provider work (corrected)");
      },
    },
  ],
});
