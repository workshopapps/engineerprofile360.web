import React from "react";
import styled from "styled-components";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

function Performance() {
  return (
    <>
      <Header />

      <MainContainer>
        <Sidebar />
        <Container>
          <Mycon></Mycon>
        </Container>
      </MainContainer>
    </>
  );
}

export default Performance;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  margin-top: 96px;

  gap: 20px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Mycon = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
