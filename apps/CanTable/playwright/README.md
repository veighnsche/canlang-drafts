# CanTable browser acceptance

[Source](../CanTable.can) and [requirements](../CanTable.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTable/playwright/app.spec.ts
```

Declared routes: `/cafe`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `host` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `cafe`, `table`, `spare`, `walk_in`, `diners`, `upcoming`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Staff records a walk-in, selects a suitable single table and seats the party. Its estimated end leaves the table occupied; a later party receives a visible conflict until explicit clearance.
- A stale device attempts to clear a reused table and is rejected without changing the current party. Upcoming reservation/no-show resolution preserves reasons and history, while personal language changes retain an unfinished walk-in form.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No cafés available.”; “No tables defined yet.”; “No bookings match this view.”; “No uncleared diners.”; “No affected upcoming reservations.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/cafe`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.

## Remaining journeys

The source's inline examples cover walk-in, reserve, seat, clear and cancel transitions. Populated browser journeys also need a host actor, current records and a supported preview composition.

- A host creates a walk-in through intake, reserves a suitable table and interval, then records seating with an estimated end. The table stays occupied past that estimate; seating a later party is refused until explicit clearance with a reason.
- Clearing a reused table with a stale version must preserve the current party. Cancellation/no-show retains its reason and visible history.
- Changing personal language should retain an unfinished walk-in form; that frontend behavior needs its own check.
