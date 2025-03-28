import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCountIncrease() {
    setCount(count + 1);
  }
  function handleCountDecrease() {
    setCount(count - 1);
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
