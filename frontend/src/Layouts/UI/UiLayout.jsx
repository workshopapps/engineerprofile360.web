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
    margin-top: 96px;
`;

const NavBar = styled.div`
    width: 240px;
    height: 100vh;
    position: fixed;
    top: 96px;
    background: blue;
`;
const MainContent = styled.div``;
