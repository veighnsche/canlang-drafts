# CanPromptLab browser acceptance

[Source](../CanPromptLab.can) and [requirements](../CanPromptLab.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanPromptLab/playwright/app.spec.ts
bun run test:draft:coverage -- CanPromptLab
```

Declared routes: `/catalogs`, `/tags`, `/catalogs/archived`. Selected-app compilation must establish which routes belong to each declared composition.

The suite explicitly requests `previewRoles: {Ava:["curator"]}`. The protected local dev owner resolves that name against compiled canonical role metadata and grants it through Identity’s owner-authorized API; default preview actors still have no custom roles. Ben remains a member without curator authority. Team ownership alone is insufficient. Authored fixtures available to the example runner: `editor`, `catalog`, `alice`, `bob`, `tag`, `note`. These isolated example fixtures do not seed the serving browser. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A curator creates a catalog and checked entry, corrects EAN-13 and UTF-8 validation without losing text, and sees canonical-key collisions preserve stored spelling. Another catalog permits the independent key; tags apply their own team scope.
- Archive/restore entry and tag exposes then clears actor/time attribution; members manage only their own notes and cannot write to archived entries. Child-free removal releases a key. Atomic swap, post-write rollback, canonical replay and collision-refusing schema activation require direct owner-operation checks where no page control exists.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No catalogs yet.”; “No entries in this catalog.”; “No notes yet.”; “No tags yet.”; “No archived entries.”.

The authored workflow bodies perform their own real role/data setup. They cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.

## Concrete browser bodies and remaining gates

Eight existing cases per viewport have completed their functional assertions on
2026-10-15 against the frozen compiler/runtime/source closure: three initial
routes, empty navigation/keyboard dialog, canonical anonymous denials, Entry
validation/collisions/archive/restore/key reuse, Tag byte validation/offline
retry/archive/restore and member-only note create/update/delete with curator
control/direct-request refusal. The note text assertion accounts for the
formatter's Unicode isolation marks; stored content and permission assertions
remain intact. The corrected member case passes separately on both viewports.

All 38 baseline states (19 per viewport) are inspected and accepted. Preserve the
13 earlier desktop baselines; this continuation adds six inspected desktop and
19 inspected mobile PNG/approval pairs. These are explicit visual acceptance,
not a claim that the first-capture Playwright aggregate was green: missing
baselines produced soft review failures before inspection. Existing baseline
comparisons passed. No complete same-input rerun was performed solely to compare
new baselines with their own capture. The required functional outcomes were
observed in the original journeys, and new captures were individually inspected.

Run one preview owner at a time. Concurrent isolated previews completed their
page/baseline assertions but exceeded the existing ten-second shutdown budget;
returning to serial runs restored normal owner release. Those exact endpoints
and processes exited. An unrelated existing ActionGallery owner was preserved;
an isolated `TMPDIR` provided the ordinary control-socket namespace for these
runs. The CLI, installed runtime and consumed source inputs stayed frozen during
capture. This is the declared PromptLab scope, not every application or the
broader compiler-completion programme. Reuse the previously recorded source,
protected-form, permission/rollback/replay and activation checks. The current
native acceptance check additionally passes Entry/Tag archive/restore disclosure
and original archive-snapshot replay after restoration.

The authored journeys use real canonical forms to create and edit catalogs, entries, tags and notes. They assert checksum/fullwidth/UTF-8 refusals with retained input, corrected retry, canonical-key conflicts, independent Catalog scopes, archive/restore, child-free removal/key reuse and committed-data reload. Ben's journey checks absent curator controls and a real forbidden HTTP create before managing his own note. The Tag journey uses real offline transport loss and retries online with retained input; it does not fulfill or mock a response. Empty routes, nested empty collections, sidebar navigation, keyboard dialog closure/focus return and history expansion have explicit assertions. These bodies have executed against the corrected frozen closure at the scopes above.

The twelve companion fixtures are linked to their defining owner, rather than duplicating nonvisual runtime checks in browser setup:

| Companion outcome | Declared consumer/owner |
| --- | --- |
| Same-Catalog NFKC/ASCII collision and preserved spelling | Entry curator browser journey |
| Independent Catalog permits the same canonical key | Entry curator browser journey (`Alice` in the second Catalog) |
| Team-scoped Tag collision | Tag curator browser journey |
| Distinct `É`/`é` keys | Actual-source activation test below, plus source examples |
| Atomic code swap | `swap_codes` source examples |
| Admitted deletion releases key | Entry curator browser journey |
| Member curator-operation refusal without row/claim changes | Source archive/swap examples and native acceptance snapshots below; member browser checks add HTTP/control coverage |
| Rejected final approval rolls back code and claims | Native acceptance test below |
| Exact-operation replay changes nothing | Native acceptance test below |
| Colliding candidate preserves installed schema/state/claims | Actual-source activation test below |
| Valid checksum and wrong/fullwidth digit refusal | Entry curator browser journey |
| 64/65-`é` byte boundary | Tag curator browser journey, with independent source cases |

`ownerChecks` links the existing [source examples](../CanPromptLab.can), [native acceptance test](../../../../packages/cloudflare/src/runtime/promptlab-native-acceptance.integration.test.ts) and [actual-source activation test](../../../../packages/cloudflare/src/runtime/promptlab-activation-collision.integration.test.ts). This is declared owner coverage, not browser execution or a new qualification result. The companion and parent acceptance record retain the qualified native results; metadata changes do not require repeating those unchanged checks.

`recordObservedState` records `pending` only after the real submit observer has asserted both `data-can-submit-state=pending` and `aria-busy=true`; `success` follows the committed result and visible/reloaded data. These transient functional observations do not invent pending screenshots. All durable declared states still call `capture`, and actual captures require inspection and approved baselines. No edit/preferences acceptance is inferred from these journeys.

The three inspected route concepts guide the corresponding canonical shell, intake/content hierarchy and readability across route states and viewports, so mappings are by route. They are conceptual guidance rather than pixel equivalents for empty, error, dialog or narrow-screen states. Illustrative account names, extra controls or fields in a concept do not extend the authored source contract. Denied JSON responses ignore concept mappings. Actual desktop and narrow-screen captures still require functional checks and individual visual review; no mapping approves a baseline or invents a mobile reference.
