# Exact generation prompts

## Focused desktop replacement correction — 02-own-shifts-desktop.png

Input: preceding desktop-only generated image.

```text
Use case: ui-mockup. Focused source-label correction ONLY, keep left desktop sidebar and all existing layout/states. Add Employee picker 'Noah Janssen (you)' before From/Until in My availability form; the source explicitly places this own authorized field. In Published duties, Workspace column is Workspace, NOT a date. Remove duplicate Skill column; keep one Visitor service skill column. Historical swap badge must be Superseded (source obsolete), NOT Cancelled which is not a Swap enum. Preserve own open swap/no Accept control, published revision2 and Pending notice. No new actions.
```

## Desktop-only replacement — 02-own-shifts-desktop.png

```text
Use case: ui-mockup. One polished realistic implementable individual full-page DESKTOP intended-design app UI about1440x1100, no frame/browserchrome/collage. Canonical shared LEFT sidebar: app wordmark TOP LEFT, source page links below, account BOTTOM LEFT. Content to right. No right sidebar, no mobile menu. Light neutral daisyUI shared theme, dark readable sans-serif, subtle borders, clear semantic text labels and useful spacing. Only authored fields/actions/states, no invented KPIs or features. CanShift /roster/mine My shifts own employeeNoah not scheduler. Sidebar ONLY My shifts (no private scheduler roster). Your availability form Employee Noah own picker, From14Oct2026 09:00 Until14Oct17:00 Available toggleYes Submit; own availability rows current14Oct09–17 and edit. Published duties and swap decisions split list: own Reception duty Workspace14Oct09–17 skillVisitor service PublishedYes revision2 buffers15m/15m conflictNo. Notice table KindPublication Revision2 StatePending; pending notice distinct committed duty. Request swap form Proposed substitute Mira authorized candidate picker Submit. Current swap OriginalNoah Proposed substituteMira StateOpen. No Accept/Decline for original requester (only designated substitute can decide). History ordinary attributed swap requests only, no invented attendance completion. Full own duty interval and notice/source states readable.
```

## Final desktop left-sidebar revision — 01-roster-populated-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. 
```

## Focused correction — 02-own-shifts-mobile.png

Input: corresponding first-pass generated image.

```text
Use case: ui-mockup. Correct the narrow mobile responsive layout of this image. Render content at390CSS px width in a single column with 16px gutters and readable16px body; tall full page no device frame. Remove persistent right sidebar entirely, keep top-right menu button for CLOSED mobile overlay. Add CanShift wordmark in mobile header. Replace wide duty/notice/swap/history tables with labeled stacked record cards. Keep every interval location skill revision published notice state and buffer label. Availability form includes Employee Noah Janssen own picker before From/Until/Available. Account menu at bottom of mobile content or closed overlay, not sidebar. History must retain ordinary attributed transitions only; remove invented Worked/Completed attendance outcomes. Preserve request swap substitute picker, Open swap and no accept action for original employee.
```

## 02-own-shifts-mobile.png

```text
Use case: ui-mockup. Create one polished implementable intended-design website full-page UI, no browser chrome/device frame/collage/watermark. Light neutral daisyUI shared theme, dark readable sans-serif, white cards subtle borders, restrained semantic colors with text labels, practical spacing, keyboard focus. Only source-owned fields/actions/states. No invented dashboards, metrics, settings, marketing taglines or Home links. Desktop uses wordmark at TOP of RIGHT sidebar and user menu BOTTOM RIGHT; mobile uses menu button at top-right with dismissible overlay closed, no persistent desktop sidebar. Illustrative data in the Workspace location, currency EUR, Europe/Brussels, October2026. Full page height preserves all essential controls. Portrait narrow mobile intent390CSS pixels. /roster/mine My shifts own employee, NOT scheduler. Header My shifts. Your availability create form employee own Noah Janssen, From14Oct09:00 Until14Oct17:00 Available toggle, submit. Own availability card dated14Oct09–17 AvailableYes edit. Published duties and swap decisions card Reception at Workspace14Oct09–17 skillVisitor service revision2 publishedYes buffers before15m after15m No conflict. Notice table publication rev2 Pending distinct from published duty. Request swap form Proposed substitute authorized picker Mira and Submit. Current swap card substituteMira originalNoah stateOpen; no acceptance button for original employee. Show own history. Do not reveal roster drafts/private leave reasons. Closed mobile shell.
```

## Focused correction — 01-roster-populated-desktop.png

Input: first-pass generated image from the corresponding prompt below.

```text
Focused correction preserve all roster data, agenda, coverage and readable form layout. Move CanShift wordmark from top-left header into TOP of existing RIGHT sidebar. Remove redundant top-left wordmark and duplicated Staff roster breadcrumb. Use workplace examples only: replace Riverside Clinic with Workspace, Care assistant with Reception, First aid with Visitor service, Patient support with Visitor service, General support with Facilities. No new controls. Source shared shell wordmark/right links/user bottom-right must all remain.
```

## 01-roster-populated-desktop.png

```text
Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanShift. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /roster title=title_roster 
  page /roster/mine title="My shifts" 
