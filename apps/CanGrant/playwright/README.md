# CanGrant browser acceptance

[Source](../CanGrant.can) and [requirements](../CanGrant.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanGrant/playwright/app.spec.ts
```

Declared routes: `/awards`, `/awards/review`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `coordinator`, `reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `attempt`, `detached_notice`, `detached_success`, `reviewer_user`, `replacement_user`, `coordinator_user`, `ordinary_user`, `hr_user`, `replacement_worker`, `coordinator_worker`, `ordinary_worker`, `colleague`, `program`, `corrected`, `submitted_app`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker,hr,deactivate}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- an applicant reads a timezone-labeled deadline, completes every required answer, corrects inline validation without losing input and sees the submitted revision and authoritative receipt outcome.
- an assigned reviewer enters a reason while another award consumes remaining funds; rejection explains affordability and retains the reason. A coordinator sees an evidenced withdrawal release the commitment once, with history retained and no claim of fund payment.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No published programs.”; “No applications yet.”; “No reviewer changes.”; “No withdrawals.”; “No programs in scope.”; “No approved awards.”; “No applications to review.”; “No reviewer comments.”.

Implemented browser bodies (authored, not yet executed):

- `/awards/review#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
