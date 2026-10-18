# CanMember browser acceptance

[Source](../CanMember.can) and [requirements](../CanMember.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMember/playwright/app.spec.ts
```

Declared routes: `/membership/plans`, `/membership/access-review`, `/companies/{Customer.id}/membership-access`, `/membership/mine`, `/membership/register`, `/membership/content/edit`, `/membership/content`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `plan_owner`, `member_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `plan`, `access_day`, `plan_hours`, `company_membership`, `beneficiary`, `hourly_grant`, `reserved_request`, `reserved_allocation`, `elapsed_allocation`, `month_end`, `month_renewal`, `leap_end`, `leap_renewal`, `commercial_sale`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `employee {can_work}`; `member_plans {Plan,Benefit,AccessHours,MemberHours}`; `customer {Customer,Contact,CompanyAccessChanged,owns,has_role,has_location_role,test_company,test_contact,test_admin,test_booker,test_directory_manager,test_directory_employee,remove as remove_company_role}`; `rent_catalog {test_site,Location,DateHours,is_open}`; `employee {can_work,test_worker}`; `member_terms {MembershipIngressV1 as Requests} from=deployment.membership_ingress`; `invoice {BillingV1 as Billing,Settlement,DocumentLine,SaleMilestone} from=deployment.billing`; `std {OperationOutcome}`; `sales_attribution {Capture,latest_capture}`; `refer {captured}`; `member_terms {Content,content_editor}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a member reads an eligible site guide, follows their own booking/invoice link and renews early without ending current access. At expiry, paid content disappears while authenticated billing/history and an actionable renewal path remain.
- a company administrator encounters exhausted paid seats or an allowance conflict and sees the recorded reconciliation outcome. Failed recurring payment leaves the next term unpaid; old settlement or expired-period cancellation cannot grant new benefits.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No membership plans match this filter”; “No access hours for this plan”; “No benefits for this plan”; “No memberships for this company”; “No paid terms for this membership”; “No seats assigned for this term”; “No benefit requests for this company”; “No memberships for your account”; “No renewal requests for this membership”; “No terms in this view”; “No allowances in this term”; “No allocations for this allowance”; “No benefit requests for this account”; “No memberships match this view”; “No benefit requests for this customer”; “No member information yet”; “No member information available”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/membership/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/membership/content`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/membership/plans`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/membership/register`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/membership/content/edit`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
