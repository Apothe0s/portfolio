import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: #0d1117;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: #0d1117;
    color: #00ff66;
    cursor: default;
    text-shadow: 0 0 5px rgba(0, 255, 102, 0.4);
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
    color: #00ff66;
  }
  a {
    text-decoration: none;
    color: #00ff66;
  }
  li {
    list-style: none;
  }

  /* Custom hacker scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0d1117;
  }
  ::-webkit-scrollbar-thumb {
    background: #00ff66;
    border-radius: 4px;
    box-shadow: 0 0 10px #00ff66;
  }
  ::selection {
    background: #00ff66;
    color: #0d1117;
  }
`;

export default GlobalStyles;
