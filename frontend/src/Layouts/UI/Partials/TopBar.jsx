import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search.svg";
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
          <InputField
            $height="50px"
            startIcon={<img src={searchIcon} />}
            type="text"
            placeholder="Search"
          />
          <Options></Options>
        </Navigation>
      </TopBarContent>
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.header`
  height: 60px;
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
  padding-top: 0;
  padding-bottom: 0;
`;

const LogoContainer = styled.div``;

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Options = styled.div``;
