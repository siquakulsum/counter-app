import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1); 
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0); 
  };

  return (
    <div className="counter-container">
      <h1>React Counter App</h1>
      <div className="counter-display">
        <p className="counter-value">{count}</p>
      </div>
      <div className="buttons">
        <button className="btn increase" onClick={increaseCount}>+</button>
        <button className="btn decrease" onClick={decreaseCount}>-</button>
        <button className="btn reset" onClick={resetCount}>0</button>
      </div>
    </div>
  );
}

export default App;
