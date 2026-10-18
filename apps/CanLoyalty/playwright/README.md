# CanLoyalty browser acceptance

[Source](../CanLoyalty.can) and [requirements](../CanLoyalty.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLoyalty/playwright/app.spec.ts
```

Declared routes: `/loyalty`, `/loyalty/fulfillment`, `/loyalty/catalog`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `program_owner`, `reward_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `perks`, `wallet`, `balance`, `welcome`, `remote`, `bronze`, `silver`, `gold`, `notice`, `reservation`, `observed`, `credited`, `reversed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,test_company,test_contact}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {SalesV1 as Sales,Qualification} from=deployment.qualified_sales`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a verified customer sees distinct available points and tier progress, reserves a welcome perk and receives a reserved Badge even if notification fails; a second concurrent request cannot spend those points again.
- staff filters the permitted fulfillment queue, records delivery evidence and sees fulfilled history. A later reward-price edit preserves the original cost, while an earning reversal remains visible and can block a new unaffordable redemption.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No reward account yet”; “No active rewards”; “No reservations yet”; “No reservations match these filters”; “No reward accounts”; “No points entries yet”; “No reward programs”; “No tiers recorded”; “No rewards recorded”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/loyalty`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/loyalty/fulfillment`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/loyalty/catalog`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
