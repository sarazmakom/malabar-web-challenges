import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🥝 Kiwi ",
      color: "green",
    },
    {
      id: 3,
      name: "🍉 Watermelon",
      color: "red",
    },
    {
      id: 4,
      name: "🫐 Bluberries",
      color: "blue",
    },
    {
      id: 5,
      name: "🥭 Mango",
      color: "orange",
    },
    {
      id: 6,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 7,
      name: "🍑 Peach",
      color: "orange",
    },
  ];
  console.log(fruits);

  return (
    <div className="app">
      <h1>Fruits</h1>
      {fruits?.map((fruit, index) => (
        <div key={index}>
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        </div>
      ))}
    </div>
  );
}
