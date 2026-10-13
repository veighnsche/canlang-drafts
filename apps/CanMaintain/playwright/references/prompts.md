# CanMaintain exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-facilities-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMaintain/playwright/references/02-facilities-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMaintain. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /facilities title="Facilities"@{nl="Faciliteiten"} $MaintainWorkspace
  page /facilities/my-reports title="My facility reports"@{nl="Mijn storingsmeldingen"} $MaintainWorkspace
SELECTED PAGE:
  page /facilities title="Facilities"@{nl="Faciliteiten"} $MaintainWorkspace
   require maintenance_manager or technician
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   card "Asset directory"@{nl="Bedrijfsmiddelenregister"}
    form Asset.create
    list Asset filter=location,category,retired search=name defaults={location=preferences.location} display=split empty="No assets match these filters"@{nl="Geen bedrijfsmiddelen voor deze filters"}
     pagination
     text row.retired
     edit
     collapse "Manual"@{nl="Handleiding"}
      require row.manual!=null
      link target=row.manual caption="Manual"@{nl="Handleiding"}
     tabs
      tab "Inspection plans and checklists"@{nl="Inspectieplannen en checklists"}
       table row.Cancellation columns=reason,cutoff,author,at,phase empty="No cancellations recorded"@{nl="Geen annuleringen vastgelegd"}
        pagination
        action resume_cancellation
       form Plan.create
        fieldset "Inspection plan"@{nl="Inspectieplan"}
         input name
         input cadence_days
         calendar next_due
         toggle active
       list row.Plan empty="No inspection plans"@{nl="Geen inspectieplannen"}
        pagination
        edit
        table row.Inspection columns=due,inspector,result,cancelled,evidence,repair,reminded_at empty="No inspections recorded"@{nl="Geen inspecties vastgelegd"}
         pagination
         badge row.result
         text row.checklist
         form inspect
          fieldset "Checklist result"@{nl="Checklistresultaat"}
           radio result
           textarea evidence
         form dispatch_visit arguments={inspection=row,location=row.parent.parent.location}
      tab "Repairs and verification"@{nl="Reparaties en verificatie"}
       form Repair.create
       table row.Repair columns=title,severity,due,state,contractor,block_action,block_state,affected_state,visit_review filter=state,severity defaults={severity=preferences.severity} empty="No repairs match these filters"@{nl="Geen reparaties voor deze filters"}
        pagination
        badge row.state
        badge row.severity
        badge row.block_state
        edit
        actions assign,start,block,finish,verify,retry_availability,affected_bookings,reopen
        form dispatch_visit arguments={repair=row,location=row.parent.location}
        card "Affected bookings"@{nl="Getroffen boekingen"}
         require row.affected!=null
         text row.affected_state,row.affected.checked_at
         table row.affected.items columns=reference,from,until,quantity,status,conflict empty="No affected bookings"@{nl="Geen getroffen boekingen"}
          pagination
        table row.Verification columns=completion,evidence,author,at empty="No verifications recorded"@{nl="Geen verificaties vastgelegd"}
         pagination
        list row.Assignment empty="No assignments recorded"@{nl="Geen opdrachten vastgelegd"}
         pagination
         text row.reason,row.contact
         table row.Notice columns=state,delivery empty="No delivery attempts"@{nl="Geen verzendpogingen"}
          pagination
          action retry_notice
        history
