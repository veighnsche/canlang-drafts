Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanSuccess. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /customer-success title="Customer success" 
Selected page and hierarchy/controls:
  page /customer-success title="Customer success" $"Favor account rows, overdue follow-ups, and dated renewal context. Keep milestones and private notes readable beside source agreements or memberships; distinguish reminder delivery and task completion from actual paid terms or renewed agreements. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /customer-success page content; keep page admission and the shared shell unchanged."
   require account_manager
   breadcrumbs
   card "Customer selection"
    list Customer empty="No customers found"
     form Account.create
      select location
      input email
      calendar renewal
      radio risk
      textarea risk_reason
      textarea notes
      ## parent binds the enclosing customer row.
      ## manager, agreement and membership keep their generated authorized pickers.
     pagination
   card "Overdue follow-ups"
    table FollowUp as followup where not followup.done and followup.parent.active and followup.due<=now columns=parent,title,due,assignee order=due empty="No overdue follow-ups"
     action complete
     pagination
   card "Renewal portfolio"
    list Account filter=location,manager,risk,active defaults={location=preferences.location,risk=preferences.risk_filter} order=renewal display=split empty="No accounts found"
     badge row.risk
     text row.renewal,row.active,row.risk_reason,row.agreement,row.membership
     edit
     radial_progress row.progress max=100
     stat row.completed,row.total
     text row.reviewed_at,row.reviewed_by
     tooltip "Record that you reviewed this account"
      action review
     button opens=reassign
     modal "Reassign account" id=reassign
      slot content
       form reassign arguments={account=row} display=inline
        input email
        ## account binds the enclosing row; manager keeps its authorized picker.
     alert
      require row.risk==high
      text row.risk_reason
     collapse "Risk assessment and source references"
      text row.notes
     tabs
      tab "Source agreement"
       require row.agreement!=null
       text row.agreement
       form renew arguments={term=row.agreement}
      tab "Source membership"
       require row.membership!=null
       text row.membership
       form term arguments={membership=row.membership}
       table row.membership.Term columns=from,until,paid,collection,cancellation order=-from empty="No terms found"
        pagination
      tab "Reminder delivery"
       table row.Notice columns=followup,recipient,state,created order=-created empty="No reminders sent"
        status row.state
        pagination
      tab "Account milestones"
       form Milestone.create
        input title
        calendar due
        ## parent binds the enclosing account row.
       table row.Milestone columns=title,due,done order=due filter=done empty="No milestones yet"
        edit
        action milestone
        pagination
      tab "Dated follow-ups"
       form FollowUp.create
        input title
        input email
        input due
        ## parent binds the enclosing row; assignee keeps its authorized picker.
       table row.FollowUp columns=title,due,assignee,done order=due filter=done empty="No follow-ups yet"
        edit
        action complete
        pagination
     history
     pagination
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  message label_account_manager = "Account manager"
  message label_Milestone_completed_by = "Completed by"
  message label_Milestone_completed_at = "Completed at"
  message label_FollowUp = "Follow-up"
  Account in Customer { location:Location, manager:user label=label_account_manager, email:email, renewal:date? label="Renewal date", risk:enum(low,medium,high)=low label={text="Assessed renewal risk",values={low="Low",medium="Medium",high="High"}}, reviewed_at:datetime? label="Last review", reviewed_by:user? label="Reviewed by", risk_reason:text? label="Risk assessment reason", notes:text?, agreement:AgreementTerm? label="Agreement reference", membership:Membership? label="Membership reference", active:bool=true } label="Customer account"
  Milestone in Account { title:text trim min=1, due:date, done:bool=false, completed_by:user? label=label_Milestone_completed_by, completed_at:datetime? label=label_Milestone_completed_at } label="Account milestone"
  export FollowUp in Account { title:text, due:datetime, assignee:user label="Assignee", email:email, done:bool=false, completed_by:user? label=label_Milestone_completed_by, completed_at:datetime? label=label_Milestone_completed_at } label=label_FollowUp
  Notice in Account { followup:FollowUp?, revision:int, account_revision:int, recipient:email, subject:text, body:text, delivery:delivery(Mail.send)? } label="Reminder outcome"
  derive Notice.state:DeliveryResult.status? = row.delivery?.status label={text="Delivery state",values={pending="Pending",succeeded="Delivered",failed="Failed",unknown="Unknown",skipped="Skipped"}}
  derive Account.progress:decimal = count(row.Milestone as item where item.done)*100/max([1,count(row.Milestone)]) label="Milestone completion percentage"
  derive Account.completed:int = count(row.Milestone as item where item.done) label="Completed milestones"
  derive Account.total:int = count(row.Milestone) label="Total milestones"
