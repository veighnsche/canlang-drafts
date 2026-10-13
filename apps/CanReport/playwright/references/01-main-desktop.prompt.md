Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanReport. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /reports title="Operational reports" 
Selected page and hierarchy/controls:
  page /reports title="Operational reports" $"Use precise report rows with clear source, revision, unit, currency, and provisional labels. Give run checkpoints and completeness prominent context; align numeric measures while keeping missing or uncertain coverage visible beside the authorized results. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /reports page content; keep page admission and the shared shell unchanged."
   require manager
   breadcrumbs
   card "Existing report definitions"
    list Definition as definition where preferences.definition==null or definition==preferences.definition empty="No report definitions available."
     pagination
     ## Each definition keeps its prominent header with inclusion rule, unit and reporting timezone.
     hero row.name
      text row.inclusion,row.unit,row.display_timezone
      form refresh
      card "Run checkpoints and completeness"
       list row.Run order=-requested display=split empty="No runs yet."
        pagination
        badge row.state
        text row.checkpoint,row.pending,row.from,row.until,row.currency
        card "Typed report measure"
         form measure
          metrics result.quantity,result.numerator,result.denominator,result.value,result.amount
          ## Freshness and coverage keep explicit state presentation; quantities stay withheld, never zero-filled.
          badge result.state
          text result.complete,result.pending,result.generated,result.inclusion,result.unit
          alert
           require result.state!=fresh or not result.complete or result.pending
           text "Coverage is incomplete; shown quantities are withheld, never zero-filled."
        collapse "Source contributions"
         table row.rows columns=source,revision,location,metric,quantity,unit,amount,provisional empty="No source contributions."
          pagination
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  message label_Checkpoint = "Source checkpoint"
  message label_Checkpoint_source = "Source reference"
  message label_Checkpoint_generated = "Generated at"
  message label_Checkpoint_complete = "Complete source coverage"
  message label_Run_pending = "Processing pending"
  message label_Contribution_from = "From"
  message label_Contribution_until = "Until"
  message label_Contribution_unit = "Unit"
  message label_ReportBatch_rows = "Source rows"
  message label_Definition = "Report definition"
  message label_Definition_inclusion = "Inclusion rule"
  message label_Run_locations = "Locations"
  Definition { name:text, metric:Contribution.metric, unit:text label=label_Contribution_unit, finance_only:bool=false label="Finance access only", inclusion:text label=label_Definition_inclusion, display_timezone:timezone label="Reporting timezone", enabled:bool=true } label=label_Definition
  Run in Definition { account:user label="User account", locations:Location[]! label=label_Run_locations, from:datetime label=label_Contribution_from, until:datetime label=label_Contribution_until, currency:currency?, requested:datetime server=now label="Requested at", delivery:text unique label="Delivery reference", checkpoint:Checkpoint? label=label_Checkpoint, rows:Contribution[] label=label_ReportBatch_rows, state:Checkpoint.state=unavailable, pending:bool=true label=label_Run_pending } label="Report run"
