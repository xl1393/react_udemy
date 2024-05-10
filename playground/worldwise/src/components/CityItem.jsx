/* eslint-disable react/prop-types */
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";

import { Link } from "react-router-dom";
function CityItem({ city }) {
  const { deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }
  // eslint-disable-next-line no-unused-vars
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{date}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
