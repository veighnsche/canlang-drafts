Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanOnboard. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /people/my-readiness title="My readiness" 
  page /people/onboarding title=page_people_onboarding_title 
Selected page and hierarchy/controls:
  page /people/my-readiness title="My readiness" $OnboardWorkspace
   require authenticated
   breadcrumbs
   card "Assigned readiness steps"
    tabs preferences.view
    list Step as step where step.assignee==actor and (preferences.view==all or (preferences.view==unfinished and not step.done) or (preferences.view==overdue and not step.done and step.due<local_date(now,team.timezone))) order=step.due empty="No assigned steps"
     badge row.category
     text row.title,row.due,row.done
     alert
      require row.blocked_reason!=null
      text row.blocked_reason
     card "Attachment"
      require row.document!=null
      link target=row.document caption="Open attachment"
     text row.completed_by,row.completed_at
     action complete
     pagination

  # Prepare work identities and role/location checklists under HR document grants. 
Source style intent:
  style OnboardWorkspace $"Use a discreet readiness checklist with readable assigned steps, version context, and attachments. Make each recorded completion and remaining requirement easy to scan; keep employee identity and private onboarding information within their existing authorized views. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message page_people_onboarding_title = "Onboarding"
  export Template { name:text, role:text label="Role", location:Location, active:bool=true label="Available template", revision:int=1 } label="Checklist template"
  TemplateStep in Template { title:text trim min=1, offset_days:int=0 label="Offset in days", category:enum(equipment,induction,account,training)=induction label={text="Category",values={equipment="Equipment",induction="Induction",account="Account",training="Training"}} } label="Template step"
  Checklist in Employee { template:Template, template_version:int label="Template version", started:date label="Started on", generation:text unique label="Generation reference" } label="Onboarding checklist"
  export Step in Checklist { title:text trim min=1, due:date, assignee:user=parent.parent.user label="Assignee", category:TemplateStep.category, document:file? label="Document attachment", blocked_reason:text? label="Blocking reason", done:bool=false, completed_by:user? label="Completed by", completed_at:datetime? label="Completed at" } label="Onboarding step"
  derive Checklist.completed_steps:int = count(row.Step as s where s.done) label="Completed steps"
  derive Checklist.total_steps:int = count(row.Step) label="Active steps"
  derive Checklist.progress:decimal = count(row.Step as s where s.done)*100/max([1,count(row.Step)]) label="Progress"
