// Handwritten ABI draft. The compiler-owned wrapper retains HR permission,
// active/start-date guard, exact input codecs, version fencing and one commit.
// Provisional bound effect: effects.updateEmployee(admittedEmployeeHandle, exactPatch).
// It must delegate to the canonical staged Employee update, retaining changed hooks
// and canonical failures. inputs.ended is passed through as an exact Can date value;
// JavaScript Date parsing, string conversion and timezone conversion are absent.
export async function run(inputs, effects) {
  await effects.updateEmployee(inputs.employee, {
    active: false,
    end: inputs.ended,
  });
}
