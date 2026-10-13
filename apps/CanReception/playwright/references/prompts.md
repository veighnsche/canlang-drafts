# CanReception exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 04-reception-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanReception/playwright/references/04-reception-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanReception. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /reception/access-review title="Reception access review"@{nl="Beoordeling receptietoegang"} $ReceptionWorkspace
  page /companies/{Customer.id}/reception-access title="Company reception access"@{nl="Bedrijfsreceptietoegang"} $ReceptionWorkspace
  page /reception title="Reception"@{nl="Receptie"} $ReceptionWorkspace
  page /reception/credentials title="Keys and cards"@{nl="Sleutels en kaarten"} $ReceptionWorkspace
  page /reception/mine title="My visitors"@{nl="Mijn bezoekers"} $ReceptionWorkspace
SELECTED PAGE:
  page /reception title="Reception"@{nl="Receptie"} $ReceptionWorkspace
   require receptionist
   breadcrumbs
   card "Host presence"@{nl="Aanwezigheid gastheer"}
    form host_arrived
     fieldset "Host presence"@{nl="Aanwezigheid gastheer"}
      input until
      textarea evidence
    table HostPresence columns=location,account,from,until,ended empty="No host presence recorded."@{nl="Geen aanwezigheid vastgelegd."}
     pagination
     action host_departed
   card "Expected and on-site visits"@{nl="Verwachte en aanwezige bezoekers"}
    tabs preferences.queue
    table Visit as visit where preferences.queue==all or (preferences.queue==expected and visit.state==expected) or (preferences.queue==today and local_date(visit.from,team.timezone)==local_date(now,team.timezone)) or (preferences.queue==on_site and visit.state==arrived and visit.departed==null) or (preferences.queue==overdue and visit.state==arrived and visit.until<now) columns=location,guest,host,from,until,state,arrived,departed order=from filter=location,state search=purpose defaults={location=preferences.location} empty="No visits match this queue."@{nl="Geen bezoekers voor deze wachtrij."}
     pagination
     badge row.state
     status row.notice_state
     button opens=visit_detail
     drawer "Physical arrival and departure history"@{nl="Geschiedenis van fysieke aankomst en vertrek"} id=visit_detail
      slot content
       text row.purpose,row.identity_evidence,row.reason,row.eligibility?.eligible,row.eligibility?.until,row.eligibility?.checked_at,row.eligibility?.guest_limit,row.access_review,row.notice_state
       actions refresh,resend
       button opens=arrive_detail
       modal "Record arrival"@{nl="Aankomst registreren"} id=arrive_detail
        slot content
         form arrive arguments={visit=row} display=inline
          textarea evidence
       button opens=depart_detail
       modal "Record departure"@{nl="Vertrek registreren"} id=depart_detail
        slot content
         form depart arguments={visit=row} display=inline
          textarea evidence
       button opens=refuse_detail
       modal "Refuse arrival"@{nl="Toegang weigeren"} id=refuse_detail
        slot content
         form refuse arguments={visit=row} display=inline
          textarea reason
       button opens=cancel_detail
       modal "Cancel visit"@{nl="Bezoek annuleren"} id=cancel_detail
        slot content
         form cancel arguments={visit=row} display=inline
          textarea reason
       history

