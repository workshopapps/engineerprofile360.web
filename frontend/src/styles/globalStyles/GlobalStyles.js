import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behaviour: smooth;
    }

    * {
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        position: relative;
    }

    body {
     
    }

    ul, ol {
        list-style: none;
    }
`
export default GlobalStyles
