# CanLearn browser acceptance

[Source](../CanLearn.can) and [requirements](../CanLearn.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLearn/playwright/app.spec.ts
```

Declared routes: `/learning/mine`, `/learning/courses`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `instructor` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `course_instructor`, `course_learner`, `instructor_employee`, `learner_employee`, `course`, `published`, `lesson`, `enrolled`, `acknowledged`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,staff as is_staff,test_worker}`; `member_terms {Term,eligible_term,paid_term,allocated}`; `customer {test_contact,test_admin}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- a member learner opens their enrolled orientation, reads ordered text and acknowledges a lesson; duplicate submission shows the prior result, while staff-only courses stay absent from navigation and direct access.
- an instructor publishes a revised procedure and exports progress for the earlier version. Existing learners retain that version's lesson denominator; withdrawing an enrollment removes its lesson actions and explains the unavailable state without erasing history.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No enrolled courses”; “No acknowledgments yet”; “No courses yet”; “No draft lessons yet”; “No published versions yet”; “No enrollments yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/learning/mine`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/learning/courses`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/learning/mine`: each declared personal view is chosen through the actual radio control, saved through its canonical preference form, checked against the matching empty collection and restored on reload.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
