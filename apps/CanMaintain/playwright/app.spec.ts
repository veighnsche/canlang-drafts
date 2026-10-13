import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/facilities", file: "02-facilities-desktop.png" },
    { route: "/facilities/my-reports", file: "03-facilities-my-reports-desktop.png" },
  ],
  journeys: [
    {
      name: "/facilities/my-reports scoped empty view survives reload",
      covers: { states: [{ route: "/facilities/my-reports", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/facilities/my-reports`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My facility reports", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No own reports match these filters", { exact: true }).first()).toBeVisible();
        await capture("/facilities/my-reports", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No own reports match these filters", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/facilities rejects a member without its business role",
      covers: { states: [{ route: "/facilities", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/facilities`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/facilities", "denied");
      },
    },
    {
      name: "/facilities/my-reports required reference blocks incomplete intake and retains text",
      covers: { states: [{ route: "/facilities/my-reports", state: "validation" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/facilities/my-reports`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        const form = page.locator("form").filter({ has: page.locator('input[name="operation"][value="maintain.report"]') });
        await expect(form).toHaveCount(1);
        const draft = form.locator('[name="inputs[title]"]');
        await draft.fill("Fault entered before choosing an asset");
        const required = form.locator('[name="inputs[asset]"]');
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
        await expect(draft).toHaveValue("Fault entered before choosing an asset");
        await expect(required).toHaveValue("");
        await capture("/facilities/my-reports", "validation");
        // Correcting the text is possible without inventing the missing owning record.
        await draft.fill("Fault entered before choosing an asset (corrected)");
        await expect(draft).toHaveValue("Fault entered before choosing an asset (corrected)");
      },
    },
  ],
});
