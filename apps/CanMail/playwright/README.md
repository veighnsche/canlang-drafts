# CanMail browser acceptance

[Source](../CanMail.can) and [requirements](../CanMail.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanMail/playwright/app.spec.ts
bun run test:draft:coverage -- CanMail
```

Declared routes: `/mailroom`, `/mailroom/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `mail_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `attempt`, `pending_notice`, `service`, `nominee`, `unrelated`, `mail_operator`, `mail_employee`, `delegate_contact`, `delegate`, `prepared`, `parcel_item`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,owns,has_role,test_company,test_contact,test_admin,test_directory_manager,test_directory_employee}`; `member_terms {Term,eligible_term,paid_term,allocated}`; `invoice {BillingV1 as Billing,Charge} from=deployment.billing`; `rent_catalog {Location,test_site}`; `employee {Employee,can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- the designated recipient opens an arrived parcel, the company administrator or individual owner nominates a permitted collector, and the recipient later reads collection evidence; staff verifies the current delegate before collection, and repeating the action does not create another receipt or fee.
- staff records forwarding to the frozen destination and sees uncertain delivery as pending even after billing settlement. A later contact edit leaves that destination intact; an expired service still offers explicit authorized resolution for existing items.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No mail services”; “No mail items match these filters”; “No forwarding attempts”; “No handling records”; “No mail service yet”; “No collection delegates”; “No own mail items”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/mailroom/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/mailroom`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/mailroom/mine`: each declared personal view is chosen through the actual radio control, saved through its canonical preference form, checked against the matching empty collection and restored on reload.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete-input rejection does not replace a successful corrected retry with real prerequisite records.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.
