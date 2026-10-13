# CanMail exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-mailroom-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMail/playwright/references/02-mailroom-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. In Mail receipt intake add required Location selector(Current location) and optional Service selector(Current recipient service) beside existing Kind/Source/Storage/Photo; these are unbound canonical receive parameters. Hide Match action on first Received row because match applies only Unmatched. Keep other actions/content unchanged. Preserve full-page desktop LEFT sidebar, top-left wordmark and bottom-left account. No other new field/action or visual change. One actual full-page image, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMail. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /mailroom title="Mail and parcels"@{nl="Post en pakketten"} order=2 $MailroomWorkspace
  page /mailroom/mine title="My mail"@{nl="Mijn post"} order=1 $MailroomWorkspace
SELECTED PAGE:
  page /mailroom title="Mail and parcels"@{nl="Post en pakketten"} order=2 $MailroomWorkspace
   require mail_staff
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   card "Service entitlement"@{nl="Dienstrecht"}
    form configure
     fieldset "Handling instructions"@{nl="Afhandelingsinstructies"}
      textarea instructions
      textarea forwarding
    list Service display=split empty="No mail services"@{nl="Geen postdiensten"}
     pagination
     text row.location,row.recipient,row.from,row.until,row.active,row.source,row.term,row.paid_evidence
     action service_status
   card "Mail receipt"@{nl="Post ontvangen"}
    form receive
     fieldset "Receipt"@{nl="Ontvangst"}
      radio kind
      input source
      input storage
      file_input photo
   card "Located items"@{nl="Gelokaliseerde post"}
    tabs preferences.view
    table Item as item where preferences.view==all or (preferences.view==collection and item.state in [received,notified,collection_ready]) or (preferences.view==forwarding and item.state in [forward_pending,forwarded]) or (preferences.view==history and item.state in [collected,forwarded,returned]) columns=location,recipient,kind,storage,state,notice_state,incident filter=location,state defaults={location=preferences.location} display=split empty="No mail items match these filters"@{nl="Geen poststukken voor deze filters"}
     pagination
     badge row.state
     status row.notice_state
     collapse label_Item_incident
      require row.incident!=null
      alert row.incident
     text row.service,row.photo,row.completed
     actions match,forward,return_item,incident
     button opens=collect_detail
     modal "Record collection"@{nl="Afhaling registreren"} id=collect_detail
      slot content
       form collect arguments={item=row} display=inline
        textarea evidence
     list row.Dispatch display=split empty="No forwarding attempts"@{nl="Geen doorzendpogingen"}
      pagination
      badge row.state
      badge row.charge_state
      text row.destination,row.instruction_revision,row.state,row.fee,row.charge_state,row.invoice
      dropdown
       slot trigger
        text "Forwarding follow-up"@{nl="Doorzendopvolging"}
       slot content
        form dispatched arguments={dispatch=row,revision=row.revision}
        form uncertain arguments={dispatch=row,revision=row.revision}
        action retry_fee
     table row.Handling columns=kind,instruction,revision,destination,evidence,carrier,fee empty="No handling records"@{nl="Geen afhandelingsregistraties"}
      pagination
     history
