# CanPurchase browser acceptance

[Source](../CanPurchase.can) and [requirements](../CanPurchase.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPurchase/playwright/app.spec.ts
bun run test:draft:coverage -- CanPurchase
```

Declared routes: `/purchasing/mine`, `/purchasing`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `approver` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `vendor`, `budget`, `submission`, `purchase_order`, `purchase_line`, `goods_receipt`, `invoice_pdf`, `invoice_doc`, `filed_payable`, `accepted_doc`, `extra_authorization`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `supplier {Supplier,buyer,budget_manager}`; `stock {StockV1 as Stock,StockReceipt} from=deployment.stock`; `purchase {PayableEvidenceV1 as Accounting} from=deployment.accounting`; `std {OperationOutcome}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a requester submits a purchase and the assigned approver reviews frozen amount/currency; a competing approval triggers a refreshed affordability Alert without losing the entered reason or exceeding budget.
- an order arrives in two deliveries; accepted quantities remain visible while stock posting is pending, and duplicate delivery returns its recorded outcome. Closing with evidenced actual cost releases only unused commitment; cancelling the remainder preserves received goods and spent funds.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No requests yet.”; “No suppliers recorded.”; “No requests match these filters.”; “No orders placed.”; “No invoice evidence recorded.”; “No invoice documents recorded.”; “No line items recorded.”; “No delivery receipts recorded.”; “No supplier returns recorded.”; “No budgets recorded.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
