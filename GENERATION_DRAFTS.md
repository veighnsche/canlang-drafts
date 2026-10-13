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

Retry policy update: manual retry regenerates **all** current prompts in the active app/build closure, including preferred/successful styles, with no per-prompt source names or selectors. The unit records below are internal authoring/association sketches, not a promise of one coding-agent call per prompt. Whole-Then frontend generation for coherent CSS is a recommendation awaiting orchestration/output-group design; no generator has run. Working saved outputs stay until acceptance, and ordinary builds remain zero-AI.

Generator output update: future build-time coding agents must submit generated CSS/JS/code through a custom Can MCP server, whose host validates and places isolated candidates and metadata. Generator tools/filesystem access must enforce no direct writes to protected source/current/candidate files; the server alone owns output placement. The handwritten witnesses and organizer below do not implement this server or qualify enforcement. Normal source authoring and lease-coordinated direct edits remain supported; saved builds need no MCP server.

Given form distinction: retain **named trait prompts** for reusable model/field behavior and **inline trait prompts** for anonymous one-off model/field behavior. Separately, **named custom Given keyword prompts** define new standalone Given declarations with their own targets, arguments and implicit semantics. There are **no inline keyword prompts**: keyword definitions require a semantic name, and their applications carry no generation prompt. A trait application does not become a standalone keyword declaration just because the trait is named. The six trait witnesses below remain valid trait composition sketches; they do not demonstrate the separate custom keyword capability. Exact general keyword syntax/integration remains open, and this clarification does not migrate authored sources or saved outputs.

Given intent correction: the feature must let a prompt define a **new local Given keyword with new implicit behavior**, including behavior existing Can cannot express. `policy`, `unique`, `invariant` and `lock` were examples of built-in implicit-behavior keywords, not a list of prompt targets. The current field/default trait sketches below only repackage expressible declarations and do **not** demonstrate or satisfy that required extension capability. Their presence is not acceptance evidence. General keyword syntax/integration and a genuinely novel behavior example still need design; the style/view demonstrations retain their recorded scope. Ordinary When bodies remain authored Can and are outside generation.

- All 49 app sources retain styles around their 119 pages. Thirty-seven reusable named definitions serve 102 page scopes; 17 page scopes and eight view-root styles remain inline one-off units. That gives 62 independently stored CSS witnesses rather than 127 duplicated style units. Named definitions live directly in the owning Then block; `style Name` applies the saved CSS, with no prompt or new output at each use. `frontend` stays implicit. Page guards retain their original order outside style scopes, and the shared left sidebar and portrait-tablet menu remain shell defaults.
- Six Given traits demonstrate the domain contributions listed below, preserving existing defaults, bounds, nullability and localized captions rather than inventing new business rules. Board demonstrates both an inline model trait and a named model trait; Stock reuses one field trait across two models. Basic trimmed nonempty text uses the existing built-in `text trim min=1` constraints directly; nullable text keeps `text? trim min=1`. The earlier 24 generated `nonempty` traits and their saved units have been removed.
- All scenario and handler bodies remain ordinary authored Can. The 14 previously prompted bodies have been restored verbatim, including their guards, explicit effect order and inline examples; their generated-operation groups have been removed. `$"..."` is invalid as a `do` body. Normal compiler output for When is deterministic and does not belong to a probabilistic generation unit.
- Eight same-module row-bound views use only admitted stored-model rows. Seven new views each replace at least two existing fragments; CanDo TaskTile remains the initial view with canonical edit/complete/reopen controls. Queries, pagination, caller-specific content, permissions and other controls stay at their use sites. Render helpers, ownership hooks and effect interfaces remain provisional sketches, with exact value/localization responsibilities stated beside the witnesses.

There are **76 handwritten draft units: 62 styles, six trait composition sketches and eight views**. All 76 remaining source generation prompts use the adopted static `$"..."` literal; ordinary labels, descriptions and text remain quoted strings. There are no generated-operation units. `unit.json` carries opaque identity, source association and truthful draft origin; no provider/model receipt is invented. These records are illustrations, not compiler-issued schemas or qualification receipts. Each inline scope or named definition owns one unit. Named applications reuse that definition and have no separate CSS output unit.

## Named reuse and inline scopes

[CanDo](apps/CanDo/CanDo.can) defines `TodoWorkspace` once and applies it on `/tasks`, `/tasks/my-work` and `/tasks/checklists`. Its TaskTile has an inline style owned by that view definition. [CanHire](apps/CanHire/CanHire.can) reuses `HireWorkspace` across five pages while its CandidateApplication uses an inline view-root style. [CanStock](apps/CanStock/CanStock.can) keeps its single page style inline.

