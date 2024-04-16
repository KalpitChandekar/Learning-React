import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 10) {
      return;
    }
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  const resetValue = () => {
    setCounter(0);
  };
  return (
    <div className="App">
      <h1>Counter Value {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <button onClick={resetValue}>Reset value</button>
    </div>
  );
}

export default App;
