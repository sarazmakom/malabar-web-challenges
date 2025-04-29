import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click here plesase</Button>
      <Button>And definitely here</Button>
      <Button>But especially here</Button>
      <Button>The best click is here</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
