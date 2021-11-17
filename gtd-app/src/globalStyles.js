import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --black: #000;
      --white: #E5E5E5;
      --dark-blue: #053361;
      --light-blue: #0A66C2;

      --font: 'sans-serif';
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-style: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: var(--black);
    overflow: hidden;
  }
`;