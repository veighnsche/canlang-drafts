import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/time/mine", file: "01-own-time-desktop.png" },
    { route: "/time/review", file: "02-period-review-desktop.png" },
  ],
  journeys: [
    {
      name: "/time/review rejects a member without its business role",
      covers: { states: [{ route: "/time/review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/time/review`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/time/review", "denied");
      },
    },
    {
      name: "/time/mine required reference blocks incomplete intake and retains text",
      covers: { states: [{ route: "/time/mine", state: "validation" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/time/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        const form = page.locator("form").filter({ has: page.locator('input[name="operation"][value="time.start"]') });
        await expect(form).toHaveCount(1);
        const draft = form.locator('[name="inputs[description]"]');
        await draft.fill("Timer draft retained while employee is missing");
        const required = form.locator('[name="inputs[employee]"]');
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
        await expect(draft).toHaveValue("Timer draft retained while employee is missing");
        await expect(required).toHaveValue("");
        await capture("/time/mine", "validation");
        // Correcting the text is possible without inventing the missing owning record.
        await draft.fill("Timer draft retained while employee is missing (corrected)");
        await expect(draft).toHaveValue("Timer draft retained while employee is missing (corrected)");
      },
    },
  ],
});
