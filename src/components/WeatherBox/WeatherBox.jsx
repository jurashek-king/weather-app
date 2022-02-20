import React from 'react';
import Wrapper from './WeatherBoxStyles';
import CityCard from '../CityCard/CityCard';

const WeatherBox = ({ cities, setCity }) => {

  const cityList = cities.map((city) => {
    return <CityCard key={city.name} city={city} setCity={setCity} cities={cities} />
  })

  let content;

  if(cities.length > 0) {
    content = cityList;
  } else {
    content = <h2>Try to search city</h2>
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  );
};

export default WeatherBox;
