Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanRent. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /workspace/catalog title="Workspace catalog" order=6 
  page /workspace/history title="Historical booking evidence" 
  page /workspace/refund-review title="Booking finance exceptions" order=8 
  page /workspace/resources title="Resource catalog" order=7 
  page /workspace title="Available workspace" order=1 
  page /workspace/reservations title="Reservations" order=5 
  page /workspace/my-bookings title="My bookings" order=2 
  page /workspace/arrivals title="Workspace arrivals" order=3 
  page /workspace/occupancy title="Local occupancy" order=4 
Selected page and hierarchy/controls:
  page /workspace/catalog title="Workspace catalog" order=6 $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workspace/catalog page content; keep page admission and the shared shell unchanged."
   require catalog_owner
   breadcrumbs
   ## Inline view of the owning bool preference; shared dialog stays canonical. UC prefs panel + toggle.
   preferences
    toggle arrival_open
   card "Location catalog"
    form Location.create
     fieldset
      input name
      textarea address
      input timezone
      input currency
      input hours
      textarea arrival
    table Location columns=name,address,timezone,currency,hours empty="No locations yet"
     text row.active
     edit
      fieldset
       checkbox active
       textarea arrival
     collapse "Arrival information" open=preferences.arrival_open
      text row.arrival
     form WeeklyHours.create
      fieldset
       input weekday
       input opens
       input closes
       input close_after
       radio fold
     table row.WeeklyHours columns=weekday,opens,closes,close_after empty="No weekly hours yet"
      edit
      pagination
     form ClosedDate.create
      fieldset
       calendar day
       textarea reason
     table row.ClosedDate columns=day,reason empty="No closed dates yet"
      edit
      pagination
     form DateHours.create
      fieldset
       calendar day
       input opens
       input closes
       input close_after
       checkbox closed
       radio fold
     table row.DateHours columns=day,opens,closes,close_after,closed empty="No date hours yet"
      edit
      pagination
     history
     pagination

