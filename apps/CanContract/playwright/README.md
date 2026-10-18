# CanContract browser acceptance

[Source](../CanContract.can) and [requirements](../CanContract.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanContract/playwright/app.spec.ts
```

Declared routes: `/agreements`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `legal`, `property_manager`, `sales`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `signed_file`, `renewal_file`, `property_agreement`, `current_term`, `due_obligation`, `reminder`, `recorded_notice`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer}`; `supplier {Supplier}`; `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A manager retrieves a signed customer agreement, checks its inclusive end date and notice deadline, renews into a new term and can still download the original executed version without seeing a fictitious booking extension.
- A completed obligation and a terminated/renewed term stop their obsolete reminders, while retained completion history and any delivery failure remain visible.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No upcoming notice deadlines”; “No open obligations”; “No agreements match these filters”; “No terms recorded”; “No obligations match this filter”; “No reminders recorded”; “No amendments recorded”.

Implemented browser bodies (authored, not yet executed):

- `/agreements#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
