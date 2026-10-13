# CanGallery browser acceptance

[Source](../CanGallery.can) and [requirements](../CanGallery.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanGallery/playwright/app.spec.ts
bun run test:draft:coverage -- CanGallery
```

Declared routes: `/gallery`, `/gallery/submit`, `/gallery/review`, `/gallery/access`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `curator`, `reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `gallery_curator`, `gallery_reviewer`, `collection`, `reviewer_access`, `audience`, `submission`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `creative {Output,can_view,output,completed,completed_request}`; `std {ImageRun,GeneratedImage}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A curator deliberately submits a reviewed creative output for collection disclosure; an independent reviewer approves or rejects its frozen submission, and an authorized collection member previews/downloads the resulting image.
- Duplicate submit/replay and stale review cannot publish twice. Withdrawal, collection deactivation and membership removal revoke thumbnail/original access; reviewer responses omit private creative relationships and chat history.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No collections available”; “No approved images yet”; “No successful images to submit”; “No submissions yet”; “No images awaiting review”; “No collections yet”; “No granted accounts”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
