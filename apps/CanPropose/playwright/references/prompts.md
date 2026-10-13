# CanPropose exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-offers-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPropose/playwright/references/02-offers-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Remove Your offer from sidebar because it is contextual token route. In selected revision2 change state Sent to Accepted (pending booking handoff is after acceptance). Remove Add item and edit/delete item controls for this frozen accepted revision. Keep creation of a new draft revision available. Preserve other layout. Preserve existing full-page design, LEFT sidebar and bottom-right account. No new operation or metrics. One actual full-page image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPropose. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /offers title="Offers"@{nl="Offertes"} $ProposeWorkspace
  page /offers/respond/{Revision.id} title="Your offer"@{nl="Jouw offerte"} $ProposeWorkspace
SELECTED PAGE:
  page /offers title="Offers"@{nl="Offertes"} $ProposeWorkspace
   require salesperson
   breadcrumbs
   card "Customer selection"@{nl="Klantselectie"}
    list Customer empty="No customers in scope."@{nl="Geen klanten binnen scope."}
     pagination
     form Proposal.create
   card "Offer drafts"@{nl="Conceptoffertes"}
    list Proposal filter=location search=title defaults={location=preferences.location} display=split empty="No proposals match these filters."@{nl="Geen offertes voor deze filters."}
     pagination
     edit
     form revise
      fieldset "Revision terms"@{nl="Versievoorwaarden"}
       textarea terms
       input resource
       input seats
       input quantity
       input product
     list row.Revision order=-number filter=state,handoff defaults={state=preferences.state} empty="No revisions recorded."@{nl="Geen versies vastgelegd."}
      pagination
      badge row.state
      badge row.handoff
      badge row.hold_state
      badge row.document_state
      ## notice_state and document_delivery_state are nullable delivery derives: status.
      status row.notice_state
      status row.document_delivery_state
      text row.number,row.issuer_snapshot,row.customer_snapshot,row.title_snapshot,row.location_snapshot,row.recipient_email,row.resource,row.from,row.until,row.seats,row.quantity,row.terms,row.refund_before,row.expires,row.total,row.state,row.handoff,row.booking,row.invoice,row.hold_state,row.held_until,row.document_state,row.pdf
      tabs
       tab "Frozen revisions and items"@{nl="Vastgelegde versies en regels"}
        form Item.create
         fieldset heading_itemized_quote
          input title
          input quantity
          input unit
        list row.Item empty="No items recorded."@{nl="Geen offerteregels vastgelegd."}
         pagination
         edit
         delete
       tab "Booking follow-up"@{nl="Boekingsopvolging"}
        actions send_offer,document,request_booking,retry_hold_release,recover_hold
        button opens=hold_detail
        modal "Hold quoted inventory"@{nl="Geoffreerde voorraad tijdelijk reserveren"} id=hold_detail
         slot content
          form hold_inventory arguments={revision=row} display=inline
           input until
        button opens=alternative_detail
        modal "Prepare sold-out alternative"@{nl="Alternatief bij uitverkoop voorbereiden"} id=alternative_detail
         slot content
          form offer_alternative arguments={revision=row} display=inline
           fieldset "Alternative terms"@{nl="Alternatieve voorwaarden"}
            input resource
            input from
            input until
            textarea terms
            input refund_before
            input product
        collapse "New offer required"@{nl="Nieuwe offerte vereist"}
         require row.handoff==unavailable and row.booking==null
         text "This accepted revision cannot be booked again. Prepare a new alternative revision for the recipient to review."@{nl="Deze geaccepteerde versie kan niet opnieuw worden geboekt. Bereid een nieuwe alternatieve versie voor die de ontvanger kan beoordelen."}
        collapse "Existing booking needs review"@{nl="Bestaande boeking vereist beoordeling"}
         require row.handoff==unavailable and row.booking!=null
         text "Use the recorded booking and invoice references to resolve cancellation, payment or refund work in Workspace. A separate new offer does not replace those obligations."@{nl="Gebruik de vastgelegde boekings- en factuurreferenties om annulering, betaling of terugbetaling in Workspace af te handelen. Een afzonderlijke nieuwe offerte vervangt die verplichtingen niet."}
        copy app_url(format("/offers/respond/{id}",{id=row.id}))
        history

