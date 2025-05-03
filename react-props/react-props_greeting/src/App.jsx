export default function App() {
  return <Greeting name="Esraa" />;
}

function Greeting({ name }) {
  const coach = ["Esraa", "Felix", "Gimena", "Klaus", "Marcel", "Sven"];
  return (
    <div>
      <h1>Hello, {coach.includes(name) ? "Coach" : name}!</h1>
    </div>
  );
}
