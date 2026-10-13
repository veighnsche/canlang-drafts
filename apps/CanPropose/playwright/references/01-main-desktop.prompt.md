Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanPropose. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /offers title="Offers" 
  page /offers/respond/{Revision.id} title="Your offer" 
Selected page and hierarchy/controls:
  page /offers title="Offers" $ProposeWorkspace
   require salesperson
   breadcrumbs
   card "Customer selection"
    list Customer empty="No customers in scope."
     pagination
     form Proposal.create
   card "Offer drafts"
    list Proposal filter=location search=title defaults={location=preferences.location} display=split empty="No proposals match these filters."
     pagination
     edit
     form revise
      fieldset "Revision terms"
       textarea terms
       input resource
       input seats
       input quantity
       input product
     list row.Revision order=-number filter=state,handoff defaults={state=preferences.state} empty="No revisions recorded."
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
       tab "Frozen revisions and items"
        form Item.create
         fieldset heading_itemized_quote
          input title
          input quantity
          input unit
        list row.Item empty="No items recorded."
         pagination
         edit
         delete
       tab "Booking follow-up"
        actions send_offer,document,request_booking,retry_hold_release,recover_hold
        button opens=hold_detail
        modal "Hold quoted inventory" id=hold_detail
         slot content
          form hold_inventory arguments={revision=row} display=inline
           input until
        button opens=alternative_detail
        modal "Prepare sold-out alternative" id=alternative_detail
         slot content
          form offer_alternative arguments={revision=row} display=inline
           fieldset "Alternative terms"
            input resource
            input from
            input until
            textarea terms
            input refund_before
            input product
        collapse "New offer required"
         require row.handoff==unavailable and row.booking==null
         text "This accepted revision cannot be booked again. Prepare a new alternative revision for the recipient to review."
        collapse "Existing booking needs review"
         require row.handoff==unavailable and row.booking!=null
         text "Use the recorded booking and invoice references to resolve cancellation, payment or refund work in Workspace. A separate new offer does not replace those obligations."
        copy app_url(format("/offers/respond/{id}",{id=row.id}))
        history

  # Review the exact addressed offer and its separate booking outcome. 
Source style intent:
  style ProposeWorkspace $"Use a polished but restrained offer layout with readable customer context and aligned itemized currency amounts. Distinguish editable drafts, frozen revisions, recipient decisions, and booking follow-up outcomes; keep exact revision details prominent during review. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message heading_itemized_quote = "Itemized quote"
  message label_QuoteLine_tax = "Tax"
  message label_QuoteLine_discount = "Discount"
  message label_QuoteDocument_issuer = "Issuer"
  message label_QuoteDocument_recipient = "Recipient"
  message label_QuoteDocument_from = "Start"
  message label_QuoteDocument_until = "End"
  message label_QuoteDocument_terms = "Terms"
  message label_QuoteDocument_expires = "Expires at"
  message label_QuotePdf_document = "Generate quote document"
  message label_Revision_resource = "Resource reference"
  message label_Revision_seats = "Seats"
  export Proposal in Customer { location:Location, recipient:Contact label=label_QuoteDocument_recipient, issuer:text label=label_QuoteDocument_issuer, title:text, currency:currency, valid_days:int=14 min=1 label="Validity in days", current:int=0 label="Current revision" } label="Proposal"
  export Revision in Proposal { product:text? label="Product code", attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, number:int label="Offer revision number", issuer_snapshot:text label="Frozen issuer", title_snapshot:text label="Frozen title", location_snapshot:text label="Frozen location", customer_snapshot:text label="Frozen customer", alternative_to:Revision? label="Alternative to revision", recipient_email:email label="Recipient email", account:user? label="Account", expires:datetime label=label_QuoteDocument_expires, terms:text label=label_QuoteDocument_terms, refund_before:datetime label="Frozen refund deadline", resource:text? label=label_Revision_resource, from:datetime label=label_QuoteDocument_from, until:datetime label=label_QuoteDocument_until, intervals:QuoteInterval[] label="Exact service intervals", seats:int=1 min=1 label=label_Revision_seats, quantity:int=1 min=1 label="Capacity units", held_until:datetime? label="Hold deadline", total:money, state:enum(draft,sent,accepted,declined,withdrawn)=draft label={text="State",values={draft="Draft",sent="Sent",accepted="Accepted",declined="Declined",withdrawn="Withdrawn"}}, decided_by:user? label="Decided by", decided_at:datetime? label="Decided at", handoff:enum(none,pending,confirmed,unavailable,unknown,alternative_selected)=none label={text="Booking handoff",values={none="None",pending="Pending",confirmed="Confirmed",unavailable="Accepted; awaiting alternative",unknown="Unknown",alternative_selected="Alternative accepted"}}, delivery:text? label="Delivery reference", booking:text? label="Booking reference", invoice:text? label="Invoice reference", hold_state:enum(none,pending,held,releasing,released,unavailable,unknown,expired)=none label={text="Inventory hold outcome",values={none="Not held",pending="Hold pending",held="Held until deadline",releasing="Release pending",released="Released",unavailable="Unavailable",unknown="Unknown",expired="Expired"}}, booking_version:int=0, hold_version:int=0, hold_delivery:text?, hold_release:text?, notice:delivery(Mail.send)?, document_state:enum(none,pending,ready,failed,unknown,skipped)=none label={text="Document outcome",values={none="Not requested",pending="Pending",ready="Ready",failed="Failed",unknown="Unknown",skipped="Skipped"}}, document:delivery(Documents.quote)? label="Document request", pdf:file? label="PDF document" } label="Offer revision"
  export Item in Revision { title:text, quantity:decimal=1 min=0, unit:text label="Unit", price:money, tax:money label=label_QuoteLine_tax, discount:money label=label_QuoteLine_discount } label="Quote item"
  derive Revision.notice_state:DeliveryResult.status? = row.notice?.status label="Offer notice"
  derive Revision.document_delivery_state:DeliveryResult.status? = row.document?.status label="Document delivery"
