import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #1F1F20;
  }

  * {
    color: var(--white);
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 18px;
  }
`;

export default GlobalStyle;
