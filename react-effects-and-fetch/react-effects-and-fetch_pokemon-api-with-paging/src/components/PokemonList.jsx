import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(currentPage);
        const data = await response.json();
        console.log("data", data);
        setPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setCurrentPage(prevPage)}
        disabled={!prevPage}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setCurrentPage(nextPage)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
