# CanExpense browser acceptance

[Source](../CanExpense.can) and [requirements](../CanExpense.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanExpense/playwright/app.spec.ts
```

Declared routes: `/expenses/mine`, `/expenses/review`, `/expenses/history`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `reviewer`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `receipt`, `corrected_receipt`, `hr_user`, `replacement_user`, `replacement_worker`, `reviewer_user`, `finance_user`, `ordinary_user`, `reviewer_worker`, `finance_worker`, `ordinary_worker`, `other_site`, `claim`, `previous_claim`, `previous_payment`, `receipt_extract`, `rejected_decision`, `legacy_source`, `legacy_receipt_upload`, `legacy_source_upload`, `legacy_entry`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker,hr,deactivate}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A technician submits a private location travel receipt, sees a reasoned rejection, corrects it and reads both revision decisions; colleagues cannot download the receipt.
- Finance opens an approved claim, records matching-currency payment evidence once and exports authorized accounting references, while the claimant sees approval and reimbursement as distinct outcomes.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No claims yet.”; “No assigned submissions.”; “No pending reimbursements.”; “No accounting entries.”; “No source matches.”; “No historical records.”.

Implemented browser bodies (authored, not yet executed):

- `/expenses/mine#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/expenses/mine#empty`: source empty captions asserted before/after real reload as Ava.
- `/expenses/review#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
