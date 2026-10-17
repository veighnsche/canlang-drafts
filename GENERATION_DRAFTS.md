# Prompt-based generation drafts

PromptLab adoption update (15 October 2026): its 17 live groups are adopted and
all 30 source examples pass against the installed runtime, with three obsolete styles preserved
under `apps/CanPromptLab/legacy.saved/`. Its current executable modules use checked
field validation and opaque canonical cards. See the [app companion](apps/CanPromptLab/CanPromptLab.md)
for actual acceptance status. The original 100-unit inventory and direct algorithm
checks below describe the earlier handwritten snapshot; they do not qualify the
other apps or make historical files eligible for training.

The original inventory is a source/design rehearsal of the accepted [build-generation contract](../docs/design/proposals/build-generation/implementation-contract.md). No build-time coding CLI/model ran for these drafts. Saved output began as handwritten provisional witnesses. PromptLab's explicit adoption and executed source rows are the scoped exception described above; other source examples remain expected behavior without runtime acceptance.

## Layout

```text
can.gen.toml                    illustrative shared recipe and optional profile
apps/<CanApp>/
  <CanApp>.can                  app composition, behavior and generation intent
  <CanApp>.md                   app requirements
  <CanApp>.mjs                  legacy desired-output witness, where present
  can.generated/<opaque-id>/
    unit.json                   truthful draft association; provider/model null
    style.css                   scoped CSS witness, for styles
    contributions.can           partial owning-declaration contribution, for traits
    server.js                   pure checker/key or view witness, where needed
    source-behavior.can.txt      original/desired behavior capture, where present
shared/                         owning shared Can packages
tools/organize.py              authoring organizer, not the generation engine
```

One folder contains each Can* companion group. Existing app/package/uses/use declarations own composition and authority; grouping does not add an app registry or permission owner. Unit folders sit beside their owning group for this rehearsal. This organization does not establish functioning compiler discovery, generated interfaces or receipts.

## Prompt form coverage

[CanPromptLab](apps/CanPromptLab/CanPromptLab.can), with its [companion](apps/CanPromptLab/CanPromptLab.md), brings every accepted form together in a small catalog. [CanDo](apps/CanDo/CanDo.can) shows nested style attachments in the original task workflow.

| Form | Concrete source use |
| --- | --- |
| Named model trait | `trait archive_evidence $"..."`, applied to Entry and Tag |
| Inline model trait | `Note {...} trait $"..."` |
| Named field trait | `trait key_text_budget $"..."`, applied to Entry.code and Tag.name |
| Inline field trait | `barcode:text ... trait $"..."` for EAN-13 validation |
| Named custom Given keyword | `keyword canonical_identity(target:model, field:field(target,text)) agent=careful $"..."`; standalone applications with named arguments |
| Named component style | `style FieldSurface $"..."` and `$FieldSurface` suffixes; named page/card/form/button/show styling also demonstrated |
| Inline component style | `$"..."` suffixes on page, card, form, input, textarea, canonical button/delete and custom show host |
| Generated row view | `view EntryTile(row:Entry) $"..."` and `show EntryTile {row=row}` |
| Generated view root style | EntryTile's view-header `$"..."` style suffix and TagTile's `$Workspace` header suffix |
| Optional generation profile | `agent=careful` on the keyword definition; the illustrative root config supplies its recipe |

Traits attach behavior to a model/field. Custom keywords define new standalone Given statements; a named trait is not a keyword. There are **no inline keyword prompts** or prompted keyword applications. Built-in policy/unique/invariant/lock declarations remain ordinary Can, as do all When/scenario/handler bodies; `$"..."` is invalid as a do body.

CanPromptLab's computed-key keyword supplies NFKC normalization plus ASCII-only lowercase uniqueness, while preserving stored spelling. Its pure function returns a key; canonical State owns scope, claims, old/final state, swaps, deletion, rollback, replay and collision-checked schema activation. The source rows now execute the scoped uniqueness, swap and rejection cases; broader application replay/activation acceptance remains separately recorded in its companion. The named field trait checks UTF-8 byte length; the inline field trait checks EAN-13 digits/checksum. Basic trim/length/default/bounds remain native, including both rank declarations. Earlier six trait units remain narrow composition sketches; they do not qualify the novel keyword requirement.

## Named reuse and component attachments

