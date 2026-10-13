# CanPurchase exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-purchasing-mine-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPurchase/playwright/references/02-purchasing-mine-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Complete canonical Request.create intake by adding required Budget(parent), Location, Supplier, Reviewer selectors; keep existing Purpose, Category, Amount, Required by. Source unbound parent Budget cannot be inferred from filters. Existing first request with recorded actual spend/evidence must be Closed, not Approved; keep its historic approval decision text. Disable Edit on both Closed and Submitted rows (CRUD edits Draft only). Preserve LEFT sidebar, top-left wordmark, bottom-left account and all other existing source controls/layout. ONE actual full-page desktop UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPurchase. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /purchasing/mine title="My requests"@{nl="Mijn aanvragen"} $PurchaseWorkspace
  page /purchasing title=page_purchasing_title $PurchaseWorkspace
SELECTED PAGE:
  page /purchasing/mine title="My requests"@{nl="Mijn aanvragen"} $PurchaseWorkspace
   require members
   breadcrumbs
   card "Own requests"@{nl="Eigen aanvragen"}
    form Request.create
     fieldset "Purchase request"@{nl="Inkoopaanvraag"}
      textarea purpose
      input category
      input amount
      calendar required_by
    list Request as request where request.requester==actor order=request.required_by filter=state,location,supplier defaults={state=preferences.state,location=preferences.location,supplier=preferences.supplier} display=split empty="No requests yet."@{nl="Nog geen aanvragen."}
     pagination
     badge row.state
     edit
     action submit
     text row.purpose,row.amount,row.required_by,row.state,row.decision,row.actual,row.evidence

