# CanLeave exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-leave-mine-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLeave/playwright/references/02-leave-mine-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit the supplied full page reference. Add a labeled required 'Reviewer' input in Request leave before the reason, populated 'Assigned reviewer'. In preview result replace 'Remaining after request' with 'Current remaining allowance' (12 days), because preview reports existing allowance. Leave all other layout. No new operations, metrics, fields outside this correction. Preserve light daisyUI theme, LEFT sidebar and bottom-right account on desktop; closed mobile overlay on portrait. Return ONE full-page actual UI image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLeave. Desktop 1440x1100 landscape, wide main content LEFT; narrow collapsible page navigation sidebar RIGHT, wordmark TOP RIGHT, user menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, accessible dark sans typography, spacious readable forms. One selected page, populated representative authorized records with source state values; show essential primary form and contextual details. Match the selected source hierarchy and permitted actions; never invent admin, extra navigation, metrics or integration success. A declared form's unspecified arguments still require generated labeled inputs from its schema; don't omit them. All navigation uses actual admitted static page titles ONLY. English human labels. Modals CLOSED unless source makes the essential form modal, then show one selected canonical modal. Long content may continue below fold; do not squash unreadable text. The image is a visual target, not evidence of functioning runtime. Show unknown/pending independently from success where provided.
Actual declared page navigation (filter by actor admission; exclude contextual/token routes):
  page /leave/mine title="My leave"@{nl="Mijn verlof"} $LeaveWorkspace
  page /leave/review title="Leave review"@{nl="Verlof beoordelen"} $LeaveWorkspace
  page /leave/absence title="Absence dates"@{nl="Afwezigheidsdatums"} $LeaveWorkspace
Selected owning page:
  page /leave/mine title="My leave"@{nl="Mijn verlof"} $LeaveWorkspace
   breadcrumbs
   require members
   card "View defaults"@{nl="Weergavevoorkeuren"}
    ## Inline presentation of the owning year/bucket extension through the existing save path; the shared dialog keeps the same settings.
    preferences
     input year
     input bucket
   card "Leave dates and allowance"@{nl="Verlofdatums en tegoed"} layout=columns
    card "Working calendar and request intake"@{nl="Werkkalender en verlofaanvraag"}
     list Calendar as calendar where calendar.parent.user==actor display=split empty="No working calendar."@{nl="Geen werkkalender."}
      pagination
      form preview
       stat result.days
       list result.portions empty="No counted days."@{nl="Geen getelde dagen."}
        pagination
        text row.year,row.days,row.allowance?.remaining
      form request display=inline
       fieldset "Request leave"@{nl="Verlof aanvragen"}
        calendar from
        calendar until
        input bucket
        textarea reason
      table row.Day columns=date,working empty="No calendar days configured."@{nl="Geen kalenderdagen ingesteld."}
       pagination
      table row.Request columns=from,until,bucket,state,decision,sync order=-from filter=bucket,state defaults={bucket=preferences.bucket} empty="No leave requests."@{nl="Geen verlofaanvragen."}
       pagination
       badge row.state
       ## sync is an enum: badge, not status.
       badge row.sync
       tooltip "Withdraws your pending request"@{nl="Trekt je lopende aanvraag in"}
        action withdraw
    card "Annual allowance"@{nl="Jaarlijks verloftegoed"}
     table Allowance as allowance where allowance.parent.user==actor columns=year,bucket,days,remaining filter=year,bucket defaults={year=preferences.year,bucket=preferences.bucket} empty="No allowances configured."@{nl="Geen tegoeden ingesteld."}
      pagination
      collapse "Balance"@{nl="Saldo"}
       require row.days>0
       radial_progress row.remaining max=row.days

