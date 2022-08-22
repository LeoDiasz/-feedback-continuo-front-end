import { createGlobalStyle } from "styled-components";

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
    color: ${props => props.theme.colors.title};
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

export default GlobalStyle


