import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const PokemonDetail = ({url}) => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([]);
   

   

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)           
        .then((resp) => setPokemon(resp.data))
        .catch((error) => console.error(error))

        axios
        .get(url)
        .then((resp) => setDetail(resp.data));

        }, [url]);

       

return  (
    <div className="pokemon-detail-page">
        <div className= "pokemon-detail-card">  
            <div className="image-container">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            </div>
            <div className="text-container">
                    <p>Type: {pokemon.types?.map((type) => type.type.name).join(", ")}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
            </div>
             
        </div>

    </div>
)

};



  

export default PokemonDetail;







  