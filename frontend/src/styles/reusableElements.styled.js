import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
`;

export const Title = styled.h1`
    color: ${({$color}) => $color ? $color : "initial"};
    font-size: ${({$size}) => $size ? $size : "48px"};
    font-weight: ${({$weight}) => $weight ? $weight : "700"};
`;

export const Button = styled.button`
    min-width: 77px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme}) => theme.spacing(1)};
    border-radius: ${({theme}) => theme.spacing(0.5)}; 
    padding: ${({theme}) => theme.spacing(1.2)} ${({theme}) => theme.spacing(2.5)}; 

    ${(props) => {
        switch(props.$variant) {
            case "outlined" :
                return css`
                    border: 1px solid #106EBE;
                    color: #323130;
                    background: none;
                `
            default : 
                return css`
                    border: none;
                    background: #106EBE;
                    color: #FFFFFF;
                    font-weight: 700;
                `
        }
    }}
`;


// THE STYLES HERE ARE GOING TO BE USED FOR LAYOUTS AND EVERY OTHER REUSABLE CONTAINERS

export const MainContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 58px minmax(0, 1fr);
  position: relative;
`
export const Main = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  height: 100vh;
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 3px;
  background: ${({ theme }) => theme.palette.divider};
`
