import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCounte] = useState(0);
  const addValue = () => {
    if (count < 10) {
      count = count + 1;
      setCounte(count);
    }
  };
  const removeValue = () => {
    if (count > 0) {
      count = count - 1;
      setCounte(count);
    }
  };
  const alert = () => {
    <p>Value is already 0</p>;
  };
  return (
    <>
      <h1>Chai aur Aayush</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
