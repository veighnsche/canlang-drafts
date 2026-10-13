# Exact generation prompts

## Final desktop left-sidebar revision — 01-traffic-populated-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Keep Site status Active (boolean), summary and health Delayed. Health observed13Oct2026 09:10; current generation09:12. Exact summary ratios stay exact, weighted breakdown stays sampled.
```

## Focused correction for 01-traffic-populated-desktop.png

Input: first-pass image from the prompt below. This corrected image replaces only the new first-pass output.

```text
Use case: ui-mockup. Focused correction of the provided CanStats reference. Preserve all layout, right sidebar, actions, source cards, values and readable neutral styling. In Observed traffic and identifier coverage, labels must be "Observed goal rate (exact)" and "Identifier coverage (exact)" instead of weighted estimate. These ratios derive from accepted D1 counts and must never be called sampled. The summary state is "Delayed" rather than Up to date because the current processing health is lagging. In weighted report rows, change /about events from100 to200 so sum events=1200; identified240+210+170+140+90+60=910 so change /about identified to50 to sum900; goals18+14+12+10+6+2=62 so change /about goals to0 to sum60. Pagination reads Showing1–6 of6. Keep sampled Yes and complete Yes ONLY in weighted result. Health last observation 13 Oct2026 09:10, generation09:12, so available delayed health is under5min old. Breadcrumb just Website traffic with no invented Home page. Change nothing else. Full-page single interface no frame/collage.
```

## 01-traffic-populated-desktop.png

```text
Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanStats. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /traffic title="Website traffic" poll=5s 
Selected page and hierarchy/controls:
  page /traffic title="Website traffic" poll=5s $"Use restrained traffic-report rows with readable ranges, observed events, and identifier coverage. Clearly label weighted estimates and goals; keep intake health and accepted event evidence accessible without making observed inquiries resemble confirmed sales. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /traffic page content; keep page admission and the shared shell unchanged."
   require analyst
   breadcrumbs
   card "Configured site and reporting range"
    list Site as site where preferences.site==null or site==preferences.site empty="No configured sites"
     text row.name,row.domain,row.timezone,row.active,row.goals
     card "Observed traffic and identifier coverage"
      form summary display=inline
       calendar from
       calendar until
       ## site binds the enclosing row.
       badge result.state
       text result.generated
       stat result.events,result.goals,result.visitors,result.sessions
       stat result.live,result.identified
       progress result.goal_rate max=1
       progress result.identity_coverage max=1
       collapse "Observed goals"
        require result.goal_counts!=null
        table result.goal_counts columns=name,events empty="No observed goals"
         pagination
     card "Weighted dimension estimates"
      button opens=request_breakdown
      modal "Request breakdown" id=request_breakdown
       slot content
        form breakdown arguments={site=row} display=inline
         calendar from
         calendar until
         radio dimension
         input goal
      list row.Breakdown as report where report.account==actor and report.current empty="No current reports"
       badge row.state
       text row.requested,row.goal,row.configured_goals,row.error
       collapse "Report result"
        require row.result!=null
        text row.result.from,row.result.until,row.result.sampled,row.result.complete,row.result.generated
        stat row.result.events,row.result.goals,row.result.identified
        table row.result.rows columns=key,events,goals,identified empty="No report rows"
         pagination
       pagination
     tabs
      tab health_title
       table row.Health columns=accepted,rejected,dropped,last_processed,observed,state empty="No health records"
        badge row.state
        alert
         require row.state==lagging
         text "Processing is delayed. Live activity excludes old queued events."
        pagination
      tab "Accepted event inspection"
       table row.AcceptedEvent columns=name,occurred,path,location,workspace,source,medium filter=name,location,path order=-occurred empty="No accepted events"
        pagination
     pagination
   footer
    text "Weighted breakdowns are sampled estimates; exact counts come from accepted D1 events."
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  message health_title = "Processing health"
  message label_Site = "Website"
  Site { name:text, domain:text label="Domain", timezone:timezone, goals:text[]! label="Tracked goals", viewers:user[], active:bool=true, quota:int=100000 min=1, key:secret server=random_secret() } label=label_Site
  AcceptedEvent in Site { event_id:text unique label="Event reference", name:text, occurred:datetime, received:datetime server=now label="Received at", path:text label="Page path", location:text?, workspace:text? label="Workspace dimension", source:text? label="Acquisition source", medium:text? label="Acquisition medium", visitor:text?, session:text?, session_started:datetime? } label="Accepted website event"
  Health in Site { revision:int=0, observed:datetime?, rejected:int=0, accepted:int=0 label="Accepted events", dropped:int=0 label="Dropped events", last_processed:datetime? label="Last processed at", state:enum(fresh,lagging,unavailable)=unavailable label={text="State",values={fresh="Up to date",lagging="Delayed",unavailable="Unavailable"}} } label=health_title
  Breakdown in Site { account:user server=actor, from:datetime, until:datetime, dimension:DimensionResult.dimension, goal:text?, configured_goals:text[]!, current:bool=true, delivery:text unique, state:enum(pending,fresh,partial,failed,unknown)=pending label={text="Report state",values={pending="Pending",fresh="Available",partial="Partial",failed="Unavailable",unknown="Unknown"}}, result:DimensionResult?, error:text?, requested:datetime server=now }

Screen-specific constraints: Populate existing site Workspace / workspace.example, timezone Europe/Brussels. Summary range 12 Oct to13 Oct2026 exclusive end. Events1200, observed goals60, identifier-based visitors420, sessions500, live8, identified900; goal rate5%, identifier coverage75%. Expanded observed goal table tour_request40 quote_request20. Weighted dimension estimates show sampled=true complete=true and readable key/events/goals/identified rows, no money/sales conversion. Processing health selected tab shows lagging badge and exact delay alert; weighted report available is independent of intake lag. No graph/chart/KPI beyond authored metrics. Do not show provisioning controls. Place wordmark at top of RIGHT sidebar and account at bottom-right, not top-left. Show summary submit action. All modal/dialogs closed.
```
