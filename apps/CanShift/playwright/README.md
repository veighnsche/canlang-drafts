# CanShift browser acceptance

[Source](../CanShift.can) and [requirements](../CanShift.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanShift/playwright/app.spec.ts
```

Declared routes: `/roster`, `/roster/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `scheduler` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `roster`, `substitute`, `assignment`, `reception_duty`, `working`, `replacement_hours`, `target`, `afternoon`, `afternoon_duty`, `proposed`, `away`, `unavailable`, `notice_attempt`, `notification`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,EmployeeChanged,can_work,test_worker}`; `rent_catalog {Location,test_site}`; `shift {ScheduleIngressV1 as ScheduleRequests} from=deployment.schedule_ingress`; `std {OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A scheduler sees a reception coverage gap, records a justified publication override and publishes the current revision; employees see published duties but not hidden drafts. A stale employee source prevents an unverified assignment.
- Two substitutes attempt competing swaps: only the designated eligible person can decide each request and one replacement commits. An incompatible connected visit remains explicit for dispatcher resolution while rejected edits preserve the original duty.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/roster`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/roster/mine`: permitted source title and intake/discovery section, with an actual Availability form for own roster intake. Generic collection emptiness is not credited without a source-specific assertion.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
