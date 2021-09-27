import React from 'react';
import Wrapper from './WeatherBoxStyles';
import CityCard from '../CityCard/CityCard';

const WeatherBox = ({ cities, setCity, error }) => {

  const cityList = cities.map((city) => {
    return <CityCard key={city.name} city={city} setCity={setCity} cities={cities} />
  })

  return (
    <Wrapper>
      {error ? <h3>Try again</h3> : cityList}
    </Wrapper>
  );
};

export default WeatherBox;
