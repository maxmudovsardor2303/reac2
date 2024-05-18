import React, { useState } from "react";
import "./App.css";


function App() {
 
  const [count, setCount] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [login, setLogin] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const [add, setAdd] = useState([0, 0, 0]);

  const handleClick = () => {
    increase ? setCount(count + increase) : setCount(count + 1);
  };

  const handleIncrease = () => {
    setIncrease(increase + 1);
  };

  const changeLogin = () => {
    setLogin(!login);
  };

  const addCounter = () => {
    setCounters([...counters, 0]);
    setAdd([...add, 0]);
  };

  const addIncrease = (index) => {
    
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrementCounter = (index) => {
    const newCounters = [...counters];
    if (newCounters[index] > 0) {
      newCounters[index] -= 1;
    }
    setCounters(newCounters);
  };
  
  return (
    <>
   <div className="card">
        <h1>1-Task</h1>
        <h1> {count} qadam</h1>
        <button onClick={handleClick}>Yurish</button>

        <div>
          <h1>Qadam kattaligi: {increase} metr</h1>
          <button onClick={handleIncrease}>Qadamni kattalashtirish</button>
        </div>
      </div>


      <div className="login">
      <h1>2-Task</h1>
      <button onClick={changeLogin}>Login</button>
      {login ? <h1>login</h1> : <h1>Logout</h1>}
      </div>
      <div className="border"></div>



      <div className="count">
        <h1>3-Task</h1>
        <button onClick={addCounter}>Add counter</button>
        {counters.map((item, index) => {
          return (
            <div key={index}>
              <button onClick={() => addIncrease(index)}>+</button>
              <span>{item}</span>
              <button onClick={() => decrementCounter(index)}>-</button>
            </div>
          );
        })}
      </div>

    </>


    




);
}

export default App;