# CanStats browser acceptance

[Source](../CanStats.can) and [requirements](../CanStats.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanStats/playwright/app.spec.ts
bun run test:draft:coverage -- CanStats
```

Declared routes: `/traffic`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `analyst` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `website`, `health`, `seen`, `report`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `stats {DimensionsV1 as Dimensions} from=deployment.dimensions`; `stats {TrackerV1 as Tracker} from=deployment.tracker`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- An analyst compares location-page interest for two reproducible ranges and reads identity coverage plus exact/estimated labels; duplicate events count once and visitor totals are not naively added across ranges.
- A delayed queue produces a lag Alert and does not inflate five-minute live activity. Observed booking goals remain visibly separate from CanReport cash/booking outcomes, including when a report is unavailable.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No configured sites”; “No observed goals”; “No current reports”; “No report rows”; “No health records”; “No accepted events”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
