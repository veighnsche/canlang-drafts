# CanPromptLab

A standalone private catalog demonstrating every prompt authoring carrier in the frozen [build-generation contract](../../../design/proposals/build-generation/implementation-contract.md). Curators create and edit catalogs, entries and tags; members read admitted records and manage their own notes. Entries and tags archive and restore through explicit attributed scenarios. Catalog deletion is disabled. Canonical child/deletion rules still apply to entry removal. Tags are an independent catalog vocabulary; this small demonstration adds no tag-assignment feature.

The `.can` source and adjacent `can.generated/<uuid>/` artifacts are handwritten drafts. They make no compiler, coding-provider, runtime, browser or receipt claim. Every unit records `draft=true`, its source line and target, and null provider/model provenance. CSS is an editable scoped starter. JavaScript helpers and binding metadata are explicitly provisional, and cannot self-register authority or storage.

| Authoring form | Concrete use | Saved output |
| --- | --- | --- |
| Named model trait | `archive_evidence` on both Entry and Tag | One partial owning-declaration contribution |
| Inline model trait | Note's `trait $"..."` adds its pinned default | One partial Note contribution |
| Named field trait | `key_text_budget` on Entry.code and Tag.name | One reused pure UTF-8 byte-budget validator and partial owning envelope |
| Inline field trait | Entry.barcode's `text ... trait $"..."` | Pure EAN-13 check and partial owning envelope |
| Named custom Given keyword | Explicit `canonical_identity(target:model, field:field(target,text))`; standalone named-argument applications on Entry.code and Tag.name | One reused pure State producer sketch |
| Named styles | Top-level Workspace, FieldSurface and ControlSurface definitions; `$Name` attachments on pages, cards, forms, inputs, buttons and custom `show` instances | Three shared CSS units, no unit per use |
| Inline component styles | `$"..."` suffixes on page, card, form, input, textarea, canonical restore/delete controls and custom `show` host | Nine component CSS units |
| Generated row views | EntryTile with edit/archive/restore/delete, reused on normal and archived collections; TagTile with the equivalent declared controls | Two provisional renderers |
| Generated view root styles | EntryTile's definition-owned inline `style $"..."`; TagTile's named `style Workspace` leaf | One inline CSS unit; named leaf reuses Workspace |
| Optional generation profile | Keyword definition `agent=careful` | Shared root recipe supplies the illustrative profile; other Given/Then profiles remain implicit |

This gives **20 prompt definitions/output groups: four traits, one keyword, two views and thirteen styles**. The styles comprise three named definitions, nine inline component attachments and one inline view-root leaf. A prompt definition owns output; named applications reuse it. All literals are static JSON strings with adjacent `$`. There is no anonymous keyword, prompt on a keyword application, generated When body, ordinary style wrapper, or separate authored app registry.

Basic text constraints remain native: titles, codes, descriptions, summaries and notes explicitly use their required trim/length constraints. Rank defaults and bounds stay native as `int=0 min=0 max=999`. The reusable field trait limits the UTF-8 encoded entry code or tag name to 128 bytes using `TextEncoder`; this adds a byte constraint beyond their existing character bounds without changing stored spelling. The inline field prompt validates exactly thirteen ASCII digits and the standard EAN-13 checksum. It refuses a wrong check digit or a visually similar fullwidth digit without repairing stored input. Canonical field validation must admit both pure checkers and supply its existing feedback; their exact descriptors remain implementation work, not a new validator API promised by this draft.

The keyword computes NFKC followed by folding **ASCII A–Z only**. It preserves stored spelling and leaves remaining non-ASCII case distinctions intact. Entry keys use the existing Catalog ownership scope; Tag keys use their existing team scope. The compiler resolves declaration references and selects `state.unique-key@1`; State owns namespaces, old/final claims, fencing, transaction rollback, deletion release, replay and schema activation. The module receives text and returns text. It has no store, claim, permission or migration handles and adds no helper field. Changed saved implementation/import bytes belong in the compiler-derived schema fingerprint; collision validation must precede activation.

Inline source examples independently specify archive/restore authority, successful atomic key swaps, NFKC/ASCII collisions, checksum rejection and post-write guard failure. Example error names express desired rejection categories at this draft stage. The following finite owner fixtures are required runtime outcomes, **not executed results**:

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

Renderers receive only admitted stored rows and checked controls. They use the existing witness pattern's provisional `element`, `hooks`, `textFields` and `control` helpers for formatting, withholding, confirmations, versions/CSRF, validation feedback and focus. Queries, pagination, note forms and history remain at their caller. Custom-instance CSS styles its host; definition-owned styles style the child root, preserving nearest ownership. No renderer hand-wires a form or submits an action.

Verified directly: all twenty JSON/source prompt associations and thirteen style keys, fourteen named style uses, syntax of all five JavaScript files, nine NFKC/ASCII-fold examples, nine EAN-13 validity examples (including terminal-newline refusal), and seven UTF-8 byte-budget cases covering ASCII and multibyte boundaries. Ordinary When contains no generation prompt. Unchanged style, key and checksum results were reused after the field-trait correction. These checks do not execute Can scenarios, owner lifecycle fixtures, renderer helpers, CSS ownership lowering, CLI profiles or generated output intake. Those remain the compiler/runtime implementation's release conditions.
