import React from 'react';

export default function OrderNameInput(props) {
  return (
    <section>
      <h1>
        Order for: {props.orderName}
      </h1>
      <input onChange={(e) => {
        props.setOrderName(e.target.value);
      }}/>
    </section>
  );
}
