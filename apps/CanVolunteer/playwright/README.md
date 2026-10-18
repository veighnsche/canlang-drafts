# CanVolunteer browser acceptance

[Source](../CanVolunteer.can) and [requirements](../CanVolunteer.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanVolunteer/playwright/app.spec.ts
```

Declared routes: `/volunteering`, `/volunteering/work`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `organizer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `community`, `mentoring`, `place`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `rent_reservations {Booking,ReservationChanged,can_read_booking_details,test_hold}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Two volunteers request the last place: one reservation wins and duplicate signup consumes no second place. The participant reads private task instructions, receives an explicit completion result and can withdraw with capacity/reminder release once.
- An organizer cancels or materially reschedules an activity: affected volunteers see cancellation or reconfirmation needs, stale reminders do not send, and venue conflicts remain visible. Attendance is recorded separately without exposing a public roster or implying staff coverage.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/volunteering/work`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/volunteering`: permitted source title and intake/discovery section, with an actual Availability form for own roster intake. Generic collection emptiness is not credited without a source-specific assertion.
- `/volunteering`: save own assignments, assert own section and absence of organizer intake, then reload the saved view. Populated signup/reconfirmation is still a setup gap.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
