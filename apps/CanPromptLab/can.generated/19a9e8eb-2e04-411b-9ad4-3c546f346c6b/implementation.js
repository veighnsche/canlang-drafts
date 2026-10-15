// State owns canonical key scope, claims, fencing and atomic commits.
export function canonicalKey(value) {
  return value.normalize("NFKC").replace(/[A-Z]/g, char =>
    String.fromCharCode(char.charCodeAt(0) + 32));
}
