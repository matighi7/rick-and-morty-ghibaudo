import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Detail(){
    const {id} = useParams();
    const [characters, setCharacter] = useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);
    
   return(
    <div>
        <img src={characters?.image} alt="imagen" />
        <h1>{characters?.name}</h1>
    <h3>{characters?.status}</h3>
    <h3>{characters?.species}</h3>
    <h3>{characters?.gender}</h3>
    <h3>{characters?.origin?.name}</h3>
    </div>
   ) 
}