// State supplies checked text and owns validation, transactions and authority.
export function check(value) {
  return new TextEncoder().encode(value).byteLength <= 128;
}
