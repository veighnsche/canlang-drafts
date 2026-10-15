// State supplies checked text and owns validation, transactions and authority.
export function check(value) {
  if (value.length !== 13 || !/^[0-9]{13}$/.test(value)) return false;
  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += (value.charCodeAt(i) - 48) * (i % 2 === 0 ? 1 : 3);
  }
  return (10 - sum % 10) % 10 === value.charCodeAt(12) - 48;
}
