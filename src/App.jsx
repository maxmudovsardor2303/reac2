import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0)
  const[countQadam, setCountQadam] = useState(0)
  
  return (
    <>
    <div className="container">
      <button onClick={() => setCount((count) => count + countQadam)}>
        Yurish {count}
      </button>
      <button onClick={() => setCountQAdam((countQadam) => countQadam )}>
        Qadamni kengaytirish {countQadam}
      </button>
    </div>
    </>


);
}

export default App;