```can
Then
 style TodoWorkspace $"Readable task rows and clear status; stack on narrow screens."
 view TaskTile(row:Task) $"Arrange admitted task fields and declared controls."
  style $"Compact task details with visible keyboard focus."
 page /tasks title="Tasks"
  require members
  style TodoWorkspace
   table Task columns=title,done
 page /tasks/my-work title="My work"
  require members
  style TodoWorkspace
   card "Assigned work"
    list Task
```

Names now mean reusable definitions, replacing the earlier optional-label meaning. Definitions have no ordinary presentation body; uses wrap ordinary presentation children, or apply as leaves on a prompted view renderer root. Definition/use resolution stays in the owning package/app Then namespace; exports, parameters and style inheritance are outside this initial scope. Each use has its own root/ownership hooks. A change to a named definition affects its uses, and inspection derives those sites from the source rather than storing a parallel use registry. Keep a scope inline for a one-off styling intent, rather than naming every prompt. Named definitions are for actual reuse, not retry targeting. Full retry regenerates both named and inline prompts; selective direct edits remain available.

For this migration, only page prompts with the same domain instruction and byte-identical saved CSS are consolidated. Retain one existing opaque unit ID/CSS file for each group and remove its equal duplicate outputs; normalize the route-specific instruction to describe each applied page scope. Other CSS, JS, contribution bytes, original behavior captures and app business declarations stay intact. A `$` marker expresses generation intent: ordinary saved builds still make zero AI calls, and missing/stale output must diagnose instead of spending silently.

## Clear domain fits

The following projects now use the forms where an existing domain rule, operation or repeated row fragment gives them a concrete job. Every app already has page style prompts.

| Project | Trait composition sketches | Ordinary When restored | Reused views |
| --- | --- | --- | --- |
| [CanCRM](apps/CanCRM/CanCRM.can) | `sales_seats`: existing seat default/minimum | `lose`, `reopen` | — |
| [CanTrade](apps/CanTrade/CanTrade.can) | `member_audience`: existing member-only default | `status`, `dismiss` | — |
| [CanFeedback](apps/CanFeedback/CanFeedback.can) | `pending_review`: hidden-until-review default | `unvote` | — |
| [CanBoard](apps/CanBoard/CanBoard.can) | Inline Meeting finalization fields; named `completion_evidence` on Action | `decide`, `complete` | `ActionEvidence` in two completion panels |
| [CanStock](apps/CanStock/CanStock.can) | `reorder_threshold` on Item and Threshold | `adjust` | — |
| [CanExpense](apps/CanExpense/CanExpense.can) | — | `withdraw` | `ReceiptEvidence` in claimant/reviewer lists |
| [CanHire](apps/CanHire/CanHire.can) | — | `reopen_vacancy` | `CandidateApplication` in candidate/recruiter screens |
| [CanApprove](apps/CanApprove/CanApprove.can) | — | `withdraw`, then staged schedule cancellation | `SubmittedVersionStatus` in history/review |
| [CanGallery](apps/CanGallery/CanGallery.can) | — | `review` selects approval/rejection | `SubmissionIdentity` in member/public galleries |
| [CanMember](apps/CanMember/CanMember.can) | — | — | `TermOutcome` in three stored-Term lists |
| [CanInvoice](apps/CanInvoice/CanInvoice.can) | — | — | `InvoiceBalance` in list/detail views |

These extend the earlier [CanDo TaskTile](apps/CanDo/CanDo.can) example. CanDo reopen and [Employees deactivate](shared/Employees.can) are ordinary Can bodies again. Original view/trait fragments remain alongside their units. Trait contributions remain explicitly partial owner-attached envelopes, not new model declarations. Constant-default/check JS sketches illustrate desired lowering rather than registering a second validator.

Keep exact pricing, payment reconciliation and eligibility calculations explicit until their canonical exact-value/effect helpers are specified. The Feedback edit hook remains explicit because an ordinary update helper would reenter the hook rather than modify its in-flight row. Contract-result panels such as AccessReview are outside the accepted stored-row view scope. A repeated primitive badge alone does not require a custom view.

## Organizer

From this repository root:

```sh
python3 tools/organize.py
python3 tools/organize.py --apply
python3 tools/organize.py --apply --scaffold-styles
```

Dry run is default. Flat Can* companions move into `apps/<stem>/` through exclusive destination creation; conflicts and symlinks refuse. Style scaffolding reads `$"..."` inline scopes and reusable definitions, resolves named applications, and creates only missing definition/inline records and CSS. Uses create no output files. It never overwrites edited files; unknown/duplicate names, malformed prompt/profile carriers and ambiguous inline source keys refuse before writes. It does not invent business behavior, rewrite source prompts or implement AI generation/retry/reset/leases. Newly moved documents may need their cross-group relative links rebased; the current corpus links have been rebased.

