# CanMember exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-membership-plans-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMember/playwright/references/02-membership-plans-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMember. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
  page /companies/{Customer.id}/membership-access title="Company membership access"@{nl="Bedrijfslidmaatschapstoegang"} $MemberTermsWorkspace
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
  page /membership/content/edit title="Edit member information"@{nl="Ledeninformatie bewerken"} $MemberContentWorkspace
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
SELECTED PAGE:
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
   require plan_owner
   breadcrumbs
   card "Plan catalog"@{nl="Abonnementscatalogus"}
    form Plan.create
     fieldset
      input name
      input price
      input months
      textarea access_hours
      checkbox mail
      input guest_limit
      input seats
      checkbox active
   card "Benefits and units"@{nl="Voordelen en eenheden"}
    list Plan filter=active defaults={active=preferences.active_filter} empty="No membership plans match this filter"@{nl="Geen lidmaatschapsabonnementen voldoen aan dit filter"} display=split
     edit
     form AccessHours.create
      fieldset
       select location
       input opens
       input closes
       input close_after
       radio fold
     table row.AccessHours columns=location,weekdays,opens,closes,close_after,fold empty="No access hours for this plan"@{nl="Geen toegangsuren voor dit abonnement"}
      edit
      pagination
     form Benefit.create
      fieldset
       input product
       radio unit
       input quantity
       input duration
       input overage
     table row.Benefit columns=product,unit,quantity,duration,overage empty="No benefits for this plan"@{nl="Geen voordelen voor dit abonnement"}
      edit
      pagination
     history
     pagination


