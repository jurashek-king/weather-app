import React from 'react';
import Button from '../RemoveButton/RemoveButton';
import Wrapper from './CityCardStyles';


const CityCard = ({ city, setCity, cities }) => {


  const cityName = city.name;
  const temperature = Math.round(city.main.temp);
  const weatherIconCode = city.weather[0].icon;
  const weatherIcon = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  const weatherDescription = city.weather[0].description;


  return (
    <Wrapper>
      <h3>{cityName}</h3>
      <p>{temperature}˚C</p>
      <p>{weatherDescription}</p>
      <img src={weatherIcon} alt={weatherDescription}/>
      <Button city={city} setCity={setCity} cities={cities} />
    </Wrapper>
  )
};

export default CityCard;
