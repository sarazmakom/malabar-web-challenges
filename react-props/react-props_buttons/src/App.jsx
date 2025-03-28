export default function App() {
  return <Button color="purple" disabled={false} text="Click me!" />;
}

function Button({ color, disabled, text }) {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled}>
      {text}
    </button>
  );
}
