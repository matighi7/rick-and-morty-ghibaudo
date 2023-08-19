import DivButtons from "./styledrick.jsx";
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (e) => {
    let { value } = e.target;
    setId(value);
  };

  return (
    <DivButtons>
      <input type="search" onChange={handleChange} value={id} placeholder="Agregar personaje..." />
      <button onClick={() => onSearch(id < 826 ? id : 826)} type="button">
        Buscar
      </button>
      <strong> NUEVA CARD</strong>
    </DivButtons>
  );
}