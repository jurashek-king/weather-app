import React from 'react';
import { Wrapper, SearchButton, SearchInput } from './SearchBarStyles';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchCurrentWeather } from '../../API';

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setCity,
  setError,
  cities,
}) => {

  const findCityInState = (state, city) => {
    return state.some((element) => (element.name === city.name));
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = async () => {
    const city = await fetchCurrentWeather(searchTerm);
    if (city && !findCityInState(cities, city)) {
      setCity([...cities, city]);
      setError(false);
    }
    setSearchTerm('');
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Search city"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchButton type="button" onClick={handleClick} disabled={!searchTerm}>
        <FontAwesomeIcon icon={faSearch} className="search" />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
