# CanCreative browser acceptance

[Source](../CanCreative.can) and [requirements](../CanCreative.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCreative/playwright/app.spec.ts
```

Declared routes: `/creative`, `/creative/from-chat`, `/creative/recovery`, `/creative/workflows`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `creative_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `manager`, `workflow`, `checked`, `revision`, `budget`, `completed_budget`, `held_budget`, `observed_request`, `pending_run`, `prior_output`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `chat {Conversation,Branch,Turn,can_use,conversation}`; `std {WorkflowInput,WorkflowDefinition,WorkflowInspection,WorkflowValidation,ImageRequest,ImageRun,GeneratedImage,DeliveryResult}`; `std {ImagesV1 as Images} from=deployment.images`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A creative manager validates and publishes a frozen allowlisted workflow; a member deliberately requests an image from a readable chat turn, inspects retained execution progress and opens only finalized authorized image outputs.
- Reject changed graphs, invalid node/key/type and foreign/raw-URL assets. Stop racing success, unknown submission, interrupted file finalization, revoked media and same-sequence reconciliation preserve the original execution and accounting evidence.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No image jobs yet”; “No retained historical callback refusals.”; “No images yet”; “No image-job allowances”; “No conversations”; “No branches”; “No messages”; “No unresolved image jobs”; “No workflow templates yet”; “No input fields found”; “No revisions yet”.

Implemented browser bodies (authored, not yet executed):

- `/creative#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/creative#empty`: source empty captions asserted before/after real reload as Ava.
- `/creative/from-chat#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/creative/from-chat#empty`: source empty captions asserted before/after real reload as Ava.
- `/creative/recovery#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/creative/recovery#empty`: source empty captions asserted before/after real reload as Ava.
- `/creative/workflows#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