OWNING LABELS/DATA/FORMS/STYLES:
  message label_Service_recipient = "Recipient"@{nl="Ontvanger"}
  message label_Service_source = "Source reference"@{nl="Bronreferentie"}
  message label_Delegate_account = "Account"@{nl="Account"}
  message label_Item_kind = "Kind"@{nl="Soort"}
  message label_Item_storage = "Storage location"@{nl="Opslaglocatie"}
  message label_Item_photo = "Photo"@{nl="Foto"}
  message label_Item_incident = "Handling incident"@{nl="Afhandelingsincident"}
  message label_Handling_carrier = "Carrier"@{nl="Vervoerder"}
  message label_Handling_fee = "Fee"@{nl="Kosten"}
  role mail_staff label="Mailroom staff"@{nl="Postmedewerker"}
  Service in Customer { location:Location, recipient:Contact label=label_Service_recipient, from:datetime label="Start"@{nl="Begin"}, until:datetime label="End"@{nl="Einde"}, instructions:text, forwarding:text? label="Forwarding instructions"@{nl="Doorzendinstructies"}, revision:int=1, verified:bool=false label="Verified"@{nl="Geverifieerd"}, source:text unique label=label_Service_source, term:Term? label="Purchased paid term"@{nl="Gekochte betaalde termijn"}, paid_evidence:text? label="Paid-service evidence"@{nl="Bewijs betaalde dienst"}, currency:currency, billing:bool=false label="Invoice handling fees"@{nl="Afhandelingskosten factureren"}, active:bool=true } label="Mail service"@{nl="Postdienst"}
  Delegate in Service { contact:Contact label="Nominated contact"@{nl="Genomineerde contactpersoon"}, account:user label=label_Delegate_account, active:bool=true } label="Collection delegate"@{nl="Afhaalgemachtigde"}
  Item { location:Location, service:Service?, recipient:Contact? label=label_Service_recipient, source:text unique label=label_Service_source, kind:enum(letter,parcel) label={text=label_Item_kind,values={letter="Letter"@{nl="Brief"},parcel="Parcel"@{nl="Pakket"}}}, storage:text label=label_Item_storage, photo:file? label=label_Item_photo, state:enum(unmatched,received,notified,collection_ready,collected,forward_pending,forwarded,returned)=unmatched label={text="State"@{nl="Status"},values={unmatched="Unmatched"@{nl="Niet gekoppeld"},received="Received"@{nl="Ontvangen"},notified="Notified"@{nl="Gemeld"},collection_ready="Ready for collection"@{nl="Klaar om af te halen"},collected="Collected"@{nl="Afgehaald"},forward_pending="Forwarding pending"@{nl="Doorzending in afwachting"},forwarded="Forwarded"@{nl="Doorgestuurd"},returned="Returned"@{nl="Geretourneerd"}}}, notification:delivery(Mail.send)? label="Notification reference"@{nl="Meldingsreferentie"}, notice:Notice?, reminders:int=0, reminder_delay:duration=7d, reminder_limit:int=2 min=0 max=5, history_days:int=180 min=1, retention_until:datetime?, dispatch:Dispatch?, completed:datetime? label="Completed at"@{nl="Afgerond op"}, incident:text? label=label_Item_incident } label="Mail item"@{nl="Poststuk"}
  Handling in Item { kind:enum(collection,forward,return,correction) label={text=label_Item_kind,values={collection="Collection"@{nl="Afhalen"},forward="Forwarding"@{nl="Doorzending"},return="Return"@{nl="Retour"},correction="Correction"@{nl="Correctie"}}}, account:user? label=label_Delegate_account, instruction:text label="Recorded instruction"@{nl="Vastgelegde instructie"}, destination:text? label="Destination"@{nl="Bestemming"}, evidence:text, carrier:text? label=label_Handling_carrier, fee:money? label=label_Handling_fee, source:text unique label=label_Service_source, revision:int, dispatch:Dispatch?, author:user server=actor label="Author"@{nl="Auteur"} } label="Handling record"@{nl="Afhandelingsregistratie"}
  Dispatch in Item { source:text unique, instruction:text, instruction_revision:int label="Instruction version"@{nl="Instructieversie"}, destination:text label="Frozen postal destination"@{nl="Vastgelegde postbestemming"}, fee:money? label=label_Handling_fee, charge:Charge?, state:enum(pending,unknown,dispatched,cancelled)=pending label={text="Dispatch"@{nl="Verzending"},values={pending="Pending"@{nl="In afwachting"},unknown="Uncertain"@{nl="Onzeker"},dispatched="Evidenced dispatch"@{nl="Verzending met bewijs"},cancelled="No dispatch recorded"@{nl="Geen verzending vastgelegd"}}}, charge_state:enum(none,pending,confirmed,failed,unknown)=none label={text="Fee invoice"@{nl="Kostenfactuur"},values={none="No invoice requested"@{nl="Geen factuur aangevraagd"},pending="Invoice requested"@{nl="Factuur aangevraagd"},confirmed="Invoice created"@{nl="Factuur aangemaakt"},failed="Invoice failed"@{nl="Factuur mislukt"},unknown="Invoice uncertain"@{nl="Factuur onzeker"}}}, charge_delivery:text?, reconcile_delivery:text?, invoice:text?, revision:int=1 } label="Forwarding attempt"@{nl="Doorzendpoging"}
  Notice in Item { account:user label="Frozen account", address:text label="Frozen address", subject:text, body:text, receipt:delivery(Mail.send)? label="Notice receipt", kind:enum(initial,reminder,additional), number:int, predecessor:Notice?, reason:text?, acknowledged:bool=false label="Possible duplicate accepted", author:user? server=actor label="Author" } label="Notice attempt"
  scenario configure(customer:Customer,location:Location,recipient:Contact,from:datetime,until:datetime,source:text,term:Term?,paid_evidence:text?,currency:currency,billing:bool=false,instructions:text,forwarding:text?) by=mail_staff label="Configure mail service"@{nl="Postdienst instellen"}
  scenario service_status(service:Service,active:bool,until:datetime,paid_evidence:text?) by=mail_staff label="Review service availability"@{nl="Dienstbeschikbaarheid beoordelen"}
  scenario instructions(service:Service,instructions:text,forwarding:text?,revision:int) by=authenticated label="Update handling instructions"@{nl="Afhandelingsinstructies bijwerken"}
  scenario receive(location:Location,source:text label=label_Service_source,kind:Item.kind,storage:text label=label_Item_storage,service:Service?,photo:file? label=label_Item_photo) by=mail_staff label="Record receipt"@{nl="Ontvangst registreren"}
  scenario match(item:Item,service:Service) by=mail_staff label="Match recipient"@{nl="Ontvanger koppelen"}
  scenario collect(item:Item,collector:user label="Collector"@{nl="Afhaler"},evidence:text) by=mail_staff label="Record collection"@{nl="Afhaling registreren"}
  scenario forward(item:Item,fee:money? label=label_Handling_fee,destination_verified:bool label="Postal destination verified"@{nl="Postbestemming geverifieerd"}) by=mail_staff label="Prepare forwarding"@{nl="Doorzending voorbereiden"}
  scenario dispatched(dispatch:Dispatch,revision:int,carrier:text label=label_Handling_carrier,evidence:text) by=mail_staff label="Record dispatch"@{nl="Verzending registreren"}
  scenario uncertain(dispatch:Dispatch,revision:int,evidence:text) by=mail_staff label="Record uncertain dispatch"@{nl="Onzekere verzending registreren"}
  scenario return_item(item:Item,evidence:text,no_dispatch:bool=false) by=mail_staff label="Record return"@{nl="Retour registreren"}
  scenario incident(item:Item,reason:text) by=mail_staff label=label_Item_incident
  scenario retry_fee(dispatch:Dispatch) by=mail_staff label="Retry forwarding invoice"@{nl="Doorzendfactuur opnieuw proberen"}
  scenario fee_result on=Billing.charge.completed
  scenario fee_reconciled on=Billing.reconcile.completed
  scenario remind on=Reminder
  scenario send_another_notice(item:Item, reason:text, acknowledged:bool=false) by=mail_staff label="Send another notice"@{nl="Nog een melding verzenden"}
  scenario apply_notice_success(item:Item) by=mail_staff label="Apply accepted notice"@{nl="Geaccepteerde melding toepassen"}
  scenario notice_result on=Mail.send.completed
  style MailroomWorkspace $"Use practical mailroom rows with prominent recipient, storage, kind, and handling state. Distinguish collection, forwarding, notices, and incidents; keep recipient and delegate authority context readable without exposing private instructions in broad list summaries. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, view:enum(all,collection,forwarding,history)=all label={text="Mail view"@{nl="Postweergave"},values={all="All mail"@{nl="Alle post"},collection="Collection queue"@{nl="Afhaalwachtrij"},forwarding="Forwarding queue"@{nl="Doorzendwachtrij"},history="Mail history"@{nl="Postgeschiedenis"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). When mail handling is offered, order navigation as My mail for verified permitted recipients, then Mail and parcels for location mail staff. Incoming, unmatched, uncollected and forwarding queues belong within the staff index; individual item/history views are contextual links. Delegate actions retain own-company authority.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My mail — recipient index | `breadcrumbs`, a service List with placed instruction controls and `pagination`, a delegate List with `pagination` and empty states, and an item Table with state `badge`, notice `status`, `pagination`, empty state and handling history | Read only linked own items; manage authorized recipient instructions; company administrators or individual owners nominate collection delegates through the owning workflow |
