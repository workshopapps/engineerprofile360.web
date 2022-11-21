import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import logo from "../../../assets/images/logo.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import { Container, Button } from "../../../styles/reusableElements.styled";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderTag>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo of Skript" />
        </Link>

        <NavBar />
        <ButtonGroup>
          <Link
            to={
              pathname === "/"
                ? "/register"
                : pathname === "/contact"
                ? "/demo"
                : "/register"
            }
          >
            <Button $variant={pathname === "/contact" ? "outlined" : ""}>
              {pathname === "/about-us"
                ? "Get Started"
                : pathname === "/contact"
                ? "Request Demo"
                : "Register"}
            </Button>
          </Link>

          <Link to="/login">
            <Button $variant={pathname === "/contact" ? "" : "outlined"}>
              Login
            </Button>
          </Link>
        </ButtonGroup>

        <div onClick={handleMenu}>
          <img src={menuIcon} alt="" />
        </div>
        {menu && <MobileNav handleMenu={handleMenu} />}
      </HeaderContainer>
    </HeaderTag>
  );
};

export default Header;

const HeaderTag = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const HeaderContainer = styled(Container)`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:last-of-type {
    ${({ theme }) => theme.breakpoints.up("md")} {
      display: none;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
