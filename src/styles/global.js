import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#1166d9",
    secondary: "#48BD82",
    secondaryLight: "#FDA6BF",
    textGray: "#C6C9D2",
    textGrayMedio: "#9FA2B4",
    textGrayDark: "#4B506D",
    error: "#F12B2C",
    inputBorder: "#F0F1F7",
    border: "#DFE0EB",
    black: "#292929",
    backgroundCard: "#FCFDFE",
    backgroundLight: "#F2F2F2",
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body, input, button, select {
    font-family: "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Lato", sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }

  a {
    color: inherit;
  }

`

export {GlobalStyle, theme}


