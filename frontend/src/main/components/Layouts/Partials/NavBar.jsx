import React from "react";
import styled from "styled-components";

import { Container } from "../../../../styles/reusableElements.styled";
import arrowDown from "../../../../assets/icons/arrow-down.svg";

const NavBar = () => {
  return (
    <nav>
      <List>
        <li>Home</li>
        <li>Pricing</li>
        <li>
          Resources
          <img src={arrowDown} alt="" />
        </li>
        <li>
          About <img src={arrowDown} alt="" />
        </li>
      </List>
    </nav>
  );
};

export default NavBar;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  li {
    font-size: 14px;
    color: #000000;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;
