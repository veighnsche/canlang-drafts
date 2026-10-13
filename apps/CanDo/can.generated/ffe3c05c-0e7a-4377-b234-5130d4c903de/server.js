// Handwritten ABI draft. The compiler-owned wrapper retains members permission,
// staff/location/done guards, exact input codecs, version fencing and one commit.
// Provisional bound effect: effects.updateTask(admittedTaskHandle, exactPatch).
// It must delegate to the canonical staged Task update, retaining hooks and failures.
// inputs.task is an admitted record handle, never a synthesized plain object.
export async function run(inputs, effects) {
  await effects.updateTask(inputs.task, {
    done: false,
    completed_by: null,
    completed_at: null,
  });
}
