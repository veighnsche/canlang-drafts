Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanSync. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /sync title="CRM synchronization" poll=5s 
Selected page and hierarchy/controls:
  page /sync title="CRM synchronization" poll=5s $"Use compact linked-account rows and balanced correction comparisons. Clearly separate observed remote values, desired changes, review decisions, and write outcomes; keep failed or uncertain attempts legible alongside baseline revisions and recovery actions. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /sync page content; keep page admission and the shared shell unchanged."
   require operator or reviewer
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   tabs preferences.view
   form Link.create
    input remote
    input period
   table Link as link where link.enabled==(preferences.view==active) columns=remote,enabled,period,latest.created,current.request.status empty="No linked accounts in this view"
    pagination
    status row.current?.request?.status
    text row.remote,row.enabled,row.period,row.latest.created
    edit fields=period
    actions refresh,pause,resume
    ## The drawer exception keeps details display=drawer for the activated record detail.
    details "Remote account and correction" display=drawer
     text link.latest?.value,link.latest?.created
     form propose arguments={link}
      input value.name
      input value.phone
      input value.website
     table link.Proposal as proposal columns=created,submitted_by,decision,outcome,observed_match.created empty="No corrections proposed"
      pagination
      badge row.decision
      badge row.outcome
      diff
       slot before
        text row.before.values
       slot after
        text row.desired
      text row.before.revision,row.reviewed_by,row.reason
      actions approve,rebase,acknowledge
      button opens=close_proposal
      modal "Close reviewed correction" id=close_proposal
       slot content
        form close arguments={proposal=row} display=inline
         textarea reason
      table proposal.WriteAttempt columns=baseline,value,request.status,request.result,request.error empty="No write attempts"
       pagination
       status row.request?.status
       text row.baseline,row.value,row.request?.result,row.request?.error
      history
     table link.ReadAttempt columns=created,value,request.status,request.error empty="No observations yet"
      pagination
      status row.request?.status
      text row.created,row.value,row.request?.error
Source style intent:

Owning declarations and localized English labels (context only; show only selected page data):
  Link {remote:Snapshot.id unique,owner:user server=actor,enabled:bool=true,period:duration=1h,epoch:int=1,current:ReadAttempt?,latest:ReadAttempt?,pending:Proposal?} label="Linked account"
  ReadAttempt in Link {request:delivery(Remote.read)?,value:Observation?,applied:bool=false} label="Account observation"
  Proposal in Link {before:Snapshot,desired:Values,submitted_by:user server=actor,decision:enum(draft,approved,rejected,closed)=draft,reviewed_by:user?,reason:text?,current:WriteAttempt?,observed_match:ReadAttempt?} label="Reviewed correction"
  WriteAttempt in Proposal {baseline:Snapshot,value:Values,request:delivery(Remote.replace)?} label="Conditional write"
  derive Proposal.outcome:WriteResult.state? = row.current?.request?.result?.state label="Confirmed write result"
