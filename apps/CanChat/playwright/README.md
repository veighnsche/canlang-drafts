# CanChat browser acceptance

[Source](../CanChat.can) and [requirements](../CanChat.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanChat/playwright/app.spec.ts
bun run test:draft:coverage -- CanChat
```

Declared routes: `/chat`, `/chat/recovery`, `/chat/admin`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `ai_manager` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `manager`, `tokens`, `attachment`, `held_tokens`, `observed_request`, `pending_run`, `unrelated_request`, `answer`, `question`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `std {TextMessage,TextRequest,TextRun,DeliveryResult}`; `std {TextGenerationV1 as LLM} from=deployment.llm`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- An AI manager configures an immutable profile and member allowance; a member sends a bounded prompt with readable finalized attachments, reopens the same retained run and sees pending submission, verified progress, partial text and a final assistant turn once.
- Stop/reconcile distinguish cancellation request, success, failed and unknown outcomes; duplicate delivery cannot append or settle twice. Disconnect/reconnect retains identity, revoked members lose transcript/file/partial-response access, and unknown usage stays held.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No conversations yet”; “No branches yet”; “No earlier messages”; “No messages yet”; “No reply generations yet”; “No retained historical callback refusals.”; “No token allowances”; “No unresolved usage”; “No model profiles”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
