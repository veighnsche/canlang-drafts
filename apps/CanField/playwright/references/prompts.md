> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanField generation prompts

## 01-dispatch-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanField. Route /dispatch. Content: Service dispatch dispatcher desktop. RIGHT sidebar CanField links Service dispatch and My visits. Breadcrumbs. Compact Dispatch intake canonical form with Customer, Location, Employee, Start, End datetimes, Required skill, Address, Instructions, Contact, Time before/after visit; optional repair/inspection generated references. Dated service agenda calendar with location/state/skill filters; day 13 October2026 local Europe/Brussels visible. Only three synthetic events with technician, location and status labels. Selected planned visit drawer stays within content and does not replace shell: frozen address/instructions, employee Alex, skill repair, from/until, state Planned, schedule reference; Reassign and Cancel buttons, replacement requests table one Unknown candidate clearly distinct from retained confirmed visit, Discard reassignment canonical action. Reports table empty No reports yet. History collapse. Schedule pending never drawn planned; no GPS/map or optimization.
```

## 02-my-visit-mobile.png

```text
Use case: ui-mockup. Generate ONE individual full-page mobile application image edge-to-edge, portrait approximately 430x1000, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. On mobile use a dismissible RIGHT navigation overlay, closed unless specified, with top-right menu trigger; account belongs at bottom of that overlay. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanField. Route /dispatch/mine. State in-progress visit completion and failed optional photo. Content: MOBILE full-page portrait roughly430x980 SINGLE screen no device frame. My visits technician screen; mobile shared shell CLOSED dismissible RIGHT navigation overlay triggered by top-right Menu icon, no persistent desktop sidebar or bottom nav. Small CanField wordmark upper-right and account entry accessible from right overlay. Breadcrumbs. Assigned visits state filter and labeled cards single column, chosen visit In progress, Example site, 13Oct2026 09:00–11:00 Europe/Brussels, Frozen site address, Repair skill, Meet reception instructions. Complete modal open with required Notes textarea containing Replaced filter and tested ventilation, optional Photo upload failed inline alert preserving notes, retry file control or choose no optional file. Complete button canonical. Inspection answers/result only if visit inspection none so omit. History lower, no GPS/photos invented. Address/time/actions easy thumb access, clear labels. Completion no automatic repair release.
```

## 02-my-visit-desktop.png — accepted desktop replacement

The earlier task mobile image was withdrawn and removed following the latest user request. Its exact prompt remains historical provenance, not an accepted reference.

```text
Use case: ui-mockup. Generate one individual full-page desktop application reference, edge-to-edge approximately1440x1100, no frame/browser/device/collage. Light daisyUI-compatible theme ivory canvas charcoal text restrained indigo actions. LEFT shared sidebar wordmark TOP LEFT, only permitted links, account BOTTOM LEFT. No right sidebar or mobile elements. Only declared source controls, permissions, no invented metrics/functions. My visits desktop technician screen. LEFT sidebar CanField at top, My visits selected, user bottom-left. Breadcrumbs, state/location/skill filters. State-grouped board Job cards with Planned, In progress, Blocked, Done columns; selected In progress visit Example site13Oct2026 09:00–11:00 Europe/Brussels. Frozen site address, skillRepair, Meet reception instructions. Open Complete dialog with required Notes textarea containing Replaced filter and tested ventilation, optional Photo failed upload inline alert retaining notes; Retry file or clear optional file then Complete. No inspection linked, omit checklist/result. Attributed reports table empty No reports yet and history. Technician only own assignment; no dispatcher controls. Completion no automatic room downtime release.
```

## 02-my-visit-desktop.png — focused desktop correction

```text
Focused correction only, preserve left sidebar and full desktop layout: remove country/location grouping Belgium and France and extra fictional visits/cities; board ONE flat state-grouped board with Planned/In progress/Blocked/Done, selected Example site only. Frozen visit address is literal Frozen site address, no real postal address. Remove invented notes max2000 counter. Keep notes, failed optional photo alert, Retry file/Clear file, Complete and reports separate; no successful report yet. LEFT sidebar only My visits, accountbottom-left.
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### FinalRevision

```text
Correct only source fidelity: Contact must be email customer@example.test not name or phone. Replace real address with Frozen site address and any city/hospital retail business names with synthetic Example company. Date timezone Europe/Brussels display no incorrect CET abbreviation. Replacement requests table EXACT columns Employee, Start, End, State, Released; ONE candidate Kim at 13Oct2026 11:00–12:00 state Unknown released No; remove fabricated Proposed state and unknown employee row. Discard reassignment button opens required reason dialog, keep button only. Reports exact columns Author, Notes, Photo, Completed, Correction with No reports yet. No app-specific logo leaf required but cosmetic okay. Preserve actual calendar and retained planned visit.
```

## 01-dispatch-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-82ee2db2-f0fe-4b96-8709-7a23a380b349.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanField TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Service dispatch", "My visits". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```
