# CanTime browser acceptance

[Source](../CanTime.can) and [requirements](../CanTime.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTime/playwright/app.spec.ts
bun run test:draft:coverage -- CanTime
```

Declared routes: `/time/mine`, `/time/review`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `project_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `time_manager`, `time_technician`, `manager_employee`, `technician_employee`, `project`, `stopped`, `prior`, `adjustment`, `review`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,can_work,test_worker}`; `customer {Customer,test_company}`; `field {Job}`; `rent_catalog {Location,test_site}`; `invoice {BillingV1 as Billing} from=deployment.billing`; `std {DeliveryResult}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A technician starts a timer from two devices and receives one running entry; repeated stop preserves its end. A forgotten overnight visit uses manual entry with reason and receives the correct elapsed duration and origin label.
- A manager approves an entry, changes future project rates and exports its frozen charge once. A later correction preserves attributed adjustment evidence, while pending/failed handoff never renders invoiced or paid.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
