# CanGrant design references

Generated with the built-in image_gen tool on 2026-10-13. These are **design references, not browser captures or implemented behavior**. [CanGrant.can](../../CanGrant.can) and [CanGrant.md](../../CanGrant.md) remain authoritative over image text, omissions, control choices and synthetic values. Exact generation/edit prompts are in [prompts.md](prompts.md).

The accepted reference set is desktop-only. The shared shell uses left-side navigation, wordmark at the top left and account at the bottom left. Earlier right-shell prompts and withdrawn mobile prompts are preserved literally in prompts.md as historical provenance. The runtime responsive overlay contract is unchanged; no mobile screenshot is part of this deliverable. Links still derive from current owner grants, declaration order and composition; an image is not a second navigation schema.

## 01-award-review-desktop

Route: `/awards/review`. State: coordinator/reviewer, unaffordable approval. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ coordinator/reviewer, unaffordable approval ](01-award-review-desktop.png)

Expected: Declared currency budget/requested/committed/withdrawn/remaining totals and preserved reason; notice outcome separate from award.

## 02-applicant-intake-desktop

Route: `/awards`. State: authenticated applicant draft. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ authenticated applicant draft ](02-applicant-intake-desktop.png)

Expected: Published terms/deadline/timezone, own incremental required answers and generated amount/reviewer controls; left shared navigation.

## Scope and limitations

Program budget is commitment, not disbursement. Full external intake, correction, recovery and withdrawal dialogs are not expanded; illustrated errors cannot establish concurrent atomic affordability. All visible names, dates, amounts, files and evidence URLs are illustrative. Forms must preserve source-generated remainder, exact field types, requiredness, current version/permissions, validation and localized labels. Canonical shared loading, empty, no-match, unavailable/conflict states and keyboard behavior still apply even when one populated reference omits them. These images establish no browser, accessibility, runtime, provider or business test result.

## Source presentation choice

The existing source style prompt already expresses this presentation adequately; no source change was made.

## Accepted raster sizes

| File | PNG pixels |
| --- | --- |
| 01-award-review-desktop.png | 1435 × 1096 |
| 02-applicant-intake-desktop.png | 1435 × 1096 |

Inspected each accepted image. The raster preserves desktop page context; it is not a CSS viewport capture.
