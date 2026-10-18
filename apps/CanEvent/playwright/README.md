# CanEvent browser acceptance

[Source](../CanEvent.can) and [requirements](../CanEvent.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanEvent/playwright/app.spec.ts
```

Declared routes: `/events`, `/events/work`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `organizer`, `finance`, `check_in` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `program`, `workshop`, `free_ticket`, `competing_ticket`, `charge_attempt`, `other_charge_attempt`, `event_room`, `incumbent`, `proposed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `customer {Customer,owns,has_location_role,test_company,test_booker}`; `rent_reservations {Resource}`; `rent_reservations {RoomsV1 as Rooms} from=deployment.rooms`; `invoice {Settlement}`; `std {OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {BillingV1 as Billing} from=deployment.billing`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An attendee finds a free or paid workshop, reviews its policy, receives their own confirmed ticket and is admitted once without seeing the roster or acquiring venue-management rights.
- Two competing last-place requests produce one confirmation; a late payment after hold expiry shows its fulfillment/refund outcome, and reception cannot admit an unresolved/cancelled ticket.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Implemented browser bodies (authored, not yet executed):

- `/events#empty`: public discovery heading and no admitted/bookable records or mutation controls, including reload. Published populated offers/windows still require real domain setup.
- `/events/work#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