OWNING LABELS/DATA/FORMS/STYLES:
  message label_Plan_checklist = "Checklist"@{nl="Checklist"}
  message label_Inspection_answers = "Answers"@{nl="Antwoorden"}
  message label_Inspection_result_pending = "Pending"@{nl="In afwachting"}
  message label_Inspection_result_failed = "Failed"@{nl="Mislukt"}
  message label_Repair_photo = "Photo"@{nl="Foto"}
  role maintenance_manager label="Maintenance manager"@{nl="Onderhoudsbeheerder"}
  role technician label="Technician"@{nl="Technicus"}
  export Asset { location:Location, identifier:text unique label="Identifier"@{nl="Identificatie"}, name:text, category:text label="Category"@{nl="Categorie"}, supplier:Supplier?, resource:text? label="Resource reference"@{nl="Referentie voorziening"}, serial:text? label="Serial number"@{nl="Serienummer"}, warranty:date? label="Warranty expiry"@{nl="Garantie-einddatum"}, manual:file? label="Manual"@{nl="Handleiding"}, inspection_epoch:int=0 min=0, retired:bool=false label="Retired"@{nl="Buiten gebruik"} } label="Asset"@{nl="Bedrijfsmiddel"}
  Plan in Asset { name:text, assignee:user label="Assignee"@{nl="Toegewezen persoon"}, assignee_email:email label="Reminder destination"@{nl="Bestemming herinnering"}, cadence_days:int min=1 label="Interval in days"@{nl="Interval in dagen"}, next_due:date label="Next inspection date"@{nl="Volgende inspectiedatum"}, checklist:text[]! label=label_Plan_checklist, revision:int=1, asset_epoch:int=0 min=0, active:bool=true } label="Inspection plan"@{nl="Inspectieplan"}
  export Inspection in Plan { cancelled:bool=false label="Cancelled"@{nl="Geannuleerd"}, cancellation:text? label="Cancellation reason"@{nl="Reden annulering"}, cancelled_by:user? label="Cancelled by"@{nl="Geannuleerd door"}, cancelled_at:datetime? label="Cancelled at"@{nl="Geannuleerd op"}, reminder_email:email label="Reminder destination"@{nl="Bestemming herinnering"}, reminded_at:datetime? label="Reminder queued at"@{nl="Herinnering klaargezet op"}, occurrence:text unique label="Occurrence reference"@{nl="Referentie uitvoering"}, due:date, checklist:text[]! label=label_Plan_checklist, asset_epoch:int=0 min=0, template_version:int label="Template version"@{nl="Templateversie"}, inspector:user label="Inspector"@{nl="Inspecteur"}, answers:text[] label=label_Inspection_answers, result:enum(pending,passed,failed,blocked)=pending label={text="Inspection result"@{nl="Inspectieresultaat"},values={pending=label_Inspection_result_pending,passed="Passed"@{nl="Goedgekeurd"},failed=label_Inspection_result_failed,blocked="Blocked"@{nl="Geblokkeerd"}}}, evidence:text?, inspected_at:datetime? label="Inspected at"@{nl="Geïnspecteerd op"}, repair:Repair? } label="Inspection"@{nl="Inspectie"}
  export Repair in Asset { affected:AffectedBookings? label="Affected bookings"@{nl="Getroffen boekingen"}, affected_delivery:text? label="Affected-booking lookup delivery"@{nl="Verzending opvraag getroffen boekingen"}, affected_state:enum(none,pending,fresh,failed,unknown)=none label={text="Booking review read"@{nl="Lezen boekingsbeoordeling"},values={none="Not requested"@{nl="Niet aangevraagd"},pending=label_Inspection_result_pending,fresh="Fresh snapshot"@{nl="Actuele momentopname"},failed=label_Inspection_result_failed,unknown="Unknown"@{nl="Onbekend"}}}, assignment:Assignment? label="Current assignment"@{nl="Huidige opdracht"}, block_from:datetime? label="Downtime start"@{nl="Begin uitval"}, block_until:datetime? label="Downtime end"@{nl="Einde uitval"}, block_action:enum(downtime,restore)=downtime label={text="Availability action"@{nl="Beschikbaarheidsactie"},values={downtime="Downtime"@{nl="Uitval"},restore="Restore"@{nl="Herstellen"}}}, block_revision:int=0, restore_evidence:text? label="Release evidence"@{nl="Vrijgavebewijs"}, visit_review:bool=false label="Visit report needs review"@{nl="Bezoekverslag vereist beoordeling"}, title:text trim min=1, description:text, severity:enum(low,normal,urgent)=normal label={text="Severity"@{nl="Ernst"},values={low="Low"@{nl="Laag"},normal="Normal"@{nl="Normaal"},urgent="Urgent"@{nl="Dringend"}}}, reporter:user? label="Reporter"@{nl="Melder"}, reporter_email:email? label="Reporter email"@{nl="E-mailadres melder"}, photo:file? label=label_Repair_photo, contractor:Supplier? label="Contractor"@{nl="Uitvoerder"}, due:date?, cost:money? label="Cost"@{nl="Kosten"}, state:enum(open,assigned,in_progress,awaiting_verification,fixed)=open label={text="State"@{nl="Status"},values={open="Open"@{nl="Open"},assigned="Assigned"@{nl="Toegewezen"},in_progress="In progress"@{nl="In uitvoering"},awaiting_verification="Awaiting verification"@{nl="Wacht op verificatie"},fixed="Fixed"@{nl="Hersteld"}}}, completion:text? label="Completion evidence"@{nl="Afrondingsbewijs"}, verified_by:user? label="Verified by"@{nl="Geverifieerd door"}, block_resource:text? label="Blocked resource"@{nl="Geblokkeerde voorziening"}, block_source:text? label="Downtime reference"@{nl="Uitvalreferentie"}, block_state:enum(none,pending,confirmed,failed,unknown,released)=none label={text="Downtime outcome"@{nl="Uitvalresultaat"},values={pending=label_Inspection_result_pending,failed=label_Inspection_result_failed,none="None"@{nl="Geen"},confirmed="Confirmed"@{nl="Bevestigd"},unknown="Unknown"@{nl="Onbekend"},released="Released"@{nl="Vrijgegeven"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"} } label="Repair"@{nl="Reparatie"}
  Verification in Repair { completion:text, evidence:text, author:user server=actor, at:datetime server=now } label="Repair verification"@{nl="Reparatieverificatie"}
  Assignment in Repair { body:text label="Frozen assignment details"@{nl="Vastgelegde opdrachtdetails"}, supplier:Supplier, contact:email label="Contact"@{nl="Contact"}, reason:text, author:user server=actor label="Author"@{nl="Auteur"} } label="Contractor assignment"@{nl="Opdracht aan leverancier"}
  Notice in Assignment { delivery:delivery(Mail.send)? } label="Assignment delivery"@{nl="Opdrachtverzending"}
  Cancellation in Asset { plan:Plan?, through:int min=0, cutoff:date, reason:enum(plan_revised,asset_retired), author:user server=actor, at:datetime server=now, after:text?, phase:enum(plans,inspections,complete)=inspections } label="Inspection cancellation"@{nl="Inspectieannulering"}
  scenario activate_plan on=Plan.create
  scenario revise_plan on=Plan.update
  scenario retire_asset on=Asset.update
  scenario cancel_inspection_step on=CancellationStep
  scenario resume_cancellation(cancellation:Cancellation) by=maintenance_manager label="Resume inspection cancellation"@{nl="Inspectieannulering hervatten"}
  export scenario report(asset:Asset,title:text,description:text,photo:file? label=label_Repair_photo) -> Repair by=authenticated label="Report fault"@{nl="Storing melden"}
  scenario assign(repair:Repair,supplier:Supplier,reason:text) by=maintenance_manager
  scenario retry_notice(notice:Notice) by=maintenance_manager label="Retry assignment notice"@{nl="Opdrachtmelding opnieuw sturen"}
  scenario start(repair:Repair) by=technician label="Start repair"@{nl="Reparatie starten"}
  scenario block(repair:Repair,from:datetime label="Start"@{nl="Begin"},until:datetime? label="End"@{nl="Einde"}) by=maintenance_manager label="Record blocker"@{nl="Blokkade registreren"}
  scenario finish(repair:Repair,evidence:text) by=technician label="Submit repair evidence"@{nl="Reparatiebewijs indienen"}
  scenario verify(repair:Repair,evidence:text) by=maintenance_manager label="Verify repair"@{nl="Reparatie verifiëren"}
  scenario reopen(repair:Repair,reason:text) by=maintenance_manager
  export scenario inspect(inspection:Inspection,answers:text[] label=label_Inspection_answers,result:Inspection.result,evidence:text) by=technician label="Record inspection"@{nl="Inspectie registreren"}
  scenario visit_report on=ReportSubmitted
  scenario generate on=PlanDue
  scenario remind on=Reminder
  scenario retry_availability(repair:Repair) by=maintenance_manager label="Retry availability request"@{nl="Beschikbaarheidsaanvraag opnieuw proberen"}
  scenario downtime_result on=Rooms.downtime.completed
  scenario restore_result on=Rooms.restore.completed
  scenario affected_bookings(repair:Repair) by=maintenance_manager label="Refresh affected bookings"@{nl="Getroffen boekingen vernieuwen"}
  scenario affected_result on=Rooms.affected.completed
  scenario availability_changed on=Rooms.changed
  export scenario work(locations:text[]) read=true scope=authority -> WorkBatch by=technician
  export scenario work_detail(record:Inspection) read=true scope=authority -> WorkItem by=technician
  style MaintainWorkspace $"Make asset and repair rows easy to scan by severity, due date, and verified state. Keep inspections, affected bookings, contractor outcomes, and manager verification evidence distinct; emphasize return-to-service context without implying unconfirmed restoration. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, severity:Repair.severity? }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My facility reports, then Facilities for granted managers/technicians. Asset, inspection and repair details are contextual; inspections and verification queues sit within Facilities. Location/supplier selection uses canonical owners; no copied directory or additional administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My facility reports — verified own index | `breadcrumbs`, a fault-report Fieldset with title/description/photo controls, and an outcome Table with state `badge`, `pagination` and empty state | Submit a verified report and read its outcome without browsing the full location queue |
| Facilities — staff index | `breadcrumbs`, location/severity/status Select filters, and an asset List with retired text, gated manual link, `pagination` and empty states; repair Tables with state/severity/downtime-outcome `badge`s, `pagination` and empty states | Maintain permitted assets/plans/repairs and select active suppliers through canonical records; exports exclude unrelated customer contacts |
| Inspection work — staff queue | Upcoming/overdue and failed/blocked Tabs; typed plan/inspection Fieldset controls, frozen checklist answers, inspector/time, result `badge`, `pagination` and empty states, and linked repair history | Capture an attributable result through the inspection workflow; blocked/failed results retain evidence and corrective action |
| Repair verification — contextual queue/detail | Assignment history, authorized photos, completion notes, downtime synchronization text, affected-booking review links and notice Tables with `pagination` and empty states | Assign/reassign, request downtime, finish, verify/release and reopen through owning actions; technician completion cannot independently restore saleability |

On phones, show due work, checklist items and permitted next action before secondary asset history. Distinguish loading, no own reports, no due inspections and filtered-empty. Preserve unsaved report/checklist/verification evidence after validation or stale actions; optional upload failure remains visible without erasing saved text. Pending/failed/unknown downtime and assignment-notice delivery appear separately from repair state. A superseded contractor loses obsolete actions and queued disclosure; affected customers remain in relocation/cancellation review rather than disappearing. Passing an inspection cannot clear another open repair block. Retirement stops eligible future inspection work while existing inspection, repair and warranty history stays readable under policy. Return-to-service reflects confirmed owning authority, not optimistic local availability.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 03-facilities-my-reports-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMaintain/playwright/references/03-facilities-my-reports-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied actual full-page UI. Add the required labeled 'Asset' picker above Title in fault intake, selected 'Current asset'. Remove invented accepted file types/10 MB helper; source file control determines constraints. Preserve LEFT sidebar, bottom-right account and entire existing light daisyUI layout. No new fields, operations or metrics outside correction. One full-page image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMaintain. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /facilities title="Facilities"@{nl="Faciliteiten"} $MaintainWorkspace
  page /facilities/my-reports title="My facility reports"@{nl="Mijn storingsmeldingen"} $MaintainWorkspace
SELECTED PAGE:
  page /facilities/my-reports title="My facility reports"@{nl="Mijn storingsmeldingen"} $MaintainWorkspace
   require authenticated
   breadcrumbs
   card "Own fault intake"@{nl="Eigen storing melden"}
    form report
     fieldset "Fault details"@{nl="Storingsdetails"}
      input title
      textarea description
      file_input photo
   card "Own report outcomes"@{nl="Eigen meldingsresultaten"}
    table Repair as report where report.reporter==actor columns=title,description,state,due,completion filter=severity,state defaults={severity=preferences.severity} empty="No own reports match these filters"@{nl="Geen eigen meldingen voor deze filters"}
     pagination
     badge row.state
OWNING LABELS/DATA/FORMS/STYLES:
  message label_Plan_checklist = "Checklist"@{nl="Checklist"}
  message label_Inspection_answers = "Answers"@{nl="Antwoorden"}
  message label_Inspection_result_pending = "Pending"@{nl="In afwachting"}
  message label_Inspection_result_failed = "Failed"@{nl="Mislukt"}
  message label_Repair_photo = "Photo"@{nl="Foto"}
  role maintenance_manager label="Maintenance manager"@{nl="Onderhoudsbeheerder"}
  role technician label="Technician"@{nl="Technicus"}
  export Asset { location:Location, identifier:text unique label="Identifier"@{nl="Identificatie"}, name:text, category:text label="Category"@{nl="Categorie"}, supplier:Supplier?, resource:text? label="Resource reference"@{nl="Referentie voorziening"}, serial:text? label="Serial number"@{nl="Serienummer"}, warranty:date? label="Warranty expiry"@{nl="Garantie-einddatum"}, manual:file? label="Manual"@{nl="Handleiding"}, inspection_epoch:int=0 min=0, retired:bool=false label="Retired"@{nl="Buiten gebruik"} } label="Asset"@{nl="Bedrijfsmiddel"}
  Plan in Asset { name:text, assignee:user label="Assignee"@{nl="Toegewezen persoon"}, assignee_email:email label="Reminder destination"@{nl="Bestemming herinnering"}, cadence_days:int min=1 label="Interval in days"@{nl="Interval in dagen"}, next_due:date label="Next inspection date"@{nl="Volgende inspectiedatum"}, checklist:text[]! label=label_Plan_checklist, revision:int=1, asset_epoch:int=0 min=0, active:bool=true } label="Inspection plan"@{nl="Inspectieplan"}
  export Inspection in Plan { cancelled:bool=false label="Cancelled"@{nl="Geannuleerd"}, cancellation:text? label="Cancellation reason"@{nl="Reden annulering"}, cancelled_by:user? label="Cancelled by"@{nl="Geannuleerd door"}, cancelled_at:datetime? label="Cancelled at"@{nl="Geannuleerd op"}, reminder_email:email label="Reminder destination"@{nl="Bestemming herinnering"}, reminded_at:datetime? label="Reminder queued at"@{nl="Herinnering klaargezet op"}, occurrence:text unique label="Occurrence reference"@{nl="Referentie uitvoering"}, due:date, checklist:text[]! label=label_Plan_checklist, asset_epoch:int=0 min=0, template_version:int label="Template version"@{nl="Templateversie"}, inspector:user label="Inspector"@{nl="Inspecteur"}, answers:text[] label=label_Inspection_answers, result:enum(pending,passed,failed,blocked)=pending label={text="Inspection result"@{nl="Inspectieresultaat"},values={pending=label_Inspection_result_pending,passed="Passed"@{nl="Goedgekeurd"},failed=label_Inspection_result_failed,blocked="Blocked"@{nl="Geblokkeerd"}}}, evidence:text?, inspected_at:datetime? label="Inspected at"@{nl="Geïnspecteerd op"}, repair:Repair? } label="Inspection"@{nl="Inspectie"}
  export Repair in Asset { affected:AffectedBookings? label="Affected bookings"@{nl="Getroffen boekingen"}, affected_delivery:text? label="Affected-booking lookup delivery"@{nl="Verzending opvraag getroffen boekingen"}, affected_state:enum(none,pending,fresh,failed,unknown)=none label={text="Booking review read"@{nl="Lezen boekingsbeoordeling"},values={none="Not requested"@{nl="Niet aangevraagd"},pending=label_Inspection_result_pending,fresh="Fresh snapshot"@{nl="Actuele momentopname"},failed=label_Inspection_result_failed,unknown="Unknown"@{nl="Onbekend"}}}, assignment:Assignment? label="Current assignment"@{nl="Huidige opdracht"}, block_from:datetime? label="Downtime start"@{nl="Begin uitval"}, block_until:datetime? label="Downtime end"@{nl="Einde uitval"}, block_action:enum(downtime,restore)=downtime label={text="Availability action"@{nl="Beschikbaarheidsactie"},values={downtime="Downtime"@{nl="Uitval"},restore="Restore"@{nl="Herstellen"}}}, block_revision:int=0, restore_evidence:text? label="Release evidence"@{nl="Vrijgavebewijs"}, visit_review:bool=false label="Visit report needs review"@{nl="Bezoekverslag vereist beoordeling"}, title:text trim min=1, description:text, severity:enum(low,normal,urgent)=normal label={text="Severity"@{nl="Ernst"},values={low="Low"@{nl="Laag"},normal="Normal"@{nl="Normaal"},urgent="Urgent"@{nl="Dringend"}}}, reporter:user? label="Reporter"@{nl="Melder"}, reporter_email:email? label="Reporter email"@{nl="E-mailadres melder"}, photo:file? label=label_Repair_photo, contractor:Supplier? label="Contractor"@{nl="Uitvoerder"}, due:date?, cost:money? label="Cost"@{nl="Kosten"}, state:enum(open,assigned,in_progress,awaiting_verification,fixed)=open label={text="State"@{nl="Status"},values={open="Open"@{nl="Open"},assigned="Assigned"@{nl="Toegewezen"},in_progress="In progress"@{nl="In uitvoering"},awaiting_verification="Awaiting verification"@{nl="Wacht op verificatie"},fixed="Fixed"@{nl="Hersteld"}}}, completion:text? label="Completion evidence"@{nl="Afrondingsbewijs"}, verified_by:user? label="Verified by"@{nl="Geverifieerd door"}, block_resource:text? label="Blocked resource"@{nl="Geblokkeerde voorziening"}, block_source:text? label="Downtime reference"@{nl="Uitvalreferentie"}, block_state:enum(none,pending,confirmed,failed,unknown,released)=none label={text="Downtime outcome"@{nl="Uitvalresultaat"},values={pending=label_Inspection_result_pending,failed=label_Inspection_result_failed,none="None"@{nl="Geen"},confirmed="Confirmed"@{nl="Bevestigd"},unknown="Unknown"@{nl="Onbekend"},released="Released"@{nl="Vrijgegeven"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"} } label="Repair"@{nl="Reparatie"}
  Verification in Repair { completion:text, evidence:text, author:user server=actor, at:datetime server=now } label="Repair verification"@{nl="Reparatieverificatie"}
  Assignment in Repair { body:text label="Frozen assignment details"@{nl="Vastgelegde opdrachtdetails"}, supplier:Supplier, contact:email label="Contact"@{nl="Contact"}, reason:text, author:user server=actor label="Author"@{nl="Auteur"} } label="Contractor assignment"@{nl="Opdracht aan leverancier"}
  Notice in Assignment { delivery:delivery(Mail.send)? } label="Assignment delivery"@{nl="Opdrachtverzending"}
  Cancellation in Asset { plan:Plan?, through:int min=0, cutoff:date, reason:enum(plan_revised,asset_retired), author:user server=actor, at:datetime server=now, after:text?, phase:enum(plans,inspections,complete)=inspections } label="Inspection cancellation"@{nl="Inspectieannulering"}
  scenario activate_plan on=Plan.create
  scenario revise_plan on=Plan.update
  scenario retire_asset on=Asset.update
  scenario cancel_inspection_step on=CancellationStep
  scenario resume_cancellation(cancellation:Cancellation) by=maintenance_manager label="Resume inspection cancellation"@{nl="Inspectieannulering hervatten"}
  export scenario report(asset:Asset,title:text,description:text,photo:file? label=label_Repair_photo) -> Repair by=authenticated label="Report fault"@{nl="Storing melden"}
  scenario assign(repair:Repair,supplier:Supplier,reason:text) by=maintenance_manager
  scenario retry_notice(notice:Notice) by=maintenance_manager label="Retry assignment notice"@{nl="Opdrachtmelding opnieuw sturen"}
  scenario start(repair:Repair) by=technician label="Start repair"@{nl="Reparatie starten"}
  scenario block(repair:Repair,from:datetime label="Start"@{nl="Begin"},until:datetime? label="End"@{nl="Einde"}) by=maintenance_manager label="Record blocker"@{nl="Blokkade registreren"}
  scenario finish(repair:Repair,evidence:text) by=technician label="Submit repair evidence"@{nl="Reparatiebewijs indienen"}
  scenario verify(repair:Repair,evidence:text) by=maintenance_manager label="Verify repair"@{nl="Reparatie verifiëren"}
  scenario reopen(repair:Repair,reason:text) by=maintenance_manager
  export scenario inspect(inspection:Inspection,answers:text[] label=label_Inspection_answers,result:Inspection.result,evidence:text) by=technician label="Record inspection"@{nl="Inspectie registreren"}
  scenario visit_report on=ReportSubmitted
  scenario generate on=PlanDue
  scenario remind on=Reminder
  scenario retry_availability(repair:Repair) by=maintenance_manager label="Retry availability request"@{nl="Beschikbaarheidsaanvraag opnieuw proberen"}
  scenario downtime_result on=Rooms.downtime.completed
  scenario restore_result on=Rooms.restore.completed
  scenario affected_bookings(repair:Repair) by=maintenance_manager label="Refresh affected bookings"@{nl="Getroffen boekingen vernieuwen"}
  scenario affected_result on=Rooms.affected.completed
  scenario availability_changed on=Rooms.changed
  export scenario work(locations:text[]) read=true scope=authority -> WorkBatch by=technician
  export scenario work_detail(record:Inspection) read=true scope=authority -> WorkItem by=technician
  style MaintainWorkspace $"Make asset and repair rows easy to scan by severity, due date, and verified state. Keep inspections, affected bookings, contractor outcomes, and manager verification evidence distinct; emphasize return-to-service context without implying unconfirmed restoration. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, severity:Repair.severity? }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My facility reports, then Facilities for granted managers/technicians. Asset, inspection and repair details are contextual; inspections and verification queues sit within Facilities. Location/supplier selection uses canonical owners; no copied directory or additional administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My facility reports — verified own index | `breadcrumbs`, a fault-report Fieldset with title/description/photo controls, and an outcome Table with state `badge`, `pagination` and empty state | Submit a verified report and read its outcome without browsing the full location queue |
| Facilities — staff index | `breadcrumbs`, location/severity/status Select filters, and an asset List with retired text, gated manual link, `pagination` and empty states; repair Tables with state/severity/downtime-outcome `badge`s, `pagination` and empty states | Maintain permitted assets/plans/repairs and select active suppliers through canonical records; exports exclude unrelated customer contacts |
| Inspection work — staff queue | Upcoming/overdue and failed/blocked Tabs; typed plan/inspection Fieldset controls, frozen checklist answers, inspector/time, result `badge`, `pagination` and empty states, and linked repair history | Capture an attributable result through the inspection workflow; blocked/failed results retain evidence and corrective action |
| Repair verification — contextual queue/detail | Assignment history, authorized photos, completion notes, downtime synchronization text, affected-booking review links and notice Tables with `pagination` and empty states | Assign/reassign, request downtime, finish, verify/release and reopen through owning actions; technician completion cannot independently restore saleability |

On phones, show due work, checklist items and permitted next action before secondary asset history. Distinguish loading, no own reports, no due inspections and filtered-empty. Preserve unsaved report/checklist/verification evidence after validation or stale actions; optional upload failure remains visible without erasing saved text. Pending/failed/unknown downtime and assignment-notice delivery appear separately from repair state. A superseded contractor loses obsolete actions and queued disclosure; affected customers remain in relocation/cancellation review rather than disappearing. Passing an inspection cannot clear another open repair block. Retirement stops eligible future inspection work while existing inspection, repair and warranty history stays readable under policy. Return-to-service reflects confirmed owning authority, not optimistic local availability.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```


