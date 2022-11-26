import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import { InputField } from "../../../main/components";
import { Container } from "../../../styles/reusableElements.styled";

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarContent>
        <LogoContainer>
          <img src={logo} alt="Logo of Skript" />
        </LogoContainer>
        <Navigation>
            <InputField $size="md" type="text" placeholder="Search" />
            <Options></Options>
        </Navigation>
      </TopBarContent>
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.header`
  padding-top: 0;
  padding-bottom: 0;
  height: 96px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background: #ffffff;
  z-index: 1;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 60px;
  }
`;

const TopBarContent = styled(Container)`
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div``;

const Navigation = styled.div``;

const Options = styled.div``;