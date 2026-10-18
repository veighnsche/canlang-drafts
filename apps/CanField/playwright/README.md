# CanField browser acceptance

[Source](../CanField.can) and [requirements](../CanField.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanField/playwright/app.spec.ts
```

Declared routes: `/dispatch`, `/dispatch/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `dispatcher`, `technician` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `technician_employee`, `visit`, `replacement`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,test_company}`; `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `maintain {Repair,Inspection,inspect as record_inspection}`; `std {EmailV1 as Mail} from=deployment.mail`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a dispatcher filters a location, enters a qualified visit and sees pending schedule confirmation; a conflict preserves the form and explains why no visit was confirmed.
- on a phone, the assigned technician records blocked access, then a failed optional photo upload retains entered notes. They retry or explicitly complete without the photo; only the successful operation creates the report/completed outcome. After reassignment, an old open screen cannot complete the job and refreshes its authorized actions.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No visits scheduled.”; “No replacement requests.”; “No reports yet.”; “No assigned visits.”.

Implemented browser bodies (authored, not yet executed):

- `/dispatch#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.
- `/dispatch/mine#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
