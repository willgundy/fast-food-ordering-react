import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [orderName, setOrderName] = useState('Bob');
  const [burgerId, setBurgerId] = useState('1');
  const [drinkId, setDrinkId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [orderInstructions, setOrderInstructions] = useState('');

  return (
    <div>
      <section>
        <img src={`burger-${burgerId}.png`}/>
        <img src={`drink-${drinkId}.png`}/>
        <img src={`side-${sideId}.png`}/>
      </section>
      <section>
        <h1>
          Order for: {orderName}
        </h1>
        <input onChange={(e) => {
          setOrderName(e.target.value);
        }}/>
      </section>
    </div>
  );
}

export default App;
