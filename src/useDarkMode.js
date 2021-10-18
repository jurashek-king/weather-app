import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('darkTheme');

  const toggleTheme = () => {
    theme === 'darkTheme' ? setMode('lightTheme') : setMode('darkTheme');
  };

  const setMode = (mode) => {
    setTheme(mode);
    window.localStorage.setItem('appearance', mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('appearance');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
