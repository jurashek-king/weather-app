import { GlobalStyle } from './GlobalStyles';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import WeatherBox from './components/WeatherBox/WeatherBox';
import HeaderWrapper from './components/Header/HeaderStyles';
import ThemeButton from './components/ThemeButton/ThemeButton';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCity] = useState([]);
  const [error, setError] = useState(true);


  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <>
      <GlobalStyle />
      <HeaderWrapper>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setCity={setCity}
          setError={setError}
          cities={cities}
        />
        <ThemeButton />
      </HeaderWrapper>
      <WeatherBox cities={cities} setCity={setCity} error={error} />
    </>
  );
}

export default App;
