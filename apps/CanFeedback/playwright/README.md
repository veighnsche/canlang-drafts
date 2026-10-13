# CanFeedback browser acceptance

[Source](../CanFeedback.can) and [requirements](../CanFeedback.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanFeedback/playwright/app.spec.ts
bun run test:draft:coverage -- CanFeedback
```

Declared routes: `/feedback`, `/feedback/moderation`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `product_owner` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `product`, `suggestion`, `root`, `own_vote`, `foreign_vote`, `decision`, `recent`, `recent2`, `recent3`, `recent4`, `recent5`, `moderator`, `journey_product`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `employee {can_work}`; `desk {open_request}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A member submits a phone-booth suggestion, votes, withdraws and retries without inflating the count, then reads the operator's attributed planned/shipped response without seeing voter identities.
- A product owner hides abusive content with a retained reason; public lists and record access both stop exposing it while authorized history and original authorship remain. Urgent private incidents go to the declared support route.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No products yet.”; “No published ideas yet.”; “You have no submissions yet.”; “No suggestions yet.”; “No vote yet.”; “No owned products.”; “No suggestions to review.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