| Mail and parcels — location staff index | `breadcrumbs`, an entitlement Card with placed instruction controls, a receipt form with radio/input/file controls, and queue `tabs` plus an item Table with state `badge`, notice `status`, `pagination`, empty state, gated incident `collapse`/`alert`, and a `modal` collect flow opened by `button opens=` | Receive/match against current entitlement and recipient; record notification separately from physical collection |
| Collection detail — contextual permitted view | Recipient/delegate verification, instruction version, receipt/photo state and attributed collection evidence through the contextual `modal` evidence flow | Collect once only for the currently authorized recipient/delegate; expired service leaves existing items for explicit collection/return resolution |
| Forwarding/return — staff queue/detail | Per-dispatch state/fee-invoice `badge`s, snapshotted destination, carrier/evidence, recorded forwarding fee/currency, `dropdown` follow-up with dispatched/uncertain forms and fee action, and handling history with `pagination` | Forward, evidence dispatch, return or append corrections under current grants; invoice settlement cannot certify delivery |

On reception devices, place verification beside the intended action; stack mobile labels without exposing storage to recipients. Distinguish loading, no own items and filtered-empty queues. Preserve receipt/handling input after validation, stale dispatch or interrupted optional photo upload. Failed notices, lost-item incidents and uncertain forwarding remain visible for staff resolution. Retried collection, fees and dispatch retain their logical identity rather than duplicating handling. A changed contact cannot redirect a frozen dispatch, and expiry must not silently discard or return unresolved physical mail. Exclude technical retention/carrier/retry settings and opening/scanning contents.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 03-mailroom-mine-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMail/playwright/references/03-mailroom-mine-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. For first letter with a recorded physical collection handling/evidence, change its state Ready for collection to Collected and Completed column from dash to1Oct2026. Preserve second Forwarding pending row and all other contents. Preserve full-page desktop LEFT sidebar, top-left wordmark and bottom-left account. No other new field/action or visual change. One actual full-page image, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMail. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /mailroom title="Mail and parcels"@{nl="Post en pakketten"} order=2 $MailroomWorkspace
  page /mailroom/mine title="My mail"@{nl="Mijn post"} order=1 $MailroomWorkspace
