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
