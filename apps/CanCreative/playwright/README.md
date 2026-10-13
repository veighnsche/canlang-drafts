# CanCreative browser acceptance

[Source](../CanCreative.can) and [requirements](../CanCreative.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCreative/playwright/app.spec.ts
bun run test:draft:coverage -- CanCreative
```

Declared routes: `/creative`, `/creative/from-chat`, `/creative/recovery`, `/creative/workflows`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `creative_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `manager`, `workflow`, `checked`, `revision`, `budget`, `completed_budget`, `held_budget`, `observed_request`, `pending_run`, `prior_output`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `chat {Conversation,Branch,Turn,can_use,conversation}`; `std {WorkflowInput,WorkflowDefinition,WorkflowInspection,WorkflowValidation,ImageRequest,ImageRun,GeneratedImage,DeliveryResult}`; `std {ImagesV1 as Images} from=deployment.images`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A creative manager validates and publishes a frozen allowlisted workflow; a member deliberately requests an image from a readable chat turn, inspects retained execution progress and opens only finalized authorized image outputs.
- Reject changed graphs, invalid node/key/type and foreign/raw-URL assets. Stop racing success, unknown submission, interrupted file finalization, revoked media and same-sequence reconciliation preserve the original execution and accounting evidence.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No image jobs yet”; “No retained historical callback refusals.”; “No images yet”; “No image-job allowances”; “No conversations”; “No branches”; “No messages”; “No unresolved image jobs”; “No workflow templates yet”; “No input fields found”; “No revisions yet”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