SELECTED PAGE:
  page /mailroom/mine title="My mail"@{nl="Mijn post"} order=1 $MailroomWorkspace
   require authenticated
   breadcrumbs
   card "Own service"@{nl="Eigen postdienst"}
    list Service display=split empty="No mail service yet"@{nl="Nog geen postdienst"}
     pagination
     text row.location,row.from,row.until,row.instructions,row.forwarding,row.revision
     form instructions arguments={service=row,revision=row.revision}
      textarea instructions
      textarea forwarding
     form Delegate.create
     list row.Delegate empty="No collection delegates"@{nl="Geen afhaalgemachtigden"}
      pagination
      text row.contact,row.account,row.active
      edit
   card "Own mail outcomes"@{nl="Eigen postresultaten"}
    tabs preferences.view
    table Item as item where preferences.view==all or (preferences.view==collection and item.state in [received,notified,collection_ready]) or (preferences.view==forwarding and item.state in [forward_pending,forwarded]) or (preferences.view==history and item.state in [collected,forwarded,returned]) columns=recipient,kind,state,notice_state,completed filter=state display=split empty="No own mail items"@{nl="Geen eigen poststukken"}
     pagination
     badge row.state
     status row.notice_state
     table row.Handling columns=kind,account,instruction,revision,destination,evidence,carrier,fee,created empty="No handling records"@{nl="Geen afhandelingsregistraties"}
      pagination
