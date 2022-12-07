import React from 'react';
import styled from "styled-components";
import { Title } from "../../styles/reusableElements.styled";
import error from "../components/assets/500.png";
import logo from '../../assets/icons/app/eval360logo.png';

const Main =styled.div`
    display:grid;
    justify-content:center;
    align-item:center;
    margin:auto;
    padding:100px 30px;
    gap:20px;

    p{
        text-align:center;
        margin-top:8px;
    }

    @media(min-width:780px){
        gap:35px;
        padding:100px 200px;
    }
`
const Image=styled.img`
        width:300px;
        height:350px;
        margin:auto;

        @media(min-width:780px){
            width:580px;
            height:600px
        }
`

export const ServerError = () => {
  return (
        <Main>
            <img src={logo} alt="logo" />
            <div>

                <Image src={error} alt="error" />
                <Title
                    $size='38px'
                    $color=' #323130'
                    $align='center'
                    $weight='600'
                    style={{ textAlign: "center" }}

                >
                    OOPS! Something went wrong</Title>
                
                <p>Server Error 500. We apologise and we are fixing the problem.</p>
            </div>
        </Main>
    )
}
