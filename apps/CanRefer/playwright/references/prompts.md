# CanRefer exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-referrals-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanRefer/playwright/references/02-referrals-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied full-page desktop UI. Change Join this program into disabled Joined because the same program already has this user's advocate/referral detail. Keep source-earned/paid/available/owed amounts unchanged. Preserve all other existing source content/controls and layout, LEFT sidebar, top-left wordmark, bottom-left account (public Sign in as specified). No new actions/metrics. One actual full-page image, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanRefer. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP LEFT. User menu anchored BOTTOM LEFT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /referrals title="Referrals"@{nl="Verwijzingen"} $ReferWorkspace
  page /referrals/work title="Referral rewards"@{nl="Verwijzingsbeloningen"} $ReferWorkspace
  page /referrals/share/{Advocate.id} title="Referral invitation"@{nl="Verwijzingsuitnodiging"} nav=none $ReferWorkspace
SELECTED PAGE:
  page /referrals title="Referrals"@{nl="Verwijzingen"} $ReferWorkspace
   require authenticated and actor.email_verified
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   card "Programs and your referral code"@{nl="Programma's en je verwijzingscode"}
    list Program
     badge row.reward
     ## join_program auto-binds the enclosing program; the canonical form opens only for missing inputs.
     tooltip "Join this program"@{nl="Deelnemen aan dit programma"}
      button action=join_program
    list Advocate as advocate where advocate.account==actor and (preferences.program==null or advocate.parent==preferences.program)
     copy app_url(format("/referrals/share/{id}",{id=row.id}))
     text row.parent.destination
     badge row.code
     card balances_title
      stat row.earned,row.paid,row.available,row.owed
     ## A positive owed balance only appears after a reversal preserved a settled payment.
     card "Owed balance"@{nl="Verschuldigd saldo"}
      require row.owed>money(0,row.parent.reward.currency)
      alert
       text row.owed
     divider "Evidence"@{nl="Bewijs"}
     tabs
      tab "Qualification and reversal evidence"@{nl="Kwalificatie- en terugboekingsbewijs"}
       table row.Credit columns=source,amount,reversal,qualification empty="No conversions yet"@{nl="Nog geen conversies"}
        pagination
      tab "External payment evidence"@{nl="Bewijs van externe betalingen"}
       table row.Settlement columns=amount,payment_source,reference,paid,method,evidence
        pagination
