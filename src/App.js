import { GlobalStyle } from './GlobalStyles';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { useState, useEffect, createContext } from 'react';
import WeatherBox from './components/WeatherBox/WeatherBox';
import HeaderWrapper from './components/Header/HeaderStyles';
import ThemeButton from './components/ThemeButton/ThemeButton';
import { theme } from './components/Theme';

const themeContext = createContext(theme);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCity] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <>
      <themeContext.Provider value={theme}>
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
      </themeContext.Provider>
    </>
  );
}

export default App;
