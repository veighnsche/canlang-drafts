# CanCatch browser acceptance

[Source](../CanCatch.can) and [requirements](../CanCatch.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCatch/playwright/app.spec.ts
bun run test:draft:coverage -- CanCatch
```

Declared routes: `/errors`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `developer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `project`, `open_issue`, `seen`, `raw`, `health`, `alert_notice`, `alert_attempt`, `other_attempt`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `employee {staff,can_work,test_worker}`; `todo {Task}`; `std {DeliveryResult}`; `rent_catalog {test_site}`; `catch {AlertsV1 as Alerts} from=deployment.alerts`; `catch {IntakeV1 as ErrorIntake} from=deployment.error_intake`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- Staff trace a failed booking action to a grouped issue, inspect scoped occurrence evidence, assign an owner and follow its declared repair task without viewing restricted customer records.
- After resolution, a late pre-resolution occurrence leaves the issue resolved while a real later recurrence shows reopened state; missing/expired payloads and delivery gaps remain understandable rather than appearing as zero errors.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “Retained payload expired or unavailable; issue metadata remains.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