OWNING LABELS/DATA/FORMS/STYLES:
  message heading_itemized_quote = "Itemized quote"@{nl="Gespecificeerde offerte"}
  message label_QuoteLine_tax = "Tax"@{nl="Belasting"}
  message label_QuoteLine_discount = "Discount"@{nl="Korting"}
  message label_QuoteDocument_issuer = "Issuer"@{nl="Uitgever"}
  message label_QuoteDocument_recipient = "Recipient"@{nl="Ontvanger"}
  message label_QuoteDocument_from = "Start"@{nl="Begin"}
  message label_QuoteDocument_until = "End"@{nl="Einde"}
  message label_QuoteDocument_terms = "Terms"@{nl="Voorwaarden"}
  message label_QuoteDocument_expires = "Expires at"@{nl="Vervalt op"}
  message label_QuotePdf_document = "Generate quote document"@{nl="Offertedocument genereren"}
  message label_Revision_resource = "Resource reference"@{nl="Referentie voorziening"}
  message label_Revision_seats = "Seats"@{nl="Plaatsen"}
  role salesperson label="Salesperson"@{nl="Verkoper"}
  export Proposal in Customer { location:Location, recipient:Contact label=label_QuoteDocument_recipient, issuer:text label=label_QuoteDocument_issuer, title:text, currency:currency, valid_days:int=14 min=1 label="Validity in days"@{nl="Geldigheid in dagen"}, current:int=0 label="Current revision"@{nl="Huidige versie"} } label="Proposal"@{nl="Offerte"}
  export Revision in Proposal { product:text? label="Product code"@{nl="Productcode"}, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, number:int label="Offer revision number"@{nl="Offerteversienummer"}, issuer_snapshot:text label="Frozen issuer"@{nl="Vastgelegde uitgever"}, title_snapshot:text label="Frozen title"@{nl="Vastgelegde titel"}, location_snapshot:text label="Frozen location"@{nl="Vastgelegde locatie"}, customer_snapshot:text label="Frozen customer"@{nl="Vastgelegde klant"}, alternative_to:Revision? label="Alternative to revision"@{nl="Alternatief voor offerteversie"}, recipient_email:email label="Recipient email"@{nl="E-mailadres ontvanger"}, account:user? label="Account"@{nl="Account"}, expires:datetime label=label_QuoteDocument_expires, terms:text label=label_QuoteDocument_terms, refund_before:datetime label="Frozen refund deadline"@{nl="Vastgelegde terugbetalingsdeadline"}, resource:text? label=label_Revision_resource, from:datetime label=label_QuoteDocument_from, until:datetime label=label_QuoteDocument_until, intervals:QuoteInterval[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"}, seats:int=1 min=1 label=label_Revision_seats, quantity:int=1 min=1 label="Capacity units"@{nl="Capaciteitseenheden"}, held_until:datetime? label="Hold deadline"@{nl="Reserveringsdeadline"}, total:money, state:enum(draft,sent,accepted,declined,withdrawn)=draft label={text="State"@{nl="Status"},values={draft="Draft"@{nl="Concept"},sent="Sent"@{nl="Verstuurd"},accepted="Accepted"@{nl="Geaccepteerd"},declined="Declined"@{nl="Afgewezen"},withdrawn="Withdrawn"@{nl="Ingetrokken"}}}, decided_by:user? label="Decided by"@{nl="Besloten door"}, decided_at:datetime? label="Decided at"@{nl="Besloten op"}, handoff:enum(none,pending,confirmed,unavailable,unknown,alternative_selected)=none label={text="Booking handoff"@{nl="Boekingsoverdracht"},values={none="None"@{nl="Geen"},pending="Pending"@{nl="In afwachting"},confirmed="Confirmed"@{nl="Bevestigd"},unavailable="Accepted; awaiting alternative"@{nl="Geaccepteerd; wacht op alternatief"},unknown="Unknown"@{nl="Onbekend"},alternative_selected="Alternative accepted"@{nl="Alternatief geaccepteerd"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"}, booking:text? label="Booking reference"@{nl="Boekingsreferentie"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, hold_state:enum(none,pending,held,releasing,released,unavailable,unknown,expired)=none label={text="Inventory hold outcome"@{nl="Resultaat voorraadreservering"},values={none="Not held"@{nl="Niet gereserveerd"},pending="Hold pending"@{nl="Reservering in behandeling"},held="Held until deadline"@{nl="Gereserveerd tot deadline"},releasing="Release pending"@{nl="Vrijgave in behandeling"},released="Released"@{nl="Vrijgegeven"},unavailable="Unavailable"@{nl="Niet beschikbaar"},unknown="Unknown"@{nl="Onbekend"},expired="Expired"@{nl="Verlopen"}}}, booking_version:int=0, hold_version:int=0, hold_delivery:text?, hold_release:text?, notice:delivery(Mail.send)?, document_state:enum(none,pending,ready,failed,unknown,skipped)=none label={text="Document outcome"@{nl="Documentresultaat"},values={none="Not requested"@{nl="Niet aangevraagd"},pending="Pending"@{nl="In behandeling"},ready="Ready"@{nl="Gereed"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"},skipped="Skipped"@{nl="Overgeslagen"}}}, document:delivery(Documents.quote)? label="Document request"@{nl="Documentaanvraag"}, pdf:file? label="PDF document"@{nl="PDF-document"} } label="Offer revision"@{nl="Offerteversie"}
  export Item in Revision { title:text, quantity:decimal=1 min=0, unit:text label="Unit"@{nl="Eenheid"}, price:money, tax:money label=label_QuoteLine_tax, discount:money label=label_QuoteLine_discount } label="Quote item"@{nl="Offerteregel"}
  export scenario revise(proposal:Proposal,terms:text label=label_QuoteDocument_terms,resource:text? label=label_Revision_resource,from:datetime label=label_QuoteDocument_from,until:datetime label=label_QuoteDocument_until,seats:int label=label_Revision_seats,quantity:int=1 label="Capacity units"@{nl="Capaciteitseenheden"},refund_before:datetime=from label="Refund deadline"@{nl="Terugbetalingsdeadline"},intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) -> Revision by=salesperson label="Create revision"@{nl="Nieuwe versie maken"}
  export scenario send_offer(revision:Revision) by=salesperson label="Send offer"@{nl="Offerte versturen"}
  export scenario document(revision:Revision) by=salesperson or authenticated label=label_QuotePdf_document
  scenario document_result on=Documents.quote.completed
  scenario decide(revision:Revision,accept:bool label="Accept"@{nl="Accepteren"},capture:Capture?=null) by=authenticated label="Record decision"@{nl="Besluit vastleggen"}
  scenario hold_inventory(revision:Revision,until:datetime) by=salesperson label="Hold quoted inventory"@{nl="Geoffreerde voorraad tijdelijk reserveren"}
  scenario hold_result on=Rooms.hold_offer.completed
  export scenario request_booking(revision:Revision) by=authenticated or salesperson label="Request booking"@{nl="Boeking aanvragen"}
  scenario booked on=Rooms.accept_offer.completed
  scenario offer_changed on=Rooms.offer_changed
  scenario offer_alternative(revision:Revision,resource:text,from:datetime,until:datetime,terms:text,refund_before:datetime=from,intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) by=salesperson label="Prepare sold-out alternative"@{nl="Alternatief bij uitverkoop voorbereiden"}
  scenario revision_created on=Revision.created
  scenario revision_updated on=Revision.updated
  scenario recover_hold(revision:Revision) by=salesperson label="Resume hold follow-up"@{nl="Voorraadopvolging hervatten"}
  scenario expire_holds on=HoldProgress
  scenario hold_deadline on=HoldDeadline
  scenario hold_released on=Rooms.release_offer.completed
  scenario retry_hold_release(revision:Revision) by=salesperson label="Retry hold release"@{nl="Vrijgave voorraad opnieuw proberen"}
  style ProposeWorkspace $"Use a polished but restrained offer layout with readable customer context and aligned itemized currency amounts. Distinguish editable drafts, frozen revisions, recipient decisions, and booking follow-up outcomes; keep exact revision details prominent during review. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, state:Revision.state?, items_open:bool=true label="Expand itemized quote"@{nl="Offerteregels uitklappen"} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Offers is the staff navigation index; accepted-awaiting-booking/action queues sit within it. Recipient response routes are contextual links from the addressed revision, not unbound global destinations. Tokens locate quotes; stored verified recipient identity authorizes reading/deciding.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| Offers — permitted sales index | Location/customer filters with breadcrumbs; proposal List with placed revise-term Fieldset and pagination; revision rows with state/handoff/hold/document Badges and notice/document-delivery Statuses, pagination, item tab with placed item controls; follow-up tab with hold/alternative Modals, Collapse guidance and response-link copy | Create proposals/items through owning actions; revise before sending, send/freeze a priced revision and copy its response link |
| Revision detail — contextual staff view | Revision history List with issuer/customer snapshots, location/resource, seats, service interval, terms, contextual Badges, document Button and history | Create a fresh revision when terms change; retain/withdraw old response links according to the canonical workflow |
| Your offer — contextual verified-recipient view | Frozen-facts Card with state/handoff Badges; preference-controlled itemized Collapse; Modal decision flow with accept Checkbox; document/booking actions; gated inventory Collapse states | Accept/decline only the current sent unexpired revision; print/download the frozen quote and view the recorded decision |
| Booking follow-up — staff queue/contextual recipient outcome | Handoff Badges with gated next-step Collapses; required next steps and explicit pending/confirmed/unavailable handoff outcome | Request reservation through the owning availability authority; preserve accepted price/terms and resolve sold-out results without false confirmation |

Stack item labels and complete totals/terms on mobile; keep decision and expiry context together. Distinguish loading, no offers and no queue/filter matches; preserve unsaved draft items or decision input after failure. A withdrawn/expired old link remains readable as allowed but has no active decision control. Stale pricing explains the current revision instead of silently accepting changed terms. Separate failed email/document generation from quote state. A pending inventory handoff never becomes a confirmed booking on browser return, and an expired hold cannot promise availability. No additional sales/recipient administration console; exclude provider/integration setup from settings.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  export scenario revise(proposal:Proposal,terms:text label=label_QuoteDocument_terms,resource:text? label=label_Revision_resource,from:datetime label=label_QuoteDocument_from,until:datetime label=label_QuoteDocument_until,seats:int label=label_Revision_seats,quantity:int=1 label="Capacity units"@{nl="Capaciteitseenheden"},refund_before:datetime=from label="Refund deadline"@{nl="Terugbetalingsdeadline"},intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) -> Revision by=salesperson label="Create revision"@{nl="Nieuwe versie maken"}
  scenario hold_inventory(revision:Revision,until:datetime) by=salesperson label="Hold quoted inventory"@{nl="Geoffreerde voorraad tijdelijk reserveren"}
  scenario offer_alternative(revision:Revision,resource:text,from:datetime,until:datetime,terms:text,refund_before:datetime=from,intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) by=salesperson label="Prepare sold-out alternative"@{nl="Alternatief bij uitverkoop voorbereiden"}
```

## 03-offers-respond-Revision.id-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPropose/playwright/references/03-offers-respond-Revision.id-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Customer view: remove Offers and Your offer sidebar links entirely (token destination contextual; no admitted staff links). Keep app wordmark and bottom-right account. Fix quote arithmetic: meeting960 + catering300 = total1260 EUR; base1050, tax210. Update all displayed total1210/base1010 to1260/1050 consistently. Move offer start/end from12Oct to27Oct2026, refunddeadline20Oct2026; expires/hold26Oct2026 unchanged. Current location label replaces Riverside Meeting Center. Disable Request booking while Sent and not yet accepted, keep decision available. Preserve layout. Preserve existing full-page design, LEFT sidebar and bottom-right account. No new operation or metrics. One actual full-page image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPropose. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /offers title="Offers"@{nl="Offertes"} $ProposeWorkspace
  page /offers/respond/{Revision.id} title="Your offer"@{nl="Jouw offerte"} $ProposeWorkspace
SELECTED PAGE:
  page /offers/respond/{Revision.id} title="Your offer"@{nl="Jouw offerte"} $ProposeWorkspace
   require authenticated
   breadcrumbs
   card "Frozen offer facts"@{nl="Vastgelegde offertegegevens"}
    badge row.state
    badge row.handoff
    text row.issuer_snapshot,row.customer_snapshot,row.title_snapshot,row.location_snapshot,row.from,row.until,row.seats,row.quantity,row.terms,row.refund_before,row.expires,row.state,row.handoff,row.total
   card heading_itemized_quote
    collapse heading_itemized_quote open=preferences.items_open
     table row.Item columns=title,quantity,unit,price,tax,discount empty="No items recorded."@{nl="Geen offerteregels vastgelegd."}
      pagination
   card "Decision and booking outcome"@{nl="Besluit en boekingsresultaat"}
    button opens=decide_detail
    modal "Record decision"@{nl="Besluit vastleggen"} id=decide_detail
     slot content
      form decide arguments={revision=row} display=inline
       checkbox accept
    actions document,request_booking
    status row.notice_state
    status row.document_delivery_state
    text row.pdf,row.document_state,row.booking,row.invoice
    collapse "New offer required"@{nl="Nieuwe offerte vereist"}
     require row.handoff==unavailable and row.booking==null
     text "The reservation is unavailable. Sales can prepare a new offer; its price and terms require a new decision."@{nl="De reservering is niet beschikbaar. Verkoop kan een nieuwe offerte voorbereiden; de prijs en voorwaarden vereisen een nieuw besluit."}
    collapse "Existing booking needs review"@{nl="Bestaande boeking vereist beoordeling"}
     require row.handoff==unavailable and row.booking!=null
     text "Your booking and invoice references remain available above. Review cancellation, payment or refund progress with the workspace operator."@{nl="Je boekings- en factuurreferenties blijven hierboven beschikbaar. Bespreek de voortgang van annulering, betaling of terugbetaling met de werkplekexploitant."}
    card "Inventory promise"@{nl="Voorraadtoezegging"}
     text row.held_until
     collapse "Held inventory"@{nl="Tijdelijk gereserveerde voorraad"}
      require row.hold_state==held and row.held_until!=null and row.held_until>now
      text "Inventory is held only until the displayed deadline."@{nl="Voorraad is uitsluitend tot de getoonde deadline gereserveerd."}
     collapse "Availability must be checked"@{nl="Beschikbaarheid moet worden gecontroleerd"}
      require row.hold_state!=held or row.held_until==null or row.held_until<=now
      text "Acceptance does not guarantee inventory or payment."@{nl="Acceptatie garandeert geen voorraad of betaling."}
OWNING LABELS/DATA/FORMS/STYLES:
  message heading_itemized_quote = "Itemized quote"@{nl="Gespecificeerde offerte"}
  message label_QuoteLine_tax = "Tax"@{nl="Belasting"}
  message label_QuoteLine_discount = "Discount"@{nl="Korting"}
  message label_QuoteDocument_issuer = "Issuer"@{nl="Uitgever"}
  message label_QuoteDocument_recipient = "Recipient"@{nl="Ontvanger"}
  message label_QuoteDocument_from = "Start"@{nl="Begin"}
  message label_QuoteDocument_until = "End"@{nl="Einde"}
  message label_QuoteDocument_terms = "Terms"@{nl="Voorwaarden"}
  message label_QuoteDocument_expires = "Expires at"@{nl="Vervalt op"}
  message label_QuotePdf_document = "Generate quote document"@{nl="Offertedocument genereren"}
  message label_Revision_resource = "Resource reference"@{nl="Referentie voorziening"}
  message label_Revision_seats = "Seats"@{nl="Plaatsen"}
  role salesperson label="Salesperson"@{nl="Verkoper"}
  export Proposal in Customer { location:Location, recipient:Contact label=label_QuoteDocument_recipient, issuer:text label=label_QuoteDocument_issuer, title:text, currency:currency, valid_days:int=14 min=1 label="Validity in days"@{nl="Geldigheid in dagen"}, current:int=0 label="Current revision"@{nl="Huidige versie"} } label="Proposal"@{nl="Offerte"}
  export Revision in Proposal { product:text? label="Product code"@{nl="Productcode"}, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, number:int label="Offer revision number"@{nl="Offerteversienummer"}, issuer_snapshot:text label="Frozen issuer"@{nl="Vastgelegde uitgever"}, title_snapshot:text label="Frozen title"@{nl="Vastgelegde titel"}, location_snapshot:text label="Frozen location"@{nl="Vastgelegde locatie"}, customer_snapshot:text label="Frozen customer"@{nl="Vastgelegde klant"}, alternative_to:Revision? label="Alternative to revision"@{nl="Alternatief voor offerteversie"}, recipient_email:email label="Recipient email"@{nl="E-mailadres ontvanger"}, account:user? label="Account"@{nl="Account"}, expires:datetime label=label_QuoteDocument_expires, terms:text label=label_QuoteDocument_terms, refund_before:datetime label="Frozen refund deadline"@{nl="Vastgelegde terugbetalingsdeadline"}, resource:text? label=label_Revision_resource, from:datetime label=label_QuoteDocument_from, until:datetime label=label_QuoteDocument_until, intervals:QuoteInterval[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"}, seats:int=1 min=1 label=label_Revision_seats, quantity:int=1 min=1 label="Capacity units"@{nl="Capaciteitseenheden"}, held_until:datetime? label="Hold deadline"@{nl="Reserveringsdeadline"}, total:money, state:enum(draft,sent,accepted,declined,withdrawn)=draft label={text="State"@{nl="Status"},values={draft="Draft"@{nl="Concept"},sent="Sent"@{nl="Verstuurd"},accepted="Accepted"@{nl="Geaccepteerd"},declined="Declined"@{nl="Afgewezen"},withdrawn="Withdrawn"@{nl="Ingetrokken"}}}, decided_by:user? label="Decided by"@{nl="Besloten door"}, decided_at:datetime? label="Decided at"@{nl="Besloten op"}, handoff:enum(none,pending,confirmed,unavailable,unknown,alternative_selected)=none label={text="Booking handoff"@{nl="Boekingsoverdracht"},values={none="None"@{nl="Geen"},pending="Pending"@{nl="In afwachting"},confirmed="Confirmed"@{nl="Bevestigd"},unavailable="Accepted; awaiting alternative"@{nl="Geaccepteerd; wacht op alternatief"},unknown="Unknown"@{nl="Onbekend"},alternative_selected="Alternative accepted"@{nl="Alternatief geaccepteerd"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"}, booking:text? label="Booking reference"@{nl="Boekingsreferentie"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, hold_state:enum(none,pending,held,releasing,released,unavailable,unknown,expired)=none label={text="Inventory hold outcome"@{nl="Resultaat voorraadreservering"},values={none="Not held"@{nl="Niet gereserveerd"},pending="Hold pending"@{nl="Reservering in behandeling"},held="Held until deadline"@{nl="Gereserveerd tot deadline"},releasing="Release pending"@{nl="Vrijgave in behandeling"},released="Released"@{nl="Vrijgegeven"},unavailable="Unavailable"@{nl="Niet beschikbaar"},unknown="Unknown"@{nl="Onbekend"},expired="Expired"@{nl="Verlopen"}}}, booking_version:int=0, hold_version:int=0, hold_delivery:text?, hold_release:text?, notice:delivery(Mail.send)?, document_state:enum(none,pending,ready,failed,unknown,skipped)=none label={text="Document outcome"@{nl="Documentresultaat"},values={none="Not requested"@{nl="Niet aangevraagd"},pending="Pending"@{nl="In behandeling"},ready="Ready"@{nl="Gereed"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"},skipped="Skipped"@{nl="Overgeslagen"}}}, document:delivery(Documents.quote)? label="Document request"@{nl="Documentaanvraag"}, pdf:file? label="PDF document"@{nl="PDF-document"} } label="Offer revision"@{nl="Offerteversie"}
  export Item in Revision { title:text, quantity:decimal=1 min=0, unit:text label="Unit"@{nl="Eenheid"}, price:money, tax:money label=label_QuoteLine_tax, discount:money label=label_QuoteLine_discount } label="Quote item"@{nl="Offerteregel"}
  export scenario revise(proposal:Proposal,terms:text label=label_QuoteDocument_terms,resource:text? label=label_Revision_resource,from:datetime label=label_QuoteDocument_from,until:datetime label=label_QuoteDocument_until,seats:int label=label_Revision_seats,quantity:int=1 label="Capacity units"@{nl="Capaciteitseenheden"},refund_before:datetime=from label="Refund deadline"@{nl="Terugbetalingsdeadline"},intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) -> Revision by=salesperson label="Create revision"@{nl="Nieuwe versie maken"}
  export scenario send_offer(revision:Revision) by=salesperson label="Send offer"@{nl="Offerte versturen"}
  export scenario document(revision:Revision) by=salesperson or authenticated label=label_QuotePdf_document
  scenario document_result on=Documents.quote.completed
  scenario decide(revision:Revision,accept:bool label="Accept"@{nl="Accepteren"},capture:Capture?=null) by=authenticated label="Record decision"@{nl="Besluit vastleggen"}
  scenario hold_inventory(revision:Revision,until:datetime) by=salesperson label="Hold quoted inventory"@{nl="Geoffreerde voorraad tijdelijk reserveren"}
  scenario hold_result on=Rooms.hold_offer.completed
  export scenario request_booking(revision:Revision) by=authenticated or salesperson label="Request booking"@{nl="Boeking aanvragen"}
  scenario booked on=Rooms.accept_offer.completed
  scenario offer_changed on=Rooms.offer_changed
  scenario offer_alternative(revision:Revision,resource:text,from:datetime,until:datetime,terms:text,refund_before:datetime=from,intervals:QuoteInterval[]=[] label="Exact service intervals"@{nl="Exacte gebruikstijdvakken"},product:text?=null label="Product code"@{nl="Productcode"}) by=salesperson label="Prepare sold-out alternative"@{nl="Alternatief bij uitverkoop voorbereiden"}
  scenario revision_created on=Revision.created
  scenario revision_updated on=Revision.updated
  scenario recover_hold(revision:Revision) by=salesperson label="Resume hold follow-up"@{nl="Voorraadopvolging hervatten"}
  scenario expire_holds on=HoldProgress
  scenario hold_deadline on=HoldDeadline
  scenario hold_released on=Rooms.release_offer.completed
  scenario retry_hold_release(revision:Revision) by=salesperson label="Retry hold release"@{nl="Vrijgave voorraad opnieuw proberen"}
  style ProposeWorkspace $"Use a polished but restrained offer layout with readable customer context and aligned itemized currency amounts. Distinguish editable drafts, frozen revisions, recipient decisions, and booking follow-up outcomes; keep exact revision details prominent during review. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, state:Revision.state?, items_open:bool=true label="Expand itemized quote"@{nl="Offerteregels uitklappen"} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Offers is the staff navigation index; accepted-awaiting-booking/action queues sit within it. Recipient response routes are contextual links from the addressed revision, not unbound global destinations. Tokens locate quotes; stored verified recipient identity authorizes reading/deciding.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| Offers — permitted sales index | Location/customer filters with breadcrumbs; proposal List with placed revise-term Fieldset and pagination; revision rows with state/handoff/hold/document Badges and notice/document-delivery Statuses, pagination, item tab with placed item controls; follow-up tab with hold/alternative Modals, Collapse guidance and response-link copy | Create proposals/items through owning actions; revise before sending, send/freeze a priced revision and copy its response link |
| Revision detail — contextual staff view | Revision history List with issuer/customer snapshots, location/resource, seats, service interval, terms, contextual Badges, document Button and history | Create a fresh revision when terms change; retain/withdraw old response links according to the canonical workflow |
| Your offer — contextual verified-recipient view | Frozen-facts Card with state/handoff Badges; preference-controlled itemized Collapse; Modal decision flow with accept Checkbox; document/booking actions; gated inventory Collapse states | Accept/decline only the current sent unexpired revision; print/download the frozen quote and view the recorded decision |
| Booking follow-up — staff queue/contextual recipient outcome | Handoff Badges with gated next-step Collapses; required next steps and explicit pending/confirmed/unavailable handoff outcome | Request reservation through the owning availability authority; preserve accepted price/terms and resolve sold-out results without false confirmation |

Stack item labels and complete totals/terms on mobile; keep decision and expiry context together. Distinguish loading, no offers and no queue/filter matches; preserve unsaved draft items or decision input after failure. A withdrawn/expired old link remains readable as allowed but has no active decision control. Stale pricing explains the current revision instead of silently accepting changed terms. Separate failed email/document generation from quote state. A pending inventory handoff never becomes a confirmed booking on browser return, and an expired hold cannot promise availability. No additional sales/recipient administration console; exclude provider/integration setup from settings.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario decide(revision:Revision,accept:bool label="Accept"@{nl="Accepteren"},capture:Capture?=null) by=authenticated label="Record decision"@{nl="Besluit vastleggen"}
```


