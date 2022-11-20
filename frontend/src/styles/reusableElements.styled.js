import styled, { css } from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
`;

const Title = styled.h1`
    font-weight: 48px;
`;

const Button = styled.button`
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


export { Container, Button, Title };