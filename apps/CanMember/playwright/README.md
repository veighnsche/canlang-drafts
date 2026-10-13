# CanMember browser acceptance

[Source](../CanMember.can) and [requirements](../CanMember.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMember/playwright/app.spec.ts
bun run test:draft:coverage -- CanMember
```

Declared routes: `/membership/plans`, `/membership/access-review`, `/companies/{Customer.id}/membership-access`, `/membership/mine`, `/membership/register`, `/membership/content/edit`, `/membership/content`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `plan_owner`, `member_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `plan`, `access_day`, `plan_hours`, `company_membership`, `beneficiary`, `hourly_grant`, `reserved_request`, `reserved_allocation`, `elapsed_allocation`, `month_end`, `month_renewal`, `leap_end`, `leap_renewal`, `commercial_sale`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `employee {can_work}`; `member_plans {Plan,Benefit,AccessHours,MemberHours}`; `customer {Customer,Contact,CompanyAccessChanged,owns,has_role,has_location_role,test_company,test_contact,test_admin,test_booker,test_directory_manager,test_directory_employee,remove as remove_company_role}`; `rent_catalog {test_site,Location,DateHours,is_open}`; `employee {can_work,test_worker}`; `member_terms {MembershipIngressV1 as Requests} from=deployment.membership_ingress`; `invoice {BillingV1 as Billing,Settlement,DocumentLine,SaleMilestone} from=deployment.billing`; `std {OperationOutcome}`; `sales_attribution {Capture,latest_capture}`; `refer {captured}`; `member_terms {Content,content_editor}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a member reads an eligible site guide, follows their own booking/invoice link and renews early without ending current access. At expiry, paid content disappears while authenticated billing/history and an actionable renewal path remain.
- a company administrator encounters exhausted paid seats or an allowance conflict and sees the recorded reconciliation outcome. Failed recurring payment leaves the next term unpaid; old settlement or expired-period cancellation cannot grant new benefits.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No membership plans match this filter”; “No access hours for this plan”; “No benefits for this plan”; “No memberships for this company”; “No paid terms for this membership”; “No seats assigned for this term”; “No benefit requests for this company”; “No memberships for your account”; “No renewal requests for this membership”; “No terms in this view”; “No allowances in this term”; “No allocations for this allowance”; “No benefit requests for this account”; “No memberships match this view”; “No benefit requests for this customer”; “No member information yet”; “No member information available”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/membership/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/membership/content`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/membership/plans`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/membership/register`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/membership/content/edit`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete-input rejection does not replace a successful corrected retry with real prerequisite records.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.
