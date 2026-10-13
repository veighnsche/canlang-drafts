# CanRent exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 05-workspace-resources-desktop.png

### Active final generation request

```text
Use case: ui-mockup. ONE polished full-page desktop CanRent UI, 1440x1050 landscape. LEFT collapsible sidebar, wordmark TOP LEFT, account anchored BOTTOM LEFT; content RIGHT. Light daisyUI neutral white/gray, restrained teal, readable dark sans typography. Edge-to-edge webpage only, no frame/browser chrome/collage/watermark. Actual source page hierarchy and essential canonical form inputs; one or two coherent representative authorized records only. All unbound scenario parameters need labeled inputs. Currency/timezone/units readable. No invented operations, metrics, admin sections, locations or state-success. All actual admitted static page links; exclude contextual token routes. Source policies/state guards govern visible actions. Long content may continue below fold; no squashing.
Actual page:
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
   require catalog_owner
   breadcrumbs
   card "Resource catalog and rates"@{nl="Voorzieningencatalogus en tarieven"}
    form Resource.create
     fieldset
      select location
      input name
      checkbox pooled
      input capacity
      input party_limit
      radio kind
      input hold_for
      input timezone
      input currency
      input tax_rate
      input discount_rate
      input cancellation_fee
      input hourly
      input daily
      radio price_unit
      textarea terms
      input refund_notice
      textarea accessibility
    table Resource columns=location,name,capacity,hourly,increment,minimum,terms,refund_notice,active filter=location defaults={location=preferences.location} display=split empty="No resources match these filters"@{nl="Geen voorzieningen voldoen aan deze filters"}
     edit
      fieldset
       checkbox active
       textarea terms
     collapse policy_title
      text row.amenities,row.accessibility,row.buffer_before,row.buffer_after
     history
     pagination
Navigation declarations:
  page /workspace/catalog title="Workspace catalog"@{nl="Werkplekcatalogus"} order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
  page /workspace/history title="Historical booking evidence"@{nl="Historisch reserveringsbewijs"} $RentReservationsWorkspace
  page /workspace/refund-review title="Booking finance exceptions"@{nl="Financiële reserveringsuitzonderingen"} order=8 $RentReservationsWorkspace
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
  page /workspace/arrivals title="Workspace arrivals"@{nl="Werkplekaankomsten"} order=3 $RentFulfillmentWorkspace
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
Owning schemas, labels and exact forms:
  preferences { arrival_open:bool=false label="Show arrival instructions"@{nl="Aankomstinstructies tonen"} }
  message policy_title = "Commercial policy and access"@{nl="Commerciële voorwaarden en toegang"}
  message label_RoomRequest_source = "Source reference"@{nl="Bronreferentie"}
  message label_RoomRequest_account = "User account"@{nl="Gebruikersaccount"}
  message label_RoomRequest_from = "From"@{nl="Van"}
  message label_RoomRequest_until = "Until"@{nl="Tot"}
  message label_RoomRequest_terms = "Commercial terms"@{nl="Commerciële voorwaarden"}
  message label_Booking_status_pending = "Pending"@{nl="In afwachting"}
  message label_hold_use_allowance = "Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}
  role billing label="Billing"@{nl="Facturatie"}
  export Resource { location:Location, name:text trim min=1, pooled:bool=false label="Shared capacity"@{nl="Gedeelde capaciteit"}, capacity:int=1 min=1 label="Capacity"@{nl="Capaciteit"}, party_limit:int=1 min=1 label="Attendee limit"@{nl="Deelnemerslimiet"}, kind:enum(desk,office,meeting,event_space)=meeting label={text="Resource type"@{nl="Voorzieningstype"},values={desk="Desk"@{nl="Bureau"},office="Office"@{nl="Kantoor"},meeting="Meeting room"@{nl="Vergaderruimte"},event_space="Event space"@{nl="Evenementruimte"}}}, hold_for:duration=15m label="Hold duration"@{nl="Duur tijdelijke reservering"}, active:bool=true, timezone:timezone, currency:currency, tax_rate:decimal=0 min=0 max=1 label="Tax fraction"@{nl="Belastingfractie"}, discount_rate:decimal=0 min=0 max=1 label="Discount fraction"@{nl="Kortingsfractie"}, cancellation_fee:money? label="Cancellation fee"@{nl="Annuleringskosten"}, hourly:money label="Hourly rate"@{nl="Uurtarief"}, daily:money? label="Day rate"@{nl="Dagtarief"}, price_unit:enum(hour,day)=hour label={text="Price unit"@{nl="Prijseenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, increment:duration=1h label="Booking increment"@{nl="Reserveringsstap"}, minimum:duration=1h label="Minimum duration"@{nl="Minimumduur"}, terms:text label=label_RoomRequest_terms, refund_notice:duration label="Refund notice period"@{nl="Termijn voor terugbetaling"}, buffer_before:duration=0m label="Buffer before"@{nl="Buffer vooraf"}, buffer_after:duration=0m label="Buffer after"@{nl="Buffer achteraf"}, amenities:text[] label="Amenities"@{nl="Voorzieningen"}, accessibility:text label="Accessibility"@{nl="Toegankelijkheid"} } label="Workspace resource"@{nl="Werkplekvoorziening"}
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
The source and companion requirements remain authoritative. This is an intended visual target only; statuses must match owner evidence. Preserve distinctions between reservation, payment, allowance, arrival, occupancy and recovery. Use Current location and neutral sample names. Desktop only, LEFT SIDEBAR/BOTTOM-LEFT ACCOUNT mandatory.
```

## 06-workspace-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanRent/playwright/references/06-workspace-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied full-page desktop UI. In the separate Hold this interval form add its own labeled From/Until date-time inputs, Quantity and Attendees controls (values26Oct2026 09:00/11:00,1,1). The check form does not implicitly bind another form's fields. Set check interval to same26Oct2026 dates, preserving €100 for2h×€50. Keep Customer/Email/allowance and other forms. No invented shared state/carrier. LEFT sidebar remains. Preserve all other existing source content/controls and layout, LEFT sidebar, top-left wordmark, bottom-left account (public Sign in as specified). No new actions/metrics. One actual full-page image, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. ONE polished full-page desktop CanRent UI, 1440x1050 landscape. LEFT collapsible sidebar, wordmark TOP LEFT, account anchored BOTTOM LEFT; content RIGHT. Light daisyUI neutral white/gray, restrained teal, readable dark sans typography. Edge-to-edge webpage only, no frame/browser chrome/collage/watermark. Actual source page hierarchy and essential canonical form inputs; one or two coherent representative authorized records only. All unbound scenario parameters need labeled inputs. Currency/timezone/units readable. No invented operations, metrics, admin sections, locations or state-success. All actual admitted static page links; exclude contextual token routes. Source policies/state guards govern visible actions. Long content may continue below fold; no squashing.
Actual page:
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
   breadcrumbs
   card "Discover workspace"@{nl="Werkplekken ontdekken"}
    accordion
     collapse "Holds and confirmation"@{nl="Reserveren en bevestigen"}
      text "A hold expires at its shown expiry."@{nl="Een tijdelijke reservering verloopt op het getoonde tijdstip."}
      text "Confirmation needs payment and any allowance."@{nl="Bevestiging vereist betaling en een eventueel tegoed."}
     collapse "Cancellation and refunds"@{nl="Annuleren en terugbetalen"}
      text "Cancellation stops future access."@{nl="Annuleren stopt toekomstige toegang."}
      text "Refunds follow the frozen terms."@{nl="Terugbetalingen volgen de vastgelegde voorwaarden."}
    divider
    table Resource as resource where resource.active columns=location,name,kind,pooled,capacity,party_limit,hourly,daily,price_unit,amenities,accessibility filter=location,kind,pooled defaults={location=preferences.location} search=name display=split empty="No resources match these filters"@{nl="Geen voorzieningen voldoen aan deze filters"}
     collapse policy_title
      text row.timezone,row.currency,row.increment,row.minimum,row.terms,row.refund_notice
     card "Check an hourly interval"@{nl="Een tijdvak per uur controleren"}
      require row.price_unit==hour
      form available
       text result.available
       ## total:money caption from DS-9.1 shared vocabulary.
       stat result.total
       content result.terms
       text result.refund_before
       card "Hold this interval"@{nl="Dit tijdvak tijdelijk reserveren"}
        require result.available
        form hold arguments={resource=result.resource,from=result.from,until=result.until,quantity=result.quantity,attendees=result.attendees}
         fieldset
          select customer
          ## proposed: email as input's "appropriate scalar"; checker confirms.
          input email
          checkbox use_allowance
          validator email
     card "Check local workspace days"@{nl="Lokale werkplekdagen controleren"}
      require row.price_unit==day
      form available_days
       text result.available
       stat result.total
       content result.terms
       card "Hold these days"@{nl="Deze dagen tijdelijk reserveren"}
        require result.available
        form hold_days arguments={resource=result.resource,start=result.start,end=result.end,quantity=result.quantity,attendees=result.attendees}
         fieldset
          select customer
          input email
          checkbox use_allowance
     pagination
