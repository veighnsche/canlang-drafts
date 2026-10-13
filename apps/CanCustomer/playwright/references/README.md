# CanCustomer desktop appearance references

4 active desktop references. Latest user direction: **left sidebar, wordmark top left, account bottom left; desktop only**. These are built-in image_gen intended appearance illustrations, generated and inspected on 2026-10-13. They are not runtime screenshots or executed frontend evidence.

Authority: [CanCustomer.can](../../CanCustomer.can), [companion requirements](../../CanCustomer.md), [shared shell](../../../../../docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration) and [workspace context](../../../../WORKSPACE_OPERATOR.md). Owning source controls content, field types, permissions, operations, evaluation order and recovery. Sample records, incidental dates and wording are non-normative.

## Active references

### 01-company-people-desktop-left

- Route: `/companies/{Customer.id}`.
- State/audience: own administrator.
- Viewport: desktop landscape; raster 1506 × 1045 pixels (an illustration, not measured browser CSS pixels).
- Visual expectations: canonical left navigation and bottom-left account; readable neutral daisyUI surfaces, restrained indigo actions, distinct captioned states, complete source-defined forms and preserved authorized record context.
- Known omissions: Exact source-generated boolean/text controls may differ from pictured selectors. CSV invalid/duplicate preview, billing-profile detail, revoked invitations and runtime conflicts are not separately pictured. Contact account proof and external identity remain distinct fields.
- Exact requests: [primary/final shell request](01-company-people-desktop-left.prompt.md); any focused corrections are retained in [prompts.md](prompts.md).

![CanCustomer /companies/{Customer.id} — own administrator](01-company-people-desktop-left.png)

### 03-directory-desktop-left

- Route: `/customers`.
- State/audience: customer manager, contact intake.
- Viewport: desktop landscape; raster 1506 × 1045 pixels (an illustration, not measured browser CSS pixels).
- Visual expectations: canonical left navigation and bottom-left account; readable neutral daisyUI surfaces, restrained indigo actions, distinct captioned states, complete source-defined forms and preserved authorized record context.
- Known omissions: Exact source-generated boolean/text controls may differ from pictured selectors. CSV invalid/duplicate preview, billing-profile detail, revoked invitations and runtime conflicts are not separately pictured. Contact account proof and external identity remain distinct fields.
- Exact requests: [primary/final shell request](03-directory-desktop-left.prompt.md); any focused corrections are retained in [prompts.md](prompts.md).

![CanCustomer /customers — customer manager, contact intake](03-directory-desktop-left.png)

### 04-billing-approval-desktop-left

- Route: `/customers/billing-approvals`.
- State/audience: finance, explicit approval.
- Viewport: desktop landscape; raster 1505 × 1045 pixels (an illustration, not measured browser CSS pixels).
- Visual expectations: canonical left navigation and bottom-left account; readable neutral daisyUI surfaces, restrained indigo actions, distinct captioned states, complete source-defined forms and preserved authorized record context.
- Known omissions: Exact source-generated boolean/text controls may differ from pictured selectors. CSV invalid/duplicate preview, billing-profile detail, revoked invitations and runtime conflicts are not separately pictured. Contact account proof and external identity remain distinct fields.
- Exact requests: [primary/final shell request](04-billing-approval-desktop-left.prompt.md); any focused corrections are retained in [prompts.md](prompts.md).

![CanCustomer /customers/billing-approvals — finance, explicit approval](04-billing-approval-desktop-left.png)

### 02-invitations-desktop-left

- Route: `/company-invitations`.
- State/audience: verified addressed invitee.
- Viewport: desktop landscape; raster 1505 × 1045 pixels (an illustration, not measured browser CSS pixels).
- Visual expectations: canonical left navigation and bottom-left account; readable neutral daisyUI surfaces, restrained indigo actions, distinct captioned states, complete source-defined forms and preserved authorized record context.
- Known omissions: Exact source-generated boolean/text controls may differ from pictured selectors. CSV invalid/duplicate preview, billing-profile detail, revoked invitations and runtime conflicts are not separately pictured. Contact account proof and external identity remain distinct fields.
- Exact requests: [primary/final shell request](02-invitations-desktop-left.prompt.md); any focused corrections are retained in [prompts.md](prompts.md).

![CanCustomer /company-invitations — verified addressed invitee](02-invitations-desktop-left.png)

## Presentation refinement

Existing Then style guidance already expresses the useful presentation seen in these references; no app-specific style expansion was needed. Shared-shell comments now say left-sidebar. No business declarations, permissions, operations, API contracts, runtime implementation or tests were changed for these illustrations.

## Verification and scope

Every active PNG was inspected for desktop framing, left navigation, bottom-left account, readable hierarchy and material source discrepancies. Focused revisions addressed concrete defects. Files were copied into this folder immediately after generation. Small visual/text differences are tolerated; source authority is never derived from incidental image details. Changed style strings were directly inspected; runtime behavior, accessibility interactions, uploads, polling, admission, provider outcomes and browser flows were not executed.

[Exact prompt archive](prompts.md) preserves original requests literally, including superseded right-shell requests and withdrawn mobile requests. Task-created intermediate PNGs and mobile PNGs are excluded from this final set. Runtime responsiveness remains governed by source/shared contracts.
