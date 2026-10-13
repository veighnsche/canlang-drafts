# CanContract browser acceptance

[Source](../CanContract.can) and [requirements](../CanContract.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanContract/playwright/app.spec.ts
bun run test:draft:coverage -- CanContract
```

Declared routes: `/agreements`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `legal`, `property_manager`, `sales`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `signed_file`, `renewal_file`, `property_agreement`, `current_term`, `due_obligation`, `reminder`, `recorded_notice`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer}`; `supplier {Supplier}`; `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A manager retrieves a signed customer agreement, checks its inclusive end date and notice deadline, renews into a new term and can still download the original executed version without seeing a fictitious booking extension.
- A completed obligation and a terminated/renewed term stop their obsolete reminders, while retained completion history and any delivery failure remain visible.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No upcoming notice deadlines”; “No open obligations”; “No agreements match these filters”; “No terms recorded”; “No obligations match this filter”; “No reminders recorded”; “No amendments recorded”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
