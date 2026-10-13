# CanLearn browser acceptance

[Source](../CanLearn.can) and [requirements](../CanLearn.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanLearn/playwright/app.spec.ts
bun run test:draft:coverage -- CanLearn
```

Declared routes: `/learning/mine`, `/learning/courses`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `instructor` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `course_instructor`, `course_learner`, `instructor_employee`, `learner_employee`, `course`, `published`, `lesson`, `enrolled`, `acknowledged`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location,test_site}`; `employee {Employee,can_work,staff as is_staff,test_worker}`; `member_terms {Term,eligible_term,paid_term,allocated}`; `customer {test_contact,test_admin}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a member learner opens their enrolled orientation, reads ordered text and acknowledges a lesson; duplicate submission shows the prior result, while staff-only courses stay absent from navigation and direct access.
- an instructor publishes a revised procedure and exports progress for the earlier version. Existing learners retain that version's lesson denominator; withdrawing an enrollment removes its lesson actions and explains the unavailable state without erasing history.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No enrolled courses”; “No acknowledgments yet”; “No courses yet”; “No draft lessons yet”; “No published versions yet”; “No enrollments yet”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