Selected page and hierarchy/controls:
  page /roster title=title_roster $ShiftWorkspace
   require scheduler
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   form Roster.create
   list Roster
    card "Roster assignment"
     form assign
      ## roster auto-binds the enclosing roster; instants and travel buffers keep generated controls.
      fieldset "Assignment"
       select employee
       select location
       input role
       input skill
    card "Dated employee commitments"
     calendar row.Commitment start=from end=until filter=location,kind,conflict defaults={location=preferences.location}
      badge row.skill
      status row.conflict
      text row.employee,row.active
      actions recover_commitment
      list row.Duty
       status row.published
       text row.role,row.published_revision,row.override_reason,row.published_by
       actions cancel,reconcile
       button opens=publish_dialog
       ## The dialog keeps the duty row; only the override reason is entered.
       modal "Publish duty" id=publish_dialog
        slot content
         form publish arguments={duty=row} display=inline
          input override_reason
       history
       table row.Notice columns=kind,revision,state
        pagination
    card "Coverage requirements"
     form Coverage.create
      ## The roster parent auto-binds; instants and minimum keep generated controls.
      fieldset "Coverage window"
       select location
       input role
     table row.Coverage columns=location,role,from,until,minimum filter=location defaults={location=preferences.location}
      edit
      status row.met
  # Maintain your availability separately from hidden roster drafts. 
Source style intent:
  style ShiftWorkspace $"Create a readable dated roster with clear staff commitments, locations, roles, and conflicts. Keep coverage requirements and published duties distinct from private leave information; make swap decisions and notification outcomes easy to follow. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message title_roster = "Staff roster"
  message label_CommitmentRequest_source = "Source reference"
  message label_CommitmentRequest_employee = "Employee"
  message label_CommitmentRequest_from = "From"
  message label_CommitmentRequest_until = "Until"
  message label_CommitmentRequest_before = "Travel buffer before"
  message label_CommitmentRequest_after = "Travel buffer after"
  message label_CommitmentRequest_skill = "Required skill"
  message label_CommitmentRequest_kind = "Kind"
  message label_CommitmentRequest_kind_duty = "Staff duty"
  message label_CommitmentRequest_kind_visit = "Service visit"
  message label_CommitmentRequest_kind_appointment = "Host appointment"
  message label_CommitmentRequest_kind_absence = "Absence"
  message label_CommitmentRequest_kind_interview = "Interview"
  message label_Duty_role = "Work role"
  message label_Duty_override_reason = "Coverage override reason"
  message label_Swap_substitute = "Proposed substitute"
  Roster { name:text unique } label=title_roster
  Availability in Roster { employee:Employee label=label_CommitmentRequest_employee, from:datetime label=label_CommitmentRequest_from, until:datetime label=label_CommitmentRequest_until, available:bool=true label="Available for work" } label="Employee availability"
  Commitment in Roster { employee:Employee label=label_CommitmentRequest_employee, location:Location, from:datetime label=label_CommitmentRequest_from, until:datetime label=label_CommitmentRequest_until, before:duration=0m label=label_CommitmentRequest_before, after:duration=0m label=label_CommitmentRequest_after, skill:text label=label_CommitmentRequest_skill, kind:CommitmentRequest.kind label={text=label_CommitmentRequest_kind,values={duty=label_CommitmentRequest_kind_duty,visit=label_CommitmentRequest_kind_visit,appointment=label_CommitmentRequest_kind_appointment,absence=label_CommitmentRequest_kind_absence,interview=label_CommitmentRequest_kind_interview}}, source:text unique label=label_CommitmentRequest_source, previous:Commitment? label="Retained predecessor", revision:int=1, active:bool=true, conflict:bool=false label="Commitment conflict" } label="Employee commitment"
  Release in Roster { source:text unique label=label_CommitmentRequest_source, revision:int min=1 } label="Released source fence"
  Duty in Commitment { role:text label=label_Duty_role, published:bool=false label="Published", published_revision:int=0 label="Published revision", published_by:user? label="Published by", override_reason:text? label=label_Duty_override_reason } label="Published duty"
  Coverage in Roster { location:Location, role:text label=label_Duty_role, from:datetime label=label_CommitmentRequest_from, until:datetime label=label_CommitmentRequest_until, minimum:int=1 min=1 label="Minimum staff" } label="Coverage requirement"
  Swap in Duty { substitute:Employee label=label_Swap_substitute, original:Employee label="Original employee", revision:int, state:enum(open,accepted,rejected,obsolete)=open label={text="State",values={open="Open",accepted="Accepted",rejected="Rejected",obsolete="Superseded"}} } label="Shift swap"
  Notice in Duty { recipient:user, revision:int, kind:DutyNotice.kind, delivery:delivery(Mail.send)? } label="Roster notice"
  derive Notice.state:DeliveryResult.status? = row.delivery?.status label={text="Notice delivery",values={pending="Pending",succeeded="Sent",failed="Failed",unknown="Unknown",skipped="Skipped"}}
  derive Coverage.met:bool = coverage_met(row.parent,row,null) label="Coverage met"

Additional exact screen direction: title_roster means Staff roster. Show populated scheduler roster, chronological dated agenda (not a week grid), 13 Oct 2026 Europe/Brussels. Complete assignment fields include employee, location, role, skill, From, Until, travel buffers. One published duty with revision and notice outcome, another draft with visible conflict; no private leave reasons. Coverage requirements row explicitly Coverage met No; no invented coverage aggregate. Use right navigation only Staff roster and My shifts. Shared account bottom right. Include assignment and coverage submit actions. Complete form may continue naturally below fold.
```
