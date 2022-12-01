import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../styles/reusableElements.styled";
import TopBar from "./Partials/TopBar";
import LeftBar from "./Partials/LeftBar";

import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { showErrorToast } from "../../helpers/helper";
import { OverlayLoader } from "../../styles/reusableElements.styled";

const UiLayout = () => {
  const { auth, setAuth, persist } = useAuth();
  const [leftBar, setLeftBar] = useState(false);
  const handleLeftBarToggle = () => {
    setLeftBar(!leftBar);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        // console.log(auth.id);
        const response = await axios.get(`user/${auth.id}`);
        setIsLoading(false);
        // console.log(response);

        const username = response?.data?.data.username;
        const fullName = response?.data?.data.full_name;

        setAuth({
          ...auth, username, fullName
        })
        console.log(auth);
      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          setFetchError(err.response.data.message);
        }
      }
    };

    getDetails();
  }, []);

  return (
    <>
      <TopBar handleLeftBarToggle={handleLeftBarToggle} leftBar={leftBar} />
      <Main as="main">
        <NavBar
          $open={leftBar && document.body.clientWidth <= 960 ? "open" : "close"}
        >
          <LeftBar />
        </NavBar>
        <MainContent>
          <Outlet />
        </MainContent>
      </Main>
      {isLoading ? (
        <OverlayLoader>
          <div></div>
          <span>
            {fetchError != ""
              ? `${fetchError} - Please try again`
              : "Just a moment..."}
          </span>
        </OverlayLoader>
      ) : (
        ""
      )}
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
  transition: ease-in 0.5s;

  ${({ theme }) => theme.breakpoints.down("md")} {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
    top: 80px;
    left: ${(props) => (props.$open === "open" ? "0px" : "-10000px")};
  }
`;

const MainContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
`;
