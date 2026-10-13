# CanTrade browser acceptance

[Source](../CanTrade.can) and [requirements](../CanTrade.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTrade/playwright/app.spec.ts
bun run test:draft:coverage -- CanTrade
```

Declared routes: `/marketplace`, `/marketplace/reports`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `moderator` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `listing`, `complaint`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `member_terms {eligible_term,Term,paid_term as paid,allocated}`; `customer {test_admin,test_contact}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- An eligible member publishes an offered service with chosen contact/audience, finds it through filters and closes it when fulfilled. Their login email stays private unless explicitly entered for publication; direct edits by another author fail.
- A reported abusive listing is removed by a moderator with reason/history and disappears from search and old links. Expired membership cannot recover member-only access through saved filters/URLs, and contact edits survive correctable validation errors.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No active listings match.”; “No own listings yet.”; “No audience record yet.”; “No reports match this filter.”; “No listings awaiting moderation.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
