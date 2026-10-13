# CanShift intended-design references

Generated UI design targets, not actual screenshots, working frontends or passing E2E tests. Built-in imagegen, 13 October 2026. [Exact prompts](prompts.md); [source](../../CanShift.can); [requirements](../../CanShift.md); [all apps](../../../../UI_REFERENCES.md).

## Comparison contract

Use source requirements and canonical permissions before image details. Treat meaningful differences in layout, hierarchy, source-owned content or controls, readability, responsive behavior and state presentation as visual defects. Ignore harmless antialiasing, tiny spacing, equivalent typography and illustrative data differences. Never copy an image omission, invented control, incorrect caption or sample inconsistency into product requirements.

Preserve loading, empty/no-match, failed, stale, pending/unknown and successful states as separate source-owned outcomes. They are grouped into representative layouts here, not individually exhaustive pixel baselines. Shared left-sidebar shell applies on desktop, with the account menu at the bottom left. This reference set is desktop-only by the user’s latest instruction; runtime responsive requirements remain unchanged.

## 01-roster-populated-desktop.png

![CanShift Scheduler; published duty, conflicted draft and unmet coverage window](01-roster-populated-desktop.png)

- Page: `/roster`. State: Scheduler; published duty, conflicted draft and unmet coverage window.
- Viewport intent: Desktop approximately1440×1000 CSS px.
- Important expectations: Chronological agenda, complete assignment fields and buffers; nested published revision and notice state; per-window Coverage met without invented aggregate.
- Known limitations: New Roster form and individual history/pagination are abbreviated. Publish/reconcile controls must follow current duty authority even when the image shows all controls.

## 02-own-shifts-desktop.png

![Own published shifts and swap request](02-own-shifts-desktop.png)

- Page: `/roster/mine`. State: own employee availability, published duty, pending publication notice and open requested swap.
- Viewport intent: desktop, approximately1440×1100 CSS px; left sidebar.
- Important expectations: explicit employee/interval/available intake; publication revision and buffers; committed publication differs from notice delivery; original requester does not receive the substitute’s acceptance controls.
- Known limitations: history and notice rows are abbreviated; source enum captions and record attribution remain authoritative. No employee-attendance or staffing completion state is introduced.

## Then presentation refinement

The existing `$"..."` style literal was refined after inspecting the images: retain the useful intake/detail hierarchy and aligned evidence described above. These are accepted presentation instructions; data declarations, business rules, operation bindings, admission and inline examples remain intact. Exact dimensions, brand decoration and generator mistakes were not adopted.

Coverage: desktop source page layouts are represented; inactive tabs and equivalent typed dialogs share these patterns. Own-role desktop replacements cover My shifts and volunteer assignments; no mobile references remain active. No Dutch/theme variants or every possible loading/error/empty state are separately pictured. Those requirements remain source-authoritative, and no runtime or screenshot verification is claimed.

Desktop-only revision: mobile PNGs created during this task were withdrawn after the user’s 13 October 2026 instruction. Original pre-task PNGs remain preserved. Earlier right-sidebar prompts are retained as provenance; the final left-sidebar edit prompts supersede shell direction.

Inspected desktop replacement limitation: the generated duty Workspace cell contains a date and Skill header repeats. Use the source location and one skill label; neither duplication is a product requirement.
