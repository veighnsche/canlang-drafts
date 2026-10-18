# CanMail browser acceptance

[Source](../CanMail.can) and [requirements](../CanMail.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMail/playwright/app.spec.ts
```

Declared routes: `/mailroom`, `/mailroom/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `mail_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `attempt`, `pending_notice`, `service`, `nominee`, `unrelated`, `mail_operator`, `mail_employee`, `delegate_contact`, `delegate`, `prepared`, `parcel_item`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,owns,has_role,test_company,test_contact,test_admin,test_directory_manager,test_directory_employee}`; `member_terms {Term,eligible_term,paid_term,allocated}`; `invoice {BillingV1 as Billing,Charge} from=deployment.billing`; `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- the designated recipient opens an arrived parcel, the company administrator or individual owner nominates a permitted collector, and the recipient later reads collection evidence; staff verifies the current delegate before collection, and repeating the action does not create another receipt or fee.
- staff records forwarding to the frozen destination and sees uncertain delivery as pending even after billing settlement. A later contact edit leaves that destination intact; an expired service still offers explicit authorized resolution for existing items.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No mail services”; “No mail items match these filters”; “No forwarding attempts”; “No handling records”; “No mail service yet”; “No collection delegates”; “No own mail items”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/mailroom/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/mailroom`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/mailroom/mine`: each declared personal view is chosen through the actual radio control, saved through its canonical preference form, checked against the matching empty collection and restored on reload.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
