Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanTime. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /time/mine title="My time" 
  page /time/review title="Time review" 
Selected page and hierarchy/controls:
  page /time/mine title="My time" $TimeWorkspace
   require members
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   card "Timer and manual time intake" layout=columns
    form start display=inline
     ## service keeps its generated control; instants come from server time.
     fieldset "Start timer"
      select employee
      select project
      textarea description
      toggle billable
    form manual
     ## instants, service and the manager-only exception keep generated controls.
     fieldset "Manual entry"
      select employee
      select project
      textarea description
      toggle billable
      textarea reason
    form submit
     select employee
   list Entry as entry where entry.parent.user==actor and entry.until==null
    stat row.duration
    text row.project,row.from
    button action=stop
   table Entry as entry where entry.parent.user==actor and (preferences.location==null or entry.project.location==preferences.location) and (preferences.week==null or (local_date(entry.from,team.timezone)>=preferences.week and local_date(entry.from,team.timezone)<add_days(preferences.week,7))) columns=project,service,description,from,until,origin,duration,rate,amount,state filter=project,project.location,from,until,billable,state defaults={project=preferences.project,billable=preferences.billable_filter} order=-from display=split
    pagination
    actions stop,revise
    status row.billable
    collapse "Observed, entered and review evidence"
     text row.author,row.reason,row.overlap_reason,row.overlap_author,row.decision,row.review
    history
   list group((Entry as entry where entry.parent.user==actor and entry.until!=null and entry.state!=superseded and (preferences.project==null or entry.project==preferences.project) and (preferences.location==null or entry.project.location==preferences.location) and (preferences.billable_filter==null or entry.billable==preferences.billable_filter) and (preferences.week==null or (local_date(entry.from,team.timezone)>=preferences.week and local_date(entry.from,team.timezone)<add_days(preferences.week,7)))) as entry,entry.rate.currency)
    stat row.key,sum(row.items as entry select entry.duration),sum(row.items as entry select entry.amount,row.key)
   table PeriodReview as review where review.parent.user==actor columns=from,until,state,reason
    pagination
    action withdraw
    ## A rejection returns entries to draft; the reason stays visible on the frozen review.
    alert
     require row.state==rejected
     text row.reason
    history
  # Review fixed periods and preserve correction financial uncertainty until the invoice owner resolves it. 
Source style intent:
  style TimeWorkspace $"Make timers and manual entry convenient above readable time rows. Align durations, rates, and currency-grouped amounts; distinguish observed entries, frozen period reviews, correction evidence, and billing outcomes with clear labels and review reasons. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message label_Project = "Time project"
  message label_Entry_from = "Started at"
  message label_Entry_until = "Stopped at"
  message label_Entry_billable = "Billable"
  Project { name:text, location:Location, customer:Customer?, rate:money label="Current hourly rate", active:bool=true } label=label_Project
  Entry in Employee { project:Project, service:Job? label="Service visit", description:text, from:datetime label=label_Entry_from, until:datetime? label=label_Entry_until, rate:money label="Frozen rate", billable:bool=true label=label_Entry_billable, origin:enum(timer,manual) label={text="Time origin",values={timer="Observed timer",manual="Manual entry"}}, reason:text?, author:user server=actor, overlap_reason:text? label="Overlap exception", overlap_author:user?, state:enum(draft,submitted,approved,exported,superseded)=draft, review:PeriodReview?, correction:Correction?, decision:text?, exported_source:text?, delivery:text? } label="Time entry"
  PeriodReview in Employee { from:datetime, until:datetime, entries:Entry[]!, state:enum(submitted,approved,rejected,withdrawn)=submitted, submitted_by:user server=actor, decided_by:user?, reason:text? } label="Period review"
  Correction in Entry { reason:text, replacement:Entry, author:user server=actor, original_source:text?, amount:money, cancel_delivery:text?, cancel_status:DeliveryResult.status=pending, fenced:bool=false, fence_revision:int=0, absent:bool=false, revision:int=0, collected:money, refunded:money, collection_pending:bool=true, refund_pending:bool=false, refund_delivery:text?, refund_revision:int=0, refund_status:DeliveryResult.status?, reconcile_delivery:text?, reconcile_status:DeliveryResult.status? } label="Time correction"
