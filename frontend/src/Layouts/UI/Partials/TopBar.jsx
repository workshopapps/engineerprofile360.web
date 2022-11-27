import React from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search.svg";
import user from "../../../assets/icons/app/user1.svg";
import bell from "../../../assets/icons/app/notification.svg";
import arrowDown from "../../../assets/icons/app/arrow-down.svg";
import menuIcon from "../../../assets/icons/menu.svg";
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
          <SearchInputField
            $height="52px"
            startIcon={<img src={searchIcon} />}
            type="text"
            placeholder="Search"
          />
          <Options>
            <User>
              <img src={user} alt="" />
              <span>Mark Jilaga</span>
            </User>
            <Icons>
              <img src={bell} alt="" />
              <img src={arrowDown} alt="" />
              <img src={menuIcon} alt="" />
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

  border-bottom : 1px solid ${({theme}) => theme.palette.border.default};
`;

const TopBarContent = styled(Container)`
  display: grid;
  grid-template-columns: 240px 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: auto 1fr;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

const LogoContainer = styled.div``;

const Navigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const SearchInputField = styled(InputField)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    display: none;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  span {
    font-size: 14px;
    color: #323130;
    font-weight: 600;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};

  img:nth-of-type(1) {
    ${({ theme }) => theme.breakpoints.down("xs")} {
      display: none;
    }
  }

  img:nth-of-type(2) {
    ${({ theme }) => theme.breakpoints.down("xs")} {
      display: none;
    }
  }

  img:nth-of-type(3) {
    ${({ theme }) => theme.breakpoints.up("xs")} {
      display: none;
    }
  }
`;
