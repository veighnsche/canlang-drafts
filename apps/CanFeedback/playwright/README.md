# CanFeedback browser acceptance

[Source](../CanFeedback.can) and [requirements](../CanFeedback.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanFeedback/playwright/app.spec.ts
```

Declared routes: `/feedback`, `/feedback/moderation`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `product_owner` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `product`, `suggestion`, `root`, `own_vote`, `foreign_vote`, `decision`, `recent`, `recent2`, `recent3`, `recent4`, `recent5`, `moderator`, `journey_product`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `employee {can_work}`; `desk {open_request}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A member submits a phone-booth suggestion, votes, withdraws and retries without inflating the count, then reads the operator's attributed planned/shipped response without seeing voter identities.
- A product owner hides abusive content with a retained reason; public lists and record access both stop exposing it while authorized history and original authorship remain. Urgent private incidents go to the declared support route.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No products yet.”; “No published ideas yet.”; “You have no submissions yet.”; “No suggestions yet.”; “No vote yet.”; “No owned products.”; “No suggestions to review.”.

Implemented browser bodies (authored, not yet executed):

- `/feedback#empty`: source empty captions asserted before/after real reload using public bootstrap.
- `/feedback/moderation#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
