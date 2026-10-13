# CanInvoice design references

Generated with the built-in image_gen tool on 2026-10-13. These are **design references, not browser captures or implemented behavior**. [CanInvoice.can](../../CanInvoice.can) and [CanInvoice.md](../../CanInvoice.md) remain authoritative over image text, omissions, control choices and synthetic values. Exact generation/edit prompts are in [prompts.md](prompts.md).

The accepted reference set is desktop-only. The shared shell uses left-side navigation, wordmark at the top left and account at the bottom left. Earlier right-shell prompts and withdrawn mobile prompts are preserved literally in prompts.md as historical provenance. The runtime responsive overlay contract is unchanged; no mobile screenshot is part of this deliverable. Links still derive from current owner grants, declaration order and composition; an image is not a second navigation schema.

## 01-own-invoice-desktop

Route: `/finance/my-invoices`. State: verified own billing contact, pending full collection. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ verified own billing contact, pending full collection ](01-own-invoice-desktop.png)

Expected: Issued document/lines, exact currency balance and separate provider outcome; receipt withheld until settled.

## 02-issued-document-desktop

Route: `/finance/invoice/{Invoice.id}`. State: contextual issued invoice for own billing contact. Viewport intent: desktop (~1440×1100 CSS pixels); the tool chooses actual raster dimensions, recorded below after inspection.

![ contextual issued invoice for own billing contact ](02-issued-document-desktop.png)

Expected: Frozen issuer/recipient/service lines and separate current balance/refund/document evidence; same shell context.

## Scope and limitations

Customer-finance authoring, collection adjustments and historical evidence are not separately pictured. No invented revenue metrics, technical retry settings or send-link action. Invoice images cannot prove statutory validity or payment settlement. All visible names, dates, amounts, files and evidence URLs are illustrative. Forms must preserve source-generated remainder, exact field types, requiredness, current version/permissions, validation and localized labels. Canonical shared loading, empty, no-match, unavailable/conflict states and keyboard behavior still apply even when one populated reference omits them. These images establish no browser, accessibility, runtime, provider or business test result.

## Source presentation choice

The existing source style prompt already expresses this presentation adequately; no source change was made.

## Accepted raster sizes

| File | PNG pixels |
| --- | --- |
| 01-own-invoice-desktop.png | 1435 × 1096 |
| 02-issued-document-desktop.png | 1436 × 1096 |

Inspected each accepted image. The raster preserves desktop page context; it is not a CSS viewport capture.
