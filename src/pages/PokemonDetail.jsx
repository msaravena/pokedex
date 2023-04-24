import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import pokebola from '/src/images/pokebola.png'
import pokemonImage from '/src/images/pokemon.png'



const PokemonDetail = ({url}) => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([]);
    const [detail, setDetail] = useState({});
   

   

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)           
        .then((resp) => {
            setPokemon(resp.data)
        console.log(resp)})
        .catch((error) => console.error(error))

        axios
        .get(url)
        .then((resp) => setDetail(resp.data));

        }, [url]);

        const types = pokemon.types?.map((t) => t.type.name);
        const getTypeColor = (type) => {
            switch (type) {
              case "normal":
                return "normal";
              case "fighting":
                return "fighting";
              case "flying":
                return "flying";
              case "poison":
                return "poison";
              case "ground":
                return "ground";
              case "rock":
                return "rock";
              case "bug":
                return "bug";
              case "ghost":
                return "ghost";
              case "steel":
                return "steel";
              case "fire":
                return "fire";
              case "water":
                return "water";
              case "grass":
                return "grass";
              case "electric":
                return "electric";
              case "psychic":
                return "psychic";
              case "ice":
                return "ice";
              case "dragon":
                return "dragon";
              case "dark":
                return "dark";
              case "fairy":
                return "fairy";
              case "unknown":
                return "unknown";
              case "shadow":
                return "shadow";
              default:
                return "";
            }
          };

return  (
    <div className={`pokemon-detail-page ${types?.map(type => ` ${getTypeColor(type)}`).join("")}`}>
       <div className="pg_image_1">
        <img src={pokemonImage} alt="" />
       </div>
       <div className="pg_image_2">
        <img src={pokebola} alt="" />
       </div>
       <div className="pokemon_content_container">
        <div className="pokemon_content">
            <div className={`pokemon-card_detail ${types?.map(type => ` ${getTypeColor(type)}`)}`}>

                <div className="image-container">                
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                </div>
                <div className="text-container">
                <h2 className="poke_name">{pokemon.name}</h2>
                <div className="stats">
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                </div>       
                                       
            </div>

            </div>
            <div className="types_abilities">
                
                <div className="types_container">
                    <h3>Type</h3>
                    <ul className="types" >
                    {pokemon.types?.map((type) => (
                        <li className="type">
                            {type.type.name}
                        </li>
                        
                        
                        ))}
                    </ul>
                    
                </div>
                <div className="abilities_container">
                    <h3>Abilities </h3>
                    <ul className="abilities">
                        {pokemon.abilities?.map((ability) => (
                            <li className="ability">
                                {ability.ability.name}
                            </li>   
                        ))}
                    </ul>
                </div>
            </div>
        </div>
       

        <div className="movements_container">
                <h2>Movements</h2>
                <ul className="movements">
                    {pokemon.moves?.slice(0, 15).map((move) => (
                    <li className="movement">
                        {move.move.name}
                    </li>
                    ))}
                </ul> 
        </div>

       </div>
        
        

    </div>
)

};



  

export default PokemonDetail;