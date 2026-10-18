import { expect, test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

// Current desktop concepts from references/README.md; no raster is runtime proof.
// Declared coverage below is limited to assertions and captures in these bodies.
defineDraftAppSuite(import.meta.url, (title, body) => test(title, body), {
  // These existing owner checks cover nonvisual outcomes; this is a declaration,
  // not a claim that a browser journey executes or passes their native cases.
  // The 38 inline example rows in CanTable.can own the walk-in, reserve, seat,
  // clear and cancel transitions behind both companion requirements below.
  // Populated browser execution waits on the DFE-02 preview and DFE-03 resource
  // gates recorded in README.md; personal language/form retention has no source
  // owner and stays explicitly open there.
  ownerChecks: [
    { test: "draft/apps/CanTable/CanTable.can", requirements: [
      "requirement:CanTable:staff-records-a-walk-in-selects:0ded0d0cdec7",
      "requirement:CanTable:a-stale-device-attempts-to-clear:b24c2d4a6b9c",
    ] },
  ],
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
