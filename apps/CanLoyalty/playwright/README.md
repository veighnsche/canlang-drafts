# CanLoyalty browser acceptance

[Source](../CanLoyalty.can) and [requirements](../CanLoyalty.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLoyalty/playwright/app.spec.ts
bun run test:draft:coverage -- CanLoyalty
```

Declared routes: `/loyalty`, `/loyalty/fulfillment`, `/loyalty/catalog`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `program_owner`, `reward_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `perks`, `wallet`, `balance`, `welcome`, `remote`, `bronze`, `silver`, `gold`, `notice`, `reservation`, `observed`, `credited`, `reversed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,test_company,test_contact}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {SalesV1 as Sales,Qualification} from=deployment.qualified_sales`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a verified customer sees distinct available points and tier progress, reserves a welcome perk and receives a reserved Badge even if notification fails; a second concurrent request cannot spend those points again.
- staff filters the permitted fulfillment queue, records delivery evidence and sees fulfilled history. A later reward-price edit preserves the original cost, while an earning reversal remains visible and can block a new unaffordable redemption.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No reward account yet”; “No active rewards”; “No reservations yet”; “No reservations match these filters”; “No reward accounts”; “No points entries yet”; “No reward programs”; “No tiers recorded”; “No rewards recorded”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
