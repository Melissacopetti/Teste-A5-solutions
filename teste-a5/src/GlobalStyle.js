import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Geologica', sans-serif;
  }
  body {
    overflow-x: hidden; /* Oculta a barra de rolagem horizontal em todas as páginas */
  }
`;
