import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behaviour: smooth;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;
    }

    body {
        font-family: 'Inter', sans-serif;
     background-color: #fff;
    }
    ul, ol {
        list-style: none;
    }
`
export default GlobalStyles
