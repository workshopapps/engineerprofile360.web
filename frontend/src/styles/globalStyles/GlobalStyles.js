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
        font-family: 'Inter', sans-serif;
    }

    body {
     
    }

    ul, ol {
        list-style: none;
    }
`
export default GlobalStyles
