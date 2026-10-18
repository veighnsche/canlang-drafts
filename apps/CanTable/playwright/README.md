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

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/cafe`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete-input rejection does not replace a successful corrected retry with real prerequisite records.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.

## Missing journey contracts (DFE-01 mapping)

The two companion requirements map to the 38 inline example rows in
[CanTable.can](CanTable.can) for their nonvisual outcomes (see `ownerChecks`
in [app.spec.ts](app.spec.ts)): Booking.create walk-in defaults, Table.update
capacity/deactivation rejections, reserve interval/move/reason rows, seat
overrun-denial and preserved-time rows, clear explicit/stale rows, and
cancel/no-show reason rows. Populated browser execution of the contracts below
is blocked on the DFE-02 preview gate (`PROFILE_UNSUPPORTED` before capture)
and DFE-03 host-actor/record provisioning; nothing below invents source
behavior beyond the companion and the source.

- Journey H1 — host seats a walk-in; a later party waits on the occupied table
  (`requirement:CanTable:staff-records-a-walk-in-selects:0ded0d0cdec7`).
  Covers operations `cafe.Booking.create`, `cafe.reserve`, `cafe.seat`,
  `cafe.clear`; states `/cafe` populated, dialog-open, success and validation.
  Host creates the walk-in through Walk-in intake, reserves a suitable table
  and interval, then records seating with an estimated end. The table stays
  occupied past the estimate (overdue notice, no silent release); seating a
  later party on it is refused with the conflict notice until explicit
  clearance with a reason moves the booking to cleared.
- Journey H2 — stale clear is rejected; cancel/no-show keeps reason and
  history
  (`requirement:CanTable:a-stale-device-attempts-to-clear:b24c2d4a6b9c`).
  Covers operations `cafe.clear`, `cafe.cancel`; states `/cafe` populated,
  success and failure. A clear submitted against a reused table/stale version
  is rejected without changing the current party; cancelling with
  missed true/false records cancelled/no-show with the reason retained and
  visible history. Personal language changes retaining an unfinished walk-in
  form is frontend-only: it has no source operation, no owner check covers
  it, and it stays explicitly open.
