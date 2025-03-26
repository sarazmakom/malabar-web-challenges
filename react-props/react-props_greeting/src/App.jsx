export default function App() {
  return <Greeting name="Sunshine" />;
}

function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
