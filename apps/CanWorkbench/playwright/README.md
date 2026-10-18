# CanWorkbench browser acceptance

[Source](../CanWorkbench.can) and [requirements](../CanWorkbench.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanWorkbench/playwright/app.spec.ts
```

Declared routes: `/workbench`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with the current source-defined member and account grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `manager`, `task`, `session`, `proposed`, `moving`, `completing`, `planner_receipt`, `waiting`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `std {DeliveryResult}`; `todo {Task,complete}`; `employee {staff,can_work,deactivate,hr,test_worker}`; `rent_catalog {Location,test_site}`; `workbench {WorkbenchPlannerV1 as Planner} from=deployment.workbench_planner`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- A member starts a retained run with currently granted context, inspects a proposed action and its typed arguments, then explicitly approves or rejects that proposal before any action executes.
- Stale context, revoked grants and failed/unknown planning or execution preserve recoverable state. Reopening and duplicate approval cannot execute twice; stopping does not falsely roll back already committed source work.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No sessions yet”; “No selected tasks”; “No steps yet”; “No proposals yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/workbench`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/workbench`: incomplete `workbench.start` intake retains authored text and exposes canonical incomplete typed-input validation; text correction remains editable. No submission success or business-operation coverage is claimed.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.

Incomplete intake follows the actual generated submit handler. Default generated controls use `aria-required`, so this journey asserts visible `validation`/`denied` feedback from canonical HTTP validation or `projection`/`error` from canonical typed-input projection, preserving the entered text in both cases. It does not assert native browser `required` behavior or suppress errors.
