# CanInbox browser acceptance

[Source](../CanInbox.can) and [requirements](../CanInbox.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanInbox/playwright/app.spec.ts
bun run test:draft:coverage -- CanInbox
```

Declared routes: `/inbox`, `/inbox/settings`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `inbox_admin`, `mail_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `operator`, `seller`, `stranger`, `administrator`, `intake`, `sales_queue`, `intake_grant`, `sales_grant`, `mailbox`, `evidence`, `foreign_evidence`, `incoming`, `editable_reply`, `frozen`, `post_receipt`, `check_receipt`, `uncertain`, `exhausted`, `judged`, `waiting`, `recorded_route`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `inbox {Triage as Judge} from=deployment.judgment`; `std {MailboxV1 as Post,IncomingEmail,MailReply,MailReplyOutcome} from=deployment.inbox`; `std {JudgmentSpec,DeliveryError,DeliveryResult}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- Mail staff inspect a retained inbound message and typed classification uncertainty, review assignment, edit a reply draft and submit the exact reviewed version with independent delivery evidence.
- Duplicate inbound delivery, restricted attachments, ambiguous classification and stale assignment stay explicit. Failed/unknown outbound send retains message identity; reconcile or an explicit approved resubmission must not falsely display sent or duplicate a reply.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No messages in this queue”; “No assessments yet”; “No route probabilities”; “No urgency levels”; “No permitted destinations”; “No routing decisions yet”; “No replies yet”; “No send attempts”; “No resolutions recorded”; “No queues yet”; “No grants yet”; “No mailboxes configured”; “No usage recorded”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
