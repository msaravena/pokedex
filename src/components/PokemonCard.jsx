import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const PokemonCard = ({ url }) => {

    const { id } = useParams()
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
    .get(url)
    .then((resp) => setDetail(resp.data));
    
  }, [url]);


  const types = detail?.types?.map((t) => t.type.name);

  
  const hp = detail?.stats?.find((s) => s.stat.name === "hp")?.base_stat;
  const attack = detail?.stats?.find((s) => s.stat.name === "attack")?.base_stat;
  const defense = detail?.stats?.find((s) => s.stat.name === "defense")?.base_stat;
  const speed = detail?.stats?.find((s) => s.stat.name === "speed")?.base_stat;

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



  return (

    
    <li className={`pokemon-card ${types?.map(type => ` ${getTypeColor(type)}`)}`}>
      <Link to={`/pokedex/${detail.id}`} style={{textDecoration: 'none', color: 'white'}}>
      <h3>{detail?.name}</h3>
      <div className="pc_items">            
            <div className="card-detail">
                <div className="cd-text">Types: {types?.join(", ")}</div>
                <div className="cd-text">HP: {hp}</div>
                <div className="cd-text">Attack: {attack}</div>
                <div className="cd-text">Defense: {defense}</div>
                <div className="cd-text">Speed: {speed}</div>
                
            </div>

            <img src={detail.sprites?.other.dream_world.front_default} alt="" className="big-pokemon-image"/>
                       
            
       </div>
       </Link>
    </li>
    
  );
};

export default PokemonCard;
