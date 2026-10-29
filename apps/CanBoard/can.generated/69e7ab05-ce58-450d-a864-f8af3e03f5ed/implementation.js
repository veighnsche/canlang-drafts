// Handwritten renderer interface. ui helpers are provisional compiler-provided
// safe element/ownership and localized admitted-field helpers; they retain exact
// datetime formatting and omit withheld values. No raw context or effects.
export function render({ row, ui }) {
  return ui.element("div", ui.hooks("root"), [
    ui.textFields(row, ["completed_by", "completed_at"]),
  ]);
}
