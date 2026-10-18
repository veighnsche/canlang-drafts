# CanPropose browser acceptance

[Source](../CanPropose.can) and [requirements](../CanPropose.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPropose/playwright/app.spec.ts
```

Declared routes: `/offers`, `/offers/respond/{Revision.id}`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `salesperson` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `priced_item`, `original_pdf`, `generated_pdf`, `notice_attempt`, `attempt`, `pending_document`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,test_company,test_contact,test_admin}`; `sales_attribution {Capture,latest_capture}`; `refer {captured}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {EmailV1 as Mail,DeliveryResult} from=deployment.mail`; `rent_reservations {RoomsV1 as Rooms} from=deployment.rooms`; `propose {DocumentsV1 as Documents} from=deployment.documents`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a verified recipient opens the response link, reads frozen prices/terms and the not-held warning, accepts and sees a separate pending or unavailable booking outcome rather than confirmation.
- sales replaces pricing with a new revision; the old link shows withdrawn state and cannot accept the changed offer. A failed notice/download keeps quote facts intact, and the current revision remains printable under the same recipient policy.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No customers in scope.”; “No proposals match these filters.”; “No revisions recorded.”; “No items recorded.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/offers`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
