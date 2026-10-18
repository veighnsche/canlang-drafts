# CanStats browser acceptance

[Source](../CanStats.can) and [requirements](../CanStats.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanStats/playwright/app.spec.ts
```

Declared routes: `/traffic`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `analyst` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `website`, `health`, `seen`, `report`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `stats {DimensionsV1 as Dimensions} from=deployment.dimensions`; `stats {TrackerV1 as Tracker} from=deployment.tracker`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An analyst compares location-page interest for two reproducible ranges and reads identity coverage plus exact/estimated labels; duplicate events count once and visitor totals are not naively added across ranges.
- A delayed queue produces a lag Alert and does not inflate five-minute live activity. Observed booking goals remain visibly separate from CanReport cash/booking outcomes, including when a report is unavailable.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No configured sites”; “No observed goals”; “No current reports”; “No report rows”; “No health records”; “No accepted events”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/traffic`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
