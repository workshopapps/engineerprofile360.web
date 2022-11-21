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
        font-family: 'Inter', sans-serif;
     background-color: #fff;
    }
    ul, ol {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    p {
        font-size: 20px;
        line-height: 28px;

        @media (max-width: 767px) {
            font-size: 18px;
        }

        
        @media (max-width: 480px) {
            font-size: 16px;
        }
    }

    span {
        font-size: 14px;
        line-height: 28px;

    }
`
export default GlobalStyles
