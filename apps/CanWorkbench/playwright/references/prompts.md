# Exact generation prompts

## Final desktop left-sidebar revision — 01-proposal-review-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Preserve typed field preview (no raw executable code), expected version7 and omitted fields, Review not Applied, goal max2000.
```

## Focused correction — 01-proposal-review-desktop.png

Input: corresponding first-pass generated image.

```text
Use case: ui-mockup. Focused correction preserve full layout and right shell. Goal supports 2000 characters: change misleading18/500 counter to18/2000. Replace code-styled invocation snippet with labeled typed field preview rows: Operation todo.Task.update; Record T-17; Expected version7; Changes Priority High; All other change fields Omitted (unchanged). Explicitly say 'Proposal only — not applied'. Keep Approve/Reject and Review state, empty approval attribution. Preserve one selected task and context table; no fields or actions added. Remove Live label which implies provider status, show 'Refreshes stored state every2s'. No invented Home nav.
```

## 01-proposal-review-desktop.png

```text
Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanWorkbench. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /workbench title="AI workbench" poll=2s 
Selected page and hierarchy/controls:
  page /workbench title="AI workbench" poll=2s $"Use a focused session-and-step layout with readable goals and complete proposed arguments. Clearly distinguish authorized context, suggestions, explicit approvals, and actual delivery outcomes; keep stopped sessions, expiry, and durable history visible beside recovery context. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /workbench page content; keep page admission and the shared shell unchanged."
   require members
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   form start
    radio purpose
    textarea goal
    select location
    ## targets:Task[] stays generated: no catalog array control.
   table Run columns=purpose,goal,steps,stopped,expires empty="No sessions yet"
    pagination
    badge row.purpose
    text row.goal,row.steps,row.stopped,row.expires
    action stop
    table row.targets columns=title,priority,done empty="No selected tasks"
     pagination
    table row.Step as step columns=ordinal,state,delivery_state,approved_by,approved_at empty="No steps yet"
     pagination
     badge row.state
     status row.delivery_state
     text row.ordinal,row.approved_by,row.approved_at
    card "Authorized context and suggestions"
     action next
     table row.Step as step columns=ordinal,state,input,proposal empty="No proposals yet"
      pagination
      badge row.state
      content row.proposal?.summary
      text row.ordinal,row.input,row.proposal?.call
      actions approve,reject
      history
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  Run {account:user server=actor,purpose:Input.purpose,goal:Input.goal,location:Location,targets:Scope.targets,steps:int=0,stopped:bool=false,expires:datetime server=now+1h}
  Step in Run {ordinal:int min=1 max=8,input:Input,request:delivery(Planner.next)?,proposal:Proposal?,state:enum(open,review,answer,applied,rejected,stopped)=open,approved_by:user?,approved_at:datetime?}

Chosen screen /workbench AI workbench, populated own active session purpose Prioritize goal Clarify next task at Workspace, one selected task 'Follow up on room preparation' priorityNormal doneNo version7. Complete start form Purpose radio Prioritize/Prepare follow-up, Goal textarea, Location picker, selected Tasks multiple picker min1max10. Current session steps1 expires13Oct2026 16:00 stoppedNo. Step1 Review deliverySucceeded, approved by/at emdash. Authorized context and suggestions full typed preview operation todo.Task.update record T-17 expected version7 changes priorityHigh and explicit other fields unchanged/omitted, no location change. Summary 'Raise this task priority'. Buttons Approve and Reject, Next unavailable while unresolved proposal, Stop session. Show context table with task identity/version, due, description. Not yet applied or approved, no claims task done. Nav only AI workbench, wordmark top-right user bottom-right. One readable fullpage.
Only authored controls; no invented Home page; no marketing tagline. Single full page with enough height to show footer user menu.
```
