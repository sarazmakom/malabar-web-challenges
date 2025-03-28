import { useState } from "react";
import "./styles.css";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleCountIncrease() {
    setCount(count + 1);
    console.log("increase", count);
  }
  function handleCountDecrease() {
    setCount(count - 1);
    console.log("decrease", count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleCountDecrease}>
          -
        </button>
        <button type="button" onClick={handleCountIncrease}>
          +
        </button>
      </div>
    </div>
  );
}
