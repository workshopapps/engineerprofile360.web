import React from "react";
import {
  Content,
  ContentContainer,
  ContentImg,
  ContentNum,
  ContentWrapper,
  Header,
  ListHeader,
  ListHeaderContainer,
  MainWrapper,
  WrapperDiv,
} from "./GetToKnow.style";
import good from "./assets/good.png";
function GetToKnow() {
  return (
    <>
      <MainWrapper>
        <Header>Get to know what’s included in each plan</Header>
        <WrapperDiv>
          <ContentWrapper>
            <ContentContainer>
              <ListHeader></ListHeader>
              <ListHeader>Team Overview</ListHeader>
              <Content>Team trial</Content>
              <Content>Participants per assessment</Content>
              <Content>Participant capacity</Content>
              <Content>Customized background</Content>
              <Content>Live captions</Content>
            </ContentContainer>

            <ContentContainer>
              <ListHeader>Basic plan</ListHeader>
              <ListHeader></ListHeader>

              <ContentImg src={good} alt="checkmark" />
              <ContentNum>50</ContentNum>
              <ContentNum>100</ContentNum>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>

            <ContentContainer>
              <ListHeader>Business plan</ListHeader>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentNum>150</ContentNum>
              <ContentNum>200</ContentNum>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>
            <ContentContainer>
              <ListHeader>Enterprise plan</ListHeader>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentNum>300</ContentNum>
              <ContentNum>500</ContentNum>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>
          </ContentWrapper>
          <ContentWrapper>
            <ContentContainer>
              <ListHeader>Chat and collaboration</ListHeader>
              <Content>Team trial</Content>
              <Content>Participants per assessment</Content>
              <Content>Participant capacity</Content>
              <Content>Customized background</Content>
              <Content>Live captions</Content>
            </ContentContainer>

            <ContentContainer>
              <ListHeader></ListHeader>

              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />

              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>

            <ContentContainer>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>
            <ContentContainer>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />

              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
            </ContentContainer>
          </ContentWrapper>
          <ContentWrapper>
            <ContentContainer>
              <ListHeader>Security</ListHeader>

              <Content>Customized background</Content>
              <Content>Live captions</Content>
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
            </ContentContainer>

            <ContentContainer>
              <ListHeader></ListHeader>

              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
            </ContentContainer>

            <ContentContainer>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
            </ContentContainer>
            <ContentContainer>
              <ListHeader></ListHeader>
              <ContentImg src={good} alt="checkmark" />
              <ContentImg src={good} alt="checkmark" />
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
              <ListHeader></ListHeader>
            </ContentContainer>
          </ContentWrapper>
        </WrapperDiv>
      </MainWrapper>
    </>
  );
}

export default GetToKnow;
