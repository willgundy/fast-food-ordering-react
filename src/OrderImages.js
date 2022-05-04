import React from 'react';

export default function OrderImages(props) {
  return (
    <div className='orderImages'>
      <img src={`burger-${props.burgerId}.png`}/>
      <img src={`side-${props.sideId}.png`}/>
      <img src={`drink-${props.drinkId}.png`}/>
    </div>
  );
}
