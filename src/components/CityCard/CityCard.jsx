import React from 'react';
import Button from '../RemoveButton/RemoveButton';
import Wrapper from './CityCardStyles';
import { weatherIcons } from './WeatherIcons';


const CityCard = ({ city, setCity, cities }) => {


  const cityName = city.name;
  const temperature = Math.round(city.main.temp);
  const weatherIconCode = city.weather[0].icon;
  const weatherDescription = city.weather[0].description;
  // const weatherIcon = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;


  return (
    <Wrapper>
      <h2>{cityName}</h2>
      <p>{temperature}˚C</p>
      <p>{weatherDescription}</p>
      <img src={weatherIcons[weatherIconCode]} alt={weatherDescription}/>
      <Button city={city} setCity={setCity} cities={cities} />
    </Wrapper>
  )
};

export default CityCard;
