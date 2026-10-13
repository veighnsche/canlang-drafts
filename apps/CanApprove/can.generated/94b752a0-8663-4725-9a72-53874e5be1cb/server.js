// Handwritten renderer ABI draft; every ui helper below is provisional.
// ui.element composes escaped/trusted nodes; ui.hooks supplies current-instance
// root/ownership attributes and the indicated data-can-part token.
// Field helpers use only the admitted row projection, canonical localized labels,
// exact value/null/file formatting, escaping and safe omission of withheld fields.
// They perform no independent lookup and add no permission or operation authority.
// No raw HTML, runtime English captions, browser state or record mutations.
// ui.badgeField and ui.statusField preserve the original canonical badge/status
// renderer, localized words and accessible semantics; they do not recompute overdue.
export function render({ row, ui }) {
  return ui.element("div", ui.hooks("root"), [
    ui.element("div", ui.hooks("state"), [ui.badgeField(row, "state")]),
    ui.element("div", ui.hooks("overdue"), [ui.statusField(row, "overdue")]),
  ]);
}