OWNING LABELS/DATA/FORMS/STYLES:
  message balances_title = "Earned and paid rewards"@{nl="Verdiende en uitbetaalde beloningen"}
  message label_Program = "Referral program"@{nl="Verwijzingsprogramma"}
  message label_Credit = "Reward credit"@{nl="Beloningstegoed"}
  message label_Credit_source = "Source reference"@{nl="Bronreferentie"}
  message label_Settlement_paid = "Payment date"@{nl="Betaaldatum"}
  message label_Settlement_method = "Payment method"@{nl="Betaalmethode"}
  role program_manager label="Program manager"@{nl="Programmabeheerder"}
  role finance label="Finance"@{nl="Financiën"}
  export Program { name:text, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[]! label="Products"@{nl="Producten"}, reward:money label="Cash reward"@{nl="Geldbeloning"}, destination:url label="Referral destination"@{nl="Verwijzingsbestemming"}, window:duration=30d label="Attribution window"@{nl="Toewijzingstermijn"}, active:bool=true } label=label_Program
  export Advocate in Program { account:user server=actor label="User account"@{nl="Gebruikersaccount"}, email:email, code:text unique label="Referral code"@{nl="Verwijzingscode"} } label="Advocate"@{nl="Ambassadeur"}
  SourceEvidence { advocate:Advocate, source:text unique label=label_Credit_source, value:Qualification, reversed:bool=false label="Source disqualified"@{nl="Bron gediskwalificeerd"}, reason:text? } label="Source qualification evidence"@{nl="Bronkwalificatiebewijs"}
  Credit in Advocate { source:text unique label=label_Credit_source, customer:text label="Customer reference"@{nl="Klantreferentie"}, amount:money, reversal:Credit? label="Reversal reference"@{nl="Terugboekingsreferentie"}, qualification:text label="Qualification evidence"@{nl="Kwalificatiebewijs"} } label=label_Credit
  Settlement in Advocate { payment_source:text label="Payment source"@{nl="Betaalbron"}, source:text unique label=label_Credit_source, amount:money, reference:text, paid:date label=label_Settlement_paid, method:text label=label_Settlement_method, evidence:text, author:user server=actor label="Recorded by"@{nl="Vastgelegd door"} } label="Cash settlement"@{nl="Uitbetaling"}
  Allocation in Settlement { credit:Credit label=label_Credit, amount:money } label="Payment allocation"@{nl="Betalingstoewijzing"}
  scenario join_program(program:Program) by=authenticated label="Join program"@{nl="Deelnemen aan programma"}
  scenario settle(advocate:Advocate,amount:money,payment_source:text label="Payment source"@{nl="Betaalbron"},reference:text,paid:date label=label_Settlement_paid,method:text label=label_Settlement_method,evidence:text) by=finance -> Settlement label="Record cash settlement"@{nl="Uitbetaling vastleggen"}
  scenario qualify on=Sales.qualification
  scenario reject_source(evidence:SourceEvidence,reason:text) by=program_manager label="Reject source qualification"@{nl="Bronkwalificatie afwijzen"}
  style ReferWorkspace $"Use straightforward referral-program terms and aligned currency balances. Distinguish qualification, reversal evidence, owed rewards, and external settlement records; keep referral invitations welcoming while showing neither private advocate balances nor partner banking details. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { program:Program? label=label_Program }
  export Capture in Customer { advocate:Advocate?, partner:Partner?, code:text label="Attribution code"@{nl="Toewijzingscode"}, program:text label="Exclusive program"@{nl="Exclusief programma"}, account:user server=actor, captured:datetime server=now label="Capture time"@{nl="Vastleggingstijd"}, window:duration label="Attribution window"@{nl="Toewijzingstermijn"}, source:text unique label="Capture reference"@{nl="Vastleggingsreferentie"} } label="Captured attribution"@{nl="Vastgelegde toewijzing"}
  export scenario capture(customer:Customer,advocate:Advocate?,partner:Partner?) by=authenticated -> Capture label="Use attribution code"@{nl="Toewijzingscode gebruiken"}
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Referrals then Referral rewards; authenticated advocates receive their own view, with program-management and finance controls gated separately. Public referral URLs lead only to configured destinations and grant no reward-record access.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Referrals /referrals | Program List with reward Badge and tooltip-annotated join Button; own advocate rows with copy-link control, destination text, code Badge, earned/paid/available/owed Stat, owed-only Alert Card, Evidence Divider, and evidence Tabs with Pagination. | join_program binds the listed program and copy shares the configured referral URL; verified own-account scope, unique code and allowed destination remain authoritative; owed alert renders only when a reversal preserved a settlement. |
| Own conversion and payment history | Nested Credit and Settlement Tables show trusted qualification, reversals, payment references, dates/method/evidence and frozen reward amount. Both evidence Tables carry explicit Pagination; the Credit Table has an explicit no-conversions empty state. | Authorized read and scoped statement export; opening a link or viewing a notification cannot qualify a conversion or prove payment. |
| Referral rewards /referrals/work | Program maintenance Card with generated create Form and Program List with reward Badge; per-advocate Stat; SourceEvidence queue Table with Pagination and per-row reject Modal with reason Textarea; per-advocate settlement Card and history. | Program CRUD requires manager grants; qualification exceptions use attributed owning decisions, not unrestricted credit edits. |
| Manual settlement | Settlement Fieldset grouping payment source/reference/method/evidence Inputs with paid-date Calendar around the generated amount control. | settle atomically allocates affordable balance to evidenced external cash payment; concurrent/replayed requests cannot allocate twice. |

These logical history/settlement sections reuse existing pages rather than introduce a separate administration console. Mobile Cards retain currency, reversal linkage and payment evidence. Distinguish no conversions, awaiting qualification, source unavailable and a genuinely zero balance. Show processing and failed delivery separately from earned funds; preserve settlement input on validation or stale-balance conflict. A late reversal keeps the prior payment visible and shows owed balance, never a claimed automatic clawback.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):

LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 03-referrals-work-desktop.png

### Active final generation request

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanRefer. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP LEFT. User menu anchored BOTTOM LEFT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /referrals title="Referrals"@{nl="Verwijzingen"} $ReferWorkspace
  page /referrals/work title="Referral rewards"@{nl="Verwijzingsbeloningen"} $ReferWorkspace
  page /referrals/share/{Advocate.id} title="Referral invitation"@{nl="Verwijzingsuitnodiging"} nav=none $ReferWorkspace
SELECTED PAGE:
  page /referrals/work title="Referral rewards"@{nl="Verwijzingsbeloningen"} $ReferWorkspace
   require program_manager or finance
   breadcrumbs
   card "Program maintenance"@{nl="Programmabeheer"}
    form Program.create
    list Program
     badge row.reward
     edit
   card balances_title
    list Advocate as advocate where preferences.program==null or advocate.parent==preferences.program
     stat row.earned,row.paid,row.available,row.owed
     table SourceEvidence as source where source.advocate==advocate columns=source,value.milestone,value.history_known,value.first_customer,reversed,reason
      pagination
      button opens=reject_dialog
      ## The modal keeps the evidence row; reason is the only entered input.
      modal "Reject source qualification"@{nl="Bronkwalificatie afwijzen"} id=reject_dialog
       slot content
        form reject_source arguments={evidence=row} display=inline
         textarea reason
     card "Record a cash settlement"@{nl="Een uitbetaling vastleggen"}
      form settle
       ## advocate auto-binds the enclosing advocate; amount keeps its generated money control.
       fieldset "Payment evidence"@{nl="Betalingsbewijs"}
        input payment_source
        input reference
        input method
        input evidence
        calendar paid
     ## History stays per-advocate-row as authored; the row chain already binds the advocate.
     history
