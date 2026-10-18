# CanAffiliate browser acceptance

[Source](../CanAffiliate.can) and [requirements](../CanAffiliate.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanAffiliate/playwright/app.spec.ts
```

Declared routes: `/partners`, `/partners/mine`, `/partners/share/{Partner.id}`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `partner_manager`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `sale`, `payout`, `attributed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `invoice {SalesV1 as Sales,Qualification} from=deployment.qualified_sales`; `affiliate {CommissionV1 as Commissions} from=deployment.commissions`; `sales_attribution {capture}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Finance opens a qualifying sale, checks its frozen rate and later refund adjustment, requests settlement, and can distinguish reserved commission, provider allocation and confirmed bank delivery through a timeout.
- A verified partner downloads their statement and follows its settlement references while another partner's sales and customer details remain inaccessible.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Implemented browser bodies (authored, not yet executed):

- `/partners/mine#empty`: verified Ava has no partner-owned rows or onboarding/settlement controls, before/after reload. Partner introduction IDs require an actually created active Partner.
- `/partners#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
