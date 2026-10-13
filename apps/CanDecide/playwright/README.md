# CanDecide browser acceptance

[Source](../CanDecide.can) and [requirements](../CanDecide.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanDecide/playwright/app.spec.ts
bun run test:draft:coverage -- CanDecide
```

Declared routes: `/decisions`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `analyst`, `reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `analyst_user`, `reviewer_user`, `case`, `generated_receipt`, `draft`, `reviewed`, `judged`, `assessed`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `std {JudgmentSpec,DeliveryResult}`; `decide {SynthesizerV1 as Writer} from=deployment.decision_writer`; `decide {ChangeReview as Judge} from=deployment.decision_judgment`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- An analyst freezes a case and requests synthesis; an independent reviewer freezes a brief, evaluates its bounded candidate alternatives with JEV, and records a human decision without applying the proposed change.
- Empty candidate output remains legitimate; stale evidence, self-review, missing current authority, failed/unknown model delivery and cancellation retain explicit outcomes and cannot fabricate a judgment or execute an alternative.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No process decisions yet”; “No drafts yet”; “No reviews yet”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
