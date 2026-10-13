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

Implemented browser bodies (authored, not yet executed):

- `/chat#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/chat#empty`: source empty captions asserted before/after real reload as Ava.
- `/chat/recovery#denied`: actual Dee identity with explicit application/json admission request, HTTP 403/forbidden, no forms or read rows. Ordinary browser navigation instead recovers to team selection; this check covers direct authorization refusal only.
- `/chat/recovery#empty`: source empty captions asserted before/after real reload as Ava.
- `/chat/admin#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
