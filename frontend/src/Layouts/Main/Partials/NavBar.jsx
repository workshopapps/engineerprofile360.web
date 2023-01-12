import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import arrowDown from "../../../assets/icons/arrow-down.svg";

const NavBar = () => {
  return (
    <Nav>
      <List>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
        <Link to="/help-center">
          <li>Support</li>
        </Link>
        <Link to="/about-us">
          <li>About</li>
        </Link>
      </List>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};

  li {
    font-size: 12px;
    color: #000000;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;
