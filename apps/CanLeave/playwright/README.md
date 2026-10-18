# CanLeave browser acceptance

[Source](../CanLeave.can) and [requirements](../CanLeave.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLeave/playwright/app.spec.ts
```

Declared routes: `/leave/mine`, `/leave/review`, `/leave/absence`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `hr`, `leave_reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `calendar`, `vacation`, `sick`, `pending`, `leave_hr`, `assigned_reviewer`, `ordinary_reviewer`, `reviewer_worker`, `december_30`, `december_31`, `january_1`, `january_2`, `allowance_2099`, `recorded`, `allowance_2100`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,can_work,test_worker}`; `rent_catalog {Location,test_site}`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- an employee enters a holiday spanning two years, sees counted working days and per-year allowance portions before submission, and corrects a rejected range without losing their reason.
- an approver encounters a stale balance after a competing approval and sees an affordable refreshed outcome. A location manager then sees accepted absence dates and a rota-conflict Alert without receiving the employee's private leave reason; cancellation restores allowance once.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No working calendar.”; “No counted days.”; “No calendar days configured.”; “No leave requests.”; “No allowances configured.”; “No assigned leave.”; “No portions.”; “No calendars configured.”; “No absence categories configured.”; “No absence dates.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/leave/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/leave/absence`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/leave/review`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
