import React from 'react';
import { RemoveButton } from './RemoveButtonStyles';

const Button = ({ city, setCity, cities }) => {
  
  const handleClick = () => {
    setCity(cities.filter((element) => {
      return element.name !== city.name;
    }))
  };

  return <RemoveButton onMouseUp={handleClick} />;
};

export default Button;
