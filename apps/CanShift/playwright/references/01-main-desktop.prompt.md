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
