# CanLoyalty browser acceptance

[Source](../CanLoyalty.can) and [requirements](../CanLoyalty.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLoyalty/playwright/app.spec.ts
bun run test:draft:coverage -- CanLoyalty
```

Declared routes: `/loyalty`, `/loyalty/fulfillment`, `/loyalty/catalog`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `program_owner`, `reward_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `perks`, `wallet`, `balance`, `welcome`, `remote`, `bronze`, `silver`, `gold`, `notice`, `reservation`, `observed`, `credited`, `reversed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,test_company,test_contact}`; `rent_catalog {Location,test_site}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `invoice {SalesV1 as Sales,Qualification} from=deployment.qualified_sales`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a verified customer sees distinct available points and tier progress, reserves a welcome perk and receives a reserved Badge even if notification fails; a second concurrent request cannot spend those points again.
- staff filters the permitted fulfillment queue, records delivery evidence and sees fulfilled history. A later reward-price edit preserves the original cost, while an earning reversal remains visible and can block a new unaffordable redemption.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No reward account yet”; “No active rewards”; “No reservations yet”; “No reservations match these filters”; “No reward accounts”; “No points entries yet”; “No reward programs”; “No tiers recorded”; “No rewards recorded”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/loyalty`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/loyalty/fulfillment`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/loyalty/catalog`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete-input rejection does not replace a successful corrected retry with real prerequisite records.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.
