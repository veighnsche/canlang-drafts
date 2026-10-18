# CanInvoice browser acceptance

[Source](../CanInvoice.can) and [requirements](../CanInvoice.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanInvoice/playwright/app.spec.ts
```

Declared routes: `/finance/invoice-history`, `/finance/my-invoices`, `/finance/invoices`, `/finance/invoice/{Invoice.id}`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with the current source-defined member and account grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `legacy_document`, `legacy_invoice`, `legacy_edge`, `test_invoice`, `test_payment`, `test_refund`, `reconciliation_attempt`, `pending_reconciliation`, `outside_site`, `test_credit`, `test_defaults`, `test_profile`, `test_external`, `customer_history`, `commercial_sale`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,BillingProfile,owns,has_role,test_company,test_contact,test_billing}`; `rent_catalog {Location,test_site}`; `rent_reservations {LegacyBooking,retain_legacy as retain_booking,history_user,history_worker,legacy_source,legacy_booking}`; `employee {can_work,test_worker}`; `std {PaymentState,OperationOutcome,DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `std {PaymentsV1 as Payments} from=deployment.payments`; `invoice {BillingIngressV1 as BillingRequests} from=deployment.billing_ingress`; `invoice {DocumentsV1 as Documents} from=deployment.documents`; `invoice {SalesIngressV1 as SalesRequests} from=deployment.sales_ingress`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- after membership expiry, a verified billing contact opens their invoice, prints its frozen identities/lines and pays the full current balance; provider return shows pending until confirmed settlement, then a separate receipt.
- finance credits an issued invoice during uncertain collection; obsolete checkout disables and the queue retains reconciliation/refund obligations. A stale draft edit preserves input, while later customer/address changes leave the issued document unchanged.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No historical invoices match this lookup”; “No historical invoices retained yet”; “No booking links retained for this invoice”; “No own invoices match these filters”; “No documents generated yet”; “No document requests yet”; “No lines on this invoice”; “No payment attempts yet”; “No customers available”; “No invoices match these filters”; “No attempts recorded yet”; “No observation requests yet”; “No external payments recorded”; “No external refunds recorded”; “No credits recorded”; “No commercial history reviewed yet”.

Implemented browser bodies (authored, not yet executed):

- Own invoice/history empty states assert exact source captions and absence of finance/payment controls. Issued invoice detail needs a real owning invoice, rather than a fabricated route ID.
- `/finance/invoices#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
