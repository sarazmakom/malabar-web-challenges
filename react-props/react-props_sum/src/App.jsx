export default function App() {
  return <Sum a={13} b={12} />;
}

function Sum({ a, b }) {
  return (
    <div>
      {a} + {b} = {a + b}
    </div>
  );
}
