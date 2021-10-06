import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  --spaceCadet: #22223b;
  --independence: #4a4e69;
  --heliotropeGray: #9a8c98;
  --silverPink: #C9ADA7;
  --isabelline: #F2E9E4;
  font-size: 16px;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${({theme}) => theme.background};
  display: flex;
  justify-content: center;
  transition: background-color 0.25s linear;
}
`;
