# CanExpense design references

Generated with the built-in image_gen tool on 2026-10-13. These are **design references, not browser captures or implemented behavior**. [CanExpense.can](../../CanExpense.can) and [CanExpense.md](../../CanExpense.md) remain authoritative over image text, omissions, control choices and synthetic values. Exact generation/edit prompts are in [prompts.md](prompts.md).

The accepted reference set is desktop-only. The shared shell uses left-side navigation, wordmark at the top left and account at the bottom left. Earlier right-shell prompts and withdrawn mobile prompts are preserved literally in prompts.md as historical provenance. The runtime responsive overlay contract is unchanged; no mobile screenshot is part of this deliverable. Links still derive from current owner grants, declaration order and composition; an image is not a second navigation schema.

## 01-private-claim-desktop

Route: `/expenses/mine`. State: claimant draft and matching transcription. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ claimant draft and matching transcription ](01-private-claim-desktop.png)

Expected: Eligible distinct reviewer, private receipt link, exact amount/date transcription before submit, separate decision/reimbursement history.

## 02-review-reimbursement-desktop

Route: `/expenses/review`. State: assigned reviewer/finance, approved claim payment evidence. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ assigned reviewer/finance, approved claim payment evidence ](02-review-reimbursement-desktop.png)

Expected: State-grouped board and frozen receipt evidence; finance records matching reimbursement once with external evidence.

## Scope and limitations

Historical evidence intake is not pictured. Screenshot values are synthetic and cannot certify receipt/file privacy, review eligibility or duplicate-reference checks; file controls use source schema. All visible names, dates, amounts, files and evidence URLs are illustrative. Forms must preserve source-generated remainder, exact field types, requiredness, current version/permissions, validation and localized labels. Canonical shared loading, empty, no-match, unavailable/conflict states and keyboard behavior still apply even when one populated reference omits them. These images establish no browser, accessibility, runtime, provider or business test result.

## Source presentation choice

The existing source style prompt already expresses this presentation adequately; no source change was made.

## Accepted raster sizes

| File | PNG pixels |
| --- | --- |
| 01-private-claim-desktop.png | 1435 × 1096 |
| 02-review-reimbursement-desktop.png | 1435 × 1096 |

Inspected each accepted image. The raster preserves desktop page context; it is not a CSS viewport capture.
