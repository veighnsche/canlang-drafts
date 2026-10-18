# CanReport browser acceptance

[Source](../CanReport.can) and [requirements](../CanReport.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanReport/playwright/app.spec.ts
```

Declared routes: `/reports`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `manager`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `utilization`, `unavailable_run`, `service_backlog`, `service_run`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `report {ReportsV1 as Reports} from=deployment.reports`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A manager selects one day/location, reproduces booked utilization from its numerator, denominator and exclusions, then opens only authorized source rows. A closed range with no saleable denominator shows not-applicable.
- Finance traces cash receipts/refunds and receivables to source revisions. A lagging or unavailable source yields labeled incomplete output/export rather than zero, and a later correction updates its contribution once without mutating invoices.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No report definitions available.”; “No runs yet.”; “No source contributions.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/reports`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