Navigation declarations:
  page /workspace/catalog title="Workspace catalog"@{nl="Werkplekcatalogus"} order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
  page /workspace/history title="Historical booking evidence"@{nl="Historisch reserveringsbewijs"} $RentReservationsWorkspace
  page /workspace/refund-review title="Booking finance exceptions"@{nl="Financiële reserveringsuitzonderingen"} order=8 $RentReservationsWorkspace
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
  page /workspace/arrivals title="Workspace arrivals"@{nl="Werkplekaankomsten"} order=3 $RentFulfillmentWorkspace
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
Owning schemas, labels and exact forms:
  preferences { arrival_open:bool=false label="Show arrival instructions"@{nl="Aankomstinstructies tonen"} }
  message policy_title = "Commercial policy and access"@{nl="Commerciële voorwaarden en toegang"}
  message label_RoomRequest_source = "Source reference"@{nl="Bronreferentie"}
  message label_RoomRequest_account = "User account"@{nl="Gebruikersaccount"}
  message label_RoomRequest_from = "From"@{nl="Van"}
  message label_RoomRequest_until = "Until"@{nl="Tot"}
  message label_RoomRequest_terms = "Commercial terms"@{nl="Commerciële voorwaarden"}
  message label_Booking_status_pending = "Pending"@{nl="In afwachting"}
  message label_hold_use_allowance = "Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}
  role billing label="Billing"@{nl="Facturatie"}
  export Resource { location:Location, name:text trim min=1, pooled:bool=false label="Shared capacity"@{nl="Gedeelde capaciteit"}, capacity:int=1 min=1 label="Capacity"@{nl="Capaciteit"}, party_limit:int=1 min=1 label="Attendee limit"@{nl="Deelnemerslimiet"}, kind:enum(desk,office,meeting,event_space)=meeting label={text="Resource type"@{nl="Voorzieningstype"},values={desk="Desk"@{nl="Bureau"},office="Office"@{nl="Kantoor"},meeting="Meeting room"@{nl="Vergaderruimte"},event_space="Event space"@{nl="Evenementruimte"}}}, hold_for:duration=15m label="Hold duration"@{nl="Duur tijdelijke reservering"}, active:bool=true, timezone:timezone, currency:currency, tax_rate:decimal=0 min=0 max=1 label="Tax fraction"@{nl="Belastingfractie"}, discount_rate:decimal=0 min=0 max=1 label="Discount fraction"@{nl="Kortingsfractie"}, cancellation_fee:money? label="Cancellation fee"@{nl="Annuleringskosten"}, hourly:money label="Hourly rate"@{nl="Uurtarief"}, daily:money? label="Day rate"@{nl="Dagtarief"}, price_unit:enum(hour,day)=hour label={text="Price unit"@{nl="Prijseenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, increment:duration=1h label="Booking increment"@{nl="Reserveringsstap"}, minimum:duration=1h label="Minimum duration"@{nl="Minimumduur"}, terms:text label=label_RoomRequest_terms, refund_notice:duration label="Refund notice period"@{nl="Termijn voor terugbetaling"}, buffer_before:duration=0m label="Buffer before"@{nl="Buffer vooraf"}, buffer_after:duration=0m label="Buffer after"@{nl="Buffer achteraf"}, amenities:text[] label="Amenities"@{nl="Voorzieningen"}, accessibility:text label="Accessibility"@{nl="Toegankelijkheid"} } label="Workspace resource"@{nl="Werkplekvoorziening"}
  scenario available(resource:Resource,from:datetime,until:datetime,quantity:int=1,attendees:int=1,amenities:text[]=[]) -> WorkspaceAvailability read=true scope=authority by=public label="Check workspace availability"@{nl="Werkplekbeschikbaarheid controleren"}
  scenario available_days(resource:Resource,start:date,end:date,quantity:int=1,attendees:int=1,amenities:text[]=[]) -> DayAvailability read=true scope=authority by=public label="Check workspace days"@{nl="Werkplekdagen controleren"}
  scenario hold(resource:Resource,customer:Customer,from:datetime label=label_RoomRequest_from,until:datetime label=label_RoomRequest_until,quantity:int,email:email,account:user?=null label="Booking account"@{nl="Reserveringsaccount"},attendees:int=1 label="Attendees"@{nl="Deelnemers"},capture:Capture?=null,use_allowance:bool=false label=label_hold_use_allowance) -> Booking by=authenticated or reception label="Hold workspace"@{nl="Werkplek tijdelijk reserveren"}
  scenario hold_days(resource:Resource,customer:Customer,start:date,end:date,quantity:int,email:email,account:user?=null label="Booking account"@{nl="Reserveringsaccount"},attendees:int=1,capture:Capture?=null,use_allowance:bool=false) -> Booking by=authenticated or reception label="Hold workspace days"@{nl="Werkplekdagen tijdelijk reserveren"}
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
The source and companion requirements remain authoritative. This is an intended visual target only; statuses must match owner evidence. Preserve distinctions between reservation, payment, allowance, arrival, occupancy and recovery. Use Current location and neutral sample names. Desktop only, LEFT SIDEBAR/BOTTOM-LEFT ACCOUNT mandatory.
```

## 07-workspace-reservations-desktop.png

### Active final generation request

```text
Use case: ui-mockup. ONE polished full-page desktop CanRent UI, 1440x1050 landscape. LEFT collapsible sidebar, wordmark TOP LEFT, account anchored BOTTOM LEFT; content RIGHT. Light daisyUI neutral white/gray, restrained teal, readable dark sans typography. Edge-to-edge webpage only, no frame/browser chrome/collage/watermark. Actual source page hierarchy and essential canonical form inputs; one or two coherent representative authorized records only. All unbound scenario parameters need labeled inputs. Currency/timezone/units readable. No invented operations, metrics, admin sections, locations or state-success. All actual admitted static page links; exclude contextual token routes. Source policies/state guards govern visible actions. Long content may continue below fold; no squashing.
Actual page:
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
   require reservation_manager
   breadcrumbs
   card "Availability and booking evidence"@{nl="Beschikbaarheids- en reserveringsbewijs"}
    list Resource filter=location,active defaults={location=preferences.location} display=split empty="No resources match these filters"@{nl="Geen voorzieningen voldoen aan deze filters"}
     edit
     tabs
      tab "Resource windows"@{nl="Beschikbaarheidsvensters"}
       form DayCalendar.create
        fieldset
         calendar day
         input opens
         input closes
         checkbox closed
         radio fold
       table row.DayCalendar columns=day,opens,closes,closed empty="No day calendars yet"@{nl="Nog geen dagkalenders"}
        edit
        pagination
       form Window.create
        fieldset
         input from
         input until
         checkbox closed
         textarea reason
       table row.Window columns=from,until,closed,reason empty="No availability windows"@{nl="Geen beschikbaarheidsvensters"}
        edit
        pagination
      tab "Booking outcomes"@{nl="Reserveringsresultaten"}
       ## GR board: by= one enum field; status visible via grouping.
       board row.Booking by=status columns=customer,from,until,quantity,payment,allowance empty="No bookings yet"@{nl="Nog geen reserveringen"}
        history
        pagination
      tab "Capacity and desks"@{nl="Capaciteit en bureaus"}
       form revise_capacity
        fieldset
         ## proposed: int as input's "appropriate scalar"; checker confirms.
         input capacity
         textarea reason
       table row.CapacityRevision columns=capacity,effective,reason empty="No capacity revisions yet"@{nl="Nog geen capaciteitsrevisies"}
        pagination
       form Desk.create
        fieldset
         input name
         checkbox active
       table row.Desk columns=name,active empty="No desks yet"@{nl="Nog geen bureaus"}
        edit
        pagination
       list row.VenueReservation empty="No venue reservations"@{nl="Geen ruimtereserveringen"}
        badge row.status
        text row.source,row.from,row.until,row.quantity
        copy row.source
        pagination
       list row.QuoteHold empty="No quote holds"@{nl="Geen offertereserveringen"}
        text row.active
        text row.source,row.from,row.until,row.quantity,row.expires
        copy row.source
        pagination
       alert "Conflicts need manager review"@{nl="Conflicten vereisen beoordeling"}
       list row.Conflict as conflict where not conflict.resolved empty="No unresolved conflicts"@{nl="Geen onopgeloste conflicten"}
        text row.booking,row.reason
        button opens=conflict_resolve
        modal "Resolve reservation conflict"@{nl="Reserveringsconflict oplossen"} id=conflict_resolve
         slot content
          form resolve_conflict arguments={conflict=row} display=inline
           fieldset
            textarea evidence
        pagination
      tab "Repair blocks and restoration"@{nl="Reparatieblokkades en herstel"}
       button opens=repair_block
       modal "Block for repair"@{nl="Blokkeren voor reparatie"} id=repair_block
        slot content
         form block arguments={resource=row} display=inline
          fieldset
           input from
           input until
           textarea reason
       list row.Downtime empty="No repair blocks"@{nl="Geen reparatieblokkades"}
        text row.active
        text row.from,row.until,row.reason,row.verified_by,row.verification
        copy row.source
        button opens=downtime_restore
        modal "Restore availability"@{nl="Beschikbaarheid herstellen"} id=downtime_restore
         slot content
          form restore arguments={downtime=row} display=inline
           fieldset
            textarea evidence
        pagination
     pagination

Navigation declarations:
  page /workspace/catalog title="Workspace catalog"@{nl="Werkplekcatalogus"} order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
  page /workspace/history title="Historical booking evidence"@{nl="Historisch reserveringsbewijs"} $RentReservationsWorkspace
  page /workspace/refund-review title="Booking finance exceptions"@{nl="Financiële reserveringsuitzonderingen"} order=8 $RentReservationsWorkspace
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
  page /workspace/arrivals title="Workspace arrivals"@{nl="Werkplekaankomsten"} order=3 $RentFulfillmentWorkspace
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
Owning schemas, labels and exact forms:
  preferences { arrival_open:bool=false label="Show arrival instructions"@{nl="Aankomstinstructies tonen"} }
  message policy_title = "Commercial policy and access"@{nl="Commerciële voorwaarden en toegang"}
  message label_RoomRequest_source = "Source reference"@{nl="Bronreferentie"}
  message label_RoomRequest_account = "User account"@{nl="Gebruikersaccount"}
  message label_RoomRequest_from = "From"@{nl="Van"}
  message label_RoomRequest_until = "Until"@{nl="Tot"}
  message label_RoomRequest_terms = "Commercial terms"@{nl="Commerciële voorwaarden"}
  message label_Booking_status_pending = "Pending"@{nl="In afwachting"}
  message label_hold_use_allowance = "Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}
  VenueReservation in Resource { source:text unique, request_revision:int=1, customer:text, account:user, from:datetime, until:datetime, quantity:int min=1, expires:datetime, status:enum(held,staged,confirmed,released,expired)=held label={text="Status"@{nl="Status"},values={held="Held"@{nl="Tijdelijk gereserveerd"},staged="Staged"@{nl="Voorbereid"},confirmed="Confirmed"@{nl="Bevestigd"},released="Released"@{nl="Vrijgegeven"},expired="Expired"@{nl="Verlopen"}}}, previous:VenueReservation?, reason:text? } label="Appointment venue reservation"@{nl="Afspraakruimtereservering"}
  QuoteHold in Resource { source:text unique, revision:int, offer:QuoteOffer, quantity:int min=1, from:datetime, until:datetime, intervals:BookingInterval[], expires:datetime, active:bool=true, booking:Booking? } label="Quoted capacity hold"@{nl="Offertecapaciteitsreservering"}
  role billing label="Billing"@{nl="Facturatie"}
  export Resource { location:Location, name:text trim min=1, pooled:bool=false label="Shared capacity"@{nl="Gedeelde capaciteit"}, capacity:int=1 min=1 label="Capacity"@{nl="Capaciteit"}, party_limit:int=1 min=1 label="Attendee limit"@{nl="Deelnemerslimiet"}, kind:enum(desk,office,meeting,event_space)=meeting label={text="Resource type"@{nl="Voorzieningstype"},values={desk="Desk"@{nl="Bureau"},office="Office"@{nl="Kantoor"},meeting="Meeting room"@{nl="Vergaderruimte"},event_space="Event space"@{nl="Evenementruimte"}}}, hold_for:duration=15m label="Hold duration"@{nl="Duur tijdelijke reservering"}, active:bool=true, timezone:timezone, currency:currency, tax_rate:decimal=0 min=0 max=1 label="Tax fraction"@{nl="Belastingfractie"}, discount_rate:decimal=0 min=0 max=1 label="Discount fraction"@{nl="Kortingsfractie"}, cancellation_fee:money? label="Cancellation fee"@{nl="Annuleringskosten"}, hourly:money label="Hourly rate"@{nl="Uurtarief"}, daily:money? label="Day rate"@{nl="Dagtarief"}, price_unit:enum(hour,day)=hour label={text="Price unit"@{nl="Prijseenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, increment:duration=1h label="Booking increment"@{nl="Reserveringsstap"}, minimum:duration=1h label="Minimum duration"@{nl="Minimumduur"}, terms:text label=label_RoomRequest_terms, refund_notice:duration label="Refund notice period"@{nl="Termijn voor terugbetaling"}, buffer_before:duration=0m label="Buffer before"@{nl="Buffer vooraf"}, buffer_after:duration=0m label="Buffer after"@{nl="Buffer achteraf"}, amenities:text[] label="Amenities"@{nl="Voorzieningen"}, accessibility:text label="Accessibility"@{nl="Toegankelijkheid"} } label="Workspace resource"@{nl="Werkplekvoorziening"}
  DayCalendar in Resource { day:date unique, opens:text="09:00", closes:text="18:00", closed:bool=false, fold:enum(earlier,later)=earlier label={text="Repeated local time"@{nl="Herhaalde lokale tijd"},values={earlier="Earlier occurrence"@{nl="Eerdere tijd"},later="Later occurrence"@{nl="Latere tijd"}}} } label="Published day access"@{nl="Gepubliceerde dagtoegang"}
  Window in Resource { from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, closed:bool=false label="Closed"@{nl="Gesloten"}, reason:text? } label="Availability window"@{nl="Beschikbaarheidsvenster"}
  export Booking in Resource { billing_location:Location?, sale_product:text?, purchased_at:datetime?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, customer:Customer label="Customer"@{nl="Klant"}, account:user label=label_RoomRequest_account, email:email, from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, approval:BillingProfile? label="Invoice account approval"@{nl="Goedkeuring factuuraccount"}, approval_version:int? label="Approval revision"@{nl="Goedkeuringsrevisie"}, fulfillment_reason:text? label="Fulfillment reason"@{nl="Uitvoeringsreden"}, quote:AcceptedOffer? label="Accepted quote snapshot"@{nl="Geaccepteerde offertesnapshot"}, benefit_intervals:BenefitInterval[], benefit_rate:money?, benefit_unit:Resource.price_unit=hour label={text="Allowance unit"@{nl="Tegoedeenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, benefit_duration:duration=1h, arrival_buffer:duration=0m, monetary_due:money? label="Original monetary obligation"@{nl="Oorspronkelijke betalingsverplichting"}, service_due:money? label="Current service balance"@{nl="Huidig uitvoeringssaldo"}, allowance_base:money?, allowance_discount:money?, allowance_tax:money?, allowance_units:decimal? label="Requested units"@{nl="Aangevraagde eenheden"}, included_units:decimal? label="Included units"@{nl="Inbegrepen eenheden"}, allowance_source:text?, allowance_revision:int=0, allowance_reconcile_delivery:text?, original_intervals:BookingInterval[], intervals:BookingInterval[] label="Frozen access intervals"@{nl="Vastgelegde toegangstijdvakken"}, quantity:int=1 min=1, attendees:int=1 min=1 label="Attendees"@{nl="Deelnemers"}, tax_fraction:decimal=0, discount_fraction:decimal=0, subtotal:money label="Subtotal"@{nl="Subtotaal"}, tax:money label="Frozen tax"@{nl="Vastgelegde belasting"}, discount:money label="Frozen discount"@{nl="Vastgelegde korting"}, refund_amount:money label="Refundable amount"@{nl="Terugbetaalbaar bedrag"}, refund_requested:money? label="Requested refund amount"@{nl="Aangevraagd terugbetalingsbedrag"}, rate:money label="Frozen rate"@{nl="Vastgelegd tarief"}, total:money, terms:text label=label_RoomRequest_terms, refund_before:datetime label="Refund deadline"@{nl="Terugbetalingsdeadline"}, reserved_from:datetime label="Capacity reserved from"@{nl="Capaciteit gereserveerd vanaf"}, reserved_until:datetime label="Capacity reserved until"@{nl="Capaciteit gereserveerd tot"}, expires:datetime label="Expires at"@{nl="Verloopt op"}, status:enum(held,pending,confirmed,occupied,completed,cancelled,expired,review,no_show)=held label={text="Status"@{nl="Status"},values={held="Held"@{nl="Tijdelijk gereserveerd"},pending=label_Booking_status_pending,confirmed="Confirmed"@{nl="Bevestigd"},occupied="Occupied"@{nl="In gebruik"},completed="Completed"@{nl="Afgerond"},cancelled="Cancelled"@{nl="Geannuleerd"},expired="Expired"@{nl="Verlopen"},review="Review required"@{nl="Beoordeling nodig"},no_show="No-show"@{nl="Niet verschenen"}}}, payment:enum(unpaid,pending,unknown,paid,refunded,free,on_account)=unpaid label={text="Payment outcome"@{nl="Betaalresultaat"},values={pending=label_Booking_status_pending,unpaid="Unpaid"@{nl="Onbetaald"},unknown="Unknown"@{nl="Onbekend"},paid="Paid"@{nl="Betaald"},refunded="Refunded"@{nl="Terugbetaald"},free="Included or free"@{nl="Inbegrepen of gratis"},on_account="On approved account"@{nl="Op goedgekeurde rekening"}}}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, allowance:enum(not_required,pending,reserved,consumed,released,failed)=not_required label={text="Membership allowance"@{nl="Lidmaatschapstegoed"},values={pending=label_Booking_status_pending,not_required="Not required"@{nl="Niet vereist"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"}}}, source:text unique label=label_RoomRequest_source, checked_in:datetime? label="Actual arrival"@{nl="Werkelijke aankomst"}, overdue:bool=false label="Overdue occupancy"@{nl="Uitgelopen bezetting"}, checked_out:datetime? label="Actual departure"@{nl="Werkelijk vertrek"}, cancellation_restore:bool=false label="Restore refundable allowance"@{nl="Terugbetaalbaar tegoed herstellen"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, billing_delivery:text? label="Billing delivery"@{nl="Facturatieverzending"}, allowance_delivery:text? label="Allowance reservation delivery"@{nl="Verzending tegoedreservering"}, consume_delivery:text? label="Allowance consumption delivery"@{nl="Verzending tegoedverbruik"}, release_delivery:text? label="Allowance release delivery"@{nl="Verzending tegoedvrijgave"}, refund_delivery:text? label="Refund request"@{nl="Terugbetalingsaanvraag"}, refund_state:enum(none,pending,unknown,refunded,review)=none label="Refund outcome"@{nl="Terugbetalingsresultaat"}, collected:money?, refunded:money?, collection_pending:bool=false, refund_pending:bool=false, reconcile_delivery:text?, cancel_delivery:text?,settlement_revision:int=0 label="Settlement revision"@{nl="Afwikkelingsrevisie"}, departure_buffer:duration=0m label="Departure buffer"@{nl="Vertrekbuffer"} } label="Booking"@{nl="Reservering"}
  Downtime in Resource { source:text unique label=label_RoomRequest_source, from:datetime label=label_RoomRequest_from, until:datetime? label=label_RoomRequest_until, reason:text, active:bool=true, verified_by:user? label="Verified by"@{nl="Geverifieerd door"}, verification:text? label="Repair verification"@{nl="Reparatieverificatie"} } label="Repair block"@{nl="Reparatieblokkade"}
  CapacityRevision in Resource { capacity:int min=1, effective:datetime server=now label="Effective at"@{nl="Van kracht vanaf"}, reason:text } label="Capacity revision"@{nl="Capaciteitsrevisie"}
  Conflict in Resource { booking:Booking, downtime:Downtime?, reason:text, resolved:bool=false, resolution:text? } label="Reservation conflict"@{nl="Reserveringsconflict"}
  Desk in Resource { name:text trim min=1 unique, active:bool=true } label="Pool desk"@{nl="Poolbureau"}
  scenario block(resource:Resource,from:datetime label=label_RoomRequest_from,until:datetime? label=label_RoomRequest_until,reason:text) by=reservation_manager label="Block for repair"@{nl="Blokkeren voor reparatie"}
  scenario restore(downtime:Downtime,evidence:text) by=reservation_manager label="Restore availability"@{nl="Beschikbaarheid herstellen"}
  scenario revise_capacity(resource:Resource,capacity:int,reason:text) by=reservation_manager label="Revise pooled capacity"@{nl="Poolcapaciteit herzien"}
  scenario resolve_conflict(conflict:Conflict,evidence:text) by=reservation_manager label="Resolve reservation conflict"@{nl="Reserveringsconflict oplossen"}
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
The source and companion requirements remain authoritative. This is an intended visual target only; statuses must match owner evidence. Preserve distinctions between reservation, payment, allowance, arrival, occupancy and recovery. Use Current location and neutral sample names. Desktop only, LEFT SIDEBAR/BOTTOM-LEFT ACCOUNT mandatory.
```

## 08-workspace-my-bookings-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanRent/playwright/references/08-workspace-my-bookings-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied full-page desktop UI. Fix intrinsic sample state/time and action guards: row1 From21Oct2026 09:00 Until21Oct2026 17:00(8h), keep Confirmed/Paid/Consumed. On row1 show only Move member(hour) and Cancel actions; hide Request payment, Move, Move days, Move member days, Extend and Confirm free because their source guards fail. Row2 From22Oct2026 09:00 Until22Oct2026 17:00(8h), keep Held/Unpaid/Reserved; show only Request payment and allowance, Cancel, hide all moves/extend/confirm-free. All buttons otherwise remain canonical. Sidebar Refund review label becomes exact Booking finance exceptions. Preserve LEFT shell. Preserve all other existing source content/controls and layout, LEFT sidebar, top-left wordmark, bottom-left account (public Sign in as specified). No new actions/metrics. One actual full-page image, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. ONE polished full-page desktop CanRent UI, 1440x1050 landscape. LEFT collapsible sidebar, wordmark TOP LEFT, account anchored BOTTOM LEFT; content RIGHT. Light daisyUI neutral white/gray, restrained teal, readable dark sans typography. Edge-to-edge webpage only, no frame/browser chrome/collage/watermark. Actual source page hierarchy and essential canonical form inputs; one or two coherent representative authorized records only. All unbound scenario parameters need labeled inputs. Currency/timezone/units readable. No invented operations, metrics, admin sections, locations or state-success. All actual admitted static page links; exclude contextual token routes. Source policies/state guards govern visible actions. Long content may continue below fold; no squashing.
Actual page:
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
   require authenticated
   breadcrumbs
   card "Your booking outcomes"@{nl="Jouw reserveringsresultaten"}
    ## Static process guide; steps never define or execute a workflow. UC steps/item schema.
    steps
     slot item
      text "Hold"@{nl="Reserveren"}
     slot item
      text "Request"@{nl="Aanvragen"}
     slot item
      text "Confirm"@{nl="Bevestigen"}
     slot item
      text "Arrive"@{nl="Aankomen"}
     slot item
      text "Depart"@{nl="Vertrekken"}
    divider
    list Booking as booking where booking.account==actor order=booking.from display=split empty="No bookings yet"@{nl="Nog geen reserveringen"}
     badge row.status
     badge row.payment
     badge row.allowance
     badge row.refund_state
     stat row.total
     text row.from,row.until,row.monetary_due,row.service_due,row.allowance_units,row.included_units
     copy row.source
     actions reconcile_booking,reconcile_allowance
     join
      button opens=request_payment
     join
      button opens=move_hold
      button opens=move_days_hold
      button opens=move_member
      button opens=move_member_days
     join
      button opens=booking_extend
      button opens=booking_cancel
      button opens=free_confirm
     modal "Request payment and allowance"@{nl="Betaling en tegoed aanvragen"} id=request_payment
      slot content
       form request arguments={booking=row} display=inline
        fieldset
         checkbox use_allowance
     modal "Move held booking"@{nl="Tijdelijke reservering verplaatsen"} id=move_hold
      slot content
       form move arguments={booking=row} display=inline
        fieldset
         input from
         input until
     modal "Move workspace days"@{nl="Werkplekdagen verplaatsen"} id=move_days_hold
      slot content
       form move_days arguments={booking=row} display=inline
        fieldset
         calendar start
         calendar end
     modal "Move member workspace"@{nl="Ledenwerkplek verplaatsen"} id=move_member
      slot content
       form move_membership arguments={booking=row} display=inline
        fieldset
         input from
         input until
     modal "Move member workspace days"@{nl="Ledenwerkplekdagen verplaatsen"} id=move_member_days
      slot content
       form move_membership_days arguments={booking=row} display=inline
        fieldset
         calendar start
         calendar end
     modal "Extend booking"@{nl="Reservering verlengen"} id=booking_extend
      slot content
       form extend arguments={booking=row} display=inline
        fieldset
         input until
         textarea reason
         ## proposed: money as input's "appropriate scalar"; checker confirms.
         input amount
     modal "Cancel booking"@{nl="Reservering annuleren"} id=booking_cancel
      slot content
       form cancel arguments={booking=row} display=inline
        fieldset
         textarea reason
     modal "Confirm free booking"@{nl="Gratis reservering bevestigen"} id=free_confirm
      slot content
       form fulfill_free arguments={booking=row} display=inline
        fieldset
         textarea reason
     collapse "Frozen commercial terms"@{nl="Vastgelegde commerciële voorwaarden"}
      text row.terms,row.refund_before,row.expires,row.checked_in,row.checked_out,row.cancellation_reason
     list row.Movement empty="No workspace moves"@{nl="Geen werkplekverplaatsingen"}
      badge row.state
      text row.intervals,row.outcome
      actions abandon_movement,reconcile_movement,retry_movement_cleanup
      pagination
     list row.Notice empty="No correspondence yet"@{nl="Nog geen correspondentie"}
      status row.state
      text row.kind,row.subject
      tooltip "Retry delivery"@{nl="Opnieuw verzenden"}
       action resend_notice
      pagination
     history
     pagination
Navigation declarations:
  page /workspace/catalog title="Workspace catalog"@{nl="Werkplekcatalogus"} order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
  page /workspace/history title="Historical booking evidence"@{nl="Historisch reserveringsbewijs"} $RentReservationsWorkspace
  page /workspace/refund-review title="Booking finance exceptions"@{nl="Financiële reserveringsuitzonderingen"} order=8 $RentReservationsWorkspace
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
  page /workspace/arrivals title="Workspace arrivals"@{nl="Werkplekaankomsten"} order=3 $RentFulfillmentWorkspace
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
Owning schemas, labels and exact forms:
  preferences { arrival_open:bool=false label="Show arrival instructions"@{nl="Aankomstinstructies tonen"} }
  message policy_title = "Commercial policy and access"@{nl="Commerciële voorwaarden en toegang"}
  message label_RoomRequest_source = "Source reference"@{nl="Bronreferentie"}
  message label_RoomRequest_account = "User account"@{nl="Gebruikersaccount"}
  message label_RoomRequest_from = "From"@{nl="Van"}
  message label_RoomRequest_until = "Until"@{nl="Tot"}
  message label_RoomRequest_terms = "Commercial terms"@{nl="Commerciële voorwaarden"}
  message label_Booking_status_pending = "Pending"@{nl="In afwachting"}
  message label_hold_use_allowance = "Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}
  role billing label="Billing"@{nl="Facturatie"}
  export Booking in Resource { billing_location:Location?, sale_product:text?, purchased_at:datetime?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, customer:Customer label="Customer"@{nl="Klant"}, account:user label=label_RoomRequest_account, email:email, from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, approval:BillingProfile? label="Invoice account approval"@{nl="Goedkeuring factuuraccount"}, approval_version:int? label="Approval revision"@{nl="Goedkeuringsrevisie"}, fulfillment_reason:text? label="Fulfillment reason"@{nl="Uitvoeringsreden"}, quote:AcceptedOffer? label="Accepted quote snapshot"@{nl="Geaccepteerde offertesnapshot"}, benefit_intervals:BenefitInterval[], benefit_rate:money?, benefit_unit:Resource.price_unit=hour label={text="Allowance unit"@{nl="Tegoedeenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, benefit_duration:duration=1h, arrival_buffer:duration=0m, monetary_due:money? label="Original monetary obligation"@{nl="Oorspronkelijke betalingsverplichting"}, service_due:money? label="Current service balance"@{nl="Huidig uitvoeringssaldo"}, allowance_base:money?, allowance_discount:money?, allowance_tax:money?, allowance_units:decimal? label="Requested units"@{nl="Aangevraagde eenheden"}, included_units:decimal? label="Included units"@{nl="Inbegrepen eenheden"}, allowance_source:text?, allowance_revision:int=0, allowance_reconcile_delivery:text?, original_intervals:BookingInterval[], intervals:BookingInterval[] label="Frozen access intervals"@{nl="Vastgelegde toegangstijdvakken"}, quantity:int=1 min=1, attendees:int=1 min=1 label="Attendees"@{nl="Deelnemers"}, tax_fraction:decimal=0, discount_fraction:decimal=0, subtotal:money label="Subtotal"@{nl="Subtotaal"}, tax:money label="Frozen tax"@{nl="Vastgelegde belasting"}, discount:money label="Frozen discount"@{nl="Vastgelegde korting"}, refund_amount:money label="Refundable amount"@{nl="Terugbetaalbaar bedrag"}, refund_requested:money? label="Requested refund amount"@{nl="Aangevraagd terugbetalingsbedrag"}, rate:money label="Frozen rate"@{nl="Vastgelegd tarief"}, total:money, terms:text label=label_RoomRequest_terms, refund_before:datetime label="Refund deadline"@{nl="Terugbetalingsdeadline"}, reserved_from:datetime label="Capacity reserved from"@{nl="Capaciteit gereserveerd vanaf"}, reserved_until:datetime label="Capacity reserved until"@{nl="Capaciteit gereserveerd tot"}, expires:datetime label="Expires at"@{nl="Verloopt op"}, status:enum(held,pending,confirmed,occupied,completed,cancelled,expired,review,no_show)=held label={text="Status"@{nl="Status"},values={held="Held"@{nl="Tijdelijk gereserveerd"},pending=label_Booking_status_pending,confirmed="Confirmed"@{nl="Bevestigd"},occupied="Occupied"@{nl="In gebruik"},completed="Completed"@{nl="Afgerond"},cancelled="Cancelled"@{nl="Geannuleerd"},expired="Expired"@{nl="Verlopen"},review="Review required"@{nl="Beoordeling nodig"},no_show="No-show"@{nl="Niet verschenen"}}}, payment:enum(unpaid,pending,unknown,paid,refunded,free,on_account)=unpaid label={text="Payment outcome"@{nl="Betaalresultaat"},values={pending=label_Booking_status_pending,unpaid="Unpaid"@{nl="Onbetaald"},unknown="Unknown"@{nl="Onbekend"},paid="Paid"@{nl="Betaald"},refunded="Refunded"@{nl="Terugbetaald"},free="Included or free"@{nl="Inbegrepen of gratis"},on_account="On approved account"@{nl="Op goedgekeurde rekening"}}}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, allowance:enum(not_required,pending,reserved,consumed,released,failed)=not_required label={text="Membership allowance"@{nl="Lidmaatschapstegoed"},values={pending=label_Booking_status_pending,not_required="Not required"@{nl="Niet vereist"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"}}}, source:text unique label=label_RoomRequest_source, checked_in:datetime? label="Actual arrival"@{nl="Werkelijke aankomst"}, overdue:bool=false label="Overdue occupancy"@{nl="Uitgelopen bezetting"}, checked_out:datetime? label="Actual departure"@{nl="Werkelijk vertrek"}, cancellation_restore:bool=false label="Restore refundable allowance"@{nl="Terugbetaalbaar tegoed herstellen"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, billing_delivery:text? label="Billing delivery"@{nl="Facturatieverzending"}, allowance_delivery:text? label="Allowance reservation delivery"@{nl="Verzending tegoedreservering"}, consume_delivery:text? label="Allowance consumption delivery"@{nl="Verzending tegoedverbruik"}, release_delivery:text? label="Allowance release delivery"@{nl="Verzending tegoedvrijgave"}, refund_delivery:text? label="Refund request"@{nl="Terugbetalingsaanvraag"}, refund_state:enum(none,pending,unknown,refunded,review)=none label="Refund outcome"@{nl="Terugbetalingsresultaat"}, collected:money?, refunded:money?, collection_pending:bool=false, refund_pending:bool=false, reconcile_delivery:text?, cancel_delivery:text?,settlement_revision:int=0 label="Settlement revision"@{nl="Afwikkelingsrevisie"}, departure_buffer:duration=0m label="Departure buffer"@{nl="Vertrekbuffer"} } label="Booking"@{nl="Reservering"}
  export Notice in Booking { kind:enum(confirmation,reminder,cancellation) label={text="Kind"@{nl="Soort"},values={confirmation="Confirmation"@{nl="Bevestiging"},reminder="Reminder"@{nl="Herinnering"},cancellation="Cancellation"@{nl="Annulering"}}}, revision:int, subject:text, body:text, delivery:delivery(Mail.send)? } label="Booking correspondence"@{nl="Reserveringscorrespondentie"}
  export Movement in Booking { source:text unique, intervals:BenefitInterval[]!, expires:datetime, state:enum(holding,waiting_money,committing,adopted,cancelling,cancelled,review)=holding label={text="State"@{nl="Status"},values={holding="Holding candidate"@{nl="Kandidaat gereserveerd"},waiting_money="Awaiting balance"@{nl="Wacht op saldo"},committing="Committing replacement"@{nl="Vervanging vastleggen"},adopted="Replacement adopted"@{nl="Vervanging overgenomen"},cancelling="Cleanup pending"@{nl="Opruimen in behandeling"},cancelled="Cancelled"@{nl="Geannuleerd"},review="Review required"@{nl="Beoordeling nodig"}}}, extra_due:money?, extra_paid:bool=false, extra_delivery:text?, extra_revision:int=0, credit_due:money?, release_restore:bool=false, reserve_delivery:text?, commit_delivery:text?, release_delivery:text?, reconcile_delivery:text?, outcome:AllowanceOutcome? } label="Replacement workspace hold"@{nl="Vervangende werkplekreservering"}
  export scenario move(booking:Booking,from:datetime label=label_RoomRequest_from,until:datetime label=label_RoomRequest_until) by=authenticated label="Move held booking"@{nl="Tijdelijke reservering verplaatsen"}
  export scenario move_days(booking:Booking,start:date,end:date) by=authenticated label="Move workspace days"@{nl="Werkplekdagen verplaatsen"}
  export scenario move_membership(booking:Booking,from:datetime,until:datetime) by=authenticated label="Move member workspace"@{nl="Ledenwerkplek verplaatsen"}
  export scenario move_membership_days(booking:Booking,start:date,end:date) by=authenticated label="Move member workspace days"@{nl="Ledenwerkplekdagen verplaatsen"}
  export scenario fulfill_free(booking:Booking,reason:text) by=authenticated or reception label="Confirm free booking"@{nl="Gratis reservering bevestigen"}
  export scenario extend(booking:Booking,until:datetime,reason:text,amount:money?=null) by=authenticated or reception or billing label="Extend booking"@{nl="Reservering verlengen"}
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
  scenario request(booking:Booking,use_allowance:bool=false label="Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}) by=authenticated or reception label="Request payment and allowance"@{nl="Betaling en tegoed aanvragen"}
  scenario cancel(booking:Booking,reason:text) by=authenticated or reception
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
The source and companion requirements remain authoritative. This is an intended visual target only; statuses must match owner evidence. Preserve distinctions between reservation, payment, allowance, arrival, occupancy and recovery. Use Current location and neutral sample names. Desktop only, LEFT SIDEBAR/BOTTOM-LEFT ACCOUNT mandatory.
```

## 10-workspace-occupancy-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanRent/playwright/references/10-workspace-occupancy-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Preserve supplied full-page desktop LEFT shell. Fix source distinction: Product review with recorded arrival must be Occupied, not Pending. Replace event phrases '2 checked in ·0 out' and '1 checked in ·0 out' with 'Quantity2 ·Arrival recorded' /'Quantity1 ·Arrival recorded'; for unarrived events 'No arrival recorded'. Source Booking has quantity plus arrival/departure timestamps, not a people check-in counter. In report table change unit people to resource units because the displayed quantity is saleable capacity, not headcount. Preserve all other forms/source result context. One full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. ONE polished full-page desktop CanRent UI, 1440x1050 landscape. LEFT collapsible sidebar, wordmark TOP LEFT, account anchored BOTTOM LEFT; content RIGHT. Light daisyUI neutral white/gray, restrained teal, readable dark sans typography. Edge-to-edge webpage only, no frame/browser chrome/collage/watermark. Actual source page hierarchy and essential canonical form inputs; one or two coherent representative authorized records only. All unbound scenario parameters need labeled inputs. Currency/timezone/units readable. No invented operations, metrics, admin sections, locations or state-success. All actual admitted static page links; exclude contextual token routes. Source policies/state guards govern visible actions. Long content may continue below fold; no squashing.
Actual page:
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
   require authenticated
   breadcrumbs
   card "Booked agenda and physical occupancy"@{nl="Reserveringsagenda en werkelijke bezetting"}
    calendar Booking as booking where preferences.location==null or booking.parent.location==preferences.location start=from end=until empty="No bookings in this view"@{nl="Geen reserveringen in deze weergave"}
     badge row.status
     text row.quantity,row.checked_in,row.checked_out
     pagination
   card "Resource capacity"@{nl="Voorzieningscapaciteit"}
    table Resource columns=location,name,capacity filter=location defaults={location=preferences.location} empty="No resources match these filters"@{nl="Geen voorzieningen voldoen aan deze filters"}
     card "Current source checkpoint"@{nl="Huidig broncontrolepunt"}
      require reservation_manager
      form resource_report
       text result.checkpoint
       table result.rows columns=from,until,metric,quantity,unit,provisional empty="No measures in this window"@{nl="Geen maatstaven in dit venster"}
        pagination
     pagination
Navigation declarations:
  page /workspace/catalog title="Workspace catalog"@{nl="Werkplekcatalogus"} order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
  page /workspace/history title="Historical booking evidence"@{nl="Historisch reserveringsbewijs"} $RentReservationsWorkspace
  page /workspace/refund-review title="Booking finance exceptions"@{nl="Financiële reserveringsuitzonderingen"} order=8 $RentReservationsWorkspace
  page /workspace/resources title="Resource catalog"@{nl="Voorzieningencatalogus"} order=7 $RentReservationsWorkspace
  page /workspace title="Available workspace"@{nl="Beschikbare werkplekken"} order=1 $RentReservationsWorkspace
  page /workspace/reservations title="Reservations"@{nl="Reserveringen"} order=5 $RentReservationsWorkspace
  page /workspace/my-bookings title="My bookings"@{nl="Mijn reserveringen"} order=2 $RentFulfillmentWorkspace
  page /workspace/arrivals title="Workspace arrivals"@{nl="Werkplekaankomsten"} order=3 $RentFulfillmentWorkspace
  page /workspace/occupancy title="Local occupancy"@{nl="Lokale bezetting"} order=4 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/occupancy page content; keep page admission and the shared shell unchanged."
Owning schemas, labels and exact forms:
  preferences { arrival_open:bool=false label="Show arrival instructions"@{nl="Aankomstinstructies tonen"} }
  message policy_title = "Commercial policy and access"@{nl="Commerciële voorwaarden en toegang"}
  message label_RoomRequest_source = "Source reference"@{nl="Bronreferentie"}
  message label_RoomRequest_account = "User account"@{nl="Gebruikersaccount"}
  message label_RoomRequest_from = "From"@{nl="Van"}
  message label_RoomRequest_until = "Until"@{nl="Tot"}
  message label_RoomRequest_terms = "Commercial terms"@{nl="Commerciële voorwaarden"}
  message label_Booking_status_pending = "Pending"@{nl="In afwachting"}
  message label_hold_use_allowance = "Use membership allowance"@{nl="Lidmaatschapstegoed gebruiken"}
  role billing label="Billing"@{nl="Facturatie"}
  export Resource { location:Location, name:text trim min=1, pooled:bool=false label="Shared capacity"@{nl="Gedeelde capaciteit"}, capacity:int=1 min=1 label="Capacity"@{nl="Capaciteit"}, party_limit:int=1 min=1 label="Attendee limit"@{nl="Deelnemerslimiet"}, kind:enum(desk,office,meeting,event_space)=meeting label={text="Resource type"@{nl="Voorzieningstype"},values={desk="Desk"@{nl="Bureau"},office="Office"@{nl="Kantoor"},meeting="Meeting room"@{nl="Vergaderruimte"},event_space="Event space"@{nl="Evenementruimte"}}}, hold_for:duration=15m label="Hold duration"@{nl="Duur tijdelijke reservering"}, active:bool=true, timezone:timezone, currency:currency, tax_rate:decimal=0 min=0 max=1 label="Tax fraction"@{nl="Belastingfractie"}, discount_rate:decimal=0 min=0 max=1 label="Discount fraction"@{nl="Kortingsfractie"}, cancellation_fee:money? label="Cancellation fee"@{nl="Annuleringskosten"}, hourly:money label="Hourly rate"@{nl="Uurtarief"}, daily:money? label="Day rate"@{nl="Dagtarief"}, price_unit:enum(hour,day)=hour label={text="Price unit"@{nl="Prijseenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, increment:duration=1h label="Booking increment"@{nl="Reserveringsstap"}, minimum:duration=1h label="Minimum duration"@{nl="Minimumduur"}, terms:text label=label_RoomRequest_terms, refund_notice:duration label="Refund notice period"@{nl="Termijn voor terugbetaling"}, buffer_before:duration=0m label="Buffer before"@{nl="Buffer vooraf"}, buffer_after:duration=0m label="Buffer after"@{nl="Buffer achteraf"}, amenities:text[] label="Amenities"@{nl="Voorzieningen"}, accessibility:text label="Accessibility"@{nl="Toegankelijkheid"} } label="Workspace resource"@{nl="Werkplekvoorziening"}
  export Booking in Resource { billing_location:Location?, sale_product:text?, purchased_at:datetime?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, customer:Customer label="Customer"@{nl="Klant"}, account:user label=label_RoomRequest_account, email:email, from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, approval:BillingProfile? label="Invoice account approval"@{nl="Goedkeuring factuuraccount"}, approval_version:int? label="Approval revision"@{nl="Goedkeuringsrevisie"}, fulfillment_reason:text? label="Fulfillment reason"@{nl="Uitvoeringsreden"}, quote:AcceptedOffer? label="Accepted quote snapshot"@{nl="Geaccepteerde offertesnapshot"}, benefit_intervals:BenefitInterval[], benefit_rate:money?, benefit_unit:Resource.price_unit=hour label={text="Allowance unit"@{nl="Tegoedeenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"}}}, benefit_duration:duration=1h, arrival_buffer:duration=0m, monetary_due:money? label="Original monetary obligation"@{nl="Oorspronkelijke betalingsverplichting"}, service_due:money? label="Current service balance"@{nl="Huidig uitvoeringssaldo"}, allowance_base:money?, allowance_discount:money?, allowance_tax:money?, allowance_units:decimal? label="Requested units"@{nl="Aangevraagde eenheden"}, included_units:decimal? label="Included units"@{nl="Inbegrepen eenheden"}, allowance_source:text?, allowance_revision:int=0, allowance_reconcile_delivery:text?, original_intervals:BookingInterval[], intervals:BookingInterval[] label="Frozen access intervals"@{nl="Vastgelegde toegangstijdvakken"}, quantity:int=1 min=1, attendees:int=1 min=1 label="Attendees"@{nl="Deelnemers"}, tax_fraction:decimal=0, discount_fraction:decimal=0, subtotal:money label="Subtotal"@{nl="Subtotaal"}, tax:money label="Frozen tax"@{nl="Vastgelegde belasting"}, discount:money label="Frozen discount"@{nl="Vastgelegde korting"}, refund_amount:money label="Refundable amount"@{nl="Terugbetaalbaar bedrag"}, refund_requested:money? label="Requested refund amount"@{nl="Aangevraagd terugbetalingsbedrag"}, rate:money label="Frozen rate"@{nl="Vastgelegd tarief"}, total:money, terms:text label=label_RoomRequest_terms, refund_before:datetime label="Refund deadline"@{nl="Terugbetalingsdeadline"}, reserved_from:datetime label="Capacity reserved from"@{nl="Capaciteit gereserveerd vanaf"}, reserved_until:datetime label="Capacity reserved until"@{nl="Capaciteit gereserveerd tot"}, expires:datetime label="Expires at"@{nl="Verloopt op"}, status:enum(held,pending,confirmed,occupied,completed,cancelled,expired,review,no_show)=held label={text="Status"@{nl="Status"},values={held="Held"@{nl="Tijdelijk gereserveerd"},pending=label_Booking_status_pending,confirmed="Confirmed"@{nl="Bevestigd"},occupied="Occupied"@{nl="In gebruik"},completed="Completed"@{nl="Afgerond"},cancelled="Cancelled"@{nl="Geannuleerd"},expired="Expired"@{nl="Verlopen"},review="Review required"@{nl="Beoordeling nodig"},no_show="No-show"@{nl="Niet verschenen"}}}, payment:enum(unpaid,pending,unknown,paid,refunded,free,on_account)=unpaid label={text="Payment outcome"@{nl="Betaalresultaat"},values={pending=label_Booking_status_pending,unpaid="Unpaid"@{nl="Onbetaald"},unknown="Unknown"@{nl="Onbekend"},paid="Paid"@{nl="Betaald"},refunded="Refunded"@{nl="Terugbetaald"},free="Included or free"@{nl="Inbegrepen of gratis"},on_account="On approved account"@{nl="Op goedgekeurde rekening"}}}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, allowance:enum(not_required,pending,reserved,consumed,released,failed)=not_required label={text="Membership allowance"@{nl="Lidmaatschapstegoed"},values={pending=label_Booking_status_pending,not_required="Not required"@{nl="Niet vereist"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"},failed="Failed"@{nl="Mislukt"}}}, source:text unique label=label_RoomRequest_source, checked_in:datetime? label="Actual arrival"@{nl="Werkelijke aankomst"}, overdue:bool=false label="Overdue occupancy"@{nl="Uitgelopen bezetting"}, checked_out:datetime? label="Actual departure"@{nl="Werkelijk vertrek"}, cancellation_restore:bool=false label="Restore refundable allowance"@{nl="Terugbetaalbaar tegoed herstellen"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, billing_delivery:text? label="Billing delivery"@{nl="Facturatieverzending"}, allowance_delivery:text? label="Allowance reservation delivery"@{nl="Verzending tegoedreservering"}, consume_delivery:text? label="Allowance consumption delivery"@{nl="Verzending tegoedverbruik"}, release_delivery:text? label="Allowance release delivery"@{nl="Verzending tegoedvrijgave"}, refund_delivery:text? label="Refund request"@{nl="Terugbetalingsaanvraag"}, refund_state:enum(none,pending,unknown,refunded,review)=none label="Refund outcome"@{nl="Terugbetalingsresultaat"}, collected:money?, refunded:money?, collection_pending:bool=false, refund_pending:bool=false, reconcile_delivery:text?, cancel_delivery:text?,settlement_revision:int=0 label="Settlement revision"@{nl="Afwikkelingsrevisie"}, departure_buffer:duration=0m label="Departure buffer"@{nl="Vertrekbuffer"} } label="Booking"@{nl="Reservering"}
  export scenario resource_report(resource:Resource,from:datetime,until:datetime) read=true scope=authority -> ReportBatch by=reservation_manager label="Workspace source measures"@{nl="Werkplekbronmaatstaven"}
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location? }
The source and companion requirements remain authoritative. This is an intended visual target only; statuses must match owner evidence. Preserve distinctions between reservation, payment, allowance, arrival, occupancy and recovery. Use Current location and neutral sample names. Desktop only, LEFT SIDEBAR/BOTTOM-LEFT ACCOUNT mandatory.
```


