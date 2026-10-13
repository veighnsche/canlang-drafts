Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanVolunteer. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /volunteering title="Volunteer activities" 
  page /volunteering/work title="Volunteer coordination" 
Selected page and hierarchy/controls:
  page /volunteering title="Volunteer activities" $VolunteerWorkspace
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   tabs preferences.view
    tab discovery
     card "Published volunteer activities"
      list Opportunity filter=location defaults={location=preferences.location} order=from
       pagination
       badge row.capacity
       text row.description,row.requirements,row.timezone,row.from,row.until
       form availability
        stat result.remaining
       button action=signup
    tab assignments
     require authenticated
     card "Your signups and assigned tasks"
      list Signup as signup where signup.account==actor display=split
       pagination
       status row.state
       status row.cancelled
       status row.needs_confirmation
       text row.notification?.status
       actions withdraw,reactivate,reconfirm
       list row.Task
        text row.title,row.done,row.completed_by,row.completed_at
        button action=complete
       ## Per-signup history shows the volunteer's own state-transition audit under the own grant.
       history
  # Coordinate confirmed participants and entered attendance. 
Source style intent:
  style VolunteerWorkspace $"Make activity dates, requirements, and remaining places easy to scan. Keep own assignments, cancellation, reconfirmation, and attributed task completion readable; separate organizer attendance evidence and venue outcomes from participant signup status. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message label_Opportunity_cancelled = "Cancelled"
  message label_Signup_state_attended = "Attended"
  Community { name:text unique } label="Community"
  Opportunity in Community { location:Location, title:text, description:text, requirements:text label="Activity requirements", contact:email label="Organizer email", timezone:timezone, from:datetime label="From", until:datetime label="Until", capacity:int min=1 label="Capacity", venue:Booking? label="Venue reservation", open:bool=false label="Open", cancelled:bool=false label=label_Opportunity_cancelled } label="Volunteer activity"
  Signup in Opportunity { account:user server=actor label="User account", email:email, notification:delivery(Mail.send)? label="Latest notice delivery", needs_confirmation:bool=false label="Reconfirmation required", state:enum(registered,confirmed,withdrawn,cancelled,attended,no_show)=registered label={text="State",values={cancelled=label_Opportunity_cancelled,registered="Registered",confirmed="Confirmed",withdrawn="Withdrawn",attended=label_Signup_state_attended,no_show="No-show"}} } label="Volunteer signup"
  export Task in Signup { title:text, done:bool=false, completed_by:user? label="Completed by", completed_at:datetime? label="Completed at" } label="Volunteer task"
  derive Opportunity.venue_confirmed:bool = row.venue!=null and venue_covers(row.venue,row.location,row.from,row.until) label="Venue confirmed"
  derive Opportunity.remaining:int = row.capacity-count(row.Signup as signup where signup.reserves_place) label="Remaining places"
