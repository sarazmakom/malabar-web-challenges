export default function App() {
  return <Smiley isHappy={true}/>;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy === true ? ":)" : ":("}</h1>;
}
