# Exact generation prompts

## Remove invented navigation and cycle-duration labels after left-shell edit

Input: left-desktop version of01-renewal-portfolio-desktop.png.

```text
Use case: ui-mockup. Correct only these remaining source errors in CanSuccess; preserve all LEFT-desktop shell placement, content, account, hierarchy and controls. LEFT navigation has exactly ONE link Customer success. DELETE invented Customers, Renewals, Reports and Settings links; no replacement links. Shared personal settings accessible only through account menu. In membership form label 'Cycle', NOT Cycle(months); this integer identifies a billing cycle, not duration. Remove the extra Cycle(months) table column; source columns are From, Until, Paid, Invoice creation, Cancellation. Current term PaidYes Invoice creationInvoice confirmed CancellationNo cancellation; next term PaidNo Invoice creationPending CancellationNo cancellation. Never change paid status or claim term creation means payment. No other changes.
```

## Final desktop left-sidebar revision — 01-renewal-portfolio-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Restore full source membership Term table below form: From Until Paid Invoice creation Cancellation, current paidYes and next paidNo. Term form takes Cycle integer and optional authorized Capture reference, NOT editable From/Until/Seats (those are owner-derived). Keep unpaid term explicit. Form submission never implies renewal payment.
```

## Focused correction — 01-renewal-portfolio-desktop.png

Input: corresponding first-pass image.

```text
Use case: ui-mockup. Focused source correction. Preserve hierarchy, right shell, overdue queue, selected Alder Studio high risk and source membership paidNo next term. Intake creates ACCOUNT under selected existing Customer, never a new Customer: add existing Customer 'Alder Studio' selection/list, add Manager authorized picker, optional Source agreement and Source membership pickers. Rename Add customer to Create account. Keep Location Email Renewal Risk Risk reason Notes. Replace invented Manage membership navigation button with source-owned Create term form/button in Source membership tab (fields From Until Seats apply existing owner permissions), no generic new management page. No source-state changes. Correct sample last review and overdue dates to12Oct2026. Keep all five source tabs.
```

## 01-renewal-portfolio-desktop.png

```text
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

Selected source state: customer selection intake compact at top, overdue follow-ups table immediately below with concrete title due assignee complete action. Renewal portfolio split collection with two authorized accounts, selected Alder Studio at Workspace, renewal1 Nov2026, high manual risk and entered reason 'Next-term payment unresolved'. Right-hand selected account detail includes numerator2 denominator4 milestones,50% radial progress, review attribution, Review/Reassign actions, Source membership tab selected. Term rows show current term Paid Yes and next term Paid No Collection Pending, task completion must not imply paid renewal. Other tabs exact Source agreement, Reminder delivery, Account milestones, Dated follow-ups. Keep notes collapse. No invented financial metrics. Wordmark top RIGHT sidebar, only Customer success destination, account bottom-right. Forms remain typed complete, overflow may continue below fold. Light neutral cards with dates prominent.
```
