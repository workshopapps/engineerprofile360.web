import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import { Container, Button } from "../../../styles/reusableElements.styled";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <HeaderTag>
      <HeaderContainer>
        <img src={logo} alt="Logo of Skript" />
        <NavBar />
        <ButtonGroup>
          <Button>Register</Button>
          <Button $variant="outlined">Login</Button>
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

  @media (max-width: 767px) {
    display: none;
  }
`;
