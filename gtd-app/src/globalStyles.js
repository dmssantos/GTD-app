import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
      --black: #000;
      --white: #E5E5E5;
      --dark-blue: #053361;
      --light-blue: #0A66C2;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: var(--black);
    overflow: hidden;
  }
`;