OWNING LABELS/DATA/FORMS/STYLES:
  role plan_owner label="Plan owner"@{nl="Abonnementseigenaar"}
  export AccessHours in Plan { location:Location, weekdays:int[]! label="Days of week"@{nl="Weekdagen"}, opens:text="09:00" label="Opens"@{nl="Opent"}, closes:text="18:00" label="Closes"@{nl="Sluit"}, close_after:int=0 min=0 max=1 label="Closing day offset"@{nl="Dagverschuiving sluiting"}, fold:enum(earlier,later)=earlier label={text="Clock-change choice"@{nl="Keuze bij klokwijziging"},values={earlier="Earlier occurrence"@{nl="Eerder tijdstip"},later="Later occurrence"@{nl="Later tijdstip"}}} } label="Purchased access hours"@{nl="Gekochte toegangsuren"}
  export Plan { name:text trim min=1, price:money, months:int=1 min=1 label="Months"@{nl="Maanden"}, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[] label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, mail:bool=false label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int=1 min=1 label="Seats"@{nl="Plaatsen"}, active:bool=true } label="Membership plan"@{nl="Lidmaatschapsabonnement"}
  export Benefit in Plan { product:text label="Product"@{nl="Product"}, unit:enum(hour,day,visit) label={text="Unit"@{nl="Eenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"},visit="Visit"@{nl="Bezoek"}}}, quantity:decimal min=0, duration:duration, overage:money label="Overage per unit"@{nl="Meerprijs per eenheid"} } label="Plan benefit"@{nl="Abonnementsvoordeel"}
  preferences { active_filter:bool? label="Active plans"@{nl="Actieve abonnementen"} }
  message page_membership_register_title = "Membership register"@{nl="Lidmaatschapsregister"}
  message label_included_units = "Included units"@{nl="Inbegrepen eenheden"}
  message label_overage = "Monetary overage"@{nl="Meerprijs in geld"}
  message label_package = "Membership"@{nl="Lidmaatschap"}
  message label_Entitlement_customer = "Customer"@{nl="Klant"}
  message label_Entitlement_account = "Account"@{nl="Account"}
  message label_Entitlement_product = "Product"@{nl="Product"}
  message label_Entitlement_from = "Start"@{nl="Begin"}
  message label_Entitlement_until = "End"@{nl="Einde"}
  message label_Entitlement_source = "Source reference"@{nl="Bronreferentie"}
  message label_Membership_consent = "Recurrence consent"@{nl="Toestemming voor herhaling"}
  message label_Term = "Paid term"@{nl="Betaalde termijn"}
  message label_Term_locations = "Locations"@{nl="Locaties"}
  message label_Term_cycle = "Billing cycle"@{nl="Facturatiecyclus"}
  role member_manager label="Membership manager"@{nl="Lidmaatschapsbeheerder"}
  export Membership in Customer { account:user label=label_Entitlement_account, plan:Plan, paused:bool=false label="Paused"@{nl="Gepauzeerd"}, revoked:bool=false label="Revoked"@{nl="Ingetrokken"}, recurrence:bool=false label="Recurrence"@{nl="Herhaling"}, consent:text? label=label_Membership_consent, cancellation_at:datetime? label="Cancellation effective date"@{nl="Ingangsdatum annulering"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, next_cycle:int=1 min=1, access_revision:int=0, anchor:date label="Calendar anchor"@{nl="Kalenderanker"}, timezone:timezone, months:int=1 min=1 label="Months"@{nl="Maanden"} } label=label_package
  export Term in Membership { billing_location:Location?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, source:text unique label=label_Entitlement_source, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, price:money, locations:Location[]! label=label_Term_locations, products:text[]! label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, hours:MemberHours[]! label="Purchased access windows"@{nl="Gekochte toegangstijdvakken"}, mail:bool label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int label="Seats"@{nl="Plaatsen"}, paid:bool=false label="Paid"@{nl="Betaald"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, cycle:int label=label_Term_cycle, title:text="Membership", automatic:bool=false, consent:text?, settlement_revision:int=0, collection:enum(pending,confirmed,failed,unknown)=pending label={text="Invoice creation"@{nl="Factuuraanmaak"},values={pending="Pending"@{nl="In afwachting"},confirmed="Invoice confirmed"@{nl="Factuur bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, charge_delivery:text?, reconcile_delivery:text?, refund_delivery:text?, cancellation:enum(none,pending,applied)=none label={text="Cancellation outcome"@{nl="Annuleringsresultaat"},values={none="No cancellation"@{nl="Geen annulering"},pending="Pending"@{nl="In afwachting"},applied="Applied"@{nl="Toegepast"}}}, refund_requested:money? label="Requested refund"@{nl="Aangevraagde terugbetaling"}, refund_access:enum(none,retain,revoke)=none label={text="Refund access decision"@{nl="Toegangsbesluit bij terugbetaling"},values={none="No decision"@{nl="Geen besluit"},retain="Retain paid access"@{nl="Betaalde toegang behouden"},revoke="Revoke paid access"@{nl="Betaalde toegang intrekken"}}} } label=label_Term
  Seat in Term { account:user label=label_Entitlement_account, active:bool=true, removed_reason:text? label="Removal reason"@{nl="Reden intrekking"} } label="Paid seat"@{nl="Betaalde plaats"}
  Allowance in Term { product:text label=label_Entitlement_product, unit:Benefit.unit, duration:duration, overage:money label=label_overage, granted:decimal label="Granted units"@{nl="Toegekende eenheden"}, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until } label="Allowance"@{nl="Tegoed"}
  BenefitRequest in Customer { source:text unique label=label_Entitlement_source, value:Entitlement, previous:BenefitRequest?, state:enum(staged,reserved,consumed,released)=reserved label={text="Allowance state"@{nl="Tegoedstatus"},values={staged="Replacement staged"@{nl="Vervanging voorbereid"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"}}}, revision:int=1, result:OperationOutcome.state=confirmed, units:decimal=0 label="Requested units"@{nl="Aangevraagde eenheden"}, covered_units:decimal=0 label=label_included_units, overage:money label=label_overage, review_reason:text? label="Reconciliation reason"@{nl="Afstemmingsreden"} } label="Benefit request"@{nl="Voordeelaanvraag"}
  Allocation in Allowance { request:BenefitRequest, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, requested_units:decimal label="Requested units"@{nl="Aangevraagde eenheden"}, units:decimal label=label_included_units, held:decimal label="Additional held units"@{nl="Extra geblokkeerde eenheden"}, state:BenefitRequest.state=reserved label="Allowance state"@{nl="Tegoedstatus"} } label="Allowance allocation"@{nl="Tegoedtoewijzing"}
  BenefitFence in Customer { source:text unique, restore_consumed:bool=false }
  Reversal in Allocation { source:text unique, units:decimal, restored:bool } label="Allowance reversal"@{nl="Tegoedterugboeking"}
  Renewal in Membership { capture:Capture?, cycle:int label=label_Term_cycle, requester:user? label="Requester"@{nl="Aanvrager"}, automatic:bool=false label="Automatic renewal"@{nl="Automatische verlenging"}, consent:text? label=label_Membership_consent, state:enum(pending,created,skipped,failed)=pending label={text="Renewal outcome"@{nl="Verlengingsresultaat"},values={pending="Pending"@{nl="In afwachting"},created="Term created"@{nl="Termijn aangemaakt"},skipped="Skipped"@{nl="Overgeslagen"},failed="Failed"@{nl="Mislukt"}}}, term:Term? label=label_Term } label="Renewal request"@{nl="Verlengingsaanvraag"}
  CommercialSale in Term { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  AccessWatch in Customer { source:text unique, account:user, location:Location, at:datetime, until:datetime, revision:int=0 } label="Access verification"@{nl="Toegangscontrole"}
  export Content { title:text, category:text label="Content category"@{nl="Inhoudscategorie"}, body:text, locations:Location[]! label=label_Term_locations, plans:Plan[] label="Plan audience"@{nl="Abonnementsdoelgroep"}, published:bool=false label="Published"@{nl="Gepubliceerd"}, attachment:file? label="Member document"@{nl="Ledendocument"}, staff_only:bool=false label="Staff only"@{nl="Alleen personeel"} } label="Member content"@{nl="Ledeninformatie"}
  scenario calendar_snapshot on=Membership.create
  export scenario term(membership:Membership,cycle:int label=label_Term_cycle,capture:Capture?=null) by=member_manager or authenticated label=label_Term
  scenario create_term on=RenewalDue
  scenario renewal_tick on=MembershipDue
  scenario retry_renewal(renewal:Renewal) by=member_manager or authenticated label="Retry renewal generation"@{nl="Verlengingsgeneratie opnieuw proberen"}
  scenario assign(term:Term,account:user label=label_Entitlement_account) by=authenticated
  scenario remove(seat:Seat,reason:text) by=authenticated or member_manager label="Remove seat"@{nl="Plaats intrekken"}
  scenario reserve on=Requests.reserve
  scenario commit on=Requests.commit
  scenario consume on=Requests.consume
  scenario release on=Requests.release
  scenario reconcile on=Requests.reconcile
  scenario eligibility on=Requests.eligibility
  scenario pause(membership:Membership,reason:text) by=member_manager
  scenario resume(membership:Membership) by=member_manager
  scenario revoke_membership(membership:Membership,reason:text) by=member_manager label="Revoke benefits"@{nl="Voordelen intrekken"}
  scenario consent(membership:Membership,enabled:bool,reference:text? label=label_Membership_consent) by=authenticated label=label_Membership_consent
  scenario cancel_membership(membership:Membership,effective:datetime label="Cancellation effective date"@{nl="Ingangsdatum annulering"},reason:text) by=authenticated label="Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"}
  scenario refund_term(term:Term,amount:money,revoke_access:bool label="Revoke access"@{nl="Toegang intrekken"},reason:text) by=member_manager label="Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"}
  scenario charge_result on=Billing.charge.completed
  scenario retry_collection(term:Term) by=member_manager or authenticated label="Retry term invoice"@{nl="Termijnfactuur opnieuw proberen"}
  scenario settlement on=Billing.settled
  scenario reconcile_payment on=Billing.reconcile.completed
  scenario apply_settlement on=SettlementReceived
  scenario payment_recovery on=PaymentCheck
  scenario term_boundary on=TermBoundary
  scenario commercial_check on=CommercialCheck
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> MembershipAccessReview by=authenticated or member_manager label="Inspect membership access review"@{nl="Beoordeel lidmaatschapstoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or member_manager label="Recheck membership access"@{nl="Controleer lidmaatschapstoegang opnieuw"}
  scenario company_changed on=CompanyAccessChanged
  scenario company_access_step on=CompanyAccessStep
  scenario access_changed on=AccessChanged
  scenario allocation_access_step on=AllocationAccessStep
  scenario watch_access_step on=WatchAccessStep
  style MemberTermsWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { current_only:bool=false label="Current terms only"@{nl="Alleen huidige termijnen"} }
  style MemberContentWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order accessible navigation as My membership, Member information, Membership register, then Membership plans for plan owners. Contextual member details retain authenticated billing/renewal after expiry. Customer and employee identities remain distinct.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My membership — own index | Breadcrumbs and a current-only Toggle; own Membership Cards with paused/revoked state text, consent Fieldset and renewal tooltips; per-term collection/cancellation/refund Badges with price/seat Stats; allowance ledger Stats and Allocation tables; empty state per collection | Request identified renewal terms and retry failed term invoices inline; cancellation/refund/removal open captioned modals with identical bindings; change recorded auto-renew consent; own booking/ticket/invoice/support links require their source grants |
| Member information — paid-content index | Published site guides in List/Card groups with reception hours, arrival/check-in, house rules, facilities and support/contact; breadcrumbs, empty states and a gated member-document Link per guide | Read current eligible location/plan content; contextual Reception invitations or Mail items retain independent role checks |
| Membership register — permitted staff index | Period Alert, breadcrumbs and a current-only Toggle; same per-term Badges/Stats as My membership; paginated Allowance/Seat tables, renewal tooltips and empty states per collection | Maintain memberships/terms, copy current payment links; resume stays inline while pause/revocation/refund/removal open captioned modals with identical bindings |
| Company seats — contextual own-company view | Breadcrumbs; paused/revoked state text; per-term collection/cancellation Badges; assign form and seat-remove modal; paginated seat/request tables with empty states | Authorized company administrators assign/remove only available paid seats; affected future reservations and device reconciliation remain explicit |
| Membership plans/content — protected owner/editor views | Plan/benefit/hours Fieldsets (location Select, fold/unit Radios) and unit rules Table; published state text and typed create Fieldset on the editor view; paginated child tables; tri-state active filter stays in the shared dialog | Plan owners maintain sellable plans/benefits; content publication cannot change paid entitlement or historical snapshots |

On mobile, place paid-until, next action and expiry/renewal before history. Distinguish loading, no applicable paid term, no granted content and filtered-empty. Preserve unsaved consent/content input on validation or stale saves. Show pending/failed/unknown collections and seat/allowance reconciliation without unpaid grace. Display granted/reserved/consumed/expired units separately; an expired-period release never creates current credit. Use recorded business timezone/calendar periods and frozen unit/overage rules. Customer price, seat and allowance history survives expiry; paid content is reauthorized on each request. Separate plan administration from personal settings; exclude provider/retry configuration.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 03-membership-access-review-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMember/playwright/references/03-membership-access-review-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Keep the supplied LEFT sidebar and bottom-right account. Source page contains ONLY "Current seat and allowance review" card with two forms and four returned counts. REMOVE the entire invented Membership overview, Seats and Benefit requests sections. Remove counts' invented total denominators. Keep the four actual results Seats needing review1, Requests needing review1, Pending reviews1, Recorded conflicts0. Below render canonical "Access review" form Customer, Location and submit "Review access"; render separate "Recheck access" form Customer, Location and submit "Recheck access". Current location only. No invented membership details, statuses, tables or new operations. Spacious light daisyUI actual full-page UI; no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMember. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
  page /companies/{Customer.id}/membership-access title="Company membership access"@{nl="Bedrijfslidmaatschapstoegang"} $MemberTermsWorkspace
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
  page /membership/content/edit title="Edit member information"@{nl="Ledeninformatie bewerken"} $MemberContentWorkspace
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
SELECTED PAGE:
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
   require actor!=null and (member_manager or any(Customer as customer,has_role(actor,customer,administrator)))
   breadcrumbs
   card "Current seat and allowance review"@{nl="Huidige plaats- en tegoedbeoordeling"}
    form access_review
     text result.seats_needing_review,result.requests_needing_review,result.pending_reviews,result.recorded_conflicts
    form recheck_access
OWNING LABELS/DATA/FORMS/STYLES:
  role plan_owner label="Plan owner"@{nl="Abonnementseigenaar"}
  export AccessHours in Plan { location:Location, weekdays:int[]! label="Days of week"@{nl="Weekdagen"}, opens:text="09:00" label="Opens"@{nl="Opent"}, closes:text="18:00" label="Closes"@{nl="Sluit"}, close_after:int=0 min=0 max=1 label="Closing day offset"@{nl="Dagverschuiving sluiting"}, fold:enum(earlier,later)=earlier label={text="Clock-change choice"@{nl="Keuze bij klokwijziging"},values={earlier="Earlier occurrence"@{nl="Eerder tijdstip"},later="Later occurrence"@{nl="Later tijdstip"}}} } label="Purchased access hours"@{nl="Gekochte toegangsuren"}
  export Plan { name:text trim min=1, price:money, months:int=1 min=1 label="Months"@{nl="Maanden"}, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[] label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, mail:bool=false label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int=1 min=1 label="Seats"@{nl="Plaatsen"}, active:bool=true } label="Membership plan"@{nl="Lidmaatschapsabonnement"}
  export Benefit in Plan { product:text label="Product"@{nl="Product"}, unit:enum(hour,day,visit) label={text="Unit"@{nl="Eenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"},visit="Visit"@{nl="Bezoek"}}}, quantity:decimal min=0, duration:duration, overage:money label="Overage per unit"@{nl="Meerprijs per eenheid"} } label="Plan benefit"@{nl="Abonnementsvoordeel"}
  preferences { active_filter:bool? label="Active plans"@{nl="Actieve abonnementen"} }
  message page_membership_register_title = "Membership register"@{nl="Lidmaatschapsregister"}
  message label_included_units = "Included units"@{nl="Inbegrepen eenheden"}
  message label_overage = "Monetary overage"@{nl="Meerprijs in geld"}
  message label_package = "Membership"@{nl="Lidmaatschap"}
  message label_Entitlement_customer = "Customer"@{nl="Klant"}
  message label_Entitlement_account = "Account"@{nl="Account"}
  message label_Entitlement_product = "Product"@{nl="Product"}
  message label_Entitlement_from = "Start"@{nl="Begin"}
  message label_Entitlement_until = "End"@{nl="Einde"}
  message label_Entitlement_source = "Source reference"@{nl="Bronreferentie"}
  message label_Membership_consent = "Recurrence consent"@{nl="Toestemming voor herhaling"}
  message label_Term = "Paid term"@{nl="Betaalde termijn"}
  message label_Term_locations = "Locations"@{nl="Locaties"}
  message label_Term_cycle = "Billing cycle"@{nl="Facturatiecyclus"}
  role member_manager label="Membership manager"@{nl="Lidmaatschapsbeheerder"}
  export Membership in Customer { account:user label=label_Entitlement_account, plan:Plan, paused:bool=false label="Paused"@{nl="Gepauzeerd"}, revoked:bool=false label="Revoked"@{nl="Ingetrokken"}, recurrence:bool=false label="Recurrence"@{nl="Herhaling"}, consent:text? label=label_Membership_consent, cancellation_at:datetime? label="Cancellation effective date"@{nl="Ingangsdatum annulering"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, next_cycle:int=1 min=1, access_revision:int=0, anchor:date label="Calendar anchor"@{nl="Kalenderanker"}, timezone:timezone, months:int=1 min=1 label="Months"@{nl="Maanden"} } label=label_package
  export Term in Membership { billing_location:Location?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, source:text unique label=label_Entitlement_source, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, price:money, locations:Location[]! label=label_Term_locations, products:text[]! label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, hours:MemberHours[]! label="Purchased access windows"@{nl="Gekochte toegangstijdvakken"}, mail:bool label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int label="Seats"@{nl="Plaatsen"}, paid:bool=false label="Paid"@{nl="Betaald"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, cycle:int label=label_Term_cycle, title:text="Membership", automatic:bool=false, consent:text?, settlement_revision:int=0, collection:enum(pending,confirmed,failed,unknown)=pending label={text="Invoice creation"@{nl="Factuuraanmaak"},values={pending="Pending"@{nl="In afwachting"},confirmed="Invoice confirmed"@{nl="Factuur bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, charge_delivery:text?, reconcile_delivery:text?, refund_delivery:text?, cancellation:enum(none,pending,applied)=none label={text="Cancellation outcome"@{nl="Annuleringsresultaat"},values={none="No cancellation"@{nl="Geen annulering"},pending="Pending"@{nl="In afwachting"},applied="Applied"@{nl="Toegepast"}}}, refund_requested:money? label="Requested refund"@{nl="Aangevraagde terugbetaling"}, refund_access:enum(none,retain,revoke)=none label={text="Refund access decision"@{nl="Toegangsbesluit bij terugbetaling"},values={none="No decision"@{nl="Geen besluit"},retain="Retain paid access"@{nl="Betaalde toegang behouden"},revoke="Revoke paid access"@{nl="Betaalde toegang intrekken"}}} } label=label_Term
  Seat in Term { account:user label=label_Entitlement_account, active:bool=true, removed_reason:text? label="Removal reason"@{nl="Reden intrekking"} } label="Paid seat"@{nl="Betaalde plaats"}
  Allowance in Term { product:text label=label_Entitlement_product, unit:Benefit.unit, duration:duration, overage:money label=label_overage, granted:decimal label="Granted units"@{nl="Toegekende eenheden"}, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until } label="Allowance"@{nl="Tegoed"}
  BenefitRequest in Customer { source:text unique label=label_Entitlement_source, value:Entitlement, previous:BenefitRequest?, state:enum(staged,reserved,consumed,released)=reserved label={text="Allowance state"@{nl="Tegoedstatus"},values={staged="Replacement staged"@{nl="Vervanging voorbereid"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"}}}, revision:int=1, result:OperationOutcome.state=confirmed, units:decimal=0 label="Requested units"@{nl="Aangevraagde eenheden"}, covered_units:decimal=0 label=label_included_units, overage:money label=label_overage, review_reason:text? label="Reconciliation reason"@{nl="Afstemmingsreden"} } label="Benefit request"@{nl="Voordeelaanvraag"}
  Allocation in Allowance { request:BenefitRequest, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, requested_units:decimal label="Requested units"@{nl="Aangevraagde eenheden"}, units:decimal label=label_included_units, held:decimal label="Additional held units"@{nl="Extra geblokkeerde eenheden"}, state:BenefitRequest.state=reserved label="Allowance state"@{nl="Tegoedstatus"} } label="Allowance allocation"@{nl="Tegoedtoewijzing"}
  BenefitFence in Customer { source:text unique, restore_consumed:bool=false }
  Reversal in Allocation { source:text unique, units:decimal, restored:bool } label="Allowance reversal"@{nl="Tegoedterugboeking"}
  Renewal in Membership { capture:Capture?, cycle:int label=label_Term_cycle, requester:user? label="Requester"@{nl="Aanvrager"}, automatic:bool=false label="Automatic renewal"@{nl="Automatische verlenging"}, consent:text? label=label_Membership_consent, state:enum(pending,created,skipped,failed)=pending label={text="Renewal outcome"@{nl="Verlengingsresultaat"},values={pending="Pending"@{nl="In afwachting"},created="Term created"@{nl="Termijn aangemaakt"},skipped="Skipped"@{nl="Overgeslagen"},failed="Failed"@{nl="Mislukt"}}}, term:Term? label=label_Term } label="Renewal request"@{nl="Verlengingsaanvraag"}
  CommercialSale in Term { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  AccessWatch in Customer { source:text unique, account:user, location:Location, at:datetime, until:datetime, revision:int=0 } label="Access verification"@{nl="Toegangscontrole"}
  export Content { title:text, category:text label="Content category"@{nl="Inhoudscategorie"}, body:text, locations:Location[]! label=label_Term_locations, plans:Plan[] label="Plan audience"@{nl="Abonnementsdoelgroep"}, published:bool=false label="Published"@{nl="Gepubliceerd"}, attachment:file? label="Member document"@{nl="Ledendocument"}, staff_only:bool=false label="Staff only"@{nl="Alleen personeel"} } label="Member content"@{nl="Ledeninformatie"}
  scenario calendar_snapshot on=Membership.create
  export scenario term(membership:Membership,cycle:int label=label_Term_cycle,capture:Capture?=null) by=member_manager or authenticated label=label_Term
  scenario create_term on=RenewalDue
  scenario renewal_tick on=MembershipDue
  scenario retry_renewal(renewal:Renewal) by=member_manager or authenticated label="Retry renewal generation"@{nl="Verlengingsgeneratie opnieuw proberen"}
  scenario assign(term:Term,account:user label=label_Entitlement_account) by=authenticated
  scenario remove(seat:Seat,reason:text) by=authenticated or member_manager label="Remove seat"@{nl="Plaats intrekken"}
  scenario reserve on=Requests.reserve
  scenario commit on=Requests.commit
  scenario consume on=Requests.consume
  scenario release on=Requests.release
  scenario reconcile on=Requests.reconcile
  scenario eligibility on=Requests.eligibility
  scenario pause(membership:Membership,reason:text) by=member_manager
  scenario resume(membership:Membership) by=member_manager
  scenario revoke_membership(membership:Membership,reason:text) by=member_manager label="Revoke benefits"@{nl="Voordelen intrekken"}
  scenario consent(membership:Membership,enabled:bool,reference:text? label=label_Membership_consent) by=authenticated label=label_Membership_consent
  scenario cancel_membership(membership:Membership,effective:datetime label="Cancellation effective date"@{nl="Ingangsdatum annulering"},reason:text) by=authenticated label="Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"}
  scenario refund_term(term:Term,amount:money,revoke_access:bool label="Revoke access"@{nl="Toegang intrekken"},reason:text) by=member_manager label="Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"}
  scenario charge_result on=Billing.charge.completed
  scenario retry_collection(term:Term) by=member_manager or authenticated label="Retry term invoice"@{nl="Termijnfactuur opnieuw proberen"}
  scenario settlement on=Billing.settled
  scenario reconcile_payment on=Billing.reconcile.completed
  scenario apply_settlement on=SettlementReceived
  scenario payment_recovery on=PaymentCheck
  scenario term_boundary on=TermBoundary
  scenario commercial_check on=CommercialCheck
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> MembershipAccessReview by=authenticated or member_manager label="Inspect membership access review"@{nl="Beoordeel lidmaatschapstoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or member_manager label="Recheck membership access"@{nl="Controleer lidmaatschapstoegang opnieuw"}
  scenario company_changed on=CompanyAccessChanged
  scenario company_access_step on=CompanyAccessStep
  scenario access_changed on=AccessChanged
  scenario allocation_access_step on=AllocationAccessStep
  scenario watch_access_step on=WatchAccessStep
  style MemberTermsWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { current_only:bool=false label="Current terms only"@{nl="Alleen huidige termijnen"} }
  style MemberContentWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order accessible navigation as My membership, Member information, Membership register, then Membership plans for plan owners. Contextual member details retain authenticated billing/renewal after expiry. Customer and employee identities remain distinct.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My membership — own index | Breadcrumbs and a current-only Toggle; own Membership Cards with paused/revoked state text, consent Fieldset and renewal tooltips; per-term collection/cancellation/refund Badges with price/seat Stats; allowance ledger Stats and Allocation tables; empty state per collection | Request identified renewal terms and retry failed term invoices inline; cancellation/refund/removal open captioned modals with identical bindings; change recorded auto-renew consent; own booking/ticket/invoice/support links require their source grants |
| Member information — paid-content index | Published site guides in List/Card groups with reception hours, arrival/check-in, house rules, facilities and support/contact; breadcrumbs, empty states and a gated member-document Link per guide | Read current eligible location/plan content; contextual Reception invitations or Mail items retain independent role checks |
| Membership register — permitted staff index | Period Alert, breadcrumbs and a current-only Toggle; same per-term Badges/Stats as My membership; paginated Allowance/Seat tables, renewal tooltips and empty states per collection | Maintain memberships/terms, copy current payment links; resume stays inline while pause/revocation/refund/removal open captioned modals with identical bindings |
| Company seats — contextual own-company view | Breadcrumbs; paused/revoked state text; per-term collection/cancellation Badges; assign form and seat-remove modal; paginated seat/request tables with empty states | Authorized company administrators assign/remove only available paid seats; affected future reservations and device reconciliation remain explicit |
| Membership plans/content — protected owner/editor views | Plan/benefit/hours Fieldsets (location Select, fold/unit Radios) and unit rules Table; published state text and typed create Fieldset on the editor view; paginated child tables; tri-state active filter stays in the shared dialog | Plan owners maintain sellable plans/benefits; content publication cannot change paid entitlement or historical snapshots |

On mobile, place paid-until, next action and expiry/renewal before history. Distinguish loading, no applicable paid term, no granted content and filtered-empty. Preserve unsaved consent/content input on validation or stale saves. Show pending/failed/unknown collections and seat/allowance reconciliation without unpaid grace. Display granted/reserved/consumed/expired units separately; an expired-period release never creates current credit. Use recorded business timezone/calendar periods and frozen unit/overage rules. Customer price, seat and allowance history survives expiry; paid content is reauthorized on each request. Separate plan administration from personal settings; exclude provider/retry configuration.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 05-membership-mine-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMember/playwright/references/05-membership-mine-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied actual full-page UI. For this own individual member view remove 'Remove my seat', disabled Remove row action and the prose claiming users remove their own seat. Seat removal requires company administrator/member manager grants; do not show it here. Remove Retry term invoice button for the confirmed paid term. Label recurrence Reference as 'Reference (required when enabled)', not optional. Preserve layout. Preserve LEFT sidebar, bottom-right account and entire existing light daisyUI layout. No new fields, operations or metrics outside correction. One full-page image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMember. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
  page /companies/{Customer.id}/membership-access title="Company membership access"@{nl="Bedrijfslidmaatschapstoegang"} $MemberTermsWorkspace
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
  page /membership/content/edit title="Edit member information"@{nl="Ledeninformatie bewerken"} $MemberContentWorkspace
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
SELECTED PAGE:
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
   require authenticated
   breadcrumbs
   preferences
    toggle current_only
   card "Own membership and consent"@{nl="Eigen lidmaatschap en toestemming"}
    list Membership empty="No memberships for your account"@{nl="Geen lidmaatschappen voor je account"} display=split
     text row.paused,row.revoked
     form consent
      fieldset
       checkbox enabled
       input reference
     form term
     button opens=membership_cancel
     modal "Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"} id=membership_cancel
      slot content
       form cancel_membership arguments={membership=row} display=inline
        fieldset
         input effective
         textarea reason
     table row.Renewal columns=cycle,state,term empty="No renewal requests for this membership"@{nl="Geen verlengingsaanvragen voor dit lidmaatschap"}
      tooltip "Retry renewal"@{nl="Verlenging opnieuw proberen"}
       action retry_renewal
      pagination
     list row.Term as term where not preferences.current_only or (term.from<=now and now<term.until) empty="No terms in this view"@{nl="Geen termijnen in deze weergave"}
      show TermOutcome {row=term}
      badge term.refund_access
      text term.mail,term.invoice
      stat term.seats
      actions retry_collection
      button opens=term_refund_mine
      modal "Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"} id=term_refund_mine
       slot content
        form refund_term arguments={term=row} display=inline
         fieldset
          input amount
          checkbox revoke_access
          textarea reason
      tabs
       tab "Term seats"@{nl="Termijnplaatsen"}
        form assign
        list row.Seat empty="No seats assigned for this term"@{nl="Geen plaatsen toegewezen voor deze termijn"}
         button opens=seat_remove_mine
         modal "Remove seat"@{nl="Plaats intrekken"} id=seat_remove_mine
          slot content
           form remove arguments={seat=row} display=inline
            fieldset
             textarea reason
         pagination
       tab "Allowance allocations"@{nl="Tegoedtoewijzingen"}
        list row.Allowance empty="No allowances in this term"@{nl="Geen tegoeden in deze termijn"}
         badge row.unit
         stat row.granted,row.available,row.reserved,row.consumed,row.expired
         text row.product,row.overage,row.from,row.until
         table row.Allocation columns=from,until,units,held,state empty="No allocations for this allowance"@{nl="Geen toewijzingen voor dit tegoed"}
          pagination
         pagination
      pagination
     table row.parent.BenefitRequest columns=source,units,covered_units,overage,state,review_reason empty="No benefit requests for this account"@{nl="Geen voordeelaanvragen voor dit account"}
      pagination
     history
     pagination
OWNING LABELS/DATA/FORMS/STYLES:
  role plan_owner label="Plan owner"@{nl="Abonnementseigenaar"}
  export AccessHours in Plan { location:Location, weekdays:int[]! label="Days of week"@{nl="Weekdagen"}, opens:text="09:00" label="Opens"@{nl="Opent"}, closes:text="18:00" label="Closes"@{nl="Sluit"}, close_after:int=0 min=0 max=1 label="Closing day offset"@{nl="Dagverschuiving sluiting"}, fold:enum(earlier,later)=earlier label={text="Clock-change choice"@{nl="Keuze bij klokwijziging"},values={earlier="Earlier occurrence"@{nl="Eerder tijdstip"},later="Later occurrence"@{nl="Later tijdstip"}}} } label="Purchased access hours"@{nl="Gekochte toegangsuren"}
  export Plan { name:text trim min=1, price:money, months:int=1 min=1 label="Months"@{nl="Maanden"}, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[] label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, mail:bool=false label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int=1 min=1 label="Seats"@{nl="Plaatsen"}, active:bool=true } label="Membership plan"@{nl="Lidmaatschapsabonnement"}
  export Benefit in Plan { product:text label="Product"@{nl="Product"}, unit:enum(hour,day,visit) label={text="Unit"@{nl="Eenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"},visit="Visit"@{nl="Bezoek"}}}, quantity:decimal min=0, duration:duration, overage:money label="Overage per unit"@{nl="Meerprijs per eenheid"} } label="Plan benefit"@{nl="Abonnementsvoordeel"}
  preferences { active_filter:bool? label="Active plans"@{nl="Actieve abonnementen"} }
  message page_membership_register_title = "Membership register"@{nl="Lidmaatschapsregister"}
  message label_included_units = "Included units"@{nl="Inbegrepen eenheden"}
  message label_overage = "Monetary overage"@{nl="Meerprijs in geld"}
  message label_package = "Membership"@{nl="Lidmaatschap"}
  message label_Entitlement_customer = "Customer"@{nl="Klant"}
  message label_Entitlement_account = "Account"@{nl="Account"}
  message label_Entitlement_product = "Product"@{nl="Product"}
  message label_Entitlement_from = "Start"@{nl="Begin"}
  message label_Entitlement_until = "End"@{nl="Einde"}
  message label_Entitlement_source = "Source reference"@{nl="Bronreferentie"}
  message label_Membership_consent = "Recurrence consent"@{nl="Toestemming voor herhaling"}
  message label_Term = "Paid term"@{nl="Betaalde termijn"}
  message label_Term_locations = "Locations"@{nl="Locaties"}
  message label_Term_cycle = "Billing cycle"@{nl="Facturatiecyclus"}
  role member_manager label="Membership manager"@{nl="Lidmaatschapsbeheerder"}
  export Membership in Customer { account:user label=label_Entitlement_account, plan:Plan, paused:bool=false label="Paused"@{nl="Gepauzeerd"}, revoked:bool=false label="Revoked"@{nl="Ingetrokken"}, recurrence:bool=false label="Recurrence"@{nl="Herhaling"}, consent:text? label=label_Membership_consent, cancellation_at:datetime? label="Cancellation effective date"@{nl="Ingangsdatum annulering"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, next_cycle:int=1 min=1, access_revision:int=0, anchor:date label="Calendar anchor"@{nl="Kalenderanker"}, timezone:timezone, months:int=1 min=1 label="Months"@{nl="Maanden"} } label=label_package
  export Term in Membership { billing_location:Location?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, source:text unique label=label_Entitlement_source, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, price:money, locations:Location[]! label=label_Term_locations, products:text[]! label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, hours:MemberHours[]! label="Purchased access windows"@{nl="Gekochte toegangstijdvakken"}, mail:bool label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int label="Seats"@{nl="Plaatsen"}, paid:bool=false label="Paid"@{nl="Betaald"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, cycle:int label=label_Term_cycle, title:text="Membership", automatic:bool=false, consent:text?, settlement_revision:int=0, collection:enum(pending,confirmed,failed,unknown)=pending label={text="Invoice creation"@{nl="Factuuraanmaak"},values={pending="Pending"@{nl="In afwachting"},confirmed="Invoice confirmed"@{nl="Factuur bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, charge_delivery:text?, reconcile_delivery:text?, refund_delivery:text?, cancellation:enum(none,pending,applied)=none label={text="Cancellation outcome"@{nl="Annuleringsresultaat"},values={none="No cancellation"@{nl="Geen annulering"},pending="Pending"@{nl="In afwachting"},applied="Applied"@{nl="Toegepast"}}}, refund_requested:money? label="Requested refund"@{nl="Aangevraagde terugbetaling"}, refund_access:enum(none,retain,revoke)=none label={text="Refund access decision"@{nl="Toegangsbesluit bij terugbetaling"},values={none="No decision"@{nl="Geen besluit"},retain="Retain paid access"@{nl="Betaalde toegang behouden"},revoke="Revoke paid access"@{nl="Betaalde toegang intrekken"}}} } label=label_Term
  Seat in Term { account:user label=label_Entitlement_account, active:bool=true, removed_reason:text? label="Removal reason"@{nl="Reden intrekking"} } label="Paid seat"@{nl="Betaalde plaats"}
  Allowance in Term { product:text label=label_Entitlement_product, unit:Benefit.unit, duration:duration, overage:money label=label_overage, granted:decimal label="Granted units"@{nl="Toegekende eenheden"}, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until } label="Allowance"@{nl="Tegoed"}
  BenefitRequest in Customer { source:text unique label=label_Entitlement_source, value:Entitlement, previous:BenefitRequest?, state:enum(staged,reserved,consumed,released)=reserved label={text="Allowance state"@{nl="Tegoedstatus"},values={staged="Replacement staged"@{nl="Vervanging voorbereid"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"}}}, revision:int=1, result:OperationOutcome.state=confirmed, units:decimal=0 label="Requested units"@{nl="Aangevraagde eenheden"}, covered_units:decimal=0 label=label_included_units, overage:money label=label_overage, review_reason:text? label="Reconciliation reason"@{nl="Afstemmingsreden"} } label="Benefit request"@{nl="Voordeelaanvraag"}
  Allocation in Allowance { request:BenefitRequest, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, requested_units:decimal label="Requested units"@{nl="Aangevraagde eenheden"}, units:decimal label=label_included_units, held:decimal label="Additional held units"@{nl="Extra geblokkeerde eenheden"}, state:BenefitRequest.state=reserved label="Allowance state"@{nl="Tegoedstatus"} } label="Allowance allocation"@{nl="Tegoedtoewijzing"}
  BenefitFence in Customer { source:text unique, restore_consumed:bool=false }
  Reversal in Allocation { source:text unique, units:decimal, restored:bool } label="Allowance reversal"@{nl="Tegoedterugboeking"}
  Renewal in Membership { capture:Capture?, cycle:int label=label_Term_cycle, requester:user? label="Requester"@{nl="Aanvrager"}, automatic:bool=false label="Automatic renewal"@{nl="Automatische verlenging"}, consent:text? label=label_Membership_consent, state:enum(pending,created,skipped,failed)=pending label={text="Renewal outcome"@{nl="Verlengingsresultaat"},values={pending="Pending"@{nl="In afwachting"},created="Term created"@{nl="Termijn aangemaakt"},skipped="Skipped"@{nl="Overgeslagen"},failed="Failed"@{nl="Mislukt"}}}, term:Term? label=label_Term } label="Renewal request"@{nl="Verlengingsaanvraag"}
  CommercialSale in Term { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  AccessWatch in Customer { source:text unique, account:user, location:Location, at:datetime, until:datetime, revision:int=0 } label="Access verification"@{nl="Toegangscontrole"}
  export Content { title:text, category:text label="Content category"@{nl="Inhoudscategorie"}, body:text, locations:Location[]! label=label_Term_locations, plans:Plan[] label="Plan audience"@{nl="Abonnementsdoelgroep"}, published:bool=false label="Published"@{nl="Gepubliceerd"}, attachment:file? label="Member document"@{nl="Ledendocument"}, staff_only:bool=false label="Staff only"@{nl="Alleen personeel"} } label="Member content"@{nl="Ledeninformatie"}
  scenario calendar_snapshot on=Membership.create
  export scenario term(membership:Membership,cycle:int label=label_Term_cycle,capture:Capture?=null) by=member_manager or authenticated label=label_Term
  scenario create_term on=RenewalDue
  scenario renewal_tick on=MembershipDue
  scenario retry_renewal(renewal:Renewal) by=member_manager or authenticated label="Retry renewal generation"@{nl="Verlengingsgeneratie opnieuw proberen"}
  scenario assign(term:Term,account:user label=label_Entitlement_account) by=authenticated
  scenario remove(seat:Seat,reason:text) by=authenticated or member_manager label="Remove seat"@{nl="Plaats intrekken"}
  scenario reserve on=Requests.reserve
  scenario commit on=Requests.commit
  scenario consume on=Requests.consume
  scenario release on=Requests.release
  scenario reconcile on=Requests.reconcile
  scenario eligibility on=Requests.eligibility
  scenario pause(membership:Membership,reason:text) by=member_manager
  scenario resume(membership:Membership) by=member_manager
  scenario revoke_membership(membership:Membership,reason:text) by=member_manager label="Revoke benefits"@{nl="Voordelen intrekken"}
  scenario consent(membership:Membership,enabled:bool,reference:text? label=label_Membership_consent) by=authenticated label=label_Membership_consent
  scenario cancel_membership(membership:Membership,effective:datetime label="Cancellation effective date"@{nl="Ingangsdatum annulering"},reason:text) by=authenticated label="Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"}
  scenario refund_term(term:Term,amount:money,revoke_access:bool label="Revoke access"@{nl="Toegang intrekken"},reason:text) by=member_manager label="Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"}
  scenario charge_result on=Billing.charge.completed
  scenario retry_collection(term:Term) by=member_manager or authenticated label="Retry term invoice"@{nl="Termijnfactuur opnieuw proberen"}
  scenario settlement on=Billing.settled
  scenario reconcile_payment on=Billing.reconcile.completed
  scenario apply_settlement on=SettlementReceived
  scenario payment_recovery on=PaymentCheck
  scenario term_boundary on=TermBoundary
  scenario commercial_check on=CommercialCheck
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> MembershipAccessReview by=authenticated or member_manager label="Inspect membership access review"@{nl="Beoordeel lidmaatschapstoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or member_manager label="Recheck membership access"@{nl="Controleer lidmaatschapstoegang opnieuw"}
  scenario company_changed on=CompanyAccessChanged
  scenario company_access_step on=CompanyAccessStep
  scenario access_changed on=AccessChanged
  scenario allocation_access_step on=AllocationAccessStep
  scenario watch_access_step on=WatchAccessStep
  style MemberTermsWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { current_only:bool=false label="Current terms only"@{nl="Alleen huidige termijnen"} }
  style MemberContentWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order accessible navigation as My membership, Member information, Membership register, then Membership plans for plan owners. Contextual member details retain authenticated billing/renewal after expiry. Customer and employee identities remain distinct.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My membership — own index | Breadcrumbs and a current-only Toggle; own Membership Cards with paused/revoked state text, consent Fieldset and renewal tooltips; per-term collection/cancellation/refund Badges with price/seat Stats; allowance ledger Stats and Allocation tables; empty state per collection | Request identified renewal terms and retry failed term invoices inline; cancellation/refund/removal open captioned modals with identical bindings; change recorded auto-renew consent; own booking/ticket/invoice/support links require their source grants |
| Member information — paid-content index | Published site guides in List/Card groups with reception hours, arrival/check-in, house rules, facilities and support/contact; breadcrumbs, empty states and a gated member-document Link per guide | Read current eligible location/plan content; contextual Reception invitations or Mail items retain independent role checks |
| Membership register — permitted staff index | Period Alert, breadcrumbs and a current-only Toggle; same per-term Badges/Stats as My membership; paginated Allowance/Seat tables, renewal tooltips and empty states per collection | Maintain memberships/terms, copy current payment links; resume stays inline while pause/revocation/refund/removal open captioned modals with identical bindings |
| Company seats — contextual own-company view | Breadcrumbs; paused/revoked state text; per-term collection/cancellation Badges; assign form and seat-remove modal; paginated seat/request tables with empty states | Authorized company administrators assign/remove only available paid seats; affected future reservations and device reconciliation remain explicit |
| Membership plans/content — protected owner/editor views | Plan/benefit/hours Fieldsets (location Select, fold/unit Radios) and unit rules Table; published state text and typed create Fieldset on the editor view; paginated child tables; tri-state active filter stays in the shared dialog | Plan owners maintain sellable plans/benefits; content publication cannot change paid entitlement or historical snapshots |

On mobile, place paid-until, next action and expiry/renewal before history. Distinguish loading, no applicable paid term, no granted content and filtered-empty. Preserve unsaved consent/content input on validation or stale saves. Show pending/failed/unknown collections and seat/allowance reconciliation without unpaid grace. Display granted/reserved/consumed/expired units separately; an expired-period release never creates current credit. Use recorded business timezone/calendar periods and frozen unit/overage rules. Customer price, seat and allowance history survives expiry; paid content is reauthorized on each request. Separate plan administration from personal settings; exclude provider/retry configuration.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 06-membership-register-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMember/playwright/references/06-membership-register-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Capacity guard only: existing paid term has 3 seats and3 assigned accounts. Keep Assign seat field but disable its submit and add helper 'All3 seats are assigned'. This is no new entitlement; new assignment is unavailable until an authorized seat release. Preserve all other source data/actions. Keep existing LEFT desktop sidebar, top-left wordmark, bottom-left account and all other layout. One full-page UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMember. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
  page /companies/{Customer.id}/membership-access title="Company membership access"@{nl="Bedrijfslidmaatschapstoegang"} $MemberTermsWorkspace
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
  page /membership/content/edit title="Edit member information"@{nl="Ledeninformatie bewerken"} $MemberContentWorkspace
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
SELECTED PAGE:
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
   require member_manager
   breadcrumbs
   alert "Allowances reconcile per period"@{nl="Tegoeden worden per periode afgestemd"}
   preferences
    toggle current_only
   card page_membership_register_title
    list Membership empty="No memberships match this view"@{nl="Geen lidmaatschappen in deze weergave"} display=split
     text row.paused,row.revoked
     form term
     actions resume
     join
      button opens=membership_pause
      button opens=membership_revoke
     modal "Pause"@{nl="Pauzeren"} id=membership_pause
      slot content
       form pause arguments={membership=row} display=inline
        fieldset
         textarea reason
     modal "Revoke benefits"@{nl="Voordelen intrekken"} id=membership_revoke
      slot content
       form revoke_membership arguments={membership=row} display=inline
        fieldset
         textarea reason
     table row.Renewal columns=cycle,state,term empty="No renewal requests for this membership"@{nl="Geen verlengingsaanvragen voor dit lidmaatschap"}
      tooltip "Retry renewal"@{nl="Verlenging opnieuw proberen"}
       action retry_renewal
      pagination
     table row.parent.BenefitRequest columns=source,units,covered_units,overage,state,review_reason empty="No benefit requests for this customer"@{nl="Geen voordeelaanvragen voor deze klant"}
      pagination
     list row.Term as term where not preferences.current_only or (term.from<=now and now<term.until) empty="No terms in this view"@{nl="Geen termijnen in deze weergave"}
      show TermOutcome {row=term}
      badge term.refund_access
      text term.invoice
      stat term.seats
      actions retry_collection
      button opens=term_refund_register
      modal "Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"} id=term_refund_register
       slot content
        form refund_term arguments={term=row} display=inline
         fieldset
          input amount
          checkbox revoke_access
          textarea reason
      table term.Allowance columns=product,unit,granted,available,reserved,consumed,expired,overage,from,until empty="No allowances in this term"@{nl="Geen tegoeden in deze termijn"}
       pagination
      table term.Seat columns=account,active,removed_reason empty="No seats assigned for this term"@{nl="Geen plaatsen toegewezen voor deze termijn"}
       button opens=seat_remove_register
       modal "Remove seat"@{nl="Plaats intrekken"} id=seat_remove_register
        slot content
         form remove arguments={seat=row} display=inline
          fieldset
           textarea reason
       pagination
      form assign
      history
      pagination
     pagination


OWNING LABELS/DATA/FORMS/STYLES:
  role plan_owner label="Plan owner"@{nl="Abonnementseigenaar"}
  export AccessHours in Plan { location:Location, weekdays:int[]! label="Days of week"@{nl="Weekdagen"}, opens:text="09:00" label="Opens"@{nl="Opent"}, closes:text="18:00" label="Closes"@{nl="Sluit"}, close_after:int=0 min=0 max=1 label="Closing day offset"@{nl="Dagverschuiving sluiting"}, fold:enum(earlier,later)=earlier label={text="Clock-change choice"@{nl="Keuze bij klokwijziging"},values={earlier="Earlier occurrence"@{nl="Eerder tijdstip"},later="Later occurrence"@{nl="Later tijdstip"}}} } label="Purchased access hours"@{nl="Gekochte toegangsuren"}
  export Plan { name:text trim min=1, price:money, months:int=1 min=1 label="Months"@{nl="Maanden"}, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[] label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, mail:bool=false label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int=1 min=1 label="Seats"@{nl="Plaatsen"}, active:bool=true } label="Membership plan"@{nl="Lidmaatschapsabonnement"}
  export Benefit in Plan { product:text label="Product"@{nl="Product"}, unit:enum(hour,day,visit) label={text="Unit"@{nl="Eenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"},visit="Visit"@{nl="Bezoek"}}}, quantity:decimal min=0, duration:duration, overage:money label="Overage per unit"@{nl="Meerprijs per eenheid"} } label="Plan benefit"@{nl="Abonnementsvoordeel"}
  preferences { active_filter:bool? label="Active plans"@{nl="Actieve abonnementen"} }
  message page_membership_register_title = "Membership register"@{nl="Lidmaatschapsregister"}
  message label_included_units = "Included units"@{nl="Inbegrepen eenheden"}
  message label_overage = "Monetary overage"@{nl="Meerprijs in geld"}
  message label_package = "Membership"@{nl="Lidmaatschap"}
  message label_Entitlement_customer = "Customer"@{nl="Klant"}
  message label_Entitlement_account = "Account"@{nl="Account"}
  message label_Entitlement_product = "Product"@{nl="Product"}
  message label_Entitlement_from = "Start"@{nl="Begin"}
  message label_Entitlement_until = "End"@{nl="Einde"}
  message label_Entitlement_source = "Source reference"@{nl="Bronreferentie"}
  message label_Membership_consent = "Recurrence consent"@{nl="Toestemming voor herhaling"}
  message label_Term = "Paid term"@{nl="Betaalde termijn"}
  message label_Term_locations = "Locations"@{nl="Locaties"}
  message label_Term_cycle = "Billing cycle"@{nl="Facturatiecyclus"}
  role member_manager label="Membership manager"@{nl="Lidmaatschapsbeheerder"}
  export Membership in Customer { account:user label=label_Entitlement_account, plan:Plan, paused:bool=false label="Paused"@{nl="Gepauzeerd"}, revoked:bool=false label="Revoked"@{nl="Ingetrokken"}, recurrence:bool=false label="Recurrence"@{nl="Herhaling"}, consent:text? label=label_Membership_consent, cancellation_at:datetime? label="Cancellation effective date"@{nl="Ingangsdatum annulering"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, next_cycle:int=1 min=1, access_revision:int=0, anchor:date label="Calendar anchor"@{nl="Kalenderanker"}, timezone:timezone, months:int=1 min=1 label="Months"@{nl="Maanden"} } label=label_package
  export Term in Membership { billing_location:Location?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, source:text unique label=label_Entitlement_source, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, price:money, locations:Location[]! label=label_Term_locations, products:text[]! label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, hours:MemberHours[]! label="Purchased access windows"@{nl="Gekochte toegangstijdvakken"}, mail:bool label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int label="Seats"@{nl="Plaatsen"}, paid:bool=false label="Paid"@{nl="Betaald"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, cycle:int label=label_Term_cycle, title:text="Membership", automatic:bool=false, consent:text?, settlement_revision:int=0, collection:enum(pending,confirmed,failed,unknown)=pending label={text="Invoice creation"@{nl="Factuuraanmaak"},values={pending="Pending"@{nl="In afwachting"},confirmed="Invoice confirmed"@{nl="Factuur bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, charge_delivery:text?, reconcile_delivery:text?, refund_delivery:text?, cancellation:enum(none,pending,applied)=none label={text="Cancellation outcome"@{nl="Annuleringsresultaat"},values={none="No cancellation"@{nl="Geen annulering"},pending="Pending"@{nl="In afwachting"},applied="Applied"@{nl="Toegepast"}}}, refund_requested:money? label="Requested refund"@{nl="Aangevraagde terugbetaling"}, refund_access:enum(none,retain,revoke)=none label={text="Refund access decision"@{nl="Toegangsbesluit bij terugbetaling"},values={none="No decision"@{nl="Geen besluit"},retain="Retain paid access"@{nl="Betaalde toegang behouden"},revoke="Revoke paid access"@{nl="Betaalde toegang intrekken"}}} } label=label_Term
  Seat in Term { account:user label=label_Entitlement_account, active:bool=true, removed_reason:text? label="Removal reason"@{nl="Reden intrekking"} } label="Paid seat"@{nl="Betaalde plaats"}
  Allowance in Term { product:text label=label_Entitlement_product, unit:Benefit.unit, duration:duration, overage:money label=label_overage, granted:decimal label="Granted units"@{nl="Toegekende eenheden"}, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until } label="Allowance"@{nl="Tegoed"}
  BenefitRequest in Customer { source:text unique label=label_Entitlement_source, value:Entitlement, previous:BenefitRequest?, state:enum(staged,reserved,consumed,released)=reserved label={text="Allowance state"@{nl="Tegoedstatus"},values={staged="Replacement staged"@{nl="Vervanging voorbereid"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"}}}, revision:int=1, result:OperationOutcome.state=confirmed, units:decimal=0 label="Requested units"@{nl="Aangevraagde eenheden"}, covered_units:decimal=0 label=label_included_units, overage:money label=label_overage, review_reason:text? label="Reconciliation reason"@{nl="Afstemmingsreden"} } label="Benefit request"@{nl="Voordeelaanvraag"}
  Allocation in Allowance { request:BenefitRequest, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, requested_units:decimal label="Requested units"@{nl="Aangevraagde eenheden"}, units:decimal label=label_included_units, held:decimal label="Additional held units"@{nl="Extra geblokkeerde eenheden"}, state:BenefitRequest.state=reserved label="Allowance state"@{nl="Tegoedstatus"} } label="Allowance allocation"@{nl="Tegoedtoewijzing"}
  BenefitFence in Customer { source:text unique, restore_consumed:bool=false }
  Reversal in Allocation { source:text unique, units:decimal, restored:bool } label="Allowance reversal"@{nl="Tegoedterugboeking"}
  Renewal in Membership { capture:Capture?, cycle:int label=label_Term_cycle, requester:user? label="Requester"@{nl="Aanvrager"}, automatic:bool=false label="Automatic renewal"@{nl="Automatische verlenging"}, consent:text? label=label_Membership_consent, state:enum(pending,created,skipped,failed)=pending label={text="Renewal outcome"@{nl="Verlengingsresultaat"},values={pending="Pending"@{nl="In afwachting"},created="Term created"@{nl="Termijn aangemaakt"},skipped="Skipped"@{nl="Overgeslagen"},failed="Failed"@{nl="Mislukt"}}}, term:Term? label=label_Term } label="Renewal request"@{nl="Verlengingsaanvraag"}
  CommercialSale in Term { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  AccessWatch in Customer { source:text unique, account:user, location:Location, at:datetime, until:datetime, revision:int=0 } label="Access verification"@{nl="Toegangscontrole"}
  export Content { title:text, category:text label="Content category"@{nl="Inhoudscategorie"}, body:text, locations:Location[]! label=label_Term_locations, plans:Plan[] label="Plan audience"@{nl="Abonnementsdoelgroep"}, published:bool=false label="Published"@{nl="Gepubliceerd"}, attachment:file? label="Member document"@{nl="Ledendocument"}, staff_only:bool=false label="Staff only"@{nl="Alleen personeel"} } label="Member content"@{nl="Ledeninformatie"}
  scenario calendar_snapshot on=Membership.create
  export scenario term(membership:Membership,cycle:int label=label_Term_cycle,capture:Capture?=null) by=member_manager or authenticated label=label_Term
  scenario create_term on=RenewalDue
  scenario renewal_tick on=MembershipDue
  scenario retry_renewal(renewal:Renewal) by=member_manager or authenticated label="Retry renewal generation"@{nl="Verlengingsgeneratie opnieuw proberen"}
  scenario assign(term:Term,account:user label=label_Entitlement_account) by=authenticated
  scenario remove(seat:Seat,reason:text) by=authenticated or member_manager label="Remove seat"@{nl="Plaats intrekken"}
  scenario reserve on=Requests.reserve
  scenario commit on=Requests.commit
  scenario consume on=Requests.consume
  scenario release on=Requests.release
  scenario reconcile on=Requests.reconcile
  scenario eligibility on=Requests.eligibility
  scenario pause(membership:Membership,reason:text) by=member_manager
  scenario resume(membership:Membership) by=member_manager
  scenario revoke_membership(membership:Membership,reason:text) by=member_manager label="Revoke benefits"@{nl="Voordelen intrekken"}
  scenario consent(membership:Membership,enabled:bool,reference:text? label=label_Membership_consent) by=authenticated label=label_Membership_consent
  scenario cancel_membership(membership:Membership,effective:datetime label="Cancellation effective date"@{nl="Ingangsdatum annulering"},reason:text) by=authenticated label="Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"}
  scenario refund_term(term:Term,amount:money,revoke_access:bool label="Revoke access"@{nl="Toegang intrekken"},reason:text) by=member_manager label="Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"}
  scenario charge_result on=Billing.charge.completed
  scenario retry_collection(term:Term) by=member_manager or authenticated label="Retry term invoice"@{nl="Termijnfactuur opnieuw proberen"}
  scenario settlement on=Billing.settled
  scenario reconcile_payment on=Billing.reconcile.completed
  scenario apply_settlement on=SettlementReceived
  scenario payment_recovery on=PaymentCheck
  scenario term_boundary on=TermBoundary
  scenario commercial_check on=CommercialCheck
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> MembershipAccessReview by=authenticated or member_manager label="Inspect membership access review"@{nl="Beoordeel lidmaatschapstoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or member_manager label="Recheck membership access"@{nl="Controleer lidmaatschapstoegang opnieuw"}
  scenario company_changed on=CompanyAccessChanged
  scenario company_access_step on=CompanyAccessStep
  scenario access_changed on=AccessChanged
  scenario allocation_access_step on=AllocationAccessStep
  scenario watch_access_step on=WatchAccessStep
  style MemberTermsWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { current_only:bool=false label="Current terms only"@{nl="Alleen huidige termijnen"} }
  style MemberContentWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order accessible navigation as My membership, Member information, Membership register, then Membership plans for plan owners. Contextual member details retain authenticated billing/renewal after expiry. Customer and employee identities remain distinct.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My membership — own index | Breadcrumbs and a current-only Toggle; own Membership Cards with paused/revoked state text, consent Fieldset and renewal tooltips; per-term collection/cancellation/refund Badges with price/seat Stats; allowance ledger Stats and Allocation tables; empty state per collection | Request identified renewal terms and retry failed term invoices inline; cancellation/refund/removal open captioned modals with identical bindings; change recorded auto-renew consent; own booking/ticket/invoice/support links require their source grants |
| Member information — paid-content index | Published site guides in List/Card groups with reception hours, arrival/check-in, house rules, facilities and support/contact; breadcrumbs, empty states and a gated member-document Link per guide | Read current eligible location/plan content; contextual Reception invitations or Mail items retain independent role checks |
| Membership register — permitted staff index | Period Alert, breadcrumbs and a current-only Toggle; same per-term Badges/Stats as My membership; paginated Allowance/Seat tables, renewal tooltips and empty states per collection | Maintain memberships/terms, copy current payment links; resume stays inline while pause/revocation/refund/removal open captioned modals with identical bindings |
| Company seats — contextual own-company view | Breadcrumbs; paused/revoked state text; per-term collection/cancellation Badges; assign form and seat-remove modal; paginated seat/request tables with empty states | Authorized company administrators assign/remove only available paid seats; affected future reservations and device reconciliation remain explicit |
| Membership plans/content — protected owner/editor views | Plan/benefit/hours Fieldsets (location Select, fold/unit Radios) and unit rules Table; published state text and typed create Fieldset on the editor view; paginated child tables; tri-state active filter stays in the shared dialog | Plan owners maintain sellable plans/benefits; content publication cannot change paid entitlement or historical snapshots |

On mobile, place paid-until, next action and expiry/renewal before history. Distinguish loading, no applicable paid term, no granted content and filtered-empty. Preserve unsaved consent/content input on validation or stale saves. Show pending/failed/unknown collections and seat/allowance reconciliation without unpaid grace. Display granted/reserved/consumed/expired units separately; an expired-period release never creates current credit. Use recorded business timezone/calendar periods and frozen unit/overage rules. Customer price, seat and allowance history survives expiry; paid content is reauthorized on each request. Separate plan administration from personal settings; exclude provider/retry configuration.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied actual full-page UI. Remove invented Notifications from account menu; replace Profile with Account settings. Remove Retry term invoice action because current shown term has confirmed collection. Keep authorized member manager actions and every other layout element. Preserve LEFT sidebar, bottom-right account and entire existing light daisyUI layout. No new fields, operations or metrics outside correction. One full-page image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 08-membership-content-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanMember/playwright/references/08-membership-content-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanMember. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /membership/plans title="Membership plans"@{nl="Lidmaatschapsabonnementen"} order=4 $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply this to the /membership/plans page content; keep page admission and the shared shell unchanged."
  page /membership/access-review title="Membership access review"@{nl="Beoordeling lidmaatschapstoegang"} $MemberTermsWorkspace
  page /companies/{Customer.id}/membership-access title="Company membership access"@{nl="Bedrijfslidmaatschapstoegang"} $MemberTermsWorkspace
  page /membership/mine title="My membership"@{nl="Mijn lidmaatschap"} order=1 $MemberTermsWorkspace
  page /membership/register title=page_membership_register_title order=3 $MemberTermsWorkspace
  page /membership/content/edit title="Edit member information"@{nl="Ledeninformatie bewerken"} $MemberContentWorkspace
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
SELECTED PAGE:
  page /membership/content title="Member information"@{nl="Ledeninformatie"} order=2 $MemberContentWorkspace
   require authenticated
   breadcrumbs
   card "Authorized member information"@{nl="Geautoriseerde ledeninformatie"}
    list Content empty="No member information available"@{nl="Geen ledeninformatie beschikbaar"}
     title row.title
     content row.body
     card
      require row.attachment!=null
      link target=row.attachment caption="Member document"@{nl="Ledendocument"}
     pagination
OWNING LABELS/DATA/FORMS/STYLES:
  role plan_owner label="Plan owner"@{nl="Abonnementseigenaar"}
  export AccessHours in Plan { location:Location, weekdays:int[]! label="Days of week"@{nl="Weekdagen"}, opens:text="09:00" label="Opens"@{nl="Opent"}, closes:text="18:00" label="Closes"@{nl="Sluit"}, close_after:int=0 min=0 max=1 label="Closing day offset"@{nl="Dagverschuiving sluiting"}, fold:enum(earlier,later)=earlier label={text="Clock-change choice"@{nl="Keuze bij klokwijziging"},values={earlier="Earlier occurrence"@{nl="Eerder tijdstip"},later="Later occurrence"@{nl="Later tijdstip"}}} } label="Purchased access hours"@{nl="Gekochte toegangsuren"}
  export Plan { name:text trim min=1, price:money, months:int=1 min=1 label="Months"@{nl="Maanden"}, locations:Location[] label="Locations"@{nl="Locaties"}, products:text[] label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, mail:bool=false label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int=1 min=1 label="Seats"@{nl="Plaatsen"}, active:bool=true } label="Membership plan"@{nl="Lidmaatschapsabonnement"}
  export Benefit in Plan { product:text label="Product"@{nl="Product"}, unit:enum(hour,day,visit) label={text="Unit"@{nl="Eenheid"},values={hour="Hour"@{nl="Uur"},day="Day"@{nl="Dag"},visit="Visit"@{nl="Bezoek"}}}, quantity:decimal min=0, duration:duration, overage:money label="Overage per unit"@{nl="Meerprijs per eenheid"} } label="Plan benefit"@{nl="Abonnementsvoordeel"}
  preferences { active_filter:bool? label="Active plans"@{nl="Actieve abonnementen"} }
  message page_membership_register_title = "Membership register"@{nl="Lidmaatschapsregister"}
  message label_included_units = "Included units"@{nl="Inbegrepen eenheden"}
  message label_overage = "Monetary overage"@{nl="Meerprijs in geld"}
  message label_package = "Membership"@{nl="Lidmaatschap"}
  message label_Entitlement_customer = "Customer"@{nl="Klant"}
  message label_Entitlement_account = "Account"@{nl="Account"}
  message label_Entitlement_product = "Product"@{nl="Product"}
  message label_Entitlement_from = "Start"@{nl="Begin"}
  message label_Entitlement_until = "End"@{nl="Einde"}
  message label_Entitlement_source = "Source reference"@{nl="Bronreferentie"}
  message label_Membership_consent = "Recurrence consent"@{nl="Toestemming voor herhaling"}
  message label_Term = "Paid term"@{nl="Betaalde termijn"}
  message label_Term_locations = "Locations"@{nl="Locaties"}
  message label_Term_cycle = "Billing cycle"@{nl="Facturatiecyclus"}
  role member_manager label="Membership manager"@{nl="Lidmaatschapsbeheerder"}
  export Membership in Customer { account:user label=label_Entitlement_account, plan:Plan, paused:bool=false label="Paused"@{nl="Gepauzeerd"}, revoked:bool=false label="Revoked"@{nl="Ingetrokken"}, recurrence:bool=false label="Recurrence"@{nl="Herhaling"}, consent:text? label=label_Membership_consent, cancellation_at:datetime? label="Cancellation effective date"@{nl="Ingangsdatum annulering"}, cancellation_reason:text? label="Cancellation reason"@{nl="Annuleringsreden"}, next_cycle:int=1 min=1, access_revision:int=0, anchor:date label="Calendar anchor"@{nl="Kalenderanker"}, timezone:timezone, months:int=1 min=1 label="Months"@{nl="Maanden"} } label=label_package
  export Term in Membership { billing_location:Location?, attribution:text?, exclusive_program:text?, attributed_at:datetime?, attribution_window:duration?, source:text unique label=label_Entitlement_source, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, price:money, locations:Location[]! label=label_Term_locations, products:text[]! label="Products"@{nl="Producten"}, access_hours:text label="Access hours"@{nl="Toegangsuren"}, hours:MemberHours[]! label="Purchased access windows"@{nl="Gekochte toegangstijdvakken"}, mail:bool label="Mail benefit"@{nl="Postvoordeel"}, guest_limit:int=0 min=0 label="Concurrent guests per host"@{nl="Gelijktijdige gasten per gastheer"}, seats:int label="Seats"@{nl="Plaatsen"}, paid:bool=false label="Paid"@{nl="Betaald"}, invoice:text? label="Invoice reference"@{nl="Factuurreferentie"}, cycle:int label=label_Term_cycle, title:text="Membership", automatic:bool=false, consent:text?, settlement_revision:int=0, collection:enum(pending,confirmed,failed,unknown)=pending label={text="Invoice creation"@{nl="Factuuraanmaak"},values={pending="Pending"@{nl="In afwachting"},confirmed="Invoice confirmed"@{nl="Factuur bevestigd"},failed="Failed"@{nl="Mislukt"},unknown="Unknown"@{nl="Onbekend"}}}, charge_delivery:text?, reconcile_delivery:text?, refund_delivery:text?, cancellation:enum(none,pending,applied)=none label={text="Cancellation outcome"@{nl="Annuleringsresultaat"},values={none="No cancellation"@{nl="Geen annulering"},pending="Pending"@{nl="In afwachting"},applied="Applied"@{nl="Toegepast"}}}, refund_requested:money? label="Requested refund"@{nl="Aangevraagde terugbetaling"}, refund_access:enum(none,retain,revoke)=none label={text="Refund access decision"@{nl="Toegangsbesluit bij terugbetaling"},values={none="No decision"@{nl="Geen besluit"},retain="Retain paid access"@{nl="Betaalde toegang behouden"},revoke="Revoke paid access"@{nl="Betaalde toegang intrekken"}}} } label=label_Term
  Seat in Term { account:user label=label_Entitlement_account, active:bool=true, removed_reason:text? label="Removal reason"@{nl="Reden intrekking"} } label="Paid seat"@{nl="Betaalde plaats"}
  Allowance in Term { product:text label=label_Entitlement_product, unit:Benefit.unit, duration:duration, overage:money label=label_overage, granted:decimal label="Granted units"@{nl="Toegekende eenheden"}, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until } label="Allowance"@{nl="Tegoed"}
  BenefitRequest in Customer { source:text unique label=label_Entitlement_source, value:Entitlement, previous:BenefitRequest?, state:enum(staged,reserved,consumed,released)=reserved label={text="Allowance state"@{nl="Tegoedstatus"},values={staged="Replacement staged"@{nl="Vervanging voorbereid"},reserved="Reserved"@{nl="Gereserveerd"},consumed="Consumed"@{nl="Verbruikt"},released="Released"@{nl="Vrijgegeven"}}}, revision:int=1, result:OperationOutcome.state=confirmed, units:decimal=0 label="Requested units"@{nl="Aangevraagde eenheden"}, covered_units:decimal=0 label=label_included_units, overage:money label=label_overage, review_reason:text? label="Reconciliation reason"@{nl="Afstemmingsreden"} } label="Benefit request"@{nl="Voordeelaanvraag"}
  Allocation in Allowance { request:BenefitRequest, from:datetime label=label_Entitlement_from, until:datetime label=label_Entitlement_until, requested_units:decimal label="Requested units"@{nl="Aangevraagde eenheden"}, units:decimal label=label_included_units, held:decimal label="Additional held units"@{nl="Extra geblokkeerde eenheden"}, state:BenefitRequest.state=reserved label="Allowance state"@{nl="Tegoedstatus"} } label="Allowance allocation"@{nl="Tegoedtoewijzing"}
  BenefitFence in Customer { source:text unique, restore_consumed:bool=false }
  Reversal in Allocation { source:text unique, units:decimal, restored:bool } label="Allowance reversal"@{nl="Tegoedterugboeking"}
  Renewal in Membership { capture:Capture?, cycle:int label=label_Term_cycle, requester:user? label="Requester"@{nl="Aanvrager"}, automatic:bool=false label="Automatic renewal"@{nl="Automatische verlenging"}, consent:text? label=label_Membership_consent, state:enum(pending,created,skipped,failed)=pending label={text="Renewal outcome"@{nl="Verlengingsresultaat"},values={pending="Pending"@{nl="In afwachting"},created="Term created"@{nl="Termijn aangemaakt"},skipped="Skipped"@{nl="Overgeslagen"},failed="Failed"@{nl="Mislukt"}}}, term:Term? label=label_Term } label="Renewal request"@{nl="Verlengingsaanvraag"}
  CommercialSale in Term { phase:SaleMilestone.milestone?, revision:int=0 min=0 }
  AccessWatch in Customer { source:text unique, account:user, location:Location, at:datetime, until:datetime, revision:int=0 } label="Access verification"@{nl="Toegangscontrole"}
  export Content { title:text, category:text label="Content category"@{nl="Inhoudscategorie"}, body:text, locations:Location[]! label=label_Term_locations, plans:Plan[] label="Plan audience"@{nl="Abonnementsdoelgroep"}, published:bool=false label="Published"@{nl="Gepubliceerd"}, attachment:file? label="Member document"@{nl="Ledendocument"}, staff_only:bool=false label="Staff only"@{nl="Alleen personeel"} } label="Member content"@{nl="Ledeninformatie"}
  scenario calendar_snapshot on=Membership.create
  export scenario term(membership:Membership,cycle:int label=label_Term_cycle,capture:Capture?=null) by=member_manager or authenticated label=label_Term
  scenario create_term on=RenewalDue
  scenario renewal_tick on=MembershipDue
  scenario retry_renewal(renewal:Renewal) by=member_manager or authenticated label="Retry renewal generation"@{nl="Verlengingsgeneratie opnieuw proberen"}
  scenario assign(term:Term,account:user label=label_Entitlement_account) by=authenticated
  scenario remove(seat:Seat,reason:text) by=authenticated or member_manager label="Remove seat"@{nl="Plaats intrekken"}
  scenario reserve on=Requests.reserve
  scenario commit on=Requests.commit
  scenario consume on=Requests.consume
  scenario release on=Requests.release
  scenario reconcile on=Requests.reconcile
  scenario eligibility on=Requests.eligibility
  scenario pause(membership:Membership,reason:text) by=member_manager
  scenario resume(membership:Membership) by=member_manager
  scenario revoke_membership(membership:Membership,reason:text) by=member_manager label="Revoke benefits"@{nl="Voordelen intrekken"}
  scenario consent(membership:Membership,enabled:bool,reference:text? label=label_Membership_consent) by=authenticated label=label_Membership_consent
  scenario cancel_membership(membership:Membership,effective:datetime label="Cancellation effective date"@{nl="Ingangsdatum annulering"},reason:text) by=authenticated label="Request membership cancellation"@{nl="Annulering lidmaatschap aanvragen"}
  scenario refund_term(term:Term,amount:money,revoke_access:bool label="Revoke access"@{nl="Toegang intrekken"},reason:text) by=member_manager label="Apply term refund policy"@{nl="Terugbetalingsbeleid termijn toepassen"}
  scenario charge_result on=Billing.charge.completed
  scenario retry_collection(term:Term) by=member_manager or authenticated label="Retry term invoice"@{nl="Termijnfactuur opnieuw proberen"}
  scenario settlement on=Billing.settled
  scenario reconcile_payment on=Billing.reconcile.completed
  scenario apply_settlement on=SettlementReceived
  scenario payment_recovery on=PaymentCheck
  scenario term_boundary on=TermBoundary
  scenario commercial_check on=CommercialCheck
  export scenario access_review(customer:Customer,location:Location) read=true scope=authority -> MembershipAccessReview by=authenticated or member_manager label="Inspect membership access review"@{nl="Beoordeel lidmaatschapstoegang"}
  export scenario recheck_access(customer:Customer,location:Location) by=authenticated or member_manager label="Recheck membership access"@{nl="Controleer lidmaatschapstoegang opnieuw"}
  scenario company_changed on=CompanyAccessChanged
  scenario company_access_step on=CompanyAccessStep
  scenario access_changed on=AccessChanged
  scenario allocation_access_step on=AllocationAccessStep
  scenario watch_access_step on=WatchAccessStep
  style MemberTermsWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { current_only:bool=false label="Current terms only"@{nl="Alleen huidige termijnen"} }
  style MemberContentWorkspace $"Present plan benefits and units clearly, with readable paid-term snapshots and company-seat rows. Distinguish allowances, held allocations, renewals, and live member access; keep consent and member information comfortable to read within their declared scopes. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order accessible navigation as My membership, Member information, Membership register, then Membership plans for plan owners. Contextual member details retain authenticated billing/renewal after expiry. Customer and employee identities remain distinct.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My membership — own index | Breadcrumbs and a current-only Toggle; own Membership Cards with paused/revoked state text, consent Fieldset and renewal tooltips; per-term collection/cancellation/refund Badges with price/seat Stats; allowance ledger Stats and Allocation tables; empty state per collection | Request identified renewal terms and retry failed term invoices inline; cancellation/refund/removal open captioned modals with identical bindings; change recorded auto-renew consent; own booking/ticket/invoice/support links require their source grants |
| Member information — paid-content index | Published site guides in List/Card groups with reception hours, arrival/check-in, house rules, facilities and support/contact; breadcrumbs, empty states and a gated member-document Link per guide | Read current eligible location/plan content; contextual Reception invitations or Mail items retain independent role checks |
| Membership register — permitted staff index | Period Alert, breadcrumbs and a current-only Toggle; same per-term Badges/Stats as My membership; paginated Allowance/Seat tables, renewal tooltips and empty states per collection | Maintain memberships/terms, copy current payment links; resume stays inline while pause/revocation/refund/removal open captioned modals with identical bindings |
| Company seats — contextual own-company view | Breadcrumbs; paused/revoked state text; per-term collection/cancellation Badges; assign form and seat-remove modal; paginated seat/request tables with empty states | Authorized company administrators assign/remove only available paid seats; affected future reservations and device reconciliation remain explicit |
| Membership plans/content — protected owner/editor views | Plan/benefit/hours Fieldsets (location Select, fold/unit Radios) and unit rules Table; published state text and typed create Fieldset on the editor view; paginated child tables; tri-state active filter stays in the shared dialog | Plan owners maintain sellable plans/benefits; content publication cannot change paid entitlement or historical snapshots |

On mobile, place paid-until, next action and expiry/renewal before history. Distinguish loading, no applicable paid term, no granted content and filtered-empty. Preserve unsaved consent/content input on validation or stale saves. Show pending/failed/unknown collections and seat/allowance reconciliation without unpaid grace. Display granted/reserved/consumed/expired units separately; an expired-period release never creates current credit. Use recorded business timezone/calendar periods and frozen unit/overage rules. Customer price, seat and allowance history survives expiry; paid content is reauthorized on each request. Separate plan administration from personal settings; exclude provider/retry configuration.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```


