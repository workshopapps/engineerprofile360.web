import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowDown from "../../../assets/icons/arrow-down.svg";
import close from "../../../assets/icons/close.svg";
import { Button } from "../../../styles/reusableElements.styled";
import { getUser } from "./Header";

const MobileNav = ({ handleMenu }) => {
  return (
    <MobileNavBar onClick={handleMenu}>
      <List>
        <div onClick={handleMenu}>
          <img src={close} alt="" />
        </div>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
        <Link to="/help-center">
          <li>Support</li>
        </Link>
        <Link to="/about-us">
          <li>
            About
            {/* <img src={arrowDown} alt="" /> */}
          </li>
        </Link>
        <li>
          {getUser ? (
            getUser.roles === 1 ? (
              <Link to="/employee/dashboard">
                <MobileMenuButton>Dashboard </MobileMenuButton>
              </Link>
            ) : getUser.roles === 2 ? (
              <Link to="/dashboard">
                <MobileMenuButton>Dashboard </MobileMenuButton>
              </Link>
            ) : getUser.roles === 3 ? (
              <Link to="/admin/dashboard">
                <MobileMenuButton>Dashboard </MobileMenuButton>
              </Link>
            ) : (
              ""
            )
          ) : (
            <ButtonGroup>
              <Link to="/register">
                <MobileMenuButton>Get Started</MobileMenuButton>
              </Link>
            </ButtonGroup>
          )}
        </li>
      </List>
    </MobileNavBar>
  );
};

export default MobileNav;

const MobileNavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.overlay.dark};
  z-index: 10;

  @media (min-width: 961px) {
    display: none;
  }
`;

const List = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 240px;
  height: 100%;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: 0 ${({ theme }) => theme.spacing(6)};

  > div {
    position: absolute;
    top: ${({ theme }) => theme.spacing(3)};
    right: ${({ theme }) => theme.spacing(3)};

    img {
      width: 24px;
    }
  }

  li {
    font-size: 14px;
    color: #000000;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const MobileMenuButton = styled(Button)`
  width: 100%;
  min-width: 100%;
`;