OWNING LABELS/DATA/FORMS/STYLES:
  message page_purchasing_title = "Purchasing"@{nl="Inkoop"}
  message label_Request_state = "State"@{nl="Status"}
  message label_Request_state_approved = "Approved"@{nl="Goedgekeurd"}
  message label_Request_state_cancelled = "Cancelled"@{nl="Geannuleerd"}
  message label_Request_state_closed = "Closed"@{nl="Afgesloten"}
  message label_Request_actual = "Actual spend"@{nl="Werkelijke uitgaven"}
  message label_Receipt_source = "Source reference"@{nl="Bronreferentie"}
  message label_Receipt_accepted = "Accepted quantity"@{nl="Geaccepteerd aantal"}
  message label_Receipt_rejected = "Rejected quantity"@{nl="Afgekeurd aantal"}
  message label_Receipt_received = "Received at"@{nl="Ontvangen op"}
  role approver label="Purchase approver"@{nl="Inkoopbeoordelaar"}
  Budget { name:text, locations:Location[] label="Locations"@{nl="Locaties"}, total:money, active:bool=true } label="Budget"@{nl="Budget"}
  Request in Budget { location:Location, supplier:Supplier, requester:user server=actor label="Requester"@{nl="Aanvrager"}, reviewer:user label="Reviewer"@{nl="Beoordelaar"}, purpose:text label="Purpose"@{nl="Doel"}, category:text label="Category"@{nl="Categorie"}, required_by:date label="Required by"@{nl="Nodig op"}, amount:money, state:enum(draft,submitted,approved,rejected,cancelled,closed)=draft label={text=label_Request_state,values={draft="Draft"@{nl="Concept"},submitted="Submitted"@{nl="Ingediend"},approved=label_Request_state_approved,rejected="Rejected"@{nl="Afgewezen"},cancelled=label_Request_state_cancelled,closed=label_Request_state_closed}}, decision:text? label="Decision"@{nl="Besluit"}, actual:money? label=label_Request_actual, evidence:text? } label="Purchase request"@{nl="Inkoopaanvraag"}
  Order in Request { reference:text unique, supplier_name:text label="Frozen supplier name"@{nl="Vastgelegde leveranciersnaam"}, supplier_contact:email label="Supplier email"@{nl="E-mailadres leverancier"}, location:Location, state:enum(ordered,part_received,received,cancelled,closed)=ordered label={text=label_Request_state,values={cancelled=label_Request_state_cancelled,closed=label_Request_state_closed,ordered="Ordered"@{nl="Besteld"},part_received="Part received"@{nl="Gedeeltelijk ontvangen"},received="Received"@{nl="Ontvangen"}}} } label="Supplier order"@{nl="Leveranciersbestelling"}
  Line in Order { sku:text label="SKU"@{nl="SKU"}, unit:text label="Unit"@{nl="Eenheid"}, quantity:int min=1, unit_price:money label="Unit price"@{nl="Eenheidsprijs"} } label="Line item"@{nl="Regel"}
  export Receipt in Line { source:text unique label=label_Receipt_source, accepted:int min=0 label=label_Receipt_accepted, rejected:int=0 min=0 label=label_Receipt_rejected, received:date label=label_Receipt_received, evidence:text, posting:enum(pending,confirmed,failed,unknown)=pending label={text="Stock posting outcome"@{nl="Resultaat voorraadboeking"},values={pending="Pending"@{nl="In afwachting"},confirmed="Confirmed"@{nl="Bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"}, revision:int=1, attempts:int=0 min=0 max=3 } label="Delivery receipt"@{nl="Ontvangstregistratie"}
  Increase in Request { amount:money, reason:text, source:text unique } label="Authorization increase"@{nl="Autorisatieverhoging"}
  Amendment in Line { quantity:int, reason:text, source:text unique } label="Order amendment"@{nl="Bestelwijziging"}
  export Return in Receipt { source:text unique, quantity:int min=1, returned:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0 max=3 } label="Supplier return"@{nl="Leveranciersretour"}
  Payable in Order { source:text unique, invoice:text, amount:money, issued:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0, reference:text? } label="Supplier invoice evidence"@{nl="Leveranciersfactuurbewijs"}
  InvoiceDocument in Order { document:file label="Invoice document"@{nl="Factuurdocument"}, source:text unique label=label_Receipt_source, status:enum(draft,transcribed,accepted,rejected)=draft label={text="Extraction review"@{nl="Extractiebeoordeling"},values={draft="Draft"@{nl="Concept"},transcribed="Transcribed"@{nl="Overgenomen"},accepted="Accepted"@{nl="Geaccepteerd"},rejected="Rejected"@{nl="Afgewezen"}}}, invoice:text? label="Claimed invoice number"@{nl="Geclaimd factuurnummer"}, amount:money? label="Claimed amount"@{nl="Geclaimd bedrag"}, issued:date? label="Claimed issue date"@{nl="Geclaimde uitgiftedatum"}, decision:text? label="Decision"@{nl="Besluit"}, payable:Payable? label="Accepted payable"@{nl="Geaccepteerde schuld"} } label="Supplier invoice document"@{nl="Leveranciersfactuurdocument"}
  Adjustment in Budget { request:Request, amount:money, reason:text, source:text unique label=label_Receipt_source } label="Spending adjustment"@{nl="Uitgavenaanpassing"}
  scenario submit(request:Request) by=members
  scenario decide(request:Request,approve:bool label=label_Request_state_approved,reason:text) by=approver label="Record decision"@{nl="Besluit vastleggen"}
  scenario order(request:Request,reference:text) by=buyer label="Place supplier order"@{nl="Leveranciersbestelling plaatsen"}
  scenario increase(request:Request,amount:money,reason:text) by=budget_manager
  scenario amend(line:Line,quantity:int,reason:text) by=buyer
  scenario receive(line:Line,source:text label=label_Receipt_source,accepted:int label=label_Receipt_accepted,rejected:int label=label_Receipt_rejected,received_on:date label=label_Receipt_received,evidence:text) -> Receipt by=buyer label="Record receipt"@{nl="Ontvangst registreren"}
  scenario return_goods(receipt:Receipt,source:text,quantity:int,returned:date,evidence:text) -> Return by=buyer label="Return goods"@{nl="Goederen retourneren"}
  scenario close(request:Request,actual:money label=label_Request_actual,evidence:text) by=budget_manager label="Close spending"@{nl="Uitgaven afsluiten"}
  scenario cancel(request:Request,actual:money,evidence:text,reason:text) by=budget_manager
  scenario record_payable(order:Order,source:text,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager
  scenario intake_invoice(order:Order,document:file,source:text label=label_Receipt_source) -> InvoiceDocument by=buyer label="Intake invoice document"@{nl="Factuurdocument innemen"}
  scenario transcribe_claims(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date) by=buyer label="Transcribe invoice claims"@{nl="Factuurgegevens overnemen"}
  scenario accept_invoice(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager label="Accept invoice document"@{nl="Factuurdocument accepteren"}
  scenario reject_invoice(invoice_document:InvoiceDocument,reason:text) by=budget_manager label="Reject invoice document"@{nl="Factuurdocument afwijzen"}
  scenario export_payable(payable:Payable) by=budget_manager
  scenario adjust(request:Request,amount:money,reason:text) by=budget_manager label="Adjust spending"@{nl="Uitgaven aanpassen"}
  scenario retry_stock(receipt:Receipt) by=buyer
  scenario retry_return(returned:Return) by=buyer
  scenario reconcile_stock on=every(5m)
  scenario stock_result on=Stock.post.completed
  scenario stock_changed on=Stock.changed
  scenario payable_result on=Accounting.record.completed
  style PurchaseWorkspace $"Favor clear purchase-request rows with location, required date, and aligned currency amounts. Make request details and approval state easy to scan; preserve the separation between affordable commitments, partial receipts, and spending evidence. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, supplier:Supplier?, state:Request.state? }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My requests, then Purchasing for permitted buyer/approver/budget roles. Reviewer, approved-to-order and stock-posting queues belong within Purchasing; request/order/receipt details open contextually. Supplier/budget maintenance remains ordinary procurement, without another administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My requests — own requester index | Request form with purpose/category/amount/required-by Fieldset; own queue with state Badges, pagination and empty state | Edit own unsubmitted requests, submit a frozen amount/currency and follow the recorded approval outcome |
| Purchasing — authorized budget/review index | Location/supplier/category Select filters; budget Stat totals separating total, commitments, actual spend and remaining funds; review queue with state Badges, pagination and Drawer authorization detail with decision/order/increase/close/cancel/adjust Modals; scoped payable-export action (owning operation, no authored export button) | Maintain affordable budgets, decide assigned requests without self-approval, cancel/close or record linked adjustments through owning actions |
| Suppliers and approved orders — procurement view | Supplier Table with active/location/contact fields and pagination; approved-to-order List with state Badges; ordered-line quantity/unit/unit-price Table with accepted-vs-ordered Progress; payable Table with posting Badges | Maintain the canonical supplier register and issue an identified order only against committed authorization; order changes retain required affordability checks |
| Delivery and closure — contextual order/queue view | Outstanding quantities, accepted/rejected/returned goods, delivery evidence and stock-posting Badges; typed receive Fieldset; receipt/history List with pagination; invoice-document Table with frozen file, source, review-status Badges, claims and decision; amend/return/transcribe/accept/reject Modals | Receive partial deliveries once, retain linked returns/reversals, reconcile pending stock movements and record same-currency actual-cost closure; intake, transcribe and accept or reject invoice documents with exact-claim evidence |

On phones, place delivery identity, outstanding quantity and acceptance inputs together; allow labeled stacked budget/line rows. Distinguish loading, no own requests, empty review work and filtered-empty. Preserve unsaved request, rejection reason and receipt evidence after validation or stale outcomes. Refresh remaining funds after competing approvals; a changed submitted amount requires new review. Pending stock synchronization cannot invite receiving the same physical delivery again or claim posted stock. Closure moves commitments to actual spending once and releases only unused funds; cancellation cannot erase accepted goods/spend. Keep ordered/received/closed evidence distinct from supplier payment, and retain unauthorized-currency/quantity-overrun Alerts. Technical accounting/provider wiring and automatic vendor payment are excluded.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):

```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 03-purchasing-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPurchase/playwright/references/03-purchasing-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPurchase. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /purchasing/mine title="My requests"@{nl="Mijn aanvragen"} $PurchaseWorkspace
  page /purchasing title=page_purchasing_title $PurchaseWorkspace
SELECTED PAGE:
  page /purchasing title=page_purchasing_title $PurchaseWorkspace
   require buyer or budget_manager or approver
   breadcrumbs
   card "Supplier directory"@{nl="Leveranciersregister"}
    form Supplier.create
    table Supplier columns=name,contact,locations,active empty="No suppliers recorded."@{nl="Geen leveranciers vastgelegd."}
     pagination
     edit
   card "Review and order queue"@{nl="Beoordelings- en bestelwachtrij"}
    list Request filter=state,location,supplier defaults={state=preferences.state,location=preferences.location,supplier=preferences.supplier} display=split empty="No requests match these filters."@{nl="Geen aanvragen voor deze filters."}
     pagination
     text row.purpose,row.amount,row.authorized,row.required_by,row.state,row.decision
     badge row.state
     button opens=auth_detail
     drawer "Purchase authorization"@{nl="Inkoopautorisatie"} id=auth_detail
      slot content
       edit
       action submit
       button opens=decide_detail
       modal "Record decision"@{nl="Besluit vastleggen"} id=decide_detail
        slot content
         form decide arguments={request=row} display=inline
          checkbox approve
          textarea reason
       button opens=order_detail
       modal "Place supplier order"@{nl="Leveranciersbestelling plaatsen"} id=order_detail
        slot content
         form order arguments={request=row} display=inline
          input reference
       button opens=increase_detail
       modal "Authorize increase"@{nl="Verhoging autoriseren"} id=increase_detail
        slot content
         form increase arguments={request=row} display=inline
          input amount
          textarea reason
       button opens=close_detail
       modal "Close spending"@{nl="Uitgaven afsluiten"} id=close_detail
        slot content
         form close arguments={request=row} display=inline
          input actual
          textarea evidence
       button opens=cancel_detail
       modal "Cancel request"@{nl="Aanvraag annuleren"} id=cancel_detail
        slot content
         form cancel arguments={request=row} display=inline
          input actual
          textarea evidence
          textarea reason
       button opens=adjust_detail
       modal "Adjust spending"@{nl="Uitgaven aanpassen"} id=adjust_detail
        slot content
         form adjust arguments={request=row} display=inline
          input amount
          textarea reason
       list row.Order empty="No orders placed."@{nl="Geen bestellingen geplaatst."}
        pagination
        badge row.state
        form Line.create
        button opens=payable_detail
        modal "Record payable"@{nl="Te betalen bedrag registreren"} id=payable_detail
         slot content
          form record_payable arguments={order=row} display=inline
           fieldset "Payable evidence"@{nl="Bewijs te betalen bedrag"}
            input source
            input invoice
            input amount
            calendar issued
            textarea evidence
        table row.Payable columns=invoice,amount,issued,evidence,posting,reference empty="No invoice evidence recorded."@{nl="Geen factuurbewijs vastgelegd."}
         pagination
         badge row.posting
         action export_payable
        form intake_invoice
         fieldset "Invoice document"@{nl="Factuurdocument"}
          file_input document
          input source
        table row.InvoiceDocument columns=document,source,status,invoice,amount,issued,decision order=created empty="No invoice documents recorded."@{nl="Geen factuurdocumenten vastgelegd."}
         pagination
         badge row.status
         button opens=transcribe_detail
         modal "Transcribe invoice claims"@{nl="Factuurgegevens overnemen"} id=transcribe_detail
          slot content
           form transcribe_claims arguments={invoice_document=row} display=inline
            input invoice
            input amount
            calendar issued
         button opens=accept_detail
         modal "Accept invoice document"@{nl="Factuurdocument accepteren"} id=accept_detail
          slot content
           form accept_invoice arguments={invoice_document=row} display=inline
            input invoice
            input amount
            calendar issued
            textarea evidence
         button opens=reject_detail
         modal "Reject invoice document"@{nl="Factuurdocument afwijzen"} id=reject_detail
          slot content
           form reject_invoice arguments={invoice_document=row} display=inline
            textarea reason
        table row.Line columns=sku,unit,quantity,ordered,accepted,unit_price empty="No line items recorded."@{nl="Geen regels vastgelegd."}
         pagination
         progress row.accepted max=row.ordered
         edit
         button opens=amend_detail
         modal "Amend line"@{nl="Regel wijzigen"} id=amend_detail
          slot content
           form amend arguments={line=row} display=inline
            input quantity
            textarea reason
         form receive
          fieldset "Delivery receipt"@{nl="Ontvangstregistratie"}
           input source
           input accepted
           input rejected
           calendar received_on
           textarea evidence
         table row.Receipt columns=source,accepted,rejected,returned,received,posting,evidence order=-received empty="No delivery receipts recorded."@{nl="Geen ontvangstregistraties vastgelegd."}
          pagination
          badge row.posting
          action retry_stock
          button opens=return_detail
          modal "Return goods"@{nl="Goederen retourneren"} id=return_detail
           slot content
            form return_goods arguments={receipt=row} display=inline
             fieldset "Supplier return"@{nl="Leveranciersretour"}
              input source
              input quantity
              calendar returned
              textarea evidence
          table row.Return columns=source,quantity,returned,evidence,posting empty="No supplier returns recorded."@{nl="Geen leveranciersretouren vastgelegd."}
           pagination
           badge row.posting
           action retry_return
          history
       history
   card "Budget commitments"@{nl="Budgettoezeggingen"}
    form Budget.create
    list Budget display=split empty="No budgets recorded."@{nl="Geen budgetten vastgelegd."}
     pagination
     stat row.total,row.committed,row.spent,row.remaining
     edit
     form Request.create
OWNING LABELS/DATA/FORMS/STYLES:
  message page_purchasing_title = "Purchasing"@{nl="Inkoop"}
  message label_Request_state = "State"@{nl="Status"}
  message label_Request_state_approved = "Approved"@{nl="Goedgekeurd"}
  message label_Request_state_cancelled = "Cancelled"@{nl="Geannuleerd"}
  message label_Request_state_closed = "Closed"@{nl="Afgesloten"}
  message label_Request_actual = "Actual spend"@{nl="Werkelijke uitgaven"}
  message label_Receipt_source = "Source reference"@{nl="Bronreferentie"}
  message label_Receipt_accepted = "Accepted quantity"@{nl="Geaccepteerd aantal"}
  message label_Receipt_rejected = "Rejected quantity"@{nl="Afgekeurd aantal"}
  message label_Receipt_received = "Received at"@{nl="Ontvangen op"}
  role approver label="Purchase approver"@{nl="Inkoopbeoordelaar"}
  Budget { name:text, locations:Location[] label="Locations"@{nl="Locaties"}, total:money, active:bool=true } label="Budget"@{nl="Budget"}
  Request in Budget { location:Location, supplier:Supplier, requester:user server=actor label="Requester"@{nl="Aanvrager"}, reviewer:user label="Reviewer"@{nl="Beoordelaar"}, purpose:text label="Purpose"@{nl="Doel"}, category:text label="Category"@{nl="Categorie"}, required_by:date label="Required by"@{nl="Nodig op"}, amount:money, state:enum(draft,submitted,approved,rejected,cancelled,closed)=draft label={text=label_Request_state,values={draft="Draft"@{nl="Concept"},submitted="Submitted"@{nl="Ingediend"},approved=label_Request_state_approved,rejected="Rejected"@{nl="Afgewezen"},cancelled=label_Request_state_cancelled,closed=label_Request_state_closed}}, decision:text? label="Decision"@{nl="Besluit"}, actual:money? label=label_Request_actual, evidence:text? } label="Purchase request"@{nl="Inkoopaanvraag"}
  Order in Request { reference:text unique, supplier_name:text label="Frozen supplier name"@{nl="Vastgelegde leveranciersnaam"}, supplier_contact:email label="Supplier email"@{nl="E-mailadres leverancier"}, location:Location, state:enum(ordered,part_received,received,cancelled,closed)=ordered label={text=label_Request_state,values={cancelled=label_Request_state_cancelled,closed=label_Request_state_closed,ordered="Ordered"@{nl="Besteld"},part_received="Part received"@{nl="Gedeeltelijk ontvangen"},received="Received"@{nl="Ontvangen"}}} } label="Supplier order"@{nl="Leveranciersbestelling"}
  Line in Order { sku:text label="SKU"@{nl="SKU"}, unit:text label="Unit"@{nl="Eenheid"}, quantity:int min=1, unit_price:money label="Unit price"@{nl="Eenheidsprijs"} } label="Line item"@{nl="Regel"}
  export Receipt in Line { source:text unique label=label_Receipt_source, accepted:int min=0 label=label_Receipt_accepted, rejected:int=0 min=0 label=label_Receipt_rejected, received:date label=label_Receipt_received, evidence:text, posting:enum(pending,confirmed,failed,unknown)=pending label={text="Stock posting outcome"@{nl="Resultaat voorraadboeking"},values={pending="Pending"@{nl="In afwachting"},confirmed="Confirmed"@{nl="Bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, delivery:text? label="Delivery reference"@{nl="Verzendingsreferentie"}, revision:int=1, attempts:int=0 min=0 max=3 } label="Delivery receipt"@{nl="Ontvangstregistratie"}
  Increase in Request { amount:money, reason:text, source:text unique } label="Authorization increase"@{nl="Autorisatieverhoging"}
  Amendment in Line { quantity:int, reason:text, source:text unique } label="Order amendment"@{nl="Bestelwijziging"}
  export Return in Receipt { source:text unique, quantity:int min=1, returned:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0 max=3 } label="Supplier return"@{nl="Leveranciersretour"}
  Payable in Order { source:text unique, invoice:text, amount:money, issued:date, evidence:text, revision:int=1, posting:Receipt.posting=pending, delivery:text?, attempts:int=0 min=0, reference:text? } label="Supplier invoice evidence"@{nl="Leveranciersfactuurbewijs"}
  InvoiceDocument in Order { document:file label="Invoice document"@{nl="Factuurdocument"}, source:text unique label=label_Receipt_source, status:enum(draft,transcribed,accepted,rejected)=draft label={text="Extraction review"@{nl="Extractiebeoordeling"},values={draft="Draft"@{nl="Concept"},transcribed="Transcribed"@{nl="Overgenomen"},accepted="Accepted"@{nl="Geaccepteerd"},rejected="Rejected"@{nl="Afgewezen"}}}, invoice:text? label="Claimed invoice number"@{nl="Geclaimd factuurnummer"}, amount:money? label="Claimed amount"@{nl="Geclaimd bedrag"}, issued:date? label="Claimed issue date"@{nl="Geclaimde uitgiftedatum"}, decision:text? label="Decision"@{nl="Besluit"}, payable:Payable? label="Accepted payable"@{nl="Geaccepteerde schuld"} } label="Supplier invoice document"@{nl="Leveranciersfactuurdocument"}
  Adjustment in Budget { request:Request, amount:money, reason:text, source:text unique label=label_Receipt_source } label="Spending adjustment"@{nl="Uitgavenaanpassing"}
  scenario submit(request:Request) by=members
  scenario decide(request:Request,approve:bool label=label_Request_state_approved,reason:text) by=approver label="Record decision"@{nl="Besluit vastleggen"}
  scenario order(request:Request,reference:text) by=buyer label="Place supplier order"@{nl="Leveranciersbestelling plaatsen"}
  scenario increase(request:Request,amount:money,reason:text) by=budget_manager
  scenario amend(line:Line,quantity:int,reason:text) by=buyer
  scenario receive(line:Line,source:text label=label_Receipt_source,accepted:int label=label_Receipt_accepted,rejected:int label=label_Receipt_rejected,received_on:date label=label_Receipt_received,evidence:text) -> Receipt by=buyer label="Record receipt"@{nl="Ontvangst registreren"}
  scenario return_goods(receipt:Receipt,source:text,quantity:int,returned:date,evidence:text) -> Return by=buyer label="Return goods"@{nl="Goederen retourneren"}
  scenario close(request:Request,actual:money label=label_Request_actual,evidence:text) by=budget_manager label="Close spending"@{nl="Uitgaven afsluiten"}
  scenario cancel(request:Request,actual:money,evidence:text,reason:text) by=budget_manager
  scenario record_payable(order:Order,source:text,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager
  scenario intake_invoice(order:Order,document:file,source:text label=label_Receipt_source) -> InvoiceDocument by=buyer label="Intake invoice document"@{nl="Factuurdocument innemen"}
  scenario transcribe_claims(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date) by=buyer label="Transcribe invoice claims"@{nl="Factuurgegevens overnemen"}
  scenario accept_invoice(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager label="Accept invoice document"@{nl="Factuurdocument accepteren"}
  scenario reject_invoice(invoice_document:InvoiceDocument,reason:text) by=budget_manager label="Reject invoice document"@{nl="Factuurdocument afwijzen"}
  scenario export_payable(payable:Payable) by=budget_manager
  scenario adjust(request:Request,amount:money,reason:text) by=budget_manager label="Adjust spending"@{nl="Uitgaven aanpassen"}
  scenario retry_stock(receipt:Receipt) by=buyer
  scenario retry_return(returned:Return) by=buyer
  scenario reconcile_stock on=every(5m)
  scenario stock_result on=Stock.post.completed
  scenario stock_changed on=Stock.changed
  scenario payable_result on=Accounting.record.completed
  style PurchaseWorkspace $"Favor clear purchase-request rows with location, required date, and aligned currency amounts. Make request details and approval state easy to scan; preserve the separation between affordable commitments, partial receipts, and spending evidence. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { location:Location?, supplier:Supplier?, state:Request.state? }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My requests, then Purchasing for permitted buyer/approver/budget roles. Reviewer, approved-to-order and stock-posting queues belong within Purchasing; request/order/receipt details open contextually. Supplier/budget maintenance remains ordinary procurement, without another administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My requests — own requester index | Request form with purpose/category/amount/required-by Fieldset; own queue with state Badges, pagination and empty state | Edit own unsubmitted requests, submit a frozen amount/currency and follow the recorded approval outcome |
| Purchasing — authorized budget/review index | Location/supplier/category Select filters; budget Stat totals separating total, commitments, actual spend and remaining funds; review queue with state Badges, pagination and Drawer authorization detail with decision/order/increase/close/cancel/adjust Modals; scoped payable-export action (owning operation, no authored export button) | Maintain affordable budgets, decide assigned requests without self-approval, cancel/close or record linked adjustments through owning actions |
| Suppliers and approved orders — procurement view | Supplier Table with active/location/contact fields and pagination; approved-to-order List with state Badges; ordered-line quantity/unit/unit-price Table with accepted-vs-ordered Progress; payable Table with posting Badges | Maintain the canonical supplier register and issue an identified order only against committed authorization; order changes retain required affordability checks |
| Delivery and closure — contextual order/queue view | Outstanding quantities, accepted/rejected/returned goods, delivery evidence and stock-posting Badges; typed receive Fieldset; receipt/history List with pagination; invoice-document Table with frozen file, source, review-status Badges, claims and decision; amend/return/transcribe/accept/reject Modals | Receive partial deliveries once, retain linked returns/reversals, reconcile pending stock movements and record same-currency actual-cost closure; intake, transcribe and accept or reject invoice documents with exact-claim evidence |

On phones, place delivery identity, outstanding quantity and acceptance inputs together; allow labeled stacked budget/line rows. Distinguish loading, no own requests, empty review work and filtered-empty. Preserve unsaved request, rejection reason and receipt evidence after validation or stale outcomes. Refresh remaining funds after competing approvals; a changed submitted amount requires new review. Pending stock synchronization cannot invite receiving the same physical delivery again or claim posted stock. Closure moves commitments to actual spending once and releases only unused funds; cancellation cannot erase accepted goods/spend. Keep ordered/received/closed evidence distinct from supplier payment, and retain unauthorized-currency/quantity-overrun Alerts. Technical accounting/provider wiring and automatic vendor payment are excluded.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario decide(request:Request,approve:bool label=label_Request_state_approved,reason:text) by=approver label="Record decision"@{nl="Besluit vastleggen"}
  scenario order(request:Request,reference:text) by=buyer label="Place supplier order"@{nl="Leveranciersbestelling plaatsen"}
  scenario increase(request:Request,amount:money,reason:text) by=budget_manager
  scenario amend(line:Line,quantity:int,reason:text) by=buyer
  scenario receive(line:Line,source:text label=label_Receipt_source,accepted:int label=label_Receipt_accepted,rejected:int label=label_Receipt_rejected,received_on:date label=label_Receipt_received,evidence:text) -> Receipt by=buyer label="Record receipt"@{nl="Ontvangst registreren"}
  scenario return_goods(receipt:Receipt,source:text,quantity:int,returned:date,evidence:text) -> Return by=buyer label="Return goods"@{nl="Goederen retourneren"}
  scenario close(request:Request,actual:money label=label_Request_actual,evidence:text) by=budget_manager label="Close spending"@{nl="Uitgaven afsluiten"}
  scenario cancel(request:Request,actual:money,evidence:text,reason:text) by=budget_manager
  scenario record_payable(order:Order,source:text,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager
  scenario intake_invoice(order:Order,document:file,source:text label=label_Receipt_source) -> InvoiceDocument by=buyer label="Intake invoice document"@{nl="Factuurdocument innemen"}
  scenario transcribe_claims(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date) by=buyer label="Transcribe invoice claims"@{nl="Factuurgegevens overnemen"}
  scenario accept_invoice(invoice_document:InvoiceDocument,invoice:text,amount:money,issued:date,evidence:text) -> Payable by=budget_manager label="Accept invoice document"@{nl="Factuurdocument accepteren"}
  scenario reject_invoice(invoice_document:InvoiceDocument,reason:text) by=budget_manager label="Reject invoice document"@{nl="Factuurdocument afwijzen"}
  scenario adjust(request:Request,amount:money,reason:text) by=budget_manager label="Adjust spending"@{nl="Uitgaven aanpassen"}
```


