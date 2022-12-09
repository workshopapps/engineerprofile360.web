import React from "react";
import styled from "styled-components";
import good from "./assets/good.png";
import { Container } from "../../../styles/reusableElements.styled";

function GetToKnow() {
  return (
    <>
      <Header>Get to know what’s included in each plan</Header>
      <Container>
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
      </Container>
    </>
  );
}

export default GetToKnow;

export const Header = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  line-height: 40px;
  color: #323130;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`;

export const ListHeader = styled.p`
  font-size: 18px;
  text-align: start;
  opacity: ${(props) => props.opacity};
  font-weight: Bolder;
  line-height: 24px;
  color: #323130;
  margin: 20px 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
    line-height: 12px;
  }
`;

export const ContentContainer = styled.div`
  height: 20px;
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(4, 2fr);
  gap: 10px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 35px;
    font-size: 12px;
  }
`;
export const Content = styled.p`
  width: 100%;
  font-size: 16px;
  text-align: start;
  font-weight: 400;
  line-height: 23px;
  padding: 23px 0;
  color: #323130;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
    line-height: 12px;
  }
`;
export const ContentImg = styled.img`
  width: 17px;
  height: 12.31px;
`;
export const ContentNum = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #328cc1;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 748px) {
    width: 150px;
    margin: 30px 0;
  }
`;

export const Divider = styled.div`
  margin: 10px 0;
`;
