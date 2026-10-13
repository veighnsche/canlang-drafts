import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  references: [
    { route: "/referrals", file: "02-referrals-desktop.png" },
    { route: "/referrals/work", file: "03-referrals-work-desktop.png" },
    { route: "/referrals/share/{Advocate.id}", file: "04-referrals-share-Advocate.id-desktop.png" },
  ],
  journeys: [
    {
      name: "/referrals/work rejects a member without its business role",
      covers: { states: [{ route: "/referrals/work", state: "denied" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/referrals/work`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(403);
        expect(response?.headers()["content-type"]).toContain("application/json");
        await expect(page.locator("body")).toContainText('"forbidden"');
        await expect(page.locator("form[data-can-generated-form]")).toHaveCount(0);
        await capture("/referrals/work", "denied");
      },
    },
    {
      name: "/referrals exposes the authored personal intake or discovery section",
      covers: { states: [{ route: "/referrals", state: "initial" }] },
      async run({ page, baseURL, capture }) {
        const response = await page.goto(`${baseURL}/referrals`, { waitUntil: "networkidle" });
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("heading", { name: "Referrals", exact: true }).first()).toBeVisible();
        await expect(page.getByText("Programs and your referral code", { exact: true }).first()).toBeVisible();
        await capture("/referrals", "initial");
      },
    },
  ],
});
