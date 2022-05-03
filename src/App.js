import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [orderName, setOrderName] = useState('name');
  const [burgerId, setBurgerId] = useState('');

  return (
    <h1>
      Order for: {orderName}
    </h1>
  );
}

export default App;
