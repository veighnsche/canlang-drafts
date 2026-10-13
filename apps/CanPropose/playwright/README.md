# CanPropose browser acceptance

[Source](../CanPropose.can) and [requirements](../CanPropose.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPropose/playwright/app.spec.ts
bun run test:draft:coverage -- CanPropose
```

Declared routes: `/offers`, `/offers/respond/{Revision.id}`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `salesperson` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `priced_item`, `original_pdf`, `generated_pdf`, `notice_attempt`, `attempt`, `pending_document`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,test_company,test_contact,test_admin}`; `sales_attribution {Capture,latest_capture}`; `refer {captured}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {EmailV1 as Mail,DeliveryResult} from=deployment.mail`; `rent_reservations {RoomsV1 as Rooms} from=deployment.rooms`; `propose {DocumentsV1 as Documents} from=deployment.documents`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a verified recipient opens the response link, reads frozen prices/terms and the not-held warning, accepts and sees a separate pending or unavailable booking outcome rather than confirmation.
- sales replaces pricing with a new revision; the old link shows withdrawn state and cannot accept the changed offer. A failed notice/download keeps quote facts intact, and the current revision remains printable under the same recipient policy.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No customers in scope.”; “No proposals match these filters.”; “No revisions recorded.”; “No items recorded.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
