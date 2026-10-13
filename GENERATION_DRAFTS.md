# Prompt-based generation drafts

This is a source/design rehearsal of the accepted build-generation feature. No build-time coding CLI/model ran. The compiler/runtime does not yet implement these generation carriers or load these unit records; helper names in handwritten JS remain explicitly provisional. CSS is an editable starter witness, not evidence of a rendered app or a faithful model-generated design. Legacy `.mjs` files preserve their earlier desired-output scope.

## Layout

```text
can.gen.toml                    shared illustrative CLI/model recipe
apps/
  CanDo/
    CanDo.can                   owning business source and generation prompts
    CanDo.md                    application requirements
    CanDo.mjs                   earlier desired application output witness
    can.generated/
      <opaque-style-id>/
        unit.json
        style.css
      <opaque-trait-id>/
        unit.json
        contributions.can
      <opaque-operation-id>/
        unit.json
        server.js
        source-behavior.can.txt
      <opaque-view-id>/
        unit.json
        server.js
        source-behavior.can.txt
shared/
  Employees.can
  Locations.can
  Suppliers.can
  can.generated/                witnesses owned by the shared declarations
tools/
  organize.py
```

One folder contains each Can* companion group. This does not add app wrappers, an authored dependency registry or a new permission owner. Existing `app`, `package`, `uses` and `use` declarations retain ownership/composition; supplied project root remains the draft repository for cross-group/shared discovery. Unit folders sit beside their owning source group for this rehearsal; this is a draft file organization, not a functioning saved-output discovery API.

## What is represented

- All 49 app sources have app-specific style prompts around the content of their 119 pages. Both inline/named forms appear. Page-level guards stay outside styles in their original order; the shared left sidebar and portrait-tablet menu remain shell defaults. One additional style belongs to the TaskTile view, giving 120 independently stored style witnesses.
- Twenty-four local `nonempty` trait definitions replace exactly 53 existing stored-field `trim min=1` pairs. Other constraints, captions, field order/defaults and nullability remain. This includes the three shared package files; all 52 authored `.can` files therefore use the new source forms. Saved contributions show the original constraints in explicitly partial owner-attached model envelopes, not new model declarations.
- CanDo `reopen` and Employees `deactivate` use prompted When bodies with meaningful sequential canonical-update JS witnesses. Original bodies remain recorded verbatim. Signatures, guards, policies and existing inline examples retain their scope.
- CanDo TaskTile is a same-module `view(row:Task)` with checked edit/complete/reopen controls and definition-owned styling. Its collection/query/pagination, surrounding localized card, comments and history remain at the use site. The renderer uses admitted row data and supplied formatting/content/control helpers; no client business-state replica or browser module was needed.

`unit.json` records carry opaque IDs, owner/source association and truthful draft origin. There are 147 draft units: 120 styles, 24 traits, two operations and one view. They are illustrative records, not compiler-issued schemas, fingerprints or qualification receipts. No provider/model identity is invented. The source `agent` option remains optional and `frontend` stays implicit for Then.

## Organizer

From this repository root:

```sh
python3 tools/organize.py
python3 tools/organize.py --apply
python3 tools/organize.py --apply --scaffold-styles
```

Dry run is default. Flat Can* companions move into `apps/<stem>/` through exclusive destination creation; conflicts and symlinks refuse. Style scaffolding reads existing source prompts and creates only missing draft records/CSS. It never overwrites edited files; duplicate source keys refuse before writes. It does not invent business behavior, rewrite source prompts or implement AI generation/retry/reset/leases. Newly moved documents may need their cross-group relative links rebased; the current corpus links have been rebased.

The single root recipe uses an explicit placeholder model. It is an example for future generation, not authorization to run a provider. Draft application source and shared imports remain the identity/contract owners.

## Verification and limits

The organizer's finite temporary-fixture checks cover dry runs, preserved bytes, collisions/symlinks, ambiguous styles, edited-file preservation and repeat behavior. The three new server JS files pass syntax checks only. An inverse source comparison checks that removing the style/trait/view/body illustrations recovers the original authored behavior; it does not execute that behavior.

Current compiler/prototype checks will still reject newly accepted generation syntax until the implementation plan supplies it. Active corpus paths now follow the grouped sources and exclude `can.generated` fragments; semantic expectations and frozen browser evidence are not silently recaptured. LSP generated-fragment discovery remains an implementation gap in its concurrently edited owner. Existing broader migration, target, permission and browser qualification remain open.

## Group index

Counts denote authored unit witnesses, not executed generation. App requirement companions sit beside each linked source. Shared packages have three trait witnesses plus the employee-deactivation operation.

