import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/purchasing/mine", file: "02-purchasing-mine-desktop.png" },
    { route: "/purchasing", file: "03-purchasing-desktop.png" },
  ],
  journeys: [
    {
      name: "/purchasing/mine scoped empty view survives reload",
      covers: { states: [{ route: "/purchasing/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/purchasing/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My requests", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No requests yet.", { exact: true }).first()).toBeVisible();
        await capture("/purchasing/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No requests yet.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/purchasing rejects a member without its business role",
      covers: { states: [{ route: "/purchasing", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/purchasing`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/purchasing", "denied");
      },
    },
    {
      name: "/purchasing/mine required reference blocks incomplete intake and retains text",
      covers: { states: [{ route: "/purchasing/mine", state: "validation" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/purchasing/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        const form = page.locator("form").filter({ has: page.locator('input[name="operation"][value="purchase.Request.create"]') });
        await expect(form).toHaveCount(1);
        const draft = form.locator('[name="inputs[purpose]"]');
        await draft.fill("Purchase draft retained while budget is missing");
        const required = form.locator('[name="inputs[parent]"]');
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
        await expect(draft).toHaveValue("Purchase draft retained while budget is missing");
        await expect(required).toHaveValue("");
        await capture("/purchasing/mine", "validation");
        // Correcting the text is possible without inventing the missing owning record.
        await draft.fill("Purchase draft retained while budget is missing (corrected)");
        await expect(draft).toHaveValue("Purchase draft retained while budget is missing (corrected)");
      },
    },
  ],
});
