import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import OrderNameInput from './OrderNameInput';
import OrderSelector from './OrderSelector';

function App() {
  const [orderName, setOrderName] = useState('');
  const [burgerId, setBurgerId] = useState('1');
  const [drinkId, setDrinkId] = useState('1');
  const [sideId, setSideId] = useState('1');
  const [orderInstructions, setOrderInstructions] = useState([]);
  const [instructionInput, setInstructionInput] = useState(['']);
  const burgerOptions = ['Bohemian Radishy', 'Olive and Let Die', 'Hit Me With Your Best Shallot'];
  const drinkOptions = ['Soda', 'Coffee', 'Tea'];
  const sideOptions = ['Fries', 'Chips', 'Salad'];

  return (
    <div>
      <OrderImages drinkId={drinkId} burgerId={burgerId} sideId={sideId}/>
      <OrderNameInput setOrderName={setOrderName} orderName={orderName}/>
      <section>
        <OrderSelector text={'Select a Burger:'} editor={setBurgerId} options={burgerOptions}/>
        <OrderSelector text={'Select a Side:'} editor={setSideId} options={sideOptions}/>
        <OrderSelector text={'Select a Drink:'} editor={setDrinkId} options={drinkOptions}/>
      </section>
      <section>
        <form onSubmit={
          (e) => {
            e.preventDefault();
            setOrderInstructions([...orderInstructions, instructionInput]);
            setInstructionInput('');
          }
        }>
          Add Order Instructions
          <input value={instructionInput} onChange={(e) => setInstructionInput(e.target.value)}/>
          <button>Submit</button>
        </form>
        <h2>
          Order Instructions:
        </h2>
        {orderInstructions.map((instruction, i) => <p key={i}>{instruction}</p>)}
      </section>
    </div>
  );
}

export default App;
