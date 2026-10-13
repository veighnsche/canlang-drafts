# CanMaintain browser acceptance

[Source](../CanMaintain.can) and [requirements](../CanMaintain.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMaintain/playwright/app.spec.ts
bun run test:draft:coverage -- CanMaintain
```

Declared routes: `/facilities`, `/facilities/my-reports`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `maintenance_manager`, `technician` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `fault_reporter`, `inspection_manager`, `inspection_technician`, `manager_employee`, `technician_employee`, `equipment`, `recurring`, `check`, `service_supplier`, `awaiting`, `superseded`, `retired_work`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `supplier {Supplier}`; `employee {Employee,can_work,test_worker}`; `field {dispatch as dispatch_visit,ReportSubmitted}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `rent_reservations {AffectedBookings,RoomsV1 as Rooms} from=deployment.rooms`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a customer reports a room fault and sees only their own status; a manager opens the location queue, requests downtime and sees pending confirmation plus affected-booking review links.
- a technician submits a failed frozen checklist with evidence, creating linked corrective work. Repair completion awaits manager verification, confirmed release restores availability, and reopening preserves the earlier inspection/completion and assignment history.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No assets match these filters”; “No cancellations recorded”; “No inspection plans”; “No inspections recorded”; “No repairs match these filters”; “No affected bookings”; “No verifications recorded”; “No assignments recorded”; “No delivery attempts”; “No own reports match these filters”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/facilities/my-reports`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/facilities`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/facilities/my-reports`: incomplete `maintain.report` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete typed-input rejection does not replace server-side validation or a successful corrected retry.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
