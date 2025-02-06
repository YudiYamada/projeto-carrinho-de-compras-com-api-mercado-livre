import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    }

    body {
    background-color: #ebebeb;
    }

    .container {
    max-width: 1100px;
    margin: 0 auto;
    }
`

export default GlobalStyle;