# CanPromptLab

A standalone private catalog demonstrating every prompt authoring carrier in the current [build-generation contract](../../../design/proposals/build-generation/implementation-contract.md). Curators create and edit catalogs, entries and tags; members read admitted records and manage their own notes. Entries and tags archive and restore through explicit attributed scenarios. Catalog deletion is disabled. Canonical child/deletion rules still apply to entry removal. Tags are an independent catalog vocabulary; this small demonstration adds no tag-assignment feature.

The 17 live saved groups have been explicitly adopted from the handwritten legacy
outputs. Their records retain adopted provenance and original output hashes;
legacy `server.js` files remain as historical bytes, while `implementation.js`
is the current executable input. The three obsolete style groups are preserved
under `legacy.saved/`, outside active discovery. No coding provider or model was
run for this adoption. All 30 source examples now pass through the installed
canonical runtime. Current native form/page and browser qualification continue;
this app is not yet approved as a positive training example.

| Authoring form | Concrete use | Saved output |
| --- | --- | --- |
| Named model trait | `archive_evidence` on both Entry and Tag | One checked named model template |
| Inline model trait | Note's `trait $"..."` adds its pinned default | One checked Note template |
| Named field trait | `key_text_budget` on Entry.code and Tag.name | One reused pure UTF-8 byte-budget check and typed field template |
| Inline field trait | Entry.barcode's `text ... trait $"..."` | Pure EAN-13 check and typed field template |
| Named custom Given keyword | Explicit `canonical_identity(target:model, field:field(target,text))`; standalone named-argument applications on Entry.code and Tag.name | One reused checked State unique-key producer |
| Named styles | Top-level Workspace, FieldSurface and ControlSurface definitions; `$Name` attachments on pages, cards, forms, inputs, buttons and custom `show` instances | Three shared CSS units, no unit per use |
| Inline component styles | `$"..."` suffixes on page, card, form, input, textarea, canonical restore/delete controls and custom `show` host | Six component CSS units |
| Generated row views | EntryTile with edit/archive/restore/delete, reused on normal and archived collections; TagTile with the equivalent declared controls | Two renderers returning their opaque canonical card |
| Generated view root styles | EntryTile's definition-owned view-header `$"..."` suffix; TagTile's `$Workspace` suffix | One inline CSS unit; named leaf reuses Workspace |
| Optional generation profile | Keyword definition `agent=careful` | Shared root recipe supplies the illustrative profile; other Given/Then profiles remain implicit |

This gives **17 live prompt definitions/output groups: four traits, one keyword, two views and ten styles**. The styles comprise three named definitions, six inline component attachments and one inline view-root suffix. A prompt definition owns output; named applications reuse it. All literals are static JSON strings with adjacent `$`. There is no anonymous keyword, prompt on a keyword application, generated When body, ordinary style wrapper, or separate authored app registry.

Basic text constraints remain native: titles, codes, descriptions, summaries and notes explicitly use their required trim/length constraints. Rank defaults and bounds stay native as `int=0 min=0 max=999`. The reusable field trait limits the UTF-8 encoded entry code or tag name to 128 bytes using `TextEncoder`; this adds a byte constraint beyond their existing character bounds without changing stored spelling. The inline field prompt validates exactly thirteen ASCII digits and the standard EAN-13 checksum. It refuses a wrong check digit or a visually similar fullwidth digit without repairing stored input. The compiler-derived `state.field-validation@1` contract fixes text input, Boolean output and the `check` export. State evaluates normalized, hook-adjusted values before publishing writes, history or unique claims; false, exceptions and non-Boolean results produce canonical validation. Migration and privileged example setup consume the same checks. These are trusted saved modules under the existing verified-loader boundary, not a general JavaScript sandbox.

The keyword computes NFKC followed by folding **ASCII A–Z only**. It preserves stored spelling and leaves remaining non-ASCII case distinctions intact. Entry keys use the existing Catalog ownership scope; Tag keys use their existing team scope. The compiler resolves declaration references and selects `state.unique-key@1`; State owns namespaces, old/final claims, fencing, transaction rollback, deletion release, replay and schema activation. The module receives text and returns text. It has no store, claim, permission or migration handles and adds no helper field. Changed saved implementation/import bytes belong in the compiler-derived schema fingerprint; collision validation must precede activation.

Inline source examples independently specify archive/restore authority, successful atomic key swaps, NFKC/ASCII collisions, independent catalog scopes, non-ASCII case distinctions, checksum rejection and post-write guard failure. The 30 authored rows use canonical error categories, including `error(conflict)` for uniqueness and independent 64/65-`é` UTF-8 boundary and trim-before-check cases. The following table specifies required runtime outcomes; it is not a claim that every listed workflow has been executed. Qualification below records the completed scope.

