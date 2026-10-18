# CanReception browser acceptance

[Source](../CanReception.can) and [requirements](../CanReception.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanReception/playwright/app.spec.ts
```

Declared routes: `/reception/access-review`, `/companies/{Customer.id}/reception-access`, `/reception`, `/reception/credentials`, `/reception/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `receptionist`, `access_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `admission_day`, `policy`, `arrival`, `key`, `active_issue`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,DateHours,is_open,test_site}`; `customer {Customer,Contact,CompanyAccessChanged,has_role,has_location_role,owns,test_company,test_contact,test_admin,test_directory_manager,test_directory_employee}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `member_terms {MembershipV1 as Membership,AccessEvidence} from=deployment.membership`; `reception {DeviceV1 as Devices} from=deployment.devices`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A verified host invites an eligible guest; reception checks fresh entitlement, records arrival and issues a card. A second issue fails visibly; return and departure retain attributed evidence without clearing a room booking.
- Membership expiry with a card outstanding creates visible revocation work. A failed/unknown device response never renders revoked; stale admission evidence requires refresh and keeps entered evidence available for correction.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No host presence recorded.”; “No visits match this queue.”; “No visitor rules recorded.”; “No credentials recorded.”; “No credential issues recorded.”; “No invitations yet.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/reception/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/reception`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/reception/access-review`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/reception/credentials`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
