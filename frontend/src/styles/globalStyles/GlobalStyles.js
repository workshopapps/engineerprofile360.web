import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behaviour: smooth;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;
        /* font-family: 'Inter', sans-serif; */
         font-family: 'Poppins', sans-serif;
    }

    body {
        /* font-family: 'Inter', sans-serif; */
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.palette.grey.white};
    }

    button {
        /* font-family: 'Inter', sans-serif; */
         font-family: 'Poppins', sans-serif;
    }

    ul, ol {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        &:hover, &:active, &:visited,  {
            color: #323130;
            text-decoration: none;
        }
    }
    p {
        font-size: 20px;
        line-height: 28px;

        ${({ theme }) => theme.breakpoints.down("sm")} {
            font-size: 18px;
        }

        ${({ theme }) => theme.breakpoints.down("xs")} {
            font-size: 16px;
        }
    }

    span {
        font-size: 12px;
        line-height: 18px;
    }

    small {
        font-size: 12px;
    }
`;
export default GlobalStyles;
