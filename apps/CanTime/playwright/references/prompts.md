# Exact generation prompts

## Final desktop left-sidebar revision — 02-period-review-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Decide period unchecked Approve means REJECT on submit, not keep under review; helper says 'Checked approves; unchecked rejects with reason.' Remove unsupported500-character reason limit. Project rate is EUR per hour, label/h. Keep correction evidence separate from submitted period rows, as historical frozen entry evidence.
```

## Final desktop left-sidebar revision — 01-own-time-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. 
```

## Focused correction — 01-own-time-desktop.png

Input: corresponding first-pass image.

```text
Use case: ui-mockup. Focused correction preserve forms, layout, right sidebar, running elapsed and entry origin labels. Running timer started23Apr2025 11:14, not10:14, so it does not overlap manual09:00–11:00; change both running text and running row. Currency totals MUST exclude running entry: EUR completed duration08:15 amount728.75, not10:27/830.75. Disable Revise on Submitted and Approved entries, only own finished Draft permits Revise; correct review state unchanged. Period From/Until use datetime inputs, not date-only, retaining explicit times. Service optional shows 'None' instead of inventing General work job. Preserve all observed/entered origin and EUR85/95 frozen rates. No additional operations.
```

## 02-period-review-desktop.png

```text
Use case: ui-mockup. Create one polished implementable intended-design website full-page UI, no browser chrome/device frame/collage/watermark. Light neutral daisyUI shared theme, dark readable sans-serif, white cards subtle borders, restrained semantic colors with text labels, practical spacing, keyboard focus. Only source-owned fields/actions/states. No invented dashboards, metrics, settings, marketing taglines or Home links. Desktop uses wordmark at TOP of RIGHT sidebar and user menu BOTTOM RIGHT; mobile uses menu button at top-right with dismissible overlay closed, no persistent desktop sidebar. Illustrative data in the Workspace location, currency EUR, Europe/Brussels, October2026. Full page height preserves all essential controls. CanTime /time/review Time review, project manager. Sidebar My time then Time review selected. Project rates form Name Location Customer hourly Rate amount/currency, submit; table name/location/customer/rate/active. Period review split table Employee From Until State Decided by Reason, selected Submitted frozen range12Oct09–17. Nested frozen entries table project/start/end/rate/amount/overlap reason/author/state. Two coherent nonoverlapping entries EUR85/h durations2h and1h amounts170/85, Submitted. Decide period dialog OPEN: Approve toggle unchecked, Reason textarea entered 'Clarify service reference', Submit plus Cancel/X. No separate approve/reject action schemas, toggle decides. Correction and billing evidence below selected entry: source/time origin, exported source T-17v7, Correction row refundPendingYes readyNo reconcile statusUnknown, no replacement billed/success. Canonical Correct/Bill actions according to source can be unavailable. No grand totals across currencies. Right account bottom visible.
```

## 01-own-time-desktop.png

```text
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

Chosen screen: /time/mine My time, own employee. Two-column Timer and manual time intake: Start timer form employee project description billable service picker; Manual entry employee project description billable reason service From Until, submit. Separate Submit period form employee From Until. Running timer duration01:12 project Workspace maintenance and Stop. Own entry table populated with observed and entered origin, dates, duration, frozen EUR rate, amount, Draft/Submitted/Approved labels and billable. Group totals separately by currency, no blended money. Period reviews table selected Rejected with reason 'Clarify visit description'; rejection returns entries to draft. Navigation My time and Time review only. Wordmark RIGHT top, user RIGHT bottom, breadcrumb only My time.
No invented Home sidebar entry, no device frame, single full-page UI. Keep complete page scroll height so bottom-right account is visible.
```
