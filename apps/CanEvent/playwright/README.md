# CanEvent browser acceptance

[Source](../CanEvent.can) and [requirements](../CanEvent.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanEvent/playwright/app.spec.ts
bun run test:draft:coverage -- CanEvent
```

Declared routes: `/events`, `/events/work`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `organizer`, `finance`, `check_in` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `program`, `workshop`, `free_ticket`, `competing_ticket`, `charge_attempt`, `other_charge_attempt`, `event_room`, `incumbent`, `proposed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `customer {Customer,owns,has_location_role,test_company,test_booker}`; `rent_reservations {Resource}`; `rent_reservations {RoomsV1 as Rooms} from=deployment.rooms`; `invoice {Settlement}`; `std {OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {BillingV1 as Billing} from=deployment.billing`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- An attendee finds a free or paid workshop, reviews its policy, receives their own confirmed ticket and is admitted once without seeing the roster or acquiring venue-management rights.
- Two competing last-place requests produce one confirmation; a late payment after hold expiry shows its fulfillment/refund outcome, and reception cannot admit an unresolved/cancelled ticket.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
