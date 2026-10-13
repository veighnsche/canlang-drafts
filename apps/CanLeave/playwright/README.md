# CanLeave browser acceptance

[Source](../CanLeave.can) and [requirements](../CanLeave.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLeave/playwright/app.spec.ts
bun run test:draft:coverage -- CanLeave
```

Declared routes: `/leave/mine`, `/leave/review`, `/leave/absence`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `hr`, `leave_reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `calendar`, `vacation`, `sick`, `pending`, `leave_hr`, `assigned_reviewer`, `ordinary_reviewer`, `reviewer_worker`, `december_30`, `december_31`, `january_1`, `january_2`, `allowance_2099`, `recorded`, `allowance_2100`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,can_work,test_worker}`; `rent_catalog {Location,test_site}`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- an employee enters a holiday spanning two years, sees counted working days and per-year allowance portions before submission, and corrects a rejected range without losing their reason.
- an approver encounters a stale balance after a competing approval and sees an affordable refreshed outcome. A location manager then sees accepted absence dates and a rota-conflict Alert without receiving the employee's private leave reason; cancellation restores allowance once.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No working calendar.”; “No counted days.”; “No calendar days configured.”; “No leave requests.”; “No allowances configured.”; “No assigned leave.”; “No portions.”; “No calendars configured.”; “No absence categories configured.”; “No absence dates.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
