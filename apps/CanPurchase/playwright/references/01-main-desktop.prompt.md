Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanPurchase. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /purchasing/mine title="My requests" 
  page /purchasing title=page_purchasing_title 
Selected page and hierarchy/controls:
  page /purchasing/mine title="My requests" $PurchaseWorkspace
   require members
   breadcrumbs
   card "Own requests"
    form Request.create
     fieldset "Purchase request"
      textarea purpose
      input category
      input amount
      calendar required_by
    list Request as request where request.requester==actor order=request.required_by filter=state,location,supplier defaults={state=preferences.state,location=preferences.location,supplier=preferences.supplier} display=split empty="No requests yet."
     pagination
     badge row.state
     edit
     action submit
     text row.purpose,row.amount,row.required_by,row.state,row.decision,row.actual,row.evidence

  # Maintain supplier records and view affordable commitments and actual spending. 
Source style intent:
  style PurchaseWorkspace $"Favor clear purchase-request rows with location, required date, and aligned currency amounts. Make request details and approval state easy to scan; preserve the separation between affordable commitments, partial receipts, and spending evidence. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message page_purchasing_title = "Purchasing"
  message label_Request_state = "State"
  message label_Request_state_approved = "Approved"
  message label_Request_state_cancelled = "Cancelled"
  message label_Request_state_closed = "Closed"
  message label_Request_actual = "Actual spend"
  message label_Receipt_source = "Source reference"
  message label_Receipt_accepted = "Accepted quantity"
  message label_Receipt_rejected = "Rejected quantity"
  message label_Receipt_received = "Received at"
  Budget { name:text, locations:Location[] label="Locations", total:money, active:bool=true } label="Budget"
  Request in Budget { location:Location, supplier:Supplier, requester:user server=actor label="Requester", reviewer:user label="Reviewer", purpose:text label="Purpose", category:text label="Category", required_by:date label="Required by", amount:money, state:enum(draft,submitted,approved,rejected,cancelled,closed)=draft label={text=label_Request_state,values={draft="Draft",submitted="Submitted",approved=label_Request_state_approved,rejected="Rejected",cancelled=label_Request_state_cancelled,closed=label_Request_state_closed}}, decision:text? label="Decision", actual:money? label=label_Request_actual, evidence:text? } label="Purchase request"
  Order in Request { reference:text unique, supplier_name:text label="Frozen supplier name", supplier_contact:email label="Supplier email", location:Location, state:enum(ordered,part_received,received,cancelled,closed)=ordered label={text=label_Request_state,values={cancelled=label_Request_state_cancelled,closed=label_Request_state_closed,ordered="Ordered",part_received="Part received",received="Received"}} } label="Supplier order"
  Line in Order { sku:text label="SKU", unit:text label="Unit", quantity:int min=1, unit_price:money label="Unit price" } label="Line item"
  export Receipt in Line { source:text unique label=label_Receipt_source, accepted:int min=0 label=label_Receipt_accepted, rejected:int=0 min=0 label=label_Receipt_rejected, received:date label=label_Receipt_received, evidence:text, posting:enum(pending,confirmed,failed,unknown)=pending label={text="Stock posting outcome",values={pending="Pending",confirmed="Confirmed",failed="Failed",unknown="Unknown"}}, delivery:text? label="Delivery reference", revision:int=1, attempts:int=0 min=0 max=3 } label="Delivery receipt"
  Increase in Request { amount:money, reason:text, source:text unique } label="Authorization increase"
  Amendment in Line { quantity:int, reason:text, source:text unique } label="Order amendment"
  export Return in Receipt { source:text unique, quantity:int min=1, returned:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0 max=3 } label="Supplier return"
  Payable in Order { source:text unique, invoice:text, amount:money, issued:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0, reference:text? } label="Supplier invoice evidence"
  InvoiceDocument in Order { document:file label="Invoice document", source:text unique label=label_Receipt_source, status:enum(draft,transcribed,accepted,rejected)=draft label={text="Extraction review",values={draft="Draft",transcribed="Transcribed",accepted="Accepted",rejected="Rejected"}}, invoice:text? label="Claimed invoice number", amount:money? label="Claimed amount", issued:date? label="Claimed issue date", decision:text? label="Decision", payable:Payable? label="Accepted payable" } label="Supplier invoice document"
  Adjustment in Budget { request:Request, amount:money, reason:text, source:text unique label=label_Receipt_source } label="Spending adjustment"
  derive Budget.committed:money = sum(row.Request as request where request.state==approved select request.authorized,row.total.currency) label="Committed amount"
  derive Budget.spent:money = sum(row.Request as request where request.state==closed select (request.actual ?? money(0,row.total.currency)),row.total.currency)+sum(row.Adjustment as adjustment select adjustment.amount,row.total.currency) label=label_Request_actual
  derive Budget.remaining:money = row.total-row.committed-row.spent label="Remaining"
  derive Request.authorized:money = row.amount+sum(row.Increase as increase select increase.amount,row.amount.currency) label="Authorized amount"
  derive Line.ordered:int = row.quantity+sum(row.Amendment as amendment select amendment.quantity) label="Ordered quantity"
  derive Receipt.returned:int = sum(row.Return as returned select returned.quantity) label="Returned quantity"
  derive Line.accepted:int = sum(row.Receipt as receipt select receipt.accepted) label=label_Receipt_accepted
