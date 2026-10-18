# CanRent browser acceptance

[Source](../CanRent.can) and [requirements](../CanRent.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanRent/playwright/app.spec.ts
```

Declared routes: `/workspace/catalog`, `/workspace/history`, `/workspace/refund-review`, `/workspace/resources`, `/workspace`, `/workspace/reservations`, `/workspace/my-bookings`, `/workspace/arrivals`, `/workspace/occupancy`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `billing` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `recorded_resource`, `recorded_window`, `recorded_followup`, `recorded_booking_old`, `recorded_booking_absent`, `test_room`, `test_window`, `test_sale`, `quote_window`, `quote_day`, `quoted_hold`, `closed_quote`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,WeeklyHours,ClosedDate,DateHours,catalog_owner}`; `rent_catalog {Location,WeeklyHours,ClosedDate,DateHours,LocationPolicy,policy_open,is_open,catalog_owner,test_site,open_site,sunday_site,recorded_site}`; `employee {Employee,can_work,test_worker}`; `customer {Customer,BillingProfile,owns,has_location_role,test_company,test_admin,test_booker}`; `invoice {finance}`; `invoice {BillingV1 as Billing,DocumentLine,Settlement,Charge,SaleMilestone} from=deployment.billing`; `member_terms {MembershipV1 as Membership,Entitlement,BenefitInterval,AllowanceOutcome} from=deployment.membership`; `propose {QuoteOffer,AcceptedOffer,QuoteDocument,quote_intervals_valid}`; `sales_attribution {Capture,latest_capture}`; `report {ReportBatch,Checkpoint,Contribution}`; `std {OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `rent_reservations {Booking,ReservationChanged,prepare,arrive,depart,cancel_booking,move,reception,assign_desk,fulfill_free,no_show,confirm_account,extend,reconcile_booking,reconcile_allowance,move_days,move_membership,move_membership_days,abandon_movement,reconcile_movement,retry_movement_cleanup,resend_notice}`; `employee {can_work}`; `rent_reservations {Resource,Booking,resource_report,reservation_manager}`; `rent_catalog {Location}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Two customers request the last pooled seat: one succeeds, the other receives current availability without duplicate capacity/allowance consumption. Failed counterpart holds release once; money overage remains visible until fulfilled.
- Reception sees an overdue occupied room despite its planned end; explicit checkout clears occupancy. A failed reschedule preserves the original booking, and late payment without capacity enters refund/alternative review rather than admission.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No locations yet”; “No weekly hours yet”; “No closed dates yet”; “No date hours yet”; “No matching retained bookings”; “No retained bookings”; “No finance exceptions”; “No confirmed bookings”; “No movement credits”; “No movement credit refunds”; “No adjustments”; “No resources match these filters”; “No day calendars yet”; “No availability windows”; “No bookings yet”; “No capacity revisions yet”; “No desks yet”; “No venue reservations”; “No quote holds”; “No unresolved conflicts”; “No repair blocks”; “No workspace moves”; “No correspondence yet”; “No bookings to handle”; “No bookings in this view”; “No measures in this window”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/workspace`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/workspace/my-bookings`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/workspace/occupancy`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/workspace/catalog`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/workspace/resources`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/workspace/reservations`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/workspace/arrivals`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/workspace/refund-review`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
