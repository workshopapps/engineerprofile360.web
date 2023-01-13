import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import menuIcon from "../../../assets/icons/menu.svg";
import { Container, Button } from "../../../styles/reusableElements.styled";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Logo from "../../../components/Logo";

export const getUser = JSON.parse(localStorage.getItem("Eval360"));

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
          <Logo size="sm" />
        </Link>

        <NavBar />
        {getUser ? (
          getUser.roles === 1 ? (
            <ButtonGroup>
              <Link to="/employee/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </ButtonGroup>
          ) : getUser.roles === 2 ? (
            <ButtonGroup>
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </ButtonGroup>
          ) : getUser.roles === 3 ? (
            <ButtonGroup>
              <Link to="/admin/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </ButtonGroup>
          ) : (
            ""
          )
        ) : (
          <ButtonGroup>
            {/* <Link
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
            </Link> */}

            <Link to="/login">
              <Button $variant={pathname === "/contact" ? "" : "outlined"}>
                Login
              </Button>
            </Link>
          </ButtonGroup>
        )}

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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing(14)};

  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: ${({ theme }) => theme.spacing(6)}
      ${({ theme }) => theme.spacing(2)};
  }

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
