// Handwritten renderer ABI draft; every ui helper and binding name is provisional.
// element composes escaped presentation; hooks supplies nearest-owner root/part
// attributes. textFields uses only the admitted row, canonical localized captions,
// exact formatting, null handling and withheld-field omission. control renders
// checked canonical controls with admission, versions/CSRF, confirmation, labels,
// validation feedback and focus. No independent lookup, form wiring or effects.
export function render({ row, bindings, ui }) {
  return ui.element("section", ui.hooks("root"), [
    ui.element("div", ui.hooks("details"), [
      ui.textFields(row, ["code", "title", "barcode", "summary", "rank", "archived", "archived_by", "archive_recorded_at"]),
    ]),
    ui.element("div", ui.hooks("actions"), [
      ui.control(bindings.edit),
      ui.control(bindings.archive_entry),
      ui.control(bindings.restore_entry),
      ui.control(bindings.delete),
    ]),
  ]);
}
