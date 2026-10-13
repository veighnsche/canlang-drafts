// Handwritten pure-producer ABI draft; exact module export binding is provisional.
// State projects a checked text input and receives a checked text result through
// state.unique-key@1. The compiler identifies source model/field; State chooses
// claim namespaces, evaluates old/final values and commits/releases atomically.
// This module owns no store, permission, claim/release, replay or migration API.
export function canonicalKey(value) {
  return value.normalize("NFKC").replace(/[A-Z]/g, char =>
    String.fromCharCode(char.charCodeAt(0) + 32));
}
