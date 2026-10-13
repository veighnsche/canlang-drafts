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
