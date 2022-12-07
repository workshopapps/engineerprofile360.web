import React from "react";
import {
  Content,
  ContentContainer,
  ContentImg,
  ContentNum,
  ContentWrapper,
  Header,
  ListHeader,
  MainWrapper,
  WrapperDiv,
  Divider,
} from "./GetToKnow.style";
import good from "../assets/good.png";
function GetToKnow() {
  return (
    <>
      <MainWrapper>
        <Header>Get to know what’s included in each plan</Header>
        <WrapperDiv>
          <Divider>
            <ContentContainer>
              <ListHeader opacity={"0"}>Enterprise plan</ListHeader>
              <ListHeader>Basic plan</ListHeader>
              <ListHeader>Business plan</ListHeader>
              <ListHeader>Enterprise plan</ListHeader>
            </ContentContainer>

            <ContentContainer>
              <ListHeader>Team Overview</ListHeader>
            </ContentContainer>

            <ContentContainer>
              <Content>Team trial</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
            <ContentContainer>
              <Content>Participants per assessment</Content>
              <ContentWrapper>
                <ContentNum>50</ContentNum>
              </ContentWrapper>
              <ContentWrapper>
                <ContentNum>150</ContentNum>
              </ContentWrapper>
              <ContentWrapper>
                <ContentNum>300</ContentNum>{" "}
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Participant capacity</Content>
              <ContentWrapper>
                <ContentNum>100</ContentNum>
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentNum>200</ContentNum>
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentNum>500</ContentNum>
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Customized background</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Live captions</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
          </Divider>

          <Divider>
            <ContentContainer>
              <ListHeader>Chat and collaboration</ListHeader>
            </ContentContainer>

            <ContentContainer>
              <Content>Team trial</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
            <ContentContainer>
              <Content>Participants per assessment</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Participant capacity</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Customized background</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>

            <ContentContainer>
              <Content>Live captions</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
          </Divider>
          <Divider>
            <ContentContainer>
              <ListHeader>Security</ListHeader>
            </ContentContainer>
            <ContentContainer>
              <Content>Team trial</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
            <ContentContainer>
              <Content>Customized background</Content>
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>{" "}
              <ContentWrapper>
                <ContentImg src={good} alt="checkmark" />
              </ContentWrapper>
            </ContentContainer>
          </Divider>
        </WrapperDiv>
      </MainWrapper>
    </>
  );
}

export default GetToKnow;
