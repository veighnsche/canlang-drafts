import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/reception", file: "04-reception-desktop.png" },
    { route: "/reception/credentials", file: "05-reception-credentials-desktop.png" },
    { route: "/reception/mine", file: "06-reception-mine-desktop.png" },
  ],
  journeys: [
    {
      name: "/reception/mine scoped empty view survives reload",
      covers: { states: [{ route: "/reception/mine", state: "empty" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/reception/mine`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "My visitors", exact: true }).first()).toBeVisible();
        await expect(page.getByText("No invitations yet.", { exact: true }).first()).toBeVisible();
        await capture("/reception/mine", "empty");
        await page.reload({ waitUntil: "networkidle" });
        await expect(page.getByText("No invitations yet.", { exact: true }).first()).toBeVisible();
      },
    },
    {
      name: "/reception rejects a member without its business role",
      covers: { states: [{ route: "/reception", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/reception`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/reception", "denied");
      },
    },
    {
      name: "/reception/access-review rejects a member without its business role",
      covers: { states: [{ route: "/reception/access-review", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/reception/access-review`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/reception/access-review", "denied");
      },
    },
    {
      name: "/reception/credentials rejects a member without its business role",
      covers: { states: [{ route: "/reception/credentials", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/reception/credentials`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/reception/credentials", "denied");
      },
    },
  ],
});
