# CanRefer browser acceptance

[Source](../CanRefer.can) and [requirements](../CanRefer.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanRefer/playwright/app.spec.ts
```

Declared routes: `/referrals`, `/referrals/work`, `/referrals/share/{Advocate.id}`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `program_manager`, `finance` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `reward_paid`, `earned`, `observed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {SalesV1 as Sales,Qualification} from=deployment.qualified_sales`; `customer {test_company}`; `sales_attribution {Capture,capture}`; `customer {Customer,owns,has_role,test_company,test_contact,test_admin}`; `rent_catalog {Location}`; `refer {Advocate,advocate as test_advocate}`; `affiliate {Partner,broker as test_broker}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An advocate copies a link, sees a source-backed first qualifying booking credited and traces the reward through a finance-entered payment. Replayed conversion/payment evidence adds neither a second reward nor another allocation.
- A settled conversion is reversed: history retains original credit/payment, owed balance is explicit and unaffordable settlement stays blocked. Switching language preserves an unfinished payment form and its selected currency.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No conversions yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/referrals/work`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/referrals`: permitted source title and intake/discovery section, with an actual Availability form for own roster intake. Generic collection emptiness is not credited without a source-specific assertion.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