# Coordinate capacity, buffers, holds and downtime at each resource's single owner. 
Source style intent:
  style RentReservationsWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  style RentFulfillmentWorkspace $"Prioritize workspace discovery rows, readable rates, and interval checks. Make reservation, payment, allowance, and physical arrival outcomes distinct; use a legible occupancy agenda and clear capacity evidence while retaining resource windows and recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message policy_title = "Commercial policy and access"
  message label_RoomRequest_source = "Source reference"
  message label_RoomRequest_account = "User account"
  message label_RoomRequest_from = "From"
  message label_RoomRequest_until = "Until"
  message label_RoomRequest_terms = "Commercial terms"
  message label_Booking_status_pending = "Pending"
  message label_hold_use_allowance = "Use membership allowance"
  VenueReservation in Resource { source:text unique, request_revision:int=1, customer:text, account:user, from:datetime, until:datetime, quantity:int min=1, expires:datetime, status:enum(held,staged,confirmed,released,expired)=held label={text="Status",values={held="Held",staged="Staged",confirmed="Confirmed",released="Released",expired="Expired"}}, previous:VenueReservation?, reason:text? } label="Appointment venue reservation"
  ReservationFence in Resource { source:text, revision:int, reason:text, offer:AcceptedOffer? } label="Closed quote revision"
  DowntimeFence in Resource {source:text unique,evidence:text}
  VenueFence in Resource { source:text unique, reason:text } label="Cancelled venue request"
  QuoteHold in Resource { source:text unique, revision:int, offer:QuoteOffer, quantity:int min=1, from:datetime, until:datetime, intervals:BookingInterval[], expires:datetime, active:bool=true, booking:Booking? } label="Quoted capacity hold"
  export LegacyBooking { source:text trim min=1 label="Source system", external_id:text min=1 label="Original record key", location:Location label="Current location scope", facts:LegacyBookingFacts label="Original booking facts", source_evidence:file label="Original source artifact", attestation:text trim min=1 label="Intake attestation", customer:Customer? label="Current customer", resource:Resource? label="Current resource", account:user? label="Current account", mapping_reason:text? label="Review reason", imported_by:user server=actor label="Imported by", imported_at:datetime server=now label="Imported at" } label="Historical booking"
  export Resource { location:Location, name:text trim min=1, pooled:bool=false label="Shared capacity", capacity:int=1 min=1 label="Capacity", party_limit:int=1 min=1 label="Attendee limit", kind:enum(desk,office,meeting,event_space)=meeting label={text="Resource type",values={desk="Desk",office="Office",meeting="Meeting room",event_space="Event space"}}, hold_for:duration=15m label="Hold duration", active:bool=true, timezone:timezone, currency:currency, tax_rate:decimal=0 min=0 max=1 label="Tax fraction", discount_rate:decimal=0 min=0 max=1 label="Discount fraction", cancellation_fee:money? label="Cancellation fee", hourly:money label="Hourly rate", daily:money? label="Day rate", price_unit:enum(hour,day)=hour label={text="Price unit",values={hour="Hour",day="Day"}}, increment:duration=1h label="Booking increment", minimum:duration=1h label="Minimum duration", terms:text label=label_RoomRequest_terms, refund_notice:duration label="Refund notice period", buffer_before:duration=0m label="Buffer before", buffer_after:duration=0m label="Buffer after", amenities:text[] label="Amenities", accessibility:text label="Accessibility" } label="Workspace resource"
  DayCalendar in Resource { day:date unique, opens:text="09:00", closes:text="18:00", closed:bool=false, fold:enum(earlier,later)=earlier label={text="Repeated local time",values={earlier="Earlier occurrence",later="Later occurrence"}} } label="Published day access"
  Window in Resource { from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, closed:bool=false label="Closed", reason:text? } label="Availability window"
  export Booking in Resource { billing_location:Location?, sale_product:text?, purchased_at:datetime?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, customer:Customer label="Customer", account:user label=label_RoomRequest_account, email:email, from:datetime label=label_RoomRequest_from, until:datetime label=label_RoomRequest_until, approval:BillingProfile? label="Invoice account approval", approval_version:int? label="Approval revision", fulfillment_reason:text? label="Fulfillment reason", quote:AcceptedOffer? label="Accepted quote snapshot", benefit_intervals:BenefitInterval[], benefit_rate:money?, benefit_unit:Resource.price_unit=hour label={text="Allowance unit",values={hour="Hour",day="Day"}}, benefit_duration:duration=1h, arrival_buffer:duration=0m, monetary_due:money? label="Original monetary obligation", service_due:money? label="Current service balance", allowance_base:money?, allowance_discount:money?, allowance_tax:money?, allowance_units:decimal? label="Requested units", included_units:decimal? label="Included units", allowance_source:text?, allowance_revision:int=0, allowance_reconcile_delivery:text?, original_intervals:BookingInterval[], intervals:BookingInterval[] label="Frozen access intervals", quantity:int=1 min=1, attendees:int=1 min=1 label="Attendees", tax_fraction:decimal=0, discount_fraction:decimal=0, subtotal:money label="Subtotal", tax:money label="Frozen tax", discount:money label="Frozen discount", refund_amount:money label="Refundable amount", refund_requested:money? label="Requested refund amount", rate:money label="Frozen rate", total:money, terms:text label=label_RoomRequest_terms, refund_before:datetime label="Refund deadline", reserved_from:datetime label="Capacity reserved from", reserved_until:datetime label="Capacity reserved until", expires:datetime label="Expires at", status:enum(held,pending,confirmed,occupied,completed,cancelled,expired,review,no_show)=held label={text="Status",values={held="Held",pending=label_Booking_status_pending,confirmed="Confirmed",occupied="Occupied",completed="Completed",cancelled="Cancelled",expired="Expired",review="Review required",no_show="No-show"}}, payment:enum(unpaid,pending,unknown,paid,refunded,free,on_account)=unpaid label={text="Payment outcome",values={pending=label_Booking_status_pending,unpaid="Unpaid",unknown="Unknown",paid="Paid",refunded="Refunded",free="Included or free",on_account="On approved account"}}, invoice:text? label="Invoice reference", allowance:enum(not_required,pending,reserved,consumed,released,failed)=not_required label={text="Membership allowance",values={pending=label_Booking_status_pending,not_required="Not required",reserved="Reserved",consumed="Consumed",released="Released",failed="Failed"}}, source:text unique label=label_RoomRequest_source, checked_in:datetime? label="Actual arrival", overdue:bool=false label="Overdue occupancy", checked_out:datetime? label="Actual departure", cancellation_restore:bool=false label="Restore refundable allowance", cancellation_reason:text? label="Cancellation reason", billing_delivery:text? label="Billing delivery", allowance_delivery:text? label="Allowance reservation delivery", consume_delivery:text? label="Allowance consumption delivery", release_delivery:text? label="Allowance release delivery", refund_delivery:text? label="Refund request", refund_state:enum(none,pending,unknown,refunded,review)=none label="Refund outcome", collected:money?, refunded:money?, collection_pending:bool=false, refund_pending:bool=false, reconcile_delivery:text?, cancel_delivery:text?,settlement_revision:int=0 label="Settlement revision", departure_buffer:duration=0m label="Departure buffer" } label="Booking"
  Downtime in Resource { source:text unique label=label_RoomRequest_source, from:datetime label=label_RoomRequest_from, until:datetime? label=label_RoomRequest_until, reason:text, active:bool=true, verified_by:user? label="Verified by", verification:text? label="Repair verification" } label="Repair block"
  CapacityRevision in Resource { capacity:int min=1, effective:datetime server=now label="Effective at", reason:text } label="Capacity revision"
  Conflict in Resource { booking:Booking, downtime:Downtime?, reason:text, resolved:bool=false, resolution:text? } label="Reservation conflict"
  Desk in Resource { name:text trim min=1 unique, active:bool=true } label="Pool desk"
  Assignment in Booking { desk:Desk, from:datetime, until:datetime } label="Dated desk assignment"
  Adjustment in Booking { source:text unique, amount:money, reason:text, delivery:text?, state:enum(pending,paid,expired,review,refunded)=pending label={text="State",values={pending="Pending",paid="Paid",expired="Expired",review="Review required",refunded="Refunded"}}, original_until:datetime?, original_reserved_until:datetime?, new_until:datetime?, expires:datetime?, refund_delivery:text?, invoice:text?, movement:Movement?, settlement_revision:int=0, collected:money?, refunded:money? } label="Separate booking adjustment"
  export Notice in Booking { kind:enum(confirmation,reminder,cancellation) label={text="Kind",values={confirmation="Confirmation",reminder="Reminder",cancellation="Cancellation"}}, revision:int, subject:text, body:text, delivery:delivery(Mail.send)? } label="Booking correspondence"
  derive Notice.state:DeliveryResult.status? = row.delivery?.status label={text="State",values={pending="Pending",succeeded="Succeeded",failed="Failed",unknown="Unknown",skipped="Skipped"}}
  MovementCredit in Movement { charge_source:text, amount:money, baseline:money, delivery:text unique, state:enum(pending,paid,failed,unknown,review)=pending label={text="State",values={pending="Pending",paid="Paid",failed="Failed",unknown="Unknown",review="Review required"}}, reason:text } label="Movement credit"
  export Movement in Booking { source:text unique, intervals:BenefitInterval[]!, expires:datetime, state:enum(holding,waiting_money,committing,adopted,cancelling,cancelled,review)=holding label={text="State",values={holding="Holding candidate",waiting_money="Awaiting balance",committing="Committing replacement",adopted="Replacement adopted",cancelling="Cleanup pending",cancelled="Cancelled",review="Review required"}}, extra_due:money?, extra_paid:bool=false, extra_delivery:text?, extra_revision:int=0, credit_due:money?, release_restore:bool=false, reserve_delivery:text?, commit_delivery:text?, release_delivery:text?, reconcile_delivery:text?, outcome:AllowanceOutcome? } label="Replacement workspace hold"
  CommercialSale in Booking { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  ResourcePolicy in Resource { effective:datetime server=now,sequence:int,baseline:bool=false,value:ResourceEvidence }
  BookingEvidence in Resource { sequence:int,key:text,value:ReportBooking? }
  VenueEvidence in Resource { sequence:int,key:text,value:ReportVenue? }
  WindowEvidence in Resource { sequence:int,key:text,value:ReportWindow? }
  DowntimeEvidence in Resource { sequence:int,key:text,value:ReportDowntime? }
