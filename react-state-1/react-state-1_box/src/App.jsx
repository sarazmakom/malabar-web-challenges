import "./styles.css";
import { useState } from "react";

export default function App() {
  // let isActive = false;
  const [isActive, setActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log("isActive", isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
