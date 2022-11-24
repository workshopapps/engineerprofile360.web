import React from "react";
import {
  Container,
  FirstPage,
  Left,
  Text1,
  Textvs,
  Right,
  SideImg,
} from "./Market.styled";

const Market = () => {
  return (
    <>
      <Container>
        <FirstPage>
          <Left>
            <Text1>Skript</Text1>
            <Textvs>VS</Textvs>
            <Text1>Small Improvement</Text1>
          </Left>
          <Right>
            <SideImg src="../src/assets/images/market-1.svg" alt="" />
          </Right>
        </FirstPage>
      </Container>
    </>
  );
};

export default Market;
