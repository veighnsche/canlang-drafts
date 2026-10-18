# CanStock browser acceptance

[Source](../CanStock.can) and [requirements](../CanStock.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanStock/playwright/app.spec.ts
```

Declared routes: `/stock`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `stock_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `coffee`, `goods`, `opening`, `purchased`, `consumed`, `incoming`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `stock {StockIngressV1 as Receipts} from=deployment.stock_receipts`; `std {OperationOutcome}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Staff receives one partial purchase delivery, replays its evidence and sees only accepted units posted once. A rejected quantity never becomes usable stock; later return/correction remains linked to the receipt and ledger.
- Staff transfers boxes between two permitted sites: one atomic result preserves total stock. A source-site shortage or missing grant keeps both balances unchanged and retains the entered transfer for correction, even when another location has stock.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No purchase projections match these filters”; “No items match this search”; “No thresholds for this location”; “No ledger movements for this location”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/stock`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
