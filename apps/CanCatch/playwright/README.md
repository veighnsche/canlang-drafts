# CanCatch browser acceptance

[Source](../CanCatch.can) and [requirements](../CanCatch.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCatch/playwright/app.spec.ts
```

Declared routes: `/errors`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `developer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `project`, `open_issue`, `seen`, `raw`, `health`, `alert_notice`, `alert_attempt`, `other_attempt`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {staff,can_work,test_worker}`; `todo {Task}`; `std {DeliveryResult}`; `rent_catalog {test_site}`; `catch {AlertsV1 as Alerts} from=deployment.alerts`; `catch {IntakeV1 as ErrorIntake} from=deployment.error_intake`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Staff trace a failed booking action to a grouped issue, inspect scoped occurrence evidence, assign an owner and follow its declared repair task without viewing restricted customer records.
- After resolution, a late pre-resolution occurrence leaves the issue resolved while a real later recurrence shows reopened state; missing/expired payloads and delivery gaps remain understandable rather than appearing as zero errors.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “Retained payload expired or unavailable; issue metadata remains.”.

Implemented browser bodies (authored, not yet executed):

- `/errors#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
