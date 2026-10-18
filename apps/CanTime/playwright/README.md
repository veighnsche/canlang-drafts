# CanTime browser acceptance

[Source](../CanTime.can) and [requirements](../CanTime.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTime/playwright/app.spec.ts
```

Declared routes: `/time/mine`, `/time/review`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `project_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `time_manager`, `time_technician`, `manager_employee`, `technician_employee`, `project`, `stopped`, `prior`, `adjustment`, `review`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {Employee,can_work,test_worker}`; `customer {Customer,test_company}`; `field {Job}`; `rent_catalog {Location,test_site}`; `invoice {BillingV1 as Billing} from=deployment.billing`; `std {DeliveryResult}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A technician starts a timer from two devices and receives one running entry; repeated stop preserves its end. A forgotten overnight visit uses manual entry with reason and receives the correct elapsed duration and origin label.
- A manager approves an entry, changes future project rates and exports its frozen charge once. A later correction preserves attributed adjustment evidence, while pending/failed handoff never renders invoiced or paid.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/time/review`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/time/mine`: incomplete `time.start` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