OWNING LABELS/DATA/FORMS/STYLES:
  message label_Service_recipient = "Recipient"@{nl="Ontvanger"}
  message label_Service_source = "Source reference"@{nl="Bronreferentie"}
  message label_Delegate_account = "Account"@{nl="Account"}
  message label_Item_kind = "Kind"@{nl="Soort"}
  message label_Item_storage = "Storage location"@{nl="Opslaglocatie"}
  message label_Item_photo = "Photo"@{nl="Foto"}
  message label_Item_incident = "Handling incident"@{nl="Afhandelingsincident"}
  message label_Handling_carrier = "Carrier"@{nl="Vervoerder"}
  message label_Handling_fee = "Fee"@{nl="Kosten"}
  role mail_staff label="Mailroom staff"@{nl="Postmedewerker"}
  Service in Customer { location:Location, recipient:Contact label=label_Service_recipient, from:datetime label="Start"@{nl="Begin"}, until:datetime label="End"@{nl="Einde"}, instructions:text, forwarding:text? label="Forwarding instructions"@{nl="Doorzendinstructies"}, revision:int=1, verified:bool=false label="Verified"@{nl="Geverifieerd"}, source:text unique label=label_Service_source, term:Term? label="Purchased paid term"@{nl="Gekochte betaalde termijn"}, paid_evidence:text? label="Paid-service evidence"@{nl="Bewijs betaalde dienst"}, currency:currency, billing:bool=false label="Invoice handling fees"@{nl="Afhandelingskosten factureren"}, active:bool=true } label="Mail service"@{nl="Postdienst"}
  Delegate in Service { contact:Contact label="Nominated contact"@{nl="Genomineerde contactpersoon"}, account:user label=label_Delegate_account, active:bool=true } label="Collection delegate"@{nl="Afhaalgemachtigde"}
  Item { location:Location, service:Service?, recipient:Contact? label=label_Service_recipient, source:text unique label=label_Service_source, kind:enum(letter,parcel) label={text=label_Item_kind,values={letter="Letter"@{nl="Brief"},parcel="Parcel"@{nl="Pakket"}}}, storage:text label=label_Item_storage, photo:file? label=label_Item_photo, state:enum(unmatched,received,notified,collection_ready,collected,forward_pending,forwarded,returned)=unmatched label={text="State"@{nl="Status"},values={unmatched="Unmatched"@{nl="Niet gekoppeld"},received="Received"@{nl="Ontvangen"},notified="Notified"@{nl="Gemeld"},collection_ready="Ready for collection"@{nl="Klaar om af te halen"},collected="Collected"@{nl="Afgehaald"},forward_pending="Forwarding pending"@{nl="Doorzending in afwachting"},forwarded="Forwarded"@{nl="Doorgestuurd"},returned="Returned"@{nl="Geretourneerd"}}}, notification:delivery(Mail.send)? label="Notification reference"@{nl="Meldingsreferentie"}, notice:Notice?, reminders:int=0, reminder_delay:duration=7d, reminder_limit:int=2 min=0 max=5, history_days:int=180 min=1, retention_until:datetime?, dispatch:Dispatch?, completed:datetime? label="Completed at"@{nl="Afgerond op"}, incident:text? label=label_Item_incident } label="Mail item"@{nl="Poststuk"}
  Handling in Item { kind:enum(collection,forward,return,correction) label={text=label_Item_kind,values={collection="Collection"@{nl="Afhalen"},forward="Forwarding"@{nl="Doorzending"},return="Return"@{nl="Retour"},correction="Correction"@{nl="Correctie"}}}, account:user? label=label_Delegate_account, instruction:text label="Recorded instruction"@{nl="Vastgelegde instructie"}, destination:text? label="Destination"@{nl="Bestemming"}, evidence:text, carrier:text? label=label_Handling_carrier, fee:money? label=label_Handling_fee, source:text unique label=label_Service_source, revision:int, dispatch:Dispatch?, author:user server=actor label="Author"@{nl="Auteur"} } label="Handling record"@{nl="Afhandelingsregistratie"}
  Dispatch in Item { source:text unique, instruction:text, instruction_revision:int label="Instruction version"@{nl="Instructieversie"}, destination:text label="Frozen postal destination"@{nl="Vastgelegde postbestemming"}, fee:money? label=label_Handling_fee, charge:Charge?, state:enum(pending,unknown,dispatched,cancelled)=pending label={text="Dispatch"@{nl="Verzending"},values={pending="Pending"@{nl="In afwachting"},unknown="Uncertain"@{nl="Onzeker"},dispatched="Evidenced dispatch"@{nl="Verzending met bewijs"},cancelled="No dispatch recorded"@{nl="Geen verzending vastgelegd"}}}, charge_state:enum(none,pending,confirmed,failed,unknown)=none label={text="Fee invoice"@{nl="Kostenfactuur"},values={none="No invoice requested"@{nl="Geen factuur aangevraagd"},pending="Invoice requested"@{nl="Factuur aangevraagd"},confirmed="Invoice created"@{nl="Factuur aangemaakt"},failed="Invoice failed"@{nl="Factuur mislukt"},unknown="Invoice uncertain"@{nl="Factuur onzeker"}}}, charge_delivery:text?, reconcile_delivery:text?, invoice:text?, revision:int=1 } label="Forwarding attempt"@{nl="Doorzendpoging"}
  Notice in Item { account:user label="Frozen account", address:text label="Frozen address", subject:text, body:text, receipt:delivery(Mail.send)? label="Notice receipt", kind:enum(initial,reminder,additional), number:int, predecessor:Notice?, reason:text?, acknowledged:bool=false label="Possible duplicate accepted", author:user? server=actor label="Author" } label="Notice attempt"
  scenario configure(customer:Customer,location:Location,recipient:Contact,from:datetime,until:datetime,source:text,term:Term?,paid_evidence:text?,currency:currency,billing:bool=false,instructions:text,forwarding:text?) by=mail_staff label="Configure mail service"@{nl="Postdienst instellen"}
  scenario service_status(service:Service,active:bool,until:datetime,paid_evidence:text?) by=mail_staff label="Review service availability"@{nl="Dienstbeschikbaarheid beoordelen"}
  scenario instructions(service:Service,instructions:text,forwarding:text?,revision:int) by=authenticated label="Update handling instructions"@{nl="Afhandelingsinstructies bijwerken"}
  scenario receive(location:Location,source:text label=label_Service_source,kind:Item.kind,storage:text label=label_Item_storage,service:Service?,photo:file? label=label_Item_photo) by=mail_staff label="Record receipt"@{nl="Ontvangst registreren"}
  scenario match(item:Item,service:Service) by=mail_staff label="Match recipient"@{nl="Ontvanger koppelen"}
  scenario collect(item:Item,collector:user label="Collector"@{nl="Afhaler"},evidence:text) by=mail_staff label="Record collection"@{nl="Afhaling registreren"}
  scenario forward(item:Item,fee:money? label=label_Handling_fee,destination_verified:bool label="Postal destination verified"@{nl="Postbestemming geverifieerd"}) by=mail_staff label="Prepare forwarding"@{nl="Doorzending voorbereiden"}
  scenario dispatched(dispatch:Dispatch,revision:int,carrier:text label=label_Handling_carrier,evidence:text) by=mail_staff label="Record dispatch"@{nl="Verzending registreren"}
  scenario uncertain(dispatch:Dispatch,revision:int,evidence:text) by=mail_staff label="Record uncertain dispatch"@{nl="Onzekere verzending registreren"}
  scenario return_item(item:Item,evidence:text,no_dispatch:bool=false) by=mail_staff label="Record return"@{nl="Retour registreren"}
  scenario incident(item:Item,reason:text) by=mail_staff label=label_Item_incident
  scenario retry_fee(dispatch:Dispatch) by=mail_staff label="Retry forwarding invoice"@{nl="Doorzendfactuur opnieuw proberen"}
  scenario fee_result on=Billing.charge.completed
  scenario fee_reconciled on=Billing.reconcile.completed
  scenario remind on=Reminder
  scenario send_another_notice(item:Item, reason:text, acknowledged:bool=false) by=mail_staff label="Send another notice"@{nl="Nog een melding verzenden"}
  scenario apply_notice_success(item:Item) by=mail_staff label="Apply accepted notice"@{nl="Geaccepteerde melding toepassen"}
  scenario notice_result on=Mail.send.completed
  style MailroomWorkspace $"Use practical mailroom rows with prominent recipient, storage, kind, and handling state. Distinguish collection, forwarding, notices, and incidents; keep recipient and delegate authority context readable without exposing private instructions in broad list summaries. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, view:enum(all,collection,forwarding,history)=all label={text="Mail view"@{nl="Postweergave"},values={all="All mail"@{nl="Alle post"},collection="Collection queue"@{nl="Afhaalwachtrij"},forwarding="Forwarding queue"@{nl="Doorzendwachtrij"},history="Mail history"@{nl="Postgeschiedenis"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). When mail handling is offered, order navigation as My mail for verified permitted recipients, then Mail and parcels for location mail staff. Incoming, unmatched, uncollected and forwarding queues belong within the staff index; individual item/history views are contextual links. Delegate actions retain own-company authority.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My mail — recipient index | `breadcrumbs`, a service List with placed instruction controls and `pagination`, a delegate List with `pagination` and empty states, and an item Table with state `badge`, notice `status`, `pagination`, empty state and handling history | Read only linked own items; manage authorized recipient instructions; company administrators or individual owners nominate collection delegates through the owning workflow |
