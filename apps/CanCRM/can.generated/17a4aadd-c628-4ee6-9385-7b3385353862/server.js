// Handwritten field-callback ABI draft. The checked wrapper supplies the canonical
// signed-64-bit bigint codec and applies the existing field constraint/default.
// inputs.value is the admitted exact field value; no Number coercion or effects.
export function defaultValue(inputs) {
  return 1n;
}

export function check(inputs) {
  return inputs.value >= 1n;
}
