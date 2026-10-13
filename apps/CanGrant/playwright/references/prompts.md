> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanGrant generation prompts

## 01-award-review-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanGrant. Route /awards/review. Content: Award review coordinator + reviewer screen. RIGHT sidebar CanGrant links Funded programs, Award review. Breadcrumbs. Program selector Startup fund, location Example location, closing deadline Europe/Brussels. Program budget compact real declared metrics budget EUR100.00, requested EUR120.00, committed EUR60.00, withdrawn EUR0.00, remaining EUR40.00 with 60/100 currency-qualified progress. Budget is commitment, no payment. Assigned applications split table one pending Competing project EUR60 and one approved Project EUR60; columns title/amount/received/state/notice; selected Competing project evidence shows frozen terms Cash award, criteria Impact, answer Purpose:Launch, reviewer and receipt. Open Record decision dialog centered over content with approve checkbox and required reason, inline affordability error Requested EUR60 exceeds remaining EUR40 preserving typed reason. Decision notice Pending separate badge never funds paid. Private reviewer comments attributed below; recovery and withdrawals collapsed. Coordinator intake collapsed below, award export read table currently approved commitments only. No applicant visibility of other applications.
```

## 02-applicant-intake-mobile.png

```text
Use case: ui-mockup. Generate ONE individual full-page mobile application image edge-to-edge, portrait approximately 430x1000, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. On mobile use a dismissible RIGHT navigation overlay, closed unless specified, with top-right menu trigger; account belongs at bottom of that overlay. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanGrant. Route /awards. State private applicant draft. Content: MOBILE portrait roughly430x1100 one full-page edge-to-edge image. Shared mobile RIGHT overlay CLOSED with top-right Menu trigger, CanGrant wordmark; no fixed sidebar/bottom nav. Funded programs applicant authenticated screen. Startup fund Example site terms Cash award, criteria Impact, eligibility Question Purpose, closing1Nov2026 17:00 Europe/Brussels prominently. Your application linear form Email applicant@example.test, Title Project, Description New business, requested Amount EUR60, Reviewer generated eligible distinct user select. Start application button. Own draft below state Draft, frozen terms/questions, answer Purpose textarea Launch, Save draft and Submit canonical controls. Explain receipt only established on submit, no other applicant records, no budget metrics, no paid award. Notice Not requested separate from state. Preserve legible form labels.
```

## 02-applicant-intake-desktop.png — accepted desktop replacement

The earlier task mobile image was withdrawn and removed following the latest user request. Its exact prompt remains historical provenance, not an accepted reference.

```text
Use case: ui-mockup. Generate one individual full-page desktop application reference, edge-to-edge approximately1440x1100, no frame/browser/device/collage. Light daisyUI-compatible theme ivory canvas charcoal text restrained indigo actions. LEFT shared sidebar wordmark TOP LEFT, only permitted links, account BOTTOM LEFT. No right sidebar or mobile elements. Only declared source controls, permissions, no invented metrics/functions. Funded programs desktop applicant screen. LEFT sidebar CanGrant top, Funded programs selected, account bottom-left; no Award review grant. Published Startup fund Example site termsCash award, criteriaImpact, questionPurpose, closes1Nov2026 17:00 Europe/Brussels. Your application start form Email applicant@example.test, TitleProject, DescriptionNew business, AmountEUR60 canonical money control, distinct eligible Reviewer generated selection, Start application button. Own application draft table and selected draft to right: stateDraft, frozen terms/questions, answerPurpose textareaLaunch, Save draft and Submit existing canonical controls. NoticeNot requested separate. No other applicants, no budget/disbursement metrics, no fake received timestamp before submission. Comfortable two-column desktop form and own status evidence.
```

## 02-applicant-intake-desktop.png — focused desktop correction

```text
Focused correction only, preserve full-page desktop two-column layout and left sidebar. EXACT sidebar only Funded programs; remove Home and My applications invented destinations. REMOVE Eligible field and automatic eligibility claim entirely. Rename Selection field Reviewer; make it real editable generated user select showing Reviewer account reviewer-1, distinct from applicant. Email is an editable canonical email input not read-only. Remove invented1000 counters. Show terms Cash award inline rather than View full program terms invented external link. Add Notice Not requested in own draft. No receipt timestamp until submit. Do not add admin or extra navigation. Accountbottom-left.
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### FinalRevision

```text
Correct source fidelity only: pending application state badge must be Submitted, never Pending. Notice column exact Pending for both rows (delivery outcome), never Under review or Awarded. Modal remove invented 41/1000 counter; reason no declared such cap. Keep affordability error and typed reason intact. No success state after attempted unaffordable approval. Preserve budget EUR100 requestedEUR120 committedEUR60 remainingEUR40 and right sidebar.
```

## 01-award-review-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-503af1bb-e1a8-470e-a0a5-9fc7b0af9315.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanGrant TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Funded programs", "Award review". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## 01-award-review-desktop.png — final focused source-fidelity correction

```text
Correct source state cells only, LEFT sidebar retained. Competing project state Submitted; Project second row state APPROVED (it is the existing EUR60 commitment), NOT Submitted. Notice delivery for BOTH rows must be Pending, NOT Under review or Awarded. Budget unchanged100/120/60/0/40. No payment claim, preserve unaffordable approval reason/error.
```
