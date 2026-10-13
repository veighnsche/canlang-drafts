> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanEvent generation prompts

## 01-event-registration-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanEvent. Route /events. Content: Events authenticated attendee screen; RIGHT sidebar CanEvent links Events selected, Event operations only if separate staff grant here omit staff link. Breadcrumbs; Published event discovery listing Workshop, location Example site, full start/end with Europe/Brussels timezone, price EUR0.00 Free, sales cutoff, refund cutoff, venue, description and Terms Free. No available seat number/progress because source public permission gap remains unresolved. Register for event dialog open over content: terms notice Free, Name and Email fields, optional Customer/account canonical generated fields as needed; Register submit. Below Own tickets and admission one confirmed free ticket with distinct badges Confirmed and Free; Ticket ticket-001, expiry, admission Not yet, Copy ticket, cancellation reason form, Notice outcome Pending, Reconcile. No fake paid state or successful email delivery. Use restrained teal date accents, no marketing hero photograph.
```

## 02-event-operations-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanEvent. Route /events/work. State admission and venue state. Content: Event operations organizer/admission/finance staff screen RIGHT sidebar Events, Event operations selected (imported invoice links need not be shown beyond scope; canonical source determines). Breadcrumbs, compact event intake collapsed. Selected Workshop Example site timezoneEurope/Brussels start14Oct2026 09:00 end10:00 capacity20 priceEUR0 termsFree. PublishedYes CancelledNo. Event and venue outcome section shows current retained confirmed venue reservation separately from pending material change, Change table location/from/until/state/venue_state/revision with candidate Holding/Authoritative pending and original Adopted/Confirmed. Registration table name/email/state/payment/ticket/checked-in one confirmed free Guest admit button, one pending unpaid ticket no admit. Ticket finance and history collapse private staff only. No confirmed new venue until authority, no automatic refund/paid claim. Original and candidate shown distinct.
```

## 01-event-registration-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-32d7722f-85f6-4708-90d8-24929b47b203.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanEvent TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Events". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### FinalRevision

```text
Correct source fidelity preserve one-page layout. Remove sidebar Browse events link (only Events). Dialog name Register for event, Name required; Email OPTIONAL for verified self and example.test value. Remove entire invented Customer account/Customer name block and auto-create helper; instead optional canonical Customer select None and Account optional self selection, no automatic provisioning. Cancellation reason is REQUIRED textarea not optional select, label Cancel registration; remove false refund-cutoff restriction helper. Replace Cancellation outcome pending with Attendee notice delivery Pending; registration currently confirmed free no cancellation requested. Price EUR0 Free. Keep separate ticket/admission state.
```

### ExtraRevision

```text
Correct source fidelity only: second registration is Cancelled with payment Free, not pending/unpaid for a free event. No admit action on cancelled row. Changes table final column Venue owner revision: candidate0 (no authoritative evidence yet), original2 (confirmed). Candidate badge venue outcome Pending, original Confirmed; no fake confirmed revision on candidate. Replace all real/fictional city venue location names with Example site, resource names Original event hall and Candidate event hall for same authorized location. Keep guest admission, original/candidate distinction, RIGHT shell and layout.
```

## 02-event-operations-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-894f3b9b-fa5d-4060-a8a3-54cce97c9b25.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanEvent TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Events", "Event operations". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## 02-event-operations-desktop.png — focused accepted source-fidelity correction

```text
Correct ONE source-state text cell only. Changes table candidate row State must read Holding, because it is a candidate hold request; Venue state Pending remains separate. Original row state Adopted, venue Confirmed unchanged. Keep candidate venue revision0 and original2, guest confirmed/free admits, cancelled/free no admit. LEFT navigation and all other page details preserved.
```

## 01-event-registration-desktop.png — free-ticket permission correction

```text
Focused source correction preserve LEFT sidebar only Events and accountBOTTOM LEFT. This is a confirmed FREE ticket: REMOVE Reconcile button entirely because owning reconcile requires a positive ticket price. Pending Attendee notice is confirmation delivery, helper must say Confirmation notice pending; no cancellation already requested, registration remainsConfirmed. Required cancellation reason textarea stays. Use coherent illustrative future event14Oct2026 09:00–16:00 Europe/Brussels, sales/refund cutoff13Oct2026 23:59 everywhere and ticket expiry same cutoff. All Alex Rivera emails same alex.rivera@example.test including bottom-left account, form, own ticket. Do not change declared optional Customer/account inputs or invent account creation. Preserve full-page desktop.
```
