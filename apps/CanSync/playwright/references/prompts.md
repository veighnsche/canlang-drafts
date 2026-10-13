# Exact generation prompts

## Final desktop left-sidebar revision — 01-correction-unknown-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Preserve account detail drawer on right side OF CONTENT, distinct from LEFT shared sidebar; unknown conditional WRITE table and independent read Failed/Succeeded history labels remain correct.
```

## Correction of remaining write/read labeling and account placement

Input: previous focused correction for01-correction-unknown-desktop.png. This addresses semantic labeling and shell placement, not cosmetic variation.

```text
Use case: ui-mockup. Correct ONLY the two substantive errors in this CanSync reference; preserve every other layout/control/comparison/state. The bottom table shows an unknown conditional WRITE and must be titled Write attempts, with baselineR-18, desired phone+3225550199, request statusUnknown, resultemdash errorOutcome not confirmed. Beneath it add a separate Read attempts table with latest read Failed safe errorConnection timed out and previous read Succeeded retained observed time13Oct09:00; no false synchronization success. Current unknown write remains unresolved, cannot Retry or Close. Move Casey Park/Reviewer user menu from inside account drawer into bottom of extreme RIGHT SHARED NAVIGATION sidebar, below CRM synchronization link. Tall full-page image if necessary. Keep activated drawer between collection and right shell. Do not add any new operations/pages/state captions.
```

## Focused correction — 01-correction-unknown-desktop.png

Input: first-pass generated image from the corresponding prompt below.

```text
Focused correction preserve observed/desired comparison and Unknown write state. Replace invented Linked accounts tab with source tabs Active and Paused, Active selected. Render Enabled as READ-ONLY Yes text, not editable toggle; pause/resume use canonical buttons. Render account details as a side drawer to right of selected account collection but to left of shared RIGHT sidebar (not an inline fullwidth card). Preserve observation form and tables in drawer, use tall full page to show Read attempt history table and bottom-right account menu 'Casey Park / Reviewer'. No invented Live(5s) outcome indicator; polling reads stored state. Unknown write cannot be retried or closed; retain Refresh/Pause and read history. No Home breadcrumb.
```

## 01-correction-unknown-desktop.png

```text
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

Chosen screen state: Active tab, populated 2 linked existing Salesforce Accounts and selected account drawer OPEN in content area, RIGHT shared nav remains visible at outer edge. Latest successful observation name Alder Studio phone +3225550100 website https://alder.example revision R-18 at13Oct2026 09:00. Current read Failed while retained latest successful observation remains explicitly dated. Correction desired phone +3225550199, name/site unchanged. Proposal decision Approved by different reviewer; write outcome Unknown. Balanced Before/Desired compare with baseline revision and identities visible, write attempt Unknown plus safe error 'Outcome not confirmed'. No generic retry for unknown write, no successful synchronized claim, Refresh and Pause available according to role. Propose correction form typed name phone website, input stays protected when unresolved work. No Close action enabled for unresolved write. Link create remote ID/refresh period at top. Account bottom RIGHT, wordmark top RIGHT; nav only CRM synchronization. Explicit source states, not invented dashboards.
```
