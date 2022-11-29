import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../assets/images/logo.svg";
import dashboard from "../../../assets/icons/app/dashboard.svg";
import assessment from "../../../assets/icons/app/assessment.svg";
import { Container } from "../../../styles/reusableElements.styled";

const LeftBar = () => {
  return (
    <LeftBarContainer>
      <List>
        <li>
          <Link to="/">
            <img src={dashboard} alt="" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={assessment} alt="" /> Assessment
          </Link>
        </li>
      </List>
    </LeftBarContainer>
  );
};

export default LeftBar;

const LeftBarContainer = styled.nav`
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(3)};
  box-sizing: initial;

  ${({ theme }) => theme.breakpoints.down("md")} { 
    width: 240px;
    background: #FFFFFF;
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  li {
    a {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing(3)};
      font-size: 18px;
      line-height: 24px;
      color: #323130;
      font-weight: 600;
    }
  }
`;
