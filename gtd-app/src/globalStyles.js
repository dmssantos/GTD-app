import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #000;
    --white: #E5E5E5;
    --dark-blue: #053361;
    --light-blue: #0A66C2;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: var(--black);
    overflow: hidden;
  }
`;

export default GlobalStyle;