The `style` keyword only names a reusable prompt: a top-level `style Name $"..."` declaration, with no body and no other `style` statement anywhere. Every rendered component instead carries its own style directly as a single `$Name` or `$"..."` suffix, including page/card/form/input, canonical controls and custom show instances. Named uses share the saved definition and create no extra generation unit. Keep one-off styles on their component; names express reuse rather than retry targeting. Nonvisual guards/data declarations have no style suffix. A view is a component too: its header's first `$"..."` generates rendering, and an optional second suffix on that same header (`$"..."` or `$Name`) styles the renderer root. Direct children follow the finite generated-view contract: canonical cards and controls, text/content/history bindings, and whole-view require guards. Each binding remains complete and opaque. PromptLab uses one source-authored card per view and returns it unchanged exactly once.

Using PromptLab's existing Tag model and CRUD declarations, this presentation excerpt shows the current card contract:

```can
Then
 style FieldSurface $"Comfortable labeled fields with clear validation and focus."
 style Workspace $"Readable task content; stack on narrow screens."
 view TagTile(row:Tag) $"Return the complete opaque bindings.card unchanged exactly once." $"Compact readable tag details with visible keyboard focus."
  card "Catalog tag"
   title row.name
   text row.rank
   content row.description
   primary "Edit tag" action=Tag.update arguments={record=row}
 page /tags title="Tags" $Workspace
  require members
  card "New tag" $"Keep intake compact and responsive."
   form Tag.create
    input name $FieldSurface
    textarea description $FieldSurface
    input rank
  list Tag
   show TagTile {row=row} $"Give the custom view host some vertical space."
```

In the original handwritten inventory, the 49 prior apps attach styles to their 119 page headers rather than wrapping page content in child style blocks. Page guard/control ordering, business declarations, localization and examples stay intact. The showcase adds three pages. That historical 50-app inventory contains **100 handwritten units: 79 styles, ten traits, one keyword and ten views**. Forty-two named style definitions plus 37 inline styles serve the source; **119 named style applications** reuse definitions without copied output. CanPromptLab originally contributes 20 units (17 are now live and three preserved as obsolete); CanDo adds four styles for its fields, card, control and custom view host. Original CSS and legacy JavaScript witnesses are preserved.

Generated CSS must respect nearest style ownership and the canonical component contracts. Caller show-host styling controls placement, size and inheritance, while child view styles own its interior. Handwritten `:scope` starters are desired scoped CSS, not proof of the compiler's ownership lowering or browser appearance. Views receive admitted stored rows and complete canonical bindings. PromptLab keeps queries, paging and history at the caller; permission checks and mutation wiring remain with their canonical owners.

## Build controls represented by the drafts

Normal compatible saved builds spend no AI calls and require no MCP server. Missing or stale saved output diagnoses rather than silently generating. Manual retry regenerates **all current prompts in the active app/build closure**, including successful/preferred output; unrelated apps remain outside that closure. Working outputs stay active until the complete fresh set is validated and accepted through one coordinated journal. Failure, cancellation or conflict preserves the working set.

Frontend jobs receive whole-Then context, prompts, named uses and checked component/theme/root/part contracts, grouped by compatible effective recipe. Required Given contributions precede frontend generation. A saved unit is an association/output record, not a separate coding-agent invocation; internal calls and actual cost depend on the provider. Named style/trait/keyword uses do not launch additional jobs. The shared recipe supplies defaults; Then prefers frontend with shared fallback, and definitions can select an optional complete profile.

Build-time coding agents submit CSS/JS/code content through the custom Can MCP server. Its host owns candidate paths and metadata. Runner enforcement must prevent direct writes to protected source/current/candidate files; an MCP interface alone cannot enforce filesystem isolation. Unsupported adapters fail before launch. The source-writing agent can directly refine saved JS/CSS under write leases. None of the handwritten outputs or organizer implements this server, enforcement, retry, leases or promotion.

## Organizer

```sh
python3 tools/organize.py
python3 tools/organize.py --apply
python3 tools/organize.py --apply --scaffold-styles
```

