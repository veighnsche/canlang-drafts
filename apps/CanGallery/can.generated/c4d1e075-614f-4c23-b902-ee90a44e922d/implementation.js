// Handwritten renderer ABI draft; every ui helper name here is provisional.
// Required future canonical helpers: element composes escaped presentation nodes;
// hooks supplies current-instance ownership/root/part attributes; textFields,
// titleField, badgeField, copyField and metricsFields render only admitted fields
// with canonical localized captions, exact-value formatting and null handling.
// Money formatting belongs to those helpers: no arithmetic or float conversion.
// No independent field lookup, application effects, network access or submission.
export function render({ row, bindings, ui }) {
  return ui.element("section", ui.hooks("root"), [
    ui.element("div", ui.hooks("identity"), [ui.titleField(row, "title")]),
    ui.element("div", ui.hooks("details"), [ui.textFields(row, ["author", "rights"])]),
  ]);
}
