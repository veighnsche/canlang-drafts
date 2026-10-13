> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanInbox generation prompts

## 01-departmental-inbox-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanInbox. Route /inbox. Content: Departmental inbox staff private intake queue, RIGHT sidebar CanInbox only Departmental inbox. Breadcrumbs; compact queue/state filters and subject search. Split message table received/sender/subject/queue/state: Price request buyer@example.test Private intake Open selected. Full message Please send your price list. Reply target buyer@example.test unverified message evidence, body complete, attachments complete, original attachment count0. Classification evidence expanded: disclaimer Predictions do not grant another department access. Attachment contents are not classified. Assessment Succeeded; reply probability0.8; route table Purchasing0 Support0 Sales0.6 General0.4; route confidence0.2; urgency fractional score1.0 and full levels Routine0.5 Today0 Immediate0.5, confidence0.1; never imply score picks Today. Review and permitted transfer form destination Sales, Reply needed checkbox, urgency radio Routine/Today/Immediate, required reason. Separate Reviewed replies collapsed, exact draft body card and Approve and send button with recipient/subject; no AI drafted reply. Resolve/reopen reason collapse. No automated send/route.
```

## 02-uncertain-reply-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanInbox. Route /inbox. State frozen reply reconciliation. Content: Departmental inbox staff screen right sidebar only Departmental inbox. Same Price request incoming text from buyer@example.test full evidence. Split queue selected Open private-intake message. Reviewed replies expanded submitted frozen reply to buyer@example.test subject Price request body Approved answer. immutable attachments none, Approved by Alex and date. Authorized send attempt state Outcome uncertain, source reply-2, checks1 of3, no provider reference, safe detail Timeout awaiting authoritative result. Reconcile outcome canonical button, explain checks original send and does not send another email. NO Resubmit until confirmed not sent. Resolve close blocked by queued/unknown attempt, show inline alert Unresolved send must be reconciled; required reason typed preserved. Classification and review history collapsed. No fake delivered check.
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### FinalRevision

```text
Correct source fidelity preserve compact split layout. Incoming metadata show Sender buyer@example.test and Reply target buyer@example.test, not invented purchasing recipient. Review and permitted transfer form needs a Submit button Record review and assign below required reason. Reply card represent an already SAVED draft (state Draft badge), exact recipient buyer@example.test, exact subject Price request not Re prefix, body Reviewed information is below. Edit canonical via Revise draft control and then Approve and send button, NOT bypass saved draft by sending arbitrary textarea directly. Classification completeness metadata Body complete Yes / Attachments complete Yes / original attachment count0. Add pagination to queue. Keep right shell only navigation/account.
```

## 01-departmental-inbox-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-f0788ad7-52a3-4a81-953e-82d3ceecebc0.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanInbox TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Departmental inbox". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## 02-uncertain-reply-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-72db9de2-a836-461f-aa60-df8d8020fff6.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanInbox TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Departmental inbox". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## 02-uncertain-reply-desktop.png — final focused source-fidelity correction

```text
Restore essential unknown-send evidence, keep LEFT sidebar only Departmental inbox and bottom account. Above filters replace invented Open/Pending/Resolved tabs with canonical Queue select Private intake, State select Open, Subject search. Incoming message exact body Please send your price list., sender and reply target buyer@example.test, no procurement recipient; attachments0 no invented Download all. Under frozen Reply submitted source reply-2 to buyer@example.test subjectPrice request bodyApproved answer add AUTHORIZED SEND ATTEMPT card: State Outcome uncertain, approvedbyAlex/date, checks1of3, provider referenceNot established, safe detail Timeout awaiting authoritative result. Reconcile uncertain send canonical button; explicitly checks original send, never sends another email. NO Resubmit (requires proven not_sent). Resolve/reopen required reason preserves typed Reviewed resolution and inline alert Cannot close while send outcome uncertain. Remove generic top Reply button since original submitted is frozen. Core purpose is reconciliation, not ordinary email reading.
```
