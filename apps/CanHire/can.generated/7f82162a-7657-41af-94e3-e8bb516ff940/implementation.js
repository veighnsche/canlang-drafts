// Handwritten renderer ABI draft; every ui helper below is provisional.
// ui.element composes escaped/trusted nodes; ui.hooks supplies current-instance
// root/ownership attributes and the indicated data-can-part token.
// Field helpers use only the admitted row projection, canonical localized labels,
// exact value/null/file formatting, escaping and safe omission of withheld fields.
// They perform no independent lookup and add no permission or operation authority.
// No raw HTML, runtime English captions, browser state or record mutations.
export function render({ row, ui }) {
  return ui.element("section", ui.hooks("root"), [
    ui.element("div", ui.hooks("application"), [ui.textFields(row, ["application"])]),
    ui.element("div", ui.hooks("attachment"), [ui.textFields(row, ["cv"])]),
  ]);
}
