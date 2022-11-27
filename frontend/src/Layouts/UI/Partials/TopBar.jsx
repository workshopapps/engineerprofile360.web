import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search.svg";
import user from "../../../assets/icons/app/user1.svg";
import bell from "../../../assets/icons/app/notification.svg";
import arrowDown from "../../../assets/icons/app/arrow-down.svg";
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
            $height="52px"
            startIcon={<img src={searchIcon} />}
            type="text"
            placeholder="Search"
          />
          <Options>
            <User>
              <img src={user} alt="" />
              Mark Jilaga
            </User>
            <Icons>
              <img src={bell} alt="" />
              <img src={arrowDown} alt="" />
            </Icons>
          </Options>
        </Navigation>
      </TopBarContent>
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.header`
  height: 80px;
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
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 ${({theme}) =>  theme.spacing(3)};
`;

const LogoContainer = styled.div``;

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const Options = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const User = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};

  font-size: 14px;
  color: #323130;
  font-weight: 600;
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
`;
