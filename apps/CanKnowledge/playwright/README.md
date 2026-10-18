# CanKnowledge browser acceptance

[Source](../CanKnowledge.can) and [requirements](../CanKnowledge.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanKnowledge/playwright/app.spec.ts
```

Declared routes: `/knowledge`, `/knowledge/editor`, `/knowledge/expert`, `/knowledge/settings`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `knowledge_manager`, `knowledge_author`, `knowledge_reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `manager`, `writer`, `reviewer`, `expert`, `topic`, `reader`, `writer_access`, `procedure`, `revision`, `next_revision`, `published`, `used_today`, `text_file`, `foreign_file`, `pending_question`, `answered`, `answered_question`, `issue`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `std {KnowledgeRequest,IndexState,TextRun,DeliveryResult}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An authorized author creates/revises a document and a reviewer publishes an immutable version; a topic reader asks a question and opens exact authorized citations, while an expert resolves an escalation with attributed evidence.
- Withdrawn or revoked source content cannot leak through answer text, citations or files. Incomplete indexing, no answer, partial generation, failed/unknown delivery and stop/reconcile remain distinct; publication/reindex does not silently rewrite old evidence.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No topics available”; “No procedures in this topic”; “No questions yet”; “No expert requests”; “No published resolution available”; “No procedures to edit”; “No revisions yet”; “No publication decisions”; “No questions for you”; “No topics configured”; “No readers yet”; “No usage recorded”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/knowledge`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/knowledge/expert`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/knowledge/editor`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.
- `/knowledge/settings`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
