# CanOnboard browser acceptance

[Source](../CanOnboard.can) and [requirements](../CanOnboard.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanOnboard/playwright/app.spec.ts
```

Declared routes: `/people/my-readiness`, `/people/onboarding`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with the current source-defined member and account grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `test_checklist`, `hr_user`, `assigned_user`, `assigned_worker`, `opening_step`, `test_step`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,hr,test_worker,deactivate,can_work,staff}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a new employee opens their location checklist on a phone, completes an assigned step and downloads only an authorized document; failure of an optional upload leaves separately saved completion visible.
- HR adds a step and sees the denominator/history change, reassigns a blocker and deactivates the employee. New staff assignment stops while scheduling reconciliation remains explicit, with previous work retained and private candidate/HR documents still restricted.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No assigned steps”; “No employees found”; “No checklists yet”; “No steps yet”; “No templates yet”; “No template steps yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/people/my-readiness`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/people/onboarding`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/people/my-readiness`: each declared personal view is chosen through the actual radio control, saved through its canonical preference form, checked against the matching empty collection and restored on reload.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
