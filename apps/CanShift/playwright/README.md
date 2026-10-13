# CanShift browser acceptance

[Source](../CanShift.can) and [requirements](../CanShift.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanShift/playwright/app.spec.ts
bun run test:draft:coverage -- CanShift
```

Declared routes: `/roster`, `/roster/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `scheduler` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `roster`, `substitute`, `assignment`, `reception_duty`, `working`, `replacement_hours`, `target`, `afternoon`, `afternoon_duty`, `proposed`, `away`, `unavailable`, `notice_attempt`, `notification`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,EmployeeChanged,can_work,test_worker}`; `rent_catalog {Location,test_site}`; `shift {ScheduleIngressV1 as ScheduleRequests} from=deployment.schedule_ingress`; `std {OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A scheduler sees a reception coverage gap, records a justified publication override and publishes the current revision; employees see published duties but not hidden drafts. A stale employee source prevents an unverified assignment.
- Two substitutes attempt competing swaps: only the designated eligible person can decide each request and one replacement commits. An incompatible connected visit remains explicit for dispatcher resolution while rejected edits preserve the original duty.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
