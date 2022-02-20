import { GlobalStyle } from './GlobalStyles';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import { useState } from 'react';
import WeatherBox from './components/WeatherBox/WeatherBox';
import HeaderWrapper from './components/Header/HeaderStyles';
import ThemeButton from './components/ThemeButton/ThemeButton';
import { themes } from './components/Theme';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCity] = useState([]);
  const [error, setError] = useState(true);
  const [theme, toggleTheme] = useDarkMode();

  return (
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <HeaderWrapper>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCity={setCity}
            cities={cities}
          />
          <ThemeButton toggleTheme={toggleTheme} />
        </HeaderWrapper>
        <WeatherBox cities={cities} setCity={setCity}/>
      </ThemeProvider>
  );
}

export default App;
