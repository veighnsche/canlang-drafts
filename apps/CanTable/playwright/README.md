# CanTable browser acceptance

[Source](../CanTable.can) and [requirements](../CanTable.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTable/playwright/app.spec.ts
bun run test:draft:coverage -- CanTable
```

Declared routes: `/cafe`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `host` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `cafe`, `table`, `spare`, `walk_in`, `diners`, `upcoming`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- Staff records a walk-in, selects a suitable single table and seats the party. Its estimated end leaves the table occupied; a later party receives a visible conflict until explicit clearance.
- A stale device attempts to clear a reused table and is rejected without changing the current party. Upcoming reservation/no-show resolution preserves reasons and history, while personal language changes retain an unfinished walk-in form.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No cafés available.”; “No tables defined yet.”; “No bookings match this view.”; “No uncleared diners.”; “No affected upcoming reservations.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
