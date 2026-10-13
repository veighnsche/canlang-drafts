// Handwritten field-check ABI draft; export signature and owner admission are
// provisional. The canonical schema owner supplies checked text after native
// constraints and maps false to canonical field validation feedback.
// TextEncoder counts UTF-8 bytes without changing stored spelling; no truncation,
// normalization, lookup, effect, permission or registry access is supplied.
export function check(value) {
  return new TextEncoder().encode(value).byteLength <= 128;
}
