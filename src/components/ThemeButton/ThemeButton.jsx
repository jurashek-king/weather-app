import React from 'react';
import Switch from './ThemeButtonStyles';

const ThemeButton = ({ toggleTheme }) => {
  return <Switch type="checkbox" onChange={toggleTheme} />;
};

export default ThemeButton;
