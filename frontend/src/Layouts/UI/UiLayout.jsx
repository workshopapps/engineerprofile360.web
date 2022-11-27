import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles/reusableElements.styled";
import TopBar from "./Partials/TopBar";
import LeftBar from "./Partials/LeftBar";

const UiLayout = () => {
  return (
    <>
      <TopBar />
      <Main as="main">
        <NavBar>
          <LeftBar />
        </NavBar>
        <MainContent>
          <Outlet />
        </MainContent>
      </Main>
    </>
  );
};

export default UiLayout;

const Main = styled(Container)`
  margin-top: 80px;
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(4)};
`;

const NavBar = styled.div`
  width: 240px;
  height: 80vh;
  background: #ffffff;
  position: sticky;
  top: calc(80px + ${({ theme }) => theme.spacing(4)});

  ${({theme}) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const MainContent = styled.div`
  height: 200vh;
`;