| Mail and parcels — location staff index | `breadcrumbs`, an entitlement Card with placed instruction controls, a receipt form with radio/input/file controls, and queue `tabs` plus an item Table with state `badge`, notice `status`, `pagination`, empty state, gated incident `collapse`/`alert`, and a `modal` collect flow opened by `button opens=` | Receive/match against current entitlement and recipient; record notification separately from physical collection |
| Collection detail — contextual permitted view | Recipient/delegate verification, instruction version, receipt/photo state and attributed collection evidence through the contextual `modal` evidence flow | Collect once only for the currently authorized recipient/delegate; expired service leaves existing items for explicit collection/return resolution |
| Forwarding/return — staff queue/detail | Per-dispatch state/fee-invoice `badge`s, snapshotted destination, carrier/evidence, recorded forwarding fee/currency, `dropdown` follow-up with dispatched/uncertain forms and fee action, and handling history with `pagination` | Forward, evidence dispatch, return or append corrections under current grants; invoice settlement cannot certify delivery |

On reception devices, place verification beside the intended action; stack mobile labels without exposing storage to recipients. Distinguish loading, no own items and filtered-empty queues. Preserve receipt/handling input after validation, stale dispatch or interrupted optional photo upload. Failed notices, lost-item incidents and uncertain forwarding remain visible for staff resolution. Retried collection, fees and dispatch retain their logical identity rather than duplicating handling. A changed contact cannot redirect a frozen dispatch, and expiry must not silently discard or return unresolved physical mail. Exclude technical retention/carrier/retry settings and opening/scanning contents.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```


