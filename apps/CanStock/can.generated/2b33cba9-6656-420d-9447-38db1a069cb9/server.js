// Handwritten semantic witness of the same declared constant default/bound.
// These functions illustrate desired exact JS lowering, not an additional
// independent runtime default/validator registration. Can owns the field codec.
export function defaultValue() { return 0n; }
export function check({ value }) { return typeof value === "bigint" && value >= 0n; }
