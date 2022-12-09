import React from "react";
import styled from "styled-components";

import { Title, Container } from "../../../styles/reusableElements.styled";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <ContentContainer>
          <Title $color="#F3F2F1" $size="72px" $lHeight="76px" $wieght="800">
            Request A Demo
          </Title>
          <p>
            Eval360 assesses engineers, and review their feedback to ascertain
            their work efficiency and performance.
          </p>
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  width: 100%;
  height: 582px;
  background-color: #0e0e52;

  p {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #f3f2f1;
  }

  @media (max-width: 897px) {
    height: 500px;

    p {
      font-size: 20px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 78%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 60px auto;

  @media (max-width: 897px) {
    width: 90%;

    h1 {
      font-size: 52px;
    }
  }
`;
