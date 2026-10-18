# CanInbox browser acceptance

[Source](../CanInbox.can) and [requirements](../CanInbox.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanInbox/playwright/app.spec.ts
```

Declared routes: `/inbox`, `/inbox/settings`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `inbox_admin`, `mail_staff` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `operator`, `seller`, `stranger`, `administrator`, `intake`, `sales_queue`, `intake_grant`, `sales_grant`, `mailbox`, `evidence`, `foreign_evidence`, `incoming`, `editable_reply`, `frozen`, `post_receipt`, `check_receipt`, `uncertain`, `exhausted`, `judged`, `waiting`, `recorded_route`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `inbox {Triage as Judge} from=deployment.judgment`; `std {MailboxV1 as Post,IncomingEmail,MailReply,MailReplyOutcome} from=deployment.inbox`; `std {JudgmentSpec,DeliveryError,DeliveryResult}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- Mail staff inspect a retained inbound message and typed classification uncertainty, review assignment, edit a reply draft and submit the exact reviewed version with independent delivery evidence.
- Duplicate inbound delivery, restricted attachments, ambiguous classification and stale assignment stay explicit. Failed/unknown outbound send retains message identity; reconcile or an explicit approved resubmission must not falsely display sent or duplicate a reply.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No messages in this queue”; “No assessments yet”; “No route probabilities”; “No urgency levels”; “No permitted destinations”; “No routing decisions yet”; “No replies yet”; “No send attempts”; “No resolutions recorded”; “No queues yet”; “No grants yet”; “No mailboxes configured”; “No usage recorded”.

Implemented browser bodies (authored, not yet executed):

- `/inbox#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.
- `/inbox/settings#denied`: actual Ava identity, HTTP 403/forbidden, no forms or read rows.

These finite checks cover page admission and/or the specified fresh-store empty state only. Every populated business workflow listed above remains open: real app-role provisioning, admitted owning domain records, finalized uploads where declared, and actual deployment capabilities are prerequisites. Example fixtures run in isolated stores and supply none of those browser prerequisites. No companion requirement or operation is credited merely because its source exists. Loading, pending, provider failure/recovery, dialogs and parameterized record routes remain uncovered unless a body explicitly asserts them. Root validation must execute the real original-source preview; compilation/composition or role/setup refusal is a blocking result, not a passing screenshot. Denied captures are diagnostic refusal evidence and do not establish fidelity to populated concepts.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.
