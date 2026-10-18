import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/cafe", file: "02-host-queue-desktop.png" },
  ],
  journeys: [
    {
      name: "/cafe rejects a member without its business role",
      covers: { states: [{ route: "/cafe", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/cafe`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/cafe", "denied");
      },
    },
  ],
});
