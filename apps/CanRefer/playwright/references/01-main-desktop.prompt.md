Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanRefer. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /referrals title="Referrals" 
  page /referrals/work title="Referral rewards" 
  page /referrals/share/{Advocate.id} title="Referral invitation" nav=none 
Selected page and hierarchy/controls:
  page /referrals title="Referrals" $ReferWorkspace
   require authenticated and actor.email_verified
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   card "Programs and your referral code"
    list Program
     badge row.reward
     ## join_program auto-binds the enclosing program; the canonical form opens only for missing inputs.
     tooltip "Join this program"
      button action=join_program
    list Advocate as advocate where advocate.account==actor and (preferences.program==null or advocate.parent==preferences.program)
     copy app_url(format("/referrals/share/{id}",{id=row.id}))
     text row.parent.destination
     badge row.code
     card balances_title
      stat row.earned,row.paid,row.available,row.owed
     ## A positive owed balance only appears after a reversal preserved a settled payment.
     card "Owed balance"
      require row.owed>money(0,row.parent.reward.currency)
      alert
       text row.owed
     divider "Evidence"
     tabs
      tab "Qualification and reversal evidence"
       table row.Credit columns=source,amount,reversal,qualification empty="No conversions yet"
        pagination
      tab "External payment evidence"
       table row.Settlement columns=amount,payment_source,reference,paid,method,evidence
        pagination
  # Review cash rewards and evidence actual external settlement. 
Source style intent:
  style ReferWorkspace $"Use straightforward referral-program terms and aligned currency balances. Distinguish qualification, reversal evidence, owed rewards, and external settlement records; keep referral invitations welcoming while showing neither private advocate balances nor partner banking details. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message balances_title = "Earned and paid rewards"
  message label_Program = "Referral program"
  message label_Credit = "Reward credit"
  message label_Credit_source = "Source reference"
  message label_Settlement_paid = "Payment date"
  message label_Settlement_method = "Payment method"
  export Program { name:text, locations:Location[] label="Locations", products:text[]! label="Products", reward:money label="Cash reward", destination:url label="Referral destination", window:duration=30d label="Attribution window", active:bool=true } label=label_Program
  export Advocate in Program { account:user server=actor label="User account", email:email, code:text unique label="Referral code" } label="Advocate"
  SourceEvidence { advocate:Advocate, source:text unique label=label_Credit_source, value:Qualification, reversed:bool=false label="Source disqualified", reason:text? } label="Source qualification evidence"
  Credit in Advocate { source:text unique label=label_Credit_source, customer:text label="Customer reference", amount:money, reversal:Credit? label="Reversal reference", qualification:text label="Qualification evidence" } label=label_Credit
  Settlement in Advocate { payment_source:text label="Payment source", source:text unique label=label_Credit_source, amount:money, reference:text, paid:date label=label_Settlement_paid, method:text label=label_Settlement_method, evidence:text, author:user server=actor label="Recorded by" } label="Cash settlement"
  Allocation in Settlement { credit:Credit label=label_Credit, amount:money } label="Payment allocation"
  derive Advocate.earned:money = sum(row.Credit as credit select credit.amount,row.parent.reward.currency) label="Earned rewards"
  derive Advocate.paid:money = sum(row.Settlement as settlement select settlement.amount,row.parent.reward.currency) label="Paid rewards"
  derive Advocate.owed:money = max([money(0,row.parent.reward.currency),row.paid-row.earned]) label="Owed rewards"
  derive Advocate.available:money = max([money(0,row.parent.reward.currency),row.earned-row.paid]) label="Available reward balance"
  export Capture in Customer { advocate:Advocate?, partner:Partner?, code:text label="Attribution code", program:text label="Exclusive program", account:user server=actor, captured:datetime server=now label="Capture time", window:duration label="Attribution window", source:text unique label="Capture reference" } label="Captured attribution"