OWNING LABELS/DATA/FORMS/STYLES:
  message balances_title = "Earned and paid rewards"@{nl="Verdiende en uitbetaalde beloningen"}
  message label_Program = "Referral program"@{nl="Verwijzingsprogramma"}
  message label_Credit = "Reward credit"@{nl="Beloningstegoed"}
  message label_Credit_source = "Source reference"@{nl="Bronreferentie"}
  message label_Settlement_paid = "Payment date"@{nl="Betaaldatum"}
  message label_Settlement_method = "Payment method"@{nl="Betaalmethode"}
  role program_manager label="Program manager"@{nl="Programmabeheerder"}
  role finance label="Finance"@{nl="Financiën"}
  export Program { name:text, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[]! label="Products"@{nl="Producten"}, reward:money label="Cash reward"@{nl="Geldbeloning"}, destination:url label="Referral destination"@{nl="Verwijzingsbestemming"}, window:duration=30d label="Attribution window"@{nl="Toewijzingstermijn"}, active:bool=true } label=label_Program
  export Advocate in Program { account:user server=actor label="User account"@{nl="Gebruikersaccount"}, email:email, code:text unique label="Referral code"@{nl="Verwijzingscode"} } label="Advocate"@{nl="Ambassadeur"}
  SourceEvidence { advocate:Advocate, source:text unique label=label_Credit_source, value:Qualification, reversed:bool=false label="Source disqualified"@{nl="Bron gediskwalificeerd"}, reason:text? } label="Source qualification evidence"@{nl="Bronkwalificatiebewijs"}
  Credit in Advocate { source:text unique label=label_Credit_source, customer:text label="Customer reference"@{nl="Klantreferentie"}, amount:money, reversal:Credit? label="Reversal reference"@{nl="Terugboekingsreferentie"}, qualification:text label="Qualification evidence"@{nl="Kwalificatiebewijs"} } label=label_Credit
  Settlement in Advocate { payment_source:text label="Payment source"@{nl="Betaalbron"}, source:text unique label=label_Credit_source, amount:money, reference:text, paid:date label=label_Settlement_paid, method:text label=label_Settlement_method, evidence:text, author:user server=actor label="Recorded by"@{nl="Vastgelegd door"} } label="Cash settlement"@{nl="Uitbetaling"}
  Allocation in Settlement { credit:Credit label=label_Credit, amount:money } label="Payment allocation"@{nl="Betalingstoewijzing"}
  scenario join_program(program:Program) by=authenticated label="Join program"@{nl="Deelnemen aan programma"}
  scenario settle(advocate:Advocate,amount:money,payment_source:text label="Payment source"@{nl="Betaalbron"},reference:text,paid:date label=label_Settlement_paid,method:text label=label_Settlement_method,evidence:text) by=finance -> Settlement label="Record cash settlement"@{nl="Uitbetaling vastleggen"}
  scenario qualify on=Sales.qualification
  scenario reject_source(evidence:SourceEvidence,reason:text) by=program_manager label="Reject source qualification"@{nl="Bronkwalificatie afwijzen"}
  style ReferWorkspace $"Use straightforward referral-program terms and aligned currency balances. Distinguish qualification, reversal evidence, owed rewards, and external settlement records; keep referral invitations welcoming while showing neither private advocate balances nor partner banking details. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { program:Program? label=label_Program }
  export Capture in Customer { advocate:Advocate?, partner:Partner?, code:text label="Attribution code"@{nl="Toewijzingscode"}, program:text label="Exclusive program"@{nl="Exclusief programma"}, account:user server=actor, captured:datetime server=now label="Capture time"@{nl="Vastleggingstijd"}, window:duration label="Attribution window"@{nl="Toewijzingstermijn"}, source:text unique label="Capture reference"@{nl="Vastleggingsreferentie"} } label="Captured attribution"@{nl="Vastgelegde toewijzing"}
  export scenario capture(customer:Customer,advocate:Advocate?,partner:Partner?) by=authenticated -> Capture label="Use attribution code"@{nl="Toewijzingscode gebruiken"}
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Referrals then Referral rewards; authenticated advocates receive their own view, with program-management and finance controls gated separately. Public referral URLs lead only to configured destinations and grant no reward-record access.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Referrals /referrals | Program List with reward Badge and tooltip-annotated join Button; own advocate rows with copy-link control, destination text, code Badge, earned/paid/available/owed Stat, owed-only Alert Card, Evidence Divider, and evidence Tabs with Pagination. | join_program binds the listed program and copy shares the configured referral URL; verified own-account scope, unique code and allowed destination remain authoritative; owed alert renders only when a reversal preserved a settlement. |
| Own conversion and payment history | Nested Credit and Settlement Tables show trusted qualification, reversals, payment references, dates/method/evidence and frozen reward amount. Both evidence Tables carry explicit Pagination; the Credit Table has an explicit no-conversions empty state. | Authorized read and scoped statement export; opening a link or viewing a notification cannot qualify a conversion or prove payment. |
| Referral rewards /referrals/work | Program maintenance Card with generated create Form and Program List with reward Badge; per-advocate Stat; SourceEvidence queue Table with Pagination and per-row reject Modal with reason Textarea; per-advocate settlement Card and history. | Program CRUD requires manager grants; qualification exceptions use attributed owning decisions, not unrestricted credit edits. |
| Manual settlement | Settlement Fieldset grouping payment source/reference/method/evidence Inputs with paid-date Calendar around the generated amount control. | settle atomically allocates affordable balance to evidenced external cash payment; concurrent/replayed requests cannot allocate twice. |

