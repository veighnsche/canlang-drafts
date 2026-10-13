# CanOnboard browser acceptance

[Source](../CanOnboard.can) and [requirements](../CanOnboard.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanOnboard/playwright/app.spec.ts
bun run test:draft:coverage -- CanOnboard
```

Declared routes: `/people/my-readiness`, `/people/onboarding`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with the current source-defined member and account grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `test_checklist`, `hr_user`, `assigned_user`, `assigned_worker`, `opening_step`, `test_step`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,hr,test_worker,deactivate,can_work,staff}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a new employee opens their location checklist on a phone, completes an assigned step and downloads only an authorized document; failure of an optional upload leaves separately saved completion visible.
- HR adds a step and sees the denominator/history change, reassigns a blocker and deactivates the employee. New staff assignment stops while scheduling reconciliation remains explicit, with previous work retained and private candidate/HR documents still restricted.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No assigned steps”; “No employees found”; “No checklists yet”; “No steps yet”; “No templates yet”; “No template steps yet”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