The single root recipe uses an explicit placeholder model. It is an example for future generation, not authorization to run a provider. Draft application source and shared imports remain the identity/contract owners.

## Verification and limits

The earlier organizer fixture checks and original corpus comparison remain valid at their recorded scope. This expansion checks exact source inverses for all eleven changed projects and syntax for the 23 newly authored server JS files once; the original three JS checks are reused. The source comparisons recover each project immediately before this expansion, including existing guards, inline examples and caller controls. They do not execute those examples. Unit/source associations, independent style ownership, local index links and the no-op organizer rerun are checked after the final edits.

The primitive cleanup restores all 53 original `trim min=1` field uses and removes 24 redundant definitions/output folders. Exact source comparisons check that every other source byte is retained in those 24 files. Style line associations and current inventory are refreshed; existing JS, view and scenario witnesses are unchanged, so their earlier checks are reused.

The marker/reuse migration checks all 52 authored sources against their captured previous bytes, allowing only generation-marker changes, style headers and reusable definitions. Retained CSS is byte-identical; the removed 65 duplicate style groups matched their retained CSS exactly. The updated helper fixture checks cover named reuse, forward/cross-file lookup, nested/inline scopes, ownership/refusal, output preservation and no-op repeat; the final corpus checks cover the remaining unit/prompt associations, named use resolution and local links. Reuse unchanged JS checks. This establishes authoring organization, not rendered style behavior or a working generation engine.

When-generation removal restores 14 captured original bodies across eleven sources and deletes only their 14 known output groups. The exact comparison preserves every other source byte. Refresh style line associations, verify the 76 remaining units/prompts and named uses, reject prompted do bodies in the authoring helper, and reuse unchanged style/view/trait checks. Historical operation syntax checks above describe the earlier draft stage, not current generation support.

Current compiler/prototype checks will still reject newly accepted generation syntax until the implementation plan supplies it. Active corpus paths now follow the grouped sources and exclude `can.generated` fragments; semantic expectations and frozen browser evidence are not silently recaptured. LSP generated-fragment discovery remains an implementation gap in its concurrently edited owner. Existing broader migration, target, permission and browser qualification remain open.

## Group index

Counts denote authored unit witnesses, not executed generation. App requirement companions sit beside each linked source. Shared packages have no generation units; employee deactivation and basic field constraints remain ordinary Can.

