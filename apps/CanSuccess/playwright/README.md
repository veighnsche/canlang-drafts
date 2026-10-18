# CanSuccess browser acceptance

[Source](../CanSuccess.can) and [requirements](../CanSuccess.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanSuccess/playwright/app.spec.ts
```

Declared routes: `/customer-success`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `account_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `managed`, `followup`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,test_company}`; `agreements {Term as AgreementTerm,renew}`; `member_terms {Membership,Term as MembershipTerm,term}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A manager prepares a move-in, adds a milestone and observes its progress denominator, then records a dated follow-up and explicit completion. The linked paid membership remains unchanged by that completion.
- Manager and reminder email changes use the canonical reassignment operation, not generic Account.update. Reassignment transfers pending work to an active manager and invalidates old reminders; archiving stops future notices. A failed delivery or stale source summary remains visible, while notes entered during a conflict are preserved for authorized correction.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No customers found”; “No overdue follow-ups”; “No accounts found”; “No terms found”; “No reminders sent”; “No milestones yet”; “No follow-ups yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/customer-success`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
