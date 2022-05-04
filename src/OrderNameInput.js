import React from 'react';

export default function OrderNameInput(props) {
  return (
    <div className='orderInput'>
      <h1>
        Order for: {props.orderName}
      </h1>
      <label>Your Name:  </label>
      <input onChange={(e) => {
        props.setOrderName(e.target.value);
      }}/>
    </div>
  );
}
