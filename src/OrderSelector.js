import React from 'react';

export default function OrderSelector(props) {
  return (
    <div>
      {props.text}
      <select onChange={(e) => props.editor(e.target.value)}>
        {props.options.map((option, i) => <option key={i + 1} value={i + 1}>{option}</option>)}
      </select>
    </div>
  );
}
