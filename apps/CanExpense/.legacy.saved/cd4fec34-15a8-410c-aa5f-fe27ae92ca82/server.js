// Handwritten renderer ABI draft; every ui helper below is provisional.
// ui.element composes escaped/trusted nodes; ui.hooks supplies current-instance
// root/ownership attributes and the indicated data-can-part token.
// Field helpers use only the admitted row projection, canonical localized labels,
// exact value/null/file formatting, escaping and safe omission of withheld fields.
// They perform no independent lookup and add no permission or operation authority.
// No raw HTML, runtime English captions, browser state or record mutations.
export function render({ row, ui }) {
  return ui.element("section", ui.hooks("root"), [
    ui.element("div", ui.hooks("source"), [ui.textFields(row, ["source"])]),
    ui.element("div", ui.hooks("merchant"), [ui.textFields(row, ["merchant"])]),
    ui.element("div", ui.hooks("amount"), [ui.textFields(row, ["amount"])]),
    ui.element("div", ui.hooks("date"), [ui.textFields(row, ["spent_on"])]),
  ]);
}