These logical history/settlement sections reuse existing pages rather than introduce a separate administration console. Mobile Cards retain currency, reversal linkage and payment evidence. Distinguish no conversions, awaiting qualification, source unavailable and a genuinely zero balance. Show processing and failed delivery separately from earned funds; preserve settlement input on validation or stale-balance conflict. A late reversal keeps the prior payment visible and shows owed balance, never a claimed automatic clawback.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  scenario settle(advocate:Advocate,amount:money,payment_source:text label="Payment source"@{nl="Betaalbron"},reference:text,paid:date label=label_Settlement_paid,method:text label=label_Settlement_method,evidence:text) by=finance -> Settlement label="Record cash settlement"@{nl="Uitbetaling vastleggen"}
  scenario reject_source(evidence:SourceEvidence,reason:text) by=program_manager label="Reject source qualification"@{nl="Bronkwalificatie afwijzen"}
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 04-referrals-share-Advocate.id-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanRefer/playwright/references/04-referrals-share-Advocate.id-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Auth-state correction ONLY: this screenshot is anonymous(Sign in bottom-left). Disable the Customer selector and Submit button visibly; add 'Sign in with a verified account to select your authorized customer' immediately above form. Do not imply anonymous customer lookup/capture. Keep destination link public and all other layout. Do not change any other content. Keep existing desktop LEFT sidebar and bottom-left account/sign-in. One full-page UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanRefer. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP LEFT. User menu anchored BOTTOM LEFT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /referrals title="Referrals"@{nl="Verwijzingen"} $ReferWorkspace
  page /referrals/work title="Referral rewards"@{nl="Verwijzingsbeloningen"} $ReferWorkspace
  page /referrals/share/{Advocate.id} title="Referral invitation"@{nl="Verwijzingsuitnodiging"} nav=none $ReferWorkspace
SELECTED PAGE:
  page /referrals/share/{Advocate.id} title="Referral invitation"@{nl="Verwijzingsuitnodiging"} nav=none $ReferWorkspace
   require row.parent.active
   breadcrumbs
   hero
    badge row.code
    link target=row.parent.destination caption=row.parent.destination
    form capture arguments={advocate=row} fields=customer
     select customer