Dry run is default. Flat Can* companions move into `apps/<stem>/` through exclusive destination creation; conflicts and symlinks refuse. Style discovery handles named definitions, component suffixes (including a view header's root-style suffix) and same-owner cross-file reuse. It creates only missing CSS/records and never overwrites edited files. Named uses create no files. Unknown names, malformed/nonvisual carriers, any non-definition `style` statement (inline leaf or wrapper) and ambiguous structural keys refuse before writes.

Root/definition keys retain their earlier identity. Nested style witnesses use an internal structural component path, without adding source names or ordinal numbering. These helper keys are authoring associations, not the compiler's implemented ABI or full structural matching algorithm. The organizer does not call a coding CLI or implement generation/refinement controls. `can.gen.toml` contains a placeholder model and an optional careful profile; it is an example, not a provider receipt.

## Verification and limits

The page migration's exact comparison preserves all 49 prior sources apart from style relocation/dedenting. The final comparison also accounts for CanDo's explicit four prompt additions and three named uses, preserving every other byte. All 62 prior CSS witnesses and 41 legacy `.mjs` files remain byte-identical. Current JSON/source associations, resolved named uses, local index links, recipe structure and no-op scaffolding are checked after integration. The helper's 42 finite fixture checks cover supported attachments, refusal, key preservation and exclusive output behavior. `tools/test_organize.py` pins the style-form rule: named definitions only, view-header style suffixes, and refusal of inline or wrapper `style` statements.

CanPromptLab's five handwritten JS files have syntax checks. Direct finite pure-function checks cover nine NFKC/ASCII-key cases, nine EAN-13 cases and seven UTF-8 boundary cases. Unchanged renderer/trait checks are reused. Source scenarios, State claim lifecycle, schema activation, renderer helpers, CSS lowering, browser layout, CLI/model recipes and MCP intake remain unexecuted draft expectations. Exact schema-validation descriptors for the two pure field checks are provisional owner integration; these files cannot self-register authority. Neither source migration nor draft inventory counts establish implementation acceptance.

## Group index

Counts are handwritten unit witnesses, not executed generations. Requirement companions sit beside each source. Shared packages have no generation units; employee deactivation remains ordinary Can.

| App source | Styles | Named uses | Traits | Keywords | Views | Earlier output witness |
| --- | --- | --- | --- | --- | --- | --- |
| [CanAffiliate](apps/CanAffiliate/CanAffiliate.can) | 1 | 3 | 0 | 0 | 0 | — |
| [CanApprove](apps/CanApprove/CanApprove.can) | 2 | 2 | 0 | 0 | 1 | [Legacy JS](apps/CanApprove/CanApprove.mjs) |
| [CanBoard](apps/CanBoard/CanBoard.can) | 2 | 2 | 2 | 0 | 1 | [Legacy JS](apps/CanBoard/CanBoard.mjs) |
| [CanBook](apps/CanBook/CanBook.can) | 1 | 2 | 0 | 0 | 0 | — |
| [CanCRM](apps/CanCRM/CanCRM.can) | 1 | 0 | 1 | 0 | 0 | [Legacy JS](apps/CanCRM/CanCRM.mjs) |
| [CanCatch](apps/CanCatch/CanCatch.can) | 1 | 0 | 0 | 0 | 0 | — |
| [CanChat](apps/CanChat/CanChat.can) | 1 | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanChat/CanChat.mjs) |
| [CanCheck](apps/CanCheck/CanCheck.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanCheck/CanCheck.mjs) |
| [CanContract](apps/CanContract/CanContract.can) | 1 | 0 | 0 | 0 | 0 | — |
| [CanCreative](apps/CanCreative/CanCreative.can) | 1 | 4 | 0 | 0 | 0 | [Legacy JS](apps/CanCreative/CanCreative.mjs) |
| [CanCustomer](apps/CanCustomer/CanCustomer.can) | 1 | 4 | 0 | 0 | 0 | — |
| [CanDecide](apps/CanDecide/CanDecide.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanDecide/CanDecide.mjs) |
| [CanDesk](apps/CanDesk/CanDesk.can) | 1 | 2 | 0 | 0 | 0 | — |
| [CanDiscover](apps/CanDiscover/CanDiscover.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanDiscover/CanDiscover.mjs) |
| [CanDo](apps/CanDo/CanDo.can) | 6 | 6 | 0 | 0 | 1 | [Legacy JS](apps/CanDo/CanDo.mjs) |
| [CanEnrich](apps/CanEnrich/CanEnrich.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanEnrich/CanEnrich.mjs) |
| [CanEvent](apps/CanEvent/CanEvent.can) | 1 | 2 | 0 | 0 | 0 | — |
| [CanExpense](apps/CanExpense/CanExpense.can) | 2 | 3 | 0 | 0 | 1 | [Legacy JS](apps/CanExpense/CanExpense.mjs) |
| [CanFeedback](apps/CanFeedback/CanFeedback.can) | 1 | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanFeedback/CanFeedback.mjs) |
| [CanField](apps/CanField/CanField.can) | 1 | 2 | 0 | 0 | 0 | — |
| [CanGallery](apps/CanGallery/CanGallery.can) | 2 | 4 | 0 | 0 | 1 | [Legacy JS](apps/CanGallery/CanGallery.mjs) |
| [CanGrant](apps/CanGrant/CanGrant.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanGrant/CanGrant.mjs) |
| [CanHire](apps/CanHire/CanHire.can) | 2 | 5 | 0 | 0 | 1 | [Legacy JS](apps/CanHire/CanHire.mjs) |
| [CanInbox](apps/CanInbox/CanInbox.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanInbox/CanInbox.mjs) |
| [CanInvoice](apps/CanInvoice/CanInvoice.can) | 2 | 4 | 0 | 0 | 1 | [Legacy JS](apps/CanInvoice/CanInvoice.mjs) |
| [CanKnowledge](apps/CanKnowledge/CanKnowledge.can) | 1 | 4 | 0 | 0 | 0 | [Legacy JS](apps/CanKnowledge/CanKnowledge.mjs) |
| [CanLearn](apps/CanLearn/CanLearn.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanLearn/CanLearn.mjs) |
| [CanLeave](apps/CanLeave/CanLeave.can) | 1 | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanLeave/CanLeave.mjs) |
| [CanLoyalty](apps/CanLoyalty/CanLoyalty.can) | 1 | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanLoyalty/CanLoyalty.mjs) |
| [CanMail](apps/CanMail/CanMail.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanMail/CanMail.mjs) |
| [CanMaintain](apps/CanMaintain/CanMaintain.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanMaintain/CanMaintain.mjs) |
| [CanMember](apps/CanMember/CanMember.can) | 4 | 6 | 0 | 0 | 1 | [Legacy JS](apps/CanMember/CanMember.mjs) |
| [CanOnboard](apps/CanOnboard/CanOnboard.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanOnboard/CanOnboard.mjs) |
| [CanPromptLab](apps/CanPromptLab/CanPromptLab.can) | 13 | 14 | 4 | 1 | 2 | — |
| [CanPropose](apps/CanPropose/CanPropose.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanPropose/CanPropose.mjs) |
| [CanPurchase](apps/CanPurchase/CanPurchase.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanPurchase/CanPurchase.mjs) |
| [CanReception](apps/CanReception/CanReception.can) | 1 | 5 | 0 | 0 | 0 | [Legacy JS](apps/CanReception/CanReception.mjs) |
| [CanRefer](apps/CanRefer/CanRefer.can) | 1 | 3 | 0 | 0 | 0 | [Legacy JS](apps/CanRefer/CanRefer.mjs) |
| [CanRent](apps/CanRent/CanRent.can) | 4 | 7 | 0 | 0 | 0 | [Legacy JS](apps/CanRent/CanRent.mjs) |
| [CanReport](apps/CanReport/CanReport.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanReport/CanReport.mjs) |
| [CanShift](apps/CanShift/CanShift.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanShift/CanShift.mjs) |
| [CanStats](apps/CanStats/CanStats.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanStats/CanStats.mjs) |
| [CanStock](apps/CanStock/CanStock.can) | 1 | 0 | 1 | 0 | 0 | [Legacy JS](apps/CanStock/CanStock.mjs) |
| [CanSuccess](apps/CanSuccess/CanSuccess.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanSuccess/CanSuccess.mjs) |
| [CanSync](apps/CanSync/CanSync.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanSync/CanSync.mjs) |
| [CanTable](apps/CanTable/CanTable.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanTable/CanTable.mjs) |
| [CanTime](apps/CanTime/CanTime.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanTime/CanTime.mjs) |
| [CanTrade](apps/CanTrade/CanTrade.can) | 1 | 2 | 1 | 0 | 0 | [Legacy JS](apps/CanTrade/CanTrade.mjs) |
| [CanVolunteer](apps/CanVolunteer/CanVolunteer.can) | 1 | 2 | 0 | 0 | 0 | [Legacy JS](apps/CanVolunteer/CanVolunteer.mjs) |
| [CanWorkbench](apps/CanWorkbench/CanWorkbench.can) | 1 | 0 | 0 | 0 | 0 | [Legacy JS](apps/CanWorkbench/CanWorkbench.mjs) |
