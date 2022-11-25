import React from "react";
import {
  Main,
  Container,
  FirstPage,
  Left,
  Text1,
  Textvs,
  Right,
  SideImg,
  TranSIde,
  DescBelow,
  Line,
  Text,
  Upper,
  SecondPage,
  SPtext,
  UpperSvg,
  LowerSvg,
  ThirdPage,
  How,
  ScriptText,
  Which,
  What,
  Fag,
} from "./Market.styled";
import MarketImg from "../../../assets/images/market.png";
import Side from "../../../assets/images/markey-2.png";
import UpperS from "../../../assets/images/markt3.svg";
import UpperL from "../../../assets/images/mrket4.svg";

const Market = () => {
  console.log(MarketImg);
  return (
    <>
      <Main>
        <Container>
          <FirstPage>
            <Upper>
              <Left>
                <Text1>Skript</Text1>
                <Textvs>VS</Textvs>
                <Text1>Small Improvement</Text1>
              </Left>
              <Right>
                <SideImg src={MarketImg} alt="/" />
              </Right>
            </Upper>
            <TranSIde src={Side} />

            <DescBelow>
              <Line></Line>
              <Text>
                Skript, the solution to all your Engineering review needs: a
                better solution to Small-Improvements.
              </Text>
            </DescBelow>
          </FirstPage>
        </Container>
        <SecondPage>
          <Container>
            <UpperSvg src={UpperS} />
            <SPtext>
              Skript and Small-improvements, are both performance analysis tools
              that cater to companies seeking to make their engineers better.
              Which is the better option to cater to your needs? Here, you can
              see how Skript compares to Small-Improvements, a performance
              review software for mid-sized companies.
            </SPtext>
          </Container>
          <LowerSvg src={UpperL} />
        </SecondPage>
        <ThirdPage>
          <Container>
            <How>
              <ScriptText>How Skript works</ScriptText>
            </How>
            <Which></Which>
            <What></What>
            <Fag></Fag>
          </Container>
        </ThirdPage>
      </Main>
    </>
  );
};

export default Market;
