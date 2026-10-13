> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanHire generation prompts

## 01-hiring-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanHire. Route /hiring. Content: Hiring recruiter screen. RIGHT sidebar CanHire links Careers, My applications, Hiring selected; omit HR handoff/interviews absent grants. Breadcrumbs, compact Vacancy authoring form Title, Description, Employment, Location, Skills canonical. Static steps Applied / Interview / Offer / Hired WITHOUT selected-stage highlight. Vacancies split list selected Reception at Example location, Published and Open labels; candidate stage filter, paginated candidate list one Applicant at Interview. Candidate detail Application text, optional Download CV, recruiter decision reason. Schedule interview button, Record decision, Reopen application permission-dependent. Interview evidence drawer inside content: 13 Oct2026 09:00-10:00 Europe/Brussels, reservation Confirmed, release Not requested, Reminder Pending separate; feedback Relevant experience private recruiter view, Reschedule interview, Cancel interview controls. Sourced intake form below Name, Email, Application, CV, Source. No retention settings, no candidate access to feedback, no automatic employee creation.
```

## 02-careers-application-mobile.png

```text
Use case: ui-mockup. Generate ONE individual full-page mobile application image edge-to-edge, portrait approximately 430x1000, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. On mobile use a dismissible RIGHT navigation overlay, closed unless specified, with top-right menu trigger; account belongs at bottom of that overlay. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanHire. Route /careers. State verified applicant intake. Content: MOBILE portrait roughly430x1000 individual app page no device/frame. Shared mobile RIGHT nav overlay CLOSED with top-right Menu trigger, CanHire wordmark, no bottom nav. Careers heading Join our team, published openings intro, My applications link authenticated. Location filter and title search, Reception vacancy at Example site, Full-time, skills Customer service, readable complete description. Your application fieldset Name Applicant, Application text multiline describing reception experience, optional CV upload, current chosen applicant-cv.pdf finalized file, Apply canonical button. Verified account notice email applicant@example.test used, no editable email field. No recruiter private feedback, no interview scheduling controls. Terms no invented employment promises. Clear compact generous mobile field spacing.
```

## 02-careers-application-desktop.png — accepted desktop replacement

The earlier task mobile image was withdrawn and removed following the latest user request. Its exact prompt remains historical provenance, not an accepted reference.

```text
Use case: ui-mockup. Generate one individual full-page desktop application reference, edge-to-edge approximately1440x1100, no frame/browser/device/collage. Light daisyUI-compatible theme ivory canvas charcoal text restrained indigo actions. LEFT shared sidebar wordmark TOP LEFT, only permitted links, account BOTTOM LEFT. No right sidebar or mobile elements. Only declared source controls, permissions, no invented metrics/functions. Careers desktop applicant screen. LEFT sidebar CanHire top, Careers selected and My applications link, account bottom-left. Join our team intro, location filter/title search and paginated published vacancy list Reception Example site employmentFull-time skillsCustomer service complete practical reception description. Selected vacancy has Your application fieldset NameApplicant, Application textarea reception experience, optional CV file input applicant-cv.pdf finalized file selected, Apply canonical button. Verified account email applicant@example.test used unchanged, no editable email, no private feedback, no scheduling/recruiter controls or employment promises. Balanced vacancy summary left within content and readable application form right. Source preserves receipt/validation but no invented successful status.
```

## 02-careers-application-desktop.png — focused desktop correction

```text
Focused correction only: remove invented CV helper PDF DOC or DOCX max5MB; accepted types/limits remain inherited canonical source validation. Preserve optional finalized file state and Apply. LEFT sidebar only Careers and My applications; bottom-left verified account preserved. No extra menus or content changes.
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### FinalRevision

```text
Correct source fidelity preserve layout. Reopen application hidden for selected active Interview candidate; remove its button. Sourced intake form must be real labeled editable controls Name, Email, Application textarea, optional CV file input, Source text input and Record candidate intake submit, not read-only facts. New vacancy area show inline compact authoring form Title, Description, Employment, Location/Skills generated controls and Create; no authored New vacancy modal invented. Replace fictional real-city/remote vacancy entries with only Reception at Example location and Facilities technician Example location. Record decision needs actual dialog trigger with stage + reason in dialog; leave reason read-only current reason No decision yet in card. Preserve confirmed interview evidence and reminder.
```

## 01-hiring-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-beaf8eb5-9e59-4027-80ba-331e9c2a5bbc.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanHire TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Careers", "My applications", "Hiring". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## 01-hiring-desktop.png — final focused source-fidelity correction

```text
Correct static legend only: Applied/Interview/Offer/Hired steps all neutral outlines, no blue progress line, filled current dot or active-stage highlight. Source explicitly has static pipeline legend; actual candidate Interview badge remains colored. Recruitment feedback field read-only with Relevant experience text; recording feedback opens owning canonical dialog only under assigned interviewer permission, do not expose inline editable feedback. Preserve LEFT sidebar and all other forms.
```
