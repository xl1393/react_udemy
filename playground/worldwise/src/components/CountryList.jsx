/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="no cityies" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((countries) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={countries} key={countries.country} />
      ))}
    </ul>
  );
}

export default CountryList;