OWNING LABELS/DATA/FORMS/STYLES:
  message notice_visitor_invitation = "Visitor invitation"@{nl="Bezoekersuitnodiging"}
  message label_preferences_queue_expected = "Expected"@{nl="Verwacht"}
  message label_DeviceState_source = "Source reference"@{nl="Bronreferentie"}
  message label_DeviceState_desired = "Desired state"@{nl="Gewenste status"}
  message label_DeviceState_desired_active = "Active"@{nl="Actief"}
  message label_DeviceState_desired_revoked = "Revoked"@{nl="Ingetrokken"}
  message label_DeviceState_confirmed = "Confirmed outcome"@{nl="Bevestigd resultaat"}
  message label_DeviceState_confirmed_pending = "Pending"@{nl="In afwachting"}
  message label_DeviceState_confirmed_failed = "Failed"@{nl="Mislukt"}
  message label_DeviceState_confirmed_unknown = "Unknown"@{nl="Onbekend"}
  message label_Visit_guest = "Guest"@{nl="Gast"}
  message label_Visit_from = "Start"@{nl="Begin"}
  message label_Visit_until = "End"@{nl="Einde"}
  message label_Visit_purpose = "Purpose"@{nl="Doel"}
  message label_Issue_holder = "Holder"@{nl="Houder"}
  role receptionist label="Receptionist"@{nl="Receptionist"}
  role access_staff label="Access staff"@{nl="Toegangsmedewerker"}
  Visit in Customer { policy:GuestPolicy, notice_delivery:delivery(Mail.send)?, access_review:bool=false label="Admission needs review"@{nl="Toegang vereist beoordeling"}, reminder_at:datetime?, location:Location, guest:Contact label=label_Visit_guest, host:user label="Host"@{nl="Gastheer of gastvrouw"}, from:datetime label=label_Visit_from, until:datetime label=label_Visit_until, purpose:text label=label_Visit_purpose, source:text label=label_DeviceState_source, eligibility:AccessEvidence? label="Eligibility evidence"@{nl="Geschiktheidsbewijs"}, eligibility_delivery:text? label="Eligibility request"@{nl="Geschiktheidsaanvraag"}, state:enum(invited,expected,arrived,departed,cancelled,refused)=invited label={text="State"@{nl="Status"},values={expected=label_preferences_queue_expected,invited="Invited"@{nl="Uitgenodigd"},arrived="Arrived"@{nl="Aangekomen"},departed="Departed"@{nl="Vertrokken"},cancelled="Cancelled"@{nl="Geannuleerd"},refused="Refused"@{nl="Geweigerd"}}}, identity_evidence:text? label="Identity-check evidence"@{nl="Bewijs identiteitscontrole"}, arrived:datetime? label="Arrival time"@{nl="Aankomsttijd"}, departed:datetime? label="Departure time"@{nl="Vertrektijd"}, reason:text? } label=notice_visitor_invitation
  GuestPolicy in Location { host_present:bool=false label="Host must be present"@{nl="Gastheer moet aanwezig zijn"}, visitor_days:int=90 min=1 label="Visitor retention days"@{nl="Bewaartermijn bezoekers in dagen"}, credential_days:int=365 min=90 label="Credential evidence days"@{nl="Bewaartermijn sleutelbewijs in dagen"}, reminder_before:duration? label="Arrival reminder lead time"@{nl="Tijd vóór aankomstherinnering"} } label="Visitor policy"@{nl="Bezoekersbeleid"}
  HostPresence in Customer { location:Location, account:user, from:datetime server=now, until:datetime, evidence:text, recorded_by:user server=actor, ended:datetime? } label="Recorded host presence"@{nl="Vastgelegde aanwezigheid gastheer"}
  Credential { location:Location, identifier:text unique label="Identifier"@{nl="Identificatie"}, device:text? label="Device"@{nl="Apparaat"}, active:bool=true } label="Key or card"@{nl="Sleutel of kaart"}
  Issue in Credential { delivery:text?, reconcile_delivery:text?, observation:int=0, audit_days:int=365 min=90, device:text?, credential:text, customer:Customer, visit:Visit, holder:text label=label_Issue_holder, until:datetime label=label_Visit_until, desired:enum(active,revoked)=active label={text=label_DeviceState_desired,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked}}, confirmed:enum(pending,active,revoked,failed,unknown)=pending label={text=label_DeviceState_confirmed,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked,pending=label_DeviceState_confirmed_pending,failed=label_DeviceState_confirmed_failed,unknown=label_DeviceState_confirmed_unknown}}, source:text unique label=label_DeviceState_source, issued_by:user server=actor label="Issued by"@{nl="Uitgegeven door"}, returned:datetime? label="Returned at"@{nl="Geretourneerd op"}, lost_reason:text? label="Loss reason"@{nl="Reden van verlies"}, evidence:text, revoke_evidence:text? label="Revocation evidence"@{nl="Intrekkingsbewijs"}, revision:int=1 } label="Credential issue"@{nl="Sleuteluitgifte"}
  scenario invite(customer:Customer,guest:Contact label=label_Visit_guest,location:Location,from:datetime label=label_Visit_from,until:datetime label=label_Visit_until,purpose:text label=label_Visit_purpose,source:text label=label_DeviceState_source) by=authenticated label="Invite guest"@{nl="Gast uitnodigen"}
  scenario eligible on=Membership.eligibility.completed
  scenario membership_changed on=Membership.changed
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> ReceptionAccessReview by=authenticated or receptionist or access_staff label="Inspect reception access review"@{nl="Beoordeel receptietoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or receptionist or access_staff label="Recheck reception access"@{nl="Controleer receptietoegang opnieuw"}
  scenario customer_changed on=CompanyAccessChanged
  scenario customer_visit_step on=CustomerVisitStep
  scenario customer_credential_step on=CustomerCredentialStep
  scenario refresh(visit:Visit) by=authenticated or receptionist label="Refresh eligibility"@{nl="Geschiktheid verversen"}
  scenario refresh_due on=VisitRefresh
  scenario host_arrived(customer:Customer,account:user,location:Location,until:datetime,evidence:text) by=receptionist label="Record host presence"@{nl="Aanwezigheid gastheer registreren"}
  scenario host_departed(presence:HostPresence) by=receptionist label="Record host departure"@{nl="Vertrek gastheer registreren"}
  scenario arrive(visit:Visit,evidence:text) by=receptionist label="Record arrival"@{nl="Aankomst registreren"}
  scenario depart(visit:Visit,evidence:text) by=receptionist label="Record departure"@{nl="Vertrek registreren"}
  scenario cancel(visit:Visit,reason:text) by=authenticated or receptionist
  scenario refuse(visit:Visit,reason:text) by=receptionist label="Refuse arrival"@{nl="Toegang weigeren"}
  scenario issue(credential:Credential,visit:Visit,holder:text label=label_Issue_holder,evidence:text) by=access_staff label="Issue credential"@{nl="Toegangsmiddel uitgeven"}
  scenario return_key(issue:Issue,evidence:text) by=access_staff label="Record credential return"@{nl="Sleutelretour registreren"}
  scenario lost(issue:Issue,reason:text) by=access_staff label="Record lost credential"@{nl="Verloren sleutel registreren"}
  scenario manual_revoke(issue:Issue,evidence:text) by=access_staff label="Record manual revocation"@{nl="Handmatige intrekking registreren"}
  scenario device_result on=Devices.changed
  scenario device_applied on=Devices.apply.completed
  scenario device_reconciled on=Devices.reconcile.completed
  scenario device_observed on=DeviceObserved
  scenario reconcile_device(issue:Issue) by=access_staff label="Check device outcome"@{nl="Apparaatresultaat controleren"}
  scenario retry_device(issue:Issue) by=access_staff label="Retry device intent"@{nl="Apparaatactie opnieuw proberen"}
  scenario revoke_expired on=CredentialCheck
  scenario resend(visit:Visit) by=authenticated or receptionist label="Resend invitation"@{nl="Uitnodiging opnieuw versturen"}
  scenario remind on=VisitorReminder
  style ReceptionWorkspace $"Use fast-scanning visitor queues with clear expected, arrived, departed, and overdue labels. Keep host presence, scoped admission, physical credential records, and device-confirmed outcomes distinct; prioritize current reception actions without implying access from an unconfirmed request. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, queue:enum(all,expected,today,on_site,overdue)=all label={text="Visitor queue"@{nl="Bezoekerswachtrij"},values={all="All visitors"@{nl="Alle bezoekers"},expected=label_preferences_queue_expected,today="Today"@{nl="Vandaag"},on_site="On site"@{nl="Aanwezig"},overdue="Overdue"@{nl="Te laat"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Reception, Keys and cards, My visitors, filtered by receptionist/access-staff/verified-host access. Invitation details are contextual verified guest destinations, not unbound global links; a reception device still requires its operator's authenticated session.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Reception /reception | Queue Tabs plus breadcrumbs; Visit Table with state Badge and notice Status, pagination and Drawer arrival/departure detail with arrive/depart/refuse/cancel Modals; host-presence Table with pagination. | Authorized host lookup; arrive, depart, refuse and cancel require current location/eligibility and recorded evidence or reason. |
| Keys and cards /reception/credentials | Policy/credential forms with typed Fieldsets; Credential List with pagination; nested issue Table with desired/confirmed Badges, pagination and Drawer issue detail with return/lost/revoke Modals. | Credential CRUD and issue, return_key, lost, manual_revoke use access-staff grants and one-active-holder rules. |
| My visitors /reception/mine | Invite form with purpose/source controls; own visit List with state Badges, pagination and gated delivery Alert. | Verified hosts invite/cancel only permitted guests; resend preserves existing invitation identity and is a staged owning-operation requirement. |
| Verified guest invitation | Contextual Card of that guest's instructions, current eligibility and visit window, without other guests or reusable door secrets. | Verified record access rechecks underlying authority; guest reading never admits anyone or provisions hardware. |
| Reception access review — staff and company destinations | Read-form Stat counts with breadcrumbs on both routes. | Customer administrators inspect only safe owner outcomes; staff reruns review through the owning read operation. |

On narrow screens, preserve guest, interval and desired/device-confirmed status in stacked Cards; drawers return focus to the triggering row. Loading and unavailable eligibility block admission; empty queues differ from stale data. Preserve entered identity evidence during validation/conflict resolution. Recorded on-site counts carry freshness and evidence limits. Expiry/cancellation shows pending revocation until device confirmation; departure cannot clear room/event occupancy.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario host_arrived(customer:Customer,account:user,location:Location,until:datetime,evidence:text) by=receptionist label="Record host presence"@{nl="Aanwezigheid gastheer registreren"}
  scenario arrive(visit:Visit,evidence:text) by=receptionist label="Record arrival"@{nl="Aankomst registreren"}
  scenario depart(visit:Visit,evidence:text) by=receptionist label="Record departure"@{nl="Vertrek registreren"}
  scenario cancel(visit:Visit,reason:text) by=authenticated or receptionist
  scenario refuse(visit:Visit,reason:text) by=receptionist label="Refuse arrival"@{nl="Toegang weigeren"}
```

## 05-reception-credentials-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanReception/playwright/references/05-reception-credentials-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Add ONLY required Location selector(Current location) to Credential catalog creation form before Identifier. Canonical Credential owns location:Location; Identifier/Device cannot be its only intake controls. Preserve all other fields/actions. Keep existing desktop LEFT sidebar and bottom-left account/sign-in. One full-page UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanReception. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /reception/access-review title="Reception access review"@{nl="Beoordeling receptietoegang"} $ReceptionWorkspace
  page /companies/{Customer.id}/reception-access title="Company reception access"@{nl="Bedrijfsreceptietoegang"} $ReceptionWorkspace
  page /reception title="Reception"@{nl="Receptie"} $ReceptionWorkspace
  page /reception/credentials title="Keys and cards"@{nl="Sleutels en kaarten"} $ReceptionWorkspace
  page /reception/mine title="My visitors"@{nl="Mijn bezoekers"} $ReceptionWorkspace
SELECTED PAGE:
  page /reception/credentials title="Keys and cards"@{nl="Sleutels en kaarten"} $ReceptionWorkspace
   require access_staff
   breadcrumbs
   card "Visitor rules"@{nl="Bezoekersregels"}
    form GuestPolicy.create
     fieldset "Visitor rules"@{nl="Bezoekersregels"}
      checkbox host_present
      input visitor_days
      input credential_days
    list GuestPolicy empty="No visitor rules recorded."@{nl="Geen bezoekersregels vastgelegd."}
     pagination
     edit
   card "Credential catalog"@{nl="Toegangsmiddelenregister"}
    form Credential.create
     fieldset "Credential catalog"@{nl="Toegangsmiddelenregister"}
      input identifier
      input device
   card "Issue and device outcomes"@{nl="Uitgifte- en apparaatresultaten"}
    list Credential filter=location,active defaults={location=preferences.location} display=split empty="No credentials recorded."@{nl="Geen toegangsmiddelen vastgelegd."}
     pagination
     edit
     form issue
      select visit
      input holder
      textarea evidence
     table row.Issue columns=holder,until,desired,confirmed,returned,lost_reason empty="No credential issues recorded."@{nl="Geen sleuteluitgiften vastgelegd."}
      pagination
      badge row.desired
      badge row.confirmed
      button opens=issue_detail
      drawer "Credential issue detail"@{nl="Details sleuteluitgifte"} id=issue_detail
       slot content
        text row.visit,row.evidence,row.revoke_evidence,row.issued_by
        actions reconcile_device,retry_device
        button opens=return_detail
        modal "Record credential return"@{nl="Sleutelretour registreren"} id=return_detail
         slot content
          form return_key arguments={issue=row} display=inline
           textarea evidence
        button opens=lost_detail
        modal "Record lost credential"@{nl="Verloren sleutel registreren"} id=lost_detail
         slot content
          form lost arguments={issue=row} display=inline
           textarea reason
        button opens=revoke_detail
        modal "Record manual revocation"@{nl="Handmatige intrekking registreren"} id=revoke_detail
         slot content
          form manual_revoke arguments={issue=row} display=inline
           textarea evidence
        history

OWNING LABELS/DATA/FORMS/STYLES:
  message notice_visitor_invitation = "Visitor invitation"@{nl="Bezoekersuitnodiging"}
  message label_preferences_queue_expected = "Expected"@{nl="Verwacht"}
  message label_DeviceState_source = "Source reference"@{nl="Bronreferentie"}
  message label_DeviceState_desired = "Desired state"@{nl="Gewenste status"}
  message label_DeviceState_desired_active = "Active"@{nl="Actief"}
  message label_DeviceState_desired_revoked = "Revoked"@{nl="Ingetrokken"}
  message label_DeviceState_confirmed = "Confirmed outcome"@{nl="Bevestigd resultaat"}
  message label_DeviceState_confirmed_pending = "Pending"@{nl="In afwachting"}
  message label_DeviceState_confirmed_failed = "Failed"@{nl="Mislukt"}
  message label_DeviceState_confirmed_unknown = "Unknown"@{nl="Onbekend"}
  message label_Visit_guest = "Guest"@{nl="Gast"}
  message label_Visit_from = "Start"@{nl="Begin"}
  message label_Visit_until = "End"@{nl="Einde"}
  message label_Visit_purpose = "Purpose"@{nl="Doel"}
  message label_Issue_holder = "Holder"@{nl="Houder"}
  role receptionist label="Receptionist"@{nl="Receptionist"}
  role access_staff label="Access staff"@{nl="Toegangsmedewerker"}
  Visit in Customer { policy:GuestPolicy, notice_delivery:delivery(Mail.send)?, access_review:bool=false label="Admission needs review"@{nl="Toegang vereist beoordeling"}, reminder_at:datetime?, location:Location, guest:Contact label=label_Visit_guest, host:user label="Host"@{nl="Gastheer of gastvrouw"}, from:datetime label=label_Visit_from, until:datetime label=label_Visit_until, purpose:text label=label_Visit_purpose, source:text label=label_DeviceState_source, eligibility:AccessEvidence? label="Eligibility evidence"@{nl="Geschiktheidsbewijs"}, eligibility_delivery:text? label="Eligibility request"@{nl="Geschiktheidsaanvraag"}, state:enum(invited,expected,arrived,departed,cancelled,refused)=invited label={text="State"@{nl="Status"},values={expected=label_preferences_queue_expected,invited="Invited"@{nl="Uitgenodigd"},arrived="Arrived"@{nl="Aangekomen"},departed="Departed"@{nl="Vertrokken"},cancelled="Cancelled"@{nl="Geannuleerd"},refused="Refused"@{nl="Geweigerd"}}}, identity_evidence:text? label="Identity-check evidence"@{nl="Bewijs identiteitscontrole"}, arrived:datetime? label="Arrival time"@{nl="Aankomsttijd"}, departed:datetime? label="Departure time"@{nl="Vertrektijd"}, reason:text? } label=notice_visitor_invitation
  GuestPolicy in Location { host_present:bool=false label="Host must be present"@{nl="Gastheer moet aanwezig zijn"}, visitor_days:int=90 min=1 label="Visitor retention days"@{nl="Bewaartermijn bezoekers in dagen"}, credential_days:int=365 min=90 label="Credential evidence days"@{nl="Bewaartermijn sleutelbewijs in dagen"}, reminder_before:duration? label="Arrival reminder lead time"@{nl="Tijd vóór aankomstherinnering"} } label="Visitor policy"@{nl="Bezoekersbeleid"}
  HostPresence in Customer { location:Location, account:user, from:datetime server=now, until:datetime, evidence:text, recorded_by:user server=actor, ended:datetime? } label="Recorded host presence"@{nl="Vastgelegde aanwezigheid gastheer"}
  Credential { location:Location, identifier:text unique label="Identifier"@{nl="Identificatie"}, device:text? label="Device"@{nl="Apparaat"}, active:bool=true } label="Key or card"@{nl="Sleutel of kaart"}
  Issue in Credential { delivery:text?, reconcile_delivery:text?, observation:int=0, audit_days:int=365 min=90, device:text?, credential:text, customer:Customer, visit:Visit, holder:text label=label_Issue_holder, until:datetime label=label_Visit_until, desired:enum(active,revoked)=active label={text=label_DeviceState_desired,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked}}, confirmed:enum(pending,active,revoked,failed,unknown)=pending label={text=label_DeviceState_confirmed,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked,pending=label_DeviceState_confirmed_pending,failed=label_DeviceState_confirmed_failed,unknown=label_DeviceState_confirmed_unknown}}, source:text unique label=label_DeviceState_source, issued_by:user server=actor label="Issued by"@{nl="Uitgegeven door"}, returned:datetime? label="Returned at"@{nl="Geretourneerd op"}, lost_reason:text? label="Loss reason"@{nl="Reden van verlies"}, evidence:text, revoke_evidence:text? label="Revocation evidence"@{nl="Intrekkingsbewijs"}, revision:int=1 } label="Credential issue"@{nl="Sleuteluitgifte"}
  scenario invite(customer:Customer,guest:Contact label=label_Visit_guest,location:Location,from:datetime label=label_Visit_from,until:datetime label=label_Visit_until,purpose:text label=label_Visit_purpose,source:text label=label_DeviceState_source) by=authenticated label="Invite guest"@{nl="Gast uitnodigen"}
  scenario eligible on=Membership.eligibility.completed
  scenario membership_changed on=Membership.changed
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> ReceptionAccessReview by=authenticated or receptionist or access_staff label="Inspect reception access review"@{nl="Beoordeel receptietoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or receptionist or access_staff label="Recheck reception access"@{nl="Controleer receptietoegang opnieuw"}
  scenario customer_changed on=CompanyAccessChanged
  scenario customer_visit_step on=CustomerVisitStep
  scenario customer_credential_step on=CustomerCredentialStep
  scenario refresh(visit:Visit) by=authenticated or receptionist label="Refresh eligibility"@{nl="Geschiktheid verversen"}
  scenario refresh_due on=VisitRefresh
  scenario host_arrived(customer:Customer,account:user,location:Location,until:datetime,evidence:text) by=receptionist label="Record host presence"@{nl="Aanwezigheid gastheer registreren"}
  scenario host_departed(presence:HostPresence) by=receptionist label="Record host departure"@{nl="Vertrek gastheer registreren"}
  scenario arrive(visit:Visit,evidence:text) by=receptionist label="Record arrival"@{nl="Aankomst registreren"}
  scenario depart(visit:Visit,evidence:text) by=receptionist label="Record departure"@{nl="Vertrek registreren"}
  scenario cancel(visit:Visit,reason:text) by=authenticated or receptionist
  scenario refuse(visit:Visit,reason:text) by=receptionist label="Refuse arrival"@{nl="Toegang weigeren"}
  scenario issue(credential:Credential,visit:Visit,holder:text label=label_Issue_holder,evidence:text) by=access_staff label="Issue credential"@{nl="Toegangsmiddel uitgeven"}
  scenario return_key(issue:Issue,evidence:text) by=access_staff label="Record credential return"@{nl="Sleutelretour registreren"}
  scenario lost(issue:Issue,reason:text) by=access_staff label="Record lost credential"@{nl="Verloren sleutel registreren"}
  scenario manual_revoke(issue:Issue,evidence:text) by=access_staff label="Record manual revocation"@{nl="Handmatige intrekking registreren"}
  scenario device_result on=Devices.changed
  scenario device_applied on=Devices.apply.completed
  scenario device_reconciled on=Devices.reconcile.completed
  scenario device_observed on=DeviceObserved
  scenario reconcile_device(issue:Issue) by=access_staff label="Check device outcome"@{nl="Apparaatresultaat controleren"}
  scenario retry_device(issue:Issue) by=access_staff label="Retry device intent"@{nl="Apparaatactie opnieuw proberen"}
  scenario revoke_expired on=CredentialCheck
  scenario resend(visit:Visit) by=authenticated or receptionist label="Resend invitation"@{nl="Uitnodiging opnieuw versturen"}
  scenario remind on=VisitorReminder
  style ReceptionWorkspace $"Use fast-scanning visitor queues with clear expected, arrived, departed, and overdue labels. Keep host presence, scoped admission, physical credential records, and device-confirmed outcomes distinct; prioritize current reception actions without implying access from an unconfirmed request. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, queue:enum(all,expected,today,on_site,overdue)=all label={text="Visitor queue"@{nl="Bezoekerswachtrij"},values={all="All visitors"@{nl="Alle bezoekers"},expected=label_preferences_queue_expected,today="Today"@{nl="Vandaag"},on_site="On site"@{nl="Aanwezig"},overdue="Overdue"@{nl="Te laat"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Reception, Keys and cards, My visitors, filtered by receptionist/access-staff/verified-host access. Invitation details are contextual verified guest destinations, not unbound global links; a reception device still requires its operator's authenticated session.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Reception /reception | Queue Tabs plus breadcrumbs; Visit Table with state Badge and notice Status, pagination and Drawer arrival/departure detail with arrive/depart/refuse/cancel Modals; host-presence Table with pagination. | Authorized host lookup; arrive, depart, refuse and cancel require current location/eligibility and recorded evidence or reason. |
| Keys and cards /reception/credentials | Policy/credential forms with typed Fieldsets; Credential List with pagination; nested issue Table with desired/confirmed Badges, pagination and Drawer issue detail with return/lost/revoke Modals. | Credential CRUD and issue, return_key, lost, manual_revoke use access-staff grants and one-active-holder rules. |
| My visitors /reception/mine | Invite form with purpose/source controls; own visit List with state Badges, pagination and gated delivery Alert. | Verified hosts invite/cancel only permitted guests; resend preserves existing invitation identity and is a staged owning-operation requirement. |
| Verified guest invitation | Contextual Card of that guest's instructions, current eligibility and visit window, without other guests or reusable door secrets. | Verified record access rechecks underlying authority; guest reading never admits anyone or provisions hardware. |
| Reception access review — staff and company destinations | Read-form Stat counts with breadcrumbs on both routes. | Customer administrators inspect only safe owner outcomes; staff reruns review through the owning read operation. |

On narrow screens, preserve guest, interval and desired/device-confirmed status in stacked Cards; drawers return focus to the triggering row. Loading and unavailable eligibility block admission; empty queues differ from stale data. Preserve entered identity evidence during validation/conflict resolution. Recorded on-site counts carry freshness and evidence limits. Expiry/cancellation shows pending revocation until device confirmation; departure cannot clear room/event occupancy.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario issue(credential:Credential,visit:Visit,holder:text label=label_Issue_holder,evidence:text) by=access_staff label="Issue credential"@{nl="Toegangsmiddel uitgeven"}
  scenario return_key(issue:Issue,evidence:text) by=access_staff label="Record credential return"@{nl="Sleutelretour registreren"}
  scenario lost(issue:Issue,reason:text) by=access_staff label="Record lost credential"@{nl="Verloren sleutel registreren"}
  scenario manual_revoke(issue:Issue,evidence:text) by=access_staff label="Record manual revocation"@{nl="Handmatige intrekking registreren"}
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 06-reception-mine-desktop.png

### Active final generation request

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanReception. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP LEFT. User menu anchored BOTTOM LEFT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /reception/access-review title="Reception access review"@{nl="Beoordeling receptietoegang"} $ReceptionWorkspace
  page /companies/{Customer.id}/reception-access title="Company reception access"@{nl="Bedrijfsreceptietoegang"} $ReceptionWorkspace
  page /reception title="Reception"@{nl="Receptie"} $ReceptionWorkspace
  page /reception/credentials title="Keys and cards"@{nl="Sleutels en kaarten"} $ReceptionWorkspace
  page /reception/mine title="My visitors"@{nl="Mijn bezoekers"} $ReceptionWorkspace
SELECTED PAGE:
  page /reception/mine title="My visitors"@{nl="Mijn bezoekers"} $ReceptionWorkspace
   require authenticated
   breadcrumbs
   card "Own visitor invitations"@{nl="Eigen bezoekersuitnodigingen"}
    form invite
     textarea purpose
     input source
   card "Window and state"@{nl="Tijdvenster en status"}
    list Visit empty="No invitations yet."@{nl="Nog geen uitnodigingen."}
     pagination
     badge row.state
     text row.location,row.guest,row.host,row.purpose,row.from,row.until,row.state
     actions refresh,resend
     button opens=cancel_detail
     modal "Cancel visit"@{nl="Bezoek annuleren"} id=cancel_detail
      slot content
       form cancel arguments={visit=row} display=inline
        textarea reason
     text row.notice_state,row.access_review
     collapse "Invitation delivery"@{nl="Uitnodigingsbezorging"}
      require row.notice_state==failed
      alert row.notice_state
OWNING LABELS/DATA/FORMS/STYLES:
  message notice_visitor_invitation = "Visitor invitation"@{nl="Bezoekersuitnodiging"}
  message label_preferences_queue_expected = "Expected"@{nl="Verwacht"}
  message label_DeviceState_source = "Source reference"@{nl="Bronreferentie"}
  message label_DeviceState_desired = "Desired state"@{nl="Gewenste status"}
  message label_DeviceState_desired_active = "Active"@{nl="Actief"}
  message label_DeviceState_desired_revoked = "Revoked"@{nl="Ingetrokken"}
  message label_DeviceState_confirmed = "Confirmed outcome"@{nl="Bevestigd resultaat"}
  message label_DeviceState_confirmed_pending = "Pending"@{nl="In afwachting"}
  message label_DeviceState_confirmed_failed = "Failed"@{nl="Mislukt"}
  message label_DeviceState_confirmed_unknown = "Unknown"@{nl="Onbekend"}
  message label_Visit_guest = "Guest"@{nl="Gast"}
  message label_Visit_from = "Start"@{nl="Begin"}
  message label_Visit_until = "End"@{nl="Einde"}
  message label_Visit_purpose = "Purpose"@{nl="Doel"}
  message label_Issue_holder = "Holder"@{nl="Houder"}
  role receptionist label="Receptionist"@{nl="Receptionist"}
  role access_staff label="Access staff"@{nl="Toegangsmedewerker"}
  Visit in Customer { policy:GuestPolicy, notice_delivery:delivery(Mail.send)?, access_review:bool=false label="Admission needs review"@{nl="Toegang vereist beoordeling"}, reminder_at:datetime?, location:Location, guest:Contact label=label_Visit_guest, host:user label="Host"@{nl="Gastheer of gastvrouw"}, from:datetime label=label_Visit_from, until:datetime label=label_Visit_until, purpose:text label=label_Visit_purpose, source:text label=label_DeviceState_source, eligibility:AccessEvidence? label="Eligibility evidence"@{nl="Geschiktheidsbewijs"}, eligibility_delivery:text? label="Eligibility request"@{nl="Geschiktheidsaanvraag"}, state:enum(invited,expected,arrived,departed,cancelled,refused)=invited label={text="State"@{nl="Status"},values={expected=label_preferences_queue_expected,invited="Invited"@{nl="Uitgenodigd"},arrived="Arrived"@{nl="Aangekomen"},departed="Departed"@{nl="Vertrokken"},cancelled="Cancelled"@{nl="Geannuleerd"},refused="Refused"@{nl="Geweigerd"}}}, identity_evidence:text? label="Identity-check evidence"@{nl="Bewijs identiteitscontrole"}, arrived:datetime? label="Arrival time"@{nl="Aankomsttijd"}, departed:datetime? label="Departure time"@{nl="Vertrektijd"}, reason:text? } label=notice_visitor_invitation
  GuestPolicy in Location { host_present:bool=false label="Host must be present"@{nl="Gastheer moet aanwezig zijn"}, visitor_days:int=90 min=1 label="Visitor retention days"@{nl="Bewaartermijn bezoekers in dagen"}, credential_days:int=365 min=90 label="Credential evidence days"@{nl="Bewaartermijn sleutelbewijs in dagen"}, reminder_before:duration? label="Arrival reminder lead time"@{nl="Tijd vóór aankomstherinnering"} } label="Visitor policy"@{nl="Bezoekersbeleid"}
  HostPresence in Customer { location:Location, account:user, from:datetime server=now, until:datetime, evidence:text, recorded_by:user server=actor, ended:datetime? } label="Recorded host presence"@{nl="Vastgelegde aanwezigheid gastheer"}
  Credential { location:Location, identifier:text unique label="Identifier"@{nl="Identificatie"}, device:text? label="Device"@{nl="Apparaat"}, active:bool=true } label="Key or card"@{nl="Sleutel of kaart"}
  Issue in Credential { delivery:text?, reconcile_delivery:text?, observation:int=0, audit_days:int=365 min=90, device:text?, credential:text, customer:Customer, visit:Visit, holder:text label=label_Issue_holder, until:datetime label=label_Visit_until, desired:enum(active,revoked)=active label={text=label_DeviceState_desired,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked}}, confirmed:enum(pending,active,revoked,failed,unknown)=pending label={text=label_DeviceState_confirmed,values={active=label_DeviceState_desired_active,revoked=label_DeviceState_desired_revoked,pending=label_DeviceState_confirmed_pending,failed=label_DeviceState_confirmed_failed,unknown=label_DeviceState_confirmed_unknown}}, source:text unique label=label_DeviceState_source, issued_by:user server=actor label="Issued by"@{nl="Uitgegeven door"}, returned:datetime? label="Returned at"@{nl="Geretourneerd op"}, lost_reason:text? label="Loss reason"@{nl="Reden van verlies"}, evidence:text, revoke_evidence:text? label="Revocation evidence"@{nl="Intrekkingsbewijs"}, revision:int=1 } label="Credential issue"@{nl="Sleuteluitgifte"}
  scenario invite(customer:Customer,guest:Contact label=label_Visit_guest,location:Location,from:datetime label=label_Visit_from,until:datetime label=label_Visit_until,purpose:text label=label_Visit_purpose,source:text label=label_DeviceState_source) by=authenticated label="Invite guest"@{nl="Gast uitnodigen"}
  scenario eligible on=Membership.eligibility.completed
  scenario membership_changed on=Membership.changed
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> ReceptionAccessReview by=authenticated or receptionist or access_staff label="Inspect reception access review"@{nl="Beoordeel receptietoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or receptionist or access_staff label="Recheck reception access"@{nl="Controleer receptietoegang opnieuw"}
  scenario customer_changed on=CompanyAccessChanged
  scenario customer_visit_step on=CustomerVisitStep
  scenario customer_credential_step on=CustomerCredentialStep
  scenario refresh(visit:Visit) by=authenticated or receptionist label="Refresh eligibility"@{nl="Geschiktheid verversen"}
  scenario refresh_due on=VisitRefresh
  scenario host_arrived(customer:Customer,account:user,location:Location,until:datetime,evidence:text) by=receptionist label="Record host presence"@{nl="Aanwezigheid gastheer registreren"}
  scenario host_departed(presence:HostPresence) by=receptionist label="Record host departure"@{nl="Vertrek gastheer registreren"}
  scenario arrive(visit:Visit,evidence:text) by=receptionist label="Record arrival"@{nl="Aankomst registreren"}
  scenario depart(visit:Visit,evidence:text) by=receptionist label="Record departure"@{nl="Vertrek registreren"}
  scenario cancel(visit:Visit,reason:text) by=authenticated or receptionist
  scenario refuse(visit:Visit,reason:text) by=receptionist label="Refuse arrival"@{nl="Toegang weigeren"}
  scenario issue(credential:Credential,visit:Visit,holder:text label=label_Issue_holder,evidence:text) by=access_staff label="Issue credential"@{nl="Toegangsmiddel uitgeven"}
  scenario return_key(issue:Issue,evidence:text) by=access_staff label="Record credential return"@{nl="Sleutelretour registreren"}
  scenario lost(issue:Issue,reason:text) by=access_staff label="Record lost credential"@{nl="Verloren sleutel registreren"}
  scenario manual_revoke(issue:Issue,evidence:text) by=access_staff label="Record manual revocation"@{nl="Handmatige intrekking registreren"}
  scenario device_result on=Devices.changed
  scenario device_applied on=Devices.apply.completed
  scenario device_reconciled on=Devices.reconcile.completed
  scenario device_observed on=DeviceObserved
  scenario reconcile_device(issue:Issue) by=access_staff label="Check device outcome"@{nl="Apparaatresultaat controleren"}
  scenario retry_device(issue:Issue) by=access_staff label="Retry device intent"@{nl="Apparaatactie opnieuw proberen"}
  scenario revoke_expired on=CredentialCheck
  scenario resend(visit:Visit) by=authenticated or receptionist label="Resend invitation"@{nl="Uitnodiging opnieuw versturen"}
  scenario remind on=VisitorReminder
  style ReceptionWorkspace $"Use fast-scanning visitor queues with clear expected, arrived, departed, and overdue labels. Keep host presence, scoped admission, physical credential records, and device-confirmed outcomes distinct; prioritize current reception actions without implying access from an unconfirmed request. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, queue:enum(all,expected,today,on_site,overdue)=all label={text="Visitor queue"@{nl="Bezoekerswachtrij"},values={all="All visitors"@{nl="Alle bezoekers"},expected=label_preferences_queue_expected,today="Today"@{nl="Vandaag"},on_site="On site"@{nl="Aanwezig"},overdue="Overdue"@{nl="Te laat"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Reception, Keys and cards, My visitors, filtered by receptionist/access-staff/verified-host access. Invitation details are contextual verified guest destinations, not unbound global links; a reception device still requires its operator's authenticated session.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Reception /reception | Queue Tabs plus breadcrumbs; Visit Table with state Badge and notice Status, pagination and Drawer arrival/departure detail with arrive/depart/refuse/cancel Modals; host-presence Table with pagination. | Authorized host lookup; arrive, depart, refuse and cancel require current location/eligibility and recorded evidence or reason. |
| Keys and cards /reception/credentials | Policy/credential forms with typed Fieldsets; Credential List with pagination; nested issue Table with desired/confirmed Badges, pagination and Drawer issue detail with return/lost/revoke Modals. | Credential CRUD and issue, return_key, lost, manual_revoke use access-staff grants and one-active-holder rules. |
| My visitors /reception/mine | Invite form with purpose/source controls; own visit List with state Badges, pagination and gated delivery Alert. | Verified hosts invite/cancel only permitted guests; resend preserves existing invitation identity and is a staged owning-operation requirement. |
| Verified guest invitation | Contextual Card of that guest's instructions, current eligibility and visit window, without other guests or reusable door secrets. | Verified record access rechecks underlying authority; guest reading never admits anyone or provisions hardware. |
| Reception access review — staff and company destinations | Read-form Stat counts with breadcrumbs on both routes. | Customer administrators inspect only safe owner outcomes; staff reruns review through the owning read operation. |

On narrow screens, preserve guest, interval and desired/device-confirmed status in stacked Cards; drawers return focus to the triggering row. Loading and unavailable eligibility block admission; empty queues differ from stale data. Preserve entered identity evidence during validation/conflict resolution. Recorded on-site counts carry freshness and evidence limits. Expiry/cancellation shows pending revocation until device confirmation; departure cannot clear room/event occupancy.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario invite(customer:Customer,guest:Contact label=label_Visit_guest,location:Location,from:datetime label=label_Visit_from,until:datetime label=label_Visit_until,purpose:text label=label_Visit_purpose,source:text label=label_DeviceState_source) by=authenticated label="Invite guest"@{nl="Gast uitnodigen"}
  scenario cancel(visit:Visit,reason:text) by=authenticated or receptionist
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```


