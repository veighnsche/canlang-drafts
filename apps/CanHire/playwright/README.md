# CanHire browser acceptance

[Source](../CanHire.can) and [requirements](../CanHire.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanHire/playwright/app.spec.ts
bun run test:draft:coverage -- CanHire
```

Declared routes: `/careers`, `/careers/mine`, `/hiring`, `/hiring/handoff`, `/hiring/interviews`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `recruiter`, `interviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `vacancy`, `applicant`, `booked`, `proposed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,hr,can_work,test_worker}`; `onboard {Template,start,test_template}`; `std {EmailV1 as Mail} from=deployment.mail`; `std {DeliveryResult}`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a candidate finds an open location vacancy, submits verified intake with an optional CV and sees their own stage; a closed vacancy rejects submission while retaining entered application text.
- a recruiter receives a scheduling-conflict Alert and corrects the interval; the current interviewer records private feedback. Withdrawal disables obsolete work/reminders, and the candidate's refreshed view still excludes that feedback and other candidates.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No open vacancies.”; “No applications yet.”; “No vacancies yet.”; “No candidates.”; “No interviews scheduled.”; “No pending handoffs.”; “No assigned interviews.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
