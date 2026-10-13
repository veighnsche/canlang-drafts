# CanLoyalty exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-loyalty-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLoyalty/playwright/references/02-loyalty-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLoyalty. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /loyalty title="My rewards"@{nl="Mijn beloningen"} $LoyaltyWorkspace
  page /loyalty/fulfillment title=page_loyalty_fulfillment_title $LoyaltyWorkspace
  page /loyalty/catalog title=page_loyalty_catalog_title $LoyaltyWorkspace
SELECTED PAGE:
  page /loyalty title="My rewards"@{nl="Mijn beloningen"} $LoyaltyWorkspace
   require authenticated
   ## Breadcrumbs show current declared ancestry; the shared right-sidebar shell supplies navigation, no per-app menu.
   breadcrumbs
   hero
    list Account as account where account.contact.account==actor and account.contact.verified display=split empty="No reward account yet"@{nl="Nog geen beloningsaccount"}
     pagination
     stat account.available,account.earned
     text account.tier,account.next_tier
     text account.tier_progress,account.tier_span
     ## Tier progress renders only when a next tier defines a positive span.
     card "Tier progress"@{nl="Niveauvoortgang"}
      require account.tier_span>0
      progress account.tier_progress max=account.tier_span
     text "A negative available balance means points are owed; new rewards must be affordable"@{nl="Een negatief beschikbaar saldo betekent dat punten verschuldigd zijn; nieuwe beloningen moeten betaalbaar zijn"}
     tabs preferences.view
      tab rewards
       list account.parent.Reward as reward where reward.active columns=name,cost,locations empty="No active rewards"@{nl="Geen actieve beloningen"}
        pagination
        content reward.instructions
        tooltip "Reserve this reward"@{nl="Reserveer deze beloning"}
         form redeem arguments={account,reward}
       table account.Redemption columns=name,cost,location,instructions,state,evidence,notification filter=location,state defaults={location=preferences.location,state=preferences.redemption_state} display=split empty="No reservations yet"@{nl="Nog geen reserveringen"}
        pagination
        badge row.state
        status row.notification
        text "A failed or uncertain notification does not cancel this reservation"@{nl="Een mislukte of onzekere melding annuleert deze reservering niet"}
        history
      tab history
       timeline account.Earning
        slot item
         pagination
         text row.points,row.tier
         text row.reason,row.source
         text row.reversal,row.author,row.qualification
