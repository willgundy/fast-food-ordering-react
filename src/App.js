import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import OrderNameInput from './OrderNameInput';
import OrderSelector from './OrderSelector';
import OrderInstructionForm from './OrderInstructionForm';
import OrderInstructions from './OrderInstructions';

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

  function handleInstructionSubmit(e) {
    e.preventDefault();
    setOrderInstructions([...orderInstructions, instructionInput]);
    setInstructionInput('');
  }

  return (
    <div className="App">
      <OrderImages drinkId={drinkId} burgerId={burgerId} sideId={sideId}/>
      <section className='orderSelectors'>
        <OrderSelector text={'Select a Burger:'} editor={setBurgerId} options={burgerOptions}/>
        <OrderSelector text={'Select a Side:'} editor={setSideId} options={sideOptions}/>
        <OrderSelector text={'Select a Drink:'} editor={setDrinkId} options={drinkOptions}/>
      </section>
      <section className='orderInfoEditing'>
        <OrderNameInput setOrderName={setOrderName} orderName={orderName}/>
        <OrderInstructionForm 
          handleSubmit={handleInstructionSubmit} 
          instructionInput={instructionInput} 
          setInstructionInput={setInstructionInput}/>
        <OrderInstructions 
          orderInstructions={orderInstructions}/>
      </section>
    </div>
  );
}

export default App;
