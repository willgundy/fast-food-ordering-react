import React from 'react';

export default function OrderInstructions(props) {
  return (
    <div>
      <h2>
            Order Instructions:
      </h2>
      {props.orderInstructions.map((instruction, i) => <p key={i}>{instruction}</p>)}
    </div>

  );
}
