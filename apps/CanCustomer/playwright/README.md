# CanCustomer browser acceptance

[Source](../CanCustomer.can) and [requirements](../CanCustomer.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCustomer/playwright/app.spec.ts
```

Declared routes: `/customers`, `/customers/billing-approvals`, `/companies/{Customer.id}`, `/company-invitations`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `customer_manager`, `customer_reader`, `billing_reader` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `billing_profile`, `company_invitation`, `duplicate_company`, `reviewed_alias`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `invoice {finance}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A verified company administrator invites colleagues with distinct billing/booker scope, sees invitation acceptance separately from CanMember seat assignment, and cannot grant operator staff access or inspect another company.
- Removing a colleague revokes local access immediately while visible reconciliation remains pending/conflicted; a stale action fails, historical invoices remain, and removing the last active administrator requires the documented recovery boundary.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Implemented browser bodies (authored, not yet executed):

- `/company-invitations#empty`: no real contact/invitation records or accept/claim actions as Ava. Addressed invitations and administrator company routes require owner-created records.
- `/customers#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.
- `/customers/billing-approvals#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
