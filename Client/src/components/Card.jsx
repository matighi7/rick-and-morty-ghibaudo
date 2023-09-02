import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch,} from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState } from "react";
const Card = ({ characters, onClose }) => {
  const { id, name, status, species, gender, origin, image } = characters;

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  //const isFav = myFavorites.some((fav) => fav.id === characters.id);
  const [ isFav, setIsFav ] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(characters));
    }
  };


  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <button className={styles.cardButton} onClick={onClose}>
          X
        </button>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.cardName}>{name}</h2>
        </Link>
      </div>
      <div className={styles.cardInfo}>
        <img className={styles.cardImage} src={image} alt="Image Not Found" />
        <div className={styles.cardBody}>
          <h2 className={styles.cardProperty}>{species}</h2>
          <h2 className={styles.cardProperty}>{status}</h2>
          <h2 className={styles.cardProperty}>{gender}</h2>
          <h2 className={styles.cardProperty}>{origin?.name}</h2>
        </div>
      </div>
      <div>
        {isFav ? (
          <button className={styles.heartButton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.heartButton} onClick={handleFavorite}>
            🤍
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;