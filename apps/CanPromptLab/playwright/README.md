# CanPromptLab browser acceptance

[Source](../CanPromptLab.can) and [requirements](../CanPromptLab.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPromptLab/playwright/app.spec.ts
bun run test:draft:coverage -- CanPromptLab
```

Declared routes: `/catalogs`, `/tags`, `/catalogs/archived`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `curator` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `editor`, `catalog`, `alice`, `bob`, `tag`, `note`. These isolated example fixtures do not seed the serving browser. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A curator creates a catalog and checked entry, corrects EAN-13 and UTF-8 validation without losing text, and sees canonical-key collisions preserve stored spelling. Another catalog permits the independent key; tags apply their own team scope.
- Archive/restore entry and tag exposes then clears actor/time attribution; members manage only their own notes and cannot write to archived entries. Child-free removal releases a key. Atomic swap, post-write rollback, canonical replay and collision-refusing schema activation require direct owner-operation checks where no page control exists.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No catalogs yet.”; “No entries in this catalog.”; “No notes yet.”; “No tags yet.”; “No archived entries.”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
