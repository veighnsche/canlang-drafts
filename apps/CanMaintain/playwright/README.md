# CanMaintain browser acceptance

[Source](../CanMaintain.can) and [requirements](../CanMaintain.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMaintain/playwright/app.spec.ts
```

Declared routes: `/facilities`, `/facilities/my-reports`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `maintenance_manager`, `technician` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `fault_reporter`, `inspection_manager`, `inspection_technician`, `manager_employee`, `technician_employee`, `equipment`, `recurring`, `check`, `service_supplier`, `awaiting`, `superseded`, `retired_work`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `supplier {Supplier}`; `employee {Employee,can_work,test_worker}`; `field {dispatch as dispatch_visit,ReportSubmitted}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `rent_reservations {AffectedBookings,RoomsV1 as Rooms} from=deployment.rooms`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a customer reports a room fault and sees only their own status; a manager opens the location queue, requests downtime and sees pending confirmation plus affected-booking review links.
- a technician submits a failed frozen checklist with evidence, creating linked corrective work. Repair completion awaits manager verification, confirmed release restores availability, and reopening preserves the earlier inspection/completion and assignment history.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No assets match these filters”; “No cancellations recorded”; “No inspection plans”; “No inspections recorded”; “No repairs match these filters”; “No affected bookings”; “No verifications recorded”; “No assignments recorded”; “No delivery attempts”; “No own reports match these filters”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/facilities/my-reports`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/facilities`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/facilities/my-reports`: incomplete `maintain.report` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
