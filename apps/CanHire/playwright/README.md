# CanHire browser acceptance

[Source](../CanHire.can) and [requirements](../CanHire.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanHire/playwright/app.spec.ts
```

Declared routes: `/careers`, `/careers/mine`, `/hiring`, `/hiring/handoff`, `/hiring/interviews`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `recruiter`, `interviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `vacancy`, `applicant`, `booked`, `proposed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,hr,can_work,test_worker}`; `onboard {Template,start,test_template}`; `std {EmailV1 as Mail} from=deployment.mail`; `std {DeliveryResult}`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a candidate finds an open location vacancy, submits verified intake with an optional CV and sees their own stage; a closed vacancy rejects submission while retaining entered application text.
- a recruiter receives a scheduling-conflict Alert and corrects the interval; the current interviewer records private feedback. Withdrawal disables obsolete work/reminders, and the candidate's refreshed view still excludes that feedback and other candidates.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No open vacancies.”; “No applications yet.”; “No vacancies yet.”; “No candidates.”; “No interviews scheduled.”; “No pending handoffs.”; “No assigned interviews.”.

Implemented browser bodies (authored, not yet executed):

- `/hiring#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.
- `/hiring/handoff#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.
- `/hiring/interviews#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