OWNING LABELS/DATA/FORMS/STYLES:
  message page_loyalty_fulfillment_title = "Reward fulfillment"@{nl="Beloningen uitvoeren"}
  message page_loyalty_catalog_title = "Reward program"@{nl="Beloningsprogramma"}
  message heading_rewards = "Rewards"@{nl="Beloningen"}
  message label_Program_locations = "Locations"@{nl="Locaties"}
  message label_Reward_cost = "Cost"@{nl="Kosten"}
  message label_Earning_source = "Source reference"@{nl="Bronreferentie"}
  role program_owner label="Program owner"@{nl="Programma-eigenaar"}
  role reward_staff label="Reward staff"@{nl="Beloningsmedewerker"}
  Program { name:text, locations:Location[] label=label_Program_locations, terms:text label="Terms"@{nl="Voorwaarden"}, products:text[]! min=1 label="Qualifying products"@{nl="Kwalificerende producten"}, points_per_sale:int min=1 label="Points per sale"@{nl="Punten per verkoop"}, active:bool=true } label=page_loyalty_catalog_title
  Tier in Program { name:text, threshold:int min=0 label="Points threshold"@{nl="Puntendrempel"} } label="Reward tier"@{nl="Beloningsniveau"}
  Reward in Program { name:text, cost:int min=1 label=label_Reward_cost, instructions:text, locations:Location[] label=label_Program_locations, active:bool=true } label="Reward"@{nl="Beloning"}
  Account in Program { customer:Customer, contact:Contact } label="Reward account"@{nl="Beloningsaccount"}
  SourceEvidence in Account { source:text unique, value:Qualification, reversed:bool=false, decided:bool=false }
  Earning in Account { tier:bool=false label="Counts toward tier"@{nl="Telt mee voor niveau"}, author:user?, qualification:SourceEvidence?, source:text unique label=label_Earning_source, points:int label="Points"@{nl="Punten"}, reason:text, reversal:Earning? label="Reversed entry"@{nl="Tegenboeking"} } label="Points entry"@{nl="Puntenboeking"}
  Redemption in Account { reward:Reward, name:text, instructions:text, locations:Location[]!, location:Location, fulfilled_by:user?, cancelled_by:user?, notification_delivery:delivery(Mail.send)?, cost:int label=label_Reward_cost, state:enum(reserved,fulfilled,cancelled)=reserved label={text="State"@{nl="Status"},values={reserved="Reserved"@{nl="Gereserveerd"},fulfilled="Fulfilled"@{nl="Uitgevoerd"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, evidence:text?, source:text unique label=label_Earning_source } label="Reward reservation"@{nl="Beloningsreservering"}
  scenario redeem(account:Account,reward:Reward,location:Location) -> Redemption by=authenticated label="Reserve reward"@{nl="Beloning reserveren"}
  scenario fulfill(redemption:Redemption,evidence:text) by=reward_staff label="Fulfill reward"@{nl="Beloning uitvoeren"}
  scenario cancel(redemption:Redemption,reason:text) by=reward_staff
  scenario adjust(account:Account,points:int,reason:text,tier:bool=false) by=reward_staff
  scenario reverse(entry:Earning,reason:text) by=reward_staff
  scenario earning on=Sales.qualification
  style LoyaltyWorkspace $"Make earned points and tier progress readable with restrained emphasis. Keep reward reservations, fulfillment evidence, and earning corrections in distinct labeled sections; preserve the difference between points, available perks, and cash or membership allowances. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { view:enum(rewards,history)=rewards label={text="Reward view"@{nl="Beloningsweergave"},values={rewards=heading_rewards,history="History"@{nl="Geschiedenis"}}}, location:Location? label="Reward location"@{nl="Beloningslocatie"}, redemption_state:Redemption.state? label="Reward state"@{nl="Beloningsstatus"} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). When this optional product is offered, order navigation as My rewards, Reward fulfillment for authorized staff, then Reward program for program owners. Reward/redemption details stay contextual. Protected program administration stays separate from preferences and fulfillment.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My rewards — verified own customer index | `breadcrumbs` plus a `hero` overview: split `stat` available/earned values, tier labels, tier-span text with a gated tier-progress `progress`, and rewards/history `tabs` bound to the remembered view. Reward list with `tooltip` redeem form; redemption Table with state `badge`, notification `status`, `pagination` and empty states; earning `timeline` with per-item `pagination`. | Reserve an affordable active reward through the guarded redemption operation; email or contact matching alone grants no account access |
| Redemption detail — contextual own/staff view | Reserved/fulfilled/cancelled state `badge` with snapshotted cost, frozen reward instructions/locations, earning/reversal references, attributed fulfillment evidence and a separate notification `status` reading the retained receipt outcome | Read the current receipt outcome; changing reward price cannot alter the old reservation |
| Reward fulfillment — scoped staff queue | `breadcrumbs`, location/status Select filters, and a redemption Table with state `badge`, notification `status`, `pagination` and empty state. Fulfill moves into a `modal` opened by `button opens=`, with an inline form carrying placed label/textarea/validation; per-row cancel `modal`; per-account adjust form with typed correction controls; earning Table with `pagination`, empty state and reverse `modal`. | Fulfill or cancel the existing reservation once; earning review and attributed corrections use guarded ledger actions, never direct balance editing |
| Reward program — protected owner index | `breadcrumbs`, a program form with placed term/cost/active controls, and tier/reward lists with `pagination`, empty states and threshold/cost/active text | Maintain published terms, tiers and rewards only under program-owner grants; customers cannot price their own reward |

Stack reward conditions and the point cost beside the redeem Button on narrow screens; present history as labeled rows. Distinguish loading, no points, no eligible rewards and filtered-empty. Preserve unsaved fulfillment evidence/program edits after invalid or stale submissions. Concurrent redemption refreshes affordability without promising the unavailable perk; repeated commands show their original outcome. Show notification failure independently of reservation state; a redemption with no associated notice shows the standard not-requested outcome. A reversal can produce an visible negative available-balance metric and owed-balance guidance that blocks new unaffordable redemptions while retaining history. Cancellation returns only the snapshotted reservation once. Workspace availability, membership units and cash never appear as interchangeable loyalty balances, and redemption is not evidence of delivery.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 03-loyalty-fulfillment-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLoyalty/playwright/references/03-loyalty-fulfillment-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Correct ONLY the two filters in supplied final LEFT desktop UI: Location dropdown value 'All locations', State dropdown value 'All states'. Both Reserved and Fulfilled rows are then coherent with filters. Keep every other pixel/content/control and LEFT sidebar/bottom-left account. One full-page UI image, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLoyalty. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /loyalty title="My rewards"@{nl="Mijn beloningen"} $LoyaltyWorkspace
  page /loyalty/fulfillment title=page_loyalty_fulfillment_title $LoyaltyWorkspace
  page /loyalty/catalog title=page_loyalty_catalog_title $LoyaltyWorkspace
SELECTED PAGE:
  page /loyalty/fulfillment title=page_loyalty_fulfillment_title $LoyaltyWorkspace
   require reward_staff
   breadcrumbs
   card page_loyalty_fulfillment_title
    form Account.create
   divider
   card "Evidence and history"@{nl="Bewijs en geschiedenis"}
    table Redemption columns=parent,name,cost,location,instructions,state,evidence,fulfilled_by,cancelled_by,notification filter=location,state defaults={location=preferences.location,state=preferences.redemption_state} empty="No reservations match these filters"@{nl="Geen reserveringen voor deze filters"}
     pagination
     badge row.state
     status row.notification
     button opens=fulfill_detail
     modal "Fulfill reward"@{nl="Beloning uitvoeren"} id=fulfill_detail
      slot content
       form fulfill arguments={redemption=row} display=inline
        fieldset "Evidence"@{nl="Bewijs"}
         label evidence
         textarea evidence
         validator evidence
     button opens=cancel_detail
     modal "Cancel reservation"@{nl="Reservering annuleren"} id=cancel_detail
      slot content
       form cancel arguments={redemption=row} display=inline
        textarea reason
     history
   card "Earning review and corrections"@{nl="Puntencontrole en correcties"}
    list Account as account display=split empty="No reward accounts"@{nl="Geen beloningsaccounts"}
     pagination
     stat account.available,account.earned
     form adjust arguments={account}
      fieldset "Correction"@{nl="Correctie"}
       input points
       checkbox tier
       textarea reason
     table account.Earning columns=points,tier,reason,source,reversal,author,qualification empty="No points entries yet"@{nl="Nog geen puntenboekingen"}
      pagination
      button opens=reverse_entry
      modal "Reverse entry"@{nl="Boeking terugdraaien"} id=reverse_entry
       slot content
        form reverse arguments={entry=row} display=inline
         textarea reason
      history
OWNING LABELS/DATA/FORMS/STYLES:
  message page_loyalty_fulfillment_title = "Reward fulfillment"@{nl="Beloningen uitvoeren"}
  message page_loyalty_catalog_title = "Reward program"@{nl="Beloningsprogramma"}
  message heading_rewards = "Rewards"@{nl="Beloningen"}
  message label_Program_locations = "Locations"@{nl="Locaties"}
  message label_Reward_cost = "Cost"@{nl="Kosten"}
  message label_Earning_source = "Source reference"@{nl="Bronreferentie"}
  role program_owner label="Program owner"@{nl="Programma-eigenaar"}
  role reward_staff label="Reward staff"@{nl="Beloningsmedewerker"}
  Program { name:text, locations:Location[] label=label_Program_locations, terms:text label="Terms"@{nl="Voorwaarden"}, products:text[]! min=1 label="Qualifying products"@{nl="Kwalificerende producten"}, points_per_sale:int min=1 label="Points per sale"@{nl="Punten per verkoop"}, active:bool=true } label=page_loyalty_catalog_title
  Tier in Program { name:text, threshold:int min=0 label="Points threshold"@{nl="Puntendrempel"} } label="Reward tier"@{nl="Beloningsniveau"}
  Reward in Program { name:text, cost:int min=1 label=label_Reward_cost, instructions:text, locations:Location[] label=label_Program_locations, active:bool=true } label="Reward"@{nl="Beloning"}
  Account in Program { customer:Customer, contact:Contact } label="Reward account"@{nl="Beloningsaccount"}
  SourceEvidence in Account { source:text unique, value:Qualification, reversed:bool=false, decided:bool=false }
  Earning in Account { tier:bool=false label="Counts toward tier"@{nl="Telt mee voor niveau"}, author:user?, qualification:SourceEvidence?, source:text unique label=label_Earning_source, points:int label="Points"@{nl="Punten"}, reason:text, reversal:Earning? label="Reversed entry"@{nl="Tegenboeking"} } label="Points entry"@{nl="Puntenboeking"}
  Redemption in Account { reward:Reward, name:text, instructions:text, locations:Location[]!, location:Location, fulfilled_by:user?, cancelled_by:user?, notification_delivery:delivery(Mail.send)?, cost:int label=label_Reward_cost, state:enum(reserved,fulfilled,cancelled)=reserved label={text="State"@{nl="Status"},values={reserved="Reserved"@{nl="Gereserveerd"},fulfilled="Fulfilled"@{nl="Uitgevoerd"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, evidence:text?, source:text unique label=label_Earning_source } label="Reward reservation"@{nl="Beloningsreservering"}
  scenario redeem(account:Account,reward:Reward,location:Location) -> Redemption by=authenticated label="Reserve reward"@{nl="Beloning reserveren"}
  scenario fulfill(redemption:Redemption,evidence:text) by=reward_staff label="Fulfill reward"@{nl="Beloning uitvoeren"}
  scenario cancel(redemption:Redemption,reason:text) by=reward_staff
  scenario adjust(account:Account,points:int,reason:text,tier:bool=false) by=reward_staff
  scenario reverse(entry:Earning,reason:text) by=reward_staff
  scenario earning on=Sales.qualification
  style LoyaltyWorkspace $"Make earned points and tier progress readable with restrained emphasis. Keep reward reservations, fulfillment evidence, and earning corrections in distinct labeled sections; preserve the difference between points, available perks, and cash or membership allowances. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { view:enum(rewards,history)=rewards label={text="Reward view"@{nl="Beloningsweergave"},values={rewards=heading_rewards,history="History"@{nl="Geschiedenis"}}}, location:Location? label="Reward location"@{nl="Beloningslocatie"}, redemption_state:Redemption.state? label="Reward state"@{nl="Beloningsstatus"} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). When this optional product is offered, order navigation as My rewards, Reward fulfillment for authorized staff, then Reward program for program owners. Reward/redemption details stay contextual. Protected program administration stays separate from preferences and fulfillment.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My rewards — verified own customer index | `breadcrumbs` plus a `hero` overview: split `stat` available/earned values, tier labels, tier-span text with a gated tier-progress `progress`, and rewards/history `tabs` bound to the remembered view. Reward list with `tooltip` redeem form; redemption Table with state `badge`, notification `status`, `pagination` and empty states; earning `timeline` with per-item `pagination`. | Reserve an affordable active reward through the guarded redemption operation; email or contact matching alone grants no account access |
| Redemption detail — contextual own/staff view | Reserved/fulfilled/cancelled state `badge` with snapshotted cost, frozen reward instructions/locations, earning/reversal references, attributed fulfillment evidence and a separate notification `status` reading the retained receipt outcome | Read the current receipt outcome; changing reward price cannot alter the old reservation |
| Reward fulfillment — scoped staff queue | `breadcrumbs`, location/status Select filters, and a redemption Table with state `badge`, notification `status`, `pagination` and empty state. Fulfill moves into a `modal` opened by `button opens=`, with an inline form carrying placed label/textarea/validation; per-row cancel `modal`; per-account adjust form with typed correction controls; earning Table with `pagination`, empty state and reverse `modal`. | Fulfill or cancel the existing reservation once; earning review and attributed corrections use guarded ledger actions, never direct balance editing |
| Reward program — protected owner index | `breadcrumbs`, a program form with placed term/cost/active controls, and tier/reward lists with `pagination`, empty states and threshold/cost/active text | Maintain published terms, tiers and rewards only under program-owner grants; customers cannot price their own reward |

Stack reward conditions and the point cost beside the redeem Button on narrow screens; present history as labeled rows. Distinguish loading, no points, no eligible rewards and filtered-empty. Preserve unsaved fulfillment evidence/program edits after invalid or stale submissions. Concurrent redemption refreshes affordability without promising the unavailable perk; repeated commands show their original outcome. Show notification failure independently of reservation state; a redemption with no associated notice shows the standard not-requested outcome. A reversal can produce an visible negative available-balance metric and owed-balance guidance that blocks new unaffordable redemptions while retaining history. Cancellation returns only the snapshotted reservation once. Workspace availability, membership units and cash never appear as interchangeable loyalty balances, and redemption is not evidence of delivery.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit the supplied full page reference. Replace every fictional location 'Main store' with 'Current location'. Change available points 450 to 400 because earned750 minus reserved50 minus fulfilled300 is400. Change Location filter to All states, or keep only canonical location filter. Preserve all other layout. No new operations, metrics, fields outside this correction. Preserve light daisyUI theme, LEFT sidebar and bottom-right account on desktop; closed mobile overlay on portrait. Return ONE full-page actual UI image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 04-loyalty-catalog-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLoyalty/playwright/references/04-loyalty-catalog-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLoyalty. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /loyalty title="My rewards"@{nl="Mijn beloningen"} $LoyaltyWorkspace
  page /loyalty/fulfillment title=page_loyalty_fulfillment_title $LoyaltyWorkspace
  page /loyalty/catalog title=page_loyalty_catalog_title $LoyaltyWorkspace
SELECTED PAGE:
  page /loyalty/catalog title=page_loyalty_catalog_title $LoyaltyWorkspace
   require program_owner
   breadcrumbs
   card "Program terms"@{nl="Programmavoorwaarden"}
    form Program.create
     fieldset "Program terms"@{nl="Programmavoorwaarden"}
      input name
      textarea terms
      input points_per_sale
      toggle active
    list Program display=split empty="No reward programs"@{nl="Geen beloningsprogramma's"}
     pagination
     edit
     tabs
      tab "Tiers"@{nl="Niveaus"}
       form Tier.create
       list row.Tier empty="No tiers recorded"@{nl="Geen niveaus vastgelegd"}
        pagination
        text row.threshold
        edit
      tab heading_rewards
       form Reward.create
       list row.Reward empty="No rewards recorded"@{nl="Geen beloningen vastgelegd"}
        pagination
        text row.cost,row.active
        edit
OWNING LABELS/DATA/FORMS/STYLES:
  message page_loyalty_fulfillment_title = "Reward fulfillment"@{nl="Beloningen uitvoeren"}
  message page_loyalty_catalog_title = "Reward program"@{nl="Beloningsprogramma"}
  message heading_rewards = "Rewards"@{nl="Beloningen"}
  message label_Program_locations = "Locations"@{nl="Locaties"}
  message label_Reward_cost = "Cost"@{nl="Kosten"}
  message label_Earning_source = "Source reference"@{nl="Bronreferentie"}
  role program_owner label="Program owner"@{nl="Programma-eigenaar"}
  role reward_staff label="Reward staff"@{nl="Beloningsmedewerker"}
  Program { name:text, locations:Location[] label=label_Program_locations, terms:text label="Terms"@{nl="Voorwaarden"}, products:text[]! min=1 label="Qualifying products"@{nl="Kwalificerende producten"}, points_per_sale:int min=1 label="Points per sale"@{nl="Punten per verkoop"}, active:bool=true } label=page_loyalty_catalog_title
  Tier in Program { name:text, threshold:int min=0 label="Points threshold"@{nl="Puntendrempel"} } label="Reward tier"@{nl="Beloningsniveau"}
  Reward in Program { name:text, cost:int min=1 label=label_Reward_cost, instructions:text, locations:Location[] label=label_Program_locations, active:bool=true } label="Reward"@{nl="Beloning"}
  Account in Program { customer:Customer, contact:Contact } label="Reward account"@{nl="Beloningsaccount"}
  SourceEvidence in Account { source:text unique, value:Qualification, reversed:bool=false, decided:bool=false }
  Earning in Account { tier:bool=false label="Counts toward tier"@{nl="Telt mee voor niveau"}, author:user?, qualification:SourceEvidence?, source:text unique label=label_Earning_source, points:int label="Points"@{nl="Punten"}, reason:text, reversal:Earning? label="Reversed entry"@{nl="Tegenboeking"} } label="Points entry"@{nl="Puntenboeking"}
  Redemption in Account { reward:Reward, name:text, instructions:text, locations:Location[]!, location:Location, fulfilled_by:user?, cancelled_by:user?, notification_delivery:delivery(Mail.send)?, cost:int label=label_Reward_cost, state:enum(reserved,fulfilled,cancelled)=reserved label={text="State"@{nl="Status"},values={reserved="Reserved"@{nl="Gereserveerd"},fulfilled="Fulfilled"@{nl="Uitgevoerd"},cancelled="Cancelled"@{nl="Geannuleerd"}}}, evidence:text?, source:text unique label=label_Earning_source } label="Reward reservation"@{nl="Beloningsreservering"}
  scenario redeem(account:Account,reward:Reward,location:Location) -> Redemption by=authenticated label="Reserve reward"@{nl="Beloning reserveren"}
  scenario fulfill(redemption:Redemption,evidence:text) by=reward_staff label="Fulfill reward"@{nl="Beloning uitvoeren"}
  scenario cancel(redemption:Redemption,reason:text) by=reward_staff
  scenario adjust(account:Account,points:int,reason:text,tier:bool=false) by=reward_staff
  scenario reverse(entry:Earning,reason:text) by=reward_staff
  scenario earning on=Sales.qualification
  style LoyaltyWorkspace $"Make earned points and tier progress readable with restrained emphasis. Keep reward reservations, fulfillment evidence, and earning corrections in distinct labeled sections; preserve the difference between points, available perks, and cash or membership allowances. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { view:enum(rewards,history)=rewards label={text="Reward view"@{nl="Beloningsweergave"},values={rewards=heading_rewards,history="History"@{nl="Geschiedenis"}}}, location:Location? label="Reward location"@{nl="Beloningslocatie"}, redemption_state:Redemption.state? label="Reward state"@{nl="Beloningsstatus"} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). When this optional product is offered, order navigation as My rewards, Reward fulfillment for authorized staff, then Reward program for program owners. Reward/redemption details stay contextual. Protected program administration stays separate from preferences and fulfillment.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My rewards — verified own customer index | `breadcrumbs` plus a `hero` overview: split `stat` available/earned values, tier labels, tier-span text with a gated tier-progress `progress`, and rewards/history `tabs` bound to the remembered view. Reward list with `tooltip` redeem form; redemption Table with state `badge`, notification `status`, `pagination` and empty states; earning `timeline` with per-item `pagination`. | Reserve an affordable active reward through the guarded redemption operation; email or contact matching alone grants no account access |
| Redemption detail — contextual own/staff view | Reserved/fulfilled/cancelled state `badge` with snapshotted cost, frozen reward instructions/locations, earning/reversal references, attributed fulfillment evidence and a separate notification `status` reading the retained receipt outcome | Read the current receipt outcome; changing reward price cannot alter the old reservation |
| Reward fulfillment — scoped staff queue | `breadcrumbs`, location/status Select filters, and a redemption Table with state `badge`, notification `status`, `pagination` and empty state. Fulfill moves into a `modal` opened by `button opens=`, with an inline form carrying placed label/textarea/validation; per-row cancel `modal`; per-account adjust form with typed correction controls; earning Table with `pagination`, empty state and reverse `modal`. | Fulfill or cancel the existing reservation once; earning review and attributed corrections use guarded ledger actions, never direct balance editing |
| Reward program — protected owner index | `breadcrumbs`, a program form with placed term/cost/active controls, and tier/reward lists with `pagination`, empty states and threshold/cost/active text | Maintain published terms, tiers and rewards only under program-owner grants; customers cannot price their own reward |

Stack reward conditions and the point cost beside the redeem Button on narrow screens; present history as labeled rows. Distinguish loading, no points, no eligible rewards and filtered-empty. Preserve unsaved fulfillment evidence/program edits after invalid or stale submissions. Concurrent redemption refreshes affordability without promising the unavailable perk; repeated commands show their original outcome. Show notification failure independently of reservation state; a redemption with no associated notice shows the standard not-requested outcome. A reversal can produce an visible negative available-balance metric and owed-balance guidance that blocks new unaffordable redemptions while retaining history. Cancellation returns only the snapshotted reservation once. Workspace availability, membership units and cash never appear as interchangeable loyalty balances, and redemption is not evidence of delivery.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```


