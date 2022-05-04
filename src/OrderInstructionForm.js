import React from 'react';

export default function OrderInstructionForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
        Add Order Instructions
      <input value={props.instructionInput} onChange={(e) => props.setInstructionInput(e.target.value)}/>
      <button>Submit</button>
    </form>
  );
}