| App source | Styles | Traits | Operations | Views | Earlier output witness |
| --- | --- | --- | --- | --- | --- |
| [CanAffiliate](apps/CanAffiliate/CanAffiliate.can) | 3 | 0 | 0 | 0 | — |
| [CanApprove](apps/CanApprove/CanApprove.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanApprove/CanApprove.mjs) |
| [CanBoard](apps/CanBoard/CanBoard.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanBoard/CanBoard.mjs) |
| [CanBook](apps/CanBook/CanBook.can) | 2 | 0 | 0 | 0 | — |
| [CanCRM](apps/CanCRM/CanCRM.can) | 1 | 1 | 0 | 0 | [Legacy JS](apps/CanCRM/CanCRM.mjs) |
| [CanCatch](apps/CanCatch/CanCatch.can) | 1 | 1 | 0 | 0 | — |
| [CanChat](apps/CanChat/CanChat.can) | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanChat/CanChat.mjs) |
| [CanCheck](apps/CanCheck/CanCheck.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanCheck/CanCheck.mjs) |
| [CanContract](apps/CanContract/CanContract.can) | 1 | 0 | 0 | 0 | — |
| [CanCreative](apps/CanCreative/CanCreative.can) | 4 | 0 | 0 | 0 | [Legacy JS](apps/CanCreative/CanCreative.mjs) |
| [CanCustomer](apps/CanCustomer/CanCustomer.can) | 4 | 1 | 0 | 0 | — |
| [CanDecide](apps/CanDecide/CanDecide.can) | 1 | 1 | 0 | 0 | [Legacy JS](apps/CanDecide/CanDecide.mjs) |
| [CanDesk](apps/CanDesk/CanDesk.can) | 2 | 0 | 0 | 0 | — |
| [CanDiscover](apps/CanDiscover/CanDiscover.can) | 1 | 1 | 0 | 0 | [Legacy JS](apps/CanDiscover/CanDiscover.mjs) |
| [CanDo](apps/CanDo/CanDo.can) | 4 | 1 | 1 | 1 | [Legacy JS](apps/CanDo/CanDo.mjs) |
| [CanEnrich](apps/CanEnrich/CanEnrich.can) | 1 | 1 | 0 | 0 | [Legacy JS](apps/CanEnrich/CanEnrich.mjs) |
| [CanEvent](apps/CanEvent/CanEvent.can) | 2 | 0 | 0 | 0 | — |
| [CanExpense](apps/CanExpense/CanExpense.can) | 3 | 1 | 0 | 0 | [Legacy JS](apps/CanExpense/CanExpense.mjs) |
| [CanFeedback](apps/CanFeedback/CanFeedback.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanFeedback/CanFeedback.mjs) |
| [CanField](apps/CanField/CanField.can) | 2 | 1 | 0 | 0 | — |
| [CanGallery](apps/CanGallery/CanGallery.can) | 4 | 0 | 0 | 0 | [Legacy JS](apps/CanGallery/CanGallery.mjs) |
| [CanGrant](apps/CanGrant/CanGrant.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanGrant/CanGrant.mjs) |
| [CanHire](apps/CanHire/CanHire.can) | 5 | 1 | 0 | 0 | [Legacy JS](apps/CanHire/CanHire.mjs) |
| [CanInbox](apps/CanInbox/CanInbox.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanInbox/CanInbox.mjs) |
| [CanInvoice](apps/CanInvoice/CanInvoice.can) | 4 | 1 | 0 | 0 | [Legacy JS](apps/CanInvoice/CanInvoice.mjs) |
| [CanKnowledge](apps/CanKnowledge/CanKnowledge.can) | 4 | 1 | 0 | 0 | [Legacy JS](apps/CanKnowledge/CanKnowledge.mjs) |
| [CanLearn](apps/CanLearn/CanLearn.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanLearn/CanLearn.mjs) |
| [CanLeave](apps/CanLeave/CanLeave.can) | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanLeave/CanLeave.mjs) |
| [CanLoyalty](apps/CanLoyalty/CanLoyalty.can) | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanLoyalty/CanLoyalty.mjs) |
| [CanMail](apps/CanMail/CanMail.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanMail/CanMail.mjs) |
| [CanMaintain](apps/CanMaintain/CanMaintain.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanMaintain/CanMaintain.mjs) |
| [CanMember](apps/CanMember/CanMember.can) | 7 | 1 | 0 | 0 | [Legacy JS](apps/CanMember/CanMember.mjs) |
| [CanOnboard](apps/CanOnboard/CanOnboard.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanOnboard/CanOnboard.mjs) |
| [CanPropose](apps/CanPropose/CanPropose.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanPropose/CanPropose.mjs) |
| [CanPurchase](apps/CanPurchase/CanPurchase.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanPurchase/CanPurchase.mjs) |
| [CanReception](apps/CanReception/CanReception.can) | 5 | 0 | 0 | 0 | [Legacy JS](apps/CanReception/CanReception.mjs) |
| [CanRefer](apps/CanRefer/CanRefer.can) | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanRefer/CanRefer.mjs) |
| [CanRent](apps/CanRent/CanRent.can) | 9 | 1 | 0 | 0 | [Legacy JS](apps/CanRent/CanRent.mjs) |
| [CanReport](apps/CanReport/CanReport.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanReport/CanReport.mjs) |
| [CanShift](apps/CanShift/CanShift.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanShift/CanShift.mjs) |
| [CanStats](apps/CanStats/CanStats.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanStats/CanStats.mjs) |
| [CanStock](apps/CanStock/CanStock.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanStock/CanStock.mjs) |
| [CanSuccess](apps/CanSuccess/CanSuccess.can) | 1 | 1 | 0 | 0 | [Legacy JS](apps/CanSuccess/CanSuccess.mjs) |
| [CanSync](apps/CanSync/CanSync.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanSync/CanSync.mjs) |
| [CanTable](apps/CanTable/CanTable.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanTable/CanTable.mjs) |
| [CanTime](apps/CanTime/CanTime.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanTime/CanTime.mjs) |
| [CanTrade](apps/CanTrade/CanTrade.can) | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanTrade/CanTrade.mjs) |
| [CanVolunteer](apps/CanVolunteer/CanVolunteer.can) | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanVolunteer/CanVolunteer.mjs) |
| [CanWorkbench](apps/CanWorkbench/CanWorkbench.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanWorkbench/CanWorkbench.mjs) |
