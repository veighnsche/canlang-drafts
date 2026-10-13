# CanDo browser acceptance

[Source](../CanDo.can) and [requirements](../CanDo.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanDo/playwright/app.spec.ts
bun run test:draft:coverage -- CanDo
```

Declared routes: `/tasks`, `/tasks/my-work`, `/tasks/checklists`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `task_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `open_task`, `work_view`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `employee {can_work,staff,test_worker}`; `std {ErrorsV1 as Catch} from=deployment.errors`; `todo {WorkSourcesV1 as WorkSources} from=deployment.work_sources`; `maintain {inspect,work as maintenance_work,work_detail as maintenance_detail} from=deployment.maintenance`; `success {complete as complete_account,work as accounts_work,work_detail as accounts_detail} from=deployment.accounts`; `onboard {complete as complete_step,work as onboarding_work,work_detail as onboarding_detail} from=deployment.onboarding`; `board {complete as complete_board,work as board_work,work_detail as board_detail} from=deployment.board`; `volunteer {complete as complete_volunteer,work as volunteering_work,work_detail as volunteering_detail} from=deployment.volunteering`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- a member to find Tasks/My work/Templates through authorized sidebar links, enter a task on a narrow screen, and return from its detail with filters intact. A stale edit preserves the attempted input; an unavailable source cannot appear completed. Changing language/appearance in personal settings retains an unsaved comment and survives the appropriate preference save/reload. A user without template grants neither sees that destination nor accesses it directly.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No tasks match these filters.”; “No comments yet.”; “No work projection yet.”; “No sources reported.”; “No authorized work items.”; “No templates yet.”; “No template items yet.”.

Implemented browser bodies (authored, not yet executed):

- `/tasks#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/tasks#empty`: source empty captions asserted before/after real reload as Ava.
- `/tasks/my-work#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/tasks/my-work#empty`: source empty captions asserted before/after real reload as Ava.
- `/tasks/checklists#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
