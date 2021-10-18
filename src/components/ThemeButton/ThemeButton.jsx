import React from 'react';
import { SwitchInput, SwitchLabel } from './ThemeButtonStyles';

const ThemeButton = ({ toggleTheme }) => {
  const handleChange = () => {
    toggleTheme();
  };

  return (
    <>
      <SwitchInput
        type="checkbox"
        id="themeSwitch"
        onChange={handleChange}
      ></SwitchInput>
      <SwitchLabel htmlFor="themeSwitch">
      </SwitchLabel>
    </>
  );
};

export default ThemeButton;
