import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import { Container } from "../../../styles/reusableElements.styled";

const LeftBar = () => {
  return (
    <LeftBarContainer>
      <List>
        <Link to="/">Dashboard</Link>
      </List>
    </LeftBarContainer>
  );
};

export default LeftBar;

const LeftBarContainer = styled.nav`
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: center;
`;
