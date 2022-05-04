import React from 'react';

export default function OrderSelector(props) {
  return (
    <div className='orderSelector'>
      <label>{props.text}</label>
      <select onChange={(e) => props.editor(e.target.value)}>
        {props.options.map((option, i) => <option key={i + 1} value={i + 1}>{option}</option>)}
      </select>
    </div>
  );
}
