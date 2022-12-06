import React, { useState } from "react";
import styled from "styled-components";

import user from "../../../assets/icons/app/user1.svg";
import closeIcon from "../../../assets/icons/close.svg";
import menuIcon from "../../../assets/icons/menu.svg";

import {
  SearchNormal1,
  Notification,
  ArrowDown2,
  HambergerMenu,
  Setting2,
  LogoutCurve,
  User,
} from "iconsax-react";

import { InputField } from "../../../main/components";
import { Container } from "../../../styles/reusableElements.styled";

import useAuth from "../../../hooks/useAuth";
import Logo from "../../../components/Logo";

const TopBar = ({ handleLeftBarToggle, leftBar }) => {
  const { auth } = useAuth();
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownToggle = () => {
    setDropDown(!dropDown);
  };

  return (
    <TopBarContainer>
      <TopBarContent>
        <LogoContainer>
          <Logo size="sm" />
        </LogoContainer>
        <Navigation>
          <SearchInputField
            $height="52px"
            startIcon={<SearchNormal1 color="#323130" />}
            type="text"
            placeholder="Search"
          />
          <Options>
            <UserCon>
              <img src={user} alt="" />
              <span>{auth.username ? auth.username : ""}</span>
            </UserCon>
            <Icons>
              <Notification color="#323130" />
              <SearchNormal1 color="#323130" />
              <ArrowDown2 onClick={handleDropDownToggle} />
              <DropDown $open={dropDown ? "open" : "close"}>
                <List>
                  <li>
                    <User color="#323130" /> Profile
                  </li>
                  <li>
                    <Setting2 color="#323130" /> Settings
                  </li>
                  <li>
                    <LogoutCurve color="#323130" /> Logout
                  </li>
                </List>
              </DropDown>
              <img
                src={
                  leftBar && document.body.clientWidth <= 960
                    ? closeIcon
                    : menuIcon
                }
                alt=""
                onClick={handleLeftBarToggle}
              />
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
  z-index: 5;
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
  display: ${(props) => (props.$open === "open" ? "initial" : "none")};
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};

  li {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
    font-size: 14px;
    color: #323130;

    img:first-of-type {
      display: initial;
      ${({ theme }) => theme.breakpoints.down("xs")} {
        display: initial;
      }
    }
  }
`;

const UserCon = styled.div`
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

  img:first-of-type {
    ${({ theme }) => theme.breakpoints.down("xs")} {
      display: none;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};

  svg:nth-of-type(2) {
    ${({ theme }) => theme.breakpoints.up("sm")} {
      display: none;
    }
  }

  img:last-of-type {
    width: 24px;
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`;
