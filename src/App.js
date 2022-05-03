import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [orderName, setOrderName] = useState('Bob');
  const [burgerId, setBurgerId] = useState('1');
  const [drinkId, setDrinkId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [orderInstructions, setOrderInstructions] = useState(['test instruction']);

  return (
    <div>
      <section>
        <img src={`burger-${burgerId}.png`}/>
        <img src={`side-${sideId}.png`}/>
        <img src={`drink-${drinkId}.png`}/>
      </section>
      <section>
        <h1>
          Order for: {orderName}
        </h1>
        <input onChange={(e) => {
          setOrderName(e.target.value);
        }}/>
      </section>
      <section>
        <div>
          Select a Burger:
          <select onChange={(e) => setBurgerId(e.target.value)}>
            <option value='1'>Bohemian Radishy</option>
            <option value='2'>Olive and Let Die</option>
            <option value='3'>Hit Me With Your Best Shallot</option>
          </select>
        </div>
        <div>
          Select a Side:
          <select onChange={(e) => setSideId(e.target.value)}>
            <option value='1'>Fries</option>
            <option value='2'>Chips</option>
            <option value='3'>Salad</option>
          </select>
        </div>
        <div>
          Select a Drink:
          <select onChange={(e) => setDrinkId(e.target.value)}>
            <option value='1'>Soda</option>
            <option value='2'>Coffee</option>
            <option value='3'>Tea</option>
          </select>
        </div>
      </section>
      <section>
        <h2>
          Order Instructions:
        </h2>
        {orderInstructions.map((instruction, i) => <p key={i}>{instruction}</p>)}
      </section>
    </div>
  );
}

export default App;
