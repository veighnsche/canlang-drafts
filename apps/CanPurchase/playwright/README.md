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

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/purchasing/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/purchasing`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/purchasing/mine`: incomplete `purchase.Request.create` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete typed-input rejection does not replace server-side validation or a successful corrected retry.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
