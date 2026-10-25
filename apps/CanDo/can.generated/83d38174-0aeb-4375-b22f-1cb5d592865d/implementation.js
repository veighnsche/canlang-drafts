// Handwritten renderer ABI draft; all ui helper names below are provisional.
// Required compiler-provided interface (no raw HTML or application effects):
// ui.element(tag, attributes, children): compose escaped/trusted presentation nodes.
// ui.hooks(part): current-instance ownership/root/part attributes; "root" is the
// existing semantic renderer root. Nested controls preserve nearest ownership.
// ui.textFields(row, fieldNames): escaped, canonical localized field captions and
// exact-value formatting, including null handling; no independent field lookup.
// ui.contentField(row, fieldName): canonical admitted content rendering/sanitizing.
// ui.control(descriptor): render supplied canonical controls, including admission,
// localized captions, version/CSRF values, validation feedback and focus behavior.
// bindings.edit, bindings.complete and bindings.reopen are the checked descriptors
// derived from this view's declarations; unavailable controls are omitted by ui.
// Helpers are supplied for the current admitted row and locale; no English runtime
// captions, record mutation, independent action submission or browser state here.
export function render({ row, bindings, ui }) {
  return ui.element("section", ui.hooks("root"), [
    ui.element("div", ui.hooks("details"), [
      ui.textFields(row, [
        "title", "assignee", "due", "priority", "done",
        "completed_by", "completed_at",
      ]),
      ui.contentField(row, "description"),
    ]),
    ui.control(bindings.edit),
    ui.element("div", ui.hooks("actions"), [
      ui.control(bindings.complete),
      ui.control(bindings.reopen),
    ]),
  ]);
}
