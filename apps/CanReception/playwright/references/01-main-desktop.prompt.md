Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanReception. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /reception/access-review title="Reception access review" 
  page /companies/{Customer.id}/reception-access title="Company reception access" 
  page /reception title="Reception" 
  page /reception/credentials title="Keys and cards" 
  page /reception/mine title="My visitors" 
Selected page and hierarchy/controls:
  page /reception/access-review title="Reception access review" $ReceptionWorkspace
   require receptionist or access_staff or any(Customer as customer,has_role(actor,customer,administrator))
   breadcrumbs
   card "Current admission and credential outcomes"
    form access_review
     stat result.admission_conflicts,result.admission_pending,result.on_site_review,result.revoke_needed,result.revoke_pending,result.revoke_failed,result.revoke_unknown,result.revoke_conflicts,result.revoke_confirmed
    form recheck_access
  # Customer administrators inspect only safe owner outcomes; raw visitor and credential work retains staff grants.
Source style intent:
  style ReceptionWorkspace $"Use fast-scanning visitor queues with clear expected, arrived, departed, and overdue labels. Keep host presence, scoped admission, physical credential records, and device-confirmed outcomes distinct; prioritize current reception actions without implying access from an unconfirmed request. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message notice_visitor_invitation = "Visitor invitation"
  message label_preferences_queue_expected = "Expected"
  message label_DeviceState_source = "Source reference"
  message label_DeviceState_desired = "Desired state"
  message label_DeviceState_desired_active = "Active"
  message label_DeviceState_desired_revoked = "Revoked"
  message label_DeviceState_confirmed = "Confirmed outcome"
  message label_DeviceState_confirmed_pending = "Pending"
  message label_DeviceState_confirmed_failed = "Failed"
  message label_DeviceState_confirmed_unknown = "Unknown"
  message label_Visit_guest = "Guest"
  message label_Visit_from = "Start"
  message label_Visit_until = "End"
  message label_Visit_purpose = "Purpose"
  message label_Issue_holder = "Holder"
  Visit in Customer { policy:GuestPolicy, notice_delivery:delivery(Mail.send)?, access_review:bool=false label="Admission needs review", reminder_at:datetime?, location:Location, guest:Contact label=label_Visit_guest, host:user label="Host", from:datetime label=label_Visit_from, until:datetime label=label_Visit_until, purpose:text label=label_Visit_purpose, source:text label=label_DeviceState_source, eligibility:AccessEvidence? label="Eligibility evidence", eligibility_delivery:text? label="Eligibility request", state:enum(invited,expected,arrived,departed,cancelled,refused)=invited label={text="State",values={expected=label_preferences_queue_expected,invited="Invited",arrived="Arrived",departed="Departed",cancelled="Cancelled",refused="Refused"}}, identity_evidence:text? label="Identity-check evidence", arrived:datetime? label="Arrival time", departed:datetime? label="Departure time", reason:text? } label=notice_visitor_invitation
  derive Visit.notice_state:DeliveryResult.status? = row.notice_delivery?.status label={text="Invitation delivery",values={pending="Pending",succeeded="Delivered",failed="Failed",unknown="Unknown",skipped="Skipped"}}
  GuestPolicy in Location { host_present:bool=false label="Host must be present", visitor_days:int=90 min=1 label="Visitor retention days", credential_days:int=365 min=90 label="Credential evidence days", reminder_before:duration? label="Arrival reminder lead time" } label="Visitor policy"
  HostPresence in Customer { location:Location, account:user, from:datetime server=now, until:datetime, evidence:text, recorded_by:user server=actor, ended:datetime? } label="Recorded host presence"
  Credential { location:Location, identifier:text unique label="Identifier", device:text? label="Device", active:bool=true } label="Key or card"
  Issue in Credential { delivery:text?, reconcile_delivery:text?, observation:int=0, audit_days:int=365 min=90, device:text?, credential:text, customer:Customer, visit:Visit, holder:text label=label_Issue_holder, until:datetime label=label_Visit_until, desired:enum(active,revoked)=active label={text=label_DeviceState_desired,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked}}, confirmed:enum(pending,active,revoked,failed,unknown)=pending label={text=label_DeviceState_confirmed,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked,pending=label_DeviceState_confirmed_pending,failed=label_DeviceState_confirmed_failed,unknown=label_DeviceState_confirmed_unknown}}, source:text unique label=label_DeviceState_source, issued_by:user server=actor label="Issued by", returned:datetime? label="Returned at", lost_reason:text? label="Loss reason", evidence:text, revoke_evidence:text? label="Revocation evidence", revision:int=1 } label="Credential issue"
