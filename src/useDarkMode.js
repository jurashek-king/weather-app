import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState('darkTheme');

  const toggleTheme = () => {
    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  }

  return [theme, toggleTheme];
}