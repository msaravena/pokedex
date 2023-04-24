import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useSelector } from "react-redux";
import { changeName } from '../store/slices/username.slice'

const Pokedex = () => {
  const [type, setType] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  
  
  const name = useSelector(state => state.username)

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((resp) => setType(resp.data.results))
      .catch((error) => console.error(error));

    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
      .then((resp) => setPokemons(resp?.data?.results))
      .catch((error) => console.error(error));
  }, []);

  const selectedType = (e) => {
    const url = e.target.value;

    axios
      .get(url)
      .then((resp) => {
        setPokemons(resp.data.pokemon);
        setPage(1);
      })
      .catch((error) => console.error(error));
  };

  
  

  const [page, setPage] = useState(1);
  const pokemonsPerPage = 20;
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  const pokemonsPaginated = pokemons?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const pagesNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div className="pokedex-page">
      <h2 className="pokedex-title">Pokedex</h2>
      <p className="pokedex-welcome">
        Welcome {name}, here you can find your favorite pokemon
      </p>                  
      
      <select
        name=""
        id=""
        onChange={selectedType}
        className="pokedex-select"
      >
        {type?.map((type) => (
          <option value={type.url} key={type.name}>
            {type.name}
          </option>
        ))}
      </select>       

      <ul>
        <div className="pokemon-cards">
          {pokemonsPaginated.map((item, index) => (
            <PokemonCard
              url={item.pokemon ? item.pokemon.url : item.url}
              key={index}
            />
          ))}
        </div>
      </ul>     

      <div className="pagination-buttons">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className='prev-btn'>
          Previo
        </button>

        {pagesNumbers.map((num) => (
          <button key={num} onClick={() => setPage(num)} className='numbers-btn'>
            {num}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className='next-btn'
        >
          Siguiente
        </button>
      </div>
      
    </div>
  );
};

export default Pokedex;
