console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("All data: ", data);
  console.log("Princess Leia's full name: " + data.results[4].name);
  console.log(data.results[3].name + "'s height: " + data.results[3].height);
  console.log(
    data.results[2].name + "'s eye color:",
    data.results[2].eye_color
  );

  return data;
}

fetchData();