Owning labels, data and canonical forms/style:
  message label_preferences_year = "Year"@{nl="Jaar"}
  message label_preferences_bucket = "Leave category"@{nl="Verlofcategorie"}
  message label_Allowance_days = "Days"@{nl="Dagen"}
  message label_Request_from = "Start"@{nl="Begin"}
  message label_Request_until = "End"@{nl="Einde"}
  message label_Request_reviewer = "Reviewer"@{nl="Beoordelaar"}
  message label_Request_state_pending = "Pending"@{nl="In afwachting"}
  role hr label="HR staff"@{nl="HR-medewerker"}
  role leave_reviewer label="Leave reviewer"@{nl="Verlofbeoordelaar"}
  Calendar in Employee { name:text, timezone:timezone, revision:int=1 min=1 } label="Working calendar"@{nl="Werkkalender"}
  Category in Calendar { name:text unique label=label_preferences_bucket, allowance_bucket:text? label="Charged allowance category"@{nl="Belaste verlofcategorie"} } label="Leave policy"@{nl="Verlofbeleid"}
  Day in Calendar { date:date unique label="Date"@{nl="Datum"}, working:bool label="Working day"@{nl="Werkdag"} } label="Calendar day"@{nl="Kalenderdag"}
  Allowance in Employee { year:int label=label_preferences_year, bucket:text="vacation" label=label_preferences_bucket, days:int=20 min=0 label=label_Allowance_days } label="Allowance"@{nl="Tegoed"}
  Request in Calendar { location:Location, from:date label=label_Request_from, until:date label=label_Request_until, bucket:text label=label_preferences_bucket, reason:text, reviewer:user label=label_Request_reviewer, timezone:timezone, allowance_bucket:text? label="Recorded charge category"@{nl="Vastgelegde belastingscategorie"}, schedule_revision:int=1 min=1, reserve_delivery:text?, release_delivery:text?, release_state:enum(none,pending,released,failed,unknown)=none label={text="Absence release"@{nl="Afwezigheid vrijgeven"},values={none="Not requested"@{nl="Niet aangevraagd"},pending=label_Request_state_pending,released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, calendar_version:int label="Calendar version"@{nl="Kalenderversie"}, state:enum(pending,approved,rejected,withdrawn,cancelled)=pending label={text="State"@{nl="Status"},values={pending=label_Request_state_pending,approved="Approved"@{nl="Goedgekeurd"},rejected="Rejected"@{nl="Afgewezen"},withdrawn="Withdrawn"@{nl="Ingetrokken"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, decision:text? label="Decision"@{nl="Besluit"}, schedule_source:text? label="Schedule source"@{nl="Planningsbron"}, sync:enum(none,pending,confirmed,conflict,unavailable)=none label={text="Schedule synchronization"@{nl="Planningsafstemming"},values={pending=label_Request_state_pending,none="None"@{nl="Geen"},confirmed="Confirmed"@{nl="Bevestigd"},conflict="Conflict"@{nl="Conflict"},unavailable="Unavailable"@{nl="Niet beschikbaar"}}} } label="Leave request"@{nl="Verlofaanvraag"}
  Portion in Request { allowance:Allowance?, days:int label=label_Allowance_days, dates:date[]! label="Working dates"@{nl="Werkdagen"} } label="Yearly leave portion"@{nl="Verlofdeel per jaar"}
  scenario calendar_changed on=Calendar.update
  scenario day_created on=Day.create
  scenario day_changed on=Day.update
  scenario category_created on=Category.create
  scenario category_changed on=Category.update
  scenario preview(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket) read=true -> Preview by=members label="Preview leave"@{nl="Verlof vooraf bekijken"}
  scenario request(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket,reason:text,reviewer:user label=label_Request_reviewer) by=members label="Request leave"@{nl="Verlof aanvragen"}
  scenario decide(request:Request,approve:bool label="Approve"@{nl="Goedkeuren"},reason:text) by=leave_reviewer label="Record decision"@{nl="Besluit vastleggen"}
  scenario withdraw(request:Request) by=members label="Withdraw"@{nl="Intrekken"}
  scenario cancel(request:Request,reason:text) by=hr or leave_reviewer
  scenario retry_release(request:Request) by=hr or leave_reviewer label="Retry absence release"@{nl="Vrijgave afwezigheid herhalen"}
  scenario schedule_result on=StaffSchedule.changed
  scenario reserve_result on=StaffSchedule.reserve.completed
  scenario release_result on=StaffSchedule.release.completed
  style LeaveWorkspace $"Use discreet leave-request rows and readable working-day calendar details. Align annual allowance and remaining days; clearly distinguish requested dates, private review decisions, and schedule synchronization outcomes without revealing sensitive reasons through visual summaries. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { year:int? label=label_preferences_year, bucket:text? label=label_preferences_bucket }
Requirements describing interaction:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My leave, Leave review for eligible approvers/HR, then Absence dates for permitted coverage planning. Request details are contextual links. HR allowance work stays ordinary; shared absences exclude private reasons.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My leave — employee index | View-defaults Card with the year/bucket memory, recorded working-calendar explanation and allowance Stat totals; own request history Table with status and synchronization Badges, a counted-days stat with cross-year portions and a withdraw tooltip; per-allowance balance collapse with a radial remaining/days meter | Preview inclusive whole working days, cross-year portions and remaining allowance before requesting; withdraw own pending requests |
| Leave review — assigned approver queue | Request Table with authorized private reason, recorded calculation, recorded-date-portions collapse and state/synchronization/release Badges; decide and cancel modal dialogs, release-retry action | Decide only the assigned eligible request without self-approval; authorized cancellation restores the recorded balance once |
| Allowances — HR view within review | Employee/year/bucket Table with configured and remaining days; authorized allowance Fieldsets and calendar-date controls for calendar days; allowance/year/bucket export stays in the shared toolbar (no authored export button) | Maintain allowance records and export by year/bucket under HR policy; a configurable vacation default is not universal entitlement |
| Absence dates — scoped coverage index | Location/date Select filters and an agenda Calendar (`start=from end=until`) showing accepted intervals with location and state | Read accepted absence intervals; open only permitted context, excluding private reasons and HR identity fields |

On mobile, show requested dates, bucket, counted days and split-year allocation before submit. Loading a calculation must remain distinct from a valid zero; distinguish no own requests, no review work and no filter matches. Preserve entered reason/dates on invalid or stale submissions and refresh the available balance after concurrent decisions. Conflicting published shifts and delayed/conflicting schedule synchronization remain visible Alerts for authorized resolution, not silently deleted assignments. An old request continues to show its recorded timezone, category-to-allowance mapping and working-date portions after policy changes. Calendar, working-day and category edits advance the calendar revision. Shared absence cards remain free of private reasons even when the same user can access a separate review view. Stale decisions cannot approve or consume days.

Constraints: Sidebar MUST be right only, account bottom-right. Public actors have public navigation plus sign-in; never expose staff-only links. Preserve field/record permission boundaries. No fictional locations; use "Current location" and named fixture data or neutral sample names. Keep currency/timezone/unit labels near timed and monetary data. No imagined completion, physical access, availability, admin settings or operations.
```

## 03-leave-review-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLeave/playwright/references/03-leave-review-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit the supplied full page reference. Fix row state/action coherence only: all Pending rows Schedule sync None, Absence release Not requested, only Decide available; Approved row Schedule sync Confirmed, Absence release Not requested, only Cancel available; Rejected row Schedule sync None, Absence release Not requested, no Decide/Cancel. History must say Request recorded, not Schedule synchronized, for selected pending request. Preserve layout. No new operations, metrics, fields outside this correction. Preserve light daisyUI theme, LEFT sidebar and bottom-right account on desktop; closed mobile overlay on portrait. Return ONE full-page actual UI image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLeave. Desktop 1440x1100 landscape, wide main content LEFT; narrow collapsible page navigation sidebar RIGHT, wordmark TOP RIGHT, user menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, accessible dark sans typography, spacious readable forms. One selected page, populated representative authorized records with source state values; show essential primary form and contextual details. Match the selected source hierarchy and permitted actions; never invent admin, extra navigation, metrics or integration success. A declared form's unspecified arguments still require generated labeled inputs from its schema; don't omit them. All navigation uses actual admitted static page titles ONLY. English human labels. Modals CLOSED unless source makes the essential form modal, then show one selected canonical modal. Long content may continue below fold; do not squash unreadable text. The image is a visual target, not evidence of functioning runtime. Show unknown/pending independently from success where provided.
Actual declared page navigation (filter by actor admission; exclude contextual/token routes):
  page /leave/mine title="My leave"@{nl="Mijn verlof"} $LeaveWorkspace
  page /leave/review title="Leave review"@{nl="Verlof beoordelen"} $LeaveWorkspace
  page /leave/absence title="Absence dates"@{nl="Afwezigheidsdatums"} $LeaveWorkspace
Selected owning page:
  page /leave/review title="Leave review"@{nl="Verlof beoordelen"} $LeaveWorkspace
   breadcrumbs
   require hr or leave_reviewer
   card "Assigned review"@{nl="Toegewezen beoordeling"}
    table Request columns=from,until,reason,state,decision,sync,release_state order=from filter=bucket,state defaults={bucket=preferences.bucket} display=split empty="No assigned leave."@{nl="Geen toegewezen verlof."}
     pagination
     badge row.state
     ## sync/release_state are enums: badge, not status.
     badge row.sync
     badge row.release_state
     button opens=decide_request
     modal "Decide request"@{nl="Aanvraag beoordelen"} id=decide_request
      slot content
       form decide arguments={request=row} display=inline
        fieldset "Decision"@{nl="Besluit"}
         checkbox approve
         textarea reason
     button opens=cancel_request
     modal "Cancel request"@{nl="Aanvraag annuleren"} id=cancel_request
      slot content
       form cancel arguments={request=row} display=inline
        textarea reason
     action retry_release
     collapse "Recorded date portions"@{nl="Vastgelegde datumdelen"}
      list row.Portion empty="No portions."@{nl="Geen delen."}
       pagination
       text row.days,row.dates
     history
   card "Allowance and calendar policies"@{nl="Tegoed en kalenderbeleid"}
    require hr
    form Allowance.create
     input year
     input bucket
     input days
    table Allowance columns=year,bucket,days,remaining filter=year,bucket empty="No allowances configured."@{nl="Geen tegoeden ingesteld."}
     pagination
     edit
    form Calendar.create
     input name
    list Calendar empty="No calendars configured."@{nl="Geen kalenders ingesteld."}
     pagination
     edit
     form Day.create
      calendar date
     form Category.create
     table row.Category columns=name,allowance_bucket empty="No absence categories configured."@{nl="Geen afwezigheidscategorieën ingesteld."}
      pagination
      edit
     table row.Day columns=date,working empty="No calendar days configured."@{nl="Geen kalenderdagen ingesteld."}
      pagination
      edit

Owning labels, data and canonical forms/style:
  message label_preferences_year = "Year"@{nl="Jaar"}
  message label_preferences_bucket = "Leave category"@{nl="Verlofcategorie"}
  message label_Allowance_days = "Days"@{nl="Dagen"}
  message label_Request_from = "Start"@{nl="Begin"}
  message label_Request_until = "End"@{nl="Einde"}
  message label_Request_reviewer = "Reviewer"@{nl="Beoordelaar"}
  message label_Request_state_pending = "Pending"@{nl="In afwachting"}
  role hr label="HR staff"@{nl="HR-medewerker"}
  role leave_reviewer label="Leave reviewer"@{nl="Verlofbeoordelaar"}
  Calendar in Employee { name:text, timezone:timezone, revision:int=1 min=1 } label="Working calendar"@{nl="Werkkalender"}
  Category in Calendar { name:text unique label=label_preferences_bucket, allowance_bucket:text? label="Charged allowance category"@{nl="Belaste verlofcategorie"} } label="Leave policy"@{nl="Verlofbeleid"}
  Day in Calendar { date:date unique label="Date"@{nl="Datum"}, working:bool label="Working day"@{nl="Werkdag"} } label="Calendar day"@{nl="Kalenderdag"}
  Allowance in Employee { year:int label=label_preferences_year, bucket:text="vacation" label=label_preferences_bucket, days:int=20 min=0 label=label_Allowance_days } label="Allowance"@{nl="Tegoed"}
  Request in Calendar { location:Location, from:date label=label_Request_from, until:date label=label_Request_until, bucket:text label=label_preferences_bucket, reason:text, reviewer:user label=label_Request_reviewer, timezone:timezone, allowance_bucket:text? label="Recorded charge category"@{nl="Vastgelegde belastingscategorie"}, schedule_revision:int=1 min=1, reserve_delivery:text?, release_delivery:text?, release_state:enum(none,pending,released,failed,unknown)=none label={text="Absence release"@{nl="Afwezigheid vrijgeven"},values={none="Not requested"@{nl="Niet aangevraagd"},pending=label_Request_state_pending,released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, calendar_version:int label="Calendar version"@{nl="Kalenderversie"}, state:enum(pending,approved,rejected,withdrawn,cancelled)=pending label={text="State"@{nl="Status"},values={pending=label_Request_state_pending,approved="Approved"@{nl="Goedgekeurd"},rejected="Rejected"@{nl="Afgewezen"},withdrawn="Withdrawn"@{nl="Ingetrokken"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, decision:text? label="Decision"@{nl="Besluit"}, schedule_source:text? label="Schedule source"@{nl="Planningsbron"}, sync:enum(none,pending,confirmed,conflict,unavailable)=none label={text="Schedule synchronization"@{nl="Planningsafstemming"},values={pending=label_Request_state_pending,none="None"@{nl="Geen"},confirmed="Confirmed"@{nl="Bevestigd"},conflict="Conflict"@{nl="Conflict"},unavailable="Unavailable"@{nl="Niet beschikbaar"}}} } label="Leave request"@{nl="Verlofaanvraag"}
  Portion in Request { allowance:Allowance?, days:int label=label_Allowance_days, dates:date[]! label="Working dates"@{nl="Werkdagen"} } label="Yearly leave portion"@{nl="Verlofdeel per jaar"}
  scenario calendar_changed on=Calendar.update
  scenario day_created on=Day.create
  scenario day_changed on=Day.update
  scenario category_created on=Category.create
  scenario category_changed on=Category.update
  scenario preview(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket) read=true -> Preview by=members label="Preview leave"@{nl="Verlof vooraf bekijken"}
  scenario request(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket,reason:text,reviewer:user label=label_Request_reviewer) by=members label="Request leave"@{nl="Verlof aanvragen"}
  scenario decide(request:Request,approve:bool label="Approve"@{nl="Goedkeuren"},reason:text) by=leave_reviewer label="Record decision"@{nl="Besluit vastleggen"}
  scenario withdraw(request:Request) by=members label="Withdraw"@{nl="Intrekken"}
  scenario cancel(request:Request,reason:text) by=hr or leave_reviewer
  scenario retry_release(request:Request) by=hr or leave_reviewer label="Retry absence release"@{nl="Vrijgave afwezigheid herhalen"}
  scenario schedule_result on=StaffSchedule.changed
  scenario reserve_result on=StaffSchedule.reserve.completed
  scenario release_result on=StaffSchedule.release.completed
  style LeaveWorkspace $"Use discreet leave-request rows and readable working-day calendar details. Align annual allowance and remaining days; clearly distinguish requested dates, private review decisions, and schedule synchronization outcomes without revealing sensitive reasons through visual summaries. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { year:int? label=label_preferences_year, bucket:text? label=label_preferences_bucket }
Requirements describing interaction:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My leave, Leave review for eligible approvers/HR, then Absence dates for permitted coverage planning. Request details are contextual links. HR allowance work stays ordinary; shared absences exclude private reasons.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My leave — employee index | View-defaults Card with the year/bucket memory, recorded working-calendar explanation and allowance Stat totals; own request history Table with status and synchronization Badges, a counted-days stat with cross-year portions and a withdraw tooltip; per-allowance balance collapse with a radial remaining/days meter | Preview inclusive whole working days, cross-year portions and remaining allowance before requesting; withdraw own pending requests |
| Leave review — assigned approver queue | Request Table with authorized private reason, recorded calculation, recorded-date-portions collapse and state/synchronization/release Badges; decide and cancel modal dialogs, release-retry action | Decide only the assigned eligible request without self-approval; authorized cancellation restores the recorded balance once |
| Allowances — HR view within review | Employee/year/bucket Table with configured and remaining days; authorized allowance Fieldsets and calendar-date controls for calendar days; allowance/year/bucket export stays in the shared toolbar (no authored export button) | Maintain allowance records and export by year/bucket under HR policy; a configurable vacation default is not universal entitlement |
| Absence dates — scoped coverage index | Location/date Select filters and an agenda Calendar (`start=from end=until`) showing accepted intervals with location and state | Read accepted absence intervals; open only permitted context, excluding private reasons and HR identity fields |

On mobile, show requested dates, bucket, counted days and split-year allocation before submit. Loading a calculation must remain distinct from a valid zero; distinguish no own requests, no review work and no filter matches. Preserve entered reason/dates on invalid or stale submissions and refresh the available balance after concurrent decisions. Conflicting published shifts and delayed/conflicting schedule synchronization remain visible Alerts for authorized resolution, not silently deleted assignments. An old request continues to show its recorded timezone, category-to-allowance mapping and working-date portions after policy changes. Calendar, working-day and category edits advance the calendar revision. Shared absence cards remain free of private reasons even when the same user can access a separate review view. Stale decisions cannot approve or consume days.

Constraints: Sidebar MUST be right only, account bottom-right. Public actors have public navigation plus sign-in; never expose staff-only links. Preserve field/record permission boundaries. No fictional locations; use "Current location" and named fixture data or neutral sample names. Keep currency/timezone/unit labels near timed and monetary data. No imagined completion, physical access, availability, admin settings or operations.
```

## 04-leave-absence-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLeave/playwright/references/04-leave-absence-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit the supplied full page reference. Privacy correction: Calendar event label must be 'Current location — Approved', not employee name. Remove 'Leave category' column and values from table (source approved absence projection has only start/end/location/state). Replace Office with Current location. Sidebar account may keep its own identity. Preserve layout. No new operations, metrics, fields outside this correction. Preserve light daisyUI theme, LEFT sidebar and bottom-right account on desktop; closed mobile overlay on portrait. Return ONE full-page actual UI image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLeave. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /leave/mine title="My leave"@{nl="Mijn verlof"} $LeaveWorkspace
  page /leave/review title="Leave review"@{nl="Verlof beoordelen"} $LeaveWorkspace
  page /leave/absence title="Absence dates"@{nl="Afwezigheidsdatums"} $LeaveWorkspace
SELECTED PAGE:
  page /leave/absence title="Absence dates"@{nl="Afwezigheidsdatums"} $LeaveWorkspace
   breadcrumbs
   require members
   card "Scoped absence dates"@{nl="Afwezigheid binnen scope"}
    calendar Request as request where request.state==approved start=from end=until columns=location,state filter=location,from,until empty="No absence dates."@{nl="Geen afwezigheidsdatums."}
     pagination
     badge row.state
OWNING LABELS/DATA/FORMS/STYLES:
  message label_preferences_year = "Year"@{nl="Jaar"}
  message label_preferences_bucket = "Leave category"@{nl="Verlofcategorie"}
  message label_Allowance_days = "Days"@{nl="Dagen"}
  message label_Request_from = "Start"@{nl="Begin"}
  message label_Request_until = "End"@{nl="Einde"}
  message label_Request_reviewer = "Reviewer"@{nl="Beoordelaar"}
  message label_Request_state_pending = "Pending"@{nl="In afwachting"}
  role hr label="HR staff"@{nl="HR-medewerker"}
  role leave_reviewer label="Leave reviewer"@{nl="Verlofbeoordelaar"}
  Calendar in Employee { name:text, timezone:timezone, revision:int=1 min=1 } label="Working calendar"@{nl="Werkkalender"}
  Category in Calendar { name:text unique label=label_preferences_bucket, allowance_bucket:text? label="Charged allowance category"@{nl="Belaste verlofcategorie"} } label="Leave policy"@{nl="Verlofbeleid"}
  Day in Calendar { date:date unique label="Date"@{nl="Datum"}, working:bool label="Working day"@{nl="Werkdag"} } label="Calendar day"@{nl="Kalenderdag"}
  Allowance in Employee { year:int label=label_preferences_year, bucket:text="vacation" label=label_preferences_bucket, days:int=20 min=0 label=label_Allowance_days } label="Allowance"@{nl="Tegoed"}
  Request in Calendar { location:Location, from:date label=label_Request_from, until:date label=label_Request_until, bucket:text label=label_preferences_bucket, reason:text, reviewer:user label=label_Request_reviewer, timezone:timezone, allowance_bucket:text? label="Recorded charge category"@{nl="Vastgelegde belastingscategorie"}, schedule_revision:int=1 min=1, reserve_delivery:text?, release_delivery:text?, release_state:enum(none,pending,released,failed,unknown)=none label={text="Absence release"@{nl="Afwezigheid vrijgeven"},values={none="Not requested"@{nl="Niet aangevraagd"},pending=label_Request_state_pending,released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, calendar_version:int label="Calendar version"@{nl="Kalenderversie"}, state:enum(pending,approved,rejected,withdrawn,cancelled)=pending label={text="State"@{nl="Status"},values={pending=label_Request_state_pending,approved="Approved"@{nl="Goedgekeurd"},rejected="Rejected"@{nl="Afgewezen"},withdrawn="Withdrawn"@{nl="Ingetrokken"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, decision:text? label="Decision"@{nl="Besluit"}, schedule_source:text? label="Schedule source"@{nl="Planningsbron"}, sync:enum(none,pending,confirmed,conflict,unavailable)=none label={text="Schedule synchronization"@{nl="Planningsafstemming"},values={pending=label_Request_state_pending,none="None"@{nl="Geen"},confirmed="Confirmed"@{nl="Bevestigd"},conflict="Conflict"@{nl="Conflict"},unavailable="Unavailable"@{nl="Niet beschikbaar"}}} } label="Leave request"@{nl="Verlofaanvraag"}
  Portion in Request { allowance:Allowance?, days:int label=label_Allowance_days, dates:date[]! label="Working dates"@{nl="Werkdagen"} } label="Yearly leave portion"@{nl="Verlofdeel per jaar"}
  scenario calendar_changed on=Calendar.update
  scenario day_created on=Day.create
  scenario day_changed on=Day.update
  scenario category_created on=Category.create
  scenario category_changed on=Category.update
  scenario preview(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket) read=true -> Preview by=members label="Preview leave"@{nl="Verlof vooraf bekijken"}
  scenario request(calendar:Calendar,from:date label=label_Request_from,until:date label=label_Request_until,bucket:text label=label_preferences_bucket,reason:text,reviewer:user label=label_Request_reviewer) by=members label="Request leave"@{nl="Verlof aanvragen"}
  scenario decide(request:Request,approve:bool label="Approve"@{nl="Goedkeuren"},reason:text) by=leave_reviewer label="Record decision"@{nl="Besluit vastleggen"}
  scenario withdraw(request:Request) by=members label="Withdraw"@{nl="Intrekken"}
  scenario cancel(request:Request,reason:text) by=hr or leave_reviewer
  scenario retry_release(request:Request) by=hr or leave_reviewer label="Retry absence release"@{nl="Vrijgave afwezigheid herhalen"}
  scenario schedule_result on=StaffSchedule.changed
  scenario reserve_result on=StaffSchedule.reserve.completed
  scenario release_result on=StaffSchedule.release.completed
  style LeaveWorkspace $"Use discreet leave-request rows and readable working-day calendar details. Align annual allowance and remaining days; clearly distinguish requested dates, private review decisions, and schedule synchronization outcomes without revealing sensitive reasons through visual summaries. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { year:int? label=label_preferences_year, bucket:text? label=label_preferences_bucket }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My leave, Leave review for eligible approvers/HR, then Absence dates for permitted coverage planning. Request details are contextual links. HR allowance work stays ordinary; shared absences exclude private reasons.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My leave — employee index | View-defaults Card with the year/bucket memory, recorded working-calendar explanation and allowance Stat totals; own request history Table with status and synchronization Badges, a counted-days stat with cross-year portions and a withdraw tooltip; per-allowance balance collapse with a radial remaining/days meter | Preview inclusive whole working days, cross-year portions and remaining allowance before requesting; withdraw own pending requests |
| Leave review — assigned approver queue | Request Table with authorized private reason, recorded calculation, recorded-date-portions collapse and state/synchronization/release Badges; decide and cancel modal dialogs, release-retry action | Decide only the assigned eligible request without self-approval; authorized cancellation restores the recorded balance once |
| Allowances — HR view within review | Employee/year/bucket Table with configured and remaining days; authorized allowance Fieldsets and calendar-date controls for calendar days; allowance/year/bucket export stays in the shared toolbar (no authored export button) | Maintain allowance records and export by year/bucket under HR policy; a configurable vacation default is not universal entitlement |
| Absence dates — scoped coverage index | Location/date Select filters and an agenda Calendar (`start=from end=until`) showing accepted intervals with location and state | Read accepted absence intervals; open only permitted context, excluding private reasons and HR identity fields |

On mobile, show requested dates, bucket, counted days and split-year allocation before submit. Loading a calculation must remain distinct from a valid zero; distinguish no own requests, no review work and no filter matches. Preserve entered reason/dates on invalid or stale submissions and refresh the available balance after concurrent decisions. Conflicting published shifts and delayed/conflicting schedule synchronization remain visible Alerts for authorized resolution, not silently deleted assignments. An old request continues to show its recorded timezone, category-to-allowance mapping and working-date portions after policy changes. Calendar, working-day and category edits advance the calendar revision. Shared absence cards remain free of private reasons even when the same user can access a separate review view. Stale decisions cannot approve or consume days.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```


