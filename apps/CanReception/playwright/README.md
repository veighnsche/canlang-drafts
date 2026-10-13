# CanReception browser acceptance

[Source](../CanReception.can) and [requirements](../CanReception.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanReception/playwright/app.spec.ts
bun run test:draft:coverage -- CanReception
```

Declared routes: `/reception/access-review`, `/companies/{Customer.id}/reception-access`, `/reception`, `/reception/credentials`, `/reception/mine`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `receptionist`, `access_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `admission_day`, `policy`, `arrival`, `key`, `active_issue`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,DateHours,is_open,test_site}`; `customer {Customer,Contact,CompanyAccessChanged,has_role,has_location_role,owns,test_company,test_contact,test_admin,test_directory_manager,test_directory_employee}`; `employee {can_work,test_worker}`; `std {DeliveryResult}`; `std {EmailV1 as Mail} from=deployment.mail`; `member_terms {MembershipV1 as Membership,AccessEvidence} from=deployment.membership`; `reception {DeviceV1 as Devices} from=deployment.devices`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A verified host invites an eligible guest; reception checks fresh entitlement, records arrival and issues a card. A second issue fails visibly; return and departure retain attributed evidence without clearing a room booking.
- Membership expiry with a card outstanding creates visible revocation work. A failed/unknown device response never renders revoked; stale admission evidence requires refresh and keeps entered evidence available for correction.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No host presence recorded.”; “No visits match this queue.”; “No visitor rules recorded.”; “No credentials recorded.”; “No credential issues recorded.”; “No invitations yet.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

- `/reception/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/reception`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/reception/access-review`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/reception/credentials`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

These bodies have been authored, not browser-executed. They use the real protected preview, Identity actor and canonical page/forms. No DOM mutation, mocked response, seed API, fabricated record ID, or live provider request supplies a result. `covers.requirements` and `covers.operations` stay empty because these checks do not fulfill the complete companion workflows or prove a business transition. The lexical coverage gate must remain incomplete.

Compiler-selected composition/prompt admission is the first runtime gate. The existing setup paragraph names the role, owning-record and deployment-resource gates: example fixtures execute in isolated stores and are not serving-preview records. Release those gates by provisioning actual source-authorized actors and creating prerequisite records through their owning operations. Then add the listed publication/approval/fulfillment/recovery, stale/revoked grants, loading/failure/pending and populated journeys with committed-data reload. A denial-only app still needs all permitted functionality. Incomplete-input rejection does not replace a successful corrected retry with real prerequisite records.

Current gallery mappings exclude legacy or withdrawn concepts. Empty and denied captures are diagnostic states, not evidence that the populated concept is reproduced. Desktop captures require actual comparison review; narrow-screen functionality still requires checks even though the gallery has no mobile target. Any absent source-route concept remains a visible visual gap, not an automatically accepted baseline.