OWNING LABELS/DATA/FORMS/STYLES:
  message balances_title = "Earned and paid rewards"@{nl="Verdiende en uitbetaalde beloningen"}
  message label_Program = "Referral program"@{nl="Verwijzingsprogramma"}
  message label_Credit = "Reward credit"@{nl="Beloningstegoed"}
  message label_Credit_source = "Source reference"@{nl="Bronreferentie"}
  message label_Settlement_paid = "Payment date"@{nl="Betaaldatum"}
  message label_Settlement_method = "Payment method"@{nl="Betaalmethode"}
  role program_manager label="Program manager"@{nl="Programmabeheerder"}
  role finance label="Finance"@{nl="Financiën"}
  export Program { name:text, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[]! label="Products"@{nl="Producten"}, reward:money label="Cash reward"@{nl="Geldbeloning"}, destination:url label="Referral destination"@{nl="Verwijzingsbestemming"}, window:duration=30d label="Attribution window"@{nl="Toewijzingstermijn"}, active:bool=true } label=label_Program
  export Advocate in Program { account:user server=actor label="User account"@{nl="Gebruikersaccount"}, email:email, code:text unique label="Referral code"@{nl="Verwijzingscode"} } label="Advocate"@{nl="Ambassadeur"}
  SourceEvidence { advocate:Advocate, source:text unique label=label_Credit_source, value:Qualification, reversed:bool=false label="Source disqualified"@{nl="Bron gediskwalificeerd"}, reason:text? } label="Source qualification evidence"@{nl="Bronkwalificatiebewijs"}
  Credit in Advocate { source:text unique label=label_Credit_source, customer:text label="Customer reference"@{nl="Klantreferentie"}, amount:money, reversal:Credit? label="Reversal reference"@{nl="Terugboekingsreferentie"}, qualification:text label="Qualification evidence"@{nl="Kwalificatiebewijs"} } label=label_Credit
  Settlement in Advocate { payment_source:text label="Payment source"@{nl="Betaalbron"}, source:text unique label=label_Credit_source, amount:money, reference:text, paid:date label=label_Settlement_paid, method:text label=label_Settlement_method, evidence:text, author:user server=actor label="Recorded by"@{nl="Vastgelegd door"} } label="Cash settlement"@{nl="Uitbetaling"}
  Allocation in Settlement { credit:Credit label=label_Credit, amount:money } label="Payment allocation"@{nl="Betalingstoewijzing"}
  scenario join_program(program:Program) by=authenticated label="Join program"@{nl="Deelnemen aan programma"}
  scenario settle(advocate:Advocate,amount:money,payment_source:text label="Payment source"@{nl="Betaalbron"},reference:text,paid:date label=label_Settlement_paid,method:text label=label_Settlement_method,evidence:text) by=finance -> Settlement label="Record cash settlement"@{nl="Uitbetaling vastleggen"}
  scenario qualify on=Sales.qualification
  scenario reject_source(evidence:SourceEvidence,reason:text) by=program_manager label="Reject source qualification"@{nl="Bronkwalificatie afwijzen"}
  style ReferWorkspace $"Use straightforward referral-program terms and aligned currency balances. Distinguish qualification, reversal evidence, owed rewards, and external settlement records; keep referral invitations welcoming while showing neither private advocate balances nor partner banking details. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { program:Program? label=label_Program }
  export Capture in Customer { advocate:Advocate?, partner:Partner?, code:text label="Attribution code"@{nl="Toewijzingscode"}, program:text label="Exclusive program"@{nl="Exclusief programma"}, account:user server=actor, captured:datetime server=now label="Capture time"@{nl="Vastleggingstijd"}, window:duration label="Attribution window"@{nl="Toewijzingstermijn"}, source:text unique label="Capture reference"@{nl="Vastleggingsreferentie"} } label="Captured attribution"@{nl="Vastgelegde toewijzing"}
  export scenario capture(customer:Customer,advocate:Advocate?,partner:Partner?) by=authenticated -> Capture label="Use attribution code"@{nl="Toewijzingscode gebruiken"}
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the staged [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Sidebar order is Referrals then Referral rewards; authenticated advocates receive their own view, with program-management and finance controls gated separately. Public referral URLs lead only to configured destinations and grant no reward-record access.

| Page or logical destination | DaisyUI presentation and content | Owning actions and conditions |
| --- | --- | --- |
| Referrals /referrals | Program List with reward Badge and tooltip-annotated join Button; own advocate rows with copy-link control, destination text, code Badge, earned/paid/available/owed Stat, owed-only Alert Card, Evidence Divider, and evidence Tabs with Pagination. | join_program binds the listed program and copy shares the configured referral URL; verified own-account scope, unique code and allowed destination remain authoritative; owed alert renders only when a reversal preserved a settlement. |
| Own conversion and payment history | Nested Credit and Settlement Tables show trusted qualification, reversals, payment references, dates/method/evidence and frozen reward amount. Both evidence Tables carry explicit Pagination; the Credit Table has an explicit no-conversions empty state. | Authorized read and scoped statement export; opening a link or viewing a notification cannot qualify a conversion or prove payment. |
| Referral rewards /referrals/work | Program maintenance Card with generated create Form and Program List with reward Badge; per-advocate Stat; SourceEvidence queue Table with Pagination and per-row reject Modal with reason Textarea; per-advocate settlement Card and history. | Program CRUD requires manager grants; qualification exceptions use attributed owning decisions, not unrestricted credit edits. |
| Manual settlement | Settlement Fieldset grouping payment source/reference/method/evidence Inputs with paid-date Calendar around the generated amount control. | settle atomically allocates affordable balance to evidenced external cash payment; concurrent/replayed requests cannot allocate twice. |

These logical history/settlement sections reuse existing pages rather than introduce a separate administration console. Mobile Cards retain currency, reversal linkage and payment evidence. Distinguish no conversions, awaiting qualification, source unavailable and a genuinely zero balance. Show processing and failed delivery separately from earned funds; preserve settlement input on validation or stale-balance conflict. A late reversal keeps the prior payment visible and shows owed balance, never a claimed automatic clawback.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):
  export scenario capture(customer:Customer,advocate:Advocate?,partner:Partner?) by=authenticated -> Capture label="Use attribution code"@{nl="Toewijzingscode gebruiken"}
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied full-page desktop UI. Render the actual public contextual page strictly: only Referral invitation heading, hero containing source code badge JRDV26, link to configured referral destination https://example.com, and capture form with Customer selector. Remove invented Copy referral link operation, custom invitation URL, marketing hero/envelope, share-and-earn steps and About referral program section. Customer selector helper must say 'Select your authorized customer account'. For anonymous public preview sidebar has wordmark, Sign in at bottom-left and no staff links or account identity; capture form stays visibly sign-in required. Keep LEFT shell. Preserve all other existing source content/controls and layout, LEFT sidebar, top-left wordmark, bottom-left account (public Sign in as specified). No new actions/metrics. One actual full-page image, no frame/collage.
```


