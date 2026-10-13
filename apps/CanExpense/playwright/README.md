# CanExpense browser acceptance

[Source](../CanExpense.can) and [requirements](../CanExpense.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanExpense/playwright/app.spec.ts
bun run test:draft:coverage -- CanExpense
```

Declared routes: `/expenses/mine`, `/expenses/review`, `/expenses/history`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `reviewer`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `receipt`, `corrected_receipt`, `hr_user`, `replacement_user`, `replacement_worker`, `reviewer_user`, `finance_user`, `ordinary_user`, `reviewer_worker`, `finance_worker`, `ordinary_worker`, `other_site`, `claim`, `previous_claim`, `previous_payment`, `receipt_extract`, `rejected_decision`, `legacy_source`, `legacy_receipt_upload`, `legacy_source_upload`, `legacy_entry`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker,hr,deactivate}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A technician submits a private location travel receipt, sees a reasoned rejection, corrects it and reads both revision decisions; colleagues cannot download the receipt.
- Finance opens an approved claim, records matching-currency payment evidence once and exports authorized accounting references, while the claimant sees approval and reimbursement as distinct outcomes.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No claims yet.”; “No assigned submissions.”; “No pending reimbursements.”; “No accounting entries.”; “No source matches.”; “No historical records.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
