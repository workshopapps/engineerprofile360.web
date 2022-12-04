import React from "react"
import styled from "styled-components"

import logo from "../../assets/icons/app/logo.svg"
import notification from "../../assets/icons/app/notification.svg"
import arrowDown from "../../assets/icons/app/arrow-down.svg"
import userButton from "../../assets/images/app/User-button.png"
import { Divider } from "../../styles/reusableElements.styled"
import Logo from '../../components/Logo' 
const Header = () => {
  return (
    <HeaderContainer>
      <LogoAndSearch>
        {/* <img src={logo} alt="Logo SVG" /> */}
      
      <Logo size="lg"/>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </LogoAndSearch>
      <UserContainer>
        <img src={userButton} alt="User Button" />
        <p>Mark Jilaga</p>
        <div></div>
        <img src={notification} alt="notification icon" />
        <img src={arrowDown} alt="Arrow-Down icon" />
      </UserContainer>
      <Divider />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  height: 96px;
  padding: 0 45px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;
`
const LogoAndSearch = styled.div`
  display: flex;
  width: 65%;
  align-items: center;
  gap: 80px;
  img {
    width: 15%;
  }

  form {
    width: 100%;

    input {
      width: 100%;
      font-family: inherit;
      height: 6vh;
      outline: none;
      padding-left: 10px;
      font-size: 18px;
      border: 2px solid ${({ theme }) => theme.palette.border.default};
      border-radius: 8px;

      ::placeholder {
        font-family: inherit;
        font-size: 14px;
        line-height: 20px;
        color: ${({ theme }) => theme.palette.border.hover};
      }
    }
  }
`

const UserContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 15px;
  /* background-color: ${({ theme }) => theme.palette.grey.shades.ten}; */
  background-color: #faf9f8;
  opacity: 0.8;
  border-radius: 8px;
  align-items: center;

  p {
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.border.hover};
  }

  div {
    width: 2px;
    height: 24px;
    background-color: ${({ theme }) => theme.palette.divider};
  }
`
