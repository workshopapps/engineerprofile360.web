import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import { Container, Button } from "../../../styles/reusableElements.styled";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo of Skript" />
        </Link>

        <NavBar />
        <ButtonGroup>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/login">
            <Button $variant="outlined">Login</Button>
          </Link>
        </ButtonGroup>
      </HeaderContainer>
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const HeaderContainer = styled(Container)`
  padding: 0 ${({ theme }) => theme.spacing(4)};
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
