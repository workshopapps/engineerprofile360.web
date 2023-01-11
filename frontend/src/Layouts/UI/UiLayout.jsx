import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles/reusableElements.styled";
import TopBar from "./Partials/TopBar";
import LeftBar from "./Partials/LeftBar";
import moment from "moment";

const UiLayout = () => {
  const [leftBar, setLeftBar] = useState(false);
  const handleLeftBarToggle = () => {
    setLeftBar(!leftBar);
  };

  //Custom Momment Invalid Date Message
  moment.updateLocale("language_code", {
    invalidDate: "Loading",
  });

  return (
    <>
      <TopBar handleLeftBarToggle={handleLeftBarToggle} leftBar={leftBar} />
      <Main as="main">
        <NavBar
          $open={leftBar && document.body.clientWidth <= 960 ? "open" : "close"}
          onClick={handleLeftBarToggle}
        >
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
  padding: ${({ theme }) => theme.spacing(4)} 0;
  width: 100%;
`;

const NavBar = styled.div`
  width: calc(240px + ${({ theme }) => theme.spacing(6)});
  height: 80vh;
  background: #ffffff;
  position: sticky;
  top: calc(80px + ${({ theme }) => theme.spacing(4)});

  ${({ theme }) => theme.breakpoints.down("md")} {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
    top: 80px;
    left: ${(props) => (props.$open === "open" ? "0px" : "-10000px")};
    transition: ease-in 0.5s;
  }
`;

const MainContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
`;
