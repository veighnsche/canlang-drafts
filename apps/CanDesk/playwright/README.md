# CanDesk browser acceptance

[Source](../CanDesk.can) and [requirements](../CanDesk.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanDesk/playwright/app.spec.ts
bun run test:draft:coverage -- CanDesk
```

Declared routes: `/support`, `/support/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `support` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `conversation`, `document`, `foreign_document`, `received_message`, `unmatched`, `attempt`, `outbound`, `desk_asset`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,owns,has_role}`; `rent_catalog {Location,test_site}`; `employee {can_work,staff,test_worker}`; `rent_reservations {Booking}`; `member_terms {Membership}`; `invoice {Invoice}`; `maintain {Asset,Repair,report as report_fault}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `desk {InboxV1 as Inbox} from=deployment.support_inbox`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- Reception opens a Wi-Fi request, records a clearly private note, performs the declared repair handoff and sends a customer reply with visible delivery state; the customer sees no private note.
- A customer's reply reopens a resolved ticket once despite duplicate inbound delivery; an uncertain outbound send retains its original message identity and an unknown thread reaches staff review.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Implemented browser bodies (authored, not yet executed):

- `/support#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
