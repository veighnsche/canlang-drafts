# CanBook browser acceptance

[Source](../CanBook.can) and [requirements](../CanBook.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanBook/playwright/app.spec.ts
bun run test:draft:coverage -- CanBook
```

Declared routes: `/appointments`, `/appointments/hosts`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `host_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `opening`, `closure`, `published`, `original`, `candidate`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,owns,has_role,test_company,test_contact}`; `rent_catalog {Location,is_open,test_site,open_site}`; `employee {Employee,can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `rent_reservations {RoomsV1 as Rooms} from=deployment.rooms`; `shift {ScheduleV1 as StaffSchedule} from=deployment.staff_schedule`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A prospect chooses a local-time tour slot, confirms it, finds the cancellation cutoff and cancels their own appointment; the host sees released capacity and the current reminder state.
- A room-backed consultation competing for scarce room/host availability shows a conflict or pending outcome without a false confirmation; a failed customer reschedule leaves the original slot intact.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