| Fixture | Expected outcome |
| --- | --- |
| Create `"Ａlice"`, then `"Alice"` or `"ALICE"` in the same catalog | Second insert conflicts; the first stored code remains `"Ａlice"` |
| Create `"Bob"` in that catalog or `"Alice"` in another catalog | Succeeds under ordinary permissions and independent owner scopes |
| Tag `"Reference"`, then `"Ｒeference"` or `"REFERENCE"` in the same team | Conflicts through the second compatible keyword application |
| Compute `"É"` and `"é"` | Distinct keys; no Unicode-wide lowercasing |
| Swap the two current Entry codes through `swap_codes` | Both final values commit together without a transient collision |
| Delete an admitted entry through canonical remove; recreate its code | Canonical deletion releases the key; recreation succeeds when child/deletion checks admit it |
| Member attempts curator create, edit, archive, swap or remove | Permission refusal; no row or claim changes |
| `change_code_if` writes Carol and then rejects false approval | Entire transaction rolls back; the old code/key remains and Carol stays available |
| Replay a committed canonical operation with the same operation identity | Canonical replay returns its original result and does not duplicate claims or effects |
| Changed key implementation collides on installed rows | Schema activation refuses; prior schema, values and claims remain active |
| Barcode `4006381333931` or `9780306406157` | Valid; `4006381333932` and `４006381333931` are invalid |
| Entry.code or Tag.name contains 64 copies of `é`, then 65 | The 128-byte value passes the byte check; the 130-byte value fails while remaining within the native 100-character bound |

Renderers receive a complete source-authored `bindings.card` and return it once,
unchanged. Can owns the card content, primary footer, secondary heading menu,
admission, confirmations, versions/CSRF, feedback and focus. The original renderer
helpers remain only in historical `server.js` files. Queries, pagination, notes
and history stay at the caller. Current styles use `:host`/`:host(:focus-visible)`;
caller show-host CSS cannot style child-owned interiors.

Adoption verification: all 17 current definitions retain a saved association with
no changed-prompt or intake issue; the three source-less styles remain intact in
`legacy.saved/`. Earlier direct JavaScript algorithm checks remain historical
support, not substitutes for executing the source. The canonical compiler and
installed-runtime checks now pass the field-validation, candidate-admission,
fixture-snapshot, computed-key scope and legacy-index repair scopes recorded in
the parent decision log. On 15 October 2026, all **30/30 authored source rows**
passed with zero setup failures or unsupported rows, including after the checked
scenario-disclosure repair. This includes the independent Catalog key case,
atomic swap and rejected final approval. A separate actual-app native sequence
passes member/foreign-note/archived-parent permission refusals, key preservation
and reuse after rollback, and exact-operation replay without another commit.
The isolated actual-source activation check also passes: a copied candidate that
collapses the predecessor's distinct `É`/`é` Tag keys refuses before publication,
preserving the installed pointer, rows, history and claims. These tests close the
listed owner-operation outcomes at those scopes.

Implicit parent binding and protected-reference preparation are implemented:
10 compiler/native checks and eight protected-form checks pass, including
Entry/Note creation, shadowed ancestors, ambiguity, explicit overrides, tampering
and stale-parent refusal. Nullable archive-default preparation passes both
affected native HTTP checks. Rejected-attempt recovery passes State 16/16,
UI 50/50 and Interfaces 60/60: only an observed durable rejection can issue a
fresh attempt; immutable old receipts and changed-input conflicts remain.
The actual native Tag form corrects a rejected input and commits once.

The private native source-row bridge is implemented. It keeps the original wire
row for saved-view rendering and browser metadata, and supplies a separate lazy
native source row through the checked canonical page scope. The complete current-source
native sequence now passes **1/1**: real Tag and protected parent-bound Entry
forms reject invalid input, adopt the server-issued retry pair and commit once;
exact old attempts replay, changed old inputs conflict, and an old proof cannot
authorize a fresh identity. Populated and archived pages render native archive
user/datetime evidence, with live null defaults preserved. The same check covers
exact source-row identity, unchanged wire presentation, visible fields and scope
closure. History's typed scalar checks pass 34/34; fresh Given/read-predicate
compiler checks pass 5/5. Earlier permission, rollback, replay and activation
results remain accepted at their recorded scopes.

Actual curator/member browser qualification remains open. Role provisioning,
paged owner binding and portable cursor packaging have passing focused checks;
the preview starts and commits catalog creation. The browser suite authors eight
cases per project for desktop and mobile. Twelve-fixture lexical coverage and
browser TypeScript checks pass. Functional execution of those journeys and
individual visual acceptance remain pending against the corrected frozen
closure. Concept references are not approved runtime baselines. No training has
started.