| App source | Style units | Named uses | Traits | Views | Earlier output witness |
| --- | --- | --- | --- | --- | --- |
| [CanAffiliate](apps/CanAffiliate/CanAffiliate.can) | 1 | 3 | 0 | 0 | — |
| [CanApprove](apps/CanApprove/CanApprove.can) | 2 | 2 | 0 | 1 | [Legacy JS](apps/CanApprove/CanApprove.mjs) |
| [CanBoard](apps/CanBoard/CanBoard.can) | 2 | 2 | 2 | 1 | [Legacy JS](apps/CanBoard/CanBoard.mjs) |
| [CanBook](apps/CanBook/CanBook.can) | 1 | 2 | 0 | 0 | — |
| [CanCRM](apps/CanCRM/CanCRM.can) | 1 | 0 | 1 | 0 | [Legacy JS](apps/CanCRM/CanCRM.mjs) |
| [CanCatch](apps/CanCatch/CanCatch.can) | 1 | 0 | 0 | 0 | — |
| [CanChat](apps/CanChat/CanChat.can) | 1 | 3 | 0 | 0 | [Legacy JS](apps/CanChat/CanChat.mjs) |
| [CanCheck](apps/CanCheck/CanCheck.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanCheck/CanCheck.mjs) |
| [CanContract](apps/CanContract/CanContract.can) | 1 | 0 | 0 | 0 | — |
| [CanCreative](apps/CanCreative/CanCreative.can) | 1 | 4 | 0 | 0 | [Legacy JS](apps/CanCreative/CanCreative.mjs) |
| [CanCustomer](apps/CanCustomer/CanCustomer.can) | 1 | 4 | 0 | 0 | — |
| [CanDecide](apps/CanDecide/CanDecide.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanDecide/CanDecide.mjs) |
| [CanDesk](apps/CanDesk/CanDesk.can) | 1 | 2 | 0 | 0 | — |
| [CanDiscover](apps/CanDiscover/CanDiscover.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanDiscover/CanDiscover.mjs) |
| [CanDo](apps/CanDo/CanDo.can) | 2 | 3 | 0 | 1 | [Legacy JS](apps/CanDo/CanDo.mjs) |
| [CanEnrich](apps/CanEnrich/CanEnrich.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanEnrich/CanEnrich.mjs) |
| [CanEvent](apps/CanEvent/CanEvent.can) | 1 | 2 | 0 | 0 | — |
| [CanExpense](apps/CanExpense/CanExpense.can) | 2 | 3 | 0 | 1 | [Legacy JS](apps/CanExpense/CanExpense.mjs) |
| [CanFeedback](apps/CanFeedback/CanFeedback.can) | 1 | 2 | 1 | 0 | [Legacy JS](apps/CanFeedback/CanFeedback.mjs) |
| [CanField](apps/CanField/CanField.can) | 1 | 2 | 0 | 0 | — |
| [CanGallery](apps/CanGallery/CanGallery.can) | 2 | 4 | 0 | 1 | [Legacy JS](apps/CanGallery/CanGallery.mjs) |
| [CanGrant](apps/CanGrant/CanGrant.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanGrant/CanGrant.mjs) |
| [CanHire](apps/CanHire/CanHire.can) | 2 | 5 | 0 | 1 | [Legacy JS](apps/CanHire/CanHire.mjs) |
| [CanInbox](apps/CanInbox/CanInbox.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanInbox/CanInbox.mjs) |
| [CanInvoice](apps/CanInvoice/CanInvoice.can) | 2 | 4 | 0 | 1 | [Legacy JS](apps/CanInvoice/CanInvoice.mjs) |
| [CanKnowledge](apps/CanKnowledge/CanKnowledge.can) | 1 | 4 | 0 | 0 | [Legacy JS](apps/CanKnowledge/CanKnowledge.mjs) |
| [CanLearn](apps/CanLearn/CanLearn.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanLearn/CanLearn.mjs) |
| [CanLeave](apps/CanLeave/CanLeave.can) | 1 | 3 | 0 | 0 | [Legacy JS](apps/CanLeave/CanLeave.mjs) |
| [CanLoyalty](apps/CanLoyalty/CanLoyalty.can) | 1 | 3 | 0 | 0 | [Legacy JS](apps/CanLoyalty/CanLoyalty.mjs) |
| [CanMail](apps/CanMail/CanMail.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanMail/CanMail.mjs) |
| [CanMaintain](apps/CanMaintain/CanMaintain.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanMaintain/CanMaintain.mjs) |
| [CanMember](apps/CanMember/CanMember.can) | 4 | 6 | 0 | 1 | [Legacy JS](apps/CanMember/CanMember.mjs) |
| [CanOnboard](apps/CanOnboard/CanOnboard.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanOnboard/CanOnboard.mjs) |
| [CanPropose](apps/CanPropose/CanPropose.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanPropose/CanPropose.mjs) |
| [CanPurchase](apps/CanPurchase/CanPurchase.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanPurchase/CanPurchase.mjs) |
| [CanReception](apps/CanReception/CanReception.can) | 1 | 5 | 0 | 0 | [Legacy JS](apps/CanReception/CanReception.mjs) |
| [CanRefer](apps/CanRefer/CanRefer.can) | 1 | 3 | 0 | 0 | [Legacy JS](apps/CanRefer/CanRefer.mjs) |
| [CanRent](apps/CanRent/CanRent.can) | 4 | 7 | 0 | 0 | [Legacy JS](apps/CanRent/CanRent.mjs) |
| [CanReport](apps/CanReport/CanReport.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanReport/CanReport.mjs) |
| [CanShift](apps/CanShift/CanShift.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanShift/CanShift.mjs) |
| [CanStats](apps/CanStats/CanStats.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanStats/CanStats.mjs) |
| [CanStock](apps/CanStock/CanStock.can) | 1 | 0 | 1 | 0 | [Legacy JS](apps/CanStock/CanStock.mjs) |
| [CanSuccess](apps/CanSuccess/CanSuccess.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanSuccess/CanSuccess.mjs) |
| [CanSync](apps/CanSync/CanSync.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanSync/CanSync.mjs) |
| [CanTable](apps/CanTable/CanTable.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanTable/CanTable.mjs) |
| [CanTime](apps/CanTime/CanTime.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanTime/CanTime.mjs) |
| [CanTrade](apps/CanTrade/CanTrade.can) | 1 | 2 | 1 | 0 | [Legacy JS](apps/CanTrade/CanTrade.mjs) |
| [CanVolunteer](apps/CanVolunteer/CanVolunteer.can) | 1 | 2 | 0 | 0 | [Legacy JS](apps/CanVolunteer/CanVolunteer.mjs) |
| [CanWorkbench](apps/CanWorkbench/CanWorkbench.can) | 1 | 0 | 0 | 0 | [Legacy JS](apps/CanWorkbench/CanWorkbench.mjs) |
