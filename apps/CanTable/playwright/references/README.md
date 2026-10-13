# CanTable intended-design references

Generated UI design targets, not actual screenshots, working frontends or passing E2E tests. Built-in imagegen, 13 October 2026. [Exact prompts](prompts.md); [source](../../CanTable.can); [requirements](../../CanTable.md); [all apps](../../../../UI_REFERENCES.md).

## Comparison contract

Use source requirements and canonical permissions before image details. Treat meaningful differences in layout, hierarchy, source-owned content or controls, readability, responsive behavior and state presentation as visual defects. Ignore harmless antialiasing, tiny spacing, equivalent typography and illustrative data differences. Never copy an image omission, invented control, incorrect caption or sample inconsistency into product requirements.

Preserve loading, empty/no-match, failed, stale, pending/unknown and successful states as separate source-owned outcomes. They are grouped into representative layouts here, not individually exhaustive pixel baselines. Shared left-sidebar shell applies on desktop, with the account menu at the bottom left. This reference set is desktop-only by the user’s latest instruction; runtime responsive requirements remain unchanged.

## 01-main-desktop.png

![CanTable Preserved legacy provisional host concept; NOT the current comparison target](01-main-desktop.png)

- Page: `/cafe`. State: Preserved legacy provisional host concept; NOT the current comparison target.
- Viewport intent: Legacy desktop.
- Important expectations: Retained for provenance only. Use02/03 instead for shell, fields, statuses and timing.
- Known limitations: Legacy image has invented navigation pages, Open toggle and Priority enum, treats Conflict as a state, and omits canonical creation fields. None are product requirements.

## 02-host-queue-desktop.png

![CanTable Host; waiting, actual overdue seating and conflicting future reservation](02-host-queue-desktop.png)

- Page: `/cafe`. State: Host; waiting, actual overdue seating and conflicting future reservation.
- Viewport intent: Desktop approximately1440×1000 CSS px.
- Important expectations: Complete café/table/walk-in fields above queue; integer priority; planned interval distinct from actual seating and estimated end; overdue and conflict alerts beside source-authorized actions.
- Known limitations: Queue split detail, arrived/cleared fields and nested evidence/history are abbreviated; image cannot replace source-required full record labels or complete modal forms.

## Then presentation refinement

The existing `$"..."` style literal was refined after inspecting the images: retain the useful intake/detail hierarchy and aligned evidence described above. These are accepted presentation instructions; data declarations, business rules, operation bindings, admission and inline examples remain intact. Exact dimensions, brand decoration and generator mistakes were not adopted.

Coverage: desktop source page layouts are represented; inactive tabs and equivalent typed dialogs share these patterns. Own-role desktop replacements cover My shifts and volunteer assignments; no mobile references remain active. No Dutch/theme variants or every possible loading/error/empty state are separately pictured. Those requirements remain source-authoritative, and no runtime or screenshot verification is claimed.

Desktop-only revision: mobile PNGs created during this task were withdrawn after the user’s 13 October 2026 instruction. Original pre-task PNGs remain preserved. Earlier right-sidebar prompts are retained as provenance; the final left-sidebar edit prompts supersede shell direction.

Source-field correction: Zone is a free text Input, as in the revised target; image styling does not constrain it to a closed list. Existing table active values do not mutate without the canonical edit operation.
