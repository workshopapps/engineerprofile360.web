import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search.svg";
import user from "../../../assets/icons/app/user1.svg";
import bell from "../../../assets/icons/app/notification.svg";
import arrowDown from "../../../assets/icons/app/arrow-down.svg";
import closeIcon from "../../../assets/icons/close.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import userIcon from "../../../assets/icons/profile.svg";
import settingIcon from "../../../assets/icons/setting.svg";
import logoutIcon from "../../../assets/icons/logout.svg";
import { InputField } from "../../../main/components";
import { Container } from "../../../styles/reusableElements.styled";

const TopBar = ({ handleLeftBarToggle }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownToggle = () => {
    setDropDown(!dropDown);
  };

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
              <img src={searchIcon} alt="" />
              <img src={arrowDown} alt="" onClick={handleDropDownToggle} />
              <DropDown $open={dropDown ? "open" : "close"}>
                <List>
                  <li>
                    <img src={userIcon} alt="" /> Profile
                  </li>
                </List>
                <List>
                  <li>
                    <img src={settingIcon} alt="" /> Settings
                  </li>
                </List>
                <List>
                  <li>
                    <img src={logoutIcon} alt="" /> Logout
                  </li>
                </List>
              </DropDown>
              <img src={dropDown ? closeIcon : menuIcon} alt="" onClick={handleLeftBarToggle} />
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

  border-bottom: 1px solid #edebe9;
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

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: initial;
  }
`;

const SearchInputField = styled(InputField)`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const DropDown = styled.div`
  position: absolute;
  padding: ${({ theme }) => theme.spacing(2)};
  background: rgba(255, 255, 255, 0.7);
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  top: 28px;
  right: ${({ theme }) => theme.spacing(0.1)};
  z-index: 10;
  min-width: 115px;
  display: ${(props) => props.$open === "open" ? "initial" : "none"};
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  li {
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
    align-items: center;
    font-size: 14px;
    color: #323130;

    img:nth-of-type(1) {
      ${({ theme }) => theme.breakpoints.down("xs")} {
        display: initial;
      }
    }
  }
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

  img:nth-of-type(1) {
    ${({ theme }) => theme.breakpoints.down("xs")} {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};

  img:nth-of-type(1) {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      display: none;
    }
  }

  img:nth-of-type(2) {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      display: none;
    }
  }
`;
