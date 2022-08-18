import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    blue: "#1E4682",
    green: "#7FC754",
    textGray: "#C6C9D2",
    textGrayMedio: "#9FA2B4",
    textGrayDark: "#4B506D",
    error: "#F12B2C",
    inputBorder: "#F0F1F7",
    border: "#DFE0EB",
    black: "#474748",
    backgroundCard: "#FCFDFE",
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

  * {
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    margin: 0;
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


