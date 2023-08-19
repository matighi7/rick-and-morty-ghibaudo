import React, { useState } from "react";
import Card from "../components/Card.jsx";
import styles from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFav, orderCards, filterCards, addFav } from "../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleClose = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };


  return (
    <div className={styles.favorito}>
      <h1 className={styles.title}>My Favorites</h1>
      <div className={styles.filters}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.cardContainer}>
        {favorites?.map((fav) => (
          <Card
            key={fav.id}
            characters={fav}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;