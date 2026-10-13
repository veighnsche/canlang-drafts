Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanStock. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /stock title="Consumables" 
Selected page and hierarchy/controls:
  page /stock title="Consumables" $"Use compact consumable rows with fixed units and clear location context. Make reorder thresholds, purchase posting queues, and ledger movements easy to scan; distinguish receipts, transfers, and corrections with readable source and actor evidence. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /stock page content; keep page admission and the shared shell unchanged."
   require stock_staff
   breadcrumbs
   ## Queue and ledger are separate tabs: triage work first, then item maintenance.
   tabs
    tab "Posting queue"
     card "Purchase posting queue"
      alert "Failed projections need investigation before retry; rejected quantities never become usable stock."
      list Projection filter=state,location defaults={location=preferences.location} empty="No purchase projections match these filters"
       text row.source,row.value.order,row.value.sku,row.value.unit,row.value.quantity,row.location,row.detail
       badge row.state
       text row.movement
       tooltip "Retry this failed projection"
        button action=retry
       history
       pagination
    tab "Items and ledger"
     card "Item identities and fixed units"
      form Item.create
       ## All five item inputs are placed; the generated remainder is empty.
       fieldset "Identity"
        label sku
        input sku
        input name
        input unit
       fieldset "Replenishment"
        input reorder
        toggle active
       button submit=true
      list Item search=name filter=active display=split empty="No items match this search"
       badge row.sku
       status row.active
       stat row.total,row.low
       edit
        fieldset "Item maintenance"
         input sku
         input name
         input unit
         input reorder
         toggle active
        button submit=true
       card "Location reorder thresholds"
        form Threshold.create arguments={parent=row}
         fieldset "Threshold"
          label location
          select location
          input reorder
          validator reorder
         button submit=true
        table row.Threshold columns=location,reorder order=location_name filter=location defaults={location=preferences.location} empty="No thresholds for this location"
         stat row.available
         status row.low
         edit
         pagination
       card "Ledger movements and corrections"
        ## Adjust and transfer open explicit typed forms; nothing posts from the card itself.
        button opens=adjust_stock
        button opens=transfer_stock
        modal "Adjust stock" id=adjust_stock
         slot content
          form adjust arguments={item=row}
           fieldset "Adjustment"
            select location
            label quantity
            input quantity
            validator quantity
            textarea reason
           button submit=true
        modal "Transfer stock" id=transfer_stock
         slot content
          form transfer arguments={item=row}
           fieldset "Route"
            select from
            select to
           fieldset "Quantity and reason"
            input quantity
            textarea reason
           button submit=true
        form balance arguments={item=row}
         fieldset "Scoped balance"
          select location
         button submit=true
         stat result
        table row.Movement columns=location,reason,source,order,actor order=-created filter=location defaults={location=preferences.location} empty="No ledger movements for this location"
         badge row.quantity
         text row.reversal,row.transfer,row.revision,row.unit
         button opens=reverse_movement
         modal "Reverse stock movement" id=reverse_movement
          slot content
           alert "Reversal appends a linked movement; posted history stays immutable."
           form reverse arguments={movement=row}
            textarea reason
            button submit=true
         history
         pagination
       card "Recent ledger activity"
        timeline row.Movement
         slot item
          badge row.quantity
          text row.reason,row.location,row.source
       pagination
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  message label_StockReceipt_source = "Source reference"
  message label_StockReceipt_order = "Purchase order reference"
  message label_StockReceipt_sku = "SKU"
  message label_StockReceipt_unit = "Unit"
  message label_StockReceipt_reversal = "Reversal reference"
  message label_Item_reorder = "Reorder threshold"
  Item { sku:text unique label=label_StockReceipt_sku, name:text, unit:text label=label_StockReceipt_unit, reorder:int reorder_threshold label=label_Item_reorder, active:bool=true } label="Stock item"
  Threshold in Item { location:Location, reorder:int reorder_threshold label=label_Item_reorder } label="Location reorder threshold"
  Movement in Item { location:Location, quantity:int, reason:text, source:text unique label=label_StockReceipt_source, transfer:text? label="Transfer reference", reversal:Movement? label=label_StockReceipt_reversal, order:text? label=label_StockReceipt_order, actor:user?, revision:int?, unit:text? } label="Stock movement"
  Projection { source:text unique, value:StockReceipt, location:Location, state:enum(pending,confirmed,failed)=pending, movement:Movement?, detail:text? } label="Purchase stock projection"
  derive Threshold.available:int = available(row.parent,row.location) label="Available stock"
  derive Threshold.low:bool = row.available<=row.reorder label="Reorder needed"
  derive Item.low:bool = row.total<=row.reorder label="Total reorder needed"
  derive Item.total:int = sum(row.Movement as movement select movement.quantity) label="Total stock"
