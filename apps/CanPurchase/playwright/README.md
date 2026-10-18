# CanPurchase browser acceptance

[Source](../CanPurchase.can) and [requirements](../CanPurchase.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPurchase/playwright/app.spec.ts
```

Declared routes: `/purchasing/mine`, `/purchasing`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `approver` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `vendor`, `budget`, `submission`, `purchase_order`, `purchase_line`, `goods_receipt`, `invoice_pdf`, `invoice_doc`, `filed_payable`, `accepted_doc`, `extra_authorization`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `supplier {Supplier,buyer,budget_manager}`; `stock {StockV1 as Stock,StockReceipt} from=deployment.stock`; `purchase {PayableEvidenceV1 as Accounting} from=deployment.accounting`; `std {OperationOutcome}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a requester submits a purchase and the assigned approver reviews frozen amount/currency; a competing approval triggers a refreshed affordability Alert without losing the entered reason or exceeding budget.
- an order arrives in two deliveries; accepted quantities remain visible while stock posting is pending, and duplicate delivery returns its recorded outcome. Closing with evidenced actual cost releases only unused commitment; cancelling the remainder preserves received goods and spent funds.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No requests yet.”; “No suppliers recorded.”; “No requests match these filters.”; “No orders placed.”; “No invoice evidence recorded.”; “No invoice documents recorded.”; “No line items recorded.”; “No delivery receipts recorded.”; “No supplier returns recorded.”; “No budgets recorded.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/purchasing/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/purchasing`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/purchasing/mine`: incomplete `purchase.Request.create